import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Lighting } from './Lighting';
import { GlobalCameraController } from './GlobalCameraController';
import { ErrorBoundary } from '../ui/ErrorBoundary';

interface GlobalSceneCanvasProps {
  scrollProgress: number;
  theme?: 'dark' | 'light';
}

// Internal canvas content
const SceneContent: React.FC<GlobalSceneCanvasProps> = ({ scrollProgress, theme }) => {
  return (
    <>
      {/* Dynamic Studio Background: #080808 (Dark) or #f8fafc (Light) */}
      <color attach="background" args={[theme === 'light' ? '#f8fafc' : '#080808']} />

      <Suspense fallback={null}>
        {/* Balanced 3-Point Studio Lighting */}
        <Lighting theme={theme} />

        {/* Dynamic Scroll-Interpolated Camera Spline */}
        <GlobalCameraController scrollProgress={scrollProgress} />
      </Suspense>
    </>
  );
};

export const GlobalSceneCanvas: React.FC<GlobalSceneCanvasProps> = ({
  scrollProgress,
  theme = 'dark',
}) => {
  const [webglSupported, setWebglSupported] = useState(true);

  // Check WebGL availability before mounting Three.js Canvas
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

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
        backgroundColor: theme === 'light' ? '#f8fafc' : '#080808',
      }}
    >
      {webglSupported ? (
        <ErrorBoundary
          name="GlobalSceneCanvas"
          fallback={
            <div
              className="w-full h-full"
              style={{ backgroundColor: theme === 'light' ? '#f8fafc' : '#080808' }}
            />
          }
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
            onCreated={({ gl }) => {
              gl.setClearColor(theme === 'light' ? '#f8fafc' : '#080808', 1);
            }}
            className="w-full h-full pointer-events-auto"
          >
            <SceneContent scrollProgress={scrollProgress} theme={theme} />
          </Canvas>
        </ErrorBoundary>
      ) : (
        <div
          className="w-full h-full"
          style={{ backgroundColor: theme === 'light' ? '#f8fafc' : '#080808' }}
        />
      )}
    </div>
  );
};

export default GlobalSceneCanvas;
