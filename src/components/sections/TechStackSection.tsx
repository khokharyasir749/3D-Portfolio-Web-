import React from 'react';
import { TechSpheresGroup } from '../canvas/TechSpheresGroup';

export const TechStackSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-10 px-4 sm:px-8 lg:px-12 select-none max-w-[1400px] mx-auto relative pointer-events-auto">
      {/* Ambient Side Accents & Radial Lighting */}
      <div className="absolute -left-28 top-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -right-28 bottom-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Title, Section Index Chip & Subtitle */}
      <div className="text-center space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-600 dark:text-purple-300 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>[ 06 // TECHSTACK ]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
          MY TECHSTACK
        </h2>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto font-sans tracking-wide">
          Hover and drag across the floating spheres to inspect technologies.
        </p>
      </div>

      {/* Expanded Canvas Container: Full Widescreen Interactive Physics Matrix */}
      <div className="h-[65vh] w-full max-w-[1400px] mx-auto relative flex items-center justify-center my-auto z-10">
        <TechSpheresGroup />
      </div>

      {/* Bottom Status Tag */}
      <div className="text-center text-[11px] font-mono text-zinc-500 dark:text-zinc-400 tracking-widest uppercase flex items-center justify-center gap-2 relative z-10">
        <span className="w-1 h-1 rounded-full bg-cyan-400" />
        <span>PHYSICS ENGINE • INTERACTIVE WEBGL MATRIX</span>
        <span className="w-1 h-1 rounded-full bg-purple-400" />
      </div>
    </div>
  );
};

export default TechStackSection;
