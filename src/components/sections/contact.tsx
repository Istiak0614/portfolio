import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/brand-icons";

const whatsappLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  "Hi Ifti, I found your portfolio and would like to connect.",
)}`;

const methods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: profile.phoneDisplay,
    href: whatsappLink,
    icon: WhatsappIcon,
    external: true,
  },
];

const profiles = [
  { label: "LinkedIn", value: "md-istiak-hossain-ifti", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Istiak0614", href: profile.socials.github, icon: GithubIcon },
];

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -z-10 h-[28rem] w-[min(60rem,100%)] -translate-x-1/2 rounded-full bg-electric/[0.09] blur-[140px]"
      />
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 [&>*]:min-w-0">
        <Reveal>
          <SectionHeading
            id="contact-title"
            title="Contact"
            description="Hiring for a role, planning a project or just have a question? Reach me directly by email, phone or WhatsApp."
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={buttonVariants()}>
              <Mail aria-hidden />
              Send an email
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              <WhatsappIcon />
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">Based in {profile.location}.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="glass divide-y divide-line rounded-[var(--radius-card)]">
            {methods.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label} className="flex items-center gap-4 p-5 md:p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-electric/30 bg-electric/10 text-electric-soft">
                  <Icon aria-hidden className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted">{label}</p>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="block font-display text-base font-medium [overflow-wrap:anywhere] text-white transition-colors hover:text-electric-soft sm:text-lg"
                  >
                    {value}
                  </a>
                </div>
                <CopyButton value={label === "Email" ? profile.email : profile.phone} label={label.toLowerCase()} />
              </li>
            ))}
            <li className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 md:p-6">
              {profiles.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-line px-4 py-3 transition-colors hover:border-electric/40 hover:bg-electric/[0.05]"
                >
                  <Icon className="size-5 text-muted transition-colors group-hover:text-white" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-text">{label}</span>
                    <span className="block truncate text-xs text-muted">{value}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-muted transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric-soft"
                  />
                </a>
              ))}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}