"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, CheckCircle, AlertCircle, Zap, Shield, Terminal, Laptop, Cpu, Gauge, Gamepad2, Monitor, Wrench } from "lucide-react";

interface TweakCategory {
  id: string;
  name: string;
  icon: any;
  tweaks: Tweak[];
}

interface Tweak {
  id: string;
  name: string;
  description: string;
  category: string[];
  recommended: boolean;
  reversible: boolean;
  status: "idle" | "applying" | "completed" | "error";
}

// Real data from registry.json - sample of actual tweaks
const realTweaks: Tweak[] = [
  {
    id: "24-hour-clock",
    name: "Set 24-Hour Clock",
    description: "Changes clock to display 24-hour format.",
    category: ["General", "Appearance"],
    recommended: false,
    reversible: true,
    status: "idle"
  },
  {
    id: "amd-chill",
    name: "AMD Chill",
    description: "Enables AMD Chill technology for smoother gaming performance.",
    category: ["GPU", "Gaming", "Performance"],
    recommended: true,
    reversible: true,
    status: "idle"
  },
  {
    id: "amd-radeon-anti-lag",
    name: "AMD Radeon Anti-Lag",
    description: "Enables AMD Radeon Anti-Lag technology for competitive gaming.",
    category: ["GPU", "Gaming"],
    recommended: true,
    reversible: true,
    status: "idle"
  },
  {
    id: "disable-aero-shake",
    name: "Disable Aero Shake",
    description: "Prevents windows from minimizing when you shake them.",
    category: ["General", "Performance"],
    recommended: true,
    reversible: true,
    status: "idle"
  },
  {
    id: "disable-sticky-keys",
    name: "Disable Sticky Keys Popup",
    description: "Disables the Sticky Keys popup when pressing Shift 5 times.",
    category: ["General", "Accessibility"],
    recommended: true,
    reversible: true,
    status: "idle"
  },
  {
    id: "disable-telemetry",
    name: "Disable Telemetry",
    description: "Block all Windows spying and data collection at the system level.",
    category: ["Privacy", "Security"],
    recommended: true,
    reversible: true,
    status: "idle"
  },
  {
    id: "gaming-mode",
    name: "Gaming Mode",
    description: "Optimize system for gaming performance and reduced input latency.",
    category: ["Gaming", "Performance"],
    recommended: true,
    reversible: true,
    status: "idle"
  },
  {
    id: "fast-startup",
    name: "Fast Startup",
    description: "Enable fast boot for quicker system startup.",
    category: ["Performance", "General"],
    recommended: false,
    reversible: true,
    status: "idle"
  },
  {
    id: "power-plan",
    name: "High Performance Power Plan",
    description: "Set power plan to maximum performance mode.",
    category: ["Performance", "Power"],
    recommended: true,
    reversible: true,
    status: "idle"
  }
];

// Group tweaks by category
const getInitialCategories = (): TweakCategory[] => {
  const categoryMap = new Map<string, Tweak[]>();
  
  realTweaks.forEach(tweak => {
    tweak.category.forEach(cat => {
      if (!categoryMap.has(cat)) {
        categoryMap.set(cat, []);
      }
      categoryMap.get(cat)!.push(tweak);
    });
  });

  const categoryIcons: Record<string, any> = {
    "Privacy": Shield,
    "Security": Shield,
    "Performance": Zap,
    "Gaming": Gamepad2,
    "GPU": Monitor,
    "General": Wrench,
    "Appearance": Laptop,
    "Accessibility": Shield,
    "Power": Zap
  };

  return Array.from(categoryMap.entries()).map(([categoryName, tweaks]) => ({
    id: categoryName.toLowerCase().replace(/\s+/g, '-'),
    name: categoryName,
    icon: categoryIcons[categoryName] || Wrench,
    tweaks: tweaks
  }));
};

const initialCategories = getInitialCategories();

export const InteractiveDisplay = () => {
  const [categories, setCategories] = useState<TweakCategory[]>(initialCategories);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTweak, setCurrentTweak] = useState<string | null>(null);

  const applyAllTweaks = async () => {
    setIsRunning(true);
    setProgress(0);
    
    const allTweaks = categories.flatMap(cat => cat.tweaks);
    const totalTweaks = allTweaks.length;
    
    for (let i = 0; i < allTweaks.length; i++) {
      const tweak = allTweaks[i];
      setCurrentTweak(tweak.name);
      
      // Update tweak status to applying
      setCategories(prev => prev.map(cat => ({
        ...cat,
        tweaks: cat.tweaks.map(t => 
          t.id === tweak.id ? { ...t, status: "applying" as const } : t
        )
      })));
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
      
      // Update tweak status to completed
      setCategories(prev => prev.map(cat => ({
        ...cat,
        tweaks: cat.tweaks.map(t => 
          t.id === tweak.id ? { ...t, status: "completed" as const } : t
        )
      })));
      
      setProgress(((i + 1) / totalTweaks) * 100);
    }
    
    setCurrentTweak(null);
    setIsRunning(false);
  };

  const resetTweaks = () => {
    setCategories(initialCategories);
    setProgress(0);
    setIsRunning(false);
    setCurrentTweak(null);
  };

  const getStatusIcon = (status: Tweak["status"]) => {
    switch (status) {
      case "applying":
        return <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
          <Zap size={16} className="text-void-primary" />
        </motion.div>;
      case "completed":
        return <CheckCircle size={16} className="text-green-500" />;
      case "error":
        return <AlertCircle size={16} className="text-red-500" />;
      default:
        return <div className="w-4 h-4 border-2 border-void-border/30 rounded-full" />;
    }
  };

  const completedCount = categories.flatMap(cat => cat.tweaks).filter(t => t.status === "completed").length;
  const totalCount = categories.flatMap(cat => cat.tweaks).length;

  return (
    <div className="glass-card rounded-2xl border border-void-border/30 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-void-border/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">Pulse Tweaks Interface</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-void-text-secondary">
              {completedCount}/{totalCount} Applied
            </span>
            <div className="w-2 h-2 rounded-full bg-void-primary animate-pulse" />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="h-3 bg-void-border/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-void-primary to-void-accent rounded-full"
            />
          </div>
          {currentTweak && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-void-primary"
            >
              Applying: {currentTweak}...
            </motion.p>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="p-6 border-b border-void-border/30">
        <div className="flex gap-4">
          <button
            onClick={applyAllTweaks}
            disabled={isRunning || completedCount === totalCount}
            className="flex-1 bg-gradient-to-r from-void-primary to-void-accent text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-void-primary/25 transition-all flex items-center justify-center gap-2"
          >
            {isRunning ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                  <Zap size={20} />
                </motion.div>
                Applying...
              </>
            ) : (
              <>
                <Play size={20} />
                {completedCount === totalCount ? "All Applied" : "Apply All Tweaks"}
              </>
            )}
          </button>
          
          <button
            onClick={resetTweaks}
            disabled={isRunning}
            className="px-6 py-3 bg-void-card border border-void-border/30 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-void-border/20 transition-all flex items-center gap-2"
          >
            <RotateCcw size={20} />
            Reset
          </button>
        </div>
      </div>

      {/* Tweak Categories */}
      <div className="p-6 space-y-6 max-h-96 overflow-y-auto scrollbar-on-hover">
        <AnimatePresence>
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <category.icon size={20} className="text-void-primary" />
                <h4 className="font-semibold text-white">{category.name}</h4>
                <span className="text-xs text-void-text-muted">
                  ({category.tweaks.filter(t => t.status === "completed").length}/{category.tweaks.length})
                </span>
              </div>
              
              <div className="space-y-2 pl-8">
                {category.tweaks.map((tweak) => (
                  <motion.div
                    key={tweak.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between p-3 bg-void-card/50 rounded-lg border border-void-border/20"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(tweak.status)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-white">{tweak.name}</p>
                          {tweak.recommended && (
                            <span className="px-2 py-0.5 bg-void-primary/20 text-void-primary text-xs rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-void-text-muted">{tweak.description}</p>
                        <div className="flex gap-1 mt-1">
                          {tweak.category.slice(0, 2).map(cat => (
                            <span key={cat} className="px-1.5 py-0.5 bg-void-border/20 text-void-text-muted text-xs rounded">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {tweak.status === "completed" && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-xs text-green-500 font-medium"
                        >
                          Applied
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-void-border/30 bg-void-card/30">
        <div className="flex items-center justify-between text-xs text-void-text-muted">
          <span>Pulse Tweaks Utility v1.0.0</span>
          <span>Interactive Demo Mode</span>
        </div>
      </div>
    </div>
  );
};
