import React from 'react';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080812] text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden font-sans">
      {/* Dynamic Canvas Particles & Ambient Mesh */}
      <BackgroundParticles />

      {/* Modern Transparent Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Full-Screen Center-Aligned Cinematic Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Showcase Section */}
        <Projects />

        {/* 5. Education & Credentials Section */}
        <Education />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
