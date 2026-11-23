import React from 'react';
import { CODING_PROFILES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';

export const CodingProfiles: React.FC = () => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GithubIcon className="w-5 h-5" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'LeetCode':
        return <LeetcodeIcon className="w-5 h-5" />;
      default:
        return <LeetcodeIcon className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="profiles"
      tabIndex={-1}
      className="py-16 sm:py-20 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-[#F7F8FA] dark:bg-[#0D111A] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
            07 / Developer Footprint
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
            Coding Profiles
          </h3>
          <p className="text-sm text-[#666666] dark:text-[#9CA3AF] mt-2 max-w-2xl leading-relaxed">
            Direct links to verified developer handles across version control, competitive programming, and professional networks.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CODING_PROFILES.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#111622] hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#FAFAFC] dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748] text-[#171717] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {getPlatformIcon(profile.platform)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>

                <div className="font-semibold text-base text-[#171717] dark:text-white">
                  {profile.platform}
                </div>

                <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                  @{profile.handle}
                </div>

                <p className="text-xs text-[#666666] dark:text-[#9CA3AF] mt-3 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E7EB] dark:border-[#1F2636] flex items-center justify-between text-xs text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>View Profile</span>
                <span className="font-mono text-[11px]">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
