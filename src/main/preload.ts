import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electron", {
  minimize: (): void => ipcRenderer.send("window-minimize"),
  toggleMaximize: (): void => ipcRenderer.send("window-toggle-maximize"),
  close: (): void => ipcRenderer.send("window-close"),
  invoke: (channel: string, data?: any): Promise<any> => ipcRenderer.invoke(channel, data),
})

// Type augmentation for window.electron
declare global {
  interface Window {
    electron: {
      minimize: () => void;
      toggleMaximize: () => void;
      close: () => void;
      invoke: (channel: string, data?: any) => Promise<any>;
    }
  }
}
