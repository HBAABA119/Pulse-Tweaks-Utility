"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { InteractiveDisplay } from "@/components/InteractiveDisplay";
import { LivePreview } from "@/components/LivePreview";
import { Zap, Shield, Rocket, Terminal, Laptop, Cpu, Gauge, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PulseTweaksUtilityPage() {
  const features = [
    { 
      icon: Shield, 
      title: "Privacy Hardening", 
      desc: "Block all Windows spying and data collection at the system level." 
    },
    { 
      icon: Terminal, 
      title: "Registry Tweaks", 
      desc: "Safe, tested registry modifications for extreme performance gains." 
    },
    { 
      icon: Laptop, 
      title: "UI Customization", 
      desc: "Minimalize Windows UI for a cleaner, faster, and more focused experience." 
    },
    { 
      icon: Cpu, 
      title: "Process Management", 
      desc: "Prioritize games and essential apps while curbing background noise." 
    },
    { 
      icon: Gauge, 
      title: "Input Latency", 
      desc: "Deep kernel optimizations to ensure every click and keypress is instant." 
    },
    { 
      icon: Zap, 
      title: "One-Click Apply", 
      desc: "Automated scripts that do all the heavy lifting for you in seconds." 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-16">
      <Link href="/products" className="flex items-center gap-2 text-void-text-muted hover:text-void-primary transition-colors w-fit">
        <ArrowLeft size={20} />
        Back to Products
      </Link>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-void-primary/10 flex items-center justify-center text-void-primary">
              <Rocket size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Pulse Tweaks <span className="text-void-primary">Utility</span>
            </h1>
          </div>
          
          <p className="text-void-text-secondary text-xl leading-relaxed">
            Our flagship desktop application. Built for gamers, by gamers. Pulse Tweaks Utility is the result of years of research into Windows internals, consolidated into a single, powerful tool.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="https://discord.gg/6yDpsvznMj" target="_blank">
              <Button size="lg" className="px-10 h-16 text-xl shadow-[0_0_30px_rgba(65,105,225,0.3)]">
                Join Our Discord <Rocket size={20} className="ml-2" />
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="px-10 h-16 text-xl">
              v1.0.0 Stable
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <LivePreview />
        </motion.div>
      </section>

      {/* Interactive Display Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-8"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Interactive Display</h2>
          <p className="text-void-text-muted text-lg max-w-2xl mx-auto">
            Experience the Pulse Tweaks interface firsthand. Try our interactive demonstration to see how easy it is to optimize your system with just a few clicks.
          </p>
        </div>
        
        <InteractiveDisplay />
      </motion.section>

      <section className="flex flex-col gap-12 pt-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Technical Capabilities</h2>
          <p className="text-void-text-muted mt-2">Under the hood of the ultimate optimization engine.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card glow className="h-full border-void-border/20 p-8 flex flex-col gap-4">
                <div className="text-void-primary">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-void-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
