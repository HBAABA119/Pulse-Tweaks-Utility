import { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { clsx } from "clsx"
import TitleBar from "./components/titlebar"
import Nav from "./components/nav"
import "./app.css"
import { ToastContainer, Slide } from "react-toastify"
import Home from "./pages/Home"
import Tweaks from "./pages/Tweaks"
import Clean from "./pages/Clean"
import Apps from "./pages/Apps"
import Utilities from "./pages/Utilities"
import DNS from "./pages/DNS"
import Settings from "./pages/Settings"
import Backup from "./pages/Backup"
import FirstTime from "./components/firsttime"
import UpdateManager from "./components/updatemanager"
import { useDiscordRPC } from "./hooks/useDiscordRPC"

function App() {
  useDiscordRPC() // Initialize Discord RPC page tracking

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true",
  )
  useEffect(() => {
    const applyTheme = (theme) => {
      document.body.classList.remove("light", "purple", "dark", "gray", "classic")
      if (theme === "system" || !theme) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        document.body.classList.add(systemTheme)
        document.body.setAttribute("data-theme", systemTheme)
      } else {
        document.body.classList.add(theme)
        document.body.setAttribute("data-theme", theme)
      }
    }

    applyTheme(theme)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = () => {
      if ((localStorage.getItem("theme") || "system") === "system") applyTheme("system")
    }

    const handleStorageChange = (e) => {
      if (e.key === "theme") setTheme(e.newValue || "system")
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)
    window.addEventListener("storage", handleStorageChange)

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [theme])

  const toggleSidebar = () => {
    const newCollapsed = !sidebarCollapsed
    setSidebarCollapsed(newCollapsed)
    localStorage.setItem("sidebarCollapsed", newCollapsed.toString())
  }

  return (
    <div className="flex flex-col h-screen bg-void-bg text-void-text overflow-hidden font-sans">
      <FirstTime />
      <TitleBar onToggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
      
      <div className="flex flex-1 relative overflow-hidden">
        <Nav collapsed={sidebarCollapsed} />
        
        <main
          className={clsx(
            "flex-1 m-4 mt-[70px] rounded-3xl border border-void-border bg-void-card/30 backdrop-blur-sm overflow-y-auto no-scrollbar transition-all duration-500 ease-in-out shadow-2xl",
            sidebarCollapsed ? "ml-24" : "ml-28"
          )}
        >
          <div className="p-8 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tweaks" element={<Tweaks />} />
              <Route path="/clean" element={<Clean />} />
              <Route path="/backup" element={<Backup />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/dns" element={<DNS />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
      
      <UpdateManager />
      <ToastContainer
        stacked
        limit={5}
        position="bottom-right"
        theme="dark"
        transition={Slide}
        hideProgressBar
        pauseOnFocusLoss={false}
        toastClassName="bg-void-card border border-void-border rounded-2xl shadow-2xl"
      />
    </div>
  )
}

export default App
