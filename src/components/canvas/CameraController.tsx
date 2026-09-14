import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import type { SectionType } from '../../data/portfolioData';

interface CameraControllerProps {
  activeSection?: SectionType;
}

export const CameraController: React.FC<CameraControllerProps> = ({
  activeSection = null,
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Target coordinates for each section
  const sectionTargets: Record<string, THREE.Vector3> = useMemo(() => {
    return {
      hero: new THREE.Vector3(0, 1.0, 0),
      'what-i-do': new THREE.Vector3(0, 1.8, 0),
      experience: new THREE.Vector3(-0.8, 2.8, -2.5),
      work: new THREE.Vector3(0, 1.5, 0),
      projects: new THREE.Vector3(0, 1.5, 0),
      skills: new THREE.Vector3(1.8, 2.2, -2.5),
      about: new THREE.Vector3(-0.8, 2.8, -2.5),
      contact: new THREE.Vector3(1.2, 1.2, 0.2),
      default: new THREE.Vector3(0, 1.0, 0),
    };
  }, []);

  // Smooth target transition when inspecting sections
  useFrame(() => {
    if (!controlsRef.current) return;

    const targetPos = activeSection
      ? sectionTargets[activeSection]
      : sectionTargets.default;

    controlsRef.current.target.lerp(targetPos, 0.08);
    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      target={[0, 1.0, 0]}
      enableRotate={true}
      enableZoom={true}
      enablePan={false}
      rotateSpeed={0.8}
      dampingFactor={0.05}
      enableDamping={true}
      minDistance={6}
      maxDistance={35}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2.15}
    />
  );
};
