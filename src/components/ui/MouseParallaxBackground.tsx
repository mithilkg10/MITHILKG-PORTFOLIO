"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseParallaxBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 30);
      mouseY.set(y * 30);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyber-blue/10 blur-[120px]"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-accent/10 blur-[100px]"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[80px]"
        style={{ x: springX, y: springY }}
      />
      <div className="cyber-grid absolute inset-0 opacity-40" />
    </div>
  );
}
