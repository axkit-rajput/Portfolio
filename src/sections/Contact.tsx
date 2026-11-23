import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, CODING_PROFILES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, WhatsappIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone || '9755601342');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getProfileIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GithubIcon className="w-4 h-4" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'LeetCode':
        return <LeetcodeIcon className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="relative py-16 sm:py-28 bg-[#0C0D12] text-white border-t border-white/[0.08] overflow-hidden outline-none"
    >
      {/* Background Ambience Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-t from-[#E05D38]/12 via-transparent to-transparent blur-[120px] pointer-events-none animate-glow" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "LET'S TALK NOW" Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38] animate-pulse"></span>
            <span>LET'S CONNECT</span>
          </div>

          <div className="relative inline-block max-w-full px-2">
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight sm:tracking-tighter leading-none text-white select-none">
              LET'S TALK NOW
            </h2>
            {/* Center Floating Badge */}
            <motion.a
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="absolute -top-3 -right-2 sm:-top-7 sm:-right-8 w-13 h-13 sm:w-20 sm:h-20 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white flex flex-col items-center justify-center text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider shadow-xl shadow-[#E05D38]/30 transition-transform"
            >
              <span>SAY</span>
              <span>HELLO</span>
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-0.5" />
            </motion.a>
          </div>

          <p className="text-xs sm:text-base text-[#9094A0] leading-relaxed max-w-xl mx-auto px-2">
            Interested in building something interesting or discussing technology? Feel free to reach out. Open to engineering opportunities and collaborations.
          </p>

          {/* Direct Contact Cards (Email & Phone) */}
          <div className="mt-8 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#14151C] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between gap-4 shadow-xl text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1C1E2A] text-[#E05D38] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#717482] block">
                    DIRECT EMAIL
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white truncate block select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={copyEmail}
                  className="flex-1 py-2 rounded-full bg-[#1C1E2A] hover:bg-[#252838] border border-white/[0.08] text-[11px] font-bold uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 min-h-[40px]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-gray-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-2 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow-lg shadow-[#E05D38]/20 min-h-[40px]"
                >
                  <span>SEND</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Direct Phone & WhatsApp Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#14151C] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between gap-4 shadow-xl text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1C1E2A] text-[#E05D38] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#717482] block">
                      PHONE &amp; WHATSAPP
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white truncate block select-all">
                      +91 97556 01342
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/919755601342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1 hover:bg-emerald-500/20 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <WhatsappIcon className="w-3 h-3 text-emerald-400" />
                  <span>ONLINE</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={copyPhone}
                  className="flex-1 py-2 rounded-full bg-[#1C1E2A] hover:bg-[#252838] border border-white/[0.08] text-[11px] font-bold uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center justify-center gap-1 min-h-[40px]"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-gray-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:+919755601342"
                  className="flex-1 py-2 rounded-full bg-[#1C1E2A] hover:bg-[#252838] border border-white/[0.1] text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 min-h-[40px]"
                >
                  <span>CALL</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E05D38]" />
                </a>

                <a
                  href="https://wa.me/919755601342?text=Hi%20Ankit,%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#25D366] text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 min-h-[40px]"
                >
                  <WhatsappIcon className="w-3 h-3 text-[#25D366]" />
                  <span>WTSP</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Metadata Row */}
        <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          {/* Email */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#717482] block">
              EMAIL ADDRESS
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-sm font-medium text-white hover:text-[#E05D38] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Phone & WhatsApp */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#717482] block">
              PHONE &amp; WHATSAPP
            </span>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919755601342"
                className="text-sm font-medium text-white hover:text-[#E05D38] transition-colors"
              >
                +91 97556 01342
              </a>
              <a
                href="https://wa.me/919755601342"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#25D366] hover:underline inline-flex items-center gap-1"
                title="Message on WhatsApp"
              >
                <WhatsappIcon className="w-3.5 h-3.5" />
                <span>Chat</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#717482] block">
              INSTITUTION & LOCATION
            </span>
            <p className="text-sm font-medium text-white">
              NIT Rourkela, Odisha, India
            </p>
          </div>

          {/* Social Profiles */}
          <div id="profiles" className="space-y-1.5 scroll-mt-24">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#717482] block">
              VERIFIED CHANNELS
            </span>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {CODING_PROFILES.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A0A4B2] hover:text-white transition-colors min-h-[36px]"
                >
                  {getProfileIcon(profile.platform)}
                  <span>{profile.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
