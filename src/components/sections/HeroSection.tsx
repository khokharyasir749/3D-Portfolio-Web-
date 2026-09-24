import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { InteractivePortrait } from '../ui/InteractivePortrait';

export interface HeroSectionProps {
  onSelectSection?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-between py-16 sm:py-20 select-none z-20">
      {/* Top spacer for TopNav */}
      <div className="h-4 sm:h-6" />

      {/* Main 2-Column Split Layout */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between my-auto gap-10 lg:gap-6">
        {/* Left Column (45% Width): Dedicated 3D Interactive Portrait */}
        <div className="w-full lg:w-[45%] flex items-center justify-center relative shrink-0 z-20 pointer-events-auto">
          <InteractivePortrait />
        </div>

        {/* Right Column (55% Width): Pure Minimalist Typography Hierarchy */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-start space-y-4 lg:pl-8 text-left z-20 pointer-events-auto overflow-visible">
          {/* 1. Pre-Title */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#1D5A50] dark:text-[#2C665D] text-xs sm:text-sm md:text-base font-sans tracking-[0.25em] uppercase font-bold"
          >
            A CREATIVE
          </motion.span>

          {/* 2. Headline with Clean Solid Typography */}
          <div className="relative w-full overflow-visible">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] select-none space-y-1 text-[#0F2420] dark:text-[#E6F4F1]"
            >
              <span className="block whitespace-nowrap">
                FULL-STACK
              </span>
              <span className="block whitespace-nowrap">
                DEVELOPER
              </span>
            </motion.h1>
          </div>

          {/* 3. Short 2-Line Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#2C423E] dark:text-[#9FB8B2] font-sans leading-relaxed max-w-lg pt-1 font-normal"
          >
            {portfolioData.about.bio[0]}
          </motion.p>
        </div>
      </div>

      {/* Bottom Row: Minimalist Status & Resume Link */}
      <div className="w-full flex items-center justify-between pointer-events-auto pt-4 text-xs sm:text-sm font-mono text-zinc-500 dark:text-[#E6F4F1]/70">
        <span className="tracking-[0.2em] uppercase font-medium">
          LAHORE, PAKISTAN • 2026
        </span>
        <a
          href="mailto:khokharyasir749@gmail.com?subject=Resume%20Request%20-%20Yasir%20Khokhar"
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#C58A55] to-[#A87242] hover:from-[#DE9F68] hover:to-[#B87C45] border border-[#DE9F68]/60 tracking-[0.2em] text-[#0A1312] transition-all uppercase cursor-pointer font-bold shadow-lg shadow-[#C58A55]/20"
        >
          <span>RESUME</span>
          <span className="text-[#0A1312] group-hover:translate-y-0.5 transition-transform">↓</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
