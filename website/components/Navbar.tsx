"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Disc as Discord } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Reviews", href: "/reviews" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-void-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
            <Image src="/logo.png" alt="Pulse Tweaks" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-void-primary transition-colors">
            Pulse Tweaks
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-void-primary",
                pathname === item.href ? "text-void-primary" : "text-void-text-secondary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://discord.gg/6yDpsvznMj"
            target="_blank"
            className="flex items-center gap-2 bg-void-primary/10 text-void-primary px-4 py-2 rounded-lg border border-void-primary/20 hover:bg-void-primary hover:text-white transition-all"
          >
            <Discord size={18} />
            <span className="text-sm font-bold">Join Discord</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-void-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium",
                pathname === item.href ? "text-void-primary" : "text-void-text-secondary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
