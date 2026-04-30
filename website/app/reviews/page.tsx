"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Star, Quote, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Alex 'Zenith' Rodriguez",
    role: "Competitive FPS Player",
    content: "Pulse Tweaks literally cut my input lag in half. I was skeptical about registry tweaks, but the utility makes it so easy and safe. It's a game changer for Valorant.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Video Editor",
    content: "Not just for gamers! My Premiere Pro export times improved and the system just feels snappier overall. The debloat feature is amazing.",
    rating: 5,
  },
  {
    name: "Marcus V.",
    role: "Power User",
    content: "I've tried every 'optimizer' out there. Pulse is the only one that actually delivers without breaking Windows updates or the store. 10/10.",
    rating: 5,
  },
  {
    name: "Jordan T.",
    role: "Streamer",
    content: "Finally, a tool that actually understands system latency. My stream encoder is much more stable now. Joining the Discord was the best decision.",
    rating: 5,
  },
  {
    name: "Liam O'Connor",
    role: "Software Developer",
    content: "Clean, efficient, and transparent. I love that I can see exactly what's being changed. The Team Page shows these guys know their stuff.",
    rating: 5,
  },
  {
    name: "Elena G.",
    role: "Laptop Gamer",
    content: "Fixed my thermal throttling issues on my gaming laptop. Pulse's power plans are magic. Thank you guys!",
    rating: 5,
  }
];

export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">User Reviews</h1>
        <p className="text-void-text-secondary text-xl max-w-2xl mx-auto italic">
          Reviews Coming Soon!
        </p>
      </div>

      <div className="flex justify-center items-center py-20">
        <Card glow className="p-16 text-center border-void-primary/20 bg-void-primary/5 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Be part of our first reviews</h2>
          <p className="text-void-text-secondary text-lg mb-8">
            We are currently in the early stages of launch. Once you've experienced the power of Pulse Tweaks, we'd love to hear your feedback!
          </p>
          <div className="flex justify-center gap-2 text-void-primary/30">
             {[...Array(5)].map((_, i) => <Star key={i} size={40} fill="currentColor" />)}
          </div>
        </Card>
      </div>

      <Card className="p-12 text-center flex flex-col items-center gap-6 bg-void-primary/5 border-void-primary/20">
        <h2 className="text-3xl font-bold text-white">Join our growing community</h2>
        <p className="text-void-text-secondary max-w-xl">
          We're constantly updating our tools based on community feedback. Experience the difference today.
        </p>
      </Card>
    </div>
  );
}
