import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Lighting } from './Lighting';
import { GlobalCameraController } from './GlobalCameraController';

interface GlobalSceneCanvasProps {
  scrollProgress: number;
  theme?: 'dark' | 'light';
}

export const GlobalSceneCanvas: React.FC<GlobalSceneCanvasProps> = ({
  scrollProgress,
  theme = 'dark',
}) => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{
          position: [0.0, 0.1, 4.4],
          fov: 36,
          near: 0.1,
          far: 50,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full pointer-events-auto"
      >
        {/* Dynamic Studio Background: #080808 (Dark) or #f8fafc (Light) */}
        <color attach="background" args={[theme === 'light' ? '#f8fafc' : '#080808']} />

        <Suspense fallback={null}>
          {/* Subtle Ambient City Studio Reflections */}
          <Environment preset="city" environmentIntensity={theme === 'light' ? 0.35 : 0.15} />

          {/* Balanced 3-Point Studio Lighting */}
          <Lighting theme={theme} />

          {/* Dynamic Scroll-Interpolated Camera Spline */}
          <GlobalCameraController scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobalSceneCanvas;
