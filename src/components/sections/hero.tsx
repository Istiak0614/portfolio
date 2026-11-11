"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { ResumeButton } from "@/components/ui/resume-button";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/brand-icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon, external: true },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon, external: true },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, icon: WhatsappIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
];

const nameLines = ["Md. Istiak", "Hossain Ifti"];

const delay = (seconds: number) => ({ animationDelay: `${seconds}s` });

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute -top-48 right-[-12%] -z-10 size-[38rem] rounded-full bg-electric/20 blur-[140px]"
      />
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="absolute bottom-[-25%] left-[-12%] -z-10 size-[30rem] rounded-full bg-violet/10 blur-[140px]"
      />

      <div className="container-page grid grid-cols-1 min-h-dvh items-center gap-14 pt-28 pb-20 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-20">
        <div className="max-w-xl">
          <p
            className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1 text-sm text-muted"
            style={delay(0.05)}
          >
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-electric/60" />
              <span className="relative inline-flex size-2 rounded-full bg-electric" />
            </span>
            Open to opportunities
          </p>

          <h1 className="text-[clamp(2.75rem,6.4vw,4.75rem)] font-semibold text-white">
            <span className="sr-only">{profile.name}</span>
            {nameLines.map((line, index) => (
              <span key={line} aria-hidden className="block overflow-hidden pb-[0.08em]">
                <span className="animate-line-up block" style={delay(0.1 + index * 0.08)}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="animate-rise mt-5 flex items-center gap-3 font-display text-[clamp(1.25rem,2.4vw,1.7rem)] font-medium text-electric-soft"
            style={delay(0.25)}
          >
            <span aria-hidden className="h-px w-8 bg-electric/60" />
            {profile.designation}
          </p>

          <p className="animate-rise mt-6 max-w-[34rem] text-lg text-muted" style={delay(0.3)}>
            {profile.intro}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={delay(0.38)}>
            <ResumeButton label="View & download résumé" />
            <a href="#contact" className={buttonVariants({ variant: "secondary" })}>
              Contact me
            </a>
          </div>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={delay(0.46)}
          >
            <ul className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="grid size-10 place-items-center rounded-xl border border-line text-muted transition-[color,border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-electric/10 hover:text-white"
                  >
                    <Icon className="size-[1.1rem]" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <MapPin aria-hidden className="size-4" />
              {profile.location}
            </p>
          </div>

          <div className="animate-rise mt-10 border-t border-line pt-6" style={delay(0.54)}>
            <p className="text-sm text-muted">Core stack</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.coreStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-text"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-[22rem] md:max-w-[26rem]">
          <div className="animate-settle" style={delay(0.2)}>
            <PortraitFrame />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitFrame() {
  return (
    <div className="relative p-5">
      {(["top-0 left-0", "top-0 right-0 rotate-90", "bottom-0 right-0 rotate-180", "bottom-0 left-0 -rotate-90"] as const).map(
        (position) => (
          <span key={position} aria-hidden className={`absolute size-5 ${position}`}>
            <span className="absolute top-0 left-0 h-px w-full bg-electric/70" />
            <span className="absolute top-0 left-0 h-full w-px bg-electric/70" />
          </span>
        ),
      )}

      <div
        aria-hidden
        className="absolute inset-8 -z-10 rounded-[var(--radius-card)] bg-gradient-to-br from-electric/45 via-electric/5 to-violet/35 blur-2xl"
      />

      <div className="glass relative overflow-hidden rounded-[var(--radius-card)] p-1.5">
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={720}
          height={900}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 768px) 26rem, 22rem"
          className="h-auto w-full rounded-[calc(var(--radius-card)-0.375rem)]"
        />
        <div className="glass absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl px-4 py-3">
          <div>
            <p className="font-display text-sm font-semibold text-white">{profile.shortName}</p>
            <p className="text-xs text-muted">B.Sc. CSE · IUBAT</p>
          </div>
          <span className="rounded-md bg-electric/15 px-2 py-1 text-xs font-medium text-electric-soft">
            MERN
          </span>
        </div>
      </div>
    </div>
  );
}