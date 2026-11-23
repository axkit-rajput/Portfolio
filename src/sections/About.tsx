import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Cpu, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="py-16 sm:py-20 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-[#F7F8FA] dark:bg-[#0D111A] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Section Heading Label */}
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-2">
              01 / Background
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
              About Me
            </h3>
            <p className="text-xs text-[#666666] dark:text-[#9CA3AF] mt-2 leading-relaxed">
              Engineering philosophy, academic context, and core technical pursuits.
            </p>

            {/* Quick Context Summary */}
            <div className="mt-6 p-4 rounded-lg bg-white dark:bg-[#121622] border border-[#E5E7EB] dark:border-[#232936] text-xs space-y-2.5">
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[11px] uppercase tracking-wider font-medium">Institution</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">NIT Rourkela</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[11px] uppercase tracking-wider font-medium">Degree</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">B.Tech Computer Science</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[11px] uppercase tracking-wider font-medium">Graduation</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{PERSONAL_INFO.graduationYear}</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[11px] uppercase tracking-wider font-medium">Location</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">India</span>
              </div>
            </div>
          </div>

          {/* Section Body */}
          <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-[#333333] dark:text-[#D1D5DB] leading-relaxed">
            {PERSONAL_INFO.aboutText.map((paragraph, index) => (
              <p key={index} className="font-normal">
                {paragraph}
              </p>
            ))}

            {/* Core Values Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-white dark:bg-[#121622] border border-[#E5E7EB] dark:border-[#232936]">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">Autonomous Systems</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-normal">
                  Multi-agent orchestration, dynamic tool routing, and guarded RAG pipelines.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white dark:bg-[#121622] border border-[#E5E7EB] dark:border-[#232936]">
                <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">Scalable Backends</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-normal">
                  Microservices, SSE streaming, distributed caching, and vector indexing.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white dark:bg-[#121622] border border-[#E5E7EB] dark:border-[#232936]">
                <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-400 mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">Explainable AI</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-normal">
                  Auditable machine learning models using game-theoretic SHAP attributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
