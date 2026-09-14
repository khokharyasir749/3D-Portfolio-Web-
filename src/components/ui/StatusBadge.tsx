import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatusBadgeProps {
  onNavigate: (sectionId: string) => void;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-30 pointer-events-auto select-none">
      <button
        onClick={() => onNavigate('contact')}
        className="group px-3.5 py-2 rounded-full bg-[#111116]/80 hover:bg-[#181822] border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-xl cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-sans text-[11px] font-medium tracking-[0.14em] text-slate-300 group-hover:text-white transition-colors uppercase">
          AVAILABLE FOR WORK
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};

export default StatusBadge;
