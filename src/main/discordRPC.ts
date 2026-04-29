import { Client } from "discord-rpc"
import log from "electron-log"

console.log = log.log
console.error = log.error

const CLIENT_ID = "1498882784880754728" // Pulse Tweaks Discord app

let rpc: Client | null = null
let startTimestamp: number = Date.now()
let currentPage: string = "Home"
let appliedTweaksCount: number = 0
let isConnected: boolean = false

const pageNames: Record<string, string> = {
  "/": "Home",
  "/tweaks": "Tweaks",
  "/clean": "System Cleaner",
  "/backup": "Backup",
  "/utilities": "Utilities",
  "/dns": "DNS Settings",
  "/apps": "Apps",
  "/settings": "Settings",
}

async function connect(): Promise<void> {
  if (rpc) return

  rpc = new Client({ transport: "ipc" })

  rpc.on("ready", () => {
    console.log("[Discord RPC]: Connected")
    isConnected = true
    updateActivity()
  })

  rpc.on("disconnected", () => {
    console.log("[Discord RPC]: Disconnected")
    isConnected = false
    rpc = null
  })

  try {
    await rpc.login({ clientId: CLIENT_ID })
  } catch (error) {
    // console.error("[Discord RPC]: Failed to connect", error)
    rpc = null
    isConnected = false
    // Retry in 15 seconds if failed
    setTimeout(connect, 15000)
  }
}

function disconnect(): void {
  if (rpc) {
    rpc.destroy()
    rpc = null
    isConnected = false
    console.log("[Discord RPC]: Disconnected manually")
  }
}

function updateActivity(): void {
  if (!rpc || !isConnected) return

  const activity: any = {
    details: `Browsing ${currentPage}`,
    state: appliedTweaksCount > 0 ? `${appliedTweaksCount} tweaks applied` : "No tweaks applied",
    startTimestamp,
    largeImageKey: "pulse-logo",
    largeImageText: "Pulse Tweaks Utility",
    smallImageKey: "settings",
    smallImageText: "Optimizing PC",
    instance: false,
  }

  // Add buttons
  activity.buttons = [
    { label: "Join the Discord Server", url: "https://discord.gg/D9HJAyZcTp" },
  ]

  rpc.setActivity(activity).catch((err) => {
    console.error("[Discord RPC]: Failed to set activity", err)
  })
}

export function setPage(page: string): void {
  currentPage = pageNames[page] || page
  updateActivity()
}

export function setTweakCount(count: number): void {
  appliedTweaksCount = count
  updateActivity()
}

export function tweakApplied(tweakName: string): void {
  if (!rpc || !isConnected) return

  const activity: any = {
    details: `Applied: ${tweakName}`,
    state: `${appliedTweaksCount + 1} tweaks applied`,
    startTimestamp,
    largeImageKey: "pulse-logo",
    largeImageText: "Pulse Tweaks Utility",
    smallImageKey: "check",
    smallImageText: "Tweak Applied",
    instance: false,
  }

  activity.buttons = [
    { label: "Join the Discord Server", url: "https://discord.gg/D9HJAyZcTp" },
  ]

  rpc.setActivity(activity).catch((err) => {
    console.error("[Discord RPC]: Failed to set activity", err)
  })

  // Update count and revert to normal after 5 seconds
  appliedTweaksCount++
  setTimeout(() => {
    updateActivity()
  }, 5000)
}

export function tweakUnapplied(tweakName: string): void {
  if (!rpc || !isConnected) return

  const activity: any = {
    details: `Unapplied: ${tweakName}`,
    state: `${Math.max(0, appliedTweaksCount - 1)} tweaks applied`,
    startTimestamp,
    largeImageKey: "pulse-logo",
    largeImageText: "Pulse Tweaks Utility",
    smallImageKey: "remove",
    smallImageText: "Tweak Removed",
    instance: false,
  }

  activity.buttons = [
    { label: "Join the Discord Server", url: "https://discord.gg/D9HJAyZcTp" },
  ]

  rpc.setActivity(activity).catch((err) => {
    console.error("[Discord RPC]: Failed to set activity", err)
  })

  // Update count and revert to normal after 5 seconds
  appliedTweaksCount = Math.max(0, appliedTweaksCount - 1)
  setTimeout(() => {
    updateActivity()
  }, 5000)
}

export function initDiscordRPC(): void {
  connect()
}

export function cleanupDiscordRPC(): void {
  disconnect()
}

export function getConnectionStatus(): boolean {
  return isConnected
}
