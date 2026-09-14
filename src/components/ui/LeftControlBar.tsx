import React, { useState } from 'react';
import { Volume2, VolumeX, Linkedin, Github, Moon, Sun } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface LeftControlBarProps {
  isMuted: boolean;
  onToggleAudio: () => void;
}

// Minimalist X (Twitter) Vector Icon
const XTwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const LeftControlBar: React.FC<LeftControlBarProps> = ({
  isMuted,
  onToggleAudio,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const linkedinUrl = portfolioData.contacts.find((c) => c.type === 'linkedin')?.link || 'https://linkedin.com/in/yasirkhokhar';
  const githubUrl = portfolioData.contacts.find((c) => c.type === 'github')?.link || 'https://github.com/khokharyasir749';
  const twitterUrl = 'https://x.com/yasirkhokhar';

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <aside
      className="fixed left-5 sm:left-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center select-none pointer-events-auto"
      aria-label="Quick Controls & Socials"
    >
      {/* Top Subtle Vertical Line */}
      <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-white/10 to-white/20 mb-3" />

      {/* Control Icons Stack (Ultra-crisp & minimal) */}
      <div className="flex flex-col items-center gap-3.5 py-1">
        {/* 1. Sound Toggle */}
        <button
          onClick={onToggleAudio}
          className="group relative p-1.5 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
          )}
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-[#111116] border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl z-50">
            {isMuted ? 'Sound Off' : 'Sound On'}
          </span>
        </button>

        {/* 2. LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative p-1.5 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-[#111116] border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl z-50">
            LinkedIn
          </span>
        </a>

        {/* 3. X (Twitter) */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative p-1.5 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="X (Twitter) Profile"
        >
          <XTwitterIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-[#111116] border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl z-50">
            X
          </span>
        </a>

        {/* 4. GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative p-1.5 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="GitHub Profile"
        >
          <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-[#111116] border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl z-50">
            GitHub
          </span>
        </a>

        {/* 5. Theme Toggle */}
        <button
          onClick={handleToggleTheme}
          className="group relative p-1.5 text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <Moon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
          )}
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-[#111116] border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl z-50">
            Theme
          </span>
        </button>
      </div>

      {/* Bottom Subtle Vertical Line */}
      <div className="w-[1px] h-14 bg-gradient-to-b from-white/20 via-white/10 to-transparent mt-3" />
    </aside>
  );
};

export default LeftControlBar;
