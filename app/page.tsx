import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import WhatISolve from "@/components/WhatISolve";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatISolve />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ImpactStats />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
