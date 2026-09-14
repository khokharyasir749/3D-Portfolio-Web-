import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FolderGit2,
  User,
  Mail,
  Cpu,
  Copy,
  Check,
  Send,
  MessageCircle,
  Briefcase,
  Shield,
  Zap,
  Github,
  Linkedin,
  ExternalLink,
  Layers,
} from 'lucide-react';
import {
  portfolioData,
  type SectionType,
} from '../../data/portfolioData';
import { WorkShowcase } from './WorkShowcase';
import { TechSpheresCanvas } from '../canvas/TechSpheresCanvas';
import { WhatIDoSection } from './WhatIDoSection';
import { ExperienceSection } from './ExperienceSection';

interface SectionShowcaseProps {
  activeSection: SectionType;
  onClose: () => void;
  onSelectSection: (section: NonNullable<SectionType>) => void;
}

export const SectionShowcase: React.FC<SectionShowcaseProps> = ({
  activeSection,
  onClose,
  onSelectSection,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [sentMessage, setSentMessage] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  if (!activeSection) return null;

  // Normalized tab key
  const currentTab: 'what-i-do' | 'experience' | 'work' | 'about' | 'contact' | 'skills' =
    activeSection === 'what-i-do'
      ? 'what-i-do'
      : activeSection === 'experience'
      ? 'experience'
      : activeSection === 'projects' || activeSection === 'work'
      ? 'work'
      : activeSection === 'skills'
      ? 'skills'
      : activeSection === 'contact'
      ? 'contact'
      : 'about';

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-40 flex justify-end pointer-events-auto select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Right-to-Left Sliding Section Drawer */}
        <motion.div
          initial={{ x: '100%', opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 260 }}
          className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-5xl h-full bg-[#090b12]/95 border-l border-white/10 shadow-2xl flex flex-col z-50 overflow-hidden"
        >
          {/* Top Drawer Header & Tab Selector */}
          <div className="px-5 py-4 border-b border-white/10 bg-[#0c0f18] flex items-center justify-between gap-4">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
              {/* WHAT I DO TAB */}
              <button
                onClick={() => onSelectSection('what-i-do')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-cyber font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'what-i-do'
                    ? 'bg-cyan-400 text-slate-950 shadow-neon-cyan'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>WHAT I DO</span>
              </button>

              {/* EXPERIENCE TAB */}
              <button
                onClick={() => onSelectSection('experience')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-cyber font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'experience'
                    ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXPERIENCE</span>
              </button>

              {/* WORK TAB */}
              <button
                onClick={() => onSelectSection('work')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-cyber font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'work'
                    ? 'bg-cyan-400 text-slate-950 shadow-neon-cyan'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-900'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>MY WORK (01-04)</span>
              </button>

              {/* SKILLS TAB */}
              <button
                onClick={() => onSelectSection('skills')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-cyber font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'skills'
                    ? 'bg-pink-500 text-slate-950 shadow-neon-magenta'
                    : 'text-slate-400 hover:text-pink-300 hover:bg-slate-900'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>3D TECH STACK</span>
              </button>

              {/* ABOUT TAB */}
              <button
                onClick={() => onSelectSection('about')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-cyber font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'about'
                    ? 'bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-500/30'
                    : 'text-slate-400 hover:text-yellow-300 hover:bg-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>ABOUT</span>
              </button>

              {/* CONTACT TAB */}
              <button
                onClick={() => onSelectSection('contact')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-cyber font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'contact'
                    ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-900'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>CONTACT</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-700 transition-colors cursor-pointer shrink-0"
              title="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body with Custom Scroll */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* ============================================================= */}
            {/* 1. WHAT I DO SECTION                                          */}
            {/* ============================================================= */}
            {currentTab === 'what-i-do' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <WhatIDoSection />
              </motion.div>
            )}

            {/* ============================================================= */}
            {/* 2. EXPERIENCE SECTION                                         */}
            {/* ============================================================= */}
            {currentTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <ExperienceSection />
              </motion.div>
            )}

            {/* ============================================================= */}
            {/* 3. WORK / HORIZONTAL NUMBERED CAROUSEL SECTION (01 TO 04)     */}
            {/* ============================================================= */}
            {currentTab === 'work' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <WorkShowcase />
              </motion.div>
            )}

            {/* ============================================================= */}
            {/* 4. ABOUT SECTION                                              */}
            {/* ============================================================= */}
            {currentTab === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Header Profile Card */}
                <div className="p-5 rounded-sm bg-[#0f1320] border border-yellow-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-yellow-400 via-cyan-500 to-pink-500 p-0.5 shadow-lg">
                      <div className="w-full h-full bg-[#0a0d17] rounded-sm flex items-center justify-center font-cyber font-bold text-xl text-yellow-400">
                        YK
                      </div>
                    </div>
                    <div>
                      <h3 className="font-cyber font-bold text-xl text-slate-100 flex items-center gap-2">
                        <span>{portfolioData.about.name}</span>
                        <span className="text-xs font-code text-yellow-400">
                          [@{portfolioData.about.handle}]
                        </span>
                      </h3>
                      <p className="text-xs text-cyan-300 font-code mt-0.5">
                        {portfolioData.about.role}
                      </p>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        📍 {portfolioData.about.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-code">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{portfolioData.about.status}</span>
                  </div>
                </div>

                {/* Bio Summary */}
                <div className="p-4 rounded-sm bg-[#0f1320] border border-white/10 space-y-2">
                  <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium">
                    "{portfolioData.about.tagline}"
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {portfolioData.about.bio[1]}
                  </p>
                </div>

                {/* Stats Counter Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {portfolioData.about.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-sm bg-[#0e1220] border border-slate-800 text-center space-y-1"
                    >
                      <p className="font-code text-[10px] text-slate-400 tracking-wider">
                        {stat.label}
                      </p>
                      <p className="font-cyber font-bold text-xl text-yellow-400">
                        {stat.value}
                      </p>
                      <p className="font-sans text-[10px] text-slate-500">
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Core Principles */}
                <div className="p-4 rounded-sm bg-[#0f1320] border border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-code text-pink-400 uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    <span>Engineering Principles</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {portfolioData.about.philosophies.map((phil, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded bg-slate-900/60 border border-slate-800"
                      >
                        <Shield className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                        <span>{phil}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ============================================================= */}
            {/* 5. INTERACTIVE 3D TECH STACK & PHYSICS SPHERES                */}
            {/* ============================================================= */}
            {currentTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="pb-3 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="font-cyber font-bold text-xl text-slate-100 tracking-wider flex items-center gap-2">
                      <span className="text-pink-400">MY TECHSTACK</span>
                      <span className="text-xs font-code px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/40">
                        INTERACTIVE 3D
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      Hover and drag mouse over the 3D physics spheres to disperse and inspect technologies.
                    </p>
                  </div>
                </div>

                {/* Interactive 3D Physics Spheres Canvas */}
                <TechSpheresCanvas />

                {/* Primary Core Tech Pills */}
                <div className="p-4 rounded-sm bg-[#0f1320] border border-white/10 space-y-2.5">
                  <h3 className="font-code text-xs text-slate-400 uppercase tracking-wider">
                    Core Engineering Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-code text-xs px-3 py-1.5 rounded-sm bg-slate-900 text-cyan-300 border border-cyan-500/30 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Categorized Skill Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioData.skills.map((category, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-sm bg-[#0f1320] border border-slate-800 space-y-3"
                    >
                      <h3 className="font-cyber font-bold text-sm text-pink-300 tracking-wide flex items-center justify-between">
                        <span>{category.category}</span>
                        <Cpu className="w-4 h-4 text-pink-400" />
                      </h3>

                      <div className="space-y-2.5">
                        {category.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-code text-slate-200">
                                {skill.name}
                              </span>
                              <span className="font-code text-slate-400">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <p className="text-[10px] text-slate-500 font-sans">
                              {skill.note}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ============================================================= */}
            {/* 6. CONTACT & TRANSMISSION TERMINAL                            */}
            {/* ============================================================= */}
            {currentTab === 'contact' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="pb-3 border-b border-white/10">
                  <h2 className="font-cyber font-bold text-xl text-slate-100 tracking-wider flex items-center gap-2">
                    <span className="text-emerald-400">INITIATE TRANSMISSION</span>
                    <span className="text-xs font-code px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      OPEN CHANNEL
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Contact Channels */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="text-xs font-code text-slate-400 uppercase tracking-wider mb-1">
                      Direct Uplink Channels
                    </div>

                    {portfolioData.contacts.map((contact, idx) => {
                      const isCopied = copiedKey === contact.name;
                      return (
                        <div
                          key={idx}
                          className="p-3.5 rounded-sm bg-[#0f1320] border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="p-2 rounded bg-slate-900 text-emerald-400 border border-slate-800 shrink-0">
                              {contact.type === 'email' && <Mail className="w-4 h-4" />}
                              {contact.type === 'whatsapp' && (
                                <MessageCircle className="w-4 h-4" />
                              )}
                              {contact.type === 'github' && (
                                <Github className="w-4 h-4" />
                              )}
                              {contact.type === 'linkedin' && (
                                <Linkedin className="w-4 h-4" />
                              )}
                            </div>
                            <div className="truncate">
                              <p className="font-cyber font-bold text-xs text-slate-100">
                                {contact.name}
                              </p>
                              <p className="font-code text-[11px] text-slate-400 truncate">
                                {contact.handle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleCopy(contact.handle, contact.name)}
                              className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 border border-slate-700 transition-colors cursor-pointer"
                              title={`Copy ${contact.name}`}
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {contact.link && (
                              <a
                                href={contact.link}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded bg-slate-800/80 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-slate-700 hover:border-emerald-500/40 transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    <div className="p-3 rounded bg-slate-900/60 border border-slate-800 text-xs font-sans text-slate-400 space-y-1">
                      <p>
                        ⚡ Direct Reach:{' '}
                        <strong className="text-emerald-400">
                          +92 328 0709704
                        </strong>
                      </p>
                      <p>
                        ✉️ Email:{' '}
                        <strong className="text-cyan-400">
                          khokharyasir749@gmail.com
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Right: Message Dispatch Form */}
                  <div className="lg:col-span-7 bg-[#0f1320] border border-emerald-500/30 p-5 rounded-sm">
                    <form onSubmit={handleSendMessage} className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <span className="font-cyber font-bold text-xs text-slate-100 tracking-wide">
                          SEND ENCRYPTED MESSAGE
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-code text-slate-400">
                          NAME / CALLSIGN
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-sm bg-slate-950/80 border border-slate-700 text-xs font-code text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-code text-slate-400">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@company.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-sm bg-slate-950/80 border border-slate-700 text-xs font-code text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-code text-slate-400">
                          MESSAGE CONTENT
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Project scope, contract opportunities, or greetings..."
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-sm bg-slate-950/80 border border-slate-700 text-xs font-sans text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sentMessage}
                        className={`w-full py-2.5 px-4 rounded-sm font-cyber font-bold tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          sentMessage
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-98'
                        }`}
                      >
                        {sentMessage ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>TRANSMISSION DISPATCHED // THANK YOU</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>TRANSMIT MESSAGE</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
