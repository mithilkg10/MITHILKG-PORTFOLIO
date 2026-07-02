"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  external,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-foreground text-background font-semibold hover:bg-foreground/90 shadow-sm",
    secondary:
      "glass-card text-foreground border border-white/10 hover:border-white/20 hover:bg-white/5",
    ghost: "text-foreground/70 hover:text-foreground hover:bg-white/5",
  };

  const baseClass = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300",
    variants[variant],
    className
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 200, damping: 20, mass: 0.1 },
  };

  if (href) {
    return (
      <motion.a
        suppressHydrationWarning
        ref={ref}
        href={href}
        className={baseClass}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        {...motionProps}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      suppressHydrationWarning
      ref={ref}
      type={type}
      className={baseClass}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
