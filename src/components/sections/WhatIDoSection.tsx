import React, { useState, useEffect } from 'react';
import {
  Code,
  Layers,
  Terminal,
  Server,
  Zap,
  Box,
  Palette,
  Sparkles,
  Database,
  Smartphone,
  X,
  CheckCircle2,
  ArrowRight,
  Activity,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import setupImg from '../../assets/SETUP PROFIL PNG.jpeg';

export interface CapabilityItem {
  id: string;
  category: 'develop' | 'design';
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  icon: 'terminal' | 'server' | 'zap' | 'database' | 'smartphone' | 'box' | 'sparkles' | 'layers' | 'palette';
  workflow: string[];
  deliverables: { title: string; desc: string }[];
  tools: string[];
  metrics: string;
  accent: 'cyan' | 'pink';
}

const CAPABILITIES: CapabilityItem[] = [
  // DEVELOP CAPABILITIES
  {
    id: 'dev-arch',
    category: 'develop',
    title: 'Frontend Engineering & System Architecture',
    badge: 'CORE CAPABILITY',
    tagline: 'High-Performance Web Platforms & Reactive Architectures',
    overview:
      'Designing robust client-side single-page applications and micro-frontends with React, Vite, and TypeScript. Engineering reactive state machines, sub-50ms data pipelines, and modular design system component libraries.',
    icon: 'terminal',
    workflow: [
      'Declarative component composition with strict TypeScript typing',
      'Unidirectional reactive state synchronization and custom hooks',
      'Sub-50ms REST & GraphQL integration with error boundary fallbacks',
      'Automated code-splitting, tree-shaking, and minified production bundles',
    ],
    deliverables: [
      {
        title: 'Micro-Frontend Component System',
        desc: 'Constructed isolated, reusable component hierarchies with atomic design tokens.',
      },
      {
        title: 'Reactive State Store',
        desc: 'Engineered predictable data stores ensuring zero unnecessary child re-renders.',
      },
      {
        title: 'Optimized Vite Build Pipelines',
        desc: 'Configured fast HMR and lightweight production chunk splitting under 400KB.',
      },
    ],
    tools: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Redux / Zustand', 'REST APIs'],
    metrics: 'Achieving sub-50ms page transitions and 99+ Google Lighthouse performance rating',
    accent: 'cyan',
  },
  {
    id: 'react-vite',
    category: 'develop',
    title: 'React & Vite Tooling',
    badge: 'FRAMEWORK',
    tagline: 'Lightning-Fast Bundling & Component Architecture',
    overview:
      'Harnessing native ES modules and Rollup-powered Vite bundlers to deliver instantaneous Hot Module Replacement (HMR) and optimized distribution builds.',
    icon: 'server',
    workflow: [
      'Native ESM-based local development with zero bundle compilation lag',
      'Advanced custom hook primitives for reusable logic and lifecycle caching',
      'Lazy loading routes and dynamic component imports for instant first-contentful paint',
    ],
    deliverables: [
      {
        title: 'Instant HMR Development Workflow',
        desc: 'Sub-100ms module hot reload for rapid UI iteration.',
      },
      {
        title: 'Optimized Chunk Distribution',
        desc: 'Granular code splitting separating vendor runtimes from application logic.',
      },
    ],
    tools: ['React', 'Vite', 'PostCSS', 'ESNext', 'TypeScript'],
    metrics: 'Initial page load time under 350ms on mobile 4G networks',
    accent: 'cyan',
  },
  {
    id: 'websockets',
    category: 'develop',
    title: 'WebSockets & Live Sockets',
    badge: 'REAL-TIME',
    tagline: 'Sub-30ms Bi-Directional Event Streaming',
    overview:
      'Constructing real-time communication architectures using Socket.io and native WebSockets. Features live presence detection, typing indicators, and optimistic message delivery.',
    icon: 'zap',
    workflow: [
      'Bi-directional TCP socket channels with automatic heartbeat reconnection',
      'Event emission multiplexing with room and channel partitioning',
      'Optimistic client-side UI updates with server acknowledgment rollbacks',
    ],
    deliverables: [
      {
        title: 'Real-Time Message Dispatcher',
        desc: 'Sub-30ms event broadcast pipeline with zero message loss.',
      },
      {
        title: 'Presence & Typing Indicators',
        desc: 'Instant user activity status feeds across active sessions.',
      },
    ],
    tools: ['Socket.io', 'Node.js', 'WebSockets', 'Express', 'EventEmitters'],
    metrics: 'Tested with 500+ simultaneous connections at <30ms latency',
    accent: 'cyan',
  },
  {
    id: 'state-persistence',
    category: 'develop',
    title: 'State Persistence & APIs',
    badge: 'DATA ENGINE',
    tagline: 'LocalStorage v30 & Resilient Cache Models',
    overview:
      'Architecting persistent client-side caching mechanisms with LocalStorage v30, IndexedDB, and RESTful endpoints to ensure full offline-first user capability.',
    icon: 'database',
    workflow: [
      'Schema-versioned LocalStorage serializations with migration adapters',
      'Asynchronous background reconciliation and conflict resolution',
      'Debounced network synchronization minimizing unnecessary server requests',
    ],
    deliverables: [
      {
        title: 'LocalStorage v30 Syncer',
        desc: 'Automated state persistence preventing checkout or form session dropouts.',
      },
      {
        title: 'REST Aggregation Layer',
        desc: 'Optimized payload formatting reducing network overhead by 40%.',
      },
    ],
    tools: ['LocalStorage v30', 'IndexedDB', 'REST API', 'JSON Schema', 'Axios / Fetch'],
    metrics: 'Zero data loss across browser reloads and offline network disconnects',
    accent: 'cyan',
  },
  {
    id: 'responsive-ux',
    category: 'develop',
    title: 'Responsive Mobile UX',
    badge: 'ADAPTIVE',
    tagline: 'Fluid Tailwind Systems & Touch Accessibility',
    overview:
      'Designing mobile-first layouts that adapt across smartphones, tablets, ultra-wide desktop monitors, and foldables with calibrated touch targets and accessible navigation.',
    icon: 'smartphone',
    workflow: [
      'Fluid CSS clamping (`clamp()`) for organic typography and layout scaling',
      'WCAG 2.1 AA accessibility standards with screen reader semantic hierarchy',
      'Hardware-accelerated CSS GPU compositing for stutter-free gesture scrolling',
    ],
    deliverables: [
      {
        title: 'Responsive Design Tokens',
        desc: 'Standardized spacing, typography, and breakpoint matrix with Tailwind.',
      },
      {
        title: 'Touch & Gesture Handling',
        desc: 'Calibrated swipe drawers and thumb-accessible navigation bars.',
      },
    ],
    tools: ['Tailwind CSS', 'CSS Flex/Grid', 'Touch Events', 'WCAG AA', 'HTML5 Semantic'],
    metrics: '100% viewport coverage across 320px mobile to 4K ultra-wide displays',
    accent: 'cyan',
  },

  // DESIGN CAPABILITIES
  {
    id: 'design-arch',
    category: 'design',
    title: '3D WebGL & Motion Architecture',
    badge: 'CREATIVE TECH',
    tagline: 'Interactive Spatial Interfaces & Micro-Interactions',
    overview:
      'Fusing Three.js, React Three Fiber, GLSL shaders, and Framer Motion spring physics to transform conventional 2D flat websites into living, interactive 3D spatial dioramas.',
    icon: 'box',
    workflow: [
      'Scene graph optimization, mesh instancing, and geometry batching',
      'Cursor-tracking kinematic camera tweening with Lenis smooth scroll synchronization',
      'Custom vertex and fragment shader materials with emissive neon rim lighting',
      'Zero-latency Verlet physics simulations for responsive floating interactive matrices',
    ],
    deliverables: [
      {
        title: 'Spatial 3D Diorama Scenes',
        desc: 'Interactive 3D environments running at locked 60 FPS without GPU overheat.',
      },
      {
        title: 'Procedural Physics Matrices',
        desc: 'Interactive tech spheres with cursor repulsion and particle elastic collisions.',
      },
      {
        title: 'Framer Motion Spring Engine',
        desc: 'Physics-based modal transitions and scroll-linked micro-animations.',
      },
    ],
    tools: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'Framer Motion', 'Lenis', 'Canvas API'],
    metrics: 'Locked 60 FPS rendering across standard laptops and mobile GPUs',
    accent: 'pink',
  },
  {
    id: 'threejs',
    category: 'design',
    title: 'Three.js & R3F',
    badge: '3D ENGINE',
    tagline: 'Spatial Dioramas & Shader Graph Optimization',
    overview:
      'Harnessing React Three Fiber and @react-three/drei to build high-performance WebGL scenes with declarative scene trees, calibrated lighting, and optimized mesh memory.',
    icon: 'box',
    workflow: [
      'Declarative Three.js scene graphs with automatic lifecycle disposal',
      'Studio directional, ambient, and point light setups with soft drop shadows',
      'Dynamic device pixel ratio (DPR) throttling preventing mobile frame drops',
    ],
    deliverables: [
      {
        title: 'Seated Dev Workstation Mesh',
        desc: 'Lightweight procedural 3D model with emissive laptop glow and animated developer bust.',
      },
      {
        title: 'Optimized Render Loop',
        desc: 'RAF delta-time calculations ensuring consistent animation speed across all refresh rates.',
      },
    ],
    tools: ['Three.js', 'R3F', 'Drei', 'WebGL', 'BufferGeometry'],
    metrics: 'Draw calls capped under 25 per frame with memory footprint <50MB',
    accent: 'pink',
  },
  {
    id: 'motion-physics',
    category: 'design',
    title: 'Motion & Physics',
    badge: 'SPRING PHYSICS',
    tagline: 'Cursor Tracking & Kinetic Micro-Interactions',
    overview:
      'Designing intuitive kinetic motion systems where interface elements react organically to user cursor coordinates, scroll momentum, and touch impulses.',
    icon: 'sparkles',
    workflow: [
      'Damped spring physics using Framer Motion useSpring & useMotionValue',
      'Sub-pixel cursor angle calculation with clamp bounds preventing distortion',
      'Momentum scroll interpolation synchronized with 3D camera spline trajectories',
    ],
    deliverables: [
      {
        title: 'Interactive 3D Tilt Cards',
        desc: 'Perspective-aware card hover effects with specular reflection glares.',
      },
      {
        title: 'Kinetic Particle Engine',
        desc: 'Repulsion physics with spring restitution for floating tech badges.',
      },
    ],
    tools: ['Framer Motion', 'Spring Physics', 'RAF Loop', 'Matrix3D Transforms'],
    metrics: 'Zero frame stutter with 0ms visual input lag on pointer movement',
    accent: 'pink',
  },
  {
    id: 'glassmorphism',
    category: 'design',
    title: 'Dark Glassmorphism',
    badge: 'LUXURY UI',
    tagline: 'Curated Palettes, Rim Lighting & Neon Glows',
    overview:
      'Crafting futuristic cyberpunk and studio aesthetics with semi-transparent frosted glass, high-contrast dark charcoal tones, and fine neon accent borders.',
    icon: 'layers',
    workflow: [
      'Tailored dark zinc base palettes (`#080808`, `#0e0e16`) with high contrast text',
      'Optimized `backdrop-blur-md` compositing to prevent GPU rendering lag',
      'Vibrant purple, cyan, and pink accent glows creating spatial depth',
    ],
    deliverables: [
      {
        title: 'Cyberpunk HUD Overlay',
        desc: 'Tactile minimalist top navigation bar with live audio status indicator.',
      },
      {
        title: 'Glass Dossier Modals',
        desc: 'Deep-dive popups with ambient drop shadows and glowing accent rims.',
      },
    ],
    tools: ['CSS Backdrop Filter', 'Tailwind CSS', 'CSS Gradients', 'Box Shadow Shaders'],
    metrics: 'Flawless readability adhering to AAA color contrast guidelines',
    accent: 'pink',
  },
  {
    id: 'audio-ux',
    category: 'design',
    title: 'Tactile Audio UX',
    badge: 'SOUND DESIGN',
    tagline: 'Zero-Dependency Web Audio API Synthesizer',
    overview:
      'Integrating subtle, non-intrusive sound effects and ambient drone synthesis generated entirely in real-time with Web Audio API oscillators—zero external audio files required.',
    icon: 'zap',
    workflow: [
      'Procedural harmonic oscillator nodes with subtle low-pass filtering',
      'Tactile micro-click sound synthesis triggered on navigation transitions',
      'Global audio mute persistence and graceful autoplay policy handling',
    ],
    deliverables: [
      {
        title: 'Web Audio API Engine',
        desc: 'Zero-byte audio synthesis generating organic click and hover tones.',
      },
      {
        title: 'Global Audio State Toggle',
        desc: 'Persistent sound controller with animated equalizer bars.',
      },
    ],
    tools: ['Web Audio API', 'OscillatorNode', 'GainNode', 'BiquadFilterNode'],
    metrics: '0 KB external audio asset load penalty with instant procedural playback',
    accent: 'pink',
  },
];

export const WhatIDoSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'develop' | 'design'>('develop');
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);

  // Prevent background scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedCapability) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedCapability(null);
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
  }, [selectedCapability]);

  const devCapabilities = CAPABILITIES.filter((c) => c.category === 'develop');
  const designCapabilities = CAPABILITIES.filter((c) => c.category === 'design');

  const devHero = devCapabilities.find((c) => c.id === 'dev-arch')!;
  const devGrid = devCapabilities.filter((c) => c.id !== 'dev-arch');

  const designHero = designCapabilities.find((c) => c.id === 'design-arch')!;
  const designGrid = designCapabilities.filter((c) => c.id !== 'design-arch');

  return (
    <div className="space-y-6 select-none pointer-events-auto">
      {/* Header & Mode Selector Pills */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>[ 03 // WHAT I DO ]</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            WHAT I DO
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
            Bridging robust full-stack architecture with cutting-edge 3D creative design. Click any card for detailed specification dossier.
          </p>
        </div>

        {/* Interactive Mode Selector Pills: [DEVELOP] and [DESIGN] */}
        <div className="flex items-center gap-2 bg-[#111118] p-1.5 rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setActiveMode('develop')}
            className={`px-4 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeMode === 'develop'
                ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20'
                : 'text-slate-400 hover:text-cyan-300 hover:bg-white/5'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>[DEVELOP]</span>
          </button>

          <button
            onClick={() => setActiveMode('design')}
            className={`px-4 py-1.5 rounded-lg font-mono font-bold text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeMode === 'design'
                ? 'bg-pink-500 text-slate-950 shadow-md shadow-pink-500/20'
                : 'text-slate-400 hover:text-pink-300 hover:bg-white/5'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>[DESIGN]</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content Display with AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeMode === 'develop' ? (
          <motion.div
            key="develop"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Left: Engineering Core Principles */}
            <div className="lg:col-span-7 space-y-4">
              {/* Clickable Hero Capability Card */}
              <div
                onClick={() => setSelectedCapability(devHero)}
                className="p-5 rounded-2xl bg-[#0e0e16]/90 border border-cyan-500/30 space-y-3 backdrop-blur-md cursor-pointer group hover:border-cyan-400/70 hover:shadow-cyan-500/10 shadow-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <Terminal className="w-4 h-4" />
                    <span>Frontend Engineering & System Architecture</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    CORE SYSTEM
                  </span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                  High-Performance Web Platforms & Reactive Architectures
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Constructing responsive React applications, modular state architectures, REST APIs, and real-time Socket.io data pipelines built for speed and production reliability.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span>EXPLORE SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {devGrid.map((cap) => (
                  <div
                    key={cap.id}
                    onClick={() => setSelectedCapability(cap)}
                    className="p-3.5 rounded-xl bg-[#0e0e16]/80 border border-white/10 space-y-2 hover:border-cyan-400/50 transition-all cursor-pointer group hover:bg-[#11111e]/90 shadow-md"
                  >
                    <div className="flex items-center justify-between text-cyan-400">
                      <div className="flex items-center gap-2">
                        {cap.id === 'react-vite' && <Server className="w-4 h-4" />}
                        {cap.id === 'websockets' && <Zap className="w-4 h-4" />}
                        {cap.id === 'state-persistence' && <Database className="w-4 h-4" />}
                        {cap.id === 'responsive-ux' && <Smartphone className="w-4 h-4" />}
                        <h4 className="font-mono font-bold text-xs tracking-wider text-white group-hover:text-cyan-300 transition-colors uppercase">
                          {cap.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 font-sans line-clamp-2">
                      {cap.overview}
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-cyan-400/80 group-hover:text-cyan-300">
                      <span>VIEW DEEP DIVE</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Authentic Hardware Workstation Setup Studio Frame */}
            <div className="lg:col-span-5 relative group">
              {/* Ambient Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-cyan-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-[#0a0c14] border border-white/10 group-hover:border-purple-500/40 shadow-2xl transition-all duration-500 flex flex-col justify-between">
                {/* Top Header Label */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>HARDWARE WORKSTATION // LAB</span>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">
                    4K DUAL DISPLAY
                  </span>
                </div>

                {/* Setup Photo */}
                <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden">
                  <img
                    src={setupImg}
                    alt="Yasir Khokhar Hardware & Developer Workstation Setup"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 select-none"
                  />
                  {/* Dark Vignette Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Glass Pill Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                      HARDWARE WORKSTATION // DUAL SETUP
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300 font-semibold">
                    60 FPS ULTRA-HD
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="design"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Left: Creative 3D & Spatial Design Principles */}
            <div className="lg:col-span-7 space-y-4">
              {/* Clickable Hero Capability Card */}
              <div
                onClick={() => setSelectedCapability(designHero)}
                className="p-5 rounded-2xl bg-[#0e0e16]/90 border border-pink-500/30 space-y-3 backdrop-blur-md cursor-pointer group hover:border-pink-400/70 hover:shadow-pink-500/10 shadow-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-pink-400 uppercase tracking-wider">
                    <Box className="w-4 h-4" />
                    <span>3D WebGL & Motion Architecture</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 border border-pink-500/30">
                    CREATIVE TECH
                  </span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-pink-300 transition-colors">
                  Interactive Spatial Interfaces & Micro-Interactions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Crafting memorable, interactive 3D web spaces with Three.js, React Three Fiber, physics simulations, dark glassmorphism, and fluid Framer Motion spring transitions.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-pink-400 group-hover:text-pink-300">
                  <span>EXPLORE SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>

              {/* Design Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {designGrid.map((cap) => (
                  <div
                    key={cap.id}
                    onClick={() => setSelectedCapability(cap)}
                    className="p-3.5 rounded-xl bg-[#0e0e16]/80 border border-white/10 space-y-2 hover:border-pink-400/50 transition-all cursor-pointer group hover:bg-[#11111e]/90 shadow-md"
                  >
                    <div className="flex items-center justify-between text-pink-400">
                      <div className="flex items-center gap-2">
                        {cap.id === 'threejs' && <Box className="w-4 h-4" />}
                        {cap.id === 'motion-physics' && <Sparkles className="w-4 h-4" />}
                        {cap.id === 'glassmorphism' && <Layers className="w-4 h-4" />}
                        {cap.id === 'audio-ux' && <Zap className="w-4 h-4" />}
                        <h4 className="font-mono font-bold text-xs tracking-wider text-white group-hover:text-pink-300 transition-colors uppercase">
                          {cap.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 font-sans line-clamp-2">
                      {cap.overview}
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-pink-400/80 group-hover:text-pink-300">
                      <span>VIEW DEEP DIVE</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Authentic Hardware Workstation Setup Studio Frame */}
            <div className="lg:col-span-5 relative group">
              {/* Ambient Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/30 via-purple-600/20 to-cyan-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-[#0a0c14] border border-white/10 group-hover:border-pink-500/40 shadow-2xl transition-all duration-500 flex flex-col justify-between">
                {/* Top Header Label */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-pink-300">
                    <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                    <span>3D SPATIAL LAB // WORKSTATION</span>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">
                    STUDIO DISPLAY
                  </span>
                </div>

                {/* Setup Photo */}
                <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden">
                  <img
                    src={setupImg}
                    alt="Yasir Khokhar Creative & 3D WebGL Studio Workstation"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 select-none"
                  />
                  {/* Dark Vignette Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Glass Pill Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                      CREATIVE STUDIO // DUAL RIG
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-pink-300 font-semibold">
                    GPU ACCELERATED
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Capability Specification Dossier Modal */}
      <AnimatePresence>
        {selectedCapability && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCapability(null)}
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
                onClick={() => setSelectedCapability(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                title="Close Specification"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Studio Header & Chip */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase">
                    <span
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        selectedCapability.accent === 'cyan' ? 'bg-cyan-400' : 'bg-pink-400'
                      }`}
                    />
                    <span>[ CAPABILITY SPECIFICATION // DEEP DIVE ]</span>
                  </div>
                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                      selectedCapability.accent === 'cyan'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-pink-500/10 text-pink-300 border-pink-500/30'
                    }`}
                  >
                    {selectedCapability.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight pt-1">
                  {selectedCapability.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm font-mono ${
                    selectedCapability.accent === 'cyan' ? 'text-cyan-300' : 'text-pink-300'
                  }`}
                >
                  {selectedCapability.tagline}
                </p>
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-2 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Engineering Methodology & Execution</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {selectedCapability.overview}
                </p>
              </div>

              {/* Architectural Workflow Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Technical Workflow:
                </h4>
                <ul className="space-y-1.5">
                  {selectedCapability.workflow.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                      <span className="font-mono text-purple-400 font-bold mt-0.5">0{sIdx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap
                    className={`w-3.5 h-3.5 ${
                      selectedCapability.accent === 'cyan' ? 'text-cyan-400' : 'text-pink-400'
                    }`}
                  />
                  <span>Engineered Deliverables & Production Impact</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {selectedCapability.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 ${
                            selectedCapability.accent === 'cyan' ? 'text-cyan-400' : 'text-pink-400'
                          }`}
                        />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-zinc-400 font-sans pl-6 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metric */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-xs font-mono text-emerald-300">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                <span>Performance Metric: {selectedCapability.metrics}</span>
              </div>

              {/* Core Technologies & Tooling */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Technology Stack & Tooling:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCapability.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-500/10 text-purple-200 border border-purple-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Close Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>[ESC] OR CLICK OUTSIDE TO CLOSE</span>
                <button
                  onClick={() => setSelectedCapability(null)}
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

export default WhatIDoSection;

