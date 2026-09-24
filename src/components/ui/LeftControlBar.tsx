import React from 'react';
import { Volume2, VolumeX, Linkedin, Github, Moon, Sun } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface LeftControlBarProps {
  isMuted: boolean;
  onToggleAudio: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
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
  theme = 'dark',
  onToggleTheme,
}) => {
  const linkedinUrl = portfolioData.contacts.find((c) => c.type === 'linkedin')?.link || 'https://linkedin.com/in/yasirkhokhar';
  const githubUrl = portfolioData.contacts.find((c) => c.type === 'github')?.link || 'https://github.com/khokharyasir749';
  const twitterUrl = 'https://x.com/yasirkhokhar';

  return (
    <aside
      className="fixed left-5 sm:left-8 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center select-none pointer-events-auto"
      aria-label="Quick Controls & Socials"
    >
      {/* Top Subtle Vertical Line */}
      <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-zinc-300 dark:via-[#25524B] to-zinc-300/30 dark:to-[#2C665D]/30 mb-3" />

      {/* Control Icons Stack (Ultra-crisp & minimal) */}
      <div className="flex flex-col items-center gap-3.5 py-1">
        {/* 1. Sound Toggle */}
        <button
          onClick={onToggleAudio}
          className="group relative p-1.5 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/50 dark:hover:text-[#E6F4F1] transition-all duration-200 cursor-pointer"
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D] group-hover:scale-110 transition-transform" />
          )}
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[10px] font-mono text-zinc-800 dark:text-[#E6F4F1] whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg z-50">
            {isMuted ? 'Sound Off' : 'Sound On'}
          </span>
        </button>

        {/* 2. LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative p-1.5 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/50 dark:hover:text-[#E6F4F1] transition-all duration-200 cursor-pointer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[10px] font-mono text-zinc-800 dark:text-[#E6F4F1] whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg z-50">
            LinkedIn
          </span>
        </a>

        {/* 3. X (Twitter) */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative p-1.5 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/50 dark:hover:text-[#E6F4F1] transition-all duration-200 cursor-pointer"
          aria-label="X (Twitter) Profile"
        >
          <XTwitterIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[10px] font-mono text-zinc-800 dark:text-[#E6F4F1] whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg z-50">
            X
          </span>
        </a>

        {/* 4. GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative p-1.5 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/50 dark:hover:text-[#E6F4F1] transition-all duration-200 cursor-pointer"
          aria-label="GitHub Profile"
        >
          <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[10px] font-mono text-zinc-800 dark:text-[#E6F4F1] whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg z-50">
            GitHub
          </span>
        </a>

        {/* 5. Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="group relative p-1.5 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/50 dark:hover:text-[#E6F4F1] transition-all duration-200 cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Moon className="w-3.5 h-3.5 text-[#2C665D] group-hover:scale-110 transition-transform" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
          )}
          <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[10px] font-mono text-zinc-800 dark:text-[#E6F4F1] whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg z-50">
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
      </div>

      {/* Bottom Subtle Vertical Line */}
      <div className="w-[1px] h-14 bg-gradient-to-b from-zinc-300/30 dark:from-[#2C665D]/30 via-zinc-300 dark:via-[#25524B] to-transparent mt-3" />
    </aside>
  );
};

export default LeftControlBar;
