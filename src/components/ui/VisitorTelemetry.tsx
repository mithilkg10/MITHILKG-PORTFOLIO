"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Fingerprint } from "lucide-react";

export function VisitorTelemetry() {
  const [telemetry, setTelemetry] = useState({
    os: "Scanning...",
    browser: "Scanning...",
    connection: "Scanning...",
    screen: "Scanning...",
  });
  
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    // Simulate a slight delay for the "scan" effect
    const timer = setTimeout(() => {
      // Basic User Agent Parsing
      const ua = navigator.userAgent;
      let os = "Unknown OS";
      if (ua.indexOf("Win") !== -1) os = "Windows";
      if (ua.indexOf("Mac") !== -1) os = "macOS";
      if (ua.indexOf("Linux") !== -1) os = "Linux";
      if (ua.indexOf("Android") !== -1) os = "Android";
      if (ua.indexOf("like Mac") !== -1) os = "iOS";

      let browser = "Unknown Browser";
      if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
      else if (ua.indexOf("Safari") !== -1) browser = "Safari";
      else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
      else if (ua.indexOf("Edge") !== -1) browser = "Edge";

      // @ts-ignore - non-standard API
      const connection = navigator.connection?.effectiveType || "TLS 1.3 / Secure";

      setTelemetry({
        os,
        browser,
        connection: typeof connection === "string" ? connection.toUpperCase() : "SECURE",
        screen: `${window.screen.width}x${window.screen.height}`,
      });
      
      setScanned(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden font-mono text-[10px] sm:text-xs">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2 text-foreground/50">
        <Terminal className="h-3 w-3" />
        <span>VISITOR_TELEMETRY.exe</span>
      </div>
      
      {/* Body */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center text-foreground/70">
          <span className="flex items-center gap-2"><Fingerprint className="h-3 w-3 text-cyan-500" /> Identity:</span>
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-cyan-400"
          >
            {telemetry.os} / {telemetry.browser}
          </motion.span>
        </div>
        
        <div className="flex justify-between items-center text-foreground/70">
          <span>Resolution:</span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {telemetry.screen}
          </motion.span>
        </div>
        
        <div className="flex justify-between items-center text-foreground/70">
          <span>Connection:</span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {telemetry.connection}
          </motion.span>
        </div>

        <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between">
          <span className="text-foreground/50">Status:</span>
          {scanned ? (
            <span className="text-green-400 flex items-center gap-1">
              [ NO THREAT DETECTED ]
            </span>
          ) : (
            <span className="text-yellow-500 flex items-center gap-1 animate-pulse">
              <ShieldAlert className="h-3 w-3" /> ANALYZING...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
