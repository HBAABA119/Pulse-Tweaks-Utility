import { useEffect, useState } from "react"
import Modal from "@/components/ui/modal"
import Button from "./ui/button"
import { toast } from "react-toastify"
import { invoke } from "@/lib/electron"

export default function FirstTime(): React.ReactElement {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const firstTime = localStorage.getItem("firstTime")
    if (!firstTime || firstTime === "true") {
      const timer = setTimeout(() => setOpen(true), 20)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [])

  const handleGetStarted = async () => {
    localStorage.setItem("firstTime", "false")
    setOpen(false)

    const toastId = toast.info("Creating restore point... Please wait before applying tweaks.", {
      autoClose: false,
      isLoading: true,
      closeOnClick: false,
      draggable: false,
    })

    try {
      await invoke({ channel: "create-void-restore-point" })

      toast.update(toastId, {
        render: "Restore point created!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      })
    } catch (err) {
      toast.update(toastId, {
        render: "Failed to create restore point.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      })
      console.error("Error creating restore point:", err)
    }
  }

  const handleSkipRestorePoint = () => {
    localStorage.setItem("firstTime", "false")
    setOpen(false)
  }

  return (
    <Modal open={open} onClose={undefined}>
      <div className="bg-void-card border border-void-border rounded-2xl p-8 shadow-2xl max-w-2xl w-full mx-4 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-void-text mb-4">Welcome to Pulse Tweaks Utility</h1>

        <p className="text-void-text-secondary mb-6">
          It looks like this is your first time here. <br />
          Would you like to create a restore point before you start?
        </p>

        <p className="text-void-text-secondary mb-4 text-sm">
          <span className="font-medium">
            By clicking <strong>Yes</strong>, Pulse Tweaks Utility will create a restore point and disable the
            cooldown for future restore points.
          </span>
        </p>

        <p className="text-red-500 mb-8 text-sm italic">
          Disclaimer: This software is provided "as is", without warranty of any kind. 
          The developers are not responsible for any damage or data loss that may occur.
          Use at your own risk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button onClick={handleGetStarted}>Yes (Recommended)</Button>
          <Button onClick={handleSkipRestorePoint} variant="danger">
            No (Not Recommended)
          </Button>
        </div>

        <p className="text-void-text-secondary mt-4 text-sm">
          <span className="font-semibold">Pulse Tweaks Utility V1</span>
        </p>
      </div>
    </Modal>
  )
}
