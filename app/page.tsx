import { Hero } from "@/components/portfolio/hero";
import { Navigation } from "@/components/portfolio/navigation";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 lg:pt-0 lg:pl-48">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
