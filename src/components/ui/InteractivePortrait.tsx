import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profilePic from '../../assets/profile.jpg';

export const InteractivePortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth cursor tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery responsiveness
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20, mass: 0.8 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20, mass: 0.8 });

  // 3D rotation mapping: mouse offset (-0.5 to +0.5) -> (-10deg to +10deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['20%', '80%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['20%', '80%']);

  // RAF-throttled mouse handler without React state re-renders
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 cursor-pointer select-none [perspective:1000px] group"
    >
      {/* 1. Ambient Radial Purple Glow */}
      <div className="absolute w-72 h-72 sm:w-84 sm:h-84 lg:w-[380px] lg:h-[380px] rounded-full bg-purple-600/15 group-hover:bg-purple-600/30 blur-2xl pointer-events-none -z-10 transition-all duration-700" />

      {/* 2. Floating 3D Tilt Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative group w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full [transform-style:preserve-3d] will-change-transform cursor-pointer"
      >
        {/* Main Circular Portrait Frame */}
        <div className="w-full h-full rounded-full overflow-hidden relative bg-[#08080a] border-[3px] border-purple-500/40 group-hover:border-purple-400 shadow-lg shadow-purple-950/40 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-700 [transform:translateZ(10px)]">
          {/* Authentic Local Profile Portrait with Monochrome-to-Color hover */}
          <img
            src={profilePic}
            alt="Yasir Khokhar"
            className="w-full h-full object-cover object-[center_20%] scale-105 group-hover:scale-110 grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-105 transition-all duration-700 ease-out"
            loading="eager"
          />

          {/* Dynamic Holographic Glare / Light Sheen */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 70%)`,
            }}
            className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700"
          />

          {/* Vignette Rim Shadow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_35px_rgba(0,0,0,0.8)] pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default InteractivePortrait;
