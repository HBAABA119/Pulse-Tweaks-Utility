import RootDiv from "@/components/rootdiv"
import { useEffect, useState } from "react"
import jsonData from "../../../../package.json"
import { invoke } from "@/lib/electron"
import Button from "@/components/ui/button"
import Modal from "@/components/ui/modal"
import Toggle from "@/components/ui/Toggle"
import { toast } from "react-toastify"
import Card from "@/components/ui/Card"
import { Dropdown } from "@/components/ui/dropdown"

function Settings() {
  const [checking, setChecking] = useState(false)
  const [trayEnabled, setTrayEnabled] = useState(true)
  const [trayLoading, setTrayLoading] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [acknowledgementsOpen, setAcknowledgementsOpen] = useState(false)
  const [defaultPackageManager, setDefaultPackageManager] = useState<"Chocolatey" | "Winget">(
    (localStorage.getItem("defaultPackageManager") as "Chocolatey" | "Winget") || "Winget",
  )

  const checkForUpdates = async () => {
    try {
      setChecking(true)
      const res = await invoke({ channel: "updater:check" })
      if (res?.ok && !res.updateInfo) {
        toast.success("You're up to date")
      } else if (res?.updateInfo) {
        toast.info(`Update available: ${res.updateInfo.version}`)
      }
    } catch (e) {
      toast.error(String(e))
    } finally {
      setChecking(false)
    }
  }

  useEffect(() => {
    invoke({ channel: "tray:get" }).then((status) => setTrayEnabled(status))
  }, [])

  const clearCache = async () => {
    await invoke({ channel: "clear-void-cache" })
    localStorage.removeItem("void:systemInfo")
    localStorage.removeItem("void:tweakInfo")
    toast.success("Void Optimizer cache cleared successfully!")
  }

  const handleToggleTray = async () => {
    setTrayLoading(true)
    const newStatus = !trayEnabled
    await invoke({ channel: "tray:set", payload: newStatus })
    setTrayEnabled(newStatus)
    setTrayLoading(false)
  }

  const handleRestartExplorer = async () => {
    try {
      await invoke({ channel: "restart-explorer" })
      toast.success("Explorer restarted successfully")
    } catch (e) {
      toast.error("Failed to restart explorer: " + String(e))
    }
  }

  return (
    <>
      <Modal open={acknowledgementsOpen} onClose={() => setAcknowledgementsOpen(false)}>
        <div className="bg-void-card border border-void-border rounded-2xl p-8 shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-void-text mb-2">Project Credits & Acknowledgments</h2>
            <div className="w-16 h-1 bg-void-primary rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6 text-void-text-secondary">
            <section>
              <h3 className="text-lg font-semibold text-void-primary mb-3">Core Framework</h3>
              <p className="text-sm leading-relaxed mb-3">
                This project is a specialized fork of Sparkle, an open-source platform for tweaks. We chose Sparkle as our foundation due to its robust architecture and the incredible work put in by the original developers.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                <li><span className="text-void-text font-medium">Original Developers:</span> The team at Parcoil.</li>
                <li><span className="text-void-text font-medium">Source Inspiration:</span> We've integrated several of their core concepts and UI elements, applying custom modifications to align with the Void Esports ecosystem.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-void-primary mb-3">Development & Implementation</h3>
              <p className="text-sm leading-relaxed mb-3">
                The transition from a base framework to the current Verve application involved significant refinement and internal collaboration:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                <li><span className="text-void-text font-medium">Lead Developer:</span> Alex (CTO, Void Esports)</li>
                <li><span className="text-void-text font-medium">Special Thanks:</span> Void Nicholas, for providing the essential support and resources needed to bring this vision to life.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-void-primary mb-3">A Note on Open Source</h3>
              <p className="text-sm leading-relaxed">
                We are firm believers in the power of the open-source community. Giving credit to Parcoil isn't just about acknowledgment—it's about celebrating the collaborative spirit that allows platforms like ours to evolve. We are excited to continue building on this foundation to provide the best possible experience for our users.
              </p>
            </section>
          </div>

          <div className="flex justify-center mt-8">
            <Button onClick={() => setAcknowledgementsOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>

      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <div className="bg-void-card border border-void-border rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">Delete Legacy Backups</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Are you sure you want to delete all legacy registry backups? This will permanently
              remove the{" "}
              <code className="bg-void-border-secondary/20 px-1 py-0.5 rounded-sm text-xs">
                C:\VoidOptimizer\Backup
              </code>{" "}
              folder and all its contents.
            </p>
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setDeleteModalOpen(false)
                invoke({ channel: "delete-old-void-backups" })
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <RootDiv>
        <div className="w-full pb-16">
          <div className="space-y-8 ">
            <SettingSection title="Updates">
              <SettingCard>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-void-text mb-1">
                      Check for Updates
                    </h3>
                    <p className="text-sm text-void-text-secondary">Check for latest version</p>
                  </div>
                  <Button onClick={checkForUpdates} disabled={checking}>
                    {checking ? "Checking..." : "Check for Updates"}
                  </Button>
                </div>
              </SettingCard>
            </SettingSection>
            <SettingSection title="Package Manager">
              <SettingCard>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-void-text mb-1">
                      Default Package Manager
                    </h3>
                    <p className="text-sm text-void-text-secondary">
                      Set the default package manager for installing apps
                    </p>
                  </div>
                  <Dropdown
                    value={defaultPackageManager}
                    options={["Winget", "Chocolatey"]}
                    onChange={(value) => {
                      setDefaultPackageManager(value as "Chocolatey" | "Winget")
                      localStorage.setItem("defaultPackageManager", value)
                    }}
                  />
                </div>
              </SettingCard>
            </SettingSection>
            <SettingSection title="Profile">
              <SettingCard>
                <div className="space-y-4">
                  <h3 className="text-base font-medium text-void-text">User Name</h3>
                  <input
                    type="text"
                    defaultValue={localStorage.getItem("void:user") || ""}
                    onChange={(e) => localStorage.setItem("void:user", e.target.value)}
                    className="w-full bg-void-card border border-void-border rounded-lg px-3 py-2 text-void-text focus:ring-0 focus:outline-none"
                    placeholder="Enter your name"
                  />
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={async () => {
                        const username = await invoke({ channel: "get-user-name" })
                        localStorage.setItem("void:user", username)
                        toast.success("Name reset to system user")
                      }}
                    >
                      Reset to System Name
                    </Button>
                  </div>
                </div>
              </SettingCard>
            </SettingSection>

            <SettingSection title="Data Management">
              <SettingCard>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-void-text mb-1">Legacy Backups</h3>
                    <p className="text-sm text-void-text-secondary">
                      Remove old backup files stored in{" "}
                      <code className="bg-void-border-secondary/20 px-1 py-0.5 rounded-sm text-xs">
                        C:\VoidOptimizer\Backup
                      </code>
                    </p>
                  </div>
                  <Button variant="danger" onClick={() => setDeleteModalOpen(true)}>
                    Delete Backups
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-void-text mb-1">
                      Clear Cache
                    </h3>
                    <p className="text-sm text-void-text-secondary">
                      Remove temporary files/logs Void Optimizer may leave behind.
                    </p>
                  </div>
                  <Button variant="secondary" onClick={clearCache}>
                    Clear Cache
                  </Button>
                  <Button
                    variant="secondary"
                    className="ml-2"
                    onClick={async () => {
                      await invoke({ channel: "open-log-folder" })
                    }}
                  >
                    Open Log Folder
                  </Button>
                </div>
              </SettingCard>
            </SettingSection>

            <SettingSection title="Other">
              <SettingCard>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-void-text mb-1">Show tray icon</h3>
                    <p className="text-sm text-void-text-secondary">
                      Enable or disable Void Optimizer running in the system tray.
                      <span className="inline-flex items-center gap-1 ml-2 text-yellow-500">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                        Requires restart
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Toggle
                      checked={trayEnabled}
                      onChange={handleToggleTray}
                      disabled={trayLoading}
                    />
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        trayEnabled
                          ? "text-green-400 bg-green-400/10"
                          : "text-void-text-secondary bg-void-border-secondary/20"
                      }`}
                    >
                      {trayEnabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                </div>
              </SettingCard>
            </SettingSection>

            <SettingSection title="Troubleshooting">
              <SettingCard>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-void-text mb-1">
                      Restart Explorer
                    </h3>
                    <p className="text-sm text-void-text-secondary">
                      Restarts Windows Explorer and Taskbar. Useful if the taskbar disappears.
                    </p>
                  </div>
                  <Button variant="secondary" onClick={handleRestartExplorer}>
                    Restart Explorer
                  </Button>
                </div>
              </SettingCard>
            </SettingSection>

            <SettingSection title="About">
              <SettingCard>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-void-text mb-1">Void Optimizer</h3>
                    <p className="text-sm text-void-text-secondary">
                      Version {jsonData.version}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="secondary" onClick={() => setAcknowledgementsOpen(true)}>
                      Acknowledgements
                    </Button>
                    <div className="text-right">
                      <p className="text-sm text-void-text-secondary">
                        © {new Date().getFullYear()} Void Team
                      </p>
                    </div>
                  </div>
                </div>
              </SettingCard>
            </SettingSection>
          </div>
        </div>
      </RootDiv>
    </>
  )
}
// this saves alot of time
const SettingCard = ({ children, className = "" }) => (
  <Card className={`p-4 ${className}`}>{children}</Card>
)

const SettingSection = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-void-primary">{title}</h2>
    {children}
  </div>
)
export default Settings
