import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, Server, Cpu, BarChart3, Database, Cloud, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Code className="w-4 h-4 text-[#E05D38]" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-[#E05D38]" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-[#E05D38]" />;
      case 'AI Engineering':
        return <Cpu className="w-4 h-4 text-[#E05D38]" />;
      case 'Machine Learning':
        return <BarChart3 className="w-4 h-4 text-[#E05D38]" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-[#E05D38]" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-4 h-4 text-[#E05D38]" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-[#E05D38]" />;
      default:
        return <Code className="w-4 h-4 text-[#E05D38]" />;
    }
  };

  return (
    <section
      id="skills"
      tabIndex={-1}
      className="py-20 sm:py-24 bg-[#0C0D12] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>CAPABILITIES & STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">TECHNICAL </span>
            <span className="text-[#717482]">ARSENAL</span>
          </h2>
          <p className="text-sm text-[#9094A0] mt-3 max-w-xl leading-relaxed">
            Proficient across backend architectures, autonomous multi-agent pipelines, machine learning explainability, and modern frontend systems.
          </p>
        </div>

        {/* Skills Bento Grid (8 Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl bg-[#14151C] border border-white/[0.08] hover:border-white/[0.18] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08] mb-4">
                  <div className="p-2 rounded-lg bg-[#1B1D27] border border-white/[0.06] group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#191A24] border border-white/[0.06] text-[11px] font-mono text-[#D1D5DB] group-hover:border-[#E05D38]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
