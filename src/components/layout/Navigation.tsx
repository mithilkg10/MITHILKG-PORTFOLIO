"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data/resume";
import { RangeMark } from "@/components/ui/RangeMark";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labLink = navLinks.find((link) => link.href === "/lab");
  const regularLinks = navLinks.filter((link) => link.href !== "/lab");
  const primaryLinks = regularLinks.slice(0, 4);
  const moreLinks = regularLinks.slice(4);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-cyan-200/10 bg-[#020408]/80 py-4 shadow-[0_8px_40px_rgba(0,0,0,.2)] backdrop-blur-xl"
            : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="group flex items-center gap-3">
            <RangeMark className="nav-range-mark" />
            <span className="portfolio-wordmark">
              MKG
              <small>SECURITY ENGINEERING</small>
            </span>
          </a>

          <div className="relative hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 shadow-xl shadow-black/10 backdrop-blur-xl lg:flex">
            {labLink && (
              <a href={labLink.href} className="nav-cyber-link">
                {labLink.label}
              </a>
            )}

            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-white/10 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            {moreLinks.length > 0 && (
              <div className="group relative">
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-white/10 hover:text-foreground">
                  More <Menu className="h-3 w-3" />
                </button>
                <div className="invisible absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-[#05070b]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {moreLinks.map((link) => (
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
            )}
          </div>

          <button
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-foreground/70 hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-3 overflow-y-auto bg-[#020408]/95 py-24 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={link.href === "/lab"
                  ? "rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-3 font-heading text-2xl font-bold tracking-tight text-cyan-100"
                  : "font-heading text-2xl font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"}
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
