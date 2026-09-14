import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DevCharacterProps {
  scrollProgress?: number;
}

export const DevCharacter: React.FC<DevCharacterProps> = ({ scrollProgress = 0 }) => {
  const headRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);
  const leftHandRef = useRef<THREE.Group>(null);
  const rightHandRef = useRef<THREE.Group>(null);

  // Natural animations: breathing, real-time cursor tracking, and mechanical typing
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const isHeroMode = scrollProgress < 0.15;

    // 1. Torso breathing motion (periodic vertical bobbing and gentle forward chest expansion)
    if (torsoRef.current) {
      torsoRef.current.position.y = 0.82 + Math.sin(t * 1.5) * 0.015;
      torsoRef.current.rotation.x = 0.12 + Math.sin(t * 1.5) * 0.008;
    }

    // 2. Real-time Cursor Tracking (Head & Eyes)
    if (headRef.current) {
      if (isHeroMode) {
        // Hero View: Smoothly lerps head to track mouse cursor coordinates
        const targetRotY = state.pointer.x * 0.7;
        const targetRotX = -state.pointer.y * 0.45;

        headRef.current.rotation.y = THREE.MathUtils.lerp(
          headRef.current.rotation.y,
          targetRotY,
          0.08
        );
        headRef.current.rotation.x = THREE.MathUtils.lerp(
          headRef.current.rotation.x,
          targetRotX,
          0.08
        );
      } else {
        // BattleStation View: Natural glance between dual code screens
        const screenGazeY = Math.sin(t * 0.9) * 0.12;
        const screenGazeX = -0.05 + Math.sin(t * 1.4) * 0.025;

        headRef.current.rotation.y = THREE.MathUtils.lerp(
          headRef.current.rotation.y,
          screenGazeY,
          0.05
        );
        headRef.current.rotation.x = THREE.MathUtils.lerp(
          headRef.current.rotation.x,
          screenGazeX,
          0.05
        );
      }
    }

    // Eyes follow cursor slightly ahead in Hero view
    if (eyesRef.current) {
      if (isHeroMode) {
        eyesRef.current.position.x = THREE.MathUtils.lerp(
          eyesRef.current.position.x,
          state.pointer.x * 0.03,
          0.12
        );
        eyesRef.current.position.y = THREE.MathUtils.lerp(
          eyesRef.current.position.y,
          0.08 + state.pointer.y * 0.025,
          0.12
        );
      } else {
        eyesRef.current.position.x = THREE.MathUtils.lerp(eyesRef.current.position.x, 0, 0.05);
        eyesRef.current.position.y = THREE.MathUtils.lerp(eyesRef.current.position.y, 0.08, 0.05);
      }
    }

    // 3. Fast tactile typing keystrokes on left hand over mechanical keyboard
    if (leftHandRef.current) {
      leftHandRef.current.position.y = 0.70 + Math.sin(t * 18) * 0.007;
      leftHandRef.current.position.x = -0.06 + Math.cos(t * 13) * 0.006;
      leftHandRef.current.rotation.x = Math.sin(t * 18) * 0.05;
      leftHandRef.current.rotation.z = Math.cos(t * 14) * 0.03;
    }

    // 4. Subtle mouse micro-glide and clicking motion on right hand over gaming mouse
    if (rightHandRef.current) {
      rightHandRef.current.position.x = 0.85 + Math.sin(t * 2.4) * 0.014;
      rightHandRef.current.position.z = -0.78 + Math.cos(t * 1.9) * 0.009;
      rightHandRef.current.rotation.x = 0.12 + Math.sin(t * 4) * 0.01;
    }
  });

  return (
    // Character root: positioned directly on the chair cushion in BattleStation coordinates
    <group position={[-0.2, 0.0, 1.05]}>
      {/* ================================================================= */}
      {/* 1. LOWER BODY (Hips, Thighs, Shins & Cyber Sneakers)              */}
      {/* ================================================================= */}
      
      {/* Hips / Pelvis seated securely on the gaming chair cushion */}
      <mesh position={[0, 0.74, -0.02]} castShadow>
        <boxGeometry args={[0.54, 0.22, 0.46]} />
        <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Left Thigh (Extending horizontally forward toward desk) */}
      <mesh position={[-0.18, 0.70, -0.27]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.095, 0.54, 16]} />
        <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
      </mesh>
      {/* Right Thigh */}
      <mesh position={[0.18, 0.70, -0.27]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.095, 0.54, 16]} />
        <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Left Shin / Calf (Bent 90 deg down toward floor) */}
      <mesh position={[-0.18, 0.36, -0.54]} castShadow>
        <cylinderGeometry args={[0.095, 0.085, 0.58, 16]} />
        <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
      </mesh>
      {/* Right Shin / Calf */}
      <mesh position={[0.18, 0.36, -0.54]} castShadow>
        <cylinderGeometry args={[0.095, 0.085, 0.58, 16]} />
        <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Left Cyber Sneaker */}
      <group position={[-0.18, 0.06, -0.54]}>
        <mesh castShadow>
          <boxGeometry args={[0.15, 0.12, 0.32]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.3} metalness={0.2} clearcoat={0.3} />
        </mesh>
        <mesh position={[0, -0.055, 0]}>
          <boxGeometry args={[0.16, 0.02, 0.33]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2.5} toneMapped={false} />
        </mesh>
      </group>

      {/* Right Cyber Sneaker */}
      <group position={[0.18, 0.06, -0.54]}>
        <mesh castShadow>
          <boxGeometry args={[0.15, 0.12, 0.32]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.3} metalness={0.2} clearcoat={0.3} />
        </mesh>
        <mesh position={[0, -0.055, 0]}>
          <boxGeometry args={[0.16, 0.02, 0.33]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2.5} toneMapped={false} />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 2. UPPER BODY & DARK MINIMALIST HOODIE / TEE                      */}
      {/* ================================================================= */}
      <group ref={torsoRef} position={[0, 0.82, 0]}>
        {/* Main Torso Body */}
        <mesh position={[0, 0.32, -0.05]} castShadow>
          <boxGeometry args={[0.58, 0.64, 0.38]} />
          <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
        </mesh>

        {/* Minimalist Collar */}
        <mesh position={[0, 0.65, 0.02]} rotation={[-0.2, 0, 0]} castShadow>
          <torusGeometry args={[0.22, 0.08, 16, 24]} />
          <meshStandardMaterial color="#0b0d14" roughness={0.85} metalness={0.1} />
        </mesh>

        {/* =============================================================== */}
        {/* 3. HEAD, BACKWARDS WHITE CAP & EXPRESSIVE EYES                  */}
        {/* =============================================================== */}
        <group ref={headRef} position={[0, 0.72, -0.06]}>
          {/* Neck with Warm Natural Skin Tone */}
          <mesh position={[0, -0.08, 0]} castShadow>
            <cylinderGeometry args={[0.085, 0.095, 0.16, 16]} />
            <meshPhysicalMaterial
              color="#e2a682"
              roughness={0.45}
              clearcoat={0.3}
              clearcoatRoughness={0.2}
              transmission={0.04}
            />
          </mesh>

          {/* Stylized Face / Head Geometry */}
          <mesh position={[0, 0.08, -0.02]} castShadow>
            <boxGeometry args={[0.29, 0.32, 0.30]} />
            <meshPhysicalMaterial
              color="#e2a682"
              roughness={0.45}
              clearcoat={0.3}
              clearcoatRoughness={0.2}
              transmission={0.04}
            />
          </mesh>

          {/* ------------------------------------------------------------- */}
          {/* SPORTY BACKWARDS WHITE CAP                                    */}
          {/* ------------------------------------------------------------- */}
          <group position={[0, 0.14, -0.02]}>
            {/* White Cap Main Crown */}
            <mesh position={[0, 0.08, 0]} castShadow>
              <sphereGeometry args={[0.18, 24, 24, 0, Math.PI * 2, 0, Math.PI / 1.9]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.4} metalness={0.1} />
            </mesh>
            <mesh position={[0, 0.06, 0]} castShadow>
              <cylinderGeometry args={[0.175, 0.178, 0.14, 24]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.4} metalness={0.1} />
            </mesh>

            {/* Backwards Cap Visor / Brim (Pointing backward in -Z direction) */}
            <mesh position={[0, -0.01, 0.18]} rotation={[0.2, Math.PI, 0]} castShadow>
              <boxGeometry args={[0.22, 0.02, 0.16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.15} />
            </mesh>

            {/* Cap Adjustment Strap at Nape */}
            <mesh position={[0, -0.02, 0.12]}>
              <boxGeometry args={[0.08, 0.018, 0.04]} />
              <meshStandardMaterial color="#1e293b" roughness={0.6} />
            </mesh>

            {/* Cap Crown Button on Top */}
            <mesh position={[0, 0.19, 0]}>
              <sphereGeometry args={[0.022, 12, 12]} />
              <meshStandardMaterial color="#ffffff" roughness={0.4} />
            </mesh>
          </group>

          {/* ------------------------------------------------------------- */}
          {/* EXPRESSIVE STYLIZED EYES & EYEBROWS (Following Cursor)        */}
          {/* ------------------------------------------------------------- */}
          <group ref={eyesRef} position={[0, 0.08, -0.17]}>
            {/* Left Eye White & Pupil */}
            <group position={[-0.07, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.038, 16, 16]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
              {/* Dark Pupil */}
              <mesh position={[0, 0, -0.026]}>
                <sphereGeometry args={[0.022, 16, 16]} />
                <meshBasicMaterial color="#0f172a" />
              </mesh>
              {/* Specular Catchlight Sparkle */}
              <mesh position={[-0.008, 0.008, -0.035]}>
                <sphereGeometry args={[0.007, 8, 8]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
            </group>

            {/* Right Eye White & Pupil */}
            <group position={[0.07, 0, 0]}>
              <mesh>
                <sphereGeometry args={[0.038, 16, 16]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
              {/* Dark Pupil */}
              <mesh position={[0, 0, -0.026]}>
                <sphereGeometry args={[0.022, 16, 16]} />
                <meshBasicMaterial color="#0f172a" />
              </mesh>
              {/* Specular Catchlight Sparkle */}
              <mesh position={[-0.008, 0.008, -0.035]}>
                <sphereGeometry args={[0.007, 8, 8]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
            </group>

            {/* Minimalist Eyebrows */}
            <mesh position={[-0.07, 0.05, -0.015]} rotation={[0, 0, -0.05]}>
              <boxGeometry args={[0.065, 0.014, 0.01]} />
              <meshBasicMaterial color="#0f172a" />
            </mesh>
            <mesh position={[0.07, 0.05, -0.015]} rotation={[0, 0, 0.05]}>
              <boxGeometry args={[0.065, 0.014, 0.01]} />
              <meshBasicMaterial color="#0f172a" />
            </mesh>
          </group>

          {/* Minimalist Over-Ear Headphones */}
          <group position={[0, 0.08, -0.02]}>
            {/* Headband */}
            <mesh position={[0, 0.17, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.19, 0.025, 12, 24, Math.PI]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
            </mesh>
            {/* Left Ear Pad */}
            <mesh position={[-0.17, 0, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
              <meshStandardMaterial color="#0f172a" roughness={0.5} />
            </mesh>
            {/* Right Ear Pad */}
            <mesh position={[0.17, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
              <meshStandardMaterial color="#0f172a" roughness={0.5} />
            </mesh>
          </group>
        </group>

        {/* =============================================================== */}
        {/* 4. LEFT ARM & TYPING HAND (Keystrokes over Mechanical Keyboard)  */}
        {/* =============================================================== */}
        {/* Left Shoulder & Upper Arm */}
        <mesh position={[-0.34, 0.44, -0.16]} rotation={[0.65, 0.15, -0.2]} castShadow>
          <cylinderGeometry args={[0.085, 0.075, 0.38, 16]} />
          <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
        </mesh>
        {/* Left Forearm (Reaching toward keyboard) */}
        <mesh position={[-0.22, 0.54, -0.48]} rotation={[1.25, -0.22, 0.15]} castShadow>
          <cylinderGeometry args={[0.075, 0.065, 0.46, 16]} />
          <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
        </mesh>
        {/* Left Typing Hand (Animated Keystrokes over Keyboard Keycaps) */}
        <group ref={leftHandRef} position={[-0.06, 0.70, -0.78]}>
          <mesh castShadow>
            <boxGeometry args={[0.12, 0.035, 0.14]} />
            <meshPhysicalMaterial
              color="#e2a682"
              roughness={0.45}
              clearcoat={0.3}
              clearcoatRoughness={0.2}
              transmission={0.04}
            />
          </mesh>
        </group>

        {/* =============================================================== */}
        {/* 5. RIGHT ARM & MOUSE HAND (Gripping Ergonomic Gaming Mouse)     */}
        {/* =============================================================== */}
        {/* Right Shoulder & Upper Arm */}
        <mesh position={[0.34, 0.44, -0.16]} rotation={[0.6, -0.32, 0.28]} castShadow>
          <cylinderGeometry args={[0.085, 0.075, 0.40, 16]} />
          <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
        </mesh>
        {/* Right Forearm (Extending forward-right toward mouse) */}
        <mesh position={[0.60, 0.54, -0.50]} rotation={[1.2, 0.38, -0.18]} castShadow>
          <cylinderGeometry args={[0.075, 0.065, 0.50, 16]} />
          <meshStandardMaterial color="#11131b" roughness={0.85} metalness={0.1} />
        </mesh>
        {/* Right Hand (Gripping Gaming Mouse with Micro-glide) */}
        <group ref={rightHandRef} position={[0.85, 0.70, -0.78]}>
          <mesh rotation={[0.12, 0, -0.08]} castShadow>
            <boxGeometry args={[0.13, 0.045, 0.15]} />
            <meshPhysicalMaterial
              color="#e2a682"
              roughness={0.45}
              clearcoat={0.3}
              clearcoatRoughness={0.2}
              transmission={0.04}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export default DevCharacter;
