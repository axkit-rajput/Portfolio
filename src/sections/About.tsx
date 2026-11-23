import React from 'react';
import { Download, GraduationCap, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="py-20 sm:py-28 bg-[#0E0F16] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Portix Style) */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>ABOUT & ACADEMIC CONTEXT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">TURNING COMPLEX IDEAS </span>
            <span className="text-[#717482]">INTO FUNCTIONAL SYSTEMS</span>
          </h2>
        </div>

        {/* Bento Grid Split Screen (Portix Slide 2 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authentic Story & Resume Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#14151C] border border-white/[0.08] space-y-5">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E05D38]">
                WHY WORK WITH ME
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                <p>
                  I'm a Computer Science undergraduate at <strong className="text-white">NIT Rourkela</strong> who enjoys building software that solves real problems.
                </p>
                <p className="text-[#9094A0]">
                  My interests span artificial intelligence, multi-agent systems, backend engineering and full-stack development. I enjoy understanding how systems work internally, designing their architecture and turning complex ideas into functional products.
                </p>
                <p className="text-[#9094A0]">
                  Through my projects, I've explored everything from LLM-based orchestration and retrieval-augmented generation to explainable machine learning and scalable backend systems. I believe good engineering is about building software that is useful, reliable and maintainable.
                </p>
              </div>

              {/* Download CV Action Button (Portix Style) */}
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Ankit_Mewada_Resume.pdf"
                  className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-[#E05D38]/20"
                >
                  <span>DOWNLOAD CURRICULUM VITAE</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#E05D38] flex items-center justify-center font-bold">
                    <Download className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundation at NIT Rourkela (Zero CGPA mentions) */}
          <div id="education" className="lg:col-span-5 space-y-6 scroll-mt-24">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#14151C] border border-white/[0.08] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#E05D38]" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                    EDUCATION
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#E05D38]/15 text-[#E05D38] font-bold">
                  CLASS OF 2027
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  {EDUCATION.institution}
                </h4>
                <p className="text-xs sm:text-sm text-[#A0A4B2] mt-1 font-medium">
                  {EDUCATION.degree} in {EDUCATION.field}
                </p>
                <p className="text-xs text-[#717482] mt-0.5">
                  {EDUCATION.location}
                </p>
              </div>

              {/* Relevant Coursework Matrix */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#E05D38] uppercase tracking-wider mb-2.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Core Coursework</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  {EDUCATION.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-2.5 rounded-xl bg-[#181924] border border-white/[0.06] text-[#C0C4D0]"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
