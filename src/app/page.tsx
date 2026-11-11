import { Hero } from "@/components/sections/hero";
import { SectionPlaceholder } from "@/components/sections/section-placeholder";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionPlaceholder id="about" title="About me" note="My journey, the work I enjoy and life beyond code." />
      <SectionPlaceholder id="skills" title="Skills" note="Frontend, backend, tools and other engineering." />
      <SectionPlaceholder id="education" title="Education" note="B.Sc. in Computer Science & Engineering at IUBAT." />
      <SectionPlaceholder id="projects" title="Projects" note="StudioSpace, Bazardor, FitLog and more." />
      <SectionPlaceholder id="contact" title="Contact" note="Email, phone and WhatsApp." />
    </main>
  );
}
