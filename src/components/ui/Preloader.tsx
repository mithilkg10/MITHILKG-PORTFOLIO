"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ScrambleText } from "./ScrambleText";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<"scanning" | "verified" | "opening">("scanning");

  useEffect(() => {
    // Phase 1: Scanning (0 to 1.8s)
    // Phase 2: Verified (1.8s to 2.8s)
    const verifyTimer = setTimeout(() => setPhase("verified"), 1800);
    
    // Phase 3: Opening Doors (2.8s to 3.8s)
    const openTimer = setTimeout(() => setPhase("opening"), 2800);
    
    // Phase 4: Complete
    const completeTimer = setTimeout(() => setLoading(false), 3700);

    return () => {
      clearTimeout(verifyTimer);
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col overflow-hidden bg-transparent perspective-[1000px]">
      {/* 3D Wrapper that zooms past the user */}
      <motion.div
        animate={{ 
          scale: phase === "opening" ? 1.5 : 1,
          opacity: phase === "opening" ? 0 : 1
        }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Laser Unlock Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: phase === "verified" ? [0, 1, 1, 0] : 0, 
            scaleX: phase === "verified" ? [0, 1, 1, 1] : 0 
          }}
          transition={{ duration: 0.9, delay: 0.1, ease: "circInOut" }}
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-400 z-[101] drop-shadow-[0_0_15px_rgba(34,211,238,1)]"
          style={{ originY: 0.5 }}
        />

        {/* Top Door */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === "opening" ? "-100%" : 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-[#020408] border-b border-cyan-900/30 flex items-end justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.15)_0%,transparent_60%)]" />
        </motion.div>

        {/* Bottom Door */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === "opening" ? "100%" : 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#020408] border-t border-cyan-900/30 flex items-start justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15)_0%,transparent_60%)]" />
        </motion.div>

        {/* Central Mechanism */}
        <div className="absolute inset-0 flex items-center justify-center z-[102]">
          <AnimatePresence>
            {phase !== "opening" && (
              <motion.div
                key="lock"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: phase === "verified" ? [1, 1.05, 1] : 1 // Subtle impact pulse
                }}
                exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative flex flex-col items-center"
              >
                {/* Hexagon Outer Frame */}
                <svg className="absolute inset-[-45px] w-[138px] h-[138px] animate-[spin_10s_linear_infinite] opacity-30 text-cyan-500" viewBox="0 0 100 100">
                  <polygon fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" points="50 1 93 25 93 75 50 99 7 75 7 25" />
                </svg>

                {/* Outer rotating dashed ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className={`absolute inset-[-30px] rounded-full border-2 border-dashed transition-colors duration-500 ${
                    phase === "scanning" ? "border-cyan-500/20" : "border-cyan-400/60"
                  }`}
                />

                {/* Inner rotating solid ring */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className={`absolute inset-[-15px] rounded-full border-t-2 border-r-2 border-transparent transition-colors duration-500 ${
                    phase === "scanning" ? "border-t-cyan-500/40" : "border-t-cyan-300"
                  }`}
                />

                {/* Inner Shield Icon */}
                <div className="relative">
                  <div className={`absolute inset-0 blur-2xl transition-opacity duration-500 ${
                    phase === "verified" ? "opacity-100 bg-cyan-400" : "opacity-0"
                  }`} />
                  <ShieldCheck 
                    className={`relative w-12 h-12 transition-all duration-500 ${
                      phase === "verified" ? "text-cyan-300 scale-110 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" : "text-cyan-500/40 scale-100"
                    }`} 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Status Text */}
                <div className="absolute top-24 flex flex-col items-center w-[300px]">
                  <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-cyan-500/50 h-4">
                    {phase === "scanning" ? (
                      <motion.span 
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        SECURING CONNECTION
                      </motion.span>
                    ) : (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      >
                        ACCESS GRANTED
                      </motion.span>
                    )}
                  </div>
                  
                  {phase === "verified" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mt-3 font-heading text-sm tracking-[0.3em] text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    >
                      <ScrambleText text="MITHIL K. GOWDA" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
