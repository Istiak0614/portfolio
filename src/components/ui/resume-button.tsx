"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResumeButtonProps = ButtonVariantProps & {
  className?: string;
  wrapperClassName?: string;
  label?: string;
};

export function ResumeButton({ variant, size, className, wrapperClassName, label = "View résumé" }: ResumeButtonProps) {
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(false), 3500);
    return () => clearTimeout(timer);
  }, [notice]);

  if (profile.resume.available) {
    return (
      <a
        href={profile.resume.href}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant, size }), className)}
      >
        <FileText aria-hidden />
        {label}
      </a>
    );
  }

  return (
    <span className={cn("relative inline-flex", wrapperClassName)}>
      <button
        type="button"
        onClick={() => setNotice(true)}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        <FileText aria-hidden />
        {label}
      </button>
      <span aria-live="polite" className="pointer-events-none absolute top-full left-0 z-10 mt-2 w-max max-w-[16rem]">
        <AnimatePresence>
          {notice && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="block rounded-lg border border-electric/30 bg-surface-raised px-3 py-2 text-sm text-text shadow-[0_12px_30px_-10px_rgb(0_0_0/0.8)]"
            >
              Résumé is being updated. Email me for a copy.
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </span>
  );
}
