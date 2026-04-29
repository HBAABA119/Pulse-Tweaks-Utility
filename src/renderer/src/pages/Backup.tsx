import { useEffect, useState } from "react"
import { RefreshCw, PlusCircle, Shield, RotateCcw, Loader2, Search, Undo2, Wrench } from "lucide-react"
import RootDiv from "@/components/rootdiv"
import { invoke } from "@/lib/electron"
import Button from "@/components/ui/button"
import Modal from "@/components/ui/modal"
import { toast } from "react-toastify"
import { Trash } from "lucide-react"
import log from "electron-log/renderer"
import { LargeInput } from "@/components/ui/input"
import Card from "@/components/ui/Card"

export default function RestorePointManager() {
  const [restorePoints, setRestorePoints] = useState<RestorePointList>([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    type: string | null
    restorePoint: any | null
  }>({
    isOpen: false,
    type: null,
    restorePoint: null,
  })

  type RestorePoint = {
    SequenceNumber: number
    Description: string
    CreationTime: string
    EventType: number
    RestorePointType: number
  }

  type RestorePointList = RestorePoint[]

  const [customModalOpen, setCustomModalOpen] = useState(false)
  const [customName, setCustomName] = useState("")
  const [deleteConfirmModalOpen, setDeleteConfirmModalOpen] = useState(false)

  type Tweak = {
    name: string
    title: string
    category?: string
  }

  const [tweaks, setTweaks] = useState<Tweak[]>([])
  const [appliedTweaks, setAppliedTweaks] = useState<Set<string>>(new Set())
  const [tweakProcessing, setTweakProcessing] = useState<string | null>(null)

  const fetchRestorePoints = async () => {
    setLoading(true)
    try {
      const response = await invoke({ channel: "get-restore-points" })
      if (response.success && Array.isArray(response.points)) {
        const sorted = response.points.sort((a, b) => {
          const parse = (str: string) =>
            new Date(
              `${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(6, 8)}T${str.slice(8, 10)}:${str.slice(10, 12)}:${str.slice(12, 14)}`,
            ).getTime()

          return parse(b.CreationTime) - parse(a.CreationTime)
        })
        setRestorePoints(sorted)
      } else {
        toast.error("Failed to load restore points. Please check logs")
        log.error("Failed to load restore points:", response)
      }
    } catch (error) {
      toast.error(`Failed to load restore points. Please check logs`)
      console.error(error)
      log.error("Failed to load restore points:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRestorePoints()
    loadTweaks()
    loadAppliedTweaks()
  }, [])

  const loadTweaks = async () => {
    try {
      const fetchedTweaks = await invoke({ channel: "tweaks:fetch" })
      setTweaks(fetchedTweaks)
    } catch (error) {
      console.error("Error fetching tweaks:", error)
      log.error("Error fetching tweaks:", error)
    }
  }

  const loadAppliedTweaks = async () => {
    try {
      const savedStates = await invoke({ channel: "tweak-states:load" })
      const states = JSON.parse(savedStates)
      const applied = new Set<string>()
      for (const [name, state] of Object.entries(states)) {
        if (state) {
          applied.add(name)
        }
      }
      setAppliedTweaks(applied)
    } catch (error) {
      console.error("Error loading tweak states:", error)
      log.error("Error loading tweak states:", error)
    }
  }

  const handleUnapplyTweak = async (tweak: Tweak) => {
    setTweakProcessing(tweak.name)
    const toastId = toast.loading(`Unapplying tweak: ${tweak.title}`)
    try {
      await invoke({ channel: "tweak:unapply", payload: tweak.name })
      
      // Update applied tweaks set
      const newApplied = new Set(appliedTweaks)
      newApplied.delete(tweak.name)
      setAppliedTweaks(newApplied)
      
      // Save updated states
      const savedStates = await invoke({ channel: "tweak-states:load" })
      const states = JSON.parse(savedStates)
      states[tweak.name] = false
      await invoke({ channel: "tweak-states:save", payload: JSON.stringify(states) })
      
      toast.update(toastId, {
        render: `Unapplied tweak: ${tweak.title}`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      })
    } catch (error) {
      console.error(`Error unapplying tweak ${tweak.title}:`, error)
      log.error(`Error unapplying tweak ${tweak.title}:`, error)
      toast.update(toastId, {
        render: `Failed to unapply tweak: ${tweak.title}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      })
    }
    setTweakProcessing(null)
  }

  const handleCreateRestorePoint = async () => {
    setProcessing(true)
    try {
      await invoke({ channel: "create-void-restore-point" })
      toast.success("Restore point created!")
      await fetchRestorePoints()
    } catch (err) {
      toast.error("Failed to create restore point.")
      log.error("Failed to create restore point:", err)
    }
    setProcessing(false)
  }

  const handleRestore = (restorePoint) => {
    setModalState({ isOpen: true, type: "restore", restorePoint })
  }

  const executeRestore = async () => {
    setProcessing(true)
    try {
      await invoke({
        channel: "restore-restore-point",
        payload: modalState.restorePoint.SequenceNumber,
      })
      toast.success("System restore started. Your PC may restart.")
    } catch (err) {
      toast.error("Failed to start system restore.")
      log.error("Failed to start system restore:", err)
    }
    setProcessing(false)
    setModalState({ isOpen: false, type: null, restorePoint: null })
  }

  const handleCustomRestorePoint = async () => {
    setProcessing(true)
    try {
      if (!customName.trim()) {
        toast.error("Please enter a name for the restore point.")
        setProcessing(false)
        return
      }
      await invoke({ channel: "create-restore-point", payload: customName })
      toast.success("Restore point created!")
      setCustomModalOpen(false)
      setCustomName("")
      await fetchRestorePoints()
    } catch (err) {
      toast.error("Failed to create restore point.")
      log.error("Failed to create restore point:", err)
    }
    setProcessing(false)
  }
  const handleDeleteAllClick = () => {
    setDeleteConfirmModalOpen(true)
  }

  const handleConfirmDeleteAll = async () => {
    setDeleteConfirmModalOpen(false)
    setProcessing(true)
    await invoke({ channel: "delete-all-restore-points" })
    toast.success("All restore points deleted successfully.")
    setProcessing(false)
    await fetchRestorePoints()
  }
  const filteredRestorePoints = restorePoints.filter((rp: RestorePoint) =>
    (rp.Description || "").toLowerCase().includes(searchQuery.toLowerCase()),
  )
  console.log(restorePoints)
  return (
    <>
      <RootDiv>
        <div className="h-full max-w-full space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="relative w-full md:w-64 ml-1 mt-1">
              <LargeInput
                placeholder="Search Restore Points..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={Search}
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              <Button
                variant="danger"
                onClick={handleDeleteAllClick}
                disabled={loading || processing}
                className="flex items-center gap-2"
              >
                <Trash size={16} /> Delete All
              </Button>
              <Button
                variant="secondary"
                onClick={fetchRestorePoints}
                className="flex items-center gap-2"
                disabled={loading || processing}
              >
                <RefreshCw size={16} /> Refresh
              </Button>
              <Button
                variant="primary"
                onClick={handleCreateRestorePoint}
                className="flex items-center gap-2"
                disabled={loading || processing}
              >
                {processing ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <PlusCircle size={16} />
                )}
                Quick Restore Point
              </Button>
              <Button
                variant="primary"
                onClick={() => setCustomModalOpen(true)}
                disabled={loading || processing}
              >
                Custom Restore Point
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-96">
              <Loader2 size={32} className="text-void-primary animate-spin" />
            </div>
          ) : filteredRestorePoints.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-void-card border border-void-border rounded-lg">
              <div className="p-4 bg-void-secondary rounded-full mb-4">
                <Shield size={28} className="text-void-text" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-void-text">
                No Restore Points Found
              </h3>
              <p className="text-void-text-secondary max-w-sm mb-4">
                {searchQuery
                  ? "No restore points match your search."
                  : "Create a restore point to preserve your system state. You can restore your system to any point when needed."}
              </p>
              {!searchQuery && (
                <Button
                  variant="primary"
                  icon={<PlusCircle size={16} />}
                  onClick={handleCreateRestorePoint}
                  disabled={processing}
                >
                  Create a Quick Restore Point
                </Button>
              )}
            </div>
          ) : (
            <div className="bg-void-card border border-void-border rounded-lg overflow-hidden">
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-void-text-secondary uppercase bg-void-card sticky top-0">
                    <tr>
                      <th className="px-6 py-4">Description</th>
                      <th className="px-6 py-4 w-32 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRestorePoints.map((rp, index) => (
                      <tr key={index} className="border-t border-void-border">
                        <td className="px-6 py-4 font-medium text-void-text">
                          {rp.Description}
                        </td>
                        <td className="px-14 py-4 text-center">
                          <Button
                            variant="outline"
                            className="p-2! gap-2"
                            onClick={() => handleRestore(rp)}
                            disabled={processing}
                            title="Restore System"
                          >
                            <RotateCcw size={16} />
                            Restore
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <p className="text-center text-void-text-muted mt-4">
            Listing restore points is a beta feature and may be unreliable, but creating restore
            points works as expected.
          </p>

          {/* Tweak Reversal Section */}
          <div className="mt-8">
            <Card className="flex items-center gap-4 p-4 mb-4">
              <div className="flex items-center justify-center p-3 rounded-xl bg-amber-500/10">
                <Wrench className="text-amber-500" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-void-text mb-1">Tweak Reversal</h2>
                <p className="text-sm text-void-text-secondary">
                  View and reverse applied tweaks. <span className="font-medium">{appliedTweaks.size} tweaks currently applied</span>
                </p>
              </div>
            </Card>

            {appliedTweaks.size === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center bg-void-card border border-void-border rounded-lg">
                <div className="p-3 bg-void-secondary rounded-full mb-3">
                  <Undo2 size={24} className="text-void-text" />
                </div>
                <h3 className="text-lg font-medium mb-1 text-void-text">
                  No Applied Tweaks
                </h3>
                <p className="text-void-text-secondary max-w-sm">
                  No tweaks are currently applied. Apply tweaks from the Tweaks page to see them here.
                </p>
              </div>
            ) : (
              <div className="bg-void-card border border-void-border rounded-lg overflow-hidden">
                <div className="max-h-64 overflow-y-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-void-text-secondary uppercase bg-void-card sticky top-0">
                      <tr>
                        <th className="px-6 py-4">Tweak Name</th>
                        <th className="px-6 py-4 w-32 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tweaks
                        .filter((tweak) => appliedTweaks.has(tweak.name))
                        .map((tweak, index) => (
                          <tr key={index} className="border-t border-void-border">
                            <td className="px-6 py-4 font-medium text-void-text">
                              {tweak.title}
                              {tweak.category && (
                                <span className="ml-2 text-xs text-void-text-secondary bg-void-border px-2 py-0.5 rounded">
                                  {tweak.category}
                                </span>
                              )}
                            </td>
                            <td className="px-14 py-4 text-center">
                              <Button
                                variant="outline"
                                className="p-2! gap-2"
                                onClick={() => handleUnapplyTweak(tweak)}
                                disabled={tweakProcessing === tweak.name}
                                title="Reverse Tweak"
                              >
                                {tweakProcessing === tweak.name ? (
                                  <Loader2 size={16} className="animate-spin" />
                                ) : (
                                  <Undo2 size={16} />
                                )}
                                Reverse
                              </Button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </RootDiv>
      <Modal
        open={modalState.isOpen}
        onClose={() =>
          !processing && setModalState({ isOpen: false, type: null, restorePoint: null })
        }
      >
        {modalState.type === "restore" && modalState.restorePoint && (
          <div className="bg-void-card border border-void-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4 pb-0">
            <h3 className="text-lg font-medium text-void-text">Restore System</h3>

            <div className="p-4 pr-0">
              <p className="text-void-text-secondary mb-4">
                Are you sure you want to restore your system to{" "}
                <span className="font-bold">"{modalState.restorePoint.Description}"?</span> Your PC
                will restart shortly. and the restore point will be applied. <br /> <br />
                Your files will not be affected, but recently installed applications and settings
                may be lost.
                <br /> <br />
                This will revert all changes Pulse Tweaks Utility has made to your system since this restore
                point was created.
              </p>
              <div className="flex justify-end gap-3">
                <Button
                  variant="secondary"
                  onClick={() =>
                    !processing && setModalState({ isOpen: false, type: null, restorePoint: null })
                  }
                  disabled={processing}
                >
                  Cancel
                </Button>
                <Button variant="primary" onClick={executeRestore} disabled={processing}>
                  {processing ? <Loader2 size={16} className="animate-spin" /> : "Restore"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <Modal open={customModalOpen} onClose={() => !processing && setCustomModalOpen(false)}>
        <div className="bg-void-card border border-void-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4 pb-0">
          <h3 className="text-lg font-medium text-void-text">Create Custom Restore Point</h3>

          <div className="p-4 space-y-4">
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Enter restore point name"
              className="w-full px-3 py-2 bg-void-card border border-void-border rounded-lg text-void-text placeholder-void-text-secondary focus:outline-hidden focus:ring-2 focus:ring-void-primary focus:border-transparent transition-colors"
              disabled={processing}
            />
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => !processing && setCustomModalOpen(false)}
                disabled={processing}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleCustomRestorePoint}
                disabled={processing || !customName.trim()}
              >
                {processing ? <Loader2 size={16} className="animate-spin" /> : "Create"}
              </Button>
            </div>
            <p className="text-xs text-center text-void-text-muted">
              This may take a while depending on your hardware
            </p>
          </div>
        </div>
      </Modal>

      <Modal open={deleteConfirmModalOpen} onClose={() => !processing && setDeleteConfirmModalOpen(false)}>
        <div className="bg-void-card border border-void-border rounded-2xl p-6 shadow-xl max-w-lg w-full mx-4 pb-0">
          <h3 className="text-lg font-medium text-void-text">Confirm Delete All</h3>

          <div className="p-4 space-y-4">
            <p className="text-void-text-secondary">
              Are you sure you want to delete all restore points? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => !processing && setDeleteConfirmModalOpen(false)}
                disabled={processing}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={handleConfirmDeleteAll}
                disabled={processing}
              >
                {processing ? <Loader2 size={16} className="animate-spin" /> : "Delete All"}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
