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
            className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm md:text-base font-sans tracking-[0.25em] uppercase font-semibold"
          >
            A CREATIVE
          </motion.span>

          {/* 2. Headline with Clean Solid Typography */}
          <div className="relative w-full overflow-visible">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.4rem,5.2vw,5.0rem)] font-black uppercase tracking-tight leading-[0.92] select-none space-y-1 text-zinc-900 dark:text-white"
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
            className="text-sm sm:text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed max-w-lg pt-1"
          >
            {portfolioData.about.bio[0]}
          </motion.p>
        </div>
      </div>

      {/* Bottom Row: Minimalist Status & Resume Link */}
      <div className="w-full flex items-center justify-between pointer-events-auto pt-4 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
        <span className="tracking-[0.2em] uppercase font-medium">
          LAHORE, PAKISTAN • 2026
        </span>
        <a
          href="mailto:khokharyasir749@gmail.com?subject=Resume%20Request%20-%20Yasir%20Khokhar"
          className="group flex items-center gap-1.5 tracking-[0.2em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors uppercase cursor-pointer"
        >
          <span>RESUME</span>
          <span className="text-purple-500 dark:text-purple-400 group-hover:translate-y-0.5 transition-transform">↓</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
