"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Disc as Discord, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">Contact Us</h1>
        <p className="text-void-text-secondary text-xl max-w-2xl mx-auto">
          Need support? Want to partner? Or just want to say hi? We're here.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Discord Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card glow className="h-full flex flex-col gap-8 p-12 bg-void-primary/5 border-void-primary/30 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-void-primary/10 rounded-full blur-[80px] group-hover:bg-void-primary/20 transition-colors" />
            
            <div className="w-16 h-16 rounded-2xl bg-void-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(65,105,225,0.5)]">
              <Discord size={32} />
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-white">Join our Discord</h2>
              <p className="text-void-text-secondary text-lg">
                The fastest way to get support and stay updated. Our community of 5,000+ users and developers is active 24/7.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-void-text-secondary">
                <Clock size={18} className="text-void-primary" />
                <span>Response time: ~15 minutes</span>
              </div>
              <div className="flex items-center gap-3 text-void-text-secondary">
                <MessageSquare size={18} className="text-void-primary" />
                <span>Direct dev access</span>
              </div>
            </div>

            <Link href="https://discord.gg/6yDpsvznMj" target="_blank" className="mt-auto">
              <Button size="lg" className="w-full group/btn">
                Join Community <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </Card>
        </motion.div>

        {/* Support Form / Other Contact */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8"
        >
          <Card className="p-10 border-void-border/30 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-void-card border border-void-border flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email Support</h3>
                <p className="text-void-text-muted text-sm">For business & partnerships</p>
              </div>
            </div>
            <p className="text-void-text-secondary">
              Prefer email? Reach out to us for enterprise inquiries or partnership proposals.
            </p>
            <a href="mailto:support@pulsetweaks.net" className="text-void-primary font-bold hover:underline">
              support@pulsetweaks.net
            </a>
          </Card>

          <Card className="p-10 border-void-border/30 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Status</h3>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-medium">All Systems Operational</span>
            </div>
            <p className="text-void-text-secondary text-sm leading-relaxed">
              Our servers and utility delivery systems are currently running at maximum efficiency.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
