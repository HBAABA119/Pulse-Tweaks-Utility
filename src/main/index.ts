import { app, shell, BrowserWindow, ipcMain, Menu } from "electron"
import path, { join } from "path"
import fs from "fs"
import { electronApp, optimizer, is } from "@electron-toolkit/utils"
import log from "electron-log"
import { exec } from "child_process"
import "./system"
import "./powershell"

import "./tweakHandler"
import "./dnsHandler"
import "./backup"
import { createTray } from "./tray"
import { setupTweaksHandlers } from "./tweakHandler"
import { setupDNSHandlers } from "./dnsHandler"
import Store from "electron-store"

import { initAutoUpdater } from "./updates.js"
import { initDiscordRPC, cleanupDiscordRPC, setPage, setTweakCount, tweakApplied, tweakUnapplied } from "./discordRPC"

console.log = log.log
console.error = log.error
console.warn = log.warn

export const logo = "[Pulse Tweaks]:"
log.initialize()

const store = new Store()

// Check if running as admin
let isAdmin = false
const checkAdmin = () => {
  exec('net session', (error) => {
    isAdmin = !error
    if (!isAdmin) {
      log.warn("Not running as admin - some features may not work")
    } else {
      log.info("Running with admin privileges")
    }
  })
}

let trayInstance: any = null
if (store.get("showTray") === undefined) {
  store.set("showTray", true)
}

// Check for admin rights on startup
checkAdmin()

ipcMain.handle("tray:get", () => {
  return store.get("showTray")
})
ipcMain.handle("tray:set", (_event: Electron.IpcMainInvokeEvent, value: boolean) => {
  store.set("showTray", value)
  if (mainWindow) {
    if (value) {
      if (!trayInstance) {
        trayInstance = createTray(mainWindow)
      }
    } else {
      if (trayInstance) {
        trayInstance.destroy()
        trayInstance = null
      }
    }
  }
  return store.get("showTray")
})

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

export let mainWindow: BrowserWindow | null = null

function createWindow(): void {
  console.log("[Pulse Tweaks]: createWindow called")
  console.log("[Pulse Tweaks]: __dirname =", __dirname)
  console.log("[Pulse Tweaks]: icon path =", path.join(__dirname, "../../resources/Pulse-Tweaks-Logo.ico"))
  console.log("[Pulse Tweaks]: preload path =", join(__dirname, "../preload/index.js"))
  console.log("[Pulse Tweaks]: renderer path =", join(__dirname, "../renderer/index.html"))

  try {
    mainWindow = new BrowserWindow({
      width: 1380,
      backgroundColor: "#0c121f",
      height: 760,
      // minWidth: 1380,
      // minHeight: 760,
      minWidth: 790,
      center: true,
      frame: false,
      show: false,
      autoHideMenuBar: true,
      icon: path.join(__dirname, "../../resources/Pulse-Tweaks-Logo.ico"),
      webPreferences: {
        preload: join(__dirname, "../preload/index.js"),
        devTools: app.isPackaged ? false : true,
        sandbox: false,
      },
    })
    mainWindow.setMenuBarVisibility(false)
    mainWindow.removeMenu()
    console.log("[Pulse Tweaks]: BrowserWindow created")
  } catch (err: any) {
    console.error("[Pulse Tweaks]: BrowserWindow creation failed:", err)
    throw err
  }

  mainWindow.webContents.setWindowOpenHandler((details: Electron.HandlerDetails) => {
    shell.openExternal(details.url)
    return { action: "deny" }
  })

  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    console.log("[Pulse Tweaks]: Loading renderer from URL:", process.env["ELECTRON_RENDERER_URL"])
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"])
  } else {
    console.log("[Pulse Tweaks]: Loading renderer from file")
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"))
  }

  mainWindow.once("ready-to-show", () => {
    console.log("[Pulse Tweaks]: Window ready to show")
    mainWindow!.show()
  })

  mainWindow.webContents.on(
    "did-fail-load",
    (_event: Electron.Event, errorCode: number, errorDescription: string) => {
      console.error("[Pulse Tweaks]: Renderer failed to load:", errorCode, errorDescription)
    },
  )
}

app
  .whenReady()
  .then(() => {
    console.log("[Pulse Tweaks]: App ready, creating window...")
    try {
      createWindow()
      console.log("[Pulse Tweaks]: Window created successfully")
    } catch (err: any) {
      console.error("[Pulse Tweaks]: createWindow failed:", err)
    }
    initAutoUpdater(() => mainWindow)
    console.log("[Pulse Tweaks]: Auto updater initialized")
    initDiscordRPC()
    console.log("[Pulse Tweaks]: Discord RPC initialized")
    if (store.get("showTray")) {
      console.log("[Pulse Tweaks]: Creating tray...")
      setTimeout(() => {
        try {
          trayInstance = createTray(mainWindow!)
          console.log("[Pulse Tweaks]: Tray created")
        } catch (err: any) {
          console.error("[Pulse Tweaks]: Tray creation failed:", err)
        }
      }, 50)
    }
    setTimeout(() => {
      setupTweaksHandlers()
      setupDNSHandlers()

      // Add docs loading handler
      ipcMain.handle("docs:load", async (_event, tweakId: string) => {
        try {
          const docsPath = path.join(__dirname, "../../docs/docs/tweaks", `${tweakId}.md`)
          if (fs.existsSync(docsPath)) {
            const content = fs.readFileSync(docsPath, "utf8")
            return { success: true, content }
          }
          return { success: false, error: "Documentation not found" }
        } catch (error) {
          console.error("Error loading docs:", error)
          return { success: false, error: String(error) }
        }
      })

      console.log("[Pulse Tweaks]: Handlers setup complete")
    }, 0)

    electronApp.setAppUserModelId("com.hbaaba119.pulse-tweaks")

    // Disable the application menu
    Menu.setApplicationMenu(null)

    app.on("browser-window-created", (_, window: BrowserWindow) => {
      optimizer.watchWindowShortcuts(window)
    })

    ipcMain.on("window-minimize", () => {
      if (mainWindow) mainWindow.minimize()
    })

    ipcMain.on("window-toggle-maximize", () => {
      if (mainWindow) {
        if (mainWindow.isMaximized()) {
          mainWindow.unmaximize()
        } else {
          mainWindow.maximize()
        }
      }
    })

    ipcMain.on("window-close", () => {
      if (mainWindow) {
        if (store.get("showTray")) {
          mainWindow.hide()
        } else {
          app.quit()
        }
      }
    })

    // Discord RPC handlers
    ipcMain.on("discord:page-change", (_event, page: string) => {
      setPage(page)
    })

    ipcMain.on("discord:tweak-count", (_event, count: number) => {
      setTweakCount(count)
    })

    ipcMain.on("discord:tweak-applied", (_event, tweakName: string) => {
      tweakApplied(tweakName)
    })

    ipcMain.on("discord:tweak-unapplied", (_event, tweakName: string) => {
      tweakUnapplied(tweakName)
    })

    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    app.on("before-quit", () => {
      cleanupDiscordRPC()
    })
  })
  .catch((err: any) => {
    console.error("[Pulse Tweaks]: app.whenReady failed:", err)
  })
