import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, Code2, Flame, Users } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Academics':
        return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Algorithms':
        return <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Hackathon':
        return <Flame className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Community':
        return <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="achievements"
      tabIndex={-1}
      className="py-16 sm:py-20 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#0A0D14] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
            06 / Milestones
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
            Achievements
          </h3>
          <p className="text-sm text-[#666666] dark:text-[#9CA3AF] mt-2 max-w-2xl leading-relaxed">
            Verified competitive milestones in national examinations, algorithmic problem solving, and collaborative hackathons.
          </p>
        </div>

        {/* Four Compact Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl border border-[#E5E7EB] dark:border-[#1F2636] bg-[#FAFAFC] dark:bg-[#111622] hover:border-gray-300 dark:hover:border-gray-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748]">
                    {getAchievementIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#888888] dark:text-[#718096]">
                    {item.category}
                  </span>
                </div>

                <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400 mb-1">
                  {item.metric}
                </div>

                <div className="font-semibold text-sm text-[#171717] dark:text-white mb-2">
                  {item.title}
                </div>

                <p className="text-xs text-[#555555] dark:text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
