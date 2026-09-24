import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import profilePic from '../../assets/profile.jpg';
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
  CheckCircle2,
  Loader2,
  Terminal,
  Radio,
  Activity,
  ShieldCheck,
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
          colors: ['#2C665D', '#E6F4F1', '#25524B', '#357B70', '#132B27'],
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
    <div className="w-full h-full flex flex-col justify-between py-6 sm:py-8 select-none pointer-events-auto relative">
      {/* 1. Ambient Background Subtle Tonal Spheres */}
      <div className="absolute -left-28 top-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#2C665D]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -right-28 bottom-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#2C665D]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#132B27]/50 blur-[160px] pointer-events-none -z-10" />

      {/* 2. High-Tech Outer Side Rail Accents & HUD Markers (Desktop View) */}
      {/* Left Outer Tech Rail */}
      <div className="hidden xl:flex absolute -left-6 top-12 bottom-16 flex-col justify-between items-center pointer-events-none select-none z-0">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#25524B] to-transparent relative flex flex-col justify-between items-center">
          {/* Top HUD Label */}
          <div className="flex items-center gap-2 -rotate-90 origin-center text-[9px] font-mono text-[#E6F4F1]/50 tracking-[0.25em] whitespace-nowrap -mt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C665D] animate-pulse" />
            <span>SYS.STATUS // NOMINAL</span>
          </div>

          {/* Mid Technical Tick Marks */}
          <div className="flex flex-col gap-2.5 py-6 opacity-40">
            <div className="w-3 h-[1px] bg-[#2C665D]" />
            <div className="w-1.5 h-[1px] bg-[#2C665D]" />
            <div className="w-4 h-[1px] bg-[#E6F4F1]" />
            <div className="w-1.5 h-[1px] bg-[#2C665D]" />
            <div className="w-3 h-[1px] bg-[#2C665D]" />
          </div>

          {/* Bottom Coordinate Marker */}
          <div className="flex items-center gap-2 -rotate-90 origin-center text-[9px] font-mono text-[#E6F4F1]/50 tracking-[0.25em] whitespace-nowrap -mb-8">
            <span>LOC // 31.5204° N, 74.3587° E</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C665D]" />
          </div>
        </div>
      </div>

      {/* Right Outer Tech Rail */}
      <div className="hidden xl:flex absolute -right-6 top-12 bottom-16 flex-col justify-between items-center pointer-events-none select-none z-0">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#25524B] to-transparent relative flex flex-col justify-between items-center">
          {/* Top HUD Label */}
          <div className="flex items-center gap-2 rotate-90 origin-center text-[9px] font-mono text-[#E6F4F1]/50 tracking-[0.25em] whitespace-nowrap -mt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C665D] animate-pulse" />
            <span>SECURE_NODE // v2.6</span>
          </div>

          {/* Mid Technical Tick Marks */}
          <div className="flex flex-col gap-2.5 py-6 opacity-40">
            <div className="w-3 h-[1px] bg-[#2C665D]" />
            <div className="w-1.5 h-[1px] bg-[#2C665D]" />
            <div className="w-4 h-[1px] bg-[#E6F4F1]" />
            <div className="w-1.5 h-[1px] bg-[#2C665D]" />
            <div className="w-3 h-[1px] bg-[#2C665D]" />
          </div>

          {/* Bottom Ping Marker */}
          <div className="flex items-center gap-2 rotate-90 origin-center text-[9px] font-mono text-[#E6F4F1]/50 tracking-[0.25em] whitespace-nowrap -mb-8">
            <span>SSL // ENCRYPTED_PIPELINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C665D]" />
          </div>
        </div>
      </div>

      {/* 3. Section Header & High-Impact Typography */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-zinc-200/80 dark:border-[#25524B] mb-6 relative z-10"
      >
        <div>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#1D5A50] dark:text-[#2C665D] font-bold mb-3 block">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2420] dark:text-[#E6F4F1] tracking-tight uppercase leading-tight">
            LET'S BUILD SOMETHING EXTRAORDINARY
          </h2>

          <p className="text-base sm:text-lg text-[#2C423E] dark:text-[#E6F4F1]/80 font-sans mt-2 max-w-2xl leading-relaxed">
            Open for high-impact frontend engineering, creative 3D web experiences, and engineering collaborations worldwide.
          </p>
        </div>

        {/* Live Availability Status Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-xs sm:text-sm font-mono text-zinc-800 dark:text-[#E6F4F1] shrink-0 shadow-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] mr-0.5 animate-pulse" />
          <span>OPEN FOR COMMISSIONS</span>
        </div>
      </motion.div>

      {/* 4. Main Expansive Grid: Left Dossier + Right Transmission Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch my-auto relative z-10">
        {/* Left Column: Interactive Dossier & Connect Tiles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-4"
        >
          {/* Profile Glass Card */}
          <div className="backdrop-blur-md bg-white dark:bg-[#132B27] border border-zinc-200/90 dark:border-[#25524B] rounded-2xl p-5 sm:p-6 relative overflow-hidden group shadow-sm hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-300">
            {/* Ambient Radial Rim Glow */}
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#2C665D]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#2C665D]/20 transition-all" />

            <div className="flex items-center gap-4">
              {/* Monogram Avatar Badge */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] p-[1.5px] shadow-sm">
                  <div className="w-full h-full bg-zinc-100 dark:bg-[#0A1312] rounded-2xl overflow-hidden flex items-center justify-center font-black text-lg text-[#0F2420] dark:text-[#E6F4F1] tracking-wider">
                    <img
                      src={profilePic}
                      alt="YK"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] border-2 border-white dark:border-[#132B27]" />
              </div>

              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-[#0F2420] dark:text-[#E6F4F1] truncate">
                    {portfolioData.about.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#25524B]/50 text-[#0F2420] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30 shrink-0">
                    DEV
                  </span>
                </div>
                <p className="text-xs text-[#1D5A50] dark:text-[#2C665D] font-mono font-semibold truncate">
                  Full-Stack & Creative 3D Engineer
                </p>
                <p className="text-[11px] text-zinc-600 dark:text-[#E6F4F1]/70 font-sans flex items-center gap-1 pt-0.5">
                  <span>📍</span> {portfolioData.about.location} • <span className="text-zinc-500 dark:text-[#E6F4F1]/50">UTC+5</span>
                </p>
              </div>
            </div>

            {/* Live Status Indicator Bar */}
            <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-[#25524B] flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-[#E6F4F1]/70">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                <span className="text-[#0F2420] dark:text-[#E6F4F1] font-medium">ONLINE & AVAILABLE 2026</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-[#E6F4F1]/60 font-medium">
                <Activity className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                <span>100% RESPONSIVE</span>
              </div>
            </div>
          </div>

          {/* Interactive Connect Channel Tiles */}
          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            {portfolioData.contacts.map((contact, idx) => {
              const isCopied = copiedKey === contact.name;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#132B27] border border-zinc-200/90 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-300 flex items-center justify-between gap-3 shadow-sm backdrop-blur-md group/tile"
                >
                  <div className="flex items-center gap-3 overflow-hidden min-w-0">
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] text-[#1D5A50] dark:text-[#2C665D] group-hover/tile:scale-105 group-hover/tile:text-zinc-950 dark:group-hover/tile:text-[#E6F4F1] group-hover/tile:border-[#1D5A50] dark:group-hover/tile:border-[#2C665D] transition-all shrink-0">
                      {contact.type === 'email' && <Mail className="w-4 h-4" />}
                      {contact.type === 'whatsapp' && <MessageCircle className="w-4 h-4" />}
                      {contact.type === 'github' && <Github className="w-4 h-4" />}
                      {contact.type === 'linkedin' && <Linkedin className="w-4 h-4" />}
                    </div>
                    <div className="truncate">
                      <p className="font-semibold text-sm sm:text-base text-[#0F2420] dark:text-[#E6F4F1] group-hover/tile:text-[#1D5A50] dark:group-hover/tile:text-[#2C665D] transition-colors">
                        {contact.name}
                      </p>
                      <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-[#E6F4F1]/70 truncate">
                        {contact.handle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Tactile Copy Action Button */}
                    <button
                      onClick={() => handleCopy(contact.handle, contact.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                        isCopied
                          ? 'bg-[#1D5A50] text-white dark:bg-[#25524B] dark:text-[#E6F4F1] border border-[#1D5A50] dark:border-[#2C665D] font-bold'
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D]'
                      }`}
                      title={`Copy ${contact.name}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white dark:text-[#2C665D]" />
                          <span className="text-xs font-semibold">COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-xs font-medium">COPY</span>
                        </>
                      )}
                    </button>

                    {/* External Link Action Button */}
                    {contact.link && (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all group/ext"
                        title={`Open ${contact.name}`}
                      >
                        <ExternalLink className="w-4 h-4 group-hover/ext:rotate-12 transition-transform" />
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
          className="lg:col-span-7 bg-white dark:bg-[#132B27] border border-zinc-200/90 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all duration-300 p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -left-20 -bottom-20 w-56 h-56 bg-[#2C665D]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-56 h-56 bg-[#2C665D]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Top Console Terminal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-[#25524B] mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-[#2C665D]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-[#2C665D]/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-[#2C665D]/40" />
              <span className="font-mono text-xs sm:text-sm text-[#1D5A50] dark:text-[#2C665D] ml-2 flex items-center gap-1.5 font-semibold">
                <Terminal className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D]" />
                <span>DISPATCH TERMINAL</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-600 dark:text-[#E6F4F1]/70 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D]" />
              <span className="hidden sm:inline">SECURE CHANNEL READY</span>
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-mono text-[#0F2420] dark:text-[#E6F4F1] uppercase tracking-wider flex items-center justify-between font-semibold">
                  <span>NAME</span>
                  <span className="text-[#1D5A50] dark:text-[#2C665D] font-normal">REQUIRED</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Studio"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A1312] border border-zinc-300 dark:border-[#25524B] focus:border-[#1D5A50] dark:focus:border-[#C58A55] text-sm sm:text-base text-zinc-900 dark:text-[#E6F4F1] placeholder:text-zinc-400 dark:placeholder:text-[#E6F4F1]/30 transition-all outline-none font-sans"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-mono text-[#0F2420] dark:text-[#E6F4F1] uppercase tracking-wider flex items-center justify-between font-semibold">
                  <span>EMAIL</span>
                  <span className="text-[#1D5A50] dark:text-[#C58A55] font-normal">REQUIRED</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A1312] border border-zinc-300 dark:border-[#25524B] focus:border-[#1D5A50] dark:focus:border-[#C58A55] text-sm sm:text-base text-zinc-900 dark:text-[#E6F4F1] placeholder:text-zinc-400 dark:placeholder:text-[#E6F4F1]/30 transition-all outline-none font-sans"
                />
              </div>
            </div>

            {/* Message Payload Input */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-mono text-[#0F2420] dark:text-[#E6F4F1] uppercase tracking-wider flex items-center justify-between font-semibold">
                <span>MESSAGE</span>
                <span className="text-[#1D5A50] dark:text-[#C58A55] font-normal">REQUIRED</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Project specifications, frontend architecture, 3D web design, or general inquiry..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A1312] border border-zinc-300 dark:border-[#25524B] focus:border-[#1D5A50] dark:focus:border-[#C58A55] text-sm sm:text-base text-zinc-900 dark:text-[#E6F4F1] placeholder:text-zinc-400 dark:placeholder:text-[#E6F4F1]/30 transition-all outline-none font-sans resize-none leading-relaxed"
              />
            </div>

            {/* Transmit Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || sentMessage}
              className={`w-full py-4 px-6 rounded-xl font-mono font-bold tracking-widest text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer uppercase relative overflow-hidden shadow-sm ${
                sentMessage
                  ? 'bg-[#1D5A50] dark:bg-[#25524B] text-white dark:text-[#E6F4F1] border border-[#1D5A50] dark:border-[#2C665D]'
                  : isSubmitting
                  ? 'bg-zinc-200 dark:bg-[#132B27] text-zinc-500 dark:text-[#E6F4F1]/50 border border-zinc-300 dark:border-[#25524B] cursor-wait'
                  : 'bg-[#1D5A50] hover:bg-[#134038] text-white dark:bg-[#2C665D] dark:text-[#E6F4F1] dark:hover:bg-[#357B70] transition-colors active:scale-[0.99] group/btn'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white dark:text-[#E6F4F1]" />
                  <span className="animate-pulse">ENCRYPTING & TRANSMITTING...</span>
                </>
              ) : sentMessage ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white dark:text-[#E6F4F1]" />
                  <span>MESSAGE TRANSMITTED SUCCESSFULLY</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-white dark:text-[#E6F4F1]" />
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
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#0A1312] border border-[#1D5A50]/50 dark:border-[#2C665D]/50 text-zinc-900 dark:text-[#E6F4F1] text-xs font-mono flex items-center gap-3 overflow-hidden"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D] shrink-0" />
                  <div>
                    <p className="font-bold">STATUS 200: DISPATCH SUCCESSFUL</p>
                    <p className="text-[11px] text-zinc-700 dark:text-[#E6F4F1]/80 font-sans">
                      Thank you for reaching out. I'll review your transmission and reply within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* 5. Footer Bar */}
      <div className="pt-6 border-t border-zinc-200 dark:border-[#25524B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 dark:text-[#E6F4F1]/60 relative z-10">
        <p>© {new Date().getFullYear()} Yasir Khokhar. All Rights Reserved.</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/60 dark:hover:text-[#E6F4F1] transition-colors cursor-pointer uppercase font-mono text-[11px] group"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#1D5A50] dark:text-[#2C665D] group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1]" />
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
