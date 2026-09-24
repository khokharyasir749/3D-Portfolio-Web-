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
      badgeColor="text-[#1D5A50] dark:text-[#E6F4F1] border-emerald-200 dark:border-[#2C665D]/30 bg-emerald-50 dark:bg-[#25524B]/50"
      onClose={onClose}
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-200 dark:border-[#25524B] pb-4">
        {portfolioData.skills.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xs tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1D5A50] dark:bg-[#2C665D] text-white dark:text-[#E6F4F1] shadow-md border border-[#1D5A50] dark:border-[#2C665D]'
                  : 'bg-zinc-50 dark:bg-[#132B27] text-zinc-700 dark:text-[#E6F4F1]/70 border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] hover:text-[#0F2420] dark:hover:text-[#E6F4F1]'
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
        <div className="flex items-center justify-between text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] font-semibold">
          <span>MODULE: {portfolioData.skills[activeTab].category.toUpperCase()}</span>
          <span>EFFICIENCY METRICS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.skills[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all space-y-2.5 min-w-0"
            >
              <div className="flex items-center justify-between min-w-0">
                <span className="font-bold text-[#0F2420] dark:text-[#E6F4F1] text-sm tracking-wide truncate">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-[#1D5A50] dark:text-[#2C665D] font-semibold shrink-0 ml-2">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#1D5A50] dark:bg-[#2C665D] transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill description/note */}
              <p className="text-xs text-zinc-600 dark:text-[#E6F4F1]/70 font-sans">
                {skill.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] flex items-center justify-between">
        <div>
          <h4 className="font-bold text-sm text-[#0F2420] dark:text-[#E6F4F1]">
            CONTINUOUS UPGRADES & ARCHITECTURE
          </h4>
          <p className="text-xs text-zinc-600 dark:text-[#E6F4F1]/70 font-sans mt-0.5">
            Always pushing boundaries with modern rendering pipelines, WebGL compute, and micro-frontend scaling.
          </p>
        </div>
        <div className="hidden sm:block text-right font-mono text-xs text-[#1D5A50] dark:text-[#2C665D] shrink-0 ml-4 font-semibold">
          ● STATUS: ONLINE
        </div>
      </div>
    </ModalBackdrop>
  );
};
