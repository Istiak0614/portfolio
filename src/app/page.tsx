import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { profile } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] -z-10 size-[36rem] rounded-full bg-electric/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] -z-10 size-[28rem] rounded-full bg-violet/10 blur-[140px]"
      />

      <section className="container-page grid min-h-dvh items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted">
            <span className="size-1.5 rounded-full bg-electric" aria-hidden />
            Open to opportunities
          </p>

          <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-semibold text-white">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium text-electric-soft">
            {profile.designation}
          </p>

          <p className="mt-6 max-w-[34rem] text-lg text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={buttonVariants()}>
              <Mail aria-hidden />
              Email me
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>

          <p className="mt-10 text-sm text-muted">
            Full portfolio in progress. Projects, skills and contact details are on the way.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[calc(var(--radius-card)+0.75rem)] bg-gradient-to-br from-electric/40 via-transparent to-violet/30 opacity-70 blur-xl"
          />
          <div className={cn("glass relative overflow-hidden rounded-[var(--radius-card)] p-2")}>
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={720}
              height={900}
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="h-auto w-full rounded-[calc(var(--radius-card)-0.5rem)]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
