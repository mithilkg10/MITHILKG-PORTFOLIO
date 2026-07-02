"use client";

import { motion } from "framer-motion";
import { ArrowUp, Shield } from "lucide-react";
import { personal } from "@/lib/data/resume";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 bg-background/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <Shield className="h-4 w-4 text-foreground/80" />
          </div>
          <span className="font-mono text-sm text-foreground/50">
            {personal.name} &copy; {new Date().getFullYear()}
          </span>
        </div>

        <p className="text-center font-mono text-sm text-foreground/40">
          Securing critical infrastructure through research & engineering
        </p>

        <motion.button
          suppressHydrationWarning
          onClick={scrollTop}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-foreground/60 transition-colors hover:bg-white/10 hover:text-foreground"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
          Back to top
        </motion.button>
      </div>
    </footer>
  );
}
