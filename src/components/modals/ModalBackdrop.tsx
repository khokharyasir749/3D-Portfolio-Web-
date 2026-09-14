import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalBackdropProps {
  title: string;
  badge: string;
  badgeColor?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  title,
  badge,
  badgeColor = 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
  onClose,
  children,
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Cyberpunk Modal Box */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[88vh] flex flex-col bg-[#0c0f1a]/95 border border-cyan-500/30 rounded-sm shadow-2xl shadow-cyan-950/50 cyber-corners overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Cyber Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121626] border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-neon-cyan" />
            <h2 className="font-cyber font-bold text-lg md:text-xl text-slate-100 tracking-wider flex items-center gap-2.5">
              <span>{title}</span>
              <span className={`text-xs px-2 py-0.5 rounded border font-code ${badgeColor}`}>
                {badge}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-code text-xs text-slate-400 hidden sm:inline-block">
              [ESC] TO EXIT
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-slate-800/80 hover:bg-red-500/20 text-slate-300 hover:text-red-400 border border-slate-700 hover:border-red-500/40 transition-colors cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-200 font-sans custom-scrollbar">
          {children}
        </div>

        {/* Decorative Bottom Cyber Footer Bar */}
        <div className="px-6 py-2.5 bg-[#090b14] border-t border-slate-800 flex items-center justify-between text-[11px] font-code text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>SECURE TERMINAL // ENCRYPTION ACTIVE</span>
          </div>
          <div>CYBERPUNK DEV PORTFOLIO v2.0</div>
        </div>
      </div>
    </div>
  );
};
