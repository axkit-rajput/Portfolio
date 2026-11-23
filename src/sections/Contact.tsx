import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO, CODING_PROFILES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';

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
      className="relative py-20 sm:py-28 bg-[#0C0D12] text-white border-t border-white/[0.08] overflow-hidden outline-none"
    >
      {/* Background Ambience Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-[#E05D38]/15 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Impact Portix "LET'S TALK NOW" Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38] animate-pulse"></span>
            <span>LET'S CONNECT</span>
          </div>

          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white select-none">
              LET'S TALK NOW
            </h2>
            {/* Center Floating Badge (Portix signature) */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white flex flex-col items-center justify-center text-[9px] font-bold uppercase tracking-wider shadow-xl shadow-[#E05D38]/30 hover:scale-110 transition-transform"
            >
              <span>SAY</span>
              <span>HELLO</span>
              <ArrowUpRight className="w-3 h-3 mt-0.5" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-[#9094A0] leading-relaxed max-w-xl mx-auto">
            Interested in building something interesting or discussing technology? Feel free to reach out. Open to engineering opportunities and collaborations.
          </p>

          {/* Direct Contact Cards (Email & Phone) */}
          <div className="mt-8 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#14151C] border border-white/[0.08] flex flex-col justify-between gap-4 shadow-xl text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1C1E2A] text-[#E05D38]">
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
                  className="flex-1 py-2 rounded-full bg-[#1C1E2A] hover:bg-[#252838] border border-white/[0.08] text-[11px] font-bold uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
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
                  className="flex-1 py-2 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 shadow-lg shadow-[#E05D38]/20"
                >
                  <span>SEND</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#14151C] border border-white/[0.08] flex flex-col justify-between gap-4 shadow-xl text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1C1E2A] text-[#E05D38]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#717482] block">
                    DIRECT PHONE
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white truncate block select-all">
                    +91 97556 01342
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={copyPhone}
                  className="flex-1 py-2 rounded-full bg-[#1C1E2A] hover:bg-[#252838] border border-white/[0.08] text-[11px] font-bold uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
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
                  className="flex-1 py-2 rounded-full bg-[#1C1E2A] hover:bg-[#252838] border border-white/[0.1] text-white text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                >
                  <span>CALL</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E05D38]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Metadata Row */}
        <div className="mt-14 pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
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

          {/* Phone */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#717482] block">
              PHONE NUMBER
            </span>
            <a
              href="tel:+919755601342"
              className="text-sm font-medium text-white hover:text-[#E05D38] transition-colors"
            >
              +91 97556 01342
            </a>
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
            <div className="flex flex-wrap items-center gap-3.5">
              {CODING_PROFILES.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A0A4B2] hover:text-white transition-colors"
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
