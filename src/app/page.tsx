import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { SectionPlaceholder } from "@/components/sections/section-placeholder";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <SectionPlaceholder id="education" title="Education" note="B.Sc. in Computer Science & Engineering at IUBAT." />
      <SectionPlaceholder id="projects" title="Projects" note="StudioSpace, Bazardor, FitLog and more." />
      <SectionPlaceholder id="contact" title="Contact" note="Email, phone and WhatsApp." />
    </main>
  );
}
