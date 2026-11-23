import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { CodingProfiles } from './sections/CodingProfiles';
import { Contact } from './sections/Contact';

export const App: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useScrollSpy([
    'about',
    'skills',
    'projects',
    'experience',
    'education',
    'achievements',
    'profiles',
    'contact',
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0A0D14] text-[#171717] dark:text-[#F3F4F6] transition-colors duration-200">
      {/* Sticky Header */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Landmark */}
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
};

export default App;
