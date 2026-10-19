import React, { useEffect, useState } from 'react';
import { NavbarV2 } from './NavbarV2';
import { HeroV2 } from './HeroV2';
import { BentoGridV2 } from './BentoGridV2';
import { ProjectsDirectoryModal } from './ProjectsDirectoryModal';
import { ContactExperienceModal } from './ContactExperienceModal';
import { portfolioData } from '../../data/portfolioData';

export const PortfolioV2: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'YASIR KHOKHAR — Modern Bento Portfolio (V2)';
    document.documentElement.classList.add('dark');
    document.body.style.overflow = 'auto';
    document.body.style.backgroundColor = '#140a06';
    return () => {
      document.body.style.overflow = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#140a06] text-[#fafafa] selection:bg-orange-500/30 selection:text-orange-200 font-sans antialiased relative overflow-x-hidden flex flex-col justify-between">
      {/* 1. Global Continuous Canvas Background & Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Continuous warm espresso base canvas running uninterrupted from top to bottom */}
        <div className="absolute inset-0 bg-[#140a06]" />

        {/* Global Warm Studio Amber-Copper Backlight radiating behind Hero and Floating Navbar */}
        <div
          className="absolute inset-x-0 top-0 h-[960px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 28%, rgba(135, 62, 23, 0.48) 0%, rgba(85, 36, 12, 0.30) 45%, rgba(20, 10, 6, 0.75) 80%, transparent 100%)',
          }}
        />

        {/* Smooth downward depth transition into deep warm dark tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#140a06]/30 via-[#100704]/70 to-[#0a0503]" />

        {/* Global micro-dot matrix pattern across entire document */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff07_1px,transparent_0)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Floating Pill Navbar */}
      <NavbarV2
        onContactClick={() => setIsContactModalOpen(true)}
        onProjectsClick={() => setIsProjectsModalOpen(true)}
      />

      {/* Main Content Area: Natural Window-Level Scrolling Flow */}
      <main className="relative z-10 flex-1 pt-24 sm:pt-28 lg:pt-32 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-24 sm:space-y-36">
        {/* Step 1: Hero Section */}
        <HeroV2 onCtaClick={() => setIsContactModalOpen(true)} />

        {/* Step 2: Bento Grid Layout & Featured Projects / Services */}
        <BentoGridV2 onOpenAllProjects={() => setIsProjectsModalOpen(true)} />
      </main>

      {/* Floating Quick Action / Switcher Controls (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
        <a
          href="/v1"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121216]/95 hover:bg-[#1a1a22] text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md shadow-2xl text-xs font-mono transition-all duration-200 hover:scale-105 active:scale-95 transform-gpu"
          title="Return to the original 3D Portfolio version"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>← Back to V1 3D Portfolio</span>
        </a>
      </div>

      {/* Full Dedicated, Immersive Contact Experience / Fullscreen View */}
      <ContactExperienceModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Dedicated Full-Screen Projects Directory / Showcase Modal */}
      <ProjectsDirectoryModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
      />

      {/* Sleek Minimalist Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] bg-transparent py-14 px-4 sm:px-8 lg:px-12 text-xs font-mono text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">YASIR KHOKHAR</span>
            <span className="text-neutral-600">•</span>
            <span>{portfolioData.about.role}</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a href="https://github.com/khokharyasir749" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/yasirkhokhar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://wa.me/923280790704" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:khokharyasir749@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href={portfolioData.about.resumeUrl} className="text-orange-400 hover:text-orange-300 transition-colors">Resume ↗</a>
          </div>
          <div className="text-neutral-500">
            <span>📍 {portfolioData.about.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioV2;
