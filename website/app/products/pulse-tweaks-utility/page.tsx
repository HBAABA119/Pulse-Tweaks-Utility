"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { InteractiveDisplay } from "@/components/InteractiveDisplay";
import { LivePreview } from "@/components/LivePreview";
import { useCart } from "@/context/CartContext";
import { Zap, Shield, Rocket, Terminal, Laptop, Cpu, Gauge, ArrowLeft, ShoppingCart, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PulseTweaksUtilityPage() {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState("");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const isPurchasingEnabled = true; // Enabled for Pro plans

  const pricingPlans = {
    free: {
      name: "Free",
      price: 0,
      features: [
        "Basic system optimization",
        "Limited registry tweaks",
        "Community support",
        "Manual updates",
      ],
    },
    pro: {
      name: "Pro",
      monthlyPrice: 20,
      yearlyPrice: 180, // $15/month when billed yearly
      features: [
        "Advanced system optimization",
        "Unlimited registry tweaks",
        "Priority support",
        "Automatic updates",
        "Gaming mode optimization",
        "Privacy hardening tools",
        "Performance monitoring",
        "Custom tweak profiles",
      ],
    },
  };

  const handleAddToCart = (plan: string, price: number, billing?: string) => {
    if (!isPurchasingEnabled) return;
    
    const productId = `pulse-tweaks-${plan.toLowerCase()}${billing ? `-${billing}` : ""}`;
    const productName = `Pulse Tweaks Utility ${plan}${billing ? ` (${billing})` : ""}`;
    
    addItem({
      id: productId,
      name: productName,
      description: `${plan} plan${billing ? ` billed ${billing}` : ""}`,
      price: price,
    });
    
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(""), 2000);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, plan: string, price: number, billing?: string) => {
    e.preventDefault();
    handleAddToCart(plan, price, billing);
  };

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
            <Button
              variant="secondary"
              size="lg"
              className="px-10 h-16 text-xl"
              onClick={(e) => handleButtonClick(e, "Free", 0)}
              disabled={addedToCart.includes("pulse-tweaks-free")}
            >
              {addedToCart.includes("pulse-tweaks-free") ? (
                <>
                  <Check size={20} className="mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={20} className="mr-2" />
                  Current Plan
                </>
              )}
            </Button>
          </div>
          
          <div className="mt-4 p-4 glass-card rounded-xl border border-void-border/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-void-text-secondary text-sm">Current Plan</p>
                <p className="text-3xl font-bold text-void-primary">Free</p>
              </div>
              <div className="text-right">
                <p className="text-void-text-secondary text-sm">License</p>
                <p className="text-white font-semibold">Basic Features</p>
              </div>
            </div>
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

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-void-text-secondary text-xl">
            Start optimizing your PC with the right plan for your needs
          </p>
        </div>

        {/* Billing Toggle for Pro Plan */}
        <div className="flex justify-center mb-8">
          <div className="glass-card rounded-xl p-1 border border-void-border/30 inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-void-primary text-white"
                  : "text-void-text-secondary hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingCycle === "yearly"
                  ? "bg-void-primary text-white"
                  : "text-void-text-secondary hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-8 border border-void-border/30 hover:border-void-border/50 transition-all"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {pricingPlans.free.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-void-primary">
                  ${pricingPlans.free.price}
                </span>
                <span className="text-void-text-secondary">/month</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {pricingPlans.free.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-void-primary flex-shrink-0" />
                  <span className="text-void-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              disabled
            >
              Current Plan
            </Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-2xl p-8 border-2 border-void-primary/50 relative hover:border-void-primary transition-all"
          >
            <div className="absolute -top-3 right-8 px-3 py-1 bg-void-primary text-white text-xs font-bold rounded-full">
              RECOMMENDED
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {pricingPlans.pro.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-void-primary">
                  ${billingCycle === "monthly" ? pricingPlans.pro.monthlyPrice : Math.floor(pricingPlans.pro.yearlyPrice / 12)}
                </span>
                <span className="text-void-text-secondary">/month</span>
                {billingCycle === "yearly" && (
                  <span className="text-void-text-muted text-sm">
                    (${pricingPlans.pro.yearlyPrice}/year)
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {pricingPlans.pro.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-void-primary flex-shrink-0" />
                  <span className="text-void-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={(e) => handleButtonClick(
                e,
                "Pro",
                billingCycle === "monthly" ? pricingPlans.pro.monthlyPrice : pricingPlans.pro.yearlyPrice,
                billingCycle
              )}
              disabled={addedToCart.includes(`pulse-tweaks-pro-${billingCycle}`)}
            >
              {addedToCart.includes(`pulse-tweaks-pro-${billingCycle}`) ? (
                <>
                  <Check size={20} className="mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </motion.section>

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
