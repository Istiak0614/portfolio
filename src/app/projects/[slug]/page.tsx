import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Globe, Lightbulb, Target } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { BrowserFrame } from "@/components/projects/project-card";
import { GithubIcon } from "@/components/icons/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: { images: [project.image] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="relative isolate overflow-hidden pt-28 pb-24 md:pt-32">
      <div aria-hidden className="blueprint-grid absolute inset-x-0 top-0 -z-10 h-[40rem]" />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] -z-10 size-[34rem] rounded-full bg-electric/15 blur-[140px]"
      />

      <article className="container-page">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <ArrowLeft aria-hidden className="size-4" />
          All projects
        </Link>

        <header className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold text-white">{project.name}</h1>
            <p className="mt-3 text-xl text-electric-soft">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonVariants()}>
                <Globe aria-hidden />
                Live site
              </a>
            )}
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              <GithubIcon />
              {project.liveUrl ? "Client repository" : "GitHub repository"}
            </a>
          </div>
        </header>

        <Reveal className="mt-12">
          <div className="glass rounded-[var(--radius-card)] p-2 md:p-3">
            <BrowserFrame project={project} sizes="(min-width: 1152px) 70rem, 100vw" priority />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Overview</h2>
            <p className="mt-4 text-lg text-muted">{project.description}</p>
            <h3 className="mt-10 text-lg font-semibold text-white">Key features</h3>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-text">
                  <CheckCircle2 aria-hidden className="mt-1 size-[1.1rem] shrink-0 text-electric" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass rounded-[var(--radius-card)] p-6 md:p-7">
              <h2 className="text-lg font-semibold text-white">Main technology stack</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-electric/25 bg-electric/[0.07] px-3 py-1.5 text-sm text-text"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <dl className="mt-7 space-y-4 border-t border-line pt-6 text-sm">
                <div>
                  <dt className="text-muted">Live project</dt>
                  <dd className="mt-1">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="break-all text-electric-soft hover:underline">
                        {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </a>
                    ) : (
                      <span className="text-text">Hardware project, runs locally</span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">{project.liveUrl ? "Client repository" : "Repository"}</dt>
                  <dd className="mt-1">
                    <a href={project.clientRepo} target="_blank" rel="noreferrer" className="break-all text-electric-soft hover:underline">
                      {project.clientRepo.replace("https://", "")}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>

        <section aria-labelledby="challenges-title" className="mt-24">
          <Reveal>
            <h2 id="challenges-title" className="flex items-center gap-3 text-2xl font-semibold text-white md:text-3xl">
              <Target aria-hidden className="size-6 text-electric" />
              Challenges I solved
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {project.challenges.map((challenge, i) => (
              <Reveal key={challenge.title} delay={i * 0.08} className="border-t border-electric/40 pt-5">
                <h3 className="text-lg font-semibold text-white">{challenge.title}</h3>
                <p className="mt-2 text-muted">{challenge.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="plans-title" className="mt-20">
          <Reveal className="glass rounded-[var(--radius-card)] p-6 md:p-8">
            <h2 id="plans-title" className="flex items-center gap-3 text-2xl font-semibold text-white">
              <Lightbulb aria-hidden className="size-6 text-violet" />
              Future improvements
            </h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              {project.futurePlans.map((plan) => (
                <li key={plan} className="rounded-xl border border-line bg-ink/40 px-4 py-3.5 text-text">
                  {plan}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <nav aria-label="More projects" className="mt-20 flex flex-col gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/#projects" className={buttonVariants({ variant: "ghost" })}>
            <ArrowLeft aria-hidden />
            Back to all projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="group text-right">
            <span className="block text-sm text-muted">Next project</span>
            <span className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-semibold text-white transition-colors group-hover:text-electric-soft">
              {next.name}
              <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </nav>
      </article>
    </main>
  );
}
