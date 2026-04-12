import { exec } from "child_process"
import { ipcMain, IpcMainInvokeEvent } from "electron"
import fs from "fs"
import log from "electron-log"

console.log = log.log
console.error = log.error
console.warn = log.warn

function runPowerShell(cmd: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Use single quotes for the command to avoid escaping issues
    const encodedCmd = Buffer.from(cmd, 'utf16le').toString('base64')
    exec(
      `powershell -NoProfile -ExecutionPolicy Bypass -EncodedCommand ${encodedCmd}`,
      { windowsHide: true },
      (err, stdout, stderr) => {
        if (err) return reject(stderr || err.message)
        resolve(stdout)
      },
    )
  })
}

async function changeRestorePointCooldown(): Promise<void> {
  try {
    await runPowerShell(
      "New-ItemProperty -Path 'HKLM:\\Software\\Microsoft\\Windows NT\\CurrentVersion\\SystemRestore' -Name 'SystemRestorePointCreationFrequency' -Value 0 -PropertyType DWord -Force",
    )
  } catch (error) {
    // Registry access may be restricted - this is non-critical
    log.warn("Could not modify restore point cooldown registry setting (insufficient permissions)")
  }
}

function getTimestamp(): string {
  const date = new Date()
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const dd = String(date.getDate()).padStart(2, "0")
  const hh = String(date.getHours()).padStart(2, "0")
  const mi = String(date.getMinutes()).padStart(2, "0")
  const ss = String(date.getSeconds()).padStart(2, "0")
  return `${yyyy}-${mm}-${dd}_${hh}-${mi}-${ss}`
}

interface BackupResult {
  success: boolean
  label?: string
  message?: string
  error?: string
  points?: any[]
}

ipcMain.handle("create-void-restore-point", async (): Promise<BackupResult> => {
  const label = `VoidBackup-${getTimestamp()}`
  try {
    await runPowerShell(`Checkpoint-Computer -Description '${label}' -RestorePointType MODIFY_SETTINGS`)
    await changeRestorePointCooldown()
    return { success: true, label }
  } catch (error: any) {
    console.error(error)
    return { success: false, error: error.message }
  }
})

ipcMain.handle(
  "create-restore-point",
  async (_event: IpcMainInvokeEvent, name?: string): Promise<BackupResult> => {
    try {
      const label = name ? `${name}-${getTimestamp()}` : `ManualRestore-${getTimestamp()}`

      await runPowerShell(`Checkpoint-Computer -Description '${label}' -RestorePointType MODIFY_SETTINGS`)
      await changeRestorePointCooldown()
      return { success: true, label }
    } catch (error: any) {
      console.error(error)
      return { success: false, error: error.message }
    }
  },
)

ipcMain.handle(
  "delete-all-restore-points",
  async (_event: IpcMainInvokeEvent, _sequenceNumber?: number): Promise<BackupResult> => {
    try {
      await runPowerShell(`vssadmin delete shadows /all /quiet`)
      await changeRestorePointCooldown()
      return { success: true }
    } catch (error: any) {
      console.error("Error deleting all restore points:", error)
      return { success: false, error: error.message }
    }
  },
)

ipcMain.handle("get-restore-points", async (): Promise<BackupResult> => {
  try {
    log.info("Fetching restore points...")

    // Check if running as admin first
    const isAdmin = await runPowerShell(
      `([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)`,
    )
    log.info("Running as admin:", isAdmin.trim())

    // Use Get-ComputerRestorePoint with detailed error logging
    const output = await runPowerShell(
      `$ErrorActionPreference = 'Stop'; try { 
        $rp = Get-ComputerRestorePoint 
        if ($rp) {
          $rp | Select-Object Description, SequenceNumber, CreationTime, RestorePointType | ConvertTo-Json -Depth 3
        } else {
          Write-Output '[]'
        }
      } catch {
        Write-Output "ERROR: $_"
      }`,
    )

    log.info("Raw restore points output:", output?.substring(0, 200) || "empty")

    await changeRestorePointCooldown()

    let points: any[] = []
    try {
      // Check if output is an error message
      if (output.includes("ERROR:")) {
        log.warn("PowerShell returned error:", output)
        points = []
      } else {
        const parsed = JSON.parse(output)
        if (Array.isArray(parsed)) {
          points = parsed
        } else if (parsed && typeof parsed === "object") {
          points = [parsed]
        }
      }
    } catch (parseError) {
      log.error("Failed to parse restore points JSON:", parseError)
      log.error("Output was:", output)
      points = []
    }

    log.info(`Found ${points.length} restore points`)
    return { success: true, points }
  } catch (error: any) {
    log.error("Error fetching restore points:", error)
    return { success: true, points: [] }
  }
})

ipcMain.handle(
  "restore-restore-point",
  async (_event: IpcMainInvokeEvent, sequenceNumber: number): Promise<BackupResult> => {
    try {
      await runPowerShell(`Restore-Computer -RestorePoint ${sequenceNumber}`)
      await changeRestorePointCooldown()
      return { success: true }
    } catch (error: any) {
      console.error(error)
      return { success: false, error: error.message }
    }
  },
)

ipcMain.handle("delete-old-void-backups", async (): Promise<BackupResult> => {
  return new Promise((resolve, reject) => {
    const voidRoot = `C:\\VoidOptimizer`
    if (!fs.existsSync(voidRoot)) {
      return resolve({ success: true, message: "VoidOptimizer folder does not exist" })
    }

    fs.rm(voidRoot, { recursive: true, force: true }, (err) => {
      if (err) return reject(err)
      resolve({ success: true, message: "VoidOptimizer folder deleted" })
    })
  })
})
