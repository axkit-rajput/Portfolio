import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="relative flex flex-col justify-center min-h-[82vh] md:min-h-[88vh] pt-20 sm:pt-28 md:pt-32 pb-4 sm:pb-8 overflow-hidden bg-[#0C0D12] text-white outline-none"
    >
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#E05D38]/[0.08] rounded-full blur-[140px] pointer-events-none animate-glow" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-12 items-center">
          {/* Left: Punchy High-Impact Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left order-last md:order-first"
          >
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#E05D38]"
            >
              <span className="w-2 h-2 rounded-full bg-[#E05D38] animate-pulse"></span>
              <span className="text-white/90">NIT ROURKELA · CSE '27</span>
            </motion.div>

            {/* Split Dual-Tone Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08]"
            >
              <span className="block text-white">AI ENGINEER &amp;</span>
              <span className="block text-[#717482]">FULL-STACK DEVELOPER</span>
            </motion.h1>

            {/* Authentic Narrative Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xs sm:text-base text-[#9094A0] leading-relaxed max-w-lg mx-auto md:mx-0 font-normal"
            >
              Computer Science undergraduate at <span className="text-white font-medium">NIT Rourkela</span>, passionate about building intelligent applications, scalable backend systems and practical software products.
            </motion.p>

            {/* Actions & Resume */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#E05D38]/20 min-h-[44px]"
              >
                <span>EXPLORE WORKS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PERSONAL_INFO.resumeUrl}
                download="Ankit_Mewada_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#161720] hover:bg-[#20222D] border border-white/[0.1] text-white text-xs font-bold tracking-wider uppercase transition-all min-h-[44px]"
              >
                <Download className="w-3.5 h-3.5 text-[#E05D38]" />
                <span>DOWNLOAD CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Centerpiece Portrait with Terracotta Halo Disc */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex justify-center md:justify-end relative order-first md:order-last"
          >
            <div className="relative w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px] lg:w-[370px] lg:h-[370px] flex items-center justify-center">
              {/* Terracotta Sunset Halo Disc */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E05D38] via-[#C44624] to-[#1E110F] p-[2px] shadow-[0_0_50px_rgba(224,93,56,0.25)]">
                <div className="w-full h-full rounded-full bg-[#12131A] overflow-hidden relative">
                  {/* Actual Photo of Ankit Mewada */}
                  <img
                    src="./profile.jpg"
                    alt="Ankit Mewada"
                    className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.05]"
                  />
                  {/* Subtle vignette gradient inside disc */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Display Typography Watermark (Safe Responsive Text) */}
      <div className="relative z-0 mt-6 sm:mt-10 md:mt-12 w-full overflow-hidden border-t border-white/[0.04] pt-2 sm:pt-4">
        <div className="max-w-[1240px] mx-auto px-4 text-center overflow-hidden">
          <h2 className="text-2xl sm:text-5xl md:text-7xl lg:text-[110px] font-black uppercase tracking-tight sm:tracking-tighter text-white/[0.07] select-none leading-none pointer-events-none whitespace-nowrap">
            ANKIT MEWADA
          </h2>
        </div>
      </div>
    </section>
  );
};
