import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'WORKS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0D12]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark (PORTIX style) */}
        <a
          href="#"
          className="group flex items-center gap-1.5 font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          aria-label="Ankit Mewada - Home"
        >
          <span className="font-extrabold text-lg sm:text-xl tracking-tighter uppercase">
            ANKIT<span className="text-[#E05D38]">.</span>
          </span>
        </a>

        {/* Desktop Nav in Center */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 bg-[#14151C]/80 px-6 py-2 rounded-full border border-white/[0.08] backdrop-blur-xs shadow-inner"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-semibold tracking-widest transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-[#8E929E] hover:text-white'
                }`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Portix style with orange square arrow) */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-[#181922] hover:bg-[#20222D] border border-white/[0.1] text-xs font-semibold text-white tracking-wider uppercase transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-full bg-[#E05D38] group-hover:bg-[#F06B45] text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span>LET'S TALK</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#181922] border border-white/[0.1] text-white hover:text-[#E05D38] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-white/[0.08] bg-[#0C0D12]/95 backdrop-blur-xl px-6 py-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold tracking-widest text-[#9094A0] hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#E05D38] uppercase tracking-wider"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#8E929E] hover:text-white"
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
