import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, FileText } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to wide layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0A0D14]/90 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#1F2636] shadow-xs'
          : 'bg-white/60 dark:bg-[#0A0D14]/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-medium text-[#171717] dark:text-white transition-opacity hover:opacity-80"
          aria-label="Ankit Mewada - Home"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 group-hover:scale-125 transition-transform"></span>
          <span className="font-semibold tracking-tight text-base sm:text-lg">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-block text-xs text-[#888888] dark:text-[#718096] font-normal border-l border-gray-300 dark:border-gray-700 pl-2.5 ml-0.5">
            AI & Full-Stack
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Primary"
          style={{ scrollTargetGroup: 'auto' } as React.CSSProperties}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-[#555555] dark:text-[#9CA3AF] hover:text-[#171717] dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-[#161B26]'
                }`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Quick Link */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors"
            title="Download PDF Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161B26] transition-colors cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161B26] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Primary"
          className="md:hidden border-b border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#0A0D14] px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-[#444444] dark:text-[#A0AEC0] hover:bg-gray-50 dark:hover:bg-[#161B26] hover:text-[#171717] dark:hover:text-white'
                }`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 mt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between px-3">
            <span className="text-xs text-gray-500">Curriculum Vitae</span>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
