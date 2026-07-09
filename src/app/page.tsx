import DotGrid from "@/components/DotGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import CodingProfiles from "@/components/sections/CodingProfiles";
import FeaturedProject from "@/components/sections/FeaturedProject";
import Projects from "@/components/sections/Projects";
import Milestones from "@/components/sections/Milestones";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <DotGrid />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <CodingProfiles />
        <FeaturedProject />
        <Projects />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
