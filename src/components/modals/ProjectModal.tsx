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
      badgeColor="text-cyan-400 border-cyan-500/40 bg-cyan-500/10"
      onClose={onClose}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Project Selector List */}
        <div className="lg:col-span-5 space-y-3 max-h-[70vh] overflow-y-auto pr-1">
          <div className="text-xs font-code text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Select System Module</span>
          </div>

          {portfolioData.projects.map((project) => {
            const isSelected = selectedProject.id === project.id;
            return (
              <div
                key={project.id}
                onClick={() => handleSelectProject(project)}
                className={`p-4 rounded-sm border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400 shadow-neon-cyan/40 translate-x-1'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-cyber font-bold text-base tracking-wide ${
                    isSelected ? 'text-cyan-300' : 'text-slate-200'
                  }`}>
                    {project.title}
                  </h3>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-sans">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-code px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-code px-1.5 py-0.5 text-slate-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Project Detail Card */}
        <div className="lg:col-span-7 bg-[#101424] border border-cyan-500/20 p-5 rounded-sm flex flex-col justify-between space-y-5 max-h-[70vh] overflow-y-auto">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-code px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  PRODUCTION SYSTEM
                </span>
                {selectedProject.featured && (
                  <span className="text-xs font-code px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/30">
                    ★ FEATURED
                  </span>
                )}
              </div>
              <h3 className="font-cyber font-bold text-2xl text-slate-100 mt-2 tracking-wide">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 font-sans mt-0.5">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Authentic Screenshot Banner */}
            <div className="space-y-2">
              <div className="relative w-full h-48 sm:h-56 rounded-md overflow-hidden bg-slate-950 border border-cyan-500/30 shadow-lg">
                <img
                  src={activeImage || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[10px] font-code text-white">
                  GUI PREVIEW
                </div>
              </div>

              {/* Gallery Strip */}
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {selectedProject.gallery.map((imgUrl, gIdx) => (
                    <button
                      key={gIdx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-16 h-11 shrink-0 rounded overflow-hidden border transition-all cursor-pointer ${
                        (activeImage || selectedProject.image) === imgUrl
                          ? 'border-cyan-400 ring-1 ring-cyan-400/50'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
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
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {selectedProject.description}
            </p>

            {/* Key Features */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-code text-slate-400 uppercase tracking-wider">
                Key Architectural Capabilities:
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="p-3 rounded bg-slate-900/80 border border-emerald-500/30 text-xs font-code text-emerald-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Impact: {selectedProject.metrics}</span>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-code text-slate-400 uppercase tracking-wider">
                Tech Stack & Libraries:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-code px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 rounded-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-cyber font-bold tracking-wider text-sm flex items-center justify-center gap-2 shadow-neon-cyan transition-all"
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
                className="py-2.5 px-4 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 font-cyber font-bold tracking-wider text-sm flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 transition-all"
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
