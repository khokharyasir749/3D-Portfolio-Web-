import React, { useEffect, useState } from 'react';
import { NavbarV2 } from './NavbarV2';
import { HeroV2 } from './HeroV2';
import { BentoGridV2 } from './BentoGridV2';
import { ProjectsDirectoryModal } from './ProjectsDirectoryModal';
import { ArrowUpRight, Mail, Phone, X, Check, FileText } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const PortfolioV2: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { contacts } = portfolioData;

  useEffect(() => {
    document.title = 'YASIR KHOKHAR — Modern Bento Portfolio (V2)';
    document.documentElement.classList.add('dark');
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khokharyasir749@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#fafafa] selection:bg-orange-500/30 selection:text-orange-200 font-sans antialiased relative overflow-x-hidden flex flex-col justify-between">
      {/* Background ambient lighting and fine dot matrix texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle top amber glow aura */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-orange-600/12 via-amber-700/6 to-transparent blur-[140px] rounded-full" />
        {/* Global micro-dot matrix pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff07_1px,transparent_0)] [background-size:24px_24px] opacity-70" />
      </div>

      {/* Floating Pill Navbar */}
      <NavbarV2
        onContactClick={() => setIsContactModalOpen(true)}
        onProjectsClick={() => setIsProjectsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 pt-24 sm:pt-28 lg:pt-32 pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full space-y-16">
        {/* Step 1: Hero Section */}
        <HeroV2 onCtaClick={() => setIsContactModalOpen(true)} />

        {/* Step 2: Bento Grid Layout & Featured Projects / Services */}
        <BentoGridV2 onOpenAllProjects={() => setIsProjectsModalOpen(true)} />
      </main>

      {/* Floating Quick Action / Switcher Controls (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
        <a
          href="/v1"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#121216]/90 hover:bg-[#1a1a22] text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-2xl text-xs font-mono transition-all duration-200 hover:scale-105 active:scale-95"
          title="Return to the original 3D Portfolio version"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>← Back to V1 3D Portfolio</span>
        </a>
      </div>

      {/* Lightweight Quick Contact Modal for "Book a free call" / "Get in Touch" */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#111115] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold block mb-1">
                LET'S TALK
              </span>
              <h3 className="text-2xl font-bold text-white">Book a Call & Get in Touch</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Reach out directly via WhatsApp, Email, or request verified credentials.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-3">
              <a
                href="https://wa.me/923280790704"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">WhatsApp Direct</div>
                    <div className="text-xs text-neutral-400">+92 328 0790704</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Email Address</div>
                    <div className="text-xs text-neutral-400">khokharyasir749@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              <a
                href={portfolioData.about.resumeUrl}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Direct Resume Request</div>
                    <div className="text-xs text-neutral-400">Official technical dossier & CV</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-3 pt-2">
                {contacts
                  .filter((c) => c.type === 'github' || c.type === 'linkedin')
                  .map((c, idx) => (
                    <a
                      key={idx}
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-200 hover:text-white transition-colors"
                    >
                      <span>{c.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Full-Screen Projects Directory / Showcase Modal */}
      <ProjectsDirectoryModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
      />

      {/* Sleek Minimalist Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#09090c]/80 backdrop-blur-xl py-10 px-4 sm:px-8 lg:px-12 text-xs font-mono text-neutral-400">
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
