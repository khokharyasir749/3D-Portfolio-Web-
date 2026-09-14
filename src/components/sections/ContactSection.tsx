import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  Send,
  ArrowUp,
  Sparkles,
  CheckCircle2,
  Loader2,
  Terminal,
  Radio,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message || isSubmitting) return;

    setIsSubmitting(true);

    // Simulate encrypted transmission pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSentMessage(true);

      // Trigger celebratory high-energy confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#a855f7', '#06b6d4', '#ec4899', '#3b82f6', '#ffffff'],
        });
      } catch {
        // safe fallback
      }

      setTimeout(() => {
        setSentMessage(false);
        setFormState({ name: '', email: '', message: '' });
      }, 5000);
    }, 1100);
  };

  const scrollToTop = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto select-none pointer-events-auto">
      {/* 1. Section Header & High-Impact Typography */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-white/10 mb-6"
      >
        <div>
          {/* Section Index Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 07 // TRANSMISSION NODE ]</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            LET'S BUILD SOMETHING{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              EXTRAORDINARY
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1.5 max-w-xl leading-relaxed">
            Open for high-impact frontend engineering, creative 3D web experiences, and engineering collaborations worldwide.
          </p>
        </div>

        {/* Live Availability Status Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 shrink-0 shadow-sm shadow-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>OPEN FOR COMMISSIONS</span>
        </div>
      </motion.div>

      {/* 2. Main Grid: Left Dossier + Right Transmission Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start my-auto">
        {/* Left Column: Interactive Dossier & Connect Tiles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Profile Glass Card */}
          <div className="backdrop-blur-sm bg-zinc-950/85 border border-white/10 rounded-2xl p-5 sm:p-6 relative overflow-hidden group shadow-xl hover:border-purple-500/30 transition-all duration-300">
            {/* Ambient Radial Rim Glow */}
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-purple-600/10 rounded-full blur-xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

            <div className="flex items-center gap-4">
              {/* Neon Holographic Monogram Avatar Badge */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-purple-500/20">
                  <div className="w-full h-full bg-[#09090e] rounded-2xl flex items-center justify-center font-black text-lg text-white tracking-wider">
                    YK
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#09090e] animate-pulse" />
              </div>

              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-white truncate">
                    {portfolioData.about.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                    DEV
                  </span>
                </div>
                <p className="text-xs text-purple-400 font-mono font-medium truncate">
                  Full-Stack & Creative 3D Engineer
                </p>
                <p className="text-[11px] text-zinc-400 font-sans flex items-center gap-1 pt-0.5">
                  <span>📍</span> {portfolioData.about.location} • <span className="text-zinc-500">UTC+5</span>
                </p>
              </div>
            </div>

            {/* Live Status Indicator Bar */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="text-zinc-300">ONLINE & AVAILABLE // 2026</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-purple-400/80" />
            </div>
          </div>

          {/* Interactive Connect Channel Tiles */}
          <div className="space-y-2.5">
            {portfolioData.contacts.map((contact, idx) => {
              const isCopied = copiedKey === contact.name;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/10 hover:border-purple-500/50 hover:bg-zinc-900/80 transition-all duration-300 flex items-center justify-between gap-3 shadow-lg hover:shadow-purple-500/10 backdrop-blur-md group/tile"
                >
                  <div className="flex items-center gap-3 overflow-hidden min-w-0">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover/tile:scale-110 group-hover/tile:text-cyan-300 group-hover/tile:border-cyan-500/40 transition-all shrink-0">
                      {contact.type === 'email' && <Mail className="w-4 h-4" />}
                      {contact.type === 'whatsapp' && <MessageCircle className="w-4 h-4" />}
                      {contact.type === 'github' && <Github className="w-4 h-4" />}
                      {contact.type === 'linkedin' && <Linkedin className="w-4 h-4" />}
                    </div>
                    <div className="truncate">
                      <p className="font-semibold text-xs text-white group-hover/tile:text-purple-300 transition-colors">
                        {contact.name}
                      </p>
                      <p className="font-mono text-[11px] text-zinc-400 truncate">
                        {contact.handle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Tactile Copy Action Button */}
                    <button
                      onClick={() => handleCopy(contact.handle, contact.name)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                          : 'bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10'
                      }`}
                      title={`Copy ${contact.name}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px]">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px]">COPY</span>
                        </>
                      )}
                    </button>

                    {/* External Link Action Button */}
                    {contact.link && (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-purple-500/20 text-zinc-400 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 transition-all group/ext"
                        title={`Open ${contact.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/ext:rotate-12 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Futuristic Transmission Console Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 bg-zinc-950/90 border border-white/10 hover:border-purple-500/30 transition-all duration-300 p-6 sm:p-7 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

          {/* Top Console Terminal Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-xs text-zinc-400 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>DISPATCH_TERMINAL.v2</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SECURE_CHANNEL_READY</span>
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>// IDENTIFIER</span>
                  <span className="text-zinc-600">NAME</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Studio"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400 focus:bg-white/[0.06] text-xs sm:text-sm text-white placeholder:text-zinc-600 transition-all outline-none font-sans shadow-inner focus:shadow-purple-500/20"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>// FREQUENCY</span>
                  <span className="text-zinc-600">EMAIL</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400 focus:bg-white/[0.06] text-xs sm:text-sm text-white placeholder:text-zinc-600 transition-all outline-none font-sans shadow-inner focus:shadow-purple-500/20"
                />
              </div>
            </div>

            {/* Message Payload Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                <span>// PAYLOAD</span>
                <span className="text-zinc-600">MESSAGE</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Project specifications, frontend architecture, 3D web design, or general inquiry..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400 focus:bg-white/[0.06] text-xs sm:text-sm text-white placeholder:text-zinc-600 transition-all outline-none font-sans shadow-inner focus:shadow-purple-500/20 resize-none leading-relaxed"
              />
            </div>

            {/* High-Impact Transmit Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || sentMessage}
              className={`w-full py-3.5 px-6 rounded-xl font-mono font-bold tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer uppercase relative overflow-hidden shadow-lg ${
                sentMessage
                  ? 'bg-emerald-600 text-white shadow-emerald-500/30'
                  : isSubmitting
                  ? 'bg-purple-900/80 text-purple-200 cursor-wait'
                  : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 text-white shadow-purple-600/30 hover:shadow-purple-500/50 active:scale-[0.99] group/btn'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-300" />
                  <span className="animate-pulse">ENCRYPTING & TRANSMITTING...</span>
                </>
              ) : sentMessage ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>TRANSMISSION CONFIRMED // THANK YOU</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-cyan-300" />
                  <span>TRANSMIT MESSAGE</span>
                </>
              )}
            </button>

            {/* Success Receipt Alert Card */}
            <AnimatePresence>
              {sentMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-3 overflow-hidden"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold">STATUS 200: DISPATCH SUCCESSFUL</p>
                    <p className="text-[11px] text-emerald-400/80 font-sans">
                      Thank you for reaching out. I'll review your transmission and reply within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* 3. Footer Bar */}
      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-500">
        <p>© {new Date().getFullYear()} Yasir Khokhar. All Rights Reserved.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-zinc-400 hover:text-purple-300 transition-colors cursor-pointer uppercase font-mono text-[11px]"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
