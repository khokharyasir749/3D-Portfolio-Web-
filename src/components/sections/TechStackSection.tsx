import React from 'react';
import { TechSpheresGroup } from '../canvas/TechSpheresGroup';

export const TechStackSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-10 select-none max-w-none relative pointer-events-auto">
      {/* Ambient Side Accents & Radial Lighting */}
      <div className="absolute -left-28 top-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -right-28 bottom-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Title, Section Index Chip & Subtitle */}
      <div className="text-center space-y-2 relative z-10">
        <span className="text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-bold mb-2 block">
          SKILLS & TECHNOLOGIES
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
          MY TECHSTACK
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto font-sans tracking-wide">
          Hover and drag across the floating spheres to inspect technologies.
        </p>
      </div>

      {/* Expanded Canvas Container: Full Widescreen Interactive Physics Matrix */}
      <div className="h-[65vh] w-full max-w-none relative flex items-center justify-center my-auto z-10">
        <TechSpheresGroup />
      </div>

      {/* Bottom Status Tag */}
      <div className="text-center text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 tracking-widest uppercase flex items-center justify-center gap-2 relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>PHYSICS ENGINE • INTERACTIVE WEBGL MATRIX</span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
      </div>
    </div>
  );
};

export default TechStackSection;
