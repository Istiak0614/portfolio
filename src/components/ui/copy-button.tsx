"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied" : `Copy ${label}`}
      className="relative grid size-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-electric/50 hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <Check aria-hidden className="size-4 text-electric" /> : <Copy aria-hidden className="size-4" />}
        </motion.span>
      </AnimatePresence>
      <span aria-live="polite" className="sr-only">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}