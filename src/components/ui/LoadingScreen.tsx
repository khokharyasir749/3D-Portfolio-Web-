import React, { useEffect, useState } from 'react';
import { Cpu, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const statuses = [
    'BOOTING CYBERPUNK 3D CORE...',
    'INITIALIZING WEBGL 2.0 PIPELINE...',
    'COMPILING ISOMETRIC GEOMETRY...',
    'CALIBRATING EMISSIVE SHADERS...',
    'SYSTEM READY // MATRIX ACTIVE',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => onComplete(), 700);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        return next > 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setStatusIndex(0);
    else if (progress < 50) setStatusIndex(1);
    else if (progress < 75) setStatusIndex(2);
    else if (progress < 95) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070910] text-slate-100 transition-opacity duration-500 select-none ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Cyberpunk Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

      {/* Main Center Console */}
      <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center space-y-6">
        {/* Animated Cyber Core Icon */}
        <div className="relative">
          <div className="w-16 h-16 rounded-sm bg-gradient-to-tr from-cyan-500 via-pink-500 to-yellow-400 p-0.5 animate-pulse shadow-neon-cyan">
            <div className="w-full h-full bg-[#0a0c16] rounded-sm flex items-center justify-center text-cyan-400">
              <Cpu className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          </div>
          <div className="absolute -top-1 -right-1">
            <Zap className="w-4 h-4 text-yellow-400 animate-bounce" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="font-cyber font-bold text-2xl tracking-widest text-slate-100">
            DEV ROOM // 2077
          </h1>
          <p className="font-code text-xs text-cyan-400">
            SPATIAL 3D DEVELOPER PORTFOLIO
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between text-xs font-code text-slate-400">
            <span className="text-cyan-300 font-semibold">{statuses[statusIndex]}</span>
            <span className="text-pink-400 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-700/80 overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 transition-all duration-150 shadow-neon-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom System Telemetry */}
        <div className="text-[11px] font-code text-slate-500 flex items-center gap-3">
          <span>ORTHOGRAPHIC ENGINE</span>
          <span>•</span>
          <span>THREE.JS & R3F</span>
          <span>•</span>
          <span>60 FPS</span>
        </div>
      </div>
    </div>
  );
};
