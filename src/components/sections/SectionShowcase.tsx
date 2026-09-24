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
import profilePic from '../../assets/profile.jpg';
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
          className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-5xl h-full bg-[#F6F9F8] dark:bg-[#0A1312]/95 border-l border-zinc-200 dark:border-[#25524B] shadow-2xl flex flex-col z-50 overflow-hidden text-zinc-900 dark:text-[#E6F4F1]"
        >
          {/* Top Drawer Header & Tab Selector */}
          <div className="px-5 py-4 border-b border-zinc-200 dark:border-[#25524B] bg-white dark:bg-[#132B27] flex items-center justify-between gap-4">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
              {/* WHAT I DO TAB */}
              <button
                onClick={() => onSelectSection('what-i-do')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'what-i-do'
                    ? 'bg-[#1D5A50] text-white shadow-md dark:bg-[#2C665D] dark:text-[#E6F4F1]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] dark:hover:bg-[#25524B]/50'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>WHAT I DO</span>
              </button>

              {/* EXPERIENCE TAB */}
              <button
                onClick={() => onSelectSection('experience')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'experience'
                    ? 'bg-[#1D5A50] text-white shadow-md dark:bg-[#2C665D] dark:text-[#E6F4F1]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] dark:hover:bg-[#25524B]/50'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>EXPERIENCE</span>
              </button>

              {/* WORK TAB */}
              <button
                onClick={() => onSelectSection('work')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'work'
                    ? 'bg-[#1D5A50] text-white shadow-md dark:bg-[#2C665D] dark:text-[#E6F4F1]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] dark:hover:bg-[#25524B]/50'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>MY WORK (01-04)</span>
              </button>

              {/* SKILLS TAB */}
              <button
                onClick={() => onSelectSection('skills')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'skills'
                    ? 'bg-[#1D5A50] text-white shadow-md dark:bg-[#2C665D] dark:text-[#E6F4F1]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] dark:hover:bg-[#25524B]/50'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>3D TECH STACK</span>
              </button>

              {/* ABOUT TAB */}
              <button
                onClick={() => onSelectSection('about')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'about'
                    ? 'bg-[#1D5A50] text-white shadow-md dark:bg-[#2C665D] dark:text-[#E6F4F1]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] dark:hover:bg-[#25524B]/50'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>ABOUT</span>
              </button>

              {/* CONTACT TAB */}
              <button
                onClick={() => onSelectSection('contact')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                  currentTab === 'contact'
                    ? 'bg-[#1D5A50] text-white shadow-md dark:bg-[#2C665D] dark:text-[#E6F4F1]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] dark:hover:bg-[#25524B]/50'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>CONTACT</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1]/70 dark:hover:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors cursor-pointer shrink-0"
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
                <div className="p-5 rounded-2xl bg-[#132B27] border border-[#25524B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A1312] border border-[#25524B] p-0.5 shadow-lg shrink-0">
                      <div className="w-full h-full bg-[#0A1312] rounded-2xl overflow-hidden flex items-center justify-center font-bold text-xl text-[#E6F4F1]">
                        <img
                          src={profilePic}
                          alt="YK"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#E6F4F1] flex items-center gap-2">
                        <span>{portfolioData.about.name}</span>
                        <span className="text-xs font-mono text-[#2C665D]">
                          [@{portfolioData.about.handle}]
                        </span>
                      </h3>
                      <p className="text-xs text-[#2C665D] font-mono mt-0.5">
                        {portfolioData.about.role}
                      </p>
                      <p className="text-xs text-[#E6F4F1]/70 font-sans mt-0.5">
                        📍 {portfolioData.about.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25524B]/50 border border-[#2C665D]/30 text-[#E6F4F1] text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#2C665D] animate-pulse" />
                    <span>{portfolioData.about.status}</span>
                  </div>
                </div>

                {/* Bio Summary */}
                <div className="p-4 rounded-2xl bg-[#132B27] border border-[#25524B] space-y-2">
                  <p className="text-sm text-[#E6F4F1] leading-relaxed font-sans font-medium">
                    "{portfolioData.about.tagline}"
                  </p>
                  <p className="text-xs text-[#E6F4F1]/80 leading-relaxed font-sans">
                    {portfolioData.about.bio[1]}
                  </p>
                </div>

                {/* Stats Counter Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {portfolioData.about.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#132B27] border border-[#25524B] text-center space-y-1 min-w-0 overflow-hidden flex flex-col justify-center"
                    >
                      <p className="font-mono text-[10px] text-[#2C665D] tracking-wider truncate">
                        {stat.label}
                      </p>
                      <div className="flex items-center justify-center min-w-0">
                        {stat.label === 'STATUS' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2C665D] mr-1.5 shrink-0" />
                        )}
                        <p
                          className={`font-bold text-[#E6F4F1] truncate ${
                            stat.value.length > 5 ? 'text-base sm:text-lg font-sans' : 'text-lg sm:text-xl'
                          }`}
                          title={stat.value}
                        >
                          {stat.value}
                        </p>
                      </div>
                      <p className="font-sans text-[10px] text-[#E6F4F1]/60 truncate">
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Core Principles */}
                <div className="p-4 rounded-2xl bg-[#132B27] border border-[#25524B] space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#2C665D] uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    <span>Engineering Principles</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {portfolioData.about.philosophies.map((phil, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#E6F4F1]/80 p-2.5 rounded-xl bg-[#0A1312]/70 border border-[#25524B]"
                      >
                        <Shield className="w-3.5 h-3.5 text-[#2C665D] shrink-0" />
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
                <div className="pb-3 border-b border-[#25524B] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="font-bold text-xl text-[#E6F4F1] tracking-wider flex items-center gap-2">
                      <span className="text-[#2C665D]">MY TECHSTACK</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#25524B]/50 text-[#E6F4F1] border border-[#2C665D]/30">
                        INTERACTIVE 3D
                      </span>
                    </h2>
                    <p className="text-xs text-[#E6F4F1]/80 font-sans mt-0.5">
                      Hover and drag mouse over the 3D physics spheres to disperse and inspect technologies.
                    </p>
                  </div>
                </div>

                {/* Interactive 3D Physics Spheres Canvas */}
                <TechSpheresCanvas />

                {/* Primary Core Tech Pills */}
                <div className="p-4 rounded-2xl bg-[#132B27] border border-[#25524B] space-y-2.5">
                  <h3 className="font-mono text-xs text-[#2C665D] uppercase tracking-wider">
                    Core Engineering Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#25524B]/50 text-[#E6F4F1] border border-[#2C665D]/30 shadow-sm"
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
                      className="p-4 rounded-2xl bg-[#132B27] border border-[#25524B] space-y-3"
                    >
                      <h3 className="font-bold text-sm text-[#E6F4F1] tracking-wide flex items-center justify-between">
                        <span>{category.category}</span>
                        <Cpu className="w-4 h-4 text-[#2C665D]" />
                      </h3>

                      <div className="space-y-2.5">
                        {category.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-mono text-[#E6F4F1]">
                                {skill.name}
                              </span>
                              <span className="font-mono text-[#2C665D]">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-[#0A1312] overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#25524B] to-[#2C665D] rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <p className="text-[10px] text-[#E6F4F1]/60 font-sans">
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
                <div className="pb-3 border-b border-[#25524B]">
                  <h2 className="font-bold text-xl text-[#E6F4F1] tracking-wider flex items-center gap-2">
                    <span className="text-[#2C665D]">INITIATE TRANSMISSION</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#25524B]/50 text-[#E6F4F1] border border-[#2C665D]/30">
                      OPEN CHANNEL
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Contact Channels */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="text-xs font-mono text-[#2C665D] uppercase tracking-wider mb-1">
                      Direct Uplink Channels
                    </div>

                    {portfolioData.contacts.map((contact, idx) => {
                      const isCopied = copiedKey === contact.name;
                      return (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[#132B27] border border-[#25524B] hover:border-[#2C665D] transition-all flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="p-2 rounded-lg bg-[#0A1312] text-[#2C665D] border border-[#25524B] shrink-0">
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
                              <p className="font-bold text-xs text-[#E6F4F1]">
                                {contact.name}
                              </p>
                              <p className="font-mono text-[11px] text-[#E6F4F1]/70 truncate">
                                {contact.handle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleCopy(contact.handle, contact.name)}
                              className="p-1.5 rounded-lg bg-[#0A1312] hover:bg-[#25524B] text-[#E6F4F1] hover:text-[#2C665D] border border-[#25524B] transition-colors cursor-pointer"
                              title={`Copy ${contact.name}`}
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-[#2C665D]" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {contact.link && (
                              <a
                                href={contact.link}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-lg bg-[#0A1312] hover:bg-[#25524B] text-[#E6F4F1] hover:text-[#2C665D] border border-[#25524B] hover:border-[#2C665D] transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    <div className="p-3 rounded-xl bg-[#132B27] border border-[#25524B] text-xs font-sans text-[#E6F4F1]/70 space-y-1">
                      <p>
                        ⚡ Direct Reach:{' '}
                        <strong className="text-[#2C665D]">
                          +92 328 0709704
                        </strong>
                      </p>
                      <p>
                        ✉️ Email:{' '}
                        <strong className="text-[#2C665D]">
                          khokharyasir749@gmail.com
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Right: Message Dispatch Form */}
                  <div className="lg:col-span-7 bg-[#132B27] border border-[#25524B] p-5 rounded-2xl">
                    <form onSubmit={handleSendMessage} className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2 border-b border-[#25524B]">
                        <span className="font-bold text-xs text-[#E6F4F1] tracking-wide">
                          SEND ENCRYPTED MESSAGE
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#2C665D] animate-pulse" />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-[#E6F4F1]">
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
                          className="w-full px-3 py-2 rounded-xl bg-[#0A1312] border border-[#25524B] text-xs font-mono text-[#E6F4F1] placeholder:text-[#E6F4F1]/30 focus:outline-none focus:border-[#2C665D] transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-[#E6F4F1]">
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
                          className="w-full px-3 py-2 rounded-xl bg-[#0A1312] border border-[#25524B] text-xs font-mono text-[#E6F4F1] placeholder:text-[#E6F4F1]/30 focus:outline-none focus:border-[#2C665D] transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-mono text-[#E6F4F1]">
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
                          className="w-full px-3 py-2 rounded-xl bg-[#0A1312] border border-[#25524B] text-xs font-sans text-[#E6F4F1] placeholder:text-[#E6F4F1]/30 focus:outline-none focus:border-[#2C665D] transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sentMessage}
                        className={`w-full py-2.5 px-4 rounded-xl font-mono font-bold tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          sentMessage
                            ? 'bg-[#25524B] text-[#E6F4F1] border border-[#2C665D]'
                            : 'bg-[#2C665D] hover:bg-[#357B70] text-[#E6F4F1] shadow-md active:scale-98'
                        }`}
                      >
                        {sentMessage ? (
                          <>
                            <Check className="w-4 h-4 text-[#2C665D]" />
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
