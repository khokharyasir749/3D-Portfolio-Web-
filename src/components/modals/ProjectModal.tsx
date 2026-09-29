import React, { useState } from 'react';
import { ModalBackdrop } from './ModalBackdrop';
import { portfolioData, type Project } from '../../data/portfolioData';
import { ExternalLink, Github, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ onClose }) => {
  const [selectedProject, setSelectedProject] = useState<Project>(portfolioData.projects[0]);
  const [activeImage, setActiveImage] = useState<string>(portfolioData.projects[0].image);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImage(project.image);
  };

  return (
    <ModalBackdrop
      title="FEATURED PROJECTS"
      badge={`${portfolioData.projects.length} SHIPPED APPS`}
      badgeColor="text-[#1D5A50] dark:text-[#E6F4F1] border-emerald-200 dark:border-[#2C665D]/30 bg-emerald-50 dark:bg-[#25524B]/50"
      onClose={onClose}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Project Selector List */}
        <div className="lg:col-span-5 space-y-3 lg:max-h-[calc(90vh-165px)] overflow-y-auto overscroll-contain pr-1.5 custom-scrollbar">
          <div className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold sticky top-0 bg-white dark:bg-[#132B27] py-1 z-10">
            <Sparkles className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
            <span>Select System Module</span>
          </div>

          {portfolioData.projects.map((project) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => handleSelectProject(project)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50 dark:bg-[#25524B]/70 border-[#1D5A50] dark:border-[#2C665D] shadow-md translate-x-1'
                    : 'bg-zinc-50 dark:bg-[#132B27] border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50]/50 dark:hover:border-[#2C665D]/50 hover:bg-zinc-100 dark:hover:bg-[#132B27]/90'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold text-base tracking-wide ${
                    isSelected ? 'text-[#0F2420] dark:text-[#E6F4F1]' : 'text-zinc-800 dark:text-[#E6F4F1]/80'
                  }`}>
                    {project.title}
                  </h3>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#1D5A50] dark:text-[#2C665D] translate-x-1' : 'text-zinc-400 dark:text-[#E6F4F1]/40'
                  }`} />
                </div>
                <p className="text-xs text-zinc-600 dark:text-[#E6F4F1]/70 mt-1 line-clamp-1 font-sans">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-[#25524B]/50 text-zinc-700 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400 dark:text-[#E6F4F1]/50">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Project Detail Card */}
        <div className="lg:col-span-7 bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] p-5 rounded-2xl flex flex-col justify-between space-y-5 lg:max-h-[calc(90vh-165px)] overflow-y-auto overscroll-contain pr-1.5 custom-scrollbar">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#25524B]/50 text-[#1D5A50] dark:text-[#E6F4F1] border border-emerald-200 dark:border-[#2C665D]/30">
                  PRODUCTION SYSTEM
                </span>
                {selectedProject.featured && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-[#25524B]/50 text-[#1D5A50] dark:text-[#E6F4F1] border border-emerald-200 dark:border-[#2C665D]/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#1D5A50] dark:text-[#2C665D]" />
                    <span>FEATURED</span>
                  </span>
                )}
              </div>
              <h3 className="font-bold text-2xl text-[#0F2420] dark:text-[#E6F4F1] mt-2 tracking-wide">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-[#1D5A50] dark:text-[#2C665D] font-sans mt-0.5">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Authentic Screenshot Banner */}
            <div className="space-y-2">
              <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-zinc-100 dark:bg-[#0A1312] border border-zinc-200 dark:border-[#25524B] shadow-lg">
                <img
                  src={activeImage || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-black/75 border border-white/20 text-[10px] font-mono text-white">
                  GUI PREVIEW
                </div>
              </div>

              {/* Gallery Strip */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <span>INTERACTIVE INTERFACE VIEWS</span>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-6 sm:pb-8 no-scrollbar">
                    {selectedProject.gallery.map((imgUrl, gIdx) => (
                      <button
                        key={gIdx}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`relative w-16 h-11 shrink-0 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          (activeImage || selectedProject.image) === imgUrl
                            ? 'border-[#1D5A50] dark:border-[#2C665D] ring-2 ring-[#1D5A50]/40 dark:ring-[#2C665D]/40'
                            : 'border-zinc-200 dark:border-[#25524B] opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`View ${gIdx + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-700 dark:text-[#E6F4F1]/80 leading-relaxed font-sans">
              {selectedProject.description}
            </p>

            {/* Key Features */}
            <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-[#25524B]">
              <h4 className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider font-semibold">
                Key Architectural Capabilities:
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-[#E6F4F1]/80 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="p-3 rounded-xl bg-white dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B] text-xs font-mono text-zinc-800 dark:text-[#E6F4F1] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] mr-1" />
                <span>Impact: {selectedProject.metrics}</span>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-[#25524B]">
              <h4 className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider font-semibold">
                Tech Stack & Libraries:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-[#25524B]/50 text-zinc-700 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 pb-1 border-t border-zinc-200 dark:border-[#25524B] shrink-0">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#1D5A50] hover:bg-[#15453D] dark:bg-[#2C665D] dark:hover:bg-[#357B70] text-white dark:text-[#E6F4F1] font-mono font-bold tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LAUNCH DEMO</span>
              </a>
            )}
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-100 dark:bg-[#0A1312] dark:hover:bg-[#25524B] text-zinc-800 dark:text-[#E6F4F1] font-mono font-bold tracking-wider text-xs flex items-center justify-center gap-2 border border-zinc-200 dark:border-[#25524B] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>SOURCE CODE</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};
