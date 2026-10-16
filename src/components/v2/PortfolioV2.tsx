import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Layers,
  Smartphone,
  Globe,
  Database,
  ExternalLink,
  Github,
  Zap,
} from 'lucide-react';

export const PortfolioV2: React.FC = () => {
  const { about, projects, contacts } = portfolioData;
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'projects' | 'about'>('home');

  useEffect(() => {
    document.title = 'YASIR KHOKHAR — Modern Bento Portfolio (V2)';
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-orange-500/30 selection:text-orange-200 font-sans antialiased relative overflow-x-hidden">
      {/* Background ambient warm gradient glow matching Dribbble reference */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-orange-600/15 via-amber-700/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-orange-950/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff08_1px,transparent_0)] [background-size:24px_24px] opacity-60" />
      </div>

      {/* Floating Modern Header / Navbar (Dribbble Ref) */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/v2"
            className="flex items-center gap-2 group tracking-tight font-black text-lg sm:text-xl text-white uppercase"
          >
            <span>YASIR</span>
            <span className="font-light italic text-orange-400 group-hover:text-orange-300 transition-colors">
              KHOKHAR
            </span>
          </a>

          {/* Centered Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#18181b]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 shadow-2xl shadow-black/50">
            {(['home', 'services', 'projects', 'about'] as const).map((tab) => (
              <a
                key={tab}
                href={`#${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`capitalize text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full transition-all ${
                  activeTab === tab
                    ? 'bg-white/10 text-white shadow-inner'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </a>
            ))}
          </nav>

          {/* Top Right Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 pt-28 sm:pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
        {/* HERO SECTION (Faithfully matching Dribbble Reference) */}
        <section id="home" className="relative rounded-3xl bg-[#121215]/60 border border-white/10 backdrop-blur-md p-6 sm:p-12 overflow-hidden shadow-2xl min-h-[560px] flex flex-col justify-between">
          {/* Typographic Massive Background Name */}
          <div className="absolute inset-x-0 top-12 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
            <h1 className="text-[12vw] sm:text-[10rem] font-black uppercase tracking-tighter text-white/[0.04] leading-none whitespace-nowrap">
              YASIR KHOKHAR
            </h1>
          </div>

          {/* Hero Portrait & Warm Radial Lighting */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] bg-gradient-to-t from-orange-600/20 via-orange-500/10 to-transparent rounded-full blur-[90px]" />
            <img
              src="/mein professional profile 2.jpeg"
              alt="Yasir Khokhar"
              className="absolute bottom-0 h-[85%] max-h-[580px] object-cover object-top opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
            />
          </div>

          {/* Left Hero Statement & Pitch */}
          <div className="relative z-10 max-w-md mt-auto sm:my-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <p className="text-xl sm:text-2xl font-light text-neutral-200 leading-relaxed tracking-wide">
              I create clean, modern interfaces and scalable full-stack web applications that turn user needs into business growth.
            </p>
          </div>

          {/* Right Glowing Amber CTA */}
          <div className="relative z-10 sm:absolute sm:right-12 sm:bottom-28 mt-8 sm:mt-0 flex justify-start sm:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold text-sm sm:text-base hover:bg-neutral-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_50px_rgba(249,115,22,0.45)] hover:shadow-[0_0_70px_rgba(249,115,22,0.65)]"
            >
              <span>Book a free call</span>
              <ArrowUpRight className="w-5 h-5 text-black" />
            </a>
          </div>

          {/* Bottom Skill / Service Pills (matching Dribbble Reference footer pill strip) */}
          <div className="relative z-10 pt-8 border-t border-white/5 mt-8 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3 shrink-0">
              {[
                { name: 'Full-Stack Apps', icon: Globe },
                { name: 'Web Applications', icon: Code2, active: true },
                { name: 'UI/UX Engineering', icon: Layers },
                { name: '3D WebGL / Three.js', icon: Sparkles },
                { name: 'REST APIs & Sockets', icon: Database },
                { name: 'Mobile Responsive', icon: Smartphone },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-xs sm:text-sm font-medium backdrop-blur-md transition-all whitespace-nowrap ${
                      item.active
                        ? 'bg-neutral-900/90 border-orange-500/40 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.15)]'
                        : 'bg-neutral-900/50 border-white/10 text-neutral-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 ${
                        item.active ? 'text-orange-400' : 'text-orange-400/70'
                      }`}
                    />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENTO GRID PROJECTS SHOWCASE */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-bold block mb-1 font-mono">
                SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                Featured Case Studies
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 font-mono">
              Displaying {projects.length} Production Systems
            </div>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 6).map((proj, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <div
                  key={proj.id}
                  className={`group relative rounded-3xl bg-[#121215]/70 border border-white/10 hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7 backdrop-blur-md shadow-xl ${
                    isLarge ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Subtle top metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      PROJECT {proj.number}
                    </span>
                    {proj.featured && (
                      <span className="text-xs font-mono text-orange-400 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                        <Sparkles className="w-3 h-3" />
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* High Quality Project Preview Image */}
                  <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 mb-5 group-hover:border-orange-500/30 transition-colors">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    {proj.metrics && (
                      <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-neutral-200 bg-neutral-900/90 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md truncate">
                        ⚡ {proj.metrics}
                      </div>
                    )}
                  </div>

                  {/* Tags & Action Links */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 transition-colors"
                          title="Open Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SERVICES & PHILOSOPHY BENTO ROW */}
        <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-[#121215]/70 border border-white/10 p-7 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">High-Performance Engineering</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Fluid 60 FPS transitions, zero unnecessary re-renders, and optimized bundle sizes tailored for instantaneous user feedback.
              </p>
            </div>
            <div className="text-xs font-mono text-orange-400/80 pt-2 border-t border-white/5">
              React • Next.js • Vite • TypeScript
            </div>
          </div>

          <div className="rounded-3xl bg-[#121215]/70 border border-white/10 p-7 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Creative 3D & Micro-Interactions</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Spatial Three.js WebGL scenes, interactive canvas shaders, and scroll-linked physics that bring web applications to life.
              </p>
            </div>
            <div className="text-xs font-mono text-orange-400/80 pt-2 border-t border-white/5">
              Three.js • R3F • Framer Motion • WebGL
            </div>
          </div>

          <div className="rounded-3xl bg-[#121215]/70 border border-white/10 p-7 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Scalable Backend Pipelines</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                REST & WebSocket APIs, persistent SQL/NoSQL storage, role-based access security, and real-time synchronization.
              </p>
            </div>
            <div className="text-xs font-mono text-orange-400/80 pt-2 border-t border-white/5">
              Node.js • Express • PostgreSQL • MongoDB
            </div>
          </div>
        </section>

        {/* ABOUT & TIMELINE ROW */}
        <section id="about" className="rounded-3xl bg-[#121215]/70 border border-white/10 p-8 sm:p-10 backdrop-blur-md space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block mb-1">
                BACKGROUND & JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                About Yasir Khokhar
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                {about.location}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {about.bio.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {about.stats.map((st, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xl sm:text-2xl font-black text-white">{st.value}</div>
                    <div className="text-xs font-bold uppercase text-orange-400 mt-0.5">{st.label}</div>
                    <div className="text-[11px] text-neutral-400">{st.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-bold">
                Career Milestones
              </h4>
              <div className="space-y-3">
                {about.timeline.map((entry, tIdx) => (
                  <div key={tIdx} className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-400 font-mono">{entry.year}</span>
                      {entry.current && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-white">{entry.title}</div>
                    <div className="text-xs text-neutral-400">{entry.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & GET IN TOUCH */}
        <section id="contact" className="rounded-3xl bg-gradient-to-b from-[#18181d] to-[#0f0f13] border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
              START A CONVERSATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Let's Build Something Exceptional
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Have a high-impact project, an enterprise application, or a 3D web experience in mind? Reach out and let's turn your vision into reality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {contacts.map((contact, cIdx) => (
                <a
                  key={cIdx}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 text-neutral-200 hover:text-white transition-all text-xs sm:text-sm font-medium"
                >
                  <span>{contact.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Mode Switcher Badge (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/15 backdrop-blur-xl shadow-2xl text-xs font-mono transition-all hover:scale-105 active:scale-95"
          title="Return to the original 3D Portfolio version"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>← Back to V1 3D Portfolio</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioV2;
