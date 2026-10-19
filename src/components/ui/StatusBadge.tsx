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
        className="group px-3.5 py-2 rounded-full bg-[#132B27]/90 hover:bg-[#132B27] border border-[#25524B] hover:border-[#C58A55] backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-xl cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-[#C58A55]" />
        <span className="font-sans text-[11px] font-medium tracking-[0.14em] text-[#E6F4F1] transition-colors uppercase">
          AVAILABLE FOR WORK
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#E6F4F1]/70 group-hover:text-[#C58A55] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};

export default StatusBadge;
