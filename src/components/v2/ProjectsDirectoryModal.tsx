import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { BentoProject, bentoProjects } from './BentoGridV2';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

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

  if (!isOpen || typeof document === 'undefined') return null;

  const categories = ['All', 'Full-Stack', 'Enterprise SaaS', 'Media & 3D', 'Travel & Mobile'];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return bentoProjects.length;
    return bentoProjects.filter((project) => {
      if (category === 'Full-Stack') {
        return project.category.includes('Full-Stack') || project.category.includes('Food Tech') || project.category.includes('Wholesale');
      }
      if (category === 'Enterprise SaaS') {
        return project.category.includes('Enterprise') || project.category.includes('POS') || project.category.includes('Healthcare');
      }
      if (category === 'Media & 3D') {
        return project.category.includes('Streaming') || project.category.includes('Luxury') || project.category.includes('3D');
      }
      if (category === 'Travel & Mobile') {
        return project.category.includes('Travel') || project.category.includes('Mobile');
      }
      return true;
    }).length;
  };

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

  return createPortal(
    <div className="fixed inset-0 z-[80] bg-[#120805]/96 backdrop-blur-md overflow-y-auto selection:bg-orange-500/30 selection:text-orange-200 transform-gpu">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-orange-600/10 via-amber-700/5 to-transparent blur-[70px] rounded-full pointer-events-none transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff07_1px,transparent_0)] [background-size:24px_24px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-12">
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 sticky top-0 bg-[#120805]/95 backdrop-blur-md z-30 pt-2 -mt-2 transform-gpu">
          <button
            type="button"
            onClick={onClose}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
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
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
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
            <span>EDITORIAL SYSTEMS DIRECTORY // 01 — 07</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            All Verified Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl font-light leading-relaxed">
            A comprehensive, interactive architectural index of production full-stack systems, commercial POS platforms, and high-performance spatial web architectures. Select any row to view the detailed case study.
          </p>

          {/* Minimalist Glass Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((category) => {
              const count = getCategoryCount(category);
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-orange-500 text-black font-bold shadow-[0_0_25px_rgba(249,115,22,0.45)] border border-orange-400'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-orange-500/30 text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-black/20 text-black'
                        : 'bg-white/10 text-neutral-400 group-hover:text-white'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Full-Width Editorial Project Rows (Option A with Visual Reveal) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06] pb-24">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              onClick={() => setSelectedCaseStudy(project)}
              className="group relative py-7 sm:py-9 px-4 sm:px-8 -mx-4 sm:-mx-8 transition-all duration-300 cursor-pointer border-l-2 border-transparent hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500/[0.08] hover:via-amber-500/[0.03] hover:to-transparent select-none will-change-transform transform-gpu"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
                {/* Left: Index + Project Core Architecture & Narrative */}
                <div className="flex items-start gap-4 sm:gap-7 flex-1 min-w-0">
                  {/* Project Index */}
                  <div className="font-mono text-xl sm:text-2xl font-black text-neutral-500 group-hover:text-orange-400 transition-colors shrink-0 pt-0.5 sm:pt-1">
                    {project.number}
                  </div>

                  {/* Title, Category, Tagline, & Description */}
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-orange-400 border border-orange-500/20 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-colors">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        Shipped
                      </span>
                    </div>

                    {/* Bold Typography */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-orange-200 group-hover:translate-x-1.5 transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Tagline / Subtitle */}
                    {project.tagline && (
                      <p className="text-xs sm:text-sm font-mono text-orange-400/90 font-medium">
                        {project.tagline}
                      </p>
                    )}

                    {/* Architecture Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-2 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Metrics Banner */}
                    {project.metrics && (
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 bg-white/[0.03] px-3 py-1 rounded-xl border border-white/[0.06]">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span className="text-neutral-400 font-light">Metric:</span>
                        <span className="font-medium text-white">{project.metrics}</span>
                      </div>
                    )}

                    {/* Minimalist Tech Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] group-hover:bg-white/[0.06] text-neutral-400 group-hover:text-neutral-200 border border-white/[0.05] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Widescreen Visual Reveal Preview & Action Arrow */}
                <div className="flex items-center gap-6 sm:gap-8 shrink-0 lg:self-center">
                  {/* Subtle Widescreen Visual Reveal with Glass Reflections */}
                  <div className="relative w-44 sm:w-56 lg:w-64 aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-orange-500/50 shadow-2xl transition-all duration-500 group-hover:scale-105 shrink-0 hidden md:block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-neutral-300">
                      <span className="text-orange-400 font-bold">SYSTEM {project.number}</span>
                      <span className="text-neutral-300 bg-black/70 px-2 py-0.5 rounded-md border border-white/10">PREVIEW ↗</span>
                    </div>
                  </div>

                  {/* Circular Action Arrow */}
                  <div className="flex items-center gap-3">
                    <div className="hidden xl:flex flex-col items-end text-right">
                      <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-white transition-colors">
                        READ CASE
                      </span>
                      <span className="text-[10px] font-mono text-orange-400/90">
                        Full Breakdown
                      </span>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.04] group-hover:bg-orange-500 border border-white/10 group-hover:border-orange-400 text-neutral-300 group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal when a project is selected */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        backLabel="Back to Projects"
      />
    </div>,
    document.body
  );
};

export default ProjectsDirectoryModal;
