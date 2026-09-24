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
    color: 'border-[#2C665D]/40 text-[#E6F4F1] bg-[#25524B]/50',
    accentColor: 'border-[#2C665D]',
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
    color: 'border-[#2C665D]/40 text-[#E6F4F1] bg-[#25524B]/50',
    accentColor: 'border-[#2C665D]',
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
    color: 'border-[#2C665D]/40 text-[#E6F4F1] bg-[#25524B]/50',
    accentColor: 'border-[#2C665D]',
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
        return <Code2 className={`${className} text-[#2C665D]`} />;
      case 'mobile':
        return <Smartphone className={`${className} text-[#2C665D]`} />;
      case 'box':
        return <Box className={`${className} text-[#2C665D]`} />;
    }
  };

  return (
    <div className="w-full space-y-6 select-none pointer-events-auto">
      {/* Top Header */}
      <div className="pb-4 border-b border-zinc-200/80 dark:border-[#25524B] flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#1D5A50] dark:text-[#2C665D] font-bold mb-2 block">
            CAREER & IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2420] dark:text-[#E6F4F1] tracking-tight uppercase">
            EXPERIENCE & CAREER
          </h2>
          <p className="text-base sm:text-lg text-[#2C423E] dark:text-[#E6F4F1]/80 font-sans mt-2 leading-relaxed">
            A chronological timeline of engineering scalable web applications, mobile architectures, and 3D spatial experiences.
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-xs sm:text-sm font-mono text-zinc-800 dark:text-[#E6F4F1] shrink-0 font-medium shadow-sm">
          <Sparkles className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D]" />
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
            className="p-6 rounded-2xl bg-white dark:bg-[#132B27]/90 border border-zinc-200/90 dark:border-[#25524B] transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm cursor-pointer group hover:border-[#1D5A50] dark:hover:border-[#C58A55]"
          >
            <div className="space-y-3.5">
              {/* Top Year Badge & Role Icon */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono font-bold text-xs sm:text-sm px-3 py-1 rounded-full border flex items-center gap-1.5 bg-zinc-100 dark:bg-[#25524B]/50 border-zinc-200 dark:border-[#2C665D]/40 text-[#0F2420] dark:text-[#E6F4F1]`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                  <span>{exp.year}</span>
                </span>

                {exp.current && (
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-[#1A3D37]/80 text-[#0F2420] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D5A50] dark:bg-[#C58A55] shrink-0" />
                    <span>CURRENT FOCUS</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center gap-2">
                  {renderIcon(exp.icon)}
                  <h3 className="font-bold text-lg sm:text-xl text-[#0F2420] dark:text-[#E6F4F1] tracking-wide group-hover:text-[#1D5A50] dark:group-hover:text-[#C58A55] transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <p className="font-mono text-xs sm:text-sm text-[#1D5A50] dark:text-[#C58A55] mt-1 font-semibold">
                  {exp.subtitle}
                </p>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-[#2C423E] dark:text-[#9FB8B2] font-sans leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-[#25524B]">
                <h4 className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider font-semibold">
                  Key Accomplishments:
                </h4>
                <ul className="space-y-1">
                  {exp.highlights.slice(0, 3).map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-1.5 text-xs sm:text-sm text-[#2C423E] dark:text-[#E6F4F1]/80 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Tag Pills & Interactive Affordance Badge */}
            <div className="space-y-3 pt-3 border-t border-zinc-200 dark:border-[#25524B]">
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.slice(0, 4).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-[#25524B]/50 text-zinc-800 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30"
                  >
                    {tag}
                  </span>
                ))}
                {exp.tags.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500 dark:text-[#E6F4F1]/50">
                    +{exp.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Click to View Dossier CTA Badge */}
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-[#E6F4F1]/70 group-hover:text-zinc-950 dark:group-hover:text-[#E6F4F1] pt-1">
                <span>VIEW FULL DOSSIER</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200 text-[#1D5A50] dark:text-[#2C665D]" />
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
              className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] shadow-2xl relative text-zinc-900 dark:text-[#E6F4F1] space-y-6 backdrop-blur-xl"
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors cursor-pointer"
                title="Close Dossier"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Studio Dossier Chip & Header */}
              <div className="space-y-2 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#25524B]/50 border border-zinc-200 dark:border-[#2C665D]/30 text-xs font-mono text-[#1D5A50] dark:text-[#E6F4F1] tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] animate-pulse" />
                  <span>EXPERIENCE DOSSIER</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F2420] dark:text-[#E6F4F1] tracking-tight">
                    {selectedExperience.role}
                  </h3>
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-full border bg-zinc-100 dark:bg-[#25524B]/50 border-zinc-200 dark:border-[#2C665D]/40 text-[#0F2420] dark:text-[#E6F4F1]`}
                  >
                    {selectedExperience.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-mono text-[#1D5A50] dark:text-[#2C665D]">
                  {selectedExperience.subtitle}
                </p>
                <p className="text-xs text-zinc-600 dark:text-[#E6F4F1]/70 font-sans">
                  🏢 {selectedExperience.company}
                </p>
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-2 p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B]">
                <h4 className="text-xs font-mono text-[#1D5A50] dark:text-[#2C665D] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Layers className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                  <span>Executive Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-[#E6F4F1]/80 leading-relaxed font-sans">
                  {selectedExperience.detailedOverview}
                </p>
              </div>

              {/* Key Technical Deliverables Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-800 dark:text-[#2C665D] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#1D5A50] dark:text-[#2C665D]" />
                  <span>Key Architectural Deliverables & Impact</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {selectedExperience.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#0A1312]/70 border border-zinc-200 dark:border-[#25524B] space-y-1 hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2420] dark:text-[#E6F4F1]">
                        <CheckCircle2 className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-[#E6F4F1]/70 font-sans pl-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies Badges */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-200 dark:border-[#25524B]">
                <h4 className="text-xs font-mono text-zinc-800 dark:text-[#2C665D] uppercase tracking-wider font-semibold">
                  Core Technologies & Ecosystem:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExperience.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 dark:bg-[#25524B]/50 text-zinc-800 dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#2C665D]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Close Action */}
              <div className="pt-4 border-t border-zinc-200 dark:border-[#25524B] flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-[#E6F4F1]/60">
                <span>ESC OR CLICK OUTSIDE TO CLOSE</span>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#1D5A50] hover:bg-[#134038] text-white dark:bg-[#2C665D] dark:hover:bg-[#357B70] dark:text-[#E6F4F1] font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-md text-xs font-mono"
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
