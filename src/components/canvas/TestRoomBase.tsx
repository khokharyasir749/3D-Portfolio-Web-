import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import { Grid, Edges } from '@react-three/drei';

export const TestRoomBase: React.FC = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Subtle floating and rotating animation for the test cube
  useFrame((state) => {
    if (cubeRef.current) {
      const t = state.clock.getElapsedTime();
      cubeRef.current.position.y = 1 + Math.sin(t * 2) * 0.1;
      cubeRef.current.rotation.y = t * 0.4;
      cubeRef.current.rotation.x = Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Small Cyberpunk Floor Platform */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial
          color="#11131f"
          roughness={0.2}
          metalness={0.8}
        />
        {/* Neon Platform Border Edges */}
        <Edges
          scale={1}
          threshold={15}
          color="#00f0ff"
        />
      </mesh>

      {/* Cyberpunk Grid Helper on floor */}
      <Grid
        position={[0, 0.01, 0]}
        args={[8, 8]}
        cellSize={0.5}
        cellThickness={0.6}
        cellColor="#00f0ff"
        sectionSize={2}
        sectionThickness={1.2}
        sectionColor="#ff0077"
        fadeDistance={20}
        fadeStrength={1}
        infiniteGrid={false}
      />

      {/* Center Interactive Cyberpunk Test Cube */}
      <mesh
        ref={cubeRef}
        position={[0, 1, 0]}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color={hovered ? '#1a2238' : '#141724'}
          roughness={0.15}
          metalness={0.85}
          emissive={hovered ? '#00f0ff' : '#0a101d'}
          emissiveIntensity={hovered ? 0.6 : 0.2}
        />
        {/* Bright Neon Outlines */}
        <Edges
          scale={1}
          threshold={15}
          color={hovered ? '#ff0077' : '#00f0ff'}
        />
      </mesh>

      {/* Ground plane shadow receiver */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.21, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
    </group>
  );
};
