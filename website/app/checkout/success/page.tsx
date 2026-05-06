"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={48} className="text-green-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Order Confirmed!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-void-text-secondary text-lg mb-8"
        >
          Thank you for your purchase. Your order has been successfully processed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 border border-void-border/30 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Order Details</h2>
          <div className="space-y-3 text-left">
            <div className="flex justify-between text-void-text-secondary">
              <span>Order Number</span>
              <span className="text-white">PT-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between text-void-text-secondary">
              <span>Date</span>
              <span className="text-white">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between text-void-text-secondary">
              <span>Status</span>
              <span className="text-green-500 font-semibold">Confirmed</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button size="lg" className="px-8">
              <Home size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="secondary" size="lg" className="px-8">
              <ShoppingBag size={20} className="mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-void-text-muted text-sm mt-8"
        >
          A confirmation email has been sent to your email address.
        </motion.p>
      </motion.div>
    </div>
  );
}
