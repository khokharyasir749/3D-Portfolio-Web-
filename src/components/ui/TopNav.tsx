import React from 'react';

interface TopNavProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeSectionId,
  onNavigate,
}) => {
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
    <header className="fixed top-0 left-0 right-0 z-40 py-4 sm:py-5 flex items-center justify-between pointer-events-none backdrop-blur-md bg-black/40 border-b border-white/5 transition-all duration-300">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between pointer-events-none">
        {/* Top-Left: Minimal Clean Typography Logo */}
        <div className="pointer-events-auto">
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-2 text-left cursor-pointer transition-opacity hover:opacity-80"
            aria-label="Back to top"
          >
            <span className="font-sans font-bold text-sm sm:text-base text-white tracking-[0.22em] uppercase transition-colors group-hover:text-purple-300">
              YASIR KHOKHAR
            </span>
          </button>
        </div>

        {/* Top-Right: Pure Minimal Text Links */}
        <nav className="pointer-events-auto flex items-center gap-5 sm:gap-8">
          {navItems.map((item) => {
            const isActive = getIsActive(item.id);
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 text-xs sm:text-sm font-sans tracking-[0.22em] uppercase transition-all cursor-pointer ${
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
    </header>
  );
};

export default TopNav;
