import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarV2Props {
  onContactClick?: () => void;
}

export const NavbarV2: React.FC<NavbarV2Props> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 ${
        scrolled ? 'py-3.5 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5' : 'py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo matching JAXON STEEL typography from Dribbble reference */}
        <a
          href="/v2"
          className="flex items-center gap-2 group tracking-tight text-lg sm:text-xl font-black text-white uppercase select-none transition-transform hover:scale-[1.02]"
        >
          <span className="tracking-wider">YASIR</span>
          <span className="font-light italic text-orange-400/95 tracking-normal group-hover:text-orange-300 transition-colors">
            KHOKHAR
          </span>
        </a>

        {/* Centered Floating Pill Navigation (Dribbble Ref) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141418]/90 backdrop-blur-xl border border-white/10 rounded-full px-3.5 py-1.5 shadow-2xl shadow-black/80">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveItem(link.name)}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Top Right Action Button: "Get in Touch" pill button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              if (onContactClick) {
                e.preventDefault();
                onContactClick();
              }
            }}
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:border-orange-500/40 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavbarV2;
