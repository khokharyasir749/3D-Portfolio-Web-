import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export const HeroAvatar: React.FC = () => {
  const headRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);

  // Smooth mouse-cursor tracking with 0.05 damping
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const targetRotY = state.pointer.x * 0.65;
    const targetRotX = -state.pointer.y * 0.38;

    // Head rotation following cursor smoothly
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetRotY,
        0.05
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetRotX + Math.sin(t * 1.5) * 0.012,
        0.05
      );
      headRef.current.rotation.z = THREE.MathUtils.lerp(
        headRef.current.rotation.z,
        -state.pointer.x * 0.05,
        0.05
      );
    }

    // Torso breathing idle
    if (torsoRef.current) {
      torsoRef.current.position.y = -0.42 + Math.sin(t * 1.5) * 0.01;
    }

    // Eyes following gaze smoothly
    if (eyesRef.current) {
      eyesRef.current.position.x = THREE.MathUtils.lerp(
        eyesRef.current.position.x,
        state.pointer.x * 0.035,
        0.08
      );
      eyesRef.current.position.y = THREE.MathUtils.lerp(
        eyesRef.current.position.y,
        0.08 + state.pointer.y * 0.025,
        0.08
      );
    }
  });

  return (
    <group position={[0, -0.3, 0]}>
      {/* ================================================================= */}
      {/* REALISTIC STYLIZED CHARACTER BUST (MATTE FINISH & BALANCED TONES) */}
      {/* ================================================================= */}
      <Float speed={2.0} rotationIntensity={0.05} floatIntensity={0.18}>
        <group>
          {/* Torso & Streetwear Dark Hoodie (Matte Fabric) */}
          <group ref={torsoRef} position={[0, -0.42, 0]}>
            {/* Main Hoodie Body */}
            <mesh castShadow receiveShadow position={[0, -0.32, 0]}>
              <cylinderGeometry args={[0.9, 1.18, 0.98, 36]} />
              <meshStandardMaterial
                color="#10121a"
                roughness={0.92}
                metalness={0.0}
              />
            </mesh>

            {/* Draped Hoodie Collar Ring */}
            <mesh position={[0, 0.22, 0.02]} rotation={[0.15, 0, 0]} castShadow>
              <torusGeometry args={[0.5, 0.18, 24, 40]} />
              <meshStandardMaterial
                color="#0a0c14"
                roughness={0.92}
                metalness={0.0}
              />
            </mesh>

            {/* Back Hood Fold */}
            <mesh position={[0, 0.18, -0.32]} rotation={[-0.3, 0, 0]} castShadow>
              <sphereGeometry args={[0.42, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
              <meshStandardMaterial color="#0c0e17" roughness={0.92} />
            </mesh>

            {/* Drawstrings with Subtle Metallic Tips */}
            <group position={[-0.14, 0.02, 0.44]} rotation={[0, 0, 0.06]}>
              <mesh>
                <cylinderGeometry args={[0.016, 0.016, 0.38, 12]} />
                <meshStandardMaterial color="#1e293b" roughness={0.8} />
              </mesh>
              <mesh position={[0, -0.19, 0]}>
                <cylinderGeometry args={[0.022, 0.022, 0.05, 12]} />
                <meshStandardMaterial color="#7c3aed" roughness={0.4} metalness={0.6} />
              </mesh>
            </group>

            <group position={[0.14, 0.02, 0.44]} rotation={[0, 0, -0.06]}>
              <mesh>
                <cylinderGeometry args={[0.016, 0.016, 0.38, 12]} />
                <meshStandardMaterial color="#1e293b" roughness={0.8} />
              </mesh>
              <mesh position={[0, -0.19, 0]}>
                <cylinderGeometry args={[0.022, 0.022, 0.05, 12]} />
                <meshStandardMaterial color="#7c3aed" roughness={0.4} metalness={0.6} />
              </mesh>
            </group>
          </group>

          {/* Head, Backwards White Baseball Cap & Expressive Eyes */}
          <group ref={headRef} position={[0, 0.54, 0]}>
            {/* Neck with soft matte skin material */}
            <mesh position={[0, -0.42, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.27, 0.46, 28]} />
              <meshPhysicalMaterial
                color="#d89b7b"
                roughness={0.55}
                clearcoat={0.08}
                clearcoatRoughness={0.3}
              />
            </mesh>

            {/* Stylized Face Sculpt */}
            <mesh castShadow position={[0, 0.08, 0]}>
              <sphereGeometry args={[0.56, 36, 36]} />
              <meshPhysicalMaterial
                color="#d89b7b"
                roughness={0.55}
                clearcoat={0.08}
                clearcoatRoughness={0.3}
              />
            </mesh>

            {/* Subtle Stylized Chin */}
            <mesh position={[0, -0.22, 0.32]} rotation={[0.4, 0, 0]} castShadow>
              <boxGeometry args={[0.34, 0.22, 0.26]} />
              <meshPhysicalMaterial color="#d89b7b" roughness={0.55} />
            </mesh>

            {/* Stylized Nose */}
            <mesh position={[0, 0.04, 0.55]} rotation={[-0.2, 0, 0]} castShadow>
              <coneGeometry args={[0.06, 0.14, 16]} />
              <meshPhysicalMaterial color="#ce8e6e" roughness={0.55} />
            </mesh>

            {/* Stylized Ears */}
            <mesh position={[-0.56, 0.06, -0.05]} rotation={[0, 0, -0.2]}>
              <sphereGeometry args={[0.13, 16, 16]} />
              <meshPhysicalMaterial color="#d89b7b" roughness={0.55} />
            </mesh>
            <mesh position={[0.56, 0.06, -0.05]} rotation={[0, 0, 0.2]}>
              <sphereGeometry args={[0.13, 16, 16]} />
              <meshPhysicalMaterial color="#d89b7b" roughness={0.55} />
            </mesh>

            {/* Sporty Backwards White Baseball Cap (Matte Cotton Fabric, Non-Reflective) */}
            <group position={[0, 0.27, -0.06]}>
              {/* Cap Crown Dome */}
              <mesh castShadow position={[0, 0.14, 0]}>
                <sphereGeometry args={[0.59, 36, 36, 0, Math.PI * 2, 0, Math.PI / 1.88]} />
                <meshStandardMaterial color="#e2e8f0" roughness={0.82} metalness={0.0} />
              </mesh>
              {/* Cap Seam Ring */}
              <mesh position={[0, -0.04, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.585, 0.018, 16, 40]} />
                <meshStandardMaterial color="#cbd5e1" roughness={0.82} />
              </mesh>
              {/* Backwards Cap Curved Visor / Brim */}
              <mesh position={[0, 0.01, 0.56]} rotation={[0.22, Math.PI, 0]} castShadow>
                <boxGeometry args={[0.68, 0.04, 0.48]} />
                <meshStandardMaterial color="#e2e8f0" roughness={0.82} metalness={0.0} />
              </mesh>
              {/* Cap Crown Button */}
              <mesh position={[0, 0.54, 0]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#cbd5e1" roughness={0.82} />
              </mesh>
            </group>

            {/* Expressive Stylized Eyes Tracking Cursor */}
            <group ref={eyesRef} position={[0, 0.08, 0.49]}>
              {/* Left Eye */}
              <group position={[-0.19, 0, 0]}>
                {/* Sclera */}
                <mesh>
                  <sphereGeometry args={[0.095, 24, 24]} />
                  <meshBasicMaterial color="#f8fafc" />
                </mesh>
                {/* Iris */}
                <mesh position={[0, 0, 0.055]}>
                  <sphereGeometry args={[0.058, 20, 20]} />
                  <meshBasicMaterial color="#0f172a" />
                </mesh>
                {/* Catchlight */}
                <mesh position={[-0.02, 0.025, 0.08]}>
                  <sphereGeometry args={[0.018, 10, 10]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </group>

              {/* Right Eye */}
              <group position={[0.19, 0, 0]}>
                {/* Sclera */}
                <mesh>
                  <sphereGeometry args={[0.095, 24, 24]} />
                  <meshBasicMaterial color="#f8fafc" />
                </mesh>
                {/* Iris */}
                <mesh position={[0, 0, 0.055]}>
                  <sphereGeometry args={[0.058, 20, 20]} />
                  <meshBasicMaterial color="#0f172a" />
                </mesh>
                {/* Catchlight */}
                <mesh position={[-0.02, 0.025, 0.08]}>
                  <sphereGeometry args={[0.018, 10, 10]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </Float>

      {/* Grounding Contact Shadow */}
      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.5}
        scale={5.5}
        blur={2.4}
        far={3}
        color="#000000"
      />
    </group>
  );
};

export default HeroAvatar;
