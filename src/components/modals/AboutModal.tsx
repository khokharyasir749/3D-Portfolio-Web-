import React from 'react';
import { ModalBackdrop } from './ModalBackdrop';
import { portfolioData } from '../../data/portfolioData';
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
      badgeColor="text-yellow-400 border-yellow-500/40 bg-yellow-500/10"
      onClose={onClose}
    >
      {/* Top Profile Card */}
      <div className="p-5 rounded-sm bg-[#101424] border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-cyan-500 to-pink-500 p-0.5 shadow-neon-cyan">
            <div className="w-full h-full bg-[#0d101d] rounded-sm flex items-center justify-center font-cyber font-bold text-2xl text-cyan-300">
              AC
            </div>
          </div>
          <div>
            <h3 className="font-cyber font-bold text-xl text-slate-100 flex items-center gap-2">
              <span>{about.name}</span>
              <span className="text-xs font-code text-cyan-400">[@{about.handle}]</span>
            </h3>
            <p className="text-xs text-cyan-300 font-code mt-0.5">
              {about.role}
            </p>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              📍 {about.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-code">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{about.status}</span>
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {about.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-sm bg-[#0e1220] border border-slate-800 text-center space-y-1 hover:border-yellow-500/40 transition-colors"
          >
            <p className="font-code text-[11px] text-slate-400 tracking-wider">
              {stat.label}
            </p>
            <p className="font-cyber font-bold text-2xl text-yellow-400">
              {stat.value}
            </p>
            <p className="font-sans text-[11px] text-slate-500">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-3 p-5 rounded-sm bg-[#101424] border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-code text-cyan-400 uppercase tracking-wider">
          <Terminal className="w-4 h-4" />
          <span>Executive Summary & Background</span>
        </div>
        {about.bio.map((para, idx) => (
          <p key={idx} className="text-sm text-slate-300 leading-relaxed font-sans">
            {para}
          </p>
        ))}
      </div>

      {/* Engineering Philosophies */}
      <div className="space-y-3 p-5 rounded-sm bg-[#101424] border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-code text-pink-400 uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>Core Engineering Principles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {about.philosophies.map((phil, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <Shield className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>{phil}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalBackdrop>
  );
};
