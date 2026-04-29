import Button from "@/components/ui/button"
import Toggle from "@/components/ui/Toggle"
import { useState, useEffect } from "react"
import { invoke } from "@/lib/electron"
import RootDiv from "@/components/rootdiv"
import { RefreshCw, Icon, FolderOpen, Trash2, HardDrive } from "lucide-react"
import { broom } from "@lucide/lab"
import { toast } from "react-toastify"
import log from "electron-log/renderer"
import Card from "@/components/ui/Card"

const cleanups = [
  {
    id: "temp",
    label: "Temporary Files",
    description: "System and user temporary files",
    icon: <FolderOpen className="text-teal-400" size={20} />,
    color: "teal",
    sizeScript: `
      $systemTemp = "$env:SystemRoot\\Temp"
      $userTemp = [System.IO.Path]::GetTempPath()
      $foldersToCheck = @($systemTemp, $userTemp)
      $totalSize = 0
      
      foreach ($folder in $foldersToCheck) {
          if (Test-Path $folder) {
              $folderSize = (Get-ChildItem -Path $folder -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
              $totalSize += if ($folderSize) { $folderSize } else { 0 }
          }
      }
      Write-Output $totalSize
    `,
    script: `
      $systemTemp = "$env:SystemRoot\\Temp"
      $userTemp = [System.IO.Path]::GetTempPath()
      $foldersToClean = @($systemTemp, $userTemp)
      $totalSizeBefore = 0
      
      foreach ($folder in $foldersToClean) {
          if (Test-Path $folder) {
              $folderSize = (Get-ChildItem -Path $folder -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
              $totalSizeBefore += if ($folderSize) { $folderSize } else { 0 }
              Get-ChildItem -Path $folder -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
          }
      }
      Write-Output $totalSizeBefore
    `,
  },
  {
    id: "prefetch",
    label: "Prefetch Files",
    description: "Windows Prefetch folder",
    icon: <HardDrive className="text-blue-400" size={20} />,
    color: "blue",
    sizeScript: `
      $prefetch = "$env:SystemRoot\\Prefetch"
      $totalSize = 0
      if (Test-Path $prefetch) {
          $totalSize = (Get-ChildItem -Path "$prefetch\\*" -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
      }
      Write-Output $totalSize
    `,
    script: `
      $prefetch = "$env:SystemRoot\\Prefetch"
      $totalSizeBefore = 0
      if (Test-Path $prefetch) {
          $totalSizeBefore = (Get-ChildItem -Path "$prefetch\\*" -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
          Remove-Item "$prefetch\\*" -Force -Recurse -ErrorAction SilentlyContinue
      }
      Write-Output $totalSizeBefore
    `,
  },
  {
    id: "recyclebin",
    label: "Recycle Bin",
    description: "Permanently remove deleted files",
    icon: <Trash2 className="text-red-400" size={20} />,
    color: "red",
    dangerous: true,
    sizeScript: `
      $recycleBinSize = 0
      try {
          $shell = New-Object -ComObject Shell.Application
          $recycleBin = $shell.Namespace(0xA)
          $recycleBinSize = ($recycleBin.Items() | Measure-Object -Property Size -Sum).Sum
      } catch {}
      Write-Output $recycleBinSize
    `,
    script: `
      $recycleBinSize = 0
      $shell = New-Object -ComObject Shell.Application
      $recycleBin = $shell.Namespace(0xA)
      $recycleBinSize = ($recycleBin.Items() | Measure-Object -Property Size -Sum).Sum
      Clear-RecycleBin -Force -ErrorAction SilentlyContinue
      Write-Output $recycleBinSize
    `,
  },
  {
    id: "windows-update",
    label: "Windows Update Cache",
    description: "Downloaded Windows Update files",
    icon: <HardDrive className="text-blue-400" size={20} />,
    color: "blue",
    sizeScript: `
      $windowsUpdateDownload = "$env:SystemRoot\\SoftwareDistribution\\Download"
      $totalSize = 0
      if (Test-Path $windowsUpdateDownload) {
          $totalSize = (Get-ChildItem -Path "$windowsUpdateDownload\\*" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
      }
      Write-Output $totalSize
    `,
    script: `
      $windowsUpdateDownload = "$env:SystemRoot\\SoftwareDistribution\\Download"
      $totalSizeBefore = 0
      if (Test-Path $windowsUpdateDownload) {
          $totalSizeBefore = (Get-ChildItem -Path "$windowsUpdateDownload\\*" -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
          Remove-Item "$windowsUpdateDownload\\*" -Force -Recurse -ErrorAction SilentlyContinue
      }
      Write-Output $totalSizeBefore
    `,
  },
  {
    id: "thumbnails",
    label: "Thumbnail Cache",
    description: "Cached File Explorer thumbnails",
    icon: <FolderOpen className="text-orange-400" size={20} />,
    color: "orange",
    sizeScript: `
      $thumbCache = "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer"
      $totalSize = 0
      $thumbFiles = Get-ChildItem "$thumbCache\\thumbcache_*.db" -ErrorAction SilentlyContinue
      if ($thumbFiles) {
          $totalSize = ($thumbFiles | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
      }
      Write-Output $totalSize
    `,
    script: `
      $thumbCache = "$env:LOCALAPPDATA\\Microsoft\\Windows\\Explorer"
      $totalSizeBefore = 0
      $thumbFiles = Get-ChildItem "$thumbCache\\thumbcache_*.db" -ErrorAction SilentlyContinue
      if ($thumbFiles) {
          $totalSizeBefore = ($thumbFiles | Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
          Remove-Item "$thumbCache\\thumbcache_*.db" -Force -ErrorAction SilentlyContinue
      }
      Write-Output $totalSizeBefore
    `,
  },
]

function Clean() {
  const [selected, setSelected] = useState<string[]>([])
  const [loadingQueue, setLoadingQueue] = useState<string[]>([])
  const [lastClean, setLastClean] = useState(
    localStorage.getItem("last-clean") || "Not cleaned yet.",
  )
  const [isCleaning, setIsCleaning] = useState(false)
  const [cleanupResults, setCleanupResults] = useState({})
  const [folderSizes, setFolderSizes] = useState<Record<string, number>>({})
  const [isLoadingSizes, setIsLoadingSizes] = useState(false)

  const toggleCleanup = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const formatBytes = (bytes: number | null | undefined) => {
    if (bytes === 0 || !bytes) return "0 B"
    const sizes = ["B", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
  }

  // Calculate folder sizes on component mount
  useEffect(() => {
    const calculateSizes = async () => {
      setIsLoadingSizes(true)
      const sizes: Record<string, number> = {}
      
      for (const cleanup of cleanups) {
        if (cleanup.sizeScript) {
          try {
            const result = await invoke({
              channel: "run-powershell",
              payload: { script: cleanup.sizeScript, name: `size-${cleanup.id}` },
            })
            const size = parseInt(result?.output?.trim() || "0", 10) || 0
            sizes[cleanup.id] = size
          } catch (err) {
            log.error(`Failed to get size for ${cleanup.id}:`, err)
            sizes[cleanup.id] = 0
          }
        }
      }
      
      setFolderSizes(sizes)
      setIsLoadingSizes(false)
    }
    
    calculateSizes()
  }, [])

  const getTotalSelectedSize = () => {
    return selected.reduce((total, id) => {
      return total + (folderSizes[id] || 0)
    }, 0)
  }

  async function runSelectedCleanups() {
    setIsCleaning(true)
    setLoadingQueue([])
    setCleanupResults({})
    let anySuccess = false
    let newResults = {}

    for (const cleanup of cleanups) {
      if (!selected.includes(cleanup.id)) continue
      setLoadingQueue((q) => [...q, cleanup.id])
      const toastId = toast.loading(`Running ${cleanup.label}...`)
      try {
        const result = await invoke({
          channel: "run-powershell",
          payload: { script: cleanup.script, name: `cleanup-${cleanup.id}` },
        })

        const resultStr = result?.output || "0"
        const freedSpace = parseInt(resultStr.trim(), 10) || 0
        newResults[cleanup.id] = freedSpace

        toast.update(toastId, {
          render: `${cleanup.label} completed! ${formatBytes(freedSpace)} cleared.`,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        })
        anySuccess = true
      } catch (err: any) {
        toast.update(toastId, {
          render: `Failed: ${err.message || err}`,
          type: "error",
          isLoading: false,
          autoClose: 4000,
        })
        log.error(`Failed to run ${cleanup.id} cleanup: ${err.message || err}`)
      }
    }

    if (anySuccess) {
      const now = new Date().toLocaleString()
      setLastClean(now)
      localStorage.setItem("last-clean", now)
      setCleanupResults(newResults)
    }

    setLoadingQueue([])
    setIsCleaning(false)
  }

  const selectedCount = selected.length
  const totalSelectedSize = getTotalSelectedSize()

  return (
    <RootDiv>
      <div className="flex flex-col gap-6">
        {/* Header Card with Clean Button at Top */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10">
              <Icon iconNode={broom} className="text-teal-400" size={32} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-void-text mb-2">System Cleanup</h2>
              <p className="text-sm text-void-text-secondary mb-4">
                Last cleaned: <span className="font-medium text-void-text">{lastClean}</span>
              </p>
              
              {/* Clean Button moved to top */}
              <div className="flex items-center gap-4 flex-wrap">
                <Button
                  onClick={runSelectedCleanups}
                  disabled={isCleaning || selectedCount === 0}
                  size="lg"
                  variant="primary"
                  className="flex items-center justify-center gap-2 font-semibold px-6"
                >
                  {isCleaning ? (
                    <>
                      <RefreshCw className="animate-spin" size={18} />
                      <span>Cleaning...</span>
                    </>
                  ) : (
                    <>
                      <Icon iconNode={broom} size={18} />
                      <span>Clean {selectedCount > 0 ? `${selectedCount} Items` : "Selected"}</span>
                    </>
                  )}
                </Button>
                
                {selectedCount > 0 && !isCleaning && (
                  <div className="text-sm text-void-text-secondary">
                    <span className="text-teal-400 font-semibold">{formatBytes(totalSelectedSize)}</span> will be freed
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Cleanup Items Grid */}
        <div className="grid gap-4">
          {cleanups.map(({ id, label, description, icon, dangerous }) => {
            const isSelected = selected.includes(id)
            const size = folderSizes[id]
            const isLoading = isLoadingSizes && size === undefined
            const hasCleaned = cleanupResults[id] !== undefined
            
            return (
              <Card 
                key={id} 
                className={`relative p-4 transition-all duration-200 ${isSelected ? "ring-2 ring-teal-500/50 bg-teal-500/5" : ""} ${dangerous ? "border-red-500/20" : ""}`}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${dangerous ? "bg-red-500/10" : "bg-void-border/50"}`}>
                    {isLoading ? (
                      <RefreshCw className="animate-spin text-void-text-secondary" size={20} />
                    ) : (
                      icon
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-base font-semibold truncate ${dangerous ? "text-red-400" : "text-void-text"}`}>
                        {label}
                      </span>
                      {dangerous && (
                        <span className="text-xs bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full">
                          Dangerous
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-void-text-secondary truncate">
                      {description}
                    </p>
                    
                    {/* Folder Size Display */}
                    <div className="mt-2 flex items-center gap-2">
                      {hasCleaned ? (
                        <span className="text-xs text-teal-400 font-medium">
                          {formatBytes(cleanupResults[id])} cleared
                        </span>
                      ) : isLoading ? (
                        <span className="text-xs text-void-text-muted">Calculating size...</span>
                      ) : size !== undefined && size > 0 ? (
                        <span className="text-xs text-teal-400 font-medium">
                          {formatBytes(size)} can be freed
                        </span>
                      ) : (
                        <span className="text-xs text-void-text-muted">Nothing to clean</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Toggle */}
                  <div className="shrink-0">
                    <Toggle
                      checked={isSelected}
                      onChange={() => toggleCleanup(id)}
                      disabled={isCleaning || (size === 0 && !hasCleaned)}
                    />
                  </div>
                </div>
                
                {/* Loading Overlay */}
                {loadingQueue.includes(id) && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 rounded-xl bg-void-card/80 backdrop-blur-sm">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-void-border border border-void-border-secondary">
                      <RefreshCw className="animate-spin text-teal-400" size={18} />
                      <span className="text-sm font-medium text-teal-400">Cleaning...</span>
                    </div>
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        {/* Total Summary */}
        {!isCleaning && selectedCount > 0 && (
          <Card className="p-4 bg-gradient-to-r from-teal-500/10 to-cyan-500/5 border-teal-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-500/20">
                  <Icon iconNode={broom} className="text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-void-text">
                    {selectedCount} item{selectedCount !== 1 ? "s" : ""} selected
                  </p>
                  <p className="text-xs text-void-text-secondary">
                    Ready to free up space
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-teal-400">{formatBytes(totalSelectedSize)}</p>
                <p className="text-xs text-void-text-secondary">will be freed</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </RootDiv>
  )
}

export default Clean
