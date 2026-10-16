import React, { useState } from 'react';
import {
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

export const BentoGridV2: React.FC = () => {
  const [activeProject, setActiveProject] = useState<BentoProject | null>(null);
  const [bithubVariant, setBithubVariant] = useState<'bithub' | 'rag'>('bithub');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khokharyasir749@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // STRICT 1 to 7 sequential projects matching images currently in public/
  const bentoProjects: BentoProject[] = [
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

  return (
    <section id="projects" className="space-y-10 pt-10 select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>NUMBERED SHOWCASE (01 — 07)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Featured Systems
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
            Exact 7 verified production projects in sequential order, matching high-resolution system mockups and architecture telemetry.
          </p>
        </div>

        <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#141418] border border-white/10 text-neutral-300">
          7 Production Systems Loaded
        </div>
      </div>

      {/* Sequential Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ========================================================
            PROJECT 01: BITHUB (Large 2-col card on desktop)
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[0])}
          className="group relative md:col-span-2 lg:col-span-2 rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-orange-600/15 transition-colors" />

          {/* Watermark Number */}
          <div className="absolute top-4 right-8 font-black text-7xl sm:text-8xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            01
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                  PROJECT 01
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {bentoProjects[0].category}
                </span>
              </div>

              {/* Toggle for BITHUB vs RAG SYSTEM mockups */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10 text-[11px] font-mono"
              >
                <button
                  onClick={() => setBithubVariant('bithub')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    bithubVariant === 'bithub'
                      ? 'bg-orange-500 text-black font-bold shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  BITEHUB
                </button>
                <button
                  onClick={() => setBithubVariant('rag')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    bithubVariant === 'rag'
                      ? 'bg-orange-500 text-black font-bold shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  RAG SYSTEM
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                {bithubVariant === 'bithub' ? bentoProjects[0].title : 'Lonetex — Enterprise RAG & Knowledge Intelligence Platform'}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 max-w-2xl font-light mt-1">
                {bithubVariant === 'bithub'
                  ? bentoProjects[0].description
                  : 'A multi-tenant enterprise RAG platform integrating Qdrant 384-dimensional vector indexing, role-based document clearance, and zero-leakage compliance auditing.'}
              </p>
            </div>

            {/* High Resolution Mockup Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#09090c] border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bithubVariant === 'bithub' ? bentoProjects[0].image : bentoProjects[0].altImage}
                alt={bentoProjects[0].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-200">
                <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>{bentoProjects[0].metrics}</span>
                </div>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white">
                  VIEW CASE STUDY →
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 relative z-10 mt-4">
            {bentoProjects[0].tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 02: NETFLIX CLONE
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[1])}
          className="group relative rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 right-6 font-black text-6xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            02
          </div>

          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                PROJECT 02
              </span>
              <span className="text-[11px] font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                STREAMING UI
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {bentoProjects[1].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {bentoProjects[1].tagline}
              </p>
            </div>

            <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bentoProjects[1].image}
                alt={bentoProjects[1].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4 relative z-10">
            {bentoProjects[1].tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 03: SILAGE / SILLAGE
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[2])}
          className="group relative rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 right-6 font-black text-6xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            03
          </div>

          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                PROJECT 03
              </span>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                LUXURY ATELIER
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {bentoProjects[2].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {bentoProjects[2].tagline}
              </p>
            </div>

            <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bentoProjects[2].image}
                alt={bentoProjects[2].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4 relative z-10">
            {bentoProjects[2].tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 04: LONETEX (Large 2-col card on desktop)
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[3])}
          className="group relative md:col-span-2 lg:col-span-2 rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 right-8 font-black text-7xl sm:text-8xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            04
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                  PROJECT 04
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {bentoProjects[3].category}
                </span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white/5 group-hover:bg-orange-500/20 text-neutral-400 group-hover:text-orange-400 border border-white/10 transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                {bentoProjects[3].title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 max-w-2xl font-light mt-1">
                {bentoProjects[3].description}
              </p>
            </div>

            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#09090c] border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bentoProjects[3].image}
                alt={bentoProjects[3].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-200">
                <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>{bentoProjects[3].metrics}</span>
                </div>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white">
                  VIEW CASE STUDY →
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 relative z-10 mt-4">
            {bentoProjects[3].tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 05: INVENTORY SYSTEM
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[4])}
          className="group relative rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 right-6 font-black text-6xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            05
          </div>

          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                PROJECT 05
              </span>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                ERP / POS
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {bentoProjects[4].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {bentoProjects[4].tagline}
              </p>
            </div>

            <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bentoProjects[4].image}
                alt={bentoProjects[4].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4 relative z-10">
            {bentoProjects[4].tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 06: PHARMACY MANAGEMENT
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[5])}
          className="group relative rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 right-6 font-black text-6xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            06
          </div>

          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                PROJECT 06
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                HEALTHCARE POS
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                {bentoProjects[5].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                {bentoProjects[5].tagline}
              </p>
            </div>

            <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bentoProjects[5].image}
                alt={bentoProjects[5].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4 relative z-10">
            {bentoProjects[5].tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 07: FLIGHT ONE (2-col card on desktop)
           ======================================================== */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveProject(bentoProjects[6])}
          className="group relative md:col-span-2 lg:col-span-2 rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 right-8 font-black text-7xl sm:text-8xl text-white/[0.03] group-hover:text-orange-500/10 transition-colors pointer-events-none select-none z-0">
            07
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-bold">
                  PROJECT 07
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {bentoProjects[6].category}
                </span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white/5 group-hover:bg-orange-500/20 text-neutral-400 group-hover:text-orange-400 border border-white/10 transition-all">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-orange-300 transition-colors">
                {bentoProjects[6].title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 max-w-2xl font-light mt-1">
                {bentoProjects[6].description}
              </p>
            </div>

            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#09090c] border border-white/10 group-hover:border-orange-500/30 transition-colors">
              <img
                src={bentoProjects[6].image}
                alt={bentoProjects[6].title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-200">
                <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                  <span>{bentoProjects[6].metrics}</span>
                </div>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 font-bold text-white">
                  VIEW CASE STUDY →
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 relative z-10 mt-4">
            {bentoProjects[6].tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          EXPERIENCE & CAREER JOURNEY SECTION
         ======================================================== */}
      <section id="experience" className="space-y-10 pt-14 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
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
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#141418] border border-white/10 text-neutral-300">
            2024 — Present
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {portfolioData.about.timeline.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-3xl p-6 sm:p-7 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
                item.current
                  ? 'bg-gradient-to-b from-[#16161e] to-[#0e0e13] border-orange-500/40 shadow-orange-950/20'
                  : 'bg-[#0e0e12]/90 border-white/10 hover:border-white/20'
              }`}
            >
              {item.current && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none" />
              )}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200">
                    {item.year}
                  </span>
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE FOCUS
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-neutral-400">
                      MILESTONE
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-orange-400/90 mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-300 font-light mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/5 mt-5 relative z-10">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================
          TECHNICAL SKILLS & CORE STACK SECTION
         ======================================================== */}
      <section id="skills" className="space-y-10 pt-14 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
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
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#141418] border border-white/10 text-neutral-300">
            {portfolioData.techStack.length} Technologies Indexed
          </div>
        </div>

        {/* Core Stack Pills Strip */}
        <div className="flex flex-wrap items-center gap-2.5 p-4 rounded-3xl bg-[#0e0e12]/90 border border-white/10 backdrop-blur-xl">
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
              className="rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl"
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
      <section id="about" className="space-y-10 pt-14 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
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
          <div className="lg:col-span-2 rounded-3xl bg-[#0e0e12]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-xl">
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
                className="rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/30 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-center space-y-1.5 transition-all shadow-lg"
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
        <div className="rounded-3xl bg-[#0e0e12]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-4 shadow-xl">
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
      <section id="contact" className="space-y-10 pt-14 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
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
          <div className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#141418] border border-white/10 text-neutral-300">
            Fast Response Within 24h
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Email */}
          <div className="rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-orange-500/40 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl">
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
            className="group rounded-3xl bg-[#0e0e12]/90 border border-white/10 hover:border-emerald-500/40 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl transition-all"
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
          <div className="rounded-3xl bg-[#0e0e12]/90 border border-white/10 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl">
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
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1b1510] to-[#0e0e12] border border-orange-500/40 p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl shadow-orange-950/20 overflow-hidden">
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
