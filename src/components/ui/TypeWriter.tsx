"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

export function TypeWriter({ words, className }: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <span className={className}>
      {text}
      <motion.span
        className="ml-1 inline-block h-[1em] w-[2px] bg-foreground"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}
