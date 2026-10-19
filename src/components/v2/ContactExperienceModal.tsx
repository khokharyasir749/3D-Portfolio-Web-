import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Mail,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
  Github,
  Linkedin,
  FileText,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

interface ContactExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactExperienceModal: React.FC<ContactExperienceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Keyboard shortcut: ESC closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khokharyasir749@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[80] overflow-y-auto bg-[#140a06]/96 backdrop-blur-md text-[#fafafa] selection:bg-orange-500/30 selection:text-orange-200 transform-gpu"
      >
        {/* ========================================================
            HERO CANVAS BACKGROUND WITH PORTRAIT & GLASS WATERMARK
           ======================================================== */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Continuous warm espresso base canvas */}
          <div className="absolute inset-0 bg-[#140a06]" />

          {/* Warm Amber-Copper Studio Backlight radiating behind portrait */}
          <div
            className="absolute inset-x-0 top-0 h-[850px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 75% 65% at 50% 25%, rgba(135, 62, 23, 0.45) 0%, rgba(85, 36, 12, 0.25) 45%, rgba(20, 10, 6, 0.85) 80%, transparent 100%)',
            }}
          />

          {/* Refined Glass Watermark Typography */}
          <div className="absolute inset-x-0 top-12 sm:top-16 lg:top-20 flex justify-center pointer-events-none select-none z-0 px-4">
            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[8.5vw] xl:text-[8rem] text-white/[0.07] font-black tracking-widest uppercase select-none pointer-events-none leading-none whitespace-nowrap font-sans drop-shadow-2xl text-center">
              YASIR KHOKHAR
            </h1>
          </div>

          {/* Subtle, soft-lit studio backdrop layer with smooth radial mask falloff towards the waist */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden opacity-90">
            <div
              className="relative flex items-end justify-center h-full max-h-[500px] sm:max-h-[580px] lg:max-h-[660px]"
              style={{
                maskImage:
                  'radial-gradient(ellipse 75% 70% at 50% 32%, black 25%, rgba(0,0,0,0.5) 60%, transparent 88%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 75% 70% at 50% 32%, black 25%, rgba(0,0,0,0.5) 60%, transparent 88%)',
              }}
            >
              <img
                src="/yasir-hero-cutout.png"
                alt="Yasir Khokhar Portrait"
                className="h-[80%] sm:h-[86%] w-auto object-contain object-bottom filter contrast-[1.03] brightness-95 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#140a06] via-[#140a06]/85 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Subtle micro-dot matrix pattern across entire document */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff07_1px,transparent_0)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        </div>

        {/* ========================================================
            TOP FLOATING CONTROLS
           ======================================================== */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-12 py-6 max-w-7xl mx-auto w-full pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              STATUS: <strong className="text-white font-medium">AVAILABLE FOR CONTRACTS</strong>
            </span>
          </div>

          {/* Floating Back to Portfolio / Close Button */}
          <button
            onClick={onClose}
            className="pointer-events-auto group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm font-mono backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer transform-gpu"
            title="Return to Portfolio (ESC)"
          >
            <span>Back to Portfolio</span>
            <X className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </button>
        </header>

        {/* ========================================================
            SPLIT LEFT & RIGHT EDITORIAL CONTENT (ZERO BOXED CARDS)
           ======================================================== */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8 sm:py-16 min-h-[calc(100vh-120px)] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* ----------------------------------------------------
                LEFT COLUMN: DIRECT COMMUNICATION & CALL
               ---------------------------------------------------- */}
            <div className="lg:col-span-7 space-y-10 sm:space-y-12">
              {/* Category Tag & Bold Headline */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>LET'S TALK // INITIATE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                  Let's build something{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-100">
                    extraordinary
                  </span>{' '}
                  together.
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl leading-relaxed">
                  Open for technical architecture contracts, creative 3D web systems, and high-performance engineering collaborations worldwide.
                </p>
              </div>

              {/* Direct Email Link & Copy Interaction */}
              <div className="space-y-4 pt-8 sm:pt-10 border-t border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>Direct Electronic Mail</span>
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="mailto:khokharyasir749@gmail.com"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white hover:text-orange-400 transition-colors tracking-tight font-sans inline-flex items-center gap-2 group"
                    title="Send an email directly to Yasir Khokhar"
                  >
                    <span className="break-all sm:break-normal">khokharyasir749@gmail.com</span>
                    <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                </div>

                {/* Inline Copy Button with status feedback */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-orange-500/30 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer active:scale-95"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <span className="text-xs font-mono text-neutral-500">
                    Primary inbox • Fast response within 24h
                  </span>
                </div>
              </div>

              {/* WhatsApp Direct Action Row */}
              <div className="pt-8 sm:pt-10 border-t border-white/[0.06]">
                <a
                  href="https://wa.me/923280790704"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/[0.06] hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                        <span>WhatsApp Direct Call & Chat</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-normal">
                          Online
                        </span>
                      </div>
                      <div className="text-sm text-neutral-400 font-mono mt-0.5">
                        +92 328 0790704 • Instant Messaging & Discussion
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 shrink-0">
                    <span className="hidden sm:inline">Message Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>

              {/* Location & Timezone Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 pt-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Operating from {portfolioData.about.location} • Available for Remote Collaborations</span>
              </div>
            </div>

            {/* ----------------------------------------------------
                RIGHT COLUMN: DOSSIER & SOCIAL CHANNELS
               ---------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium block">
                  CREDENTIALS & NETWORK
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Dossier & Social Channels
                </h3>
                <p className="text-sm text-neutral-400 font-light">
                  Access verified enterprise credentials, technical repositories, and direct professional networks.
                </p>
              </div>

              {/* Uniform Editorial Rows: Dossier, GitHub, and LinkedIn */}
              <div className="border-t border-white/[0.06]">
                {/* 1. Request Official Dossier / CV */}
                <a
                  href={portfolioData.about.resumeUrl}
                  className="group flex items-center justify-between py-4 border-b border-white/[0.06] transition-all duration-200"
                  title="Request Yasir Khokhar's Official Resume / CV"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-colors">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                        Request Official Dossier / CV
                      </div>
                      <div className="text-xs text-neutral-400 font-mono mt-0.5">
                        Enterprise architecture, stack verification & references
                      </div>
                    </div>
                  </div>
                  <span className="bg-white/[0.05] hover:bg-orange-500 hover:text-black border border-white/10 transition-all px-3 py-1.5 text-xs rounded-full font-mono text-neutral-300 inline-flex items-center gap-1.5 shrink-0 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-400">
                    <span>Request</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>

                {/* 2. GitHub Source Repositories */}
                <a
                  href="https://github.com/khokharyasir749"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/[0.06] transition-all duration-200"
                  title="View GitHub Source Repositories"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-neutral-400 group-hover:text-white group-hover:bg-white/[0.08] group-hover:border-white/20 transition-colors">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                        GitHub Source Repositories
                      </div>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        @khokharyasir749
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </div>
                </a>

                {/* 3. LinkedIn Professional Network */}
                <a
                  href="https://linkedin.com/in/yasirkhokhar"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/[0.06] transition-all duration-200"
                  title="Connect on LinkedIn"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/30 transition-colors">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                        LinkedIn Professional Network
                      </div>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        /yasirkhokhar
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                  </div>
                </a>
              </div>

              {/* Direct Booking Call Note */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block">
                  FAST ONBOARDING
                </span>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Need a discovery call before initiating a contract? Drop a WhatsApp message or email with your project timeline and stack requirements.
                </p>
              </div>

            </div>

          </div>
        </main>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};
