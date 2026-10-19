import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarV2Props {
  onContactClick?: () => void;
  onProjectsClick?: () => void;
}

export const NavbarV2: React.FC<NavbarV2Props> = ({ onContactClick, onProjectsClick }) => {
  const [activeItem, setActiveItem] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#140a06]/60 backdrop-blur-md border-b border-white/[0.06] py-4 sm:py-5 px-4 sm:px-8 lg:px-12 transition-all duration-300 transform-gpu will-change-transform">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo matching JAXON STEEL typography from Dribbble reference */}
        <a
          href="#home"
          className="flex items-center gap-2 group tracking-tight text-lg sm:text-xl font-black text-white uppercase select-none transition-transform hover:scale-[1.02]"
        >
          <span className="tracking-wider">YASIR</span>
          <span className="font-light italic text-orange-400/95 tracking-normal group-hover:text-orange-300 transition-colors">
            KHOKHAR
          </span>
        </a>

        {/* Centered Floating Pill Navigation (Matching Reference Exactly) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 bg-white/[0.03] border border-white/[0.08] backdrop-blur-lg rounded-full px-5 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.name === 'Projects' && onProjectsClick) {
                    e.preventDefault();
                    setActiveItem(link.name);
                    onProjectsClick();
                    return;
                  }
                  setActiveItem(link.name);
                }}
                className={`px-3.5 py-1 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Top Right Action Button: Single sleek frosted pill button */}
        <div className="flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/10 hover:border-orange-500/50 bg-white/[0.04] hover:bg-orange-500 text-white hover:text-black backdrop-blur-md transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2;
