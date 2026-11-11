import { Compass, Gamepad2, Workflow } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const degree = education[0];

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Studying", value: `B.Sc. in CSE at ${degree.shortName}, ${degree.period}` },
  { label: "Focus", value: "Full-stack web apps with the MERN stack and Next.js" },
  { label: "Currently learning", value: "C# and ASP.NET" },
  { label: "Off-screen", value: "Gaming on PC and mobile" },
];

const pillars = [
  { title: "Work I enjoy", icon: Workflow, text: profile.about.work },
  { title: "Beyond the code", icon: Gamepad2, text: profile.about.hobbies },
  { title: "How I work", icon: Compass, text: profile.about.workStyle },
];

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="about-title" title="About me" />
            <p className="mt-8 font-display text-[clamp(1.25rem,2.1vw,1.6rem)] leading-[1.45] font-normal text-text">
              {profile.about.journey}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-3">
            <dl className="glass divide-y divide-line rounded-[var(--radius-card)] px-6">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="text-[0.97rem] text-text">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map(({ title, icon: Icon, text }, index) => (
            <Reveal key={title} delay={index * 0.08} className="border-t border-line pt-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                <Icon aria-hidden className="size-5 text-electric" />
                {title}
              </h3>
              <p className="mt-3 text-muted">{text}</p>
              {title === "How I work" && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Personality traits">
                  {profile.about.traits.map((trait) => (
                    <li
                      key={trait}
                      className="rounded-full border border-electric/30 bg-electric/[0.08] px-3 py-1 text-sm text-electric-soft"
                    >
                      {trait}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
