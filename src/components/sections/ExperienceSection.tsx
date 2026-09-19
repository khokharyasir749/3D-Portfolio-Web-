import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Calendar,
  Sparkles,
  Code2,
  Smartphone,
  Box,
  X,
  ArrowRight,
  Layers,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ExperienceItem {
  year: string;
  role: string;
  subtitle: string;
  company: string;
  summary: string;
  detailedOverview: string;
  highlights: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  tags: string[];
  icon: 'code' | 'mobile' | 'box';
  color: string;
  accentColor: string;
  current?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2024',
    role: 'Full-Stack Web Developer',
    subtitle: 'MERN Stack • REST APIs • Enterprise Dashboards',
    company: 'Commercial Systems & Wholesale Web Platforms',
    summary:
      'Built robust full-stack web applications, dynamic digital commerce storefronts, and high-volume warehouse inventory ERP platforms with real-time stock allocation.',
    detailedOverview:
      'Architected enterprise inventory tracking and high-throughput commercial wholesale platforms. Focused on relational and document data modeling, sub-50ms REST API response times, secure authentication pipelines, and state synchronization across distributed client nodes.',
    highlights: [
      'ShopSphere E-Commerce (React, Node.js, MongoDB)',
      'Lonetex Inventory ERP (Real-time warehouse racks)',
      'Sub-50ms REST API endpoints and CRUD architectures',
      'Tailwind CSS design systems & micro-interactions',
    ],
    deliverables: [
      {
        title: 'Lonetex Inventory ERP',
        description: 'Engineered real-time rack allocation engine handling 50K+ SKU events with live stock reconciliation.',
      },
      {
        title: 'High-Throughput E-Commerce Storefront',
        description: 'Constructed responsive client portal with cart state persistence and instant WhatsApp quotation workflows.',
      },
      {
        title: 'REST Micro-APIs & CRUD Pipelines',
        description: 'Optimized Express.js endpoints with MongoDB aggregation pipelines for sub-50ms database queries.',
      },
      {
        title: 'Modular Design System',
        description: 'Standardized Tailwind CSS component tokens, input validations, and reactive dashboard views.',
      },
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API', 'Vite', 'Git', 'JWT'],
    icon: 'code',
    color: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
    accentColor: 'border-cyan-400',
  },
  {
    year: '2025',
    role: 'Android & Modern Frontend',
    subtitle: 'Jetpack Compose • Reactive State • Mobile UX',
    company: 'Native Android Mobile Applications',
    summary:
      'Engineered native Android mobile applications with Jetpack Compose, clean MVVM data architectures, coroutines, StateFlows, and offline-first persistence.',
    detailedOverview:
      'Led native mobile frontend engineering using Kotlin and Jetpack Compose. Created fluid declarative UI systems, asynchronous coroutine pipelines, and offline-first synchronization with SQLite Room database and Retrofit network layers.',
    highlights: [
      'Jetpack Compose declarative component UI systems',
      'MVVM architecture with Kotlin Coroutines & Flow',
      'Offline-first caching with Room SQLite DB & Retrofit',
      'Smooth touch physics & responsive mobile layouts',
    ],
    deliverables: [
      {
        title: 'Declarative Compose UI System',
        description: 'Crafted modular composable components adhering to Material 3 design guidelines with animated layout transitions.',
      },
      {
        title: 'Reactive MVVM Architecture',
        description: 'Implemented StateFlow and SharedFlow event emission pipelines ensuring strict unidirectional data flow.',
      },
      {
        title: 'Offline-First SQLite Cache',
        description: 'Built Room database offline persistence with automated background sync workers.',
      },
      {
        title: 'Mobile Performance Profiling',
        description: 'Eliminated UI thread blocking and memory leaks for constant 60 FPS mobile gesture response.',
      },
    ],
    tags: ['Jetpack Compose', 'Android', 'Kotlin', 'MVVM', 'Coroutines', 'StateFlow', 'Room DB', 'Retrofit'],
    icon: 'mobile',
    color: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    accentColor: 'border-purple-400',
  },
  {
    year: 'NOW',
    role: 'Creative Technologist',
    subtitle: 'Interactive 3D Web • Next.js • AI Assistants',
    company: 'Spatial Web & Production Applications',
    summary:
      'Developing cutting-edge spatial 3D WebGL dioramas, spatial web interfaces with Three.js / R3F, real-time WebSocket suites, and intelligent AI developer tooling.',
    detailedOverview:
      'Pushing the boundaries of the browser canvas by fusing high-performance Three.js/R3F scenes with modern React/Next.js architectures. Building real-time interactive physics simulations, GPU-optimized shaders, and spatial interfaces.',
    highlights: [
      'Real-time cursor tracking 3D avatars & physics simulations',
      'Spatial diorama room models with WebGL shaders',
      'Sync-Space real-time collaboration workspace',
      'AI-augmented developer assistant integration',
    ],
    deliverables: [
      {
        title: 'Spatial 3D WebGL Dioramas',
        description: 'Developed 60 FPS WebGL scenes with cursor-tracking avatar busts, custom GLSL shaders, and calibrated studio lighting.',
      },
      {
        title: 'Interactive 3D Physics Matrices',
        description: 'Engineered zero-latency interactive physics engines with Verlet integration, particle bounds, and cursor repulsion.',
      },
      {
        title: 'Real-Time Full-Stack Chat',
        description: 'Constructed low-latency Socket.io data pipelines with live presence indicators and message delivery acknowledgments.',
      },
      {
        title: 'Kinematic Smooth Scroll Systems',
        description: 'Implemented Lenis momentum engines coupled with spline-interpolated 3D camera controllers.',
      },
    ],
    tags: ['Three.js', 'React Three Fiber', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Framer Motion', 'Lenis'],
    icon: 'box',
    color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    accentColor: 'border-emerald-400',
    current: true,
  },
];

export const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  // Prevent background scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedExperience(null);
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
  }, [selectedExperience]);

  const renderIcon = (type: 'code' | 'mobile' | 'box', className = 'w-4 h-4') => {
    switch (type) {
      case 'code':
        return <Code2 className={`${className} text-cyan-400`} />;
      case 'mobile':
        return <Smartphone className={`${className} text-purple-400`} />;
      case 'box':
        return <Box className={`${className} text-emerald-400`} />;
    }
  };

  return (
    <div className="w-full space-y-6 select-none pointer-events-auto">
      {/* Top Header */}
      <div className="pb-4 border-b border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-bold mb-2 block">
            CAREER & IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight uppercase">
            EXPERIENCE & CAREER
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-sans mt-2 leading-relaxed">
            A chronological timeline of engineering scalable web applications, mobile architectures, and 3D spatial experiences.
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 shrink-0 font-medium">
          <Sparkles className="w-4 h-4" />
          <span>CONTINUOUS GROWTH</span>
        </div>
      </div>

      {/* 3-Column Interactive Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedExperience(exp)}
            className={`p-6 rounded-2xl bg-white/90 dark:bg-zinc-950/80 border transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl shadow-zinc-200/50 dark:shadow-xl cursor-pointer group hover:border-purple-400/50 hover:shadow-purple-500/10 ${
              exp.current
                ? 'border-emerald-500/40 shadow-emerald-500/10 hover:border-emerald-400'
                : 'border-zinc-200 dark:border-white/10'
            }`}
          >
            <div className="space-y-3.5">
              {/* Top Year Badge & Role Icon */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono font-bold text-xs sm:text-sm px-3 py-1 rounded-full border flex items-center gap-1.5 ${exp.color}`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.year}</span>
                </span>

                {exp.current && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CURRENT FOCUS</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center gap-2">
                  {renderIcon(exp.icon)}
                  <h3 className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-white tracking-wide group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-slate-400 mt-1">
                  {exp.subtitle}
                </p>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-300 font-sans leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-white/5">
                <h4 className="text-xs font-mono text-zinc-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Key Accomplishments:
                </h4>
                <ul className="space-y-1">
                  {exp.highlights.slice(0, 3).map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-1.5 text-xs sm:text-sm text-zinc-700 dark:text-slate-300 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Tag Pills & Interactive Affordance Badge */}
            <div className="space-y-3 pt-3 border-t border-zinc-200 dark:border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.slice(0, 4).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
                {exp.tags.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-400 dark:text-slate-500">
                    +{exp.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Click to View Dossier CTA Badge */}
              <div className="flex items-center justify-between text-[11px] font-mono text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 pt-1">
                <span>VIEW FULL DOSSIER</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Glassmorphic Dossier Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedExperience(null)}
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
                onClick={() => setSelectedExperience(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-colors cursor-pointer"
                title="Close Dossier"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Studio Dossier Chip & Header */}
              <div className="space-y-2 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-600 dark:text-purple-300 tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>EXPERIENCE DOSSIER</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                    {selectedExperience.role}
                  </h3>
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-full border ${selectedExperience.color}`}
                  >
                    {selectedExperience.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-300">
                  {selectedExperience.subtitle}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                  🏢 {selectedExperience.company}
                </p>
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-2 p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Executive Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                  {selectedExperience.detailedOverview}
                </p>
              </div>

              {/* Key Technical Deliverables Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Key Architectural Deliverables & Impact</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {selectedExperience.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 space-y-1 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-white">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans pl-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies Badges */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-200 dark:border-white/5">
                <h4 className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                  Core Technologies & Ecosystem:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExperience.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-200 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Close Action */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>ESC OR CLICK OUTSIDE TO CLOSE</span>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-md text-xs font-mono"
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

export default ExperienceSection;
