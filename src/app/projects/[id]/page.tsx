"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShieldAlert, ArrowLeft, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ProjectCaseStudy() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [text, setText] = useState("");
  const fullText = `> INITIATING SECURE CONNECTION...
> TARGET SECURED: PROJECT_${id?.toUpperCase()}_CASE_STUDY
> 
> STATUS: UNDER CONSTRUCTION
> ACCESS: RESTRICTED UNTIL COMPLETION
> 
> THE ARCHITECTURE DOCUMENTS, THREAT MODELS, AND DEPLOYMENT SCRIPTS FOR THIS PROJECT ARE CURRENTLY BEING COMPILED FOR PUBLIC CLEARANCE.
> 
> PLEASE RETURN LATER FOR THE FULL TECHNICAL DEBRIEF.`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Typing speed

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] p-6 text-foreground">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden rounded-[2rem] border border-red-500/20 bg-red-950/10 shadow-[0_0_50px_-12px_rgba(239,68,68,0.15)]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-6 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-2 font-mono text-xs text-foreground/40">
              <Terminal className="h-3.5 w-3.5" />
              <span>bash - root@mithil-server</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-8">
            <div className="mb-6 flex items-center gap-4 text-red-500/80">
              <ShieldAlert className="h-8 w-8" />
              <h1 className="font-heading text-2xl font-bold tracking-tight">ACCESS RESTRICTED</h1>
            </div>
            
            <div className="min-h-[200px] font-mono text-sm leading-relaxed text-foreground/70">
              {text}
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-foreground/70" />
            </div>

            <div className="mt-12 flex justify-start">
              <MagneticButton onClick={() => router.back()} variant="secondary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Terminate Connection
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
