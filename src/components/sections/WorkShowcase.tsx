import React, { useRef, useState, useEffect } from 'react';
import { portfolioData, type Project } from '../../data/portfolioData';
import {
  Github,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  X,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  Activity,
  Image as ImageIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WorkShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync active modal image when selected project changes
  useEffect(() => {
    if (selectedProject) {
      setActiveModalImage(selectedProject.image);
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-6 select-none pointer-events-auto">
      {/* Top Header & Horizontal Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>[ 04 // SELECTED WORK ]</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            MY WORK
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
            Featured production web applications, enterprise portals, and real-time interactive systems. Click any card for full case study & screenshots.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-xl bg-[#111118] hover:bg-[#181824] text-slate-300 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer shadow-md"
            title="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-xl bg-[#111118] hover:bg-[#181824] text-slate-300 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 transition-all cursor-pointer shadow-md"
            title="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Numbered Work Carousel Container */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(project)}
            className="group relative w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 p-5 rounded-2xl bg-[#0e0e16]/90 border border-white/10 hover:border-purple-500/50 shadow-2xl hover:shadow-purple-500/10 transition-all flex flex-col justify-between space-y-4 overflow-hidden backdrop-blur-md cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Giant Background Number Watermark */}
            <div className="absolute -top-4 -right-2 font-black text-8xl text-white/[0.03] group-hover:text-purple-400/[0.08] transition-colors pointer-events-none select-none">
              {project.number}
            </div>

            {/* Top Card Header & Tagline */}
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  PROJECT {project.number}
                </span>
                {project.featured && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>FEATURED</span>
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5 line-clamp-2">
                  {project.tagline}
                </p>
              </div>

              {/* Authentic High-Resolution Project Screenshot Preview */}
              <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-950/80 border border-white/10 group-hover:border-purple-500/40 shadow-inner transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-white/90">
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                    GUI PREVIEW
                  </span>
                  {project.gallery && project.gallery.length > 1 && (
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/30 backdrop-blur-md border border-purple-400/40 text-purple-200">
                      +{project.gallery.length} VIEWS
                    </span>
                  )}
                </div>
              </div>

              {/* Description Snippet */}
              <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#111118] text-slate-300 border border-white/10 group-hover:border-purple-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Card Affordance & Direct Action Buttons */}
            <div className="space-y-2.5 pt-3 border-t border-white/5 relative z-10">
              <div className="flex items-center justify-between text-[11px] font-mono text-purple-400 group-hover:text-purple-300">
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>

              <div className="flex items-center gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white text-slate-200 hover:text-zinc-950 font-mono text-[11px] flex items-center justify-center gap-1.5 border border-white/10 transition-all uppercase"
                  >
                    <span>LIVE LINK</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="py-1.5 px-3 rounded-lg bg-[#111118] hover:bg-[#181824] text-slate-300 hover:text-white font-mono text-[11px] flex items-center justify-center gap-1.5 border border-white/10 hover:border-purple-500/40 transition-all uppercase"
                  >
                    <Github className="w-3 h-3" />
                    <span>SOURCE</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Glass Dossier Modal with Multi-Screenshot Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
          >
            {/* Modal Surface Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-zinc-950/95 border border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative text-white space-y-6"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                title="Close Dossier"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Studio Dossier Chip & Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>[ PROJECT DOSSIER // CASE STUDY ]</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    PROJECT {selectedProject.number}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-purple-300">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* High-Resolution Interactive Screenshot Banner Display */}
              <div className="space-y-3">
                <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
                  <img
                    src={activeModalImage || selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top transition-all duration-300 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>PRODUCTION GUI</span>
                    </span>
                  </div>
                </div>

                {/* Multi-Screenshot Gallery Selector Strip */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>Interactive Interface Views:</span>
                    </div>
                    <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 no-scrollbar">
                      {selectedProject.gallery.map((imgUrl, gIdx) => {
                        const isCurrent = activeModalImage === imgUrl;
                        return (
                          <button
                            key={gIdx}
                            onClick={() => setActiveModalImage(imgUrl)}
                            className={`relative w-24 h-16 sm:w-28 sm:h-18 shrink-0 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                              isCurrent
                                ? 'border-cyan-400 ring-2 ring-cyan-400/30 scale-102'
                                : 'border-white/10 hover:border-purple-400/50 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={imgUrl}
                              alt={`View ${gIdx + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                            <span className="absolute bottom-1 right-1 text-[9px] font-mono px-1 py-0.2 rounded bg-black/70 text-white">
                              0{gIdx + 1}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Architecture & Engineering Challenges Solved */}
              <div className="space-y-2 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Architecture & System Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Architectural Capabilities & Problem Solutions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Architectural Capabilities & Solutions</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 flex items-start gap-2.5 hover:border-purple-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact & Performance Metrics */}
              {selectedProject.metrics && (
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs font-mono text-emerald-300">
                  <Activity className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                  <span>Impact Metric: {selectedProject.metrics}</span>
                </div>
              )}

              {/* Core Technologies & Ecosystem Badges */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Tech Stack & Integrated Libraries:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-500/10 text-purple-200 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all uppercase"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LAUNCH APPLICATION</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center justify-center gap-2 border border-white/10 transition-all uppercase"
                    >
                      <Github className="w-4 h-4" />
                      <span>REPOSITORY</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-mono font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkShowcase;

