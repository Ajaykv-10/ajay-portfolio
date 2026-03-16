import Image from "next/image";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (

    <main className="max-w-7xl mx-auto px-6 lg:px-8" >
      <HeroSection />
      <div id="about" className="min-h-screen py-24">About
      </div>
      <div id="lab" className="min-h-screen py-24">Lab
      </div>
      <div id="projects" className="min-h-screen py-24">Projects
      </div>
      <div id="contact" className="min-h-screen py-24">Contact
      </div>
    </main>

  );
}
