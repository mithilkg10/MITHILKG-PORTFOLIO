"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { navLinks, personal, resumePath } from "@/lib/data/resume";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled ? "bg-background/80 py-4 backdrop-blur-xl border-b border-white/5" : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black transition-transform duration-300 group-hover:scale-105">
              <Shield className="h-5 w-5" />
            </div>
            <span className="hidden font-heading text-sm font-bold tracking-widest sm:block">
              {personal.firstName.toUpperCase()}
              <span className="text-foreground/40">.SEC</span>
            </span>
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 lg:flex relative">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-white/10 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            
            <div className="group relative">
              <button className="rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-white/10 hover:text-foreground flex items-center gap-1">
                More <Menu className="h-3 w-3" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-black/90 p-2 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl">
                {navLinks.slice(5).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Resume button removed per user request */}
          </div>

          <button
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-foreground/70 hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-heading text-2xl font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
