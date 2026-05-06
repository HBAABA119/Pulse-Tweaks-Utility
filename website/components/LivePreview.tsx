"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Wrench, 
  Trash2, 
  Settings, 
  Database, 
  Globe, 
  Shield, 
  Gamepad2, 
  Monitor,
  Zap,
  ChevronRight,
  Search,
  AlertTriangle,
  CheckCircle,
  X
} from "lucide-react";

interface TweakItem {
  id: string;
  title: string;
  description: string;
  category: string[];
  recommended: boolean;
  applied: boolean;
}

const mockTweaks: TweakItem[] = [
  {
    id: "disable-telemetry",
    title: "Disable Telemetry",
    description: "Block Windows data collection and telemetry",
    category: ["Privacy", "Security"],
    recommended: true,
    applied: false
  },
  {
    id: "gaming-mode",
    title: "Gaming Mode",
    description: "Optimize system for gaming performance",
    category: ["Performance", "Gaming"],
    recommended: true,
    applied: false
  },
  {
    id: "disable-cortana",
    title: "Disable Cortana",
    description: "Turn off Cortana voice assistant",
    category: ["Privacy", "General"],
    recommended: true,
    applied: true
  },
  {
    id: "fast-startup",
    title: "Fast Startup",
    description: "Enable fast boot for quicker startup",
    category: ["Performance", "General"],
    recommended: false,
    applied: true
  },
  {
    id: "power-plan",
    title: "High Performance Power Plan",
    description: "Set power plan to maximum performance",
    category: ["Performance", "Power"],
    recommended: true,
    applied: false
  }
];

const navItems = [
  { icon: Home, label: "Home", active: false },
  { icon: Wrench, label: "Tweaks", active: true },
  { icon: Trash2, label: "Clean", active: false },
  { icon: Database, label: "Backup", active: false },
  { icon: Globe, label: "DNS", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export const LivePreview = () => {
  const [tweaks, setTweaks] = useState(mockTweaks);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isApplying, setIsApplying] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const categories = ["All", "Privacy", "Performance", "Gaming", "Security", "General", "Power"];
  
  const filteredTweaks = tweaks.filter(tweak => {
    const matchesSearch = tweak.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tweak.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tweak.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const applyTweak = async (tweakId: string) => {
    setIsApplying(true);
    
    // Simulate applying tweak
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setTweaks(prev => prev.map(t => 
      t.id === tweakId ? { ...t, applied: true } : t
    ));
    
    const tweak = tweaks.find(t => t.id === tweakId);
    showNotification(`Applied: ${tweak?.title}`);
    setIsApplying(false);
  };

  const unapplyTweak = async (tweakId: string) => {
    setIsApplying(true);
    
    // Simulate unapplying tweak
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setTweaks(prev => prev.map(t => 
      t.id === tweakId ? { ...t, applied: false } : t
    ));
    
    const tweak = tweaks.find(t => t.id === tweakId);
    showNotification(`Reverted: ${tweak?.title}`);
    setIsApplying(false);
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const applyRecommended = async () => {
    setIsApplying(true);
    const recommendedTweaks = tweaks.filter(t => t.recommended && !t.applied);
    
    for (const tweak of recommendedTweaks) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setTweaks(prev => prev.map(t => 
        t.id === tweak.id ? { ...t, applied: true } : t
      ));
    }
    
    showNotification(`Applied ${recommendedTweaks.length} recommended tweaks`);
    setIsApplying(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
      {/* Desktop Interface Frame */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-slate-400 ml-2">Pulse Tweaks - Live Preview</span>
          </div>
          <div className="text-xs text-slate-400">v2.15.0</div>
        </div>
      </div>

      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-20 bg-slate-800/30 border-r border-slate-700 p-4">
          <div className="space-y-6">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                className={`w-full flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                  item.active 
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30" 
                    : "text-slate-400 hover:text-white hover:bg-slate-700/30"
                }`}
              >
                <item.icon size={20} />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto pulse-scrollbar-thin">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">System Tweaks</h2>
            <p className="text-slate-400 text-sm mb-4">
              Optimize your system with {tweaks.filter(t => t.applied).length}/{tweaks.length} tweaks applied
            </p>

            {/* Search and Actions */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search tweaks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                onClick={applyRecommended}
                disabled={isApplying}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <Zap size={16} />
                Apply Recommended
              </button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tweak List */}
          <div className="space-y-3">
            <AnimatePresence>
              {filteredTweaks.map((tweak) => (
                <motion.div
                  key={tweak.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white">{tweak.title}</h3>
                        {tweak.recommended && (
                          <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                            Recommended
                          </span>
                        )}
                        {tweak.applied && (
                          <CheckCircle size={16} className="text-green-500" />
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mb-2">{tweak.description}</p>
                      <div className="flex gap-2">
                        {tweak.category.map(cat => (
                          <span key={cat} className="px-2 py-0.5 bg-slate-700/50 text-slate-300 text-xs rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => tweak.applied ? unapplyTweak(tweak.id) : applyTweak(tweak.id)}
                      disabled={isApplying}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        tweak.applied
                          ? "bg-slate-700 hover:bg-slate-600 text-slate-300"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      } disabled:opacity-50`}
                    >
                      {isApplying ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                          <Zap size={16} />
                        </motion.div>
                      ) : tweak.applied ? (
                        "Revert"
                      ) : (
                        "Apply"
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-4 right-4 bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 flex items-center gap-3"
          >
            <CheckCircle size={20} className="text-green-500" />
            <span className="text-white text-sm">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
