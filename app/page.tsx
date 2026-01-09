// ... imports ...
import TechStackScroll from "@/components/TechStackScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// HeroTransition import removed
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

      {/* 
        The TechStackScroll component handles the main storytelling experience.
        It occupies a large scroll height (500vh) to allow for the animation.
      */}
      <div id="top">
        <TechStackScroll />
      </div>

      <div className="relative z-10 bg-black">
        {/* HeroTransition removed */}
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
