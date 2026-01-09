// ... imports ...
// TechStackScroll import removed
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroTransition from "@/components/sections/HeroTransition";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* HeroTransition restored */}
      <div className="relative z-10 bg-black">
        <HeroTransition />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
