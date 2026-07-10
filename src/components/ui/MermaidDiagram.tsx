"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface MermaidDiagramProps {
  chart: string;
  id: string;
}

export function MermaidDiagram({ chart, id }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          fontFamily: "var(--font-jetbrains-mono)",
        });

        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        
        if (isMounted) {
          setSvgContent(svg);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to render Mermaid diagram:", err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    }

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (loading) {
    return (
      <div className="flex min-h-[300px] w-full items-center justify-center rounded-xl border border-white/5 bg-white/[0.02]">
        <Loader2 className="h-6 w-6 animate-spin text-foreground/40" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[300px] w-full items-center justify-center rounded-xl border border-red-500/20 bg-red-500/5 text-sm text-red-400">
        Failed to render architecture diagram.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex w-full justify-center overflow-x-auto rounded-xl border border-white/10 bg-[#0d1117] p-6 custom-scrollbar"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
