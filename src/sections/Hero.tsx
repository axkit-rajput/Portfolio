import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-36 pb-8 overflow-hidden bg-[#0C0D12] text-white outline-none"
    >
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] bg-gradient-to-tr from-[#E05D38]/20 via-[#B83E1E]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Top Content Row */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Punchy High-Impact Framer Headline */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag Badge with terracotta square (Portix signature) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181922] border border-white/[0.08] text-xs font-semibold tracking-wider uppercase text-[#E05D38]">
              <span className="w-2 h-2 rounded-xs bg-[#E05D38]"></span>
              <span className="text-white/90">AI ENGINEER & FULL-STACK DEVELOPER</span>
            </div>

            {/* Split Dual-Tone Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              <span className="block text-white">ENGINEERING</span>
              <span className="block text-white">INTELLIGENT SYSTEMS</span>
              <span className="block text-[#717482]">THAT SCALE & SOLVE</span>
            </h1>

            {/* Authentic Narrative Description */}
            <p className="text-sm sm:text-base text-[#9094A0] leading-relaxed max-w-lg font-normal">
              Computer Science undergraduate at <span className="text-white font-medium">NIT Rourkela</span>. Exploring multi-agent orchestration, explainable machine learning, and high-performance backend systems.
            </p>

            {/* Actions & Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#E05D38]/20"
              >
                <span>EXPLORE WORKS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Ankit_Mewada_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161720] hover:bg-[#20222D] border border-white/[0.1] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5 text-[#E05D38]" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>
          </div>

          {/* Right: Centerpiece Portrait with Terracotta Halo Disc */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              {/* Terracotta Sunset Halo Disc */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E05D38] via-[#C44624] to-[#1E110F] p-[2px] shadow-[0_0_60px_rgba(224,93,56,0.3)]">
                <div className="w-full h-full rounded-full bg-[#12131A] overflow-hidden relative">
                  {/* Actual Photo of Ankit Mewada */}
                  <img
                    src="/profile.jpg"
                    alt="Ankit Mewada"
                    className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.05]"
                  />
                  {/* Subtle vignette gradient inside disc */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Giant Display Typography (Portix signature watermark) */}
      <div className="relative z-0 mt-8 sm:mt-12 w-full overflow-hidden border-t border-white/[0.06] pt-4 sm:pt-6">
        <div className="max-w-[1240px] mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[124px] font-black uppercase tracking-tighter text-white/[0.92] select-none leading-none">
            ANKIT MEWADA
          </h2>
        </div>
      </div>
    </section>
  );
};
