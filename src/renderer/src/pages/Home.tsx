import { useState, useEffect } from "react"
import RootDiv from "@/components/rootdiv"
import { Cpu, HardDrive, Zap, MemoryStick, Gpu } from "lucide-react"
import InfoCard from "@/components/infocard"
import { invoke } from "@/lib/electron"
import Button from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import useSystemStore from "@/store/systemInfo"
import log from "electron-log/renderer"
import Greeting from "@/components/greeting"
import { MonitorCog } from "lucide-react"
import { Wrench } from "lucide-react"
import Card from "@/components/ui/Card"
import { useDiscordRPC } from "@/hooks/useDiscordRPC"

function Home() {
  const { setTweakCount } = useDiscordRPC()
  const systemInfo = useSystemStore((state) => state.systemInfo)
  const setSystemInfo = useSystemStore((state) => state.setSystemInfo)
  const [tweakInfo, setTweakInfo] = useState(() => {
    try {
      const cached = localStorage.getItem("void:tweakInfo")
      return cached ? JSON.parse(cached) : null
    } catch (err) {
      console.error("Failed to parse tweakInfo cache", err)
      return null
    }
  })
  const router = useNavigate()
  const [loading, setLoading] = useState(true)
  const [usingCache, setUsingCache] = useState(false)
  const [activeTweaks, setActiveTweaks] = useState(() => {
    try {
      const cached = localStorage.getItem("void:activeTweaks")
      return cached ? JSON.parse(cached) : []
    } catch {
      return []
    }
  })

  const goToTweaks = () => {
    router("tweaks")
  }

  const fetchActiveTweaks = async () => {
    try {
      const active = await invoke({ channel: "tweak:active" })
      setActiveTweaks(active)
      setTweakCount(active.length)
      localStorage.setItem("void:activeTweaks", JSON.stringify(active))
    } catch (err) {
      console.error("Failed to fetch active tweaks:", err)
    }
  }

  useEffect(() => {
    const idleHandle = requestIdleCallback(() => {
      const cached = localStorage.getItem("void:systemInfo")
      if (cached) {
        try {
          const parsed = JSON.parse(cached)
          setSystemInfo(parsed)
          setUsingCache(true)
          setLoading(false)
        } catch (err) {
          console.warn("Failed to parse systemInfo cache", err)
        }
      }

      invoke({ channel: "get-system-info" })
        .then((info) => {
          setSystemInfo(info)
          localStorage.setItem("void:systemInfo", JSON.stringify(info))
          setUsingCache(false)
          log.info("Fetched system info")
        })
        .catch((err) => {
          log.error("Error fetching system info:", err)
          console.error("Error fetching system info:", err)
        })
        .finally(() => setLoading(false))
    })

    return () => cancelIdleCallback(idleHandle)
  }, [])

  useEffect(() => {
    const idleHandle = requestIdleCallback(() => {
      const cached = localStorage.getItem("void:tweakInfo")
      if (cached) {
        try {
          setTweakInfo(JSON.parse(cached))
        } catch (err) {
          console.error("Failed to parse tweakInfo cache", err)
        }
      }

      invoke({ channel: "tweaks:fetch" })
        .then((tweaks) => {
          setTweakInfo(tweaks)
          localStorage.setItem("void:tweakInfo", JSON.stringify(tweaks))
        })
        .catch((err) => {
          console.error("Error fetching tweak info:", err)
        })
    })

    return () => cancelIdleCallback(idleHandle)
  }, [])

  useEffect(() => {
    const idleHandle = requestIdleCallback(() => {
      fetchActiveTweaks()
    })

    return () => cancelIdleCallback(idleHandle)
  }, [])

  const formatBytes = (bytes) => {
    if (bytes === 0 || !bytes) return "0 GB"
    return (bytes / 1024 / 1024 / 1024).toFixed(2) + " GB"
  }

  if (loading) {
    return (
      <RootDiv>
        <div className="flex items-center justify-center h-64 flex-col gap-5">
          <div className="">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-void-primary rounded-full ml-3"
              role="status"
              aria-label="loading"
            ></div>
          </div>
          <div className="text-void-text-secondary">Loading system information...</div>
          <p className="text-sm text-void-primary">
            You may use other parts of Pulse Tweaks Utility while this loads
          </p>
        </div>
      </RootDiv>
    )
  }

  return (
    <RootDiv>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col gap-2">
          <Greeting />
          <p className="text-void-text-secondary text-lg font-medium opacity-80">
            System overview and performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            icon={Cpu}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-400"
            title="CPU"
            subtitle="Processor"
            items={[
              { label: "Model", value: systemInfo?.cpu_model || "Unknown" },
              { label: "Cores", value: `${systemInfo?.cpu_cores || "0"} Cores` },
            ]}
          />

          <InfoCard
            icon={Gpu}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-400"
            title="GPU"
            subtitle="Graphics"
            items={
              systemInfo?.hasGPU
                ? [
                    { label: "Model", value: systemInfo?.gpu_model || "Unknown" },
                    { label: "VRAM", value: systemInfo?.vram || "Unknown" },
                  ]
                : [
                    { label: "Model", value: systemInfo?.integrated_gpu || "Unknown" },
                    { label: "Type", value: "Integrated" },
                  ]
            }
          />

          <InfoCard
            icon={MemoryStick}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-400"
            title="Memory"
            subtitle="RAM"
            items={[
              { label: "Total", value: formatBytes(systemInfo?.memory_total) },
              { label: "Type", value: systemInfo?.memory_type || "Unknown" },
            ]}
          />

          <InfoCard
            icon={MonitorCog}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-400"
            title="System"
            subtitle="Operating System"
            items={[
              { label: "OS", value: systemInfo?.os || "Unknown" },
              { label: "Version", value: systemInfo?.os_version || "Unknown" },
            ]}
          />

          <InfoCard
            icon={HardDrive}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-400"
            title="Storage"
            subtitle="Disk"
            items={[
              { label: "Model", value: systemInfo?.disk_model || "Unknown" },
              { label: "Capacity", value: systemInfo?.disk_size || "Unknown" },
            ]}
          />

          <InfoCard
            icon={Wrench}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-400"
            title="Tweaks"
            subtitle="Optimization"
            items={[
              { label: "Available", value: `${tweakInfo?.length || 0}` },
              { label: "Applied", value: `${activeTweaks.length || 0}` },
            ]}
          />
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Card className="relative bg-void-card/80 backdrop-blur-xl rounded-2xl border border-void-border p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="p-4 bg-void-primary/10 rounded-2xl shadow-inner shadow-blue-500/10">
                <Zap className="text-void-primary" size={40} />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white tracking-tight">Performance Boost</h2>
                <p className="text-void-text-secondary max-w-md">
                  Unlock your PC's full potential with advanced system tweaks and privacy optimizations.
                </p>
              </div>
            </div>
            <Button 
              variant="primary" 
              size="lg" 
              className="px-10 h-14 text-lg font-bold transition-all shadow-2xl shadow-blue-600/20" 
              onClick={goToTweaks}
            >
              Get Started <Zap size={20} className="ml-2 fill-current" />
            </Button>
          </Card>
        </div>

        {usingCache && (
          <p className="text-center text-sm text-void-text-muted animate-pulse">
            Syncing real-time system data...
          </p>
        )}
      </div>
    </RootDiv>
  )
}

export default Home
