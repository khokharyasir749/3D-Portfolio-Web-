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
      className="relative z-20 w-full bg-[#F4F7F6]/95 dark:bg-[#0A1312]/95 backdrop-blur-xl border-t border-zinc-200/90 dark:border-[#25524B] text-zinc-700 dark:text-[#9FB8B2] py-16 px-6 md:px-16 pointer-events-auto select-none"
      aria-label="Developer Portfolio Footer"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* COLUMN 1: Developer Brand & Availability */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-bold text-2xl tracking-wide text-[#0F2420] dark:text-[#E6F4F1] block">
                YASIR KHOKHAR
              </span>
              <span className="text-xs sm:text-sm font-mono text-[#1D5A50] dark:text-[#E6F4F1]/60 uppercase tracking-wider block mt-1">
                Full-Stack & 3D Creative Developer
              </span>
            </div>

            <p className="text-base text-zinc-700 dark:text-[#9FB8B2] leading-relaxed font-normal">
              Building high-performance web applications, interactive 3D WebGL experiences, and scalable full-stack architectures.
            </p>

            {/* Availability Note */}
            <div className="pt-2 flex items-center">
              <span className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-[#9FB8B2]">
                Available for contract projects
              </span>
            </div>
          </div>

          {/* COLUMN 2: Portfolio Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-[#0F2420] dark:text-[#E6F4F1] font-bold mb-1">
              NAVIGATION
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm sm:text-base">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('about')}
                  className="group flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] transition-colors duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1D5A50] dark:bg-[#25524B] dark:group-hover:bg-[#2C665D] transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">About Me</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('work')}
                  className="group flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] transition-colors duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1D5A50] dark:bg-[#25524B] dark:group-hover:bg-[#2C665D] transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Featured Projects (Serene Heights 3D, ShopSphere, BiteHub, Vibe-Chat)
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('tech-stack')}
                  className="group flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] transition-colors duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1D5A50] dark:bg-[#25524B] dark:group-hover:bg-[#2C665D] transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">Tech Stack & Skills</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenTerminal}
                  className="group flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] transition-colors duration-200 cursor-pointer text-left"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D] group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1] transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform font-mono text-zinc-700 dark:text-[#E6F4F1]/80 group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1]">
                    Dev Terminal (&gt;_)
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="group flex items-center gap-2 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] transition-colors duration-200 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#1D5A50] dark:bg-[#25524B] dark:group-hover:bg-[#2C665D] transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Direct Contact & Connect */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-[#0F2420] dark:text-[#E6F4F1] font-bold mb-1">
              GET IN TOUCH
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm sm:text-base">
              {/* Email */}
              <a
                href="mailto:khokharyasir749@gmail.com"
                className="group flex items-center gap-3 text-zinc-700 dark:text-[#E6F4F1]/70 hover:text-zinc-950 dark:hover:text-[#E6F4F1] transition-colors duration-200"
                title="Send an email to Yasir"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[#1D5A50] dark:text-[#2C665D] group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1] group-hover:border-[#1D5A50] dark:group-hover:border-[#2C665D] transition-colors flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">khokharyasir749@gmail.com</span>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/923280790704"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-zinc-700 dark:text-[#E6F4F1]/70 hover:text-zinc-950 dark:hover:text-[#E6F4F1] transition-colors duration-200"
                title="Direct WhatsApp"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[#1D5A50] dark:text-[#2C665D] group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1] group-hover:border-[#1D5A50] dark:group-hover:border-[#2C665D] transition-colors flex-shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+92 328 0790704</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-[#E6F4F1]/70">
                <div className="p-2 rounded-lg bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[#1D5A50] dark:text-[#2C665D] flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Pakistan (Remote / Worldwide Collaboration)</span>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-600 dark:text-[#E6F4F1]/70 pt-0.5">
                <div className="p-2 rounded-lg bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[#1D5A50] dark:text-[#2C665D] flex-shrink-0 shadow-sm">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-zinc-800 dark:text-[#E6F4F1]/80 font-mono">Average response time: &lt; 24 hours</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Quick Message / Connect & Socials */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-[#0F2420] dark:text-[#E6F4F1] font-bold mb-1">
              LET'S COLLABORATE
            </h3>
            <p className="text-base text-zinc-700 dark:text-[#9FB8B2] leading-relaxed font-normal">
              Have an ambitious project or idea? Let's turn it into reality.
            </p>

            {/* Quick Action Button */}
            <div className="pt-1">
              <a
                href="mailto:khokharyasir749@gmail.com?subject=Project%20Inquiry%20-%20Let's%20Collaborate"
                className="bg-[#1D5A50] hover:bg-[#134038] text-white dark:bg-[#2C665D] dark:text-[#E6F4F1] dark:hover:bg-[#357B70] transition-colors font-semibold py-3 px-5 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm w-full sm:w-auto"
              >
                <span>Send Email / Inquire</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-[#E6F4F1]/50 mb-2.5">
                CONNECT DIRECTLY
              </div>
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-zinc-700 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-200 cursor-pointer shadow-sm"
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
                  className="p-2.5 rounded-xl bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-zinc-700 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-200 cursor-pointer shadow-sm"
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
                  className="p-2.5 rounded-xl bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-zinc-700 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-200 cursor-pointer shadow-sm"
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
                  className="p-2.5 rounded-xl bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-zinc-700 hover:text-zinc-950 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-200 cursor-pointer shadow-sm"
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
        <div className="border-t border-zinc-200/90 dark:border-[#25524B] pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-zinc-500 dark:text-[#E6F4F1]/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Yasir Khokhar. Crafted with React, Three.js & Tailwind CSS.</span>
          </div>

          <div className="text-zinc-500 dark:text-[#E6F4F1]/60 font-mono text-xs sm:text-sm">
            Designed for seamless interactive digital experiences.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
