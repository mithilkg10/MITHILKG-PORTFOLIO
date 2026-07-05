"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "0123456789ABCDEF";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger when it comes into view
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    let animationFrame: number;

    const scramble = () => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            // Keep spaces, or if iteration has passed this index, show the real char
            if (index < iteration || char === " ") {
              return text[index];
            }
            // Otherwise, show a random char
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      iteration += 1 / 8; // Slower speed for the decrypt effect
      animationFrame = requestAnimationFrame(scramble);
    };

    animationFrame = requestAnimationFrame(scramble);

    return () => cancelAnimationFrame(animationFrame);
  }, [text, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
