import React from 'react';
import { TechSpheresGroup } from '../canvas/TechSpheresGroup';

export const TechStackSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-8 md:px-12 lg:px-16 select-none max-w-7xl mx-auto">
      {/* Title, Section Index Chip & Subtitle */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[11px] font-mono text-purple-300 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>[ 06 // TECHSTACK ]</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
          MY TECHSTACK
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-sans tracking-wide">
          Hover and drag across the floating spheres to inspect technologies.
        </p>
      </div>

      {/* Canvas Container: Instant 3D Physics Spheres */}
      <div className="h-[62vh] w-full max-w-6xl mx-auto relative flex items-center justify-center my-auto">
        <TechSpheresGroup />
      </div>

      {/* Bottom Status Tag */}
      <div className="text-center text-[11px] font-mono text-zinc-500 tracking-widest uppercase flex items-center justify-center gap-2">
        <span className="w-1 h-1 rounded-full bg-cyan-400" />
        <span>PHYSICS ENGINE • INTERACTIVE WEBGL MATRIX</span>
        <span className="w-1 h-1 rounded-full bg-purple-400" />
      </div>
    </div>
  );
};

export default TechStackSection;
