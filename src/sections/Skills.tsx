import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, Server, Cpu, BarChart3, Database, Cloud, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'AI Engineering':
        return <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Machine Learning':
        return <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-red-600 dark:text-red-400" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
      default:
        return <Code className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section
      id="skills"
      tabIndex={-1}
      className="py-16 sm:py-20 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#0A0D14] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
            02 / Capabilities
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
            Technical Skills
          </h3>
          <p className="text-sm text-[#666666] dark:text-[#9CA3AF] mt-2 max-w-2xl leading-relaxed">
            Core languages, engineering frameworks, cloud infrastructure, and AI toolchains applied across production microservices and machine learning systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-xl border border-[#E5E7EB] dark:border-[#1F2636] bg-[#FAFAFC] dark:bg-[#111622] hover:border-gray-300 dark:hover:border-gray-700 transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E5E7EB] dark:border-[#1F2636]">
                {getCategoryIcon(category.title)}
                <h4 className="font-semibold text-sm text-[#171717] dark:text-white">
                  {category.title}
                </h4>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748] text-[#333333] dark:text-[#D1D5DB] group-hover:border-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
