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
    <div className="w-full h-full flex flex-col justify-center max-w-none select-none pointer-events-auto">
      {/* Section Header */}
      <div className="mb-4 sm:mb-6">
        <span className="text-sm uppercase tracking-widest text-zinc-400 font-bold mb-3 block">
          ABOUT ME
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline & Bio Paragraphs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Engineering digital experiences with technical precision.
          </h2>

          <div className="space-y-5 text-zinc-700 dark:text-zinc-300 text-lg lg:text-xl leading-relaxed font-sans">
            {about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-700 dark:text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/90 dark:bg-[#101017]/80 border border-zinc-200 dark:border-white/5 flex flex-col shadow-md shadow-zinc-200/40 dark:shadow-none transition-colors"
              >
                <span className="text-2xl lg:text-3xl font-black font-mono text-purple-600 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs lg:text-sm font-medium font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1">
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
                className="p-6 rounded-2xl bg-white/90 dark:bg-[#0e0e16]/80 border border-zinc-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/10 shadow-md shadow-zinc-200/40 dark:shadow-xl transition-all flex flex-col justify-between backdrop-blur-md cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/50 transition-colors">
                      <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-slate-400 border border-zinc-200 dark:border-white/5">
                      FOCUS {area.pillarNumber}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white tracking-wide mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm lg:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans line-clamp-2">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-xs lg:text-sm font-semibold tracking-wider font-mono text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                  <span>EXPLORE PILLAR</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
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
              className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-purple-500/30 shadow-2xl relative text-zinc-900 dark:text-white space-y-6 backdrop-blur-xl"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedFocus(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-colors cursor-pointer"
                title="Close Dossier"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Studio Dossier Chip & Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-600 dark:text-purple-300 tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span>ENGINEERING PHILOSOPHY</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30">
                    PILLAR {selectedFocus.pillarNumber}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight pt-1">
                  {selectedFocus.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-300">
                  {selectedFocus.tagline}
                </p>
              </div>

              {/* Philosophy Statement */}
              <div className="space-y-2 p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Engineering Philosophy</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans italic">
                  "{selectedFocus.philosophy}"
                </p>
              </div>

              {/* Architectural Principles */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Architectural Core Principles:
                </h4>
                <ul className="space-y-1.5">
                  {selectedFocus.principles.map((principle, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Impact */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Key Architectural Deliverables</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {selectedFocus.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-1 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans pl-3.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metric Badge */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs font-mono text-emerald-700 dark:text-emerald-300">
                <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 animate-pulse" />
                <span>Standard Metric: {selectedFocus.metric}</span>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2.5 pt-2 border-t border-zinc-200 dark:border-white/5">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Pillar Technologies:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFocus.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-200 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Close Action */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>ESC OR CLICK OUTSIDE TO CLOSE</span>
                <button
                  onClick={() => setSelectedFocus(null)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-mono font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md"
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

