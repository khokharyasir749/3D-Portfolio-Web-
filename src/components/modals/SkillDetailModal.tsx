import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  Code2,
  Box,
  Server,
  Database,
  Terminal,
} from 'lucide-react';
import { SkillDetail } from '../../data/skillsData';

export interface SkillDetailModalProps {
  skill: SkillDetail | null;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({
  skill,
  onClose,
  onSelectProject,
}) => {
  // Close on Escape key & lock body scroll
  useEffect(() => {
    if (!skill) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [skill, onClose]);

  const getHeaderIcon = (category: string) => {
    const c = category.toLowerCase();
    if (c.includes('frontend')) return <Layers className="w-6 h-6 text-orange-400" />;
    if (c.includes('3d') || c.includes('graphics')) return <Box className="w-6 h-6 text-orange-400" />;
    if (c.includes('backend') || c.includes('systems')) return <Server className="w-6 h-6 text-orange-400" />;
    if (c.includes('database') || c.includes('cloud')) return <Database className="w-6 h-6 text-orange-400" />;
    if (c.includes('tool') || c.includes('dev')) return <Terminal className="w-6 h-6 text-orange-400" />;
    return <Code2 className="w-6 h-6 text-orange-400" />;
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {skill && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#120804]/95 border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 text-white custom-scrollbar select-none"
          >
            {/* Ambient Warm Amber Corner Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-orange-500/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/10 transition-colors z-20 cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pr-10 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
                <span>{skill.category.toUpperCase()}</span>
              </div>

              <div className="flex items-center gap-3.5 pt-1">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
                  {getHeaderIcon(skill.category)}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mt-0.5">
                    {skill.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Core Architectural Capabilities */}
            <div className="space-y-3 pt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                <Cpu className="w-4 h-4 text-orange-400" />
                <span>Core Architectural Capabilities</span>
              </div>
              <ul className="space-y-2.5">
                {skill.capabilities.map((capability, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: Associated Stack & Ecosystem */}
            <div className="space-y-3 pt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                <Layers className="w-4 h-4 text-orange-400" />
                <span>Associated Stack & Ecosystem</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.ecosystem.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-orange-500/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 3: Related Featured Projects */}
            {skill.relatedProjects && skill.relatedProjects.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Featured in Portfolio Projects</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {skill.relatedProjects.map((project, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (project.id && onSelectProject) {
                          onClose();
                          onSelectProject(project.id);
                        }
                      }}
                      className={`flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-orange-500/10 border border-white/5 hover:border-orange-500/30 text-left transition-all ${
                        project.id ? 'cursor-pointer group' : 'cursor-default'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-xs font-bold text-white group-hover:text-orange-300 transition-colors truncate">
                          {project.title}
                        </div>
                        <div className="text-[10px] font-mono text-neutral-400">
                          {project.role}
                        </div>
                      </div>
                      {project.id && (
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
