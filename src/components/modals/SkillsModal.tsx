import React, { useState } from 'react';
import { ModalBackdrop } from './ModalBackdrop';
import { portfolioData } from '../../data/portfolioData';
import { Layout, Box, Server, Database, Code2 } from 'lucide-react';

interface SkillsModalProps {
  onClose: () => void;
}

export const SkillsModal: React.FC<SkillsModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Box':
        return <Box className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <ModalBackdrop
      title="TECH STACK & SKILLS"
      badge="FULL-STACK CAPABILITIES"
      badgeColor="text-pink-400 border-pink-500/40 bg-pink-500/10"
      onClose={onClose}
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {portfolioData.skills.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm font-cyber font-semibold text-xs tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-pink-500 text-slate-950 shadow-neon-magenta border-transparent'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-700 hover:border-pink-500/50 hover:text-pink-300'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.category.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between text-xs font-code text-slate-400">
          <span>MODULE: {portfolioData.skills[activeTab].category.toUpperCase()}</span>
          <span>EFFICIENCY METRICS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.skills[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-sm bg-[#101424] border border-slate-800 hover:border-pink-500/40 transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-cyber font-bold text-slate-100 text-sm tracking-wide">
                  {skill.name}
                </span>
                <span className="font-code text-xs text-pink-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill description/note */}
              <p className="text-xs text-slate-400 font-sans">
                {skill.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-4 rounded-sm bg-gradient-to-r from-cyan-950/40 to-pink-950/40 border border-cyan-500/30 flex items-center justify-between">
        <div>
          <h4 className="font-cyber font-bold text-sm text-cyan-300">
            CONTINUOUS UPGRADES & ARCHITECTURE
          </h4>
          <p className="text-xs text-slate-300 font-sans mt-0.5">
            Always pushing boundaries with modern rendering pipelines, WebGL compute, and micro-frontend scaling.
          </p>
        </div>
        <div className="hidden sm:block text-right font-code text-xs text-emerald-400">
          ● STATUS: ONLINE
        </div>
      </div>
    </ModalBackdrop>
  );
};
