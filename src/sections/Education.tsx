import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      tabIndex={-1}
      className="py-16 sm:py-20 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-[#F7F8FA] dark:bg-[#0D111A] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
            05 / Academic Foundation
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
            Education
          </h3>
          <p className="text-sm text-[#666666] dark:text-[#9CA3AF] mt-2 max-w-2xl leading-relaxed">
            Rigorous undergraduate coursework covering core computer science principles, algorithms, and systems engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-xl border border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#111622] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#E5E7EB] dark:border-[#1F2636]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-xl font-semibold text-[#171717] dark:text-white">
                  {EDUCATION.institution}
                </h4>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
                {EDUCATION.degree} in {EDUCATION.field}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#666666] dark:text-[#9CA3AF] font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#161B26] border border-gray-200 dark:border-gray-800">
                <Calendar className="w-3.5 h-3.5" />
                <span>Class of {EDUCATION.graduationYear}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#161B26] border border-gray-200 dark:border-gray-800">
                <MapPin className="w-3.5 h-3.5" />
                <span>{EDUCATION.location}</span>
              </span>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096]">
                Relevant Coursework
              </h5>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {EDUCATION.coursework.map((course) => (
                <div
                  key={course}
                  className="p-3 rounded-lg bg-[#FAFAFC] dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#232936] text-xs font-medium text-[#222222] dark:text-[#E2E8F0]"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
