import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraCheckpoint {
  progress: number;
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

const CHECKPOINTS: CameraCheckpoint[] = [
  { progress: 0.0, position: [0.0, 0.1, 4.4], target: [0.0, 0.05, 0.0], fov: 36 },
  { progress: 0.166, position: [0.0, 0.18, 4.6], target: [0.0, 0.08, 0.0], fov: 36 },
  { progress: 0.333, position: [0.0, 0.25, 4.9], target: [0.0, 0.1, 0.0], fov: 36 },
  { progress: 0.5, position: [0.0, 0.35, 5.3], target: [0.0, 0.1, 0.0], fov: 36 },
  { progress: 0.666, position: [0.0, 0.45, 5.8], target: [0.0, 0.1, 0.0], fov: 36 },
  { progress: 0.833, position: [0.0, 1.8, 7.8], target: [0.0, 1.5, 0.0], fov: 38 },
  { progress: 1.0, position: [0.0, 0.5, 6.0], target: [0.0, 0.2, 0.0], fov: 36 },
];

// Pre-allocated static vectors to eliminate GC churn and frame drops
const _posA = new THREE.Vector3();
const _posB = new THREE.Vector3();
const _targetA = new THREE.Vector3();
const _targetB = new THREE.Vector3();
const _desiredPos = new THREE.Vector3();

export const GlobalCameraController: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const { camera } = useThree();
  const currentTarget = useRef(new THREE.Vector3(0, 0.05, 0));

  useFrame((state) => {
    const clamped = Math.max(0, Math.min(1, scrollProgress));

    let i = 0;
    while (i < CHECKPOINTS.length - 1 && CHECKPOINTS[i + 1].progress < clamped) {
      i++;
    }

    const cpA = CHECKPOINTS[i];
    const cpB = CHECKPOINTS[Math.min(i + 1, CHECKPOINTS.length - 1)];

    const span = cpB.progress - cpA.progress;
    const t = span > 0.0001 ? (clamped - cpA.progress) / span : 0;
    const easeT = t * t * (3 - 2 * t);

    _posA.set(...cpA.position);
    _posB.set(...cpB.position);
    _posA.lerp(_posB, easeT);

    _targetA.set(...cpA.target);
    _targetB.set(...cpB.target);
    _targetA.lerp(_targetB, easeT);

    const targetFov = THREE.MathUtils.lerp(cpA.fov, cpB.fov, easeT);

    // Subtle pointer parallax based on mouse
    const parallaxX = state.pointer.x * 0.15;
    const parallaxY = state.pointer.y * 0.10;

    _desiredPos.set(_posA.x + parallaxX, _posA.y + parallaxY, _posA.z);

    camera.position.lerp(_desiredPos, 0.08);
    currentTarget.current.lerp(_targetA, 0.08);
    camera.lookAt(currentTarget.current);

    if ('fov' in camera && typeof (camera as THREE.PerspectiveCamera).fov === 'number') {
      const pCam = camera as THREE.PerspectiveCamera;
      if (Math.abs(pCam.fov - targetFov) > 0.01) {
        pCam.fov = THREE.MathUtils.lerp(pCam.fov, targetFov, 0.08);
        pCam.updateProjectionMatrix();
      }
    }
  });

  return null;
};

export default GlobalCameraController;
