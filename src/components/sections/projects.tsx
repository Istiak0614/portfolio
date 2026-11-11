import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const [flagship, ...featured] = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section aria-labelledby="projects-title" id="projects" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="absolute top-40 left-[-10%] -z-10 size-[32rem] rounded-full bg-violet/[0.08] blur-[140px]"
      />
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="projects-title"
            title="Projects"
            description="Live web apps I designed and built end to end, plus a computer-vision project from my coursework."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          <Reveal>
            <ProjectCard project={flagship} layout="wide" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08} className="flex">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {more.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h3 className="text-xl font-semibold text-white">Beyond the web</h3>
              <p className="mt-2 text-muted">Hardware and machine-learning work outside the browser.</p>
            </Reveal>
            <div className="mt-6 space-y-6">
              {more.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectCard project={project} layout="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
