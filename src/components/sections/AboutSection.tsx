import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import {
  Terminal,
  Code,
  Cpu,
  Compass,
  X,
  CheckCircle2,
  ArrowRight,
  Layers,
  Zap,
  Activity,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FocusArea {
  id: string;
  pillarNumber: string;
  title: string;
  tagline: string;
  desc: string;
  philosophy: string;
  principles: string[];
  deliverables: { title: string; desc: string }[];
  techStack: string[];
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'fullstack-web',
    pillarNumber: '01',
    title: 'Full-Stack Web Systems',
    tagline: 'React, Next.js, Node.js, and TypeScript Architectures',
    desc: 'Engineering resilient, scalable web applications with modular component hierarchies, strict TypeScript contracts, and sub-50ms REST API backends.',
    philosophy:
      'Code maintainability is non-negotiable. I architect full-stack web platforms where UI state and server APIs are strictly typed, declarative, and decoupled for seamless scaling.',
    principles: [
      'Strict TypeScript typings across all data transfer objects and props',
      'Unidirectional reactive data flow with predictable state stores',
      'Optimized database aggregation queries with indexed MongoDB collections',
      'Lightweight production bundle footprints with automated code-splitting',
    ],
    deliverables: [
      {
        title: 'Modular Design Tokens',
        desc: 'Custom Tailwind CSS atomic tokens guaranteeing pixel-perfect UI consistency.',
      },
      {
        title: 'High-Throughput REST APIs',
        desc: 'Express.js backend endpoints engineered for sub-50ms query responses.',
      },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    metric: '99+ Lighthouse performance scores and sub-50ms API response latency',
    icon: Code,
  },
  {
    id: '3d-webgl',
    pillarNumber: '02',
    title: 'Interactive 3D & Creative WebGL',
    tagline: 'Three.js, React Three Fiber & Shader Physics',
    desc: 'Transforming standard 2D flat web pages into memorable spatial experiences through real-time 3D dioramas, custom shaders, and particle physics.',
    philosophy:
      '3D on the web should elevate narrative storytelling without degrading device performance. Every mesh, light, and shader is calibrated to lock a steady 60 FPS.',
    principles: [
      'Low draw-call scene graph architecture with GPU mesh instancing',
      'Custom vertex and fragment GLSL shaders with emissive rim glows',
      'Kinematic camera interpolation synchronized with Lenis momentum scroll',
      'Verlet particle integration for zero-latency cursor repulsion physics',
    ],
    deliverables: [
      {
        title: 'Spatial 3D Diorama Rooms',
        desc: 'Interactive 3D scenes with responsive lighting and camera tweening.',
      },
      {
        title: 'Interactive Physics Matrices',
        desc: 'Cursor-reactive floating tech spheres with elastic collisions.',
      },
    ],
    techStack: ['Three.js', 'React Three Fiber', 'GLSL', 'Drei', 'WebGL', 'Framer Motion'],
    metric: 'Locked 60 FPS graphics pipeline across mobile and desktop GPUs',
    icon: Cpu,
  },
  {
    id: 'mobile-engineering',
    pillarNumber: '03',
    title: 'Mobile App Engineering',
    tagline: 'Android, Jetpack Compose & Clean MVVM Architectures',
    desc: 'Crafting responsive native Android applications with declarative Jetpack Compose UI, Kotlin Coroutines, StateFlows, and offline-first Room databases.',
    philosophy:
      'Mobile UX requires immediate tactile feedback. I construct clean MVVM mobile architectures with unidirectional data flow and background synchronization.',
    principles: [
      'Declarative Jetpack Compose UI adhering to Material 3 design standards',
      'Asynchronous coroutines and StateFlow event streams for thread safety',
      'Offline-first caching with Room SQLite DB and Retrofit networking',
      'Strict memory leak prevention and UI thread profiling',
    ],
    deliverables: [
      {
        title: 'Declarative Compose UI System',
        desc: 'Reusable composables with fluid micro-interactions and layout transitions.',
      },
      {
        title: 'Offline-First SQLite Cache',
        desc: 'Automatic background sync workers with zero UI lockup.',
      },
    ],
    techStack: ['Jetpack Compose', 'Android', 'Kotlin', 'MVVM', 'Coroutines', 'Room DB', 'Retrofit'],
    metric: 'Constant 60 FPS gesture response with zero UI thread jank',
    icon: Terminal,
  },
  {
    id: 'realtime-systems',
    pillarNumber: '04',
    title: 'Real-Time Architectures',
    tagline: 'Socket.io, WebSockets & Distributed Event Pipelines',
    desc: 'Building lightning-fast real-time messaging hubs and live data streaming pipelines with sub-30ms delivery and Instagram-style read receipts.',
    philosophy:
      'Real-time communication must be instantaneous and reliable. I build fault-tolerant WebSocket pipelines with optimistic UI updates and live presence detection.',
    principles: [
      'Bi-directional TCP socket channels with automatic heartbeat reconnection',
      'Room-partitioned event broadcasting with zero packet drop',
      'Optimistic client-side UI rendering with server acknowledgment validation',
      'Distributed session management and live typing presence streams',
    ],
    deliverables: [
      {
        title: 'Bi-Directional Chat Pipeline',
        desc: 'Real-time WebSocket streaming with read receipts and typing feeds.',
      },
      {
        title: 'Live Event Multiplexer',
        desc: 'Low-latency broadcast engine handling 500+ concurrent clients.',
      },
    ],
    techStack: ['Socket.io', 'Node.js', 'WebSockets', 'MongoDB', 'Express', 'JWT'],
    metric: 'Sub-30ms live message delivery across concurrent user channels',
    icon: Compass,
  },
];

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;
  const [selectedFocus, setSelectedFocus] = useState<FocusArea | null>(null);

  // Prevent background scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedFocus) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedFocus(null);
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
  }, [selectedFocus]);

  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto select-none pointer-events-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>[ 02 // ABOUT ME ]</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline & Bio Paragraphs */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering digital experiences with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              technical precision.
            </span>
          </h2>

          <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            {about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300/90">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            {about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#101017]/80 border border-white/5 flex flex-col"
              >
                <span className="text-base sm:text-lg font-mono font-bold text-purple-300">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 4 Focus Pillars Interactive Glass Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedFocus(area)}
                className="p-5 rounded-2xl bg-[#0e0e16]/80 border border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all flex flex-col justify-between shadow-xl backdrop-blur-md cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/50 transition-colors">
                      <Icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      FOCUS {area.pillarNumber}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-1.5 group-hover:text-purple-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-purple-400 group-hover:text-purple-300">
                  <span>EXPLORE PILLAR</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Focus Pillar Glass Dossier Modal */}
      <AnimatePresence>
        {selectedFocus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedFocus(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
          >
            {/* Modal Surface Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-zinc-950/95 border border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative text-white space-y-6"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedFocus(null)}
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
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span>[ ENGINEERING PHILOSOPHY // FOCUS DOSSIER ]</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                    PILLAR {selectedFocus.pillarNumber}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                  {selectedFocus.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-purple-300">
                  {selectedFocus.tagline}
                </p>
              </div>

              {/* Philosophy Statement */}
              <div className="space-y-2 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Engineering Philosophy</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans italic">
                  "{selectedFocus.philosophy}"
                </p>
              </div>

              {/* Architectural Principles */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Architectural Core Principles:
                </h4>
                <ul className="space-y-1.5">
                  {selectedFocus.principles.map((principle, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Impact */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-400" />
                  <span>Key Architectural Deliverables</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {selectedFocus.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-sans pl-3.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metric Badge */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs font-mono text-emerald-300">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                <span>Standard Metric: {selectedFocus.metric}</span>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Pillar Technologies:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFocus.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-500/10 text-purple-200 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Close Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>[ESC] OR CLICK OUTSIDE TO CLOSE</span>
                <button
                  onClick={() => setSelectedFocus(null)}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-mono font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
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

export default AboutSection;

