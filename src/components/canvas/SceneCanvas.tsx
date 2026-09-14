import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { CameraController } from './CameraController';
import { Lighting } from './Lighting';
import { RoomShell } from './RoomShell';
import { BattleStation } from './BattleStation';
import { Hotspots } from './Hotspots';
import { SpaceEnvironment } from './SpaceEnvironment';
import type { SectionType } from '../../data/portfolioData';

interface SceneCanvasProps {
  isRestricted?: boolean;
  postProcessingEnabled?: boolean;
  activeSection?: SectionType;
  onSelectSection: (section: NonNullable<SectionType>) => void;
}

export const SceneCanvas: React.FC<SceneCanvasProps> = ({
  activeSection = null,
  onSelectSection,
}) => {
  return (
    <div
      className="w-full h-full fixed inset-0 overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    >
      <Canvas
        camera={{
          position: [14, 11, 14],
          fov: 28,
          near: 0.1,
          far: 500,
        }}
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full"
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        {/* Deep space background color */}
        <color attach="background" args={["#05060a"]} />

        <Suspense fallback={null}>
          {/* Deep Cosmic Galaxy Atmosphere (Stars, Sparkles, Orbit Rings) */}
          <SpaceEnvironment />

          {/* Atmospheric Lighting with Desk Spotlight & Neon Accents */}
          <Lighting />
          
          {/* Cyberpunk Isometric Room Shell */}
          <RoomShell />

          {/* Centered & Scaled 1.35x Battle-Station Rig facing front */}
          <BattleStation />

          {/* 3D Interactive Hotspot Markers */}
          <Hotspots onSelectSection={onSelectSection} />

          {/* Soft Grounding Contact Shadows */}
          <ContactShadows
            position={[0, -0.82, 0]}
            opacity={0.75}
            scale={24}
            blur={2.5}
            far={4}
            color="#000000"
          />

          {/* OrbitControls with 360 rotation */}
          <CameraController activeSection={activeSection} />
        </Suspense>
      </Canvas>
    </div>
  );
};
