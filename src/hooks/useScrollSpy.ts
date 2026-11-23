import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 120) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            syncAriaCurrent(id);
            return;
          }
        }
      }

      // If at top or above first section
      if (window.scrollY < 200) {
        setActiveSection('');
        syncAriaCurrent('');
      }
    };

    const syncAriaCurrent = (currentId: string) => {
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        const isActive = href === `#${currentId}`;
        link.setAttribute('aria-current', isActive ? 'true' : 'false');
        link.classList.toggle('target-current', isActive);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
