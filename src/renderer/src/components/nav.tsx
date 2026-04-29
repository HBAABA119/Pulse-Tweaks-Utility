import { invoke } from "@/lib/electron"
import { broom } from "@lucide/lab"
import { clsx } from "clsx"
import {
  Box,
  EthernetPort,
  Folder,
  Home,
  Icon,
  RefreshCw,
  Settings,
  Wrench,
} from "lucide-react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useRestartStore from "../store/restartState"
import DiscordIcon from "./discordicon"
import Button from "./ui/button"
import Modal from "./ui/modal"

const tabIcons = {
  home: <Home size={20} />,
  tweaks: <Wrench size={20} />,
  clean: <Icon iconNode={broom} size={20} />,
  backup: <Folder size={20} />,
  utilities: <Box size={20} />,
  dns: <EthernetPort size={20} />,
  settings: <Settings size={20} />,
}

const tabs = {
  home: { label: "Dashboard", path: "/" },
  tweaks: { label: "Tweaks", path: "/tweaks" },
  utilities: { label: "Utilities", path: "/utilities" },
  clean: { label: "Cleaner", path: "/clean" },
  backup: { label: "Restore Points", path: "/backup" },
  dns: { label: "DNS Manager", path: "/dns" },
  settings: { label: "Settings", path: "/settings" },
}

function Nav({ collapsed }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { needsRestart } = useRestartStore()

  const [showRestartModal, setShowRestartModal] = useState(false)

  const getActiveTab = () => {
    const path = location.pathname
    if (path === "/") return "home"
    const match = Object.entries(tabs).find(([, { path: p }]) => p === path)
    return match ? match[0] : ""
  }

  const activeTab = getActiveTab()

  return (
    <nav
      className={clsx(
        "fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center py-6 z-40 transition-all duration-300 ease-in-out bg-void-card/80 backdrop-blur-xl border border-void-border rounded-2xl shadow-2xl shadow-blue-900/20",
        collapsed ? "w-16 h-[70vh]" : "w-20 h-[85vh]"
      )}
    >
      <div className="flex-1 flex flex-col items-center gap-4 px-2 w-full overflow-y-auto no-scrollbar">
        {Object.entries(tabs).map(([id, { label, path }]) => (
          <button
            key={id}
            onClick={() => navigate(path)}
            title={label}
            className={clsx(
              "flex items-center justify-center p-3 rounded-xl transition-all duration-300 group relative",
              activeTab === id
                ? "bg-void-primary text-white shadow-lg shadow-blue-600/40 scale-110"
                : "text-void-text-secondary hover:bg-void-border hover:text-void-primary"
            )}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {tabIcons[id]}
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-4 px-2 w-full">
        {needsRestart && (
          <button
            className="flex items-center justify-center p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all duration-300"
            onClick={() => setShowRestartModal(true)}
            title="Restart Required"
          >
            <RefreshCw size={20} className="animate-spin-slow" />
          </button>
        )}

        <div className="flex flex-col items-center gap-3">
          <a href="https://discord.gg/D9HJAyZcTp" target="_blank" className="text-void-text-secondary hover:text-void-primary transition-colors">
            <DiscordIcon className="w-5 h-5 fill-current" />
          </a>
        </div>
        <p className="text-[10px] text-void-text-muted font-medium mt-2">V1</p>
      </div>

      <Modal open={showRestartModal} onOpenChange={setShowRestartModal}>
        <div className="bg-void-card p-6 rounded-2xl border border-void-border text-void-text w-[90vw] max-w-md shadow-2xl">
          <h2 className="text-lg font-semibold text-white">Confirm Restart</h2>
          <p className="text-void-text-secondary mt-2">Are you sure you want to restart your computer now? Some changes require a reboot.</p>
          <div className="flex gap-3 justify-end mt-6">
            <Button onClick={() => setShowRestartModal(false)} variant="secondary" className="bg-void-border hover:bg-void-border-secondary text-white border-none">
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowRestartModal(false)
                invoke({ channel: "restart" })
              }}
              variant="danger"
              className="bg-red-600 hover:bg-red-700 text-white border-none"
            >
              Restart Now
            </Button>
          </div>
        </div>
      </Modal>
    </nav>
  )
}

export default Nav
