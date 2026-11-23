import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfilePhoto } from '../components/ProfilePhoto';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="pt-16 sm:pt-24 pb-16 sm:pb-24 max-w-[1140px] mx-auto px-4 sm:px-6 outline-none"
    >
      <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 md:gap-12">
        {/* Left Column: Headline & Intro */}
        <div className="flex-1 max-w-2xl">
          {/* Subtle Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/40 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Salutation */}
          <p className="text-sm sm:text-base font-medium text-[#666666] dark:text-[#9CA3AF] mb-2 tracking-tight">
            Hi, I'm {PERSONAL_INFO.name}.
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] dark:text-white leading-[1.15] mb-5">
            {PERSONAL_INFO.headline}
          </h1>

          {/* Core Description */}
          <p className="text-base sm:text-lg text-[#444444] dark:text-[#D1D5DB] leading-relaxed mb-4">
            {PERSONAL_INFO.subheading}
          </p>

          {/* Additional Short Line */}
          <p className="text-sm sm:text-base text-[#666666] dark:text-[#9CA3AF] leading-relaxed mb-8 font-normal">
            {PERSONAL_INFO.interestLine}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-sm font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors shadow-2xs"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Ankit_Mewada_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-white dark:bg-[#161B26] text-[#171717] dark:text-white text-sm font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors shadow-2xs"
            >
              <Download className="w-4 h-4 text-[#666666] dark:text-[#9CA3AF]" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[#555555] dark:text-[#9CA3AF] hover:text-[#171717] dark:hover:text-white text-sm font-medium hover:bg-gray-100/70 dark:hover:bg-[#161B26] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Small Profile Photograph */}
        <div className="flex justify-start md:justify-end shrink-0 pt-2">
          <ProfilePhoto size="xl" showAvailability={false} />
        </div>
      </div>
    </section>
  );
};
