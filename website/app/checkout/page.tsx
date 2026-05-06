"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "next/link";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, CreditCard, Lock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "card">("paypal");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

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
            <AlertCircle size={64} className="text-void-text-secondary mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">No Items in Cart</h1>
            <p className="text-void-text-secondary text-lg mb-8">
              Please add items to your cart before checkout
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Clear cart and redirect to success page
    clearCart();
    window.location.href = "/checkout/success";
  };

  const handlePayPalPayment = () => {
    // PayPal integration will be connected here
    // For now, simulate the process
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      window.location.href = "/checkout/success";
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/cart" className="flex items-center gap-2 text-void-text-secondary hover:text-void-primary transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Cart
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Checkout
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid lg:grid-cols-3 gap-8"
      >
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-2xl p-6 border border-void-border/30 mb-6">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-void-text-secondary text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-void-text-secondary text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                    className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-void-text-secondary text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-void-border/30 mb-6">
            <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-void-text-secondary text-sm mb-2">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="123 Main St"
                  className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-void-text-secondary text-sm mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="New York"
                    className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-void-text-secondary text-sm mb-2">State/Province</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    placeholder="NY"
                    className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-void-text-secondary text-sm mb-2">ZIP/Postal Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    placeholder="10001"
                    className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-void-text-secondary text-sm mb-2">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white focus:outline-none focus:border-void-primary transition-colors"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-void-border/30">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
            
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setPaymentMethod("paypal")}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "paypal"
                    ? "border-void-primary bg-void-primary/10"
                    : "border-void-border/30 bg-void-card/30 hover:border-void-border/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CreditCard size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">PayPal</p>
                    <p className="text-sm text-void-text-secondary">Pay securely with PayPal</p>
                  </div>
                  {paymentMethod === "paypal" && (
                    <CheckCircle size={20} className="text-void-primary ml-auto" />
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "card"
                    ? "border-void-primary bg-void-primary/10"
                    : "border-void-border/30 bg-void-card/30 hover:border-void-border/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-void-primary to-void-accent rounded-lg flex items-center justify-center">
                    <CreditCard size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">Credit/Debit Card</p>
                    <p className="text-sm text-void-text-secondary">Visa, Mastercard, American Express</p>
                  </div>
                  {paymentMethod === "card" && (
                    <CheckCircle size={20} className="text-void-primary ml-auto" />
                  )}
                </div>
              </button>

              {paymentMethod === "card" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4 pt-4 border-t border-void-border/30"
                >
                  <div>
                    <label className="block text-void-text-secondary text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-void-text-secondary text-sm mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-void-text-secondary text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-void-text-secondary text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                        className="w-full px-4 py-3 bg-void-card/50 border border-void-border/30 rounded-lg text-white placeholder-void-text-muted focus:outline-none focus:border-void-primary transition-colors"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
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
            
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto scrollbar-on-hover">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-12 h-12 bg-void-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard size={20} className="text-void-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-void-text-secondary text-xs">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-white font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6 border-t border-void-border/30 pt-4">
              <div className="flex justify-between text-void-text-secondary">
                <span>Subtotal</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-void-text-secondary">
                <span>Shipping</span>
                <span className="text-white">Free</span>
              </div>
              <div className="flex justify-between text-void-text-secondary">
                <span>Tax (10%)</span>
                <span className="text-white">${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-void-border/30 pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-void-primary">${(totalPrice * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {paymentMethod === "paypal" ? (
              <Button
                size="lg"
                className="w-full mb-4"
                onClick={handlePayPalPayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} className="mr-2" />
                    Pay with PayPal
                  </>
                )}
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full mb-4"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={20} className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Order"
                )}
              </Button>
            )}
            
            <div className="flex items-center justify-center gap-2 text-void-text-secondary text-sm mb-4">
              <Lock size={16} />
              <span>Secure checkout powered by SSL encryption</span>
            </div>
            
            <div className="p-4 bg-void-primary/10 rounded-lg border border-void-primary/20">
              <div className="flex items-start gap-2">
                <Lock size={16} className="text-void-primary flex-shrink-0 mt-0.5" />
                <p className="text-void-text-secondary text-xs">
                  Your payment information is secure. We use industry-standard encryption to protect your data.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
