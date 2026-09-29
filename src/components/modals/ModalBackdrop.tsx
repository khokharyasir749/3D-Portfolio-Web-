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
  badgeColor = 'text-[#E6F4F1] border-[#2C665D]/30 bg-[#25524B]/50',
  onClose,
  children,
}) => {
  // Lock body scroll and close on ESC key
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Nordic Modal Box */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-zinc-900 dark:text-[#E6F4F1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-50 dark:bg-[#132B27] border-b border-zinc-200 dark:border-[#25524B] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1D5A50] dark:bg-[#2C665D]" />
            <h2 className="font-bold text-lg md:text-xl text-[#0F2420] dark:text-[#E6F4F1] tracking-wider flex items-center gap-2.5">
              <span>{title}</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${badgeColor}`}>
                {badge}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-500 dark:text-[#E6F4F1]/60 hidden sm:inline-block">
              [ESC] TO EXIT
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-[#0A1312] dark:hover:bg-[#25524B] dark:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 text-zinc-800 dark:text-[#E6F4F1] font-sans custom-scrollbar">
          {children}
        </div>

        {/* Decorative Bottom Footer Bar */}
        <div className="px-6 py-2.5 bg-zinc-50 dark:bg-[#0A1312] border-t border-zinc-200 dark:border-[#25524B] flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-[#E6F4F1]/60 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] animate-pulse" />
            <span>SECURE TERMINAL // ACTIVE</span>
          </div>
          <div>DEVELOPER PORTFOLIO</div>
        </div>
      </div>
    </div>
  );
};
