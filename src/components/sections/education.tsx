import { ArrowUpRight, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { YearTrack } from "@/components/sections/year-track";

function yearsBetween(period: string) {
  const [start, end] = period.match(/\d{4}/g)!.map(Number);
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="relative py-28 md:py-36">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="education-title"
            title="Education"
            description="Studying computer science while building real projects alongside the coursework."
          />
        </Reveal>

        {education.map((item) => {
          const years = yearsBetween(item.period);
          return (
            <Reveal key={item.degree} delay={0.1} className="mt-14">
              <article className="glass relative overflow-hidden rounded-[var(--radius-card)]">
                <div
                  aria-hidden
                  className="blueprint-grid absolute inset-0 -z-10 opacity-60"
                />

                <div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                  <div>
                    <span className="grid size-12 place-items-center rounded-xl border border-electric/30 bg-electric/10 text-electric-soft">
                      <GraduationCap aria-hidden className="size-6" />
                    </span>
                    <h3 className="mt-6 text-[clamp(1.5rem,2.6vw,2rem)] font-semibold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-3 text-lg text-text">
                      {item.institution}{" "}
                      <span className="text-muted">({item.shortName})</span>
                    </p>
                    <p className="mt-1 text-muted">{item.status}</p>

                    <div className="mt-10">
                      <YearTrack years={years} label={`Study period ${item.period}`} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-muted">Course projects</h4>
                    <ul className="mt-4 space-y-3">
                      {item.courseProjects.map((project) => (
                        <li key={project.name}>
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="group block rounded-xl border border-line bg-ink/40 p-5 transition-[border-color,background-color] duration-300 hover:border-electric/40 hover:bg-electric/[0.05]"
                          >
                            <span className="flex items-start justify-between gap-4">
                              <span className="font-display text-lg font-semibold text-white">
                                {project.name}
                              </span>
                              <ArrowUpRight
                                aria-hidden
                                className="mt-1 size-4 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric-soft"
                              />
                            </span>
                            <span className="mt-2 block text-[0.95rem] text-muted">{project.summary}</span>
                            <span className="sr-only">(opens GitHub repository)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
