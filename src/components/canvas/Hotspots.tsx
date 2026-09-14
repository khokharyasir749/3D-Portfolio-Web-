import React, { useRef, useState } from 'react';
import { useFrame, type ThreeEvent } from '@react-three/fiber';
import type * as THREE from 'three';
import { Html } from '@react-three/drei';
import type { SectionType } from '../../data/portfolioData';
import { FolderGit2, Cpu, User, Mail } from 'lucide-react';
import { audioManager } from '../../utils/audioSystem';

interface HotspotProps {
  position: [number, number, number];
  title: string;
  subtitle: string;
  section: NonNullable<SectionType>;
  color: string;
  icon: React.ReactNode;
  onSelect: (section: NonNullable<SectionType>) => void;
}

const BeaconMarker: React.FC<HotspotProps> = ({
  position,
  title,
  subtitle,
  section,
  color,
  icon,
  onSelect,
}) => {
  const [hovered, setHovered] = useState(false);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Group>(null);
  const rippleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 2;
      const scale = hovered ? 1.4 : 1 + Math.sin(t * 3) * 0.15;
      ringRef.current.scale.set(scale, scale, scale);
    }
    if (coreRef.current) {
      coreRef.current.position.y = Math.sin(t * 2.5 + position[0]) * 0.1;
      coreRef.current.rotation.y = t * 1.5;
    }
    if (rippleRef.current) {
      const rippleScale = 1 + (t * 1.2) % 1.5;
      rippleRef.current.scale.set(rippleScale, rippleScale, 1);
      const mat = rippleRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = Math.max(0, 0.6 - (rippleScale - 1) * 0.4);
      }
    }
  });

  const handleMeshClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    audioManager.playClickSound();
    onSelect(section);
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (!hovered) {
      audioManager.playHoverSound();
    }
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  return (
    <group position={position}>
      {/* 3D Invisible Hit Sphere for reliable raycasting */}
      <mesh
        visible={false}
        onClick={handleMeshClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[0.35, 16, 16]} />
      </mesh>

      {/* Floating Animated Core Glowing Gem */}
      <group ref={coreRef}>
        <mesh castShadow onClick={handleMeshClick}>
          <octahedronGeometry args={[0.09, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 4.5 : 2.5}
            roughness={0.1}
            metalness={0.9}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Horizontal Pulsing Beacon Ring (Scaled down 50%) */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
        <ringGeometry args={[0.11, 0.14, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.95 : 0.6}
          side={2}
        />
      </mesh>

      {/* Subtle Expanding Radar Ripple (Scaled down 50%) */}
      <mesh ref={rippleRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
        <ringGeometry args={[0.14, 0.17, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
          side={2}
        />
      </mesh>

      {/* Vertical Beacon Anchor Beam */}
      <mesh position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.008, 0.02, 0.2, 12]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.6 : 0.25}
        />
      </mesh>

      {/* 3D HTML Tooltip: HIDDEN by default, visible ONLY on hover */}
      <Html
        position={[0, 0.4, 0]}
        center
        distanceFactor={18}
        zIndexRange={[100, 0]}
        style={{ pointerEvents: 'none' }} // Prevent blocking raycasting
      >
        <div
          className={`transition-all duration-300 transform select-none pointer-events-none ${
            hovered
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-2 scale-75 pointer-events-none'
          }`}
        >
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border backdrop-blur-md shadow-xl ${
              hovered
                ? 'bg-slate-950/95 border-cyan-400 text-cyan-300 shadow-neon-cyan'
                : 'bg-slate-950/80 border-slate-700 text-slate-200'
            }`}
          >
            <div
              className="p-1 rounded bg-slate-900 text-cyan-400 shrink-0"
              style={{ color }}
            >
              {icon}
            </div>
            <div>
              <p className="font-cyber font-bold tracking-wider text-xs whitespace-nowrap">
                {title}
              </p>
              <p className="font-code text-[10px] text-slate-400 whitespace-nowrap">
                {subtitle}
              </p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
          </div>
        </div>
      </Html>
    </group>
  );
};

interface HotspotsGroupProps {
  onSelectSection: (section: NonNullable<SectionType>) => void;
}

export const Hotspots: React.FC<HotspotsGroupProps> = ({ onSelectSection }) => {
  return (
    <group>
      {/* 1. Curved Monitors: Featured Projects */}
      <BeaconMarker
        position={[0, 2.8, 0]}
        title="PROJECTS"
        subtitle="Click to explore"
        section="projects"
        color="#00f0ff"
        icon={<FolderGit2 className="w-3.5 h-3.5" />}
        onSelect={onSelectSection}
      />

      {/* 2. Wall Shelves: Tech Stack & Skills */}
      <BeaconMarker
        position={[2.5, 3.8, -4.5]}
        title="TECH STACK"
        subtitle="Click for skills"
        section="skills"
        color="#ff007f"
        icon={<Cpu className="w-3.5 h-3.5" />}
        onSelect={onSelectSection}
      />

      {/* 3. CODE // CREATE Sign: About Developer */}
      <BeaconMarker
        position={[-1.2, 4.4, -4.5]}
        title="ABOUT DEV"
        subtitle="Click for dossier"
        section="about"
        color="#fcee0a"
        icon={<User className="w-3.5 h-3.5" />}
        onSelect={onSelectSection}
      />

      {/* 4. Desk / PC / Terminal: Contact & Socials */}
      <BeaconMarker
        position={[1.8, 2.6, 0.3]}
        title="CONTACT"
        subtitle="Click for uplink"
        section="contact"
        color="#00ff66"
        icon={<Mail className="w-3.5 h-3.5" />}
        onSelect={onSelectSection}
      />
    </group>
  );
};
