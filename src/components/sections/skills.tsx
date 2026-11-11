import { Cpu, Layers, Server, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import type { SkillLevel } from "@/types";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillIcon } from "@/components/sections/skill-icon";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Layers,
  "Backend & Databases": Server,
  "Tools & Platforms": Wrench,
  "Other Engineering": Cpu,
};

const levels: { level: SkillLevel; filled: number; bar: string }[] = [
  { level: "Comfortable", filled: 3, bar: "bg-electric" },
  { level: "Working knowledge", filled: 2, bar: "bg-electric/55" },
  { level: "Learning", filled: 1, bar: "bg-violet/70" },
];

const allSkills = skillCategories.flatMap((category) => category.skills);

function LevelMeter({ level }: { level: SkillLevel }) {
  const { filled, bar } = levels.find((item) => item.level === level)!;
  return (
    <span className="flex items-center gap-1" aria-hidden>
      {[1, 2, 3].map((step) => (
        <span
          key={step}
          className={cn(
            "h-1.5 w-4 rounded-full",
            step <= filled ? bar : "bg-white/10",
          )}
        />
      ))}
    </span>
  );
}

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-electric/[0.07] blur-[120px]"
      />
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              id="skills-title"
              title="Skills"
              description="The tools I build with, grouped by area and rated honestly by how I use them today."
            />
          </Reveal>

          <Reveal delay={0.1} className="w-full lg:max-w-md">
            <div
              className="flex h-2.5 overflow-hidden rounded-full bg-white/5"
              role="img"
              aria-label={levels
                .map(({ level }) => `${allSkills.filter((s) => s.level === level).length} ${level}`)
                .join(", ")}
            >
              {levels.map(({ level, bar }) => (
                <span
                  key={level}
                  className={cn("h-full", bar)}
                  style={{ width: `${(allSkills.filter((s) => s.level === level).length / allSkills.length) * 100}%` }}
                />
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {levels.map(({ level }) => (
                <li key={level} className="flex items-center gap-2.5">
                  <LevelMeter level={level} />
                  {level}
                  <span className="text-text">{allSkills.filter((s) => s.level === level).length}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.title] ?? Layers;
            return (
              <Reveal
                key={category.title}
                delay={(index % 2) * 0.08}
                className="glass group/card rounded-[var(--radius-card)] p-6 transition-colors duration-500 hover:border-electric/30 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-electric/30 bg-electric/10 text-electric-soft">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="mt-1 text-sm text-muted">{category.description}</p>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group/skill flex items-center justify-between gap-3 border-t border-line py-3"
                    >
                      <span className="flex items-center gap-3 text-[0.97rem] text-text">
                        <SkillIcon
                          name={skill.name}
                          className="size-[1.1rem] text-muted transition-colors duration-300 group-hover/skill:text-electric-soft"
                        />
                        {skill.name}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="sr-only">{skill.level}</span>
                        <LevelMeter level={skill.level} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
