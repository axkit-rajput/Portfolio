import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#E5E7EB] dark:border-[#1F2636] bg-[#F7F8FA] dark:bg-[#0D111A] text-sm py-12 transition-colors">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Attribution */}
          <div className="text-center md:text-left">
            <p className="font-medium text-[#171717] dark:text-[#E2E8F0]">
              Designed and built by {PERSONAL_INFO.name}.
            </p>
            <p className="text-xs text-[#666666] dark:text-[#9CA3AF] mt-1">
              NIT Rourkela · Computer Science & Engineering · © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Center/Right: Professional Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#555555] dark:text-[#9CA3AF] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#555555] dark:text-[#9CA3AF] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#555555] dark:text-[#9CA3AF] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-1.5 text-[#555555] dark:text-[#9CA3AF] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-1.5 rounded-md border border-[#E5E7EB] dark:border-[#2D3748] bg-white dark:bg-[#161B26] text-gray-500 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
