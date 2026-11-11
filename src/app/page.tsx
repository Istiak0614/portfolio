import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { SectionPlaceholder } from "@/components/sections/section-placeholder";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <SectionPlaceholder id="projects" title="Projects" note="StudioSpace, Bazardor, FitLog and more." />
      <SectionPlaceholder id="contact" title="Contact" note="Email, phone and WhatsApp." />
    </main>
  );
}
