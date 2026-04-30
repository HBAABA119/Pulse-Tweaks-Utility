"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Zap, Shield, Cpu, Gauge, Star, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-void-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-void-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-primary/10 border border-void-primary/20 w-fit">
              <Zap size={14} className="text-void-primary fill-current" />
              <span className="text-xs font-bold text-void-primary tracking-wider uppercase">New Version 1.0 Live</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[1.1]">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-void-primary to-void-accent text-glow">Performance</span>
            </h1>
            <p className="text-lg md:text-xl text-void-text-secondary max-w-lg leading-relaxed">
              Unlock your PC's hidden potential with Pulse Tweaks. The ultimate utility for gamers and power users who demand zero lag and maximum efficiency.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-16 px-10 text-xl group">
                Download Now
                <Zap size={20} className="ml-2 group-hover:scale-125 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="h-16 px-10 text-xl">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-void-card flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-void-text-muted">
                Be the first to join our growing community!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 bg-void-primary/10 rounded-full blur-[60px] animate-pulse" />
              <Image 
                src="/hero-logo.png" 
                alt="Pulse Hero" 
                fill 
                className="object-contain relative z-10 drop-shadow-[0_0_50px_rgba(65,105,225,0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Why Pulse Tweaks?</h2>
          <p className="text-void-text-secondary max-w-2xl">
            We don't just change settings; we optimize every layer of your operating system for the most responsive experience possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Cpu, 
              title: "System Latency", 
              desc: "Deep kernel optimizations to reduce input lag and system interrupt latency." 
            },
            { 
              icon: Shield, 
              title: "Privacy First", 
              desc: "Disable Windows telemetry, data collection, and unnecessary background services." 
            },
            { 
              icon: Gauge, 
              title: "Network Boost", 
              desc: "Optimized TCP/IP stack for lower ping and stable connections in competitive games." 
            }
          ].map((feature, idx) => (
            <Card key={idx} glow className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-void-primary/10 flex items-center justify-center text-void-primary group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-void-text-secondary leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-void-card/30 border-y border-void-border py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Active Users", value: "0" },
            { label: "Tweaks Available", value: "150+" },
            { label: "Performance Gain", value: "25%+" },
            { label: "System Support", value: "Win 10/11" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{stat.value}</span>
              <span className="text-sm font-medium text-void-primary uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <Card className="relative overflow-hidden bg-gradient-to-br from-void-primary/20 to-transparent border-void-primary/30 p-12 md:p-20 text-center flex flex-col items-center gap-8">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-void-primary/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            Ready to experience your PC at its absolute <span className="text-void-primary">best</span>?
          </h2>
          <p className="text-xl text-void-text-secondary max-w-xl">
            Join thousands of users who have already unlocked their performance potential.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="h-16 px-12 text-xl shadow-[0_0_40px_rgba(65,105,225,0.4)]">
              Get Pulse Now
            </Button>
            <Link href="https://discord.gg/6yDpsvznMj" target="_blank">
              <Button variant="secondary" size="lg" className="h-16 px-12 text-xl flex gap-3">
                <MessageSquare />
                Support Discord
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
