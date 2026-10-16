import React, { useState } from 'react';
import { portfolioData, type Project } from '../../data/portfolioData';
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Github,
  Zap,
  Layers,
  Code2,
  Smartphone,
  Cpu,
  CheckCircle2,
  X,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BentoGridV2: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Full-Stack' | 'Enterprise & AI' | 'Mobile & Commerce'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');

  // Find key projects
  const flightOne = projects.find((p) => p.id === 'flight-one-travel') || projects[0];
  const pharmaCare = projects.find((p) => p.id === 'pharmacy-management-system') || projects[2];
  const enterpriseRAG = projects.find((p) => p.id === 'enterprise-rag-system') || projects[3];
  const shopSphere = projects.find((p) => p.id === 'shopsphere-ecommerce') || projects[9];
  const biteHub = projects.find((p) => p.id === 'bite-hub') || projects[8];
  const syncSpace = projects.find((p) => p.id === 'sync-space') || projects[10];
  const lonetex = projects.find((p) => p.id === 'lonetex-pakistan') || projects[7];

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    setActiveModalImage(project.image || project.gallery?.[0] || '');
  };

  const capabilities = [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Scalable React & Next.js SPAs/SSRs with strict TypeScript type-safety and robust state architecture.',
      icon: Code2,
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Cross-Platform & Mobile',
      desc: 'High-conversion responsive portals and mobile application flows with offline caching and sub-second feedback.',
      icon: Smartphone,
      tags: ['React Native', 'Mobile-First', 'PWA', 'Tailwind'],
    },
    {
      title: 'RAG & AI Intelligence',
      desc: 'Semantic document vector querying, contextual knowledge retrieval, and enterprise access auditing.',
      icon: Cpu,
      tags: ['Python', 'LangChain', 'Vector DB', 'FastAPI'],
    },
    {
      title: 'Creative 3D & Micro-Interactions',
      desc: 'Spatial Three.js WebGL scenes, physics-based UI, and 60 FPS Framer Motion choreography.',
      icon: Layers,
      tags: ['Three.js', 'R3F', 'Framer Motion', 'WebGL'],
    },
  ];

  return (
    <section id="projects" className="space-y-10 pt-10 select-none">
      {/* Bento Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>SELECTED WORKS & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Architected for Impact
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
            A curated collection of full-stack web applications, mobile platforms, enterprise operations hubs, and intelligent AI architectures.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#141418]/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shrink-0">
          {(['All', 'Full-Stack', 'Enterprise & AI', 'Mobile & Commerce'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedFilter === tab
                  ? 'bg-orange-500/20 border border-orange-500/40 text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.15)]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* BENTO CARD 1: Large Flagship Project (FlightOne Web & Mobile) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => flightOne && handleOpenProject(flightOne)}
          className="group relative md:col-span-2 lg:col-span-2 rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          {/* Ambient Card Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-orange-600/15 transition-colors" />

          {/* Top Bar Metadata */}
          <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                PROJECT {flightOne?.number || '01'}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                FLAGSHIP SHOWCASE
              </span>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/5 group-hover:bg-orange-500/20 text-neutral-400 group-hover:text-orange-400 border border-white/10 group-hover:border-orange-500/40 transition-all">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2 mb-6 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-orange-300 transition-colors">
              {flightOne?.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 max-w-2xl font-light">
              {flightOne?.description}
            </p>
          </div>

          {/* Preview Image with Floating Metric Overlay */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#09090c] border border-white/10 group-hover:border-orange-500/30 transition-colors mb-6">
            <img
              src={flightOne?.image}
              alt={flightOne?.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* Metric pill overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-200">
              <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                <span>{flightOne?.metrics || 'Cross-Platform Web & Mobile Architecture'}</span>
              </div>
              <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white">
                VIEW CASE STUDY →
              </span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 relative z-10">
            {flightOne?.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO CARD 2: Services / Capabilities Breakdown Block */}
        <div className="md:col-span-2 lg:col-span-1 rounded-3xl bg-[#0e0e12]/90 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                ENGINEERING EXPERTISE
              </span>
              <Zap className="w-4 h-4 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Core Capabilities</h3>
            <p className="text-xs text-neutral-400">
              Specialized in modern end-to-end full-stack architectures and high-conversion client systems.
            </p>
          </div>

          {/* Capabilities Mini List */}
          <div className="space-y-3">
            {capabilities.map((cap, cIdx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cIdx}
                  className="group/cap p-3.5 rounded-2xl bg-white/5 hover:bg-orange-500/10 border border-white/5 hover:border-orange-500/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/5 group-hover/cap:bg-orange-500/20 text-orange-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/cap:text-orange-300 transition-colors">
                        {cap.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BENTO CARD 3: PharmaCare (Healthcare Tech / Inventory & POS) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => pharmaCare && handleOpenProject(pharmaCare)}
          className="group rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                PROJECT {pharmaCare?.number}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                HEALTHCARE POS
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {pharmaCare?.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {pharmaCare?.tagline}
              </p>
            </div>

            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={pharmaCare?.image}
                alt={pharmaCare?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
            {pharmaCare?.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO CARD 4: Enterprise RAG Intelligence System */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => enterpriseRAG && handleOpenProject(enterpriseRAG)}
          className="group md:col-span-2 lg:col-span-2 rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl relative"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                  PROJECT {enterpriseRAG?.number}
                </span>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                  AI / VECTOR RETRIEVAL
                </span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-orange-500/20 text-neutral-400 group-hover:text-orange-400 border border-white/10 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {enterpriseRAG?.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-2">
                {enterpriseRAG?.description}
              </p>
            </div>

            <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={enterpriseRAG?.image}
                alt={enterpriseRAG?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              {enterpriseRAG?.metrics && (
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-neutral-200 bg-black/80 border border-white/10 px-3 py-1 rounded-xl backdrop-blur-md truncate">
                  ⚡ {enterpriseRAG.metrics}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 mt-4">
            {enterpriseRAG?.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO CARD 5: ShopSphere E-Commerce */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => shopSphere && handleOpenProject(shopSphere)}
          className="group rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                PROJECT {shopSphere?.number}
              </span>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                DIGITAL STOREFRONT
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {shopSphere?.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {shopSphere?.tagline}
              </p>
            </div>

            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={shopSphere?.image}
                alt={shopSphere?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
            {shopSphere?.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO CARD 6: Bite-Hub (Cyber Food Ordering) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => biteHub && handleOpenProject(biteHub)}
          className="group rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                PROJECT {biteHub?.number}
              </span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                CYBER UI & POS
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {biteHub?.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {biteHub?.tagline}
              </p>
            </div>

            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={biteHub?.image}
                alt={biteHub?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
            {biteHub?.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO CARD 7: Sync-Space Chat Hub (Real-Time WebSockets) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => syncSpace && handleOpenProject(syncSpace)}
          className="group rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                PROJECT {syncSpace?.number}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                WEBSOCKETS
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {syncSpace?.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {syncSpace?.tagline}
              </p>
            </div>

            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={syncSpace?.image}
                alt={syncSpace?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
            {syncSpace?.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO CARD 8: Lonetex Pakistan Wholesale / Catalog */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => lonetex && handleOpenProject(lonetex)}
          className="group rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                PROJECT {lonetex?.number}
              </span>
              <span className="text-[11px] font-mono text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full">
                WHOLESALE CATALOG
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {lonetex?.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {lonetex?.tagline}
              </p>
            </div>

            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={lonetex?.image}
                alt={lonetex?.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
            {lonetex?.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Project Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111116] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white border border-white/10 transition-colors z-20"
                title="Close case study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-12">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    PROJECT {activeProject.number}
                  </span>
                  {activeProject.category && (
                    <span className="text-xs font-mono text-orange-400 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                      {activeProject.category}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light">
                  {activeProject.description}
                </p>
              </div>

              {/* Primary Image Preview */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={activeModalImage || activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Gallery Thumbnails */}
              {activeProject.gallery && activeProject.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {activeProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(img)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        activeModalImage === img
                          ? 'border-orange-500 scale-105'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Key Features List */}
              {activeProject.features && (
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons & Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
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
    </section>
  );
};

export default BentoGridV2;
