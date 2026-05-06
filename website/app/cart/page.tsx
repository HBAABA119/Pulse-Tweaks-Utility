"use client";

import { motion } from "framer-motion";
import { Link } from "next/link";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link href="/products" className="flex items-center gap-2 text-void-text-secondary hover:text-void-primary transition-colors w-fit mb-8">
            <ArrowLeft size={20} />
            Back to Products
          </Link>
          
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 rounded-full bg-void-card flex items-center justify-center mb-6">
              <ShoppingCart size={48} className="text-void-text-secondary" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-void-text-secondary text-lg mb-8">
              Browse our products and add items to get started
            </p>
            <Link href="/products">
              <Button size="lg" className="px-8">
                Browse Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/products" className="flex items-center gap-2 text-void-text-secondary hover:text-void-primary transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Products
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid lg:grid-cols-3 gap-8"
      >
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-2xl p-6 border border-void-border/30">
            <h1 className="text-3xl font-bold text-white mb-6">Shopping Cart ({totalItems} items)</h1>
            
            <div className="space-y-4 scrollbar-on-hover max-h-[600px] overflow-y-auto">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-void-card/50 rounded-xl border border-void-border/20 hover:border-void-border/40 transition-all"
                >
                  <div className="w-24 h-24 bg-void-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard size={32} className="text-void-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">{item.name}</h3>
                    <p className="text-void-text-secondary text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-void-border/30 text-white flex items-center justify-center hover:bg-void-border/50 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-void-primary/20 text-void-primary flex items-center justify-center hover:bg-void-primary/30 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-white font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-void-text-secondary text-sm">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-void-text-secondary hover:text-red-500 transition-colors self-start"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border border-void-border/30 sticky top-24"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-void-text-secondary">
                <span>Subtotal ({totalItems} items)</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-void-text-secondary">
                <span>Shipping</span>
                <span className="text-white">Free</span>
              </div>
              <div className="flex justify-between text-void-text-secondary">
                <span>Tax</span>
                <span className="text-white">${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-void-border/30 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-void-primary">${(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link href="/checkout">
              <Button size="lg" className="w-full mb-4">
                Proceed to Checkout
              </Button>
            </Link>
            
            <Link href="/products">
              <Button variant="secondary" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            
            <div className="mt-6 p-4 bg-void-primary/10 rounded-lg border border-void-primary/20">
              <p className="text-void-text-secondary text-sm">
                Secure checkout powered by PayPal. Your payment information is protected.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
