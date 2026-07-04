"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrambleText } from "./ScrambleText";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, description, className, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("mb-16 max-w-3xl", align === "center" && "mx-auto text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground/80">
        {label}
      </span>
      <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
        <ScrambleText text={title} className="text-foreground" />
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
