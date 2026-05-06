"use client";

import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2, Zap, Cpu, Wrench, Shield, Gamepad2, Monitor } from "lucide-react";
import Image from "next/image";

// Custom loading variables matching desktop interface
const loadingMessages = [
  "Initializing Pulse Engine...",
  "Loading system modules...",
  "Scanning registry entries...",
  "Configuring optimization profiles...",
  "Loading tweak definitions...",
  "Initializing security protocols...",
  "Setting up performance monitoring...",
  "Preparing user interface...",
  "Loading theme preferences...",
  "Finalizing startup sequence..."
];

const loadingIcons = [Wrench, Shield, Gamepad2, Monitor, Zap, Cpu];

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0]);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let messageIndex = 0;
      let iconIndex = 0;
      
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => setLoading(false), 500);
            return 100;
          }
          
          // Update message and icon periodically
          if (Math.random() > 0.7) {
            messageIndex = (messageIndex + 1) % loadingMessages.length;
            setCurrentMessage(loadingMessages[messageIndex]);
            iconIndex = (iconIndex + 1) % loadingIcons.length;
            setCurrentIconIndex(iconIndex);
          }
          
          return prev + Math.random() * 12;
        });
      }, 150);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-void-primary/20 via-background to-void-accent/20 backdrop-blur-xl"
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Logo Container */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32"
        >
          <div className="absolute inset-0 bg-void-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Pulse Tweaks Logo" 
              width={120} 
              height={120}
              className="object-contain filter drop-shadow-[0_0_30px_rgba(65,105,225,0.5)]"
            />
          </div>
        </motion.div>

        {/* Loading Text with Dynamic Messages */}
        <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white"
          >
            Pulse Tweaks
          </motion.h1>
          
          <div className="flex items-center justify-center gap-3">
            <motion.div
              key={currentIconIndex}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="text-void-primary"
            >
              {loadingIcons[currentIconIndex] && React.createElement(loadingIcons[currentIconIndex], { size: 20 })}
            </motion.div>
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-void-text-secondary text-lg"
            >
              {currentMessage}
            </motion.p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 space-y-2">
          <div className="h-2 bg-void-border/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-void-primary to-void-accent rounded-full shadow-lg"
            />
          </div>
          <div className="flex justify-between text-xs text-void-text-muted">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            className="absolute top-20 left-20"
          >
            <Cpu className="text-void-primary/30" size={24} />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-20"
          >
            <Zap className="text-void-accent/30" size={24} />
          </motion.div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-void-primary rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
