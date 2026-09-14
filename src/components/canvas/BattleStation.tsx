import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type * as THREE from 'three';
import { Text } from '@react-three/drei';
import { DevCharacter } from './DevCharacter';

interface BattleStationProps {
  scrollProgress?: number;
}

export const BattleStation: React.FC<BattleStationProps> = ({ scrollProgress = 0 }) => {
  const fanGroupRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.PointLight>(null);

  // Subtle fan rotation animation and ambient pulse
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (fanGroupRef.current) {
      fanGroupRef.current.children.forEach((fan, idx) => {
        fan.rotation.z = t * 5 + idx * 0.5;
      });
    }
    if (screenGlowRef.current) {
      screenGlowRef.current.intensity = 3.0 + Math.sin(t * 3) * 0.3;
    }
  });

  return (
    // Scaled up 1.35x and rotated +45 deg (Math.PI / 4) so chair, keyboard, and screens DIRECTLY face the camera/viewer
    <group position={[-0.1, 0, -0.1]} rotation={[0, Math.PI / 4, 0]} scale={[1.35, 1.35, 1.35]}>
      {/* Seated 3D Developer Character directly on the ergonomic gaming chair */}
      <DevCharacter scrollProgress={scrollProgress} />
      {/* ================================================================= */}
      {/* 1. MINIMALIST CYBERPUNK DESK                                      */}
      {/* ================================================================= */}
      
      {/* Desk Tabletop (Matte carbon fiber finish) */}
      <mesh position={[0, 1.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.4, 0.08, 2.2]} />
        <meshStandardMaterial
          color="#1a1c23"
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {/* Under-desk Amber/Orange LED Strip */}
      <mesh position={[0, 1.4, -0.95]}>
        <boxGeometry args={[4.2, 0.02, 0.03]} />
        <meshStandardMaterial
          color="#ff7700"
          emissive="#ff7700"
          emissiveIntensity={3.5}
          toneMapped={false}
        />
      </mesh>

      {/* Desk Frame & Legs (Angled Matte Dark Steel) */}
      <group position={[0, 0.7, 0]}>
        {/* Left Leg Assembly */}
        <mesh position={[-1.9, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.08, 1.4, 1.8]} />
          <meshStandardMaterial color="#1a1e28" roughness={0.5} metalness={0.6} />
        </mesh>
        {/* Right Leg Assembly */}
        <mesh position={[1.9, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.08, 1.4, 1.8]} />
          <meshStandardMaterial color="#1a1e28" roughness={0.5} metalness={0.6} />
        </mesh>
        {/* Rear Crossbar Beam */}
        <mesh position={[0, 0.45, -0.7]} castShadow>
          <boxGeometry args={[3.8, 0.08, 0.08]} />
          <meshStandardMaterial color="#161922" roughness={0.5} metalness={0.6} />
        </mesh>
        {/* Cable Management Spine (Vertical conduit from floor to desk) */}
        <mesh position={[0, -0.15, -0.7]}>
          <cylinderGeometry args={[0.06, 0.06, 1.1, 12]} />
          <meshStandardMaterial color="#141722" roughness={0.5} metalness={0.5} />
        </mesh>
      </group>

      {/* Extended Cyberpunk Desk Mat / Mousepad */}
      <group position={[0, 1.495, 0.15]}>
        <mesh receiveShadow>
          <boxGeometry args={[3.2, 0.01, 1.3]} />
          <meshStandardMaterial color="#11131a" roughness={0.7} metalness={0.2} />
        </mesh>
        {/* Glowing Cyan/Magenta Stitched Border */}
        <mesh position={[0, 0.006, 0]}>
          <boxGeometry args={[3.22, 0.003, 1.32]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2.5}
            wireframe
          />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 2. CURVED MULTI-MONITOR RIG                                       */}
      {/* ================================================================= */}
      
      {/* Heavy-Duty Dual-Arm Desk Mount */}
      <group position={[0, 1.8, -0.9]}>
        <mesh position={[0, -0.3, 0]} castShadow>
          <boxGeometry args={[0.25, 0.15, 0.2]} />
          <meshStandardMaterial color="#2d3650" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.1, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.8, 16]} />
          <meshStandardMaterial color="#2d3650" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-0.4, 0.3, 0.1]} rotation={[0, 0, Math.PI / 12]} castShadow>
          <boxGeometry args={[0.9, 0.05, 0.05]} />
          <meshStandardMaterial color="#354060" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0.7, 0.3, 0.1]} rotation={[0, 0, -Math.PI / 14]} castShadow>
          <boxGeometry args={[0.8, 0.05, 0.05]} />
          <meshStandardMaterial color="#354060" metalness={0.85} roughness={0.2} />
        </mesh>
      </group>

      {/* PRIMARY ULTRA-WIDE CURVED MONITOR */}
      <group position={[-0.2, 2.35, -0.55]}>
        {/* Bezel Center */}
        <mesh castShadow>
          <boxGeometry args={[2.4, 1.05, 0.06]} />
          <meshStandardMaterial color="#1e263d" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Left Curve Wing */}
        <mesh position={[-1.25, 0, 0.12]} rotation={[0, Math.PI / 14, 0]} castShadow>
          <boxGeometry args={[0.6, 1.05, 0.06]} />
          <meshStandardMaterial color="#1e263d" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Right Curve Wing */}
        <mesh position={[1.25, 0, 0.12]} rotation={[0, -Math.PI / 14, 0]} castShadow>
          <boxGeometry args={[0.6, 1.05, 0.06]} />
          <meshStandardMaterial color="#1e263d" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* REAR RGB HALO BACKLIGHT */}
        <mesh position={[0, 0, -0.04]}>
          <boxGeometry args={[2.3, 0.95, 0.01]} />
          <meshStandardMaterial
            color="#ff007f"
            emissive="#ff007f"
            emissiveIntensity={3.5}
            toneMapped={false}
          />
        </mesh>

        {/* PRIMARY DISPLAY SCREEN: Glowing IDE / Code Editor */}
        <group position={[0, 0, 0.035]}>
          {/* Main IDE Window Background */}
          <mesh>
            <boxGeometry args={[2.32, 0.98, 0.005]} />
            <meshStandardMaterial
              color="#0d1424"
              emissive="#00e5ff"
              emissiveIntensity={0.6}
              roughness={0.1}
              metalness={0.4}
            />
          </mesh>

          {/* IDE Editor Tab Bar */}
          <mesh position={[0, 0.42, 0.003]}>
            <boxGeometry args={[2.28, 0.08, 0.002]} />
            <meshStandardMaterial color="#1d263f" />
          </mesh>
          <Text
            position={[-0.85, 0.42, 0.006]}
            fontSize={0.045}
            color="#00f0ff"
            anchorX="left"
            anchorY="middle"
          >
            ● ShopSphere.tsx  LonetexERP.tsx  SyncSpace.tsx
          </Text>

          {/* Simulated Code Lines */}
          <group position={[-1.05, 0.32, 0.005]}>
            <Text position={[0, 0, 0]} fontSize={0.044} color="#ff007f" anchorX="left">
              const portfolio = new DeveloperPortfolio({'{'}
            </Text>
            <Text position={[0.08, -0.07, 0]} fontSize={0.04} color="#00f0ff" anchorX="left">
              author: "Yasir Khokhar",
            </Text>
            <Text position={[0.08, -0.14, 0]} fontSize={0.04} color="#fcee0a" anchorX="left">
              stack: ["React", "Node.js", "Three.js", "Tailwind"],
            </Text>
            <Text position={[0.08, -0.21, 0]} fontSize={0.04} color="#00ff66" anchorX="left">
              status: "AVAILABLE FOR PRODUCTION PROJECTS"
            </Text>
            <Text position={[0, -0.28, 0]} fontSize={0.044} color="#ff007f" anchorX="left">
              {'}'});
            </Text>

            {/* Terminal Panel at Screen Bottom */}
            <mesh position={[1.05, -0.5, 0]}>
              <boxGeometry args={[2.15, 0.22, 0.002]} />
              <meshStandardMaterial color="#0a0f1c" />
            </mesh>
            <Text position={[0, -0.45, 0.004]} fontSize={0.038} color="#00ff66" anchorX="left">
              ➜ vite v5.4 ready in 436ms [Local: http://localhost:3000]
            </Text>
            <Text position={[0, -0.52, 0.004]} fontSize={0.038} color="#00f0ff" anchorX="left">
              [SYSTEM] WebGL 2.0 Shaders Compiled • 60 FPS _
            </Text>
          </group>
        </group>

        {/* Ambient Screenbar Light Bar Mounted on Top */}
        <group position={[0, 0.58, 0.08]}>
          <mesh castShadow>
            <boxGeometry args={[1.4, 0.04, 0.05]} />
            <meshStandardMaterial color="#283048" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.022, 0]}>
            <boxGeometry args={[1.35, 0.01, 0.03]} />
            <meshStandardMaterial
              color="#ffddaa"
              emissive="#ffddaa"
              emissiveIntensity={3.5}
              toneMapped={false}
            />
          </mesh>
          <mesh position={[0, 0.03, 0]}>
            <boxGeometry args={[0.12, 0.06, 0.04]} />
            <meshStandardMaterial color="#101524" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0.035, 0.03, 0.022]}>
            <sphereGeometry args={[0.008, 8, 8]} />
            <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={3.5} />
          </mesh>
        </group>
      </group>

      {/* SECONDARY VERTICAL / PORTRAIT MONITOR (Angled Inward at 25 deg) */}
      <group position={[1.45, 2.35, -0.4]} rotation={[0, -Math.PI / 7, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.75, 1.35, 0.06]} />
          <meshStandardMaterial color="#1e263d" metalness={0.85} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <boxGeometry args={[0.68, 1.28, 0.005]} />
          <meshStandardMaterial
            color="#0d1424"
            emissive="#00e5ff"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.4}
          />
        </mesh>
        {/* Screen Content: Telemetry & Performance Gauges */}
        <group position={[0, 0, 0.04]}>
          <Text position={[0, 0.52, 0]} fontSize={0.048} color="#00f0ff" anchorX="center">
            SYS METRICS
          </Text>
          <Text position={[-0.28, 0.38, 0]} fontSize={0.038} color="#cbd5e1" anchorX="left">
            CPU: 24%
          </Text>
          <mesh position={[0, 0.32, 0]}>
            <boxGeometry args={[0.56, 0.03, 0.002]} />
            <meshStandardMaterial color="#2a334d" />
          </mesh>
          <mesh position={[-0.14, 0.32, 0.002]}>
            <boxGeometry args={[0.28, 0.03, 0.002]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} />
          </mesh>

          <Text position={[-0.28, 0.22, 0]} fontSize={0.038} color="#cbd5e1" anchorX="left">
            GPU: 68% // 54°C
          </Text>
          <mesh position={[0, 0.16, 0]}>
            <boxGeometry args={[0.56, 0.03, 0.002]} />
            <meshStandardMaterial color="#2a334d" />
          </mesh>
          <mesh position={[-0.05, 0.16, 0.002]}>
            <boxGeometry args={[0.38, 0.03, 0.002]} />
            <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={2.5} />
          </mesh>

          <Text position={[-0.28, 0.06, 0]} fontSize={0.038} color="#cbd5e1" anchorX="left">
            RAM: 18.2 / 64 GB
          </Text>
          <mesh position={[0, 0.0, 0]}>
            <boxGeometry args={[0.56, 0.03, 0.002]} />
            <meshStandardMaterial color="#2a334d" />
          </mesh>
          <mesh position={[-0.12, 0.0, 0.002]}>
            <boxGeometry args={[0.32, 0.03, 0.002]} />
            <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={2.5} />
          </mesh>

          <mesh position={[0, -0.35, 0]}>
            <boxGeometry args={[0.56, 0.38, 0.002]} />
            <meshStandardMaterial color="#0d1220" />
          </mesh>
          <Text position={[0, -0.48, 0.004]} fontSize={0.034} color="#ffaa00" anchorX="center">
            NETWORK: 1.2 Gbps ▲▼
          </Text>
        </group>
      </group>

      {/* ================================================================= */}
      {/* 3. CYBERPUNK HIGH-END PC TOWER (Glass Panel with Glowing Rig)     */}
      {/* ================================================================= */}
      <group position={[1.75, 1.98, 0.1]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.55, 0.95, 0.85]} />
          <meshStandardMaterial color="#1a2236" roughness={0.25} metalness={0.85} />
        </mesh>

        {/* Tinted Tempered Glass Side Panel */}
        <mesh position={[-0.28, 0, 0]}>
          <boxGeometry args={[0.01, 0.88, 0.78]} />
          <meshStandardMaterial
            color="#00f0ff"
            roughness={0.05}
            metalness={0.9}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* 3x Rotating RGB Liquid-Cooling Fans */}
        <group ref={fanGroupRef} position={[-0.1, 0, 0.38]}>
          <group position={[0, 0.26, 0]}>
            <mesh>
              <ringGeometry args={[0.09, 0.12, 24]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.5} toneMapped={false} />
            </mesh>
            <mesh>
              <boxGeometry args={[0.02, 0.16, 0.005]} />
              <meshStandardMaterial color="#ffffff" emissive="#00f0ff" emissiveIntensity={2.0} />
            </mesh>
          </group>
          <group position={[0, 0, 0]}>
            <mesh>
              <ringGeometry args={[0.09, 0.12, 24]} />
              <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={3.5} toneMapped={false} />
            </mesh>
            <mesh>
              <boxGeometry args={[0.02, 0.16, 0.005]} />
              <meshStandardMaterial color="#ffffff" emissive="#ff007f" emissiveIntensity={2.0} />
            </mesh>
          </group>
          <group position={[0, -0.26, 0]}>
            <mesh>
              <ringGeometry args={[0.09, 0.12, 24]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.5} toneMapped={false} />
            </mesh>
            <mesh>
              <boxGeometry args={[0.02, 0.16, 0.005]} />
              <meshStandardMaterial color="#ffffff" emissive="#00f0ff" emissiveIntensity={2.0} />
            </mesh>
          </group>
        </group>

        {/* GPU with Glowing Side Logo Strip */}
        <group position={[-0.1, -0.15, -0.05]}>
          <mesh castShadow>
            <boxGeometry args={[0.25, 0.14, 0.55]} />
            <meshStandardMaterial color="#26304d" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[-0.13, 0, 0]}>
            <boxGeometry args={[0.005, 0.04, 0.45]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={3.0}
              toneMapped={false}
            />
          </mesh>
        </group>

        {/* RAM RGB Sticks on Motherboard */}
        <group position={[0.05, 0.18, -0.08]}>
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.02, 0.12, 0.14]} />
            <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={3.0} />
          </mesh>
          <mesh position={[0, 0, -0.02]}>
            <boxGeometry args={[0.02, 0.12, 0.14]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} />
          </mesh>
        </group>
      </group>

      {/* ================================================================= */}
      {/* 4. PERIPHERALS & DESK ACCESSORIES                                 */}
      {/* ================================================================= */}
      
      {/* Compact 75% Custom Mechanical Keyboard */}
      <group position={[-0.2, 1.51, 0.25]} rotation={[0.05, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.05, 0.04, 0.42]} />
          <meshStandardMaterial color="#242c44" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.015, 0]}>
          <boxGeometry args={[1.06, 0.01, 0.43]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} />
        </mesh>
        <mesh position={[0, 0.025, 0]} castShadow>
          <boxGeometry args={[0.98, 0.025, 0.36]} />
          <meshStandardMaterial color="#1a2033" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[-0.28, 0.04, -0.05]}>
          <boxGeometry args={[0.12, 0.015, 0.12]} />
          <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={2.5} />
        </mesh>
        <mesh position={[0, 0.04, 0.1]}>
          <boxGeometry args={[0.35, 0.015, 0.06]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} />
        </mesh>
        <mesh position={[0, 0, -0.26]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.3, 12]} />
          <meshStandardMaterial color="#00f0ff" roughness={0.4} />
        </mesh>
      </group>

      {/* Wireless Ergonomic Gaming Mouse */}
      <group position={[0.65, 1.52, 0.25]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.18, 0.06, 0.3]} />
          <meshStandardMaterial color="#202840" metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.032, -0.06]}>
          <boxGeometry args={[0.025, 0.01, 0.06]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} />
        </mesh>
      </group>

      {/* Left Studio Monitor Speaker */}
      <group position={[-1.75, 1.82, -0.4]} rotation={[0, Math.PI / 7, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.65, 0.42]} />
          <meshStandardMaterial color="#1d2438" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.16, 0.215]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.01, 16]} />
          <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={1.5} metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.1, 0.215]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.01, 16]} />
          <meshStandardMaterial color="#354060" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Right Studio Monitor Speaker */}
      <group position={[0.85, 1.82, -0.7]} rotation={[0, -Math.PI / 8, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.38, 0.65, 0.42]} />
          <meshStandardMaterial color="#1d2438" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.16, 0.215]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.01, 16]} />
          <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={1.5} metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.1, 0.215]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.01, 16]} />
          <meshStandardMaterial color="#354060" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Cyberpunk Energy Drink Can & Thermal Mug on Desk */}
      <group position={[-1.15, 1.58, 0.4]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.18, 16]} />
          <meshStandardMaterial color="#323e5c" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0.25, 0.01, -0.1]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.2, 16]} />
          <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={1.5} metalness={0.9} roughness={0.15} />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 5. ERGONOMIC CYBERPUNK CHAIR                                      */}
      {/* ================================================================= */}
      <group position={[-0.2, 0.82, 1.05]} rotation={[0, Math.PI, 0]}>
        {/* 5-Arm Star Base */}
        <group position={[0, -0.75, 0]}>
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * Math.PI * 2) / 5;
            return (
              <group key={i} rotation={[0, angle, 0]}>
                <mesh position={[0.3, 0.05, 0]} castShadow>
                  <boxGeometry args={[0.6, 0.04, 0.06]} />
                  <meshStandardMaterial color="#2d3650" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0.55, -0.02, 0]} castShadow>
                  <sphereGeometry args={[0.04, 12, 12]} />
                  <meshStandardMaterial color="#161c2c" roughness={0.6} />
                </mesh>
              </group>
            );
          })}
          <mesh position={[0, 0.25, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.45, 16]} />
            <meshStandardMaterial color="#404c70" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>

        {/* Seat Cushion */}
        <mesh position={[0, -0.22, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.85, 0.12, 0.85]} />
          <meshStandardMaterial color="#222a40" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Seat Neon Stitching Trim */}
        <mesh position={[0, -0.22, 0.42]}>
          <boxGeometry args={[0.8, 0.03, 0.02]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} />
        </mesh>

        {/* High-Back Ergonomic Backrest with Lumbar Contour */}
        <group position={[0, 0.42, -0.38]} rotation={[-0.1, 0, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.78, 1.15, 0.12]} />
            <meshStandardMaterial color="#1c2438" metalness={0.6} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.25, 0.07]} castShadow>
            <boxGeometry args={[0.62, 0.25, 0.08]} />
            <meshStandardMaterial color="#2b3654" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.52, 0.04]} castShadow>
            <boxGeometry args={[0.5, 0.24, 0.1]} />
            <meshStandardMaterial color="#2b3654" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[-0.16, 0.28, 0]}>
            <boxGeometry args={[0.1, 0.06, 0.14]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} />
          </mesh>
          <mesh position={[0.16, 0.28, 0]}>
            <boxGeometry args={[0.1, 0.06, 0.14]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} />
          </mesh>
        </group>

        {/* Left & Right Armrests */}
        <group position={[-0.46, -0.02, -0.05]}>
          <mesh castShadow>
            <boxGeometry args={[0.06, 0.35, 0.06]} />
            <meshStandardMaterial color="#303b58" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.2, 0.05]} castShadow>
            <boxGeometry args={[0.1, 0.05, 0.38]} />
            <meshStandardMaterial color="#1a2236" roughness={0.4} />
          </mesh>
        </group>
        <group position={[0.46, -0.02, -0.05]}>
          <mesh castShadow>
            <boxGeometry args={[0.06, 0.35, 0.06]} />
            <meshStandardMaterial color="#303b58" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.2, 0.05]} castShadow>
            <boxGeometry args={[0.1, 0.05, 0.38]} />
            <meshStandardMaterial color="#1a2236" roughness={0.4} />
          </mesh>
        </group>
      </group>

      {/* ================================================================= */}
      {/* 6. LOCALIZED SCENE LIGHTS                                         */}
      {/* ================================================================= */}
      
      {/* Boosted Cyan Screen Glow onto Desk Mat & Keyboard */}
      <pointLight
        ref={screenGlowRef}
        position={[-0.2, 2.1, -0.1]}
        color="#00f0ff"
        intensity={3.2}
        distance={6.0}
        decay={2}
      />

      {/* Boosted Magenta PC RGB Glow */}
      <pointLight
        position={[1.5, 1.95, 0.1]}
        color="#ff007f"
        intensity={2.5}
        distance={5.0}
        decay={2}
      />
    </group>
  );
};
