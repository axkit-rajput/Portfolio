import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      tabIndex={-1}
      className="py-14 sm:py-18 bg-[#0C0D12] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Minimal & Editorial */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
              <span>CAPABILITIES & STACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              <span className="text-white">CORE SKILLS & </span>
              <span className="text-[#717482]">TECHNOLOGIES</span>
            </h2>
          </div>
          <p className="text-xs text-[#9094A0] max-w-md font-mono leading-relaxed">
            Targeted across autonomous multi-agent pipelines, explainable ML, high-throughput backends, and modern frontend systems.
          </p>
        </div>

        {/* Streamlined Minimal Skills Grid (Compact 2-Column Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-3.5 sm:p-4 rounded-xl bg-[#14151C] border border-white/[0.06] hover:border-[#E05D38]/30 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#E05D38]"></span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#717482]">
                  {category.skills.length} techs
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-[#181924] border border-white/[0.05] text-[11px] font-mono text-[#C0C4D0] hover:text-white hover:border-white/[0.15] transition-colors"
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
