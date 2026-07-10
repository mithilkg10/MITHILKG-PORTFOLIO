"use client";

import React, { useState } from "react";
import { useRole, AVAILABLE_ROLES, Role } from "@/lib/data/roleContext";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RoleSelector() {
  const { selectedRole, setSelectedRole } = useRole();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50 flex flex-col items-end">
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
          Viewing As
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-black px-4 py-1.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
        >
          {selectedRole}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-64 origin-top-right rounded-xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex max-h-64 flex-col gap-1 overflow-y-auto pr-1 custom-scrollbar">
              {AVAILABLE_ROLES.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setSelectedRole(role as Role);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm text-left transition-colors ${
                    selectedRole === role
                      ? "bg-white/10 text-white font-medium"
                      : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
                  }`}
                >
                  {role}
                  {selectedRole === role && <Check className="h-4 w-4 text-white" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
