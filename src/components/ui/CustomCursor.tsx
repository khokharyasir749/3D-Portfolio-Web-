import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for trailing neon halo
  const ringX = useSpring(cursorX, { stiffness: 450, damping: 30, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 450, damping: 30, mass: 0.5 });

  useEffect(() => {
    // Detect mobile or touch screen devices
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        'button, a, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover], canvas, summary'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* 1. Trailing Neon Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          scale: isClicked ? 0.82 : 1,
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.85)' : 'rgba(168, 85, 247, 0.7)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'rgba(168, 85, 247, 0.04)',
          boxShadow: isHovered
            ? '0 0 22px rgba(6, 182, 212, 0.55), inset 0 0 10px rgba(168, 85, 247, 0.3)'
            : '0 0 12px rgba(168, 85, 247, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      />

      {/* 2. Precision Center Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-gradient-to-tr from-purple-400 via-indigo-300 to-cyan-300 shadow-[0_0_8px_rgba(168,85,247,0.9)] will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
          scale: isClicked ? 0.6 : isHovered ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.08 }}
      />
    </div>
  );
};

export default CustomCursor;
