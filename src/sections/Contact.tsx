import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="py-20 sm:py-28 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#0A0D14] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
            08 / Communication
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] dark:text-white">
            Let's Connect.
          </h3>
          <p className="text-base sm:text-lg text-[#555555] dark:text-[#CBD5E1] mt-3 leading-relaxed">
            Interested in building something interesting or discussing technology? Feel free to reach out.
          </p>

          {/* Email Interaction Card */}
          <div className="mt-8 p-6 rounded-2xl border border-[#E5E7EB] dark:border-[#1F2636] bg-[#FAFAFC] dark:bg-[#111622] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748] text-blue-600 dark:text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#888888] dark:text-[#718096] block">Direct Email</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-[#171717] dark:text-white">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-white dark:bg-[#161B26] text-gray-700 dark:text-gray-300 hover:border-gray-400 transition-colors cursor-pointer shadow-2xs"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-2xs"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Connected Profiles List */}
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-wrap items-center gap-6 text-sm">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096]">
              Professional Channels
            </span>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#333333] dark:text-[#D1D5DB] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#333333] dark:text-[#D1D5DB] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#333333] dark:text-[#D1D5DB] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LeetcodeIcon className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
