import { HeroSection } from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import { SkillSection } from "./components/SkillSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 overflow-hidden">
      <HeroSection />
      <About />
      <Projects />
      <SkillSection />
      <Contact />
    </main>
  );
}
