"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Rocket, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "pulse-tweaks-utility",
    title: "Pulse Tweaks Utility",
    tagline: "The core engine for your PC's transformation.",
    description: "Our flagship desktop application that automates hundreds of registry, service, and system optimizations with a single click.",
    icon: Rocket,
    href: "/products/pulse-tweaks-utility"
  },
  {
    id: "more-products",
    title: "More Products Coming Soon",
    tagline: "The Future of Optimization",
    description: "We are working on groundbreaking new tools to further enhance your digital experience. Stay tuned for the next evolution.",
    icon: Zap,
    href: "#",
    disabled: true
  }
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-20">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">Our Solutions</h1>
        <p className="text-void-text-secondary text-xl max-w-2xl mx-auto">
          Select a product to explore its features and capabilities in detail.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card glow className={product.disabled ? "opacity-75 grayscale border-void-border/10" : "h-full flex flex-col gap-8 p-10 border-void-primary/20 bg-gradient-to-br from-void-card to-transparent"}>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-void-primary/10 flex items-center justify-center text-void-primary">
                  <product.icon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                  <p className="text-void-primary font-medium">{product.tagline}</p>
                </div>
              </div>
              
              <p className="text-void-text-secondary text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="mt-auto pt-8">
                {product.disabled ? (
                  <Button disabled className="w-full">Coming Soon</Button>
                ) : (
                  <Link href={product.href}>
                    <Button className="w-full group">
                      View Details <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
