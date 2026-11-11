import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import type { Project } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  layout?: "wide" | "default" | "compact";
  priority?: boolean;
};

export function BrowserFrame({
  project,
  sizes,
  priority,
  className,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const host = project.liveUrl ? new URL(project.liveUrl).host : "github.com/Istiak0614";
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-surface", className)}>
      <div className="flex items-center gap-3 border-b border-line bg-ink/60 px-3.5 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </span>
        <span className="truncate rounded-md bg-white/[0.04] px-2.5 py-0.5 text-xs text-muted">{host}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} live site`}
          title="Live site"
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-10 border border-line")}
        >
          <Globe aria-hidden />
        </a>
      )}
      <a
        href={project.clientRepo}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} GitHub repository`}
        title="GitHub repository"
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-10 border border-line")}
      >
        <GithubIcon />
      </a>
    </div>
  );
}

function DetailsLink({ project, variant = "primary" }: { project: Project; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(buttonVariants({ variant, size: "md" }), "group/btn")}
    >
      View details
      <ArrowUpRight
        aria-hidden
        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      />
      <span className="sr-only"> about {project.name}</span>
    </Link>
  );
}

function StackList({ stack, limit }: { stack: string[]; limit: number }) {
  const shown = stack.slice(0, limit);
  const rest = stack.length - shown.length;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {shown.map((tech) => (
        <li key={tech} className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-[0.8rem] text-text">
          {tech}
        </li>
      ))}
      {rest > 0 && <li className="px-1.5 py-1 text-[0.8rem] text-muted">+{rest} more</li>}
    </ul>
  );
}

export function ProjectCard({ project, layout = "default", priority }: ProjectCardProps) {
  if (layout === "wide") {
    return (
      <article className="group glass relative grid grid-cols-1 gap-8 rounded-[var(--radius-card)] p-4 transition-[border-color,transform] duration-500 hover:border-electric/35 md:p-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-10">
        <BrowserFrame project={project} sizes="(min-width: 1024px) 40rem, 100vw" priority={priority} />
        <div className="px-2 pb-2 lg:px-0 lg:pr-4">
          <p className="text-sm text-electric-soft">Featured project</p>
          <h3 className="mt-2 text-[clamp(1.75rem,3vw,2.4rem)] font-semibold text-white">{project.name}</h3>
          <p className="mt-1 text-lg text-text">{project.tagline}</p>
          <p className="mt-4 text-muted">{project.description}</p>
          <div className="mt-6">
            <StackList stack={project.stack} limit={6} />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DetailsLink project={project} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  if (layout === "compact") {
    return (
      <article className="group glass grid grid-cols-1 gap-6 rounded-[var(--radius-card)] p-4 transition-[border-color] duration-500 hover:border-electric/35 sm:grid-cols-[16rem_1fr] sm:items-center md:p-5">
        <BrowserFrame project={project} sizes="16rem" />
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-1 text-muted">{project.tagline}</p>
          <div className="mt-4">
            <StackList stack={project.stack} limit={4} />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <DetailsLink project={project} variant="secondary" />
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group glass flex w-full min-w-0 flex-col rounded-[var(--radius-card)] p-4 transition-[border-color] duration-500 hover:border-electric/35 md:p-5">
      <BrowserFrame project={project} sizes="(min-width: 768px) 34rem, 100vw" />
      <div className="flex flex-1 flex-col px-1 pt-6">
        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-text">{project.tagline}</p>
        <p className="mt-3 text-[0.95rem] text-muted">{project.description}</p>
        <div className="mt-5">
          <StackList stack={project.stack} limit={5} />
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <DetailsLink project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
