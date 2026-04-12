import { useEffect, useCallback } from "react"
import { useLocation } from "react-router-dom"
import { send } from "@/lib/electron"

export function useDiscordRPC() {
  const location = useLocation()

  // Track page changes
  useEffect(() => {
    send("discord:page-change", location.pathname)
  }, [location.pathname])

  const setTweakCount = useCallback((count: number) => {
    send("discord:tweak-count", count)
  }, [])

  const notifyTweakApplied = useCallback((tweakName: string) => {
    send("discord:tweak-applied", tweakName)
  }, [])

  const notifyTweakUnapplied = useCallback((tweakName: string) => {
    send("discord:tweak-unapplied", tweakName)
  }, [])

  return {
    setTweakCount,
    notifyTweakApplied,
    notifyTweakUnapplied,
  }
}
