import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Github,
  CheckCircle2,
  X,
  TrendingUp,
  Briefcase,
  Cpu,
  Layers,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  FileText,
  Copy,
  Check,
  Terminal,
  User,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import profilePic from '../../assets/profile.jpg';

export interface BentoProject {
  number: string;
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  metrics: string;
  image: string;
  altImage?: string;
  demoUrl?: string;
  githubUrl?: string;
}

// STRICT 1 to 7 sequential projects matching images currently in public/
export const bentoProjects: BentoProject[] = [
  {
    number: '01',
    id: 'bithub-system',
    title: 'Bite-Hub — Zero-G Fast Food & Order System',
    tagline: 'Cyberpunk-themed fast-food ordering web app with state persistence & admin portal',
    category: 'Full-Stack Web App / Food Tech',
    description:
      'An immersive, futuristic cyber-themed food ordering application featuring interactive neon food menus, live cart calculations, item customization options, and an administrative order management dashboard.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'LocalStorage', 'Context API'],
    features: [
      'Vibrant cyberpunk neon dark UI with fluid motion design & interactive menus',
      'Real-time food customization with modifiers, combos, and spice level selection',
      'Persistent order cart with live discount code & tax calculation engine',
      'Dedicated administrative dashboard for menu adjustments and live order tracking',
    ],
    metrics: 'Zero-latency local state persistence with smooth 60 FPS transitions',
    image: '/BITHUB 1.jfif',
    altImage: '/RAG SYSTEM 1.jfif',
    demoUrl: 'https://bite-hub-demo.netlify.app',
    githubUrl: 'https://github.com/khokharyasir749/bite-hub',
  },
  {
    number: '02',
    id: 'netflix-clone',
    title: 'Netflix Clone — Video Streaming Platform',
    tagline: 'Video streaming platform UI & dynamic media catalog',
    category: 'Frontend Architecture / Media Streaming',
    description:
      'A full-featured Netflix web interface clone built with modern frontend architecture, movie categorization, dynamic search, and responsive streaming media layouts.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Vite'],
    features: [
      'Dynamic movie & TV show catalog categorization with horizontal scrolling carousels',
      'Instant real-time search query filtering and genre browsing engine',
      'Responsive video media player interface with interactive preview trailers',
      'Pixel-perfect dark streaming layout with fluid micro-interactions and modal overlays',
    ],
    metrics: 'Sub-50ms catalog interaction latency with optimized responsive media grids',
    image: '/NETFLIX CLONE 2.png',
    githubUrl: 'https://github.com/khokharyasir749',
  },
  {
    number: '03',
    id: 'silage-fragrance',
    title: 'SILLAGE — Haute Parfumerie Paris',
    tagline: 'Luxury fragrance atelier & cinematic web experience',
    category: 'Luxury Brand / 3D Web Experience',
    description:
      'A cinematic digital atelier for bespoke haute perfumery featuring immersive dark-mode aesthetics, olfactory note pyramid breakdowns, and seamless bespoke ordering architecture.',
    tags: ['React', 'WebGL', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Cinematic dark-mode digital atelier showcasing artisanal haute perfumery',
      'Interactive olfactory note breakdowns with real-time visual feedback',
      'Seamless ordering architecture and luxury bespoke perfume configuration',
      'High-performance WebGL transitions and fluid Framer Motion choreography',
    ],
    metrics: 'High-fidelity WebGL graphics with seamless 60 FPS spatial interactions',
    image: '/SILAGE 3.png',
    githubUrl: 'https://github.com/khokharyasir749',
  },
  {
    number: '04',
    id: 'lonetex-wholesale',
    title: 'Lonetex Pakistan — Wholesale Supply & Catalog',
    tagline: 'Commercial cleaning equipment e-commerce & wholesale catalog',
    category: 'Wholesale E-Commerce / Supply Chain',
    description:
      'A comprehensive digital commerce & industrial equipment catalog built for high-volume wholesale distribution across Pakistan & Saudi Arabia. Features multi-category product filtering, instant WhatsApp inquiry dispatch, and persistent cart state.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage v30', 'JavaScript'],
    features: [
      'Dynamic equipment catalog with category & brand filtering',
      'Persistent cart drawer with LocalStorage state synchronization',
      'Instant one-click WhatsApp quotation generator with pre-filled SKU details',
      'High-definition product visual showcase and responsive specification tabs',
    ],
    metrics: 'Streamlined wholesale buyer inquiries with instant WhatsApp order generation',
    image: '/lonetex 4.jfif',
    demoUrl: 'https://lonetexpakistan.com',
    githubUrl: 'https://github.com/khokharyasir749/lonetex-pakistan',
  },
  {
    number: '05',
    id: 'inventory-system',
    title: 'Multi-Business Inventory & POS Platform',
    tagline: 'Enterprise cross-industry inventory & stock management platform',
    category: 'Enterprise SaaS / Inventory & POS',
    description:
      'An enterprise-grade SaaS inventory management dashboard and POS platform featuring stock movement tracking, automated ledger logging, multi-shop catalog controls, and real-time business analytics grids.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    features: [
      'Real-time stock movement tracking and automated inventory ledger logging',
      'Multi-warehouse catalog controls with category sorting and SKU management',
      'Interactive analytics dashboard with restock warnings and supply chain KPIs',
      'Audit trail logs and fast exportable transaction records',
    ],
    metrics: 'Real-time ledger updates with persistent database synchronization',
    image: '/INVENTORY SYSTEM 5.jfif',
    githubUrl: 'https://github.com/khokharyasir749/Lonetex-inventory',
  },
  {
    number: '06',
    id: 'pharmacy-management',
    title: 'PharmaCare — Pharmacy Management & FEFO POS',
    tagline: 'Enterprise drug inventory, FEFO dispensing & healthcare POS',
    category: 'Healthcare Tech / Inventory & POS',
    description:
      'An enterprise healthcare pharmacy management system featuring batch expiry tracking, FEFO dispensing, prescription validation, automated inventory reordering, and integrated point-of-sale operations.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Express'],
    features: [
      'Automated batch expiry alerting and FEFO inventory tracking for pharmaceutical stocks',
      'Integrated digital point-of-sale (POS) terminal with instant barcode scanning and invoice generation',
      'Prescription logging with dosage auditing, patient history records, and regulatory compliance logs',
      'Real-time revenue metrics, inventory turnover insights, and supplier procurement workflows',
    ],
    metrics: 'Real-time drug stock auditing with sub-100ms checkout and dispensing flows',
    image: '/Pharmacy 6.jfif',
    githubUrl: 'https://github.com/khokharyasir749',
  },
  {
    number: '07',
    id: 'flight-one-travel',
    title: 'FlightOne — Web & Mobile Travel Platform',
    tagline: 'Unified web & mobile custom tour booking ecosystem',
    category: 'Cross-Platform Web & Mobile App',
    description:
      'A comprehensive cross-platform digital booking ecosystem featuring responsive web interfaces and mobile application flows for custom tour packages, real-time ticket booking, and interactive destination itineraries.',
    tags: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    features: [
      'Unified web portal and mobile app architecture tailored for domestic and international travel bookings',
      'Custom tour package builder with dynamic itinerary planning and fare estimates',
      'Cross-device synchronized booking state with real-time seat and schedule availability',
      'Responsive mobile-first UI with offline-capable itinerary caching and fast checkout',
    ],
    metrics: 'Cross-platform Web & Mobile architecture with sub-second responsive interaction',
    image: '/flight one 7.png',
    githubUrl: 'https://github.com/khokharyasir749',
  },
];

export interface BentoGridV2Props {
  onOpenAllProjects?: () => void;
}

export const BentoGridV2: React.FC<BentoGridV2Props> = ({ onOpenAllProjects }) => {
  const [activeProject, setActiveProject] = useState<BentoProject | null>(null);
  const [bithubVariant, setBithubVariant] = useState<'bithub' | 'rag'>('bithub');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khokharyasir749@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="projects" className="space-y-16 pt-10 select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>SELECTED ARCHITECTURE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
            Seamless alternating breakdowns of core production applications, featuring challenge-to-solution engineering pipelines.
          </p>
        </div>

        {onOpenAllProjects ? (
          <button
            onClick={onOpenAllProjects}
            className="group text-xs font-mono px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-orange-500/30 text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center gap-2"
            title="Open complete projects directory"
          >
            <span>3 Featured • 7 in Directory</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        ) : (
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300">
            3 Featured • 7 in Archive
          </div>
        )}
      </div>

      {/* ========================================================
          1. FEATURED PROJECTS: CLEAN CANVAS ALTERNATING ZIG-ZAG
         ======================================================== */}
      <div className="space-y-24 sm:space-y-32 pt-6">
        {/* ----------------------------------------------------
            FEATURED #1: Project 01 (BITE-HUB / BITHUB)
            Layout: Image LEFT | Details RIGHT
           ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column (Left - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:border-orange-500/40 transition-all duration-500 backdrop-blur-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img
                src={bithubVariant === 'bithub' ? bentoProjects[0].image : bentoProjects[0].altImage}
                alt={bentoProjects[0].title}
                className="w-full h-auto aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                onClick={() => setActiveProject(bentoProjects[0])}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>{bentoProjects[0].metrics}</span>
                </div>

                {/* Bithub vs RAG variant switcher */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/15 text-[11px]"
                >
                  <button
                    onClick={() => setBithubVariant('bithub')}
                    className={`px-2.5 py-0.5 rounded-lg transition-all ${
                      bithubVariant === 'bithub'
                        ? 'bg-orange-500 text-black font-bold shadow'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    BITEHUB
                  </button>
                  <button
                    onClick={() => setBithubVariant('rag')}
                    className={`px-2.5 py-0.5 rounded-lg transition-all ${
                      bithubVariant === 'rag'
                        ? 'bg-orange-500 text-black font-bold shadow'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    RAG
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Info & Challenge Column (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                01 / AI & FULL-STACK
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                COMPLETED
              </span>
            </div>

            <h3
              onClick={() => setActiveProject(bentoProjects[0])}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight hover:text-orange-300 transition-colors cursor-pointer"
            >
              {bithubVariant === 'bithub' ? bentoProjects[0].title : 'Lonetex — Enterprise RAG & Knowledge Intelligence Platform'}
            </h3>

            {/* Horizontal Pipeline Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-300">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">React.js</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Node.js</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Tailwind</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Context API</span>
            </div>

            {/* Challenge & Solution Architecture Text */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Fast-casual web ordering interfaces frequently suffer from cart desynchronization during connection spikes, unresponsive nested food modifier pickers, and abrupt menu render delays.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                  THE SOLUTION & IMPACT
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Engineered zero-latency local caching architecture with fluid 60 FPS motion, dynamic modifier calculation engines, and an instant administrative dashboard for live catalog adjustments.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {bentoProjects[0].tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveProject(bentoProjects[0])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
              >
                <span>READ CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {bentoProjects[0].demoUrl && (
                <a
                  href={bentoProjects[0].demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              )}
              {bentoProjects[0].githubUrl && (
                <a
                  href={bentoProjects[0].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            FEATURED #2: Project 05 (INVENTORY SYSTEM)
            Layout: Details LEFT | Image RIGHT (Alternated/Flipped)
           ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Info & Challenge Column (Left on desktop - 5 cols) */}
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                02 / ENTERPRISE SAAS & POS
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                COMPLETED
              </span>
            </div>

            <h3
              onClick={() => setActiveProject(bentoProjects[4])}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight hover:text-orange-300 transition-colors cursor-pointer"
            >
              {bentoProjects[4].title}
            </h3>

            {/* Horizontal Pipeline Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-300">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">React.js</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Node.js</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">MongoDB</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Tailwind</span>
            </div>

            {/* Challenge & Solution Architecture Text */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Commercial inventory hubs and wholesale distributors face distributed stock count discrepancies, slow transaction logging, and high manual auditing costs across multiple warehouses.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                  THE SOLUTION & IMPACT
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Architected an enterprise dashboard with automated ledger recording, multi-warehouse catalog controls, instant SKU barcode verification, and automated restock warning telemetry.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {bentoProjects[4].tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveProject(bentoProjects[4])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
              >
                <span>READ CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {bentoProjects[4].githubUrl && (
                <a
                  href={bentoProjects[4].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Image Column (Right on desktop - 7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:border-orange-500/40 transition-all duration-500 backdrop-blur-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="absolute -inset-1 bg-gradient-to-l from-orange-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img
                src={bentoProjects[4].image}
                alt={bentoProjects[4].title}
                className="w-full h-auto aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                onClick={() => setActiveProject(bentoProjects[4])}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>{bentoProjects[4].metrics}</span>
                </div>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white">
                  ENTERPRISE POS →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
            FEATURED #3: Project 07 (FLIGHT ONE)
            Layout: Image LEFT | Details RIGHT
           ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column (Left - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:border-orange-500/40 transition-all duration-500 backdrop-blur-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img
                src={bentoProjects[6].image}
                alt={bentoProjects[6].title}
                className="w-full h-auto aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                onClick={() => setActiveProject(bentoProjects[6])}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>{bentoProjects[6].metrics}</span>
                </div>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white">
                  TRAVEL ECOSYSTEM →
                </span>
              </div>
            </div>
          </div>

          {/* Info & Challenge Column (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                03 / CROSS-PLATFORM & TRAVEL TECH
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                COMPLETED
              </span>
            </div>

            <h3
              onClick={() => setActiveProject(bentoProjects[6])}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight hover:text-orange-300 transition-colors cursor-pointer"
            >
              {bentoProjects[6].title}
            </h3>

            {/* Horizontal Pipeline Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-300">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Next.js</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">React Native</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">TypeScript</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">Tailwind</span>
            </div>

            {/* Challenge & Solution Architecture Text */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Travel portals commonly encounter booking state drop-offs between mobile apps and web portals, creating reservation conflicts and fragmented destination itinerary planners.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                  THE SOLUTION & IMPACT
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Engineered unified cross-platform booking flows with real-time seat availability, dynamic custom tour package builder, and offline-capable schedule caching.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {bentoProjects[6].tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveProject(bentoProjects[6])}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
              >
                <span>READ CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {bentoProjects[6].githubUrl && (
                <a
                  href={bentoProjects[6].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional Directory Showcase Trigger Button */}
      {onOpenAllProjects && (
        <div className="pt-12 pb-4 flex flex-col items-center justify-center text-center space-y-3">
          <p className="text-xs font-mono text-neutral-400">
            Looking for all client systems, streaming engines, and commercial platforms?
          </p>
          <button
            onClick={onOpenAllProjects}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>View All 7 Systems in Dedicated Directory</span>
            <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* ========================================================
          EXPERIENCE & CAREER JOURNEY SECTION: EDITORIAL TIMELINE
         ======================================================== */}
      <section id="experience" className="space-y-10 pt-16 sm:pt-24 select-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
              <Briefcase className="w-3.5 h-3.5 text-orange-400" />
              <span>CAREER JOURNEY & TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
              Demonstrated engineering progression across enterprise full-stack web applications, real-time distributed interfaces, and creative spatial 3D systems.
            </p>
          </div>
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300">
            2024 — Present
          </div>
        </div>

        {/* Modern Editorial Timeline Rows (Direct Canvas, No Segmented Cards) */}
        <div className="relative pl-6 sm:pl-10 space-y-6 sm:space-y-8">
          {/* Subtle Vertical Guiding Line connecting the milestones on the left */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-px bg-gradient-to-b from-orange-500 via-amber-500/30 to-white/10 pointer-events-none" />

          {portfolioData.about.timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-2xl p-5 sm:p-7 border-l-2 border-transparent hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/10 hover:via-amber-500/5 hover:to-transparent"
            >
              {/* Timeline Marker Dot on Left Guiding Line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-7 -translate-y-1/2 flex items-center justify-center">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    item.current
                      ? 'bg-orange-500 border-white/80 shadow-[0_0_14px_rgba(249,115,22,0.85)] scale-110'
                      : 'bg-[#140a06] border-orange-400/60 group-hover:border-orange-400 group-hover:scale-110'
                  }`}
                />
              </div>

              {/* Row Grid: Left Year/Status | Center Role & Impact | Right Minimalist Tags */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                {/* 1. Left Column: Year & Status Badge */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-lg sm:text-xl font-black tracking-wider text-white group-hover:text-orange-300 transition-colors">
                      {item.year}
                    </span>
                    {item.current ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ACTIVE FOCUS
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-neutral-400 px-2.5 py-0.5 rounded-full bg-white/[0.04]">
                        MILESTONE
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-orange-400/90 tracking-tight">
                    {item.subtitle}
                  </p>
                </div>

                {/* 2. Center/Main Column: High-Contrast Role Title & Impact */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-orange-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* 3. Right Column: Key Tech Tags as Minimalist, Borderless Pill Tags */}
                <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end pt-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-zinc-400 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          TECHNICAL SKILLS & CORE STACK SECTION
         ======================================================== */}
      <section id="skills" className="space-y-10 pt-16 sm:pt-24 relative">
        <span id="services" className="absolute -top-24" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
              <Cpu className="w-3.5 h-3.5 text-orange-400" />
              <span>CAPABILITIES & ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Technical Skills & Stack
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
              Modern full-stack toolchain calibrated for 60 FPS fluidity, strict TypeScript typing, and resilient high-throughput architectures.
            </p>
          </div>
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300">
            {portfolioData.techStack.length} Technologies Indexed
          </div>
        </div>

        {/* Core Stack Pills Strip */}
        <div className="flex flex-wrap items-center gap-2.5 p-4 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold px-2">
            CORE STACK:
          </span>
          {portfolioData.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-orange-500/15 border border-white/10 hover:border-orange-500/40 text-xs font-mono font-medium text-neutral-200 hover:text-orange-300 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 3 Skill Categorized Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((cat, cIdx) => (
            <motion.div
              key={cIdx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {cIdx === 0 && <Layers className="w-5 h-5" />}
                      {cIdx === 1 && <Sparkles className="w-5 h-5" />}
                      {cIdx === 2 && <Terminal className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {cat.skills.length} Specializations
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-200 font-medium">{skill.name}</span>
                        <span className="text-orange-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-neutral-400 font-sans line-clamp-1">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          PERSONAL PROFILE & ABOUT SECTION
         ======================================================== */}
      <section id="about" className="space-y-10 pt-16 sm:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
              <User className="w-3.5 h-3.5 text-orange-400" />
              <span>DOSSIER & PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              About Yasir Khokhar
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
              Creative technologist, spatial web specialist, and full-stack software engineer dedicated to crafting transformative digital products.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{portfolioData.about.status}</span>
          </div>
        </div>

        {/* Profile Card & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Bio Card (2-Cols) */}
          <div className="lg:col-span-2 rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-white/5">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shrink-0 shadow-lg">
                <img
                  src={profilePic}
                  alt={portfolioData.about.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  <span>{portfolioData.about.name}</span>
                  <span className="text-xs font-mono text-orange-400">
                    [@{portfolioData.about.handle}]
                  </span>
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-0.5">
                  {portfolioData.about.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-sans mt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{portfolioData.about.location}</span>
                </div>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {portfolioData.about.bio.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Stats Matrix (1-Col) */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {portfolioData.about.stats.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-orange-500/30 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-center space-y-1.5 transition-all shadow-lg"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {stat.value}
                </span>
                <span className="text-xs font-sans text-neutral-400">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophies Strip */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
            <Compass className="w-4 h-4 text-orange-400" />
            <span>CORE ARCHITECTURAL PHILOSOPHIES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.about.philosophies.map((phil, pIdx) => (
              <div
                key={pIdx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-neutral-300 font-light"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{phil}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT, SOCIAL & RESUME SECTION
         ======================================================== */}
      <section id="contact" className="space-y-10 pt-16 sm:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>CONNECT & INITIATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
              Reach out directly for freelance contracts, full-time engineering inquiries, or spatial web collaborations.
            </p>
          </div>
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300">
            Fast Response Within 24h
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Email */}
          <div className="rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-orange-500/40 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl transition-all">
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 w-fit">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Email Direct</h3>
              <p className="text-xs text-neutral-400 font-mono break-all">
                khokharyasir749@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-medium text-white transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href="mailto:khokharyasir749@gmail.com"
                className="p-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black transition-colors"
                title="Send Email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Direct */}
          <a
            href="https://wa.me/923280790704"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-emerald-500/40 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                +92 328 0790704
              </p>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 pt-2 border-t border-white/5">
              <span>Open Direct Chat</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 3: Social & Repositories */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-white/5 text-neutral-300 w-fit">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Social Profiles</h3>
              <p className="text-xs text-neutral-400 font-sans">
                Explore source repositories and professional connections.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5">
              <a
                href="https://github.com/khokharyasir749"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-mono text-neutral-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-neutral-400" />
                  <span>GitHub @khokharyasir749</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href="https://linkedin.com/in/yasirkhokhar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-mono text-neutral-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn /yasirkhokhar</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Card 4: Official CV & Resume Link */}
          <div className="relative rounded-3xl bg-gradient-to-b from-orange-500/10 via-white/[0.03] to-white/[0.02] border border-orange-500/40 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl shadow-orange-950/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/15 rounded-full blur-[60px] pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <div className="p-3 rounded-2xl bg-orange-500/20 text-orange-400 w-fit border border-orange-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block font-bold">
                  OFFICIAL DOSSIER
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Resume / CV
                </h3>
              </div>
              <p className="text-xs text-neutral-300 font-light">
                Verified enterprise credentials, client references, and technical stack.
              </p>
            </div>
            <a
              href="mailto:khokharyasir749@gmail.com?subject=Resume%20Request%20-%20Yasir%20Khokhar"
              className="relative z-10 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white hover:bg-neutral-100 text-black font-semibold text-xs transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-95"
              title="Request Yasir Khokhar's Resume"
            >
              <span>Request Resume</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Case Study Modal for All 7 Projects */}
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
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                    PROJECT {activeProject.number}
                  </span>
                  <span className="text-xs font-mono text-orange-400 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    {activeProject.category}
                  </span>
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
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Key Features Checklist */}
              {activeProject.features && (
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                    ARCHITECTURAL CAPABILITIES & HIGHLIGHTS
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

              {/* Tech Stack Pills & Action Links */}
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
