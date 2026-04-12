import { Menu, Minus, Square, X } from "lucide-react"
import { close, minimize, toggleMaximize } from "../lib/electron"
import sparkleLogo from "../../../../resources/sparklelogo.png"

interface TitleBarProps {
  onToggleSidebar: () => void
  sidebarCollapsed: boolean
}

function TitleBar({
  onToggleSidebar,
  sidebarCollapsed: _sidebarCollapsed,
}: TitleBarProps): React.ReactElement {
  return (
    <div
      style={{ WebkitAppRegion: "drag" } as any}
      className="h-[60px] fixed top-0 left-0 right-0 flex justify-between items-center px-6 bg-transparent z-50 pointer-events-none"
    >
      <div className="flex items-center gap-4 h-full pointer-events-auto">
        <div className="flex items-center gap-3 bg-void-card/60 backdrop-blur-md border border-void-border px-4 py-2 rounded-2xl">
          <button
            onClick={onToggleSidebar}
            className="h-8 w-8 inline-flex items-center justify-center text-void-text-secondary hover:bg-void-primary/20 hover:text-void-primary transition-all rounded-xl"
            style={{ WebkitAppRegion: "no-drag" } as any}
          >
            <Menu size={18} />
          </button>
          <div className="flex items-center gap-2">
            <img src={sparkleLogo} alt="Void Optimizer" className="h-6 w-6" />
            <span className="text-white text-base font-bold tracking-tight">Void Optimizer</span>
          </div>
          <div className="bg-void-primary/20 border border-void-primary/30 px-2 py-0.5 rounded-lg text-[10px] font-bold text-void-primary uppercase tracking-wider">
            Beta
          </div>
        </div>
      </div>

      <div className="flex gap-2 pointer-events-auto bg-void-card/60 backdrop-blur-md border border-void-border p-1.5 rounded-2xl" style={{ WebkitAppRegion: "no-drag" } as any}>
        <button
          onClick={minimize}
          className="h-8 w-10 inline-flex items-center justify-center text-void-text-secondary hover:bg-void-border-secondary hover:text-white transition-all rounded-xl"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={toggleMaximize}
          className="h-8 w-10 inline-flex items-center justify-center text-void-text-secondary hover:bg-void-border-secondary hover:text-white transition-all rounded-xl"
        >
          <Square size={14} />
        </button>
        <button
          onClick={close}
          className="h-8 w-10 inline-flex items-center justify-center text-void-text-secondary hover:bg-red-600/20 hover:text-red-500 transition-all rounded-xl"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}

export default TitleBar
