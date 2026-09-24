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
import { ErrorBoundary } from '../ui/ErrorBoundary';

const WorkShowcaseInner: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync active modal image when selected project changes
  useEffect(() => {
    if (selectedProject) {
      setActiveModalImage(selectedProject.image || (selectedProject.gallery?.[0] ?? ''));
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

  const projects = portfolioData?.projects ?? [];

  return (
    <div className="w-full space-y-6 select-none pointer-events-auto">
      {/* Top Header & Horizontal Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-[#25524B]">
        <div>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#1D5A50] dark:text-[#2C665D] font-bold mb-2 block">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2420] dark:text-[#E6F4F1] tracking-tight uppercase">
            MY WORK
          </h2>
          <p className="text-base sm:text-lg text-[#2C423E] dark:text-[#E6F4F1]/80 font-sans mt-2 leading-relaxed">
            Featured production web applications, enterprise portals, and real-time interactive systems. Click any card for full case study & screenshots.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-xl bg-white dark:bg-[#132B27] hover:bg-zinc-100 dark:hover:bg-[#25524B] text-zinc-800 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all cursor-pointer shadow-sm"
            title="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-xl bg-white dark:bg-[#132B27] hover:bg-zinc-100 dark:hover:bg-[#25524B] text-zinc-800 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all cursor-pointer shadow-sm"
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
        {projects.map((project) => {
          const projectTags = project?.tags ?? [];
          const projectGallery = project?.gallery ?? [];

          return (
            <motion.div
              key={project.id || project.number}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group relative w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[460px] shrink-0 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#132B27]/90 border border-zinc-200/90 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#C58A55] shadow-sm transition-all flex flex-col justify-between space-y-4 overflow-hidden cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Background Number Watermark */}
              <div className="absolute top-4 right-6 font-black text-6xl sm:text-7xl text-zinc-900/[0.04] dark:text-[#E6F4F1]/[0.04] group-hover:text-[#1D5A50]/10 dark:group-hover:text-[#C58A55]/10 transition-colors pointer-events-none select-none leading-none z-0">
                {project.number}
              </div>

              {/* Top Card Header & Tagline */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-[#1A3D37]/80 text-[#0F2420] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B]">
                    PROJECT {project.number}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-[#1A3D37]/80 text-[#0F2420] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#1D5A50] dark:text-[#C58A55]" />
                      <span>FEATURED</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-[#0F2420] dark:text-[#E6F4F1] group-hover:text-[#1D5A50] dark:group-hover:text-[#C58A55] transition-colors tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1D5A50] dark:text-[#C58A55] font-sans mt-0.5 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Authentic High-Resolution Project Screenshot Preview */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-zinc-100 dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] group-hover:border-[#1D5A50] dark:group-hover:border-[#C58A55] shadow-inner transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><rect fill="%23181825" width="400" height="250"/><text fill="%23888" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Project Preview</text></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="px-2 py-0.5 rounded-md bg-white/90 dark:bg-[#0A1312]/80 backdrop-blur-md border border-zinc-200 dark:border-[#25524B] font-medium text-[#1D5A50] dark:text-[#2C665D]">
                      GUI PREVIEW
                    </span>
                    {projectGallery.length > 1 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/90 dark:bg-[#132B27]/80 backdrop-blur-md border border-zinc-200 dark:border-[#25524B] text-zinc-900 dark:text-[#E6F4F1] font-medium">
                        +{projectGallery.length} VIEWS
                      </span>
                    )}
                  </div>
                </div>

                {/* Description Snippet */}
                <p className="text-sm sm:text-base text-[#2C423E] dark:text-[#9FB8B2] leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projectTags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm px-3 py-1 font-medium font-mono rounded-full bg-zinc-100 dark:bg-[#1A3D37]/80 text-[#0F2420] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {projectTags.length > 4 && (
                    <span className="text-xs sm:text-sm font-mono px-2 py-1 text-zinc-600 dark:text-[#9FB8B2] font-medium">
                      +{projectTags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Affordance & Direct Action Buttons */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-200 dark:border-[#25524B] relative z-10">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider font-mono text-zinc-600 dark:text-[#E6F4F1]/70 group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1] transition-colors">
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200 text-[#1D5A50] dark:text-[#2C665D]" />
                </div>

                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-1.5 px-3 rounded-lg bg-[#1D5A50] hover:bg-[#134038] text-white dark:bg-[#2C665D] dark:hover:bg-[#357B70] dark:text-[#E6F4F1] font-mono text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all uppercase shadow-sm"
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
                      className="py-1.5 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-[#132B27] dark:hover:bg-[#25524B] dark:text-[#E6F4F1] font-mono text-[11px] flex items-center justify-center gap-1.5 border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all uppercase shadow-sm"
                    >
                      <Github className="w-3 h-3" />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
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
              className="max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] shadow-2xl relative text-zinc-900 dark:text-[#E6F4F1] space-y-6 backdrop-blur-xl"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors cursor-pointer"
                title="Close Dossier"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Studio Dossier Chip & Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#25524B]/50 border border-zinc-200 dark:border-[#2C665D]/30 text-xs font-mono text-[#1D5A50] dark:text-[#E6F4F1] tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] animate-pulse" />
                    <span>PROJECT CASE STUDY</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-[#25524B]/50 text-zinc-800 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30">
                    PROJECT {selectedProject.number}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0F2420] dark:text-[#E6F4F1] tracking-tight pt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#1D5A50] dark:text-[#2C665D]">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* High-Resolution Interactive Screenshot Banner Display */}
              <div className="space-y-3">
                <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] shadow-lg">
                  <img
                    src={activeModalImage || selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top transition-all duration-300 select-none"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%23181825" width="600" height="400"/><text fill="%23888" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Preview Image</text></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-[#0A1312]/85 backdrop-blur-md border border-zinc-200 dark:border-[#25524B] text-xs font-mono text-zinc-900 dark:text-[#E6F4F1] flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                      <span>PRODUCTION GUI</span>
                    </span>
                  </div>
                </div>

                {/* Multi-Screenshot Gallery Selector Strip */}
                {(selectedProject?.gallery ?? []).length > 1 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                      <span>Interactive Interface Views:</span>
                    </div>
                    <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 no-scrollbar">
                      {(selectedProject.gallery ?? []).map((imgUrl, gIdx) => {
                        const isCurrent = activeModalImage === imgUrl;
                        return (
                          <button
                            key={gIdx}
                            onClick={() => setActiveModalImage(imgUrl)}
                            className={`relative w-24 h-16 sm:w-28 sm:h-18 shrink-0 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                              isCurrent
                                ? 'border-[#1D5A50] dark:border-[#2C665D] ring-2 ring-[#1D5A50]/40 dark:ring-[#2C665D]/40 scale-102'
                                : 'border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50]/50 dark:hover:border-[#2C665D]/50 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={imgUrl}
                              alt={`View ${gIdx + 1}`}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 100 60"><rect fill="%23181825" width="100" height="60"/></svg>';
                              }}
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
              <div className="space-y-2 p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B]">
                <h4 className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Layers className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                  <span>Architecture & System Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#E6F4F1]/80 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Architectural Capabilities & Problem Solutions */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-800 dark:text-[#2C665D] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                  <span>Key Architectural Capabilities & Solutions</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(selectedProject?.features ?? []).map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B] flex items-start gap-2.5 hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D] shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-700 dark:text-[#E6F4F1]/80 font-sans leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact & Performance Metrics */}
              {selectedProject.metrics && (
                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B] flex items-center gap-2.5 text-xs font-mono text-zinc-800 dark:text-[#E6F4F1]">
                  <Activity className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D] shrink-0" />
                  <span>Impact Metric: {selectedProject.metrics}</span>
                </div>
              )}

              {/* Core Technologies & Ecosystem Badges */}
              <div className="space-y-2.5 pt-2 border-t border-zinc-200 dark:border-[#25524B]">
                <h4 className="text-xs font-mono text-zinc-800 dark:text-[#2C665D] uppercase tracking-wider font-semibold">
                  Tech Stack & Integrated Libraries:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(selectedProject?.tags ?? []).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 dark:bg-[#25524B]/50 text-zinc-800 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t border-zinc-200 dark:border-[#25524B] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#1D5A50] hover:bg-[#134038] text-white dark:bg-[#2C665D] dark:hover:bg-[#357B70] dark:text-[#E6F4F1] font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all uppercase shadow-md"
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
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1] font-mono text-xs flex items-center justify-center gap-2 border border-zinc-200 dark:border-[#25524B] transition-all uppercase"
                    >
                      <Github className="w-4 h-4" />
                      <span>REPOSITORY</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1D5A50] hover:bg-[#134038] text-white dark:bg-[#2C665D] dark:hover:bg-[#357B70] dark:text-[#E6F4F1] font-mono font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md"
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

export const WorkShowcase: React.FC = () => {
  return (
    <ErrorBoundary name="WorkShowcase">
      <WorkShowcaseInner />
    </ErrorBoundary>
  );
};

export default WorkShowcase;
