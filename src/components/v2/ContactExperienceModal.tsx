import React, { useEffect, useState } from 'react';
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#140a06]/95 backdrop-blur-2xl text-[#fafafa] selection:bg-orange-500/30 selection:text-orange-200"
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

          {/* Large Luxury Glass Watermark Typography */}
          <div className="absolute inset-x-0 top-8 sm:top-12 flex justify-center pointer-events-none select-none z-0 px-4">
            <h1 className="text-[3rem] sm:text-7xl md:text-8xl lg:text-[10vw] xl:text-[9rem] font-black uppercase tracking-tight text-white/[0.08] sm:text-white/[0.12] leading-none whitespace-nowrap font-sans drop-shadow-2xl text-center">
              YASIR KHOKHAR
            </h1>
          </div>

          {/* Natural Cutout Portrait Grounded with Bottom Gradient */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden opacity-30 sm:opacity-40 lg:opacity-50">
            <div className="relative flex items-end justify-center h-full max-h-[580px] sm:max-h-[680px] lg:max-h-[780px]">
              <img
                src="/yasir-hero-cutout.png"
                alt="Yasir Khokhar Portrait"
                className="h-[88%] sm:h-[94%] w-auto object-contain object-bottom filter contrast-[1.05] drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#140a06] via-[#140a06]/85 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Subtle micro-dot matrix pattern across entire document */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff07_1px,transparent_0)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        </div>

        {/* ========================================================
            TOP FLOATING CONTROLS
           ======================================================== */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-12 py-6 max-w-7xl mx-auto w-full pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              STATUS: <strong className="text-white font-medium">AVAILABLE FOR CONTRACTS</strong>
            </span>
          </div>

          {/* Floating Back to Portfolio / Close Button */}
          <button
            onClick={onClose}
            className="pointer-events-auto group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-orange-500/40 text-white text-xs sm:text-sm font-mono backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
            title="Return to Portfolio (ESC)"
          >
            <span>Back to Portfolio</span>
            <X className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
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
            <div className="lg:col-span-7 space-y-8">
              {/* Category Tag & Bold Headline */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>LET'S TALK // INITIATE</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.06]">
                  Let's build something{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-100">
                    extraordinary
                  </span>{' '}
                  together.
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
                  Open for technical architecture contracts, creative 3D web systems, and high-performance engineering collaborations worldwide.
                </p>
              </div>

              {/* Direct Email Link & Copy Interaction */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
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
                    <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
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
              <div className="pt-6 border-t border-white/[0.06]">
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
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

              {/* Resume / Official Dossier High-Impact CTA Row */}
              <div className="py-4 border-y border-white/[0.06]">
                <a
                  href={portfolioData.about.resumeUrl}
                  className="group flex items-center justify-between py-3 hover:pl-2 transition-all duration-200"
                  title="Request Yasir Khokhar's Official Resume / CV"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white group-hover:text-orange-300 transition-colors flex items-center gap-2">
                        <span>Request Official Dossier / CV</span>
                        <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="text-xs text-neutral-400 font-mono mt-0.5">
                        Enterprise architecture, stack verification & references
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono group-hover:bg-orange-500 group-hover:text-black font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    Request ↗
                  </span>
                </a>
              </div>

              {/* Social Channels List (Minimalist text links with NO surrounding box plates) */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium block">
                  Verified Digital Ecosystems
                </span>
                <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                  {/* GitHub */}
                  <a
                    href="https://github.com/khokharyasir749"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-4 group hover:pl-1 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.04] text-neutral-400 group-hover:text-white group-hover:bg-white/[0.08] transition-colors">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-orange-300 transition-colors">
                          GitHub Source Repositories
                        </div>
                        <div className="text-xs text-neutral-500 font-mono">
                          @khokharyasir749 ↗
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/yasirkhokhar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-4 group hover:pl-1 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-sky-300 transition-colors">
                          LinkedIn Professional Network
                        </div>
                        <div className="text-xs text-neutral-500 font-mono">
                          /yasirkhokhar ↗
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
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
    </AnimatePresence>
  );
};
