import React, { useEffect, useState } from 'react';
import {
  X,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoProject, bentoProjects } from './BentoGridV2';

interface ProjectsDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsDirectoryModal: React.FC<ProjectsDirectoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<BentoProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Keyboard shortcut: ESC closes modal or active case study
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedCaseStudy) {
          setSelectedCaseStudy(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, selectedCaseStudy]);

  if (!isOpen) return null;

  const categories = ['All', 'Full-Stack', 'Enterprise SaaS', 'Media & 3D', 'Travel & Mobile'];

  const filteredProjects = bentoProjects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Full-Stack') {
      return project.category.includes('Full-Stack') || project.category.includes('Food Tech') || project.category.includes('Wholesale');
    }
    if (activeCategory === 'Enterprise SaaS') {
      return project.category.includes('Enterprise') || project.category.includes('POS') || project.category.includes('Healthcare');
    }
    if (activeCategory === 'Media & 3D') {
      return project.category.includes('Streaming') || project.category.includes('Luxury') || project.category.includes('3D');
    }
    if (activeCategory === 'Travel & Mobile') {
      return project.category.includes('Travel') || project.category.includes('Mobile');
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#070709]/95 backdrop-blur-2xl overflow-y-auto selection:bg-orange-500/30 selection:text-orange-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-orange-600/10 via-amber-700/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff07_1px,transparent_0)] [background-size:24px_24px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-10">
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 sticky top-0 bg-[#070709]/80 backdrop-blur-xl z-30 pt-2 -mt-2">
          <button
            onClick={onClose}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all text-xs font-mono"
            title="Return to Home (ESC)"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-500">
              Press [ESC] to exit
            </span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Directory Showcase Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>FULL PRODUCTION DIRECTORY (01 — 07)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            All Verified Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl font-light leading-relaxed">
            A comprehensive, interactive index of verified enterprise SaaS architectures, full-stack commerce engines, and spatial 3D web systems. Click any card for the detailed case study.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-black font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 7-Project Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCaseStudy(project)}
              className="group relative rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-2xl"
            >
              {/* Subtle ambient card glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 group-hover:bg-orange-600/10 rounded-full blur-[80px] pointer-events-none transition-colors" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                    SYSTEM {project.number}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {project.category}
                  </span>
                </div>

                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-black/80 border border-white/10 group-hover:border-orange-500/40 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-300">
                    <span className="truncate pr-2">{project.metrics}</span>
                    <ArrowUpRight className="w-4 h-4 text-orange-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 space-y-3 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs font-mono text-orange-400 group-hover:text-orange-300 font-semibold">
                  <span>VIEW CASE STUDY</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal when a project is selected */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111116] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/10 transition-colors z-20"
                title="Close case study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-12">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                    SYSTEM {selectedCaseStudy.number}
                  </span>
                  <span className="text-xs font-mono text-orange-400 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    {selectedCaseStudy.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {selectedCaseStudy.description}
                </p>
              </div>

              {/* Primary Image Preview */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Key Features Checklist */}
              {selectedCaseStudy.features && (
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                    ARCHITECTURAL CAPABILITIES & HIGHLIGHTS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCaseStudy.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
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
                  {selectedCaseStudy.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedCaseStudy.githubUrl && (
                    <a
                      href={selectedCaseStudy.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedCaseStudy.demoUrl && (
                    <a
                      href={selectedCaseStudy.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-xs sm:text-sm font-medium text-orange-300 transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsDirectoryModal;
