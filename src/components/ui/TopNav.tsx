import React from 'react';
import { Volume2, VolumeX, Linkedin, Github, Moon, Sun } from 'lucide-react';
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
  isMuted = true,
  onToggleAudio,
  theme = 'dark',
  onToggleTheme,
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
    <header className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 flex items-center justify-between pointer-events-none backdrop-blur-md bg-black/40 border-b border-white/5 transition-all duration-300">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between pointer-events-none gap-3 sm:gap-6">
        {/* Top-Left: Minimal Clean Typography Logo */}
        <div className="pointer-events-auto flex-shrink-0">
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-2 text-left cursor-pointer transition-opacity hover:opacity-80"
            aria-label="Back to top"
          >
            <span className="font-sans font-bold text-xs sm:text-base text-white tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-colors group-hover:text-amber-400">
              YASIR KHOKHAR
            </span>
          </button>
        </div>

        {/* Top-Right: Action & Social Icons + Nav Links */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          {/* Action & Social Icons (Placed directly before ABOUT) */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {/* 1. Sound / Audio Mute toggle */}
            <button
              onClick={onToggleAudio}
              className="p-1.5 sm:p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center"
              aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* 2. LinkedIn link icon */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* 3. X / Twitter link icon */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center"
              aria-label="X (Twitter) Profile"
              title="X (Twitter) Profile"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>

            {/* 4. GitHub link icon */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 sm:p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* 5. Dark/Light Theme toggle */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 sm:p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all cursor-pointer inline-flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
          </div>

          {/* Subtle vertical divider */}
          <div className="h-4 w-[1px] bg-white/20 mx-1 sm:mx-2" />

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
                      ? 'text-white font-bold'
                      : 'text-zinc-400 hover:text-white font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 shadow-sm shadow-purple-500/80 rounded-full" />
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
