import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface TopNavProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  isMuted?: boolean;
  onToggleAudio?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

// Minimalist X (Twitter) Vector Icon
const XTwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const TopNav: React.FC<TopNavProps> = ({
  activeSectionId,
  onNavigate,
}) => {
  const linkedinUrl =
    portfolioData.contacts.find((c) => c.type === 'linkedin')?.link ||
    'https://linkedin.com/in/yasirkhokhar';
  const githubUrl = 'https://github.com/khokharyasir749';
  const twitterUrl = 'https://x.com/yasirkhokhar';

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'WORK', id: 'work' },
    { label: 'TECH', id: 'tech-stack' },
    { label: 'CONTACT', id: 'contact' },
  ];

  // Map activeSectionId to nav highlights
  const getIsActive = (id: string) => {
    if (id === 'about') {
      return (
        activeSectionId === 'about' ||
        activeSectionId === 'what-i-do' ||
        activeSectionId === 'experience'
      );
    }
    if (id === 'work') {
      return activeSectionId === 'work';
    }
    if (id === 'tech-stack') {
      return activeSectionId === 'tech-stack';
    }
    if (id === 'contact') {
      return activeSectionId === 'contact';
    }
    return activeSectionId === id;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 flex items-center justify-between pointer-events-none backdrop-blur-md bg-[#0A1312]/90 border-b border-[#25524B] transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between pointer-events-none gap-3 sm:gap-6">
        {/* Top-Left: Minimal Clean Typography Logo */}
        <div className="pointer-events-auto flex-shrink-0">
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-2 text-left cursor-pointer transition-opacity hover:opacity-80"
            aria-label="Back to top"
          >
            <span className="font-sans font-bold text-xs sm:text-base text-[#E6F4F1] tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-colors group-hover:text-[#C58A55]">
              YASIR KHOKHAR
            </span>
          </button>
        </div>

        {/* Top-Right: Action & Social Icons + Nav Links */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          {/* Social Icons (Placed directly before ABOUT) */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {/* 1. LinkedIn link icon */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2 text-[#E6F4F1]/70 hover:text-[#E6F4F1] hover:bg-[#132B27] rounded-lg transition-all cursor-pointer inline-flex items-center justify-center border border-transparent hover:border-[#25524B]"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* 2. X / Twitter link icon */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2 text-[#E6F4F1]/70 hover:text-[#E6F4F1] hover:bg-[#132B27] rounded-lg transition-all cursor-pointer inline-flex items-center justify-center border border-transparent hover:border-[#25524B]"
              aria-label="X (Twitter) Profile"
              title="X (Twitter) Profile"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>

            {/* 3. GitHub link icon */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2 text-[#E6F4F1]/70 hover:text-[#E6F4F1] hover:bg-[#132B27] rounded-lg transition-all cursor-pointer inline-flex items-center justify-center border border-transparent hover:border-[#25524B]"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Subtle vertical divider */}
          <div className="h-4 w-[1px] bg-[#25524B] mx-1 sm:mx-2" />

          {/* Navigation Links (starting with ABOUT) */}
          <nav className="flex items-center gap-3 sm:gap-5 md:gap-8">
            {navItems.map((item) => {
              const isActive = getIsActive(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative py-1 text-xs sm:text-sm font-sans tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#E6F4F1] font-bold'
                      : 'text-[#E6F4F1]/60 hover:text-[#E6F4F1] font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C58A55] rounded-full shadow-sm shadow-[#C58A55]/50" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
