import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="py-16 sm:py-20 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#0A0D14] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
            04 / Work History
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
            Experience
          </h3>
          <p className="text-sm text-[#666666] dark:text-[#9CA3AF] mt-2 max-w-2xl leading-relaxed">
            Professional software engineering internships focusing on production backend systems and AI integrations.
          </p>
        </div>

        {/* Professional Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-gray-200 dark:border-gray-800 space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#0A0D14] border-2 border-blue-600 dark:border-blue-500 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-7 rounded-xl border border-[#E5E7EB] dark:border-[#1F2636] bg-[#FAFAFC] dark:bg-[#111622] hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-[#171717] dark:text-white">
                      {exp.role}
                    </h4>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#666666] dark:text-[#9CA3AF] font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#444444] dark:text-[#CBD5E1] leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2.5">
                    Key Responsibilities & Deliverables
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#333333] dark:text-[#D1D5DB]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
