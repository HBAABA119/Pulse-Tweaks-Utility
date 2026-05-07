"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Apple, Check, Lock, AlertCircle } from "lucide-react";
import { isApplePayAvailable } from "@/lib/applePay";
import { isPayPalAvailable } from "@/lib/paypal";
import { initStripe, getSupportedPaymentMethods } from "@/lib/stripe";

export type PaymentMethod = "stripe" | "paypal" | "applepay";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
  amount: number;
}

export function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
  amount,
}: PaymentMethodSelectorProps) {
  const [availableMethods, setAvailableMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAvailableMethods = async () => {
      const methods: PaymentMethod[] = ["stripe"]; // Stripe is always available

      // Check Apple Pay availability
      if (isApplePayAvailable()) {
        methods.push("applepay");
      }

      // Check PayPal availability
      if (isPayPalAvailable()) {
        methods.push("paypal");
      }

      setAvailableMethods(methods);
      setIsLoading(false);

      // Initialize Stripe
      initStripe();
    };

    checkAvailableMethods();
  }, []);

  const paymentMethods = [
    {
      id: "stripe" as PaymentMethod,
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
      available: true,
    },
    {
      id: "paypal" as PaymentMethod,
      name: "PayPal",
      icon: CreditCard,
      description: "Pay securely with PayPal",
      available: availableMethods.includes("paypal"),
    },
    {
      id: "applepay" as PaymentMethod,
      name: "Apple Pay",
      icon: Apple,
      description: "Fast and secure checkout",
      available: availableMethods.includes("applepay"),
    },
  ];

  if (isLoading) {
    return (
      <div className="p-6 glass-card rounded-2xl border border-void-border/30">
        <div className="animate-pulse">
          <div className="h-6 bg-void-border/30 rounded mb-4 w-1/3"></div>
          <div className="space-y-3">
            <div className="h-16 bg-void-border/30 rounded-lg"></div>
            <div className="h-16 bg-void-border/30 rounded-lg"></div>
            <div className="h-16 bg-void-border/30 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 glass-card rounded-2xl border border-void-border/30">
      <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
      
      <div className="space-y-3">
        {paymentMethods.map((method) => {
          if (!method.available) return null;

          const Icon = method.icon;
          const isSelected = selectedMethod === method.id;

          return (
            <motion.button
              key={method.id}
              type="button"
              onClick={() => onMethodChange(method.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                isSelected
                  ? "border-void-primary bg-void-primary/10"
                  : "border-void-border/30 bg-void-card/30 hover:border-void-border/50"
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isSelected ? "bg-void-primary" : "bg-void-border/30"
                }`}>
                  <Icon size={24} className={isSelected ? "text-white" : "text-void-text-muted"} />
                </div>
                
                <div className="flex-1 text-left">
                  <p className="font-semibold text-white">{method.name}</p>
                  <p className="text-sm text-void-text-secondary">{method.description}</p>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6 rounded-full bg-void-primary flex items-center justify-center"
                  >
                    <Check size={16} className="text-white" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {availableMethods.length === 1 && availableMethods[0] === "stripe" && (
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3">
          <AlertCircle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-yellow-500 text-sm">
            Currently, only credit/debit card payments are available. PayPal and Apple Pay will be added soon.
          </p>
        </div>
      )}

      <div className="mt-6 flex items-center gap-2 text-void-text-secondary text-sm">
        <Lock size={16} />
        <span>All payments are processed securely with industry-standard encryption</span>
      </div>
    </div>
  );
}
