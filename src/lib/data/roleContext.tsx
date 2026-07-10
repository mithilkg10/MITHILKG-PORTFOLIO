"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export const AVAILABLE_ROLES = [
  "General",
  "Cybersecurity Engineer",
  "SOC Analyst",
  "Application Security Engineer",
  "Cloud Security Engineer",
  "AI Security Engineer",
  "Threat Intelligence Analyst",
  "DevSecOps Engineer",
  "DFIR Analyst",
  "GRC Analyst",
  "Software Engineer",
  "Backend Engineer",
  "Data Scientist",
  "Data Analyst",
  "Business Intelligence Analyst",
  "AI / ML Engineer"
] as const;

export type Role = typeof AVAILABLE_ROLES[number];

interface RoleContextType {
  selectedRole: Role;
  setSelectedRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [selectedRole, setSelectedRole] = useState<Role>("General");

  return (
    <RoleContext.Provider value={{ selectedRole, setSelectedRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
