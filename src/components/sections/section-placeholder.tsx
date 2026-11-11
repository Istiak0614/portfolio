type SectionPlaceholderProps = {
  id: string;
  title: string;
  note: string;
};

// Temporary anchor targets so navigation works; replaced milestone by milestone.
export function SectionPlaceholder({ id, title, note }: SectionPlaceholderProps) {
  return (
    <section id={id} className="container-page border-t border-line py-28">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-prose text-muted">{note}</p>
    </section>
  );
}
