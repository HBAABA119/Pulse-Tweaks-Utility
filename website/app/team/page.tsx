"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Disc as Discord, Globe, Layout, Code } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Yeezy",
    role: "Owner & Founder",
    bio: "The visionary behind Pulse Tweaks. Leading the mission to revolutionize PC performance for everyone.",
    image: "/logo.png",
    socials: { discord: "#" }
  },
  {
    name: "Alexander",
    role: "Owner & Developer",
    bio: "Master of many languages and a fun guy to work with. Bringing deep technical expertise to the Pulse engine.",
    image: "/logo.png",
    socials: { discord: "#", github: "#" }
  },
  {
    name: "Nicholas",
    role: "Owner & Developer",
    bio: "Master of Discord bots and always fun to chat with. Ensuring our community and automation stay top-tier.",
    image: "/logo.png",
    socials: { discord: "#" }
  }
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">The Team</h1>
        <p className="text-void-text-secondary text-xl max-w-2xl mx-auto">
          The minds behind the most powerful optimization utility in the game.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card glow className="h-full flex flex-col items-center text-center gap-6 p-10 border-void-border/30 group">
              <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-2 border-void-primary/20 group-hover:border-void-primary transition-colors duration-500">
                <div className="absolute inset-0 bg-void-primary/10 group-hover:bg-transparent transition-colors" />
                <Image src={member.image} alt={member.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-void-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>

              <p className="text-void-text-secondary leading-relaxed">
                {member.bio}
              </p>

              <div className="flex gap-4 mt-auto pt-6">
                {member.socials.discord && (
                  <a href={member.socials.discord} className="text-void-text-muted hover:text-void-primary transition-colors">
                    <Discord size={20} />
                  </a>
                )}
                {"github" in member.socials && member.socials.github && (
                  <a href={member.socials.github} className="text-void-text-muted hover:text-void-primary transition-colors">
                    <Code size={20} />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center bg-void-card/30 rounded-3xl p-12 border border-void-border">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Want to join the team?</h2>
        <p className="text-void-text-secondary max-w-xl mx-auto mb-8 text-lg">
          We're always looking for talented developers, designers, and community mods who share our passion for performance.
        </p>
        <a href="https://discord.gg/6yDpsvznMj" target="_blank" className="inline-block">
          <button className="bg-void-primary/10 text-void-primary border border-void-primary/20 px-8 py-3 rounded-xl font-bold hover:bg-void-primary hover:text-white transition-all">
            Apply via Discord
          </button>
        </a>
      </div>
    </div>
  );
}
