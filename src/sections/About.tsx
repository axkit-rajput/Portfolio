import React from 'react';
import { Download, GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="py-16 sm:py-28 bg-[#0E0F16] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">ABOUT </span>
            <span className="text-[#717482]">ME</span>
          </h2>
        </motion.div>

        {/* Bento Grid Split Screen */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Authentic Story & Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14151C] border border-white/[0.08] space-y-5">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E05D38]">
                BACKGROUND & PHILOSOPHY
              </h3>

              <div className="space-y-4 text-xs sm:text-base text-[#D1D5DB] leading-relaxed">
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

              {/* Download CV Action Button */}
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.resumeUrl}
                  download="Ankit_Mewada_Resume.pdf"
                  className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-[#E05D38]/20 min-h-[44px]"
                >
                  <span>DOWNLOAD CURRICULUM VITAE</span>
                  <span className="w-8 h-8 rounded-full bg-white text-[#E05D38] flex items-center justify-center font-bold">
                    <Download className="w-3.5 h-3.5" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic Foundation at NIT Rourkela */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="education"
            className="md:col-span-5 space-y-6 scroll-mt-24"
          >
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14151C] border border-white/[0.08] space-y-5">
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
                <h4 className="text-base sm:text-lg font-bold text-white">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
                  {EDUCATION.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-2 sm:p-2.5 rounded-xl bg-[#181924] border border-white/[0.06] text-[#C0C4D0]"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
