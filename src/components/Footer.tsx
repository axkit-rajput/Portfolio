import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0A0B0E] text-white py-12 transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Attribution */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-base tracking-tighter uppercase text-white">
                ANKIT<span className="text-[#E05D38]">.</span>
              </span>
              <span className="text-xs text-[#717482]">·</span>
              <span className="text-xs font-mono text-[#8E929E]">AI ENGINEER & FULL-STACK DEVELOPER</span>
            </div>
            <p className="text-xs text-[#717482]">
              Designed & built by {PERSONAL_INFO.name} · National Institute of Technology Rourkela · © {currentYear}
            </p>
          </div>

          {/* Right: Channels & Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#8E929E] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#8E929E] hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#8E929E] hover:text-white transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-1.5 text-[#8E929E] hover:text-[#E05D38] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href="tel:+919755601342"
              className="inline-flex items-center gap-1.5 text-[#8E929E] hover:text-[#E05D38] transition-colors"
              aria-label="Direct Phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 97556 01342</span>
            </a>

            {/* Back to top button (Portix style) */}
            <button
              onClick={scrollToTop}
              className="ml-3 p-2 rounded-full border border-white/[0.1] bg-[#14151C] hover:bg-[#1E202B] hover:border-[#E05D38]/50 text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#E05D38]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
