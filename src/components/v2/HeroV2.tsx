import React from 'react';
import {
  ArrowUpRight,
  Monitor,
  Layout,
  Layers,
  Palette,
  Crosshair,
  Smartphone,
  Terminal,
  FileText,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroV2Props {
  onCtaClick?: () => void;
}

export const HeroV2: React.FC<HeroV2Props> = ({ onCtaClick }) => {
  const servicePills = [
    { name: 'Wireframing', icon: Layout, active: false },
    { name: 'Web App', icon: Monitor, active: true },
    { name: 'UX Design', icon: Layers, active: false },
    { name: 'UI Design', icon: Palette, active: false },
    { name: 'User Research', icon: Crosshair, active: false },
    { name: 'Mobile App Design', icon: Smartphone, active: false },
    { name: 'Full-Stack Dev', icon: Terminal, active: false },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] flex flex-col justify-between py-6 sm:py-10 select-none overflow-hidden"
    >
      {/* 1. Warm Studio Amber / Terracotta Radial Lighting Glow (Matching Reference) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Core warm amber glow directly behind portrait head & shoulders */}
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[540px] sm:w-[700px] lg:w-[850px] h-[420px] sm:h-[520px] lg:h-[620px] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none opacity-90"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(225, 95, 25, 0.5) 0%, rgba(180, 70, 18, 0.3) 42%, rgba(120, 40, 12, 0.12) 65%, transparent 80%)',
          }}
        />

        {/* Ambient warm edge fill */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-orange-600/10 blur-[140px] rounded-full" />

        {/* Subtle high-tech micro dot matrix pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff09_1px,transparent_0)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      </div>

      {/* 2. Typographic Branding Watermark (Positioned behind portrait head & shoulders) */}
      <div className="absolute inset-x-0 top-[10%] sm:top-[12%] lg:top-[14%] flex justify-center pointer-events-none select-none z-0 px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] xl:text-[7.2rem] font-black uppercase tracking-tight text-white/[0.08] leading-none whitespace-nowrap font-sans drop-shadow-sm">
          YASIR KHOKHAR
        </h1>
      </div>

      {/* 3. Centered High-Resolution Cutout Portrait */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10">
        <div className="relative flex items-end justify-center h-full max-h-[580px] sm:max-h-[660px] lg:max-h-[740px]">
          <img
            src="/yasir-hero-cutout.png"
            alt="Yasir Khokhar — Full-Stack Developer & Creative Technologist"
            className="h-[84%] sm:h-[90%] lg:h-[95%] w-auto max-w-none object-contain object-bottom filter contrast-[1.04] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
            loading="eager"
          />
          {/* Subtle bottom fade gradient to seamlessly ground portrait into the canvas base */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 4. Left Statement Pitch & Right Glowing CTA Button Row */}
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-auto pt-16 sm:pt-20 lg:pt-24">
        {/* Left Headline Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            FULL-STACK & SPATIAL WEB
          </div>

          <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-light text-neutral-200 leading-[1.35] tracking-wide drop-shadow-md">
            I create clean, modern interfaces and seamless experiences that turn user needs into business growth.
          </p>
        </motion.div>

        {/* Right Glowing Amber/Orange CTA Button & Resume Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-start md:justify-end items-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              if (onCtaClick) {
                e.preventDefault();
                onCtaClick();
              }
            }}
            className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-neutral-100 text-black font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer shadow-[0_0_55px_rgba(249,115,22,0.52),0_0_22px_rgba(249,115,22,0.35)] hover:shadow-[0_0_80px_rgba(249,115,22,0.75),0_0_30px_rgba(249,115,22,0.5)]"
          >
            <span>Book a free call</span>
            <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          <a
            href="mailto:khokharyasir749@gmail.com?subject=Resume%20Request%20-%20Yasir%20Khokhar"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm sm:text-base border border-white/10 hover:border-orange-500/40 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            title="Request Yasir Khokhar's Resume"
          >
            <FileText className="w-4 h-4 text-orange-400" />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>

      {/* 5. Bottom Horizontal Service & Skill Pills (Footer Strip) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 pt-6 sm:pt-8 border-t border-white/5 overflow-x-auto no-scrollbar"
      >
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 pb-1">
          {servicePills.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <div
                key={idx}
                className={`group flex items-center gap-3 px-5 py-3 rounded-2xl border text-xs sm:text-sm font-medium backdrop-blur-xl transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                  pill.active
                    ? 'bg-[#15151a] border-orange-500/50 text-white shadow-[0_0_25px_rgba(249,115,22,0.18)]'
                    : 'bg-[#121215]/80 hover:bg-[#18181f] border-white/10 hover:border-white/20 text-neutral-300 hover:text-white hover:scale-[1.02]'
                }`}
              >
                <div
                  className={`p-1 rounded-lg ${
                    pill.active ? 'text-orange-400' : 'text-orange-400/80 group-hover:text-orange-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{pill.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroV2;
