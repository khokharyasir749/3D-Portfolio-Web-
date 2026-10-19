import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoProject } from './BentoGridV2';

export interface ProjectCaseStudyModalProps {
  project: BentoProject | null;
  isOpen: boolean;
  onClose: () => void;
  backLabel?: string;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
  backLabel = 'Back to Projects',
}) => {
  // Keyboard shortcut: ESC closes modal
  useEffect(() => {
    if (!isOpen || !project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
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
  }, [isOpen, project, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] select-none">
          {/* Solid frosted backdrop that dims and blurs everything behind it */}
          <motion.div
            key="case-study-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal scroll & centering wrapper */}
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <motion.div
              key="case-study-dialog"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111116] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 my-auto custom-scrollbar"
            >
              {/* Top Control Bar with Back button, ESC hint, and Close button */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 sticky -top-6 sm:-top-8 -mt-6 sm:-mt-8 pt-6 sm:pt-8 bg-[#111116]/95 backdrop-blur-xl z-30">
                <button
                  type="button"
                  onClick={onClose}
                  className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
                  title={backLabel}
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{backLabel}</span>
                </button>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
                    Press [ESC] to exit
                  </span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Close case study"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Header */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                    SYSTEM {project.number}
                  </span>
                  <span className="text-xs font-mono text-orange-400 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                {project.tagline && (
                  <p className="text-xs sm:text-sm font-mono text-orange-400/90">
                    {project.tagline}
                  </p>
                )}
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Primary Image Preview */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {project.metrics && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                    <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Features Checklist */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                    ARCHITECTURAL CAPABILITIES & HIGHLIGHTS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills & Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-white transition-colors cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-xs sm:text-sm font-medium text-orange-300 transition-colors cursor-pointer"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectCaseStudyModal;
