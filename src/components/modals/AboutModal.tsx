import React from 'react';
import { ModalBackdrop } from './ModalBackdrop';
import { portfolioData } from '../../data/portfolioData';
import profilePic from '../../assets/profile.jpg';
import { Terminal, Shield, Zap } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  const { about } = portfolioData;

  return (
    <ModalBackdrop
      title="DEVELOPER DOSSIER"
      badge="LEVEL 99 SENIOR TECH"
      badgeColor="text-[#1D5A50] dark:text-[#E6F4F1] border-emerald-200 dark:border-[#2C665D]/30 bg-emerald-50 dark:bg-[#25524B]/50"
      onClose={onClose}
    >
      {/* Top Profile Card */}
      <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] p-0.5 shadow-md shrink-0">
            <div className="w-full h-full bg-zinc-100 dark:bg-[#0A1312] rounded-2xl overflow-hidden flex items-center justify-center font-bold text-2xl text-[#0F2420] dark:text-[#E6F4F1]">
              <img
                src={profilePic}
                alt="YK"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl text-[#0F2420] dark:text-[#E6F4F1] flex items-center gap-2">
              <span>{about.name}</span>
              <span className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D]">[@{about.handle}]</span>
            </h3>
            <p className="text-xs text-[#1D5A50] dark:text-[#2C665D] font-mono mt-0.5">
              {about.role}
            </p>
            <p className="text-xs text-zinc-600 dark:text-[#E6F4F1]/70 font-sans mt-0.5">
              📍 {about.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-[#25524B]/50 border border-emerald-200 dark:border-[#2C665D]/30 text-[#1D5A50] dark:text-[#E6F4F1] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] mr-0.5 animate-pulse" />
          <span>{about.status}</span>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {about.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-3.5 rounded-xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-center space-y-1 hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-colors min-w-0 overflow-hidden flex flex-col justify-center"
          >
            <p className="font-mono text-[10px] sm:text-[11px] text-[#1D5A50] dark:text-[#2C665D] tracking-wider truncate">
              {stat.label}
            </p>
            <div className="flex items-center justify-center min-w-0">
              {stat.label === 'STATUS' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] mr-1.5 shrink-0" />
              )}
              <p
                className={`font-bold text-[#0F2420] dark:text-[#E6F4F1] truncate ${
                  stat.value.length > 5
                    ? 'text-base sm:text-lg font-sans'
                    : 'text-xl sm:text-2xl'
                }`}
                title={stat.value}
              >
                {stat.value}
              </p>
            </div>
            <p className="font-sans text-[10px] sm:text-[11px] text-zinc-500 dark:text-[#E6F4F1]/60 truncate">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-3 p-5 rounded-2xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider font-semibold">
          <Terminal className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D]" />
          <span>Executive Summary & Background</span>
        </div>
        {about.bio.map((para, idx) => (
          <p key={idx} className="text-sm text-zinc-700 dark:text-[#E6F4F1]/80 leading-relaxed font-sans">
            {para}
          </p>
        ))}
      </div>

      {/* Engineering Philosophies */}
      <div className="space-y-3 p-5 rounded-2xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider font-semibold">
          <Zap className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D]" />
          <span>Core Engineering Principles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {about.philosophies.map((phil, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-[#E6F4F1]/80 p-2.5 rounded-xl bg-white dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B]">
              <Shield className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D] shrink-0" />
              <span>{phil}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalBackdrop>
  );
};
