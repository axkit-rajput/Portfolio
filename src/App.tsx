import React from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

export const App: React.FC = () => {
  const activeSection = useScrollSpy([
    'projects',
    'about',
    'skills',
    'experience',
    'achievements',
    'contact',
  ]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#0C0D12] text-white selection:bg-[#E05D38] selection:text-white transition-colors duration-200">
      {/* Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Landmark - Streamlined 5 Compact Portrait-Length Sections */}
      <main className="flex-1" id="main-content">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
};

export default App;
