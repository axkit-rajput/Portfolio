import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

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
          ? 'bg-[#0C0D12]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="group flex items-center gap-1.5 font-bold tracking-tight text-white transition-opacity py-1"
          aria-label="Ankit Mewada - Home"
        >
          <span className="font-extrabold text-lg sm:text-xl tracking-tighter uppercase">
            ANKIT<span className="text-[#E05D38]">.</span>
          </span>
        </motion.a>

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
                className={`text-[11px] font-semibold tracking-widest transition-colors relative py-1 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#8E929E] hover:text-white'
                }`}
                aria-current={isActive ? 'true' : 'false'}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E05D38] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Day/Night Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-[#181922] hover:bg-[#20222D] border border-white/[0.1] text-xs font-semibold text-white tracking-wider uppercase transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-full bg-[#E05D38] group-hover:bg-[#F06B45] text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span>LET'S TALK</span>
          </motion.a>

          {/* Mobile Menu Toggle (44px min tap target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[40px] min-h-[40px] p-2 rounded-full bg-[#181922] border border-white/[0.1] text-white hover:text-[#E05D38] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-white/[0.08] bg-[#0C0D12]/98 backdrop-blur-xl px-6 py-6 space-y-3 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-semibold tracking-widest text-[#9094A0] hover:text-white py-2.5 min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E05D38] uppercase tracking-wider py-2 min-h-[44px]"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Ankit_Mewada_Resume.pdf"
                className="text-xs text-[#8E929E] hover:text-white py-2 min-h-[44px] flex items-center"
              >
                Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
