import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { GlobalSceneCanvas } from './components/canvas/GlobalSceneCanvas';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhatIDoSection } from './components/sections/WhatIDoSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { WorkShowcase } from './components/sections/WorkShowcase';
import { TechStackSection } from './components/sections/TechStackSection';
import { ContactSection } from './components/sections/ContactSection';
import { OverlayHUD } from './components/ui/OverlayHUD';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { DevTerminal } from './components/ui/DevTerminal';
import { Footer } from './components/ui/Footer';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { audioManager } from './utils/audioSystem';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const lenisRef = useRef<Lenis | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  // Safety timer to guarantee loading screen always dismisses
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    audioManager.playClickSound();
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll Restoration Control & Reset to Top on Page Load / Refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Smooth scroll to target section ID using Lenis momentum engine
  const handleNavigate = (sectionId: string) => {
    audioManager.playClickSound();
    const targetElement = document.getElementById(sectionId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        offset: 0,
        duration: 1.0,
      });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleAudio = () => {
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
  };

  // Lenis Smooth Scroll Engine & Throttled Scroll Spy
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'what-i-do',
      'experience',
      'work',
      'tech-stack',
      'contact',
    ];

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    try {
      lenis = new Lenis({
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        lerp: 0.1,
      });

      lenisRef.current = lenis;
      lenis.scrollTo(0, { immediate: true });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      let lastProgress = 0;
      let lastActiveSection = 'hero';
      let ticking = false;

      // Throttled scroll listener to prevent redundant React re-renders on every sub-pixel
      lenis.on('scroll', (e: { scroll: number; limit: number; progress: number }) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            if (Math.abs(e.progress - lastProgress) > 0.003) {
              lastProgress = e.progress;
              setScrollProgress(e.progress);
            }

            const scrollPosition = e.scroll + window.innerHeight * 0.35;
            for (const id of sectionIds) {
              const el = document.getElementById(id);
              if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                  if (lastActiveSection !== id) {
                    lastActiveSection = id;
                    setActiveSectionId(id);
                  }
                  break;
                }
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      });
    } catch (err) {
      console.warn('Lenis smooth scroll initialization warning:', err);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ErrorBoundary name="RootApplication">
      <div className={`w-full min-h-screen relative selection:bg-purple-500 selection:text-white transition-colors duration-500 ${theme === 'light' ? 'bg-[#f8fafc] text-zinc-900' : 'bg-[#080808] text-slate-100'}`}>
        {/* Initialization Loading Splash Screen */}
        {isLoading && (
          <ErrorBoundary name="LoadingScreen" fallback={null}>
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </ErrorBoundary>
        )}

        {/* Single Fixed Full-Screen Background 3D Scene Canvas (Z-Index 0) */}
        <ErrorBoundary name="GlobalSceneCanvas" fallback={null}>
          <GlobalSceneCanvas scrollProgress={scrollProgress} theme={theme} />
        </ErrorBoundary>

        {/* Global Fixed Minimalist HUD */}
        <ErrorBoundary name="OverlayHUD">
          <OverlayHUD
            activeSectionId={activeSectionId}
            onNavigate={handleNavigate}
            isMuted={isMuted}
            onToggleAudio={handleToggleAudio}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />
        </ErrorBoundary>

        {/* Interactive Dev Terminal Console Drawer */}
        <ErrorBoundary name="DevTerminal">
          <DevTerminal
            theme={theme}
            onToggleTheme={handleToggleTheme}
            isMuted={isMuted}
            onToggleAudio={handleToggleAudio}
            onNavigate={handleNavigate}
          />
        </ErrorBoundary>

        {/* Continuous Vertical Scroll Sections Container */}
        <main className="w-full relative z-10 flex flex-col pointer-events-none">
          {/* SECTION 1: HERO */}
          <section
            id="hero"
            className="w-full min-h-screen relative flex items-center justify-center pointer-events-none"
          >
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
              <ErrorBoundary name="HeroSection">
                <HeroSection />
              </ErrorBoundary>
            </div>
          </section>

          {/* SECTION 2: ABOUT ME */}
          <section
            id="about"
            className="w-full min-h-screen relative py-16 sm:py-20 flex flex-col justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
            >
              <ErrorBoundary name="AboutSection">
                <AboutSection />
              </ErrorBoundary>
            </motion.div>
          </section>

          {/* SECTION 3: WHAT I DO / SERVICES */}
          <section
            id="what-i-do"
            className="w-full min-h-screen relative py-16 sm:py-20 flex flex-col justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
            >
              <ErrorBoundary name="WhatIDoSection">
                <WhatIDoSection />
              </ErrorBoundary>
            </motion.div>
          </section>

          {/* SECTION 4: CAREER & EXPERIENCE TIMELINE */}
          <section
            id="experience"
            className="w-full min-h-screen relative py-16 sm:py-20 flex flex-col justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
            >
              <ErrorBoundary name="ExperienceSection">
                <ExperienceSection />
              </ErrorBoundary>
            </motion.div>
          </section>

          {/* SECTION 5: FEATURED WORK & PROJECTS */}
          <section
            id="work"
            className="w-full min-h-screen relative py-16 sm:py-20 flex flex-col justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
            >
              <ErrorBoundary name="WorkShowcase">
                <WorkShowcase />
              </ErrorBoundary>
            </motion.div>
          </section>

          {/* SECTION 6: INTERACTIVE TECH STACK */}
          <section
            id="tech-stack"
            className="w-full min-h-screen relative py-16 sm:py-20 flex flex-col justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
            >
              <ErrorBoundary name="TechStackSection">
                <TechStackSection />
              </ErrorBoundary>
            </motion.div>
          </section>

          {/* SECTION 7: CONTACT & LET'S BUILD TOGETHER */}
          <section
            id="contact"
            className="w-full min-h-screen relative py-12 sm:py-16 flex flex-col justify-center pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12"
            >
              <ErrorBoundary name="ContactSection">
                <ContactSection />
              </ErrorBoundary>
            </motion.div>
          </section>
        </main>

        {/* Comprehensive Luxury Professional Footer */}
        <ErrorBoundary name="Footer">
          <Footer onNavigate={handleNavigate} />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;
