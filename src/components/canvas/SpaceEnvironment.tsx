import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import type * as THREE from 'three';

export const SpaceEnvironment: React.FC = () => {
  const nebulaRingRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  // Slow orbital rotation for cosmic galaxy atmosphere
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (nebulaRingRef.current) {
      nebulaRingRef.current.rotation.y = t * 0.05;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.03;
      outerRingRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.05;
    }
  });

  return (
    <group>
      {/* 1. Deep Cosmic Starfield Background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.5}
        fade={true}
        speed={1.2}
      />

      {/* 2. Cyberpunk Cyan Ambient Sparkles around diorama */}
      <Sparkles
        count={120}
        scale={[18, 12, 18]}
        size={3.2}
        speed={0.4}
        opacity={0.7}
        color="#00f0ff"
      />

      {/* 3. Magenta/Pink Stardust Particle Field */}
      <Sparkles
        count={80}
        scale={[20, 14, 20]}
        size={2.5}
        speed={0.3}
        opacity={0.6}
        color="#ff007f"
      />

      {/* 4. Slow-rotating Cyberpunk Nebula Halo Ring under diorama */}
      <group ref={nebulaRingRef} position={[0, -1.2, 0]}>
        {/* Inner Cyan Orbit Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[9, 9.15, 64]} />
          <meshBasicMaterial
            color="#00f0ff"
            transparent
            opacity={0.4}
            side={2}
          />
        </mesh>

        {/* Outer Magenta Orbit Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
          <ringGeometry args={[12, 12.12, 64]} />
          <meshBasicMaterial
            color="#ff007f"
            transparent
            opacity={0.3}
            side={2}
          />
        </mesh>
      </group>

      {/* 5. Giant Outer Horizon Galaxy Dust Ring */}
      <mesh
        ref={outerRingRef}
        position={[0, -2.5, 0]}
        rotation={[-Math.PI / 2.2, 0, 0]}
      >
        <ringGeometry args={[16, 17.5, 64]} />
        <meshBasicMaterial
          color="#9d00ff"
          transparent
          opacity={0.15}
          side={2}
        />
      </mesh>
    </group>
  );
};
