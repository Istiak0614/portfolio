"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { ResumeButton } from "@/components/ui/resume-button";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("/#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 transition-[background-color,border-color,box-shadow] duration-500 md:px-5",
          open
            ? "border border-line bg-surface/95 backdrop-blur-xl"
            : scrolled
            ? "glass shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)]"
            : "border border-transparent",
        )}
      >
        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 font-display text-lg font-semibold text-white"
        >
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-xl border border-electric/40 bg-electric/10 text-sm text-electric-soft transition-colors group-hover:bg-electric/20"
          >
            IH
          </span>
          {profile.shortName}
          <span className="sr-only">, home</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("/#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-lg px-3.5 py-2 text-[0.94rem] transition-colors",
                    isActive ? "text-white" : "text-muted hover:text-text",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <ResumeButton size="sm" variant="secondary" label="Résumé" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-xl text-text hover:bg-white/5 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-surface/95 p-3 shadow-[0_20px_50px_-12px_rgb(0_0_0/0.7)] backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, index) => {
                const isActive = active === link.href.replace("/#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-base",
                        isActive ? "bg-white/[0.06] text-white" : "text-muted hover:text-text",
                      )}
                    >
                      {link.label}
                      {isActive && <span aria-hidden className="size-1.5 rounded-full bg-electric" />}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="mt-2 border-t border-line px-1 pt-3">
              <ResumeButton variant="secondary" className="w-full" wrapperClassName="flex w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
