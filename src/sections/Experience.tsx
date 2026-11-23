import React from 'react';
import { Calendar, MapPin, CheckCircle, Award, Code2, Flame, Users } from 'lucide-react';
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
      className="py-20 sm:py-28 bg-[#0E0F16] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>TRACK RECORD & RECOGNITION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">EXPERIENCE </span>
            <span className="text-[#717482]">& MILESTONES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work History Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#E05D38] mb-1">
              [ 01 WORK HISTORY ]
            </div>

            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#14151C] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-[#E05D38] mt-1 tracking-wider uppercase">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#8E929E]">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1C26] border border-white/[0.06]">
                      <Calendar className="w-3.5 h-3.5 text-[#E05D38]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1C26] border border-white/[0.06]">
                      <MapPin className="w-3.5 h-3.5 text-[#E05D38]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#9094A0] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Bulleted Deliverables */}
                <div className="space-y-2 pt-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                      <span className="w-4 h-4 rounded-full bg-[#E05D38]/15 text-[#E05D38] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-2.5 h-2.5" />
                      </span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sleek High-Density Milestone Strip */}
          <div id="achievements" className="lg:col-span-5 space-y-3 scroll-mt-24">
            <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E05D38]">
                [ 02 KEY ACHIEVEMENTS ]
              </span>
              <span className="text-[10px] font-mono text-[#717482]">
                VERIFIED (04)
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
