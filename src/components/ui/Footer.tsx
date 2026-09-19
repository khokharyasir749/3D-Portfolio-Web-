import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Zap,
  Terminal,
  Linkedin,
  Github,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
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

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const linkedinUrl =
    portfolioData.contacts.find((c) => c.type === 'linkedin')?.link ||
    'https://linkedin.com/in/yasirkhokhar';
  const githubUrl = 'https://github.com/khokharyasir749';
  const twitterUrl = 'https://x.com/yasirkhokhar';
  const whatsappUrl = 'https://wa.me/923280790704';

  const handleOpenTerminal = () => {
    window.dispatchEvent(new CustomEvent('toggle-dev-terminal'));
  };

  return (
    <footer
      className="relative z-20 w-full bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 text-zinc-400 py-16 px-6 md:px-16 pointer-events-auto select-none"
      aria-label="Developer Portfolio Footer"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* COLUMN 1: Developer Brand & Availability */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent block">
                YASIR KHOKHAR
              </span>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mt-1">
                Full-Stack & 3D Creative Developer
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              Building high-performance web applications, interactive 3D WebGL experiences, and scalable full-stack architectures.
            </p>

            {/* Live Status Badge */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400 tracking-wide">
                Available for Freelance & Full-time Roles
              </span>
            </div>
          </div>

          {/* COLUMN 2: Portfolio Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-1">
              NAVIGATION
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('about')}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-all duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-amber-400 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">About Me</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('work')}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-all duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-amber-400 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Featured Projects (Serene Heights 3D, ShopSphere, BiteHub, Vibe-Chat)
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('tech-stack')}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-all duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-amber-400 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">Tech Stack & Skills</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenTerminal}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-all duration-200 cursor-pointer text-left"
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-400 group-hover:text-amber-400 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform font-mono text-zinc-300 group-hover:text-amber-400">
                    Dev Terminal (&gt;_)
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="group flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-all duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-amber-400 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Direct Contact & Connect */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-1">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              {/* Email */}
              <a
                href="mailto:khokharyasir749@gmail.com"
                className="group flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                title="Send an email to Yasir"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-400/30 group-hover:bg-amber-400/10 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-zinc-300 group-hover:text-amber-400" />
                </div>
                <span className="truncate">khokharyasir749@gmail.com</span>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/923280790704"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                title="Direct WhatsApp"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-400/30 group-hover:bg-amber-400/10 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-zinc-300 group-hover:text-amber-400" />
                </div>
                <span>+92 328 0790704</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs leading-relaxed text-zinc-400">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-zinc-300" />
                </div>
                <span>Pakistan (Remote / Worldwide Collaboration)</span>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 text-xs text-zinc-400 pt-0.5">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-zinc-400 font-mono">Average response time: &lt; 24 hours</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Quick Message / Connect & Socials */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-1">
              LET'S COLLABORATE
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              Have an ambitious project or idea? Let's turn it into reality.
            </p>

            {/* Quick Action Button */}
            <div className="pt-1">
              <a
                href="mailto:khokharyasir749@gmail.com?subject=Project%20Inquiry%20-%20Let's%20Collaborate"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <span>Send Email / Inquire</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                CONNECT DIRECTLY
              </div>
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-200 cursor-pointer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-200 cursor-pointer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* X / Twitter */}
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-amber-400 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-200 cursor-pointer"
                  aria-label="X (Twitter) Profile"
                  title="X (Twitter) Profile"
                >
                  <XTwitterIcon className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer"
                  aria-label="Direct WhatsApp Chat"
                  title="Direct WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SUB-FOOTER BAR */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Yasir Khokhar. Crafted with React, Three.js & Tailwind CSS.</span>
          </div>

          <div className="text-zinc-500 font-mono text-[11px]">
            Designed for seamless interactive digital experiences.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
