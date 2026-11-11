import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { CurrentYear } from "@/components/layout/current-year";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/brand-icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, icon: WhatsappIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40">
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-[1.4fr_1fr_auto] md:gap-12">
        <div>
          <Link href="/#home" className="inline-flex items-center gap-2.5 font-display text-lg font-semibold text-white">
            <span
              aria-hidden
              className="grid size-9 place-items-center rounded-xl border border-electric/40 bg-electric/10 text-sm text-electric-soft"
            >
              IH
            </span>
            {profile.name}
          </Link>
          <p className="mt-4 max-w-sm text-muted">
            {profile.designation} building complete, well-structured web applications.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="grid size-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-electric/50 hover:text-white"
                >
                  <Icon className="size-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-medium text-white">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-text transition-colors hover:border-electric/50 hover:text-white"
          >
            <ArrowUp aria-hidden className="size-4" />
            Back to top
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}