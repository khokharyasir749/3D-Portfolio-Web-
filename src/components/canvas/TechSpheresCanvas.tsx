import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface TechItem {
  name: string;
  category: string;
  color: string;
  emissive: string;
  size: number;
}

const TECH_LIST: TechItem[] = [
  { name: 'React', category: 'Frontend', color: '#61dafb', emissive: '#00d8ff', size: 0.72 },
  { name: 'Next.js', category: 'Fullstack', color: '#ffffff', emissive: '#ffffff', size: 0.74 },
  { name: 'TypeScript', category: 'Language', color: '#3178c6', emissive: '#3178c6', size: 0.70 },
  { name: 'Node.js', category: 'Backend', color: '#68a063', emissive: '#43853d', size: 0.72 },
  { name: 'Three.js', category: '3D WebGL', color: '#00f0ff', emissive: '#00f0ff', size: 0.75 },
  { name: 'Tailwind', category: 'Styling', color: '#38bdf8', emissive: '#06b6d4', size: 0.68 },
  { name: 'Compose', category: 'Mobile', color: '#4285f4', emissive: '#34a853', size: 0.70 },
  { name: 'MongoDB', category: 'Database', color: '#47a248', emissive: '#13aa52', size: 0.70 },
  { name: 'Express', category: 'Backend', color: '#f59e0b', emissive: '#d97706', size: 0.68 },
  { name: 'Git', category: 'Tooling', color: '#f05032', emissive: '#f05032', size: 0.66 },
  { name: 'Vite', category: 'Tooling', color: '#bd34fe', emissive: '#ffea83', size: 0.68 },
  { name: 'Kotlin', category: 'Mobile', color: '#7f52ff', emissive: '#c757bc', size: 0.68 },
  { name: 'Go', category: 'Backend', color: '#00add8', emissive: '#00add8', size: 0.66 },
  { name: 'Redux', category: 'State', color: '#764abc', emissive: '#764abc', size: 0.66 },
];

// Individual Interactive Physics-Repelled Sphere
const TechSphere: React.FC<{
  tech: TechItem;
  initialPos: [number, number, number];
  index: number;
}> = ({ tech, initialPos, index }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Position, velocity, and floating phase state
  const state = useMemo(() => {
    return {
      pos: new THREE.Vector3(...initialPos),
      vel: new THREE.Vector3(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.004
      ),
      phase: index * 0.7,
      scale: 1,
    };
  }, [initialPos, index]);

  useFrame((rState) => {
    if (!meshRef.current) return;
    const t = rState.clock.getElapsedTime();

    // 1. Natural Ambient Floating Drift
    state.pos.x += state.vel.x + Math.sin(t * 0.8 + state.phase) * 0.002;
    state.pos.y += state.vel.y + Math.cos(t * 0.6 + state.phase) * 0.002;
    state.pos.z += state.vel.z + Math.sin(t * 0.5 + state.phase) * 0.001;

    // 2. Gentle Boundary Bouncing
    const boundsX = 5.2;
    const boundsY = 3.2;
    const boundsZ = 1.8;

    if (Math.abs(state.pos.x) > boundsX) {
      state.vel.x *= -1;
      state.pos.x = Math.sign(state.pos.x) * boundsX;
    }
    if (Math.abs(state.pos.y) > boundsY) {
      state.vel.y *= -1;
      state.pos.y = Math.sign(state.pos.y) * boundsY;
    }
    if (Math.abs(state.pos.z) > boundsZ) {
      state.vel.z *= -1;
      state.pos.z = Math.sign(state.pos.z) * boundsZ;
    }

    // 3. Dynamic Cursor-Repel Force (Pointer interaction)
    const pointerWorldX = rState.pointer.x * 5.0;
    const pointerWorldY = rState.pointer.y * 3.0;
    const dx = state.pos.x - pointerWorldX;
    const dy = state.pos.y - pointerWorldY;
    const distSq = dx * dx + dy * dy;

    if (distSq < 4.0 && distSq > 0.01) {
      const force = (4.0 - distSq) * 0.012;
      const dist = Math.sqrt(distSq);
      state.vel.x += (dx / dist) * force;
      state.vel.y += (dy / dist) * force;
    }

    // Damping on velocities
    state.vel.multiplyScalar(0.97);

    // Apply computed position to mesh
    meshRef.current.position.copy(state.pos);

    // Smooth hover scaling
    const targetScale = hovered ? 1.3 : 1.0;
    state.scale = THREE.MathUtils.lerp(state.scale, targetScale, 0.1);
    meshRef.current.scale.setScalar(state.scale);

    // Slow rotation
    meshRef.current.rotation.y = t * 0.4 + state.phase;
    meshRef.current.rotation.x = Math.sin(t * 0.3 + state.phase) * 0.2;
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* 3D Shiny Metallic / Glass Sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[tech.size, 32, 32]} />
        <meshPhysicalMaterial
          color={hovered ? tech.color : '#161a28'}
          emissive={tech.emissive}
          emissiveIntensity={hovered ? 2.5 : 0.35}
          roughness={0.15}
          metalness={0.85}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      {/* Glowing Outer Atmosphere Halo on Hover */}
      {hovered && (
        <mesh scale={[1.2, 1.2, 1.2]}>
          <sphereGeometry args={[tech.size, 24, 24]} />
          <meshBasicMaterial
            color={tech.color}
            transparent
            opacity={0.25}
            side={THREE.BackSide}
          />
        </mesh>
      )}

      {/* Orbiting Equatorial Glowing Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[tech.size * 1.12, tech.size * 1.22, 32]} />
        <meshBasicMaterial
          color={tech.color}
          transparent
          opacity={hovered ? 0.95 : 0.45}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating 3D Text Label in Center */}
      <Text
        position={[0, 0, tech.size + 0.05]}
        fontSize={0.22}
        color={hovered ? '#ffffff' : tech.color}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {tech.name}
      </Text>

      {/* Back Label for 360 Viewing */}
      <Text
        position={[0, 0, -(tech.size + 0.05)]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.22}
        color={hovered ? '#ffffff' : tech.color}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {tech.name}
      </Text>
    </group>
  );
};

export const TechSpheresCanvas: React.FC = () => {
  // Generate dispersed initial spatial coordinates for all tech spheres
  const initialPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const count = TECH_LIST.length;
    const cols = 4;
    const rows = Math.ceil(count / cols);

    TECH_LIST.forEach((_, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const x = (col - (cols - 1) / 2) * 2.3 + (Math.random() - 0.5) * 0.6;
      const y = (row - (rows - 1) / 2) * -1.7 + (Math.random() - 0.5) * 0.5;
      const z = (Math.random() - 0.5) * 1.5;
      positions.push([x, y, z]);
    });

    return positions;
  }, []);

  return (
    <div className="w-full h-[420px] sm:h-[480px] lg:h-[540px] relative rounded-sm overflow-hidden bg-[#0a0c14]/80 border border-white/10 shadow-2xl">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Interactive 3D Physics Canvas */}
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        {/* Studio Lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[6, 8, 5]} intensity={3.0} color="#00f0ff" />
        <directionalLight position={[-6, -4, 4]} intensity={2.5} color="#ff007f" />
        <pointLight position={[0, 0, 5]} intensity={1.8} color="#ffffff" />

        {/* Floating Interactive Spheres */}
        <group>
          {TECH_LIST.map((tech, idx) => (
            <TechSphere
              key={tech.name}
              tech={tech}
              initialPos={initialPositions[idx]}
              index={idx}
            />
          ))}
        </group>

        {/* Soft Contact Shadows */}
        <ContactShadows
          position={[0, -3.2, 0]}
          opacity={0.5}
          scale={14}
          blur={2.5}
          far={6}
          color="#000000"
        />
      </Canvas>

      {/* Floating Interactive Badge Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[10px] font-code text-slate-400 flex items-center gap-2 backdrop-blur-md pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>HOVER & REPEL 3D SPHERES</span>
      </div>
    </div>
  );
};
