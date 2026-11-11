import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ id, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 id={id} className="text-[clamp(2rem,4.2vw,3rem)] font-semibold text-white">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </div>
  );
}
