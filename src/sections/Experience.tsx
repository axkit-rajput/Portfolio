import React from 'react';
import { Calendar, MapPin, Award, Code2, Flame, Users } from 'lucide-react';
import { EXPERIENCE, ACHIEVEMENTS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Academics':
        return <Award className="w-4 h-4 text-[#E05D38]" />;
      case 'Algorithms':
        return <Code2 className="w-4 h-4 text-[#E05D38]" />;
      case 'Hackathon':
        return <Flame className="w-4 h-4 text-[#E05D38]" />;
      case 'Community':
        return <Users className="w-4 h-4 text-[#E05D38]" />;
      default:
        return <Award className="w-4 h-4 text-[#E05D38]" />;
    }
  };

  return (
    <section
      id="experience"
      tabIndex={-1}
      className="py-16 sm:py-24 bg-[#0E0F16] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>EXPERIENCE & TRACK RECORD</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">ENGINEERING </span>
            <span className="text-[#717482]">EXPERIENCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work History Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#E05D38] mb-1">
              WORK HISTORY
            </div>

            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#14151C] border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-[#E05D38] mt-0.5 tracking-wider uppercase">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8E929E]">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1C26] border border-white/[0.06]">
                      <Calendar className="w-3 h-3 text-[#E05D38]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1C26] border border-white/[0.06]">
                      <MapPin className="w-3 h-3 text-[#E05D38]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#9094A0] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Clean Editorial Deliverables */}
                <div className="space-y-1.5 pt-1">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB] leading-relaxed">
                      <span className="text-[#E05D38] font-bold select-none">—</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sleek High-Density Milestone Strip */}
          <div id="achievements" className="lg:col-span-5 space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E05D38]">
                KEY ACHIEVEMENTS
              </span>
              <span className="text-[10px] font-mono text-[#717482]">
                VERIFIED
              </span>
            </div>

            <div className="space-y-2">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="p-3 sm:p-3.5 rounded-xl bg-[#14151C] border border-white/[0.06] hover:border-[#E05D38]/30 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-[#1B1D27] border border-white/[0.06] shrink-0 text-[#E05D38]">
                      {getAchievementIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#E05D38] transition-colors truncate">
                        {item.title}
                      </div>
                      <p className="text-[11px] text-[#8E929E] truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-[#191A24] border border-white/[0.06] text-xs font-mono font-black text-[#E05D38]">
                    {item.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
