import React from 'react';
import { Text } from '@react-three/drei';

export const RoomShell: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* ================================================================= */}
      {/* 1. DIORAMA PEDESTAL & SOLID FLOOR PLATFORM                        */}
      {/* ================================================================= */}
      
      {/* Lower Pedestal Base Tier */}
      <mesh position={[0, -0.7, 0]} receiveShadow>
        <boxGeometry args={[10.6, 0.2, 10.6]} />
        <meshStandardMaterial
          color="#0b0c12"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Neon Glow Trim Between Pedestal Tiers (Vibrant Cyan) */}
      <mesh position={[0, -0.59, 0]}>
        <boxGeometry args={[10.5, 0.05, 10.5]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={2.5}
          toneMapped={false}
        />
      </mesh>

      {/* Main Floor Platform Slab (Dark matte carbon architectural slab) */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <boxGeometry args={[10, 0.6, 10]} />
        <meshStandardMaterial
          color="#11131a"
          roughness={0.75}
          metalness={0.2}
        />
      </mesh>

      {/* Solid Tech Floor Tiles with Distinct Beveled Inlays & Clean Grid Seams */}
      <group position={[0, 0.005, 0]}>
        {/* Floor Tile Panel 1 (Back-Left quadrant) */}
        <mesh position={[-2.3, 0, -2.3]} receiveShadow>
          <boxGeometry args={[4.4, 0.015, 4.4]} />
          <meshStandardMaterial color="#141722" roughness={0.7} metalness={0.25} />
        </mesh>
        {/* Floor Tile Panel 2 (Back-Right quadrant) */}
        <mesh position={[2.3, 0, -2.3]} receiveShadow>
          <boxGeometry args={[4.4, 0.015, 4.4]} />
          <meshStandardMaterial color="#11131a" roughness={0.75} metalness={0.2} />
        </mesh>
        {/* Floor Tile Panel 3 (Front-Left quadrant) */}
        <mesh position={[-2.3, 0, 2.3]} receiveShadow>
          <boxGeometry args={[4.4, 0.015, 4.4]} />
          <meshStandardMaterial color="#11131a" roughness={0.75} metalness={0.2} />
        </mesh>
        {/* Floor Tile Panel 4 (Front-Right quadrant) */}
        <mesh position={[2.3, 0, 2.3]} receiveShadow>
          <boxGeometry args={[4.4, 0.015, 4.4]} />
          <meshStandardMaterial color="#141722" roughness={0.7} metalness={0.25} />
        </mesh>
        
        {/* Subtle Embedded Floor Grid Seams */}
        <mesh position={[0, 0.01, 0]} receiveShadow>
          <boxGeometry args={[0.04, 0.01, 9.2]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 0.01, 0]} receiveShadow>
          <boxGeometry args={[9.2, 0.01, 0.04]} />
          <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Skirting Boards with Warm Amber LED Channel */}
      {/* Left Wall Skirting */}
      <mesh position={[0, 0.12, -4.85]} receiveShadow>
        <boxGeometry args={[9.8, 0.24, 0.12]} />
        <meshStandardMaterial color="#181c28" roughness={0.6} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.04, -4.78]}>
        <boxGeometry args={[9.6, 0.04, 0.02]} />
        <meshStandardMaterial color="#ff7700" emissive="#ff7700" emissiveIntensity={2.5} toneMapped={false} />
      </mesh>

      {/* Right Wall Skirting */}
      <mesh position={[-4.85, 0.12, 0]} receiveShadow>
        <boxGeometry args={[0.12, 0.24, 9.8]} />
        <meshStandardMaterial color="#181c28" roughness={0.6} metalness={0.4} />
      </mesh>
      <mesh position={[-4.78, 0.04, 0]}>
        <boxGeometry args={[0.02, 0.04, 9.6]} />
        <meshStandardMaterial color="#ff7700" emissive="#ff7700" emissiveIntensity={2.5} toneMapped={false} />
      </mesh>

      {/* ================================================================= */}
      {/* 2. CORNER JUNCTION COLUMN                                         */}
      {/* ================================================================= */}
      <group position={[-4.8, 3.25, -4.8]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[0.5, 6.5, 0.5]} />
          <meshStandardMaterial color="#1a1e2a" roughness={0.6} metalness={0.5} />
        </mesh>
        {/* Vertical Neon Light Channel running up the corner */}
        <mesh position={[0.26, 0, 0.26]}>
          <boxGeometry args={[0.03, 6.3, 0.03]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} toneMapped={false} />
        </mesh>
        {/* Reinforcement Rings */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.56, 0.18, 0.56]} />
          <meshStandardMaterial color="#222838" roughness={0.5} metalness={0.6} />
        </mesh>
        <mesh position={[0, -1.5, 0]}>
          <boxGeometry args={[0.56, 0.18, 0.56]} />
          <meshStandardMaterial color="#222838" roughness={0.5} metalness={0.6} />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 3. BACK-LEFT WALL (Z = -4.95, facing +Z)                          */}
      {/* ================================================================= */}
      <group position={[0, 3.25, -4.95]}>
        {/* Main Wall Slab (Dark Matte Architectural Finish) */}
        <mesh receiveShadow>
          <boxGeometry args={[9.9, 6.5, 0.2]} />
          <meshStandardMaterial color="#11131a" roughness={0.75} metalness={0.2} />
        </mesh>

        {/* Industrial Wall Panels (Dark Matte Accent Panelling) */}
        <group position={[0, 0, 0.11]}>
          <mesh position={[-2.4, 0, 0]} receiveShadow>
            <boxGeometry args={[4.2, 5.8, 0.05]} />
            <meshStandardMaterial color="#161922" roughness={0.7} metalness={0.25} />
          </mesh>
          <mesh position={[2.4, 0, 0]} receiveShadow>
            <boxGeometry args={[4.2, 5.8, 0.05]} />
            <meshStandardMaterial color="#161922" roughness={0.7} metalness={0.25} />
          </mesh>
        </group>

        {/* Top Wall Crown Conduit */}
        <mesh position={[0, 3.1, 0.15]} receiveShadow>
          <boxGeometry args={[9.9, 0.35, 0.22]} />
          <meshStandardMaterial color="#2a324b" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Wall Conduit Pipes */}
        <mesh position={[0, 2.5, 0.16]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 9.6, 16]} />
          <meshStandardMaterial color="#404c70" roughness={0.2} metalness={0.85} />
        </mesh>
        <mesh position={[0, 2.38, 0.16]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.018, 0.018, 9.6, 16]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} toneMapped={false} />
        </mesh>

        {/* ------------------------------------------------------------- */}
        {/* NEON SIGN: "CODE // CREATE"                                   */}
        {/* ------------------------------------------------------------- */}
        <group position={[-1.2, 1.8, 0.18]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4.2, 0.8, 0.04]} />
            <meshStandardMaterial
              color="#101424"
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          <mesh position={[0, 0, 0.025]}>
            <boxGeometry args={[4.1, 0.72, 0.01]} />
            <meshStandardMaterial
              color="#ff007f"
              emissive="#ff007f"
              emissiveIntensity={2.5}
              wireframe
            />
          </mesh>
          <Text
            position={[0, 0, 0.04]}
            fontSize={0.28}
            color="#00f0ff"
            letterSpacing={0.12}
            anchorX="center"
            anchorY="middle"
          >
            CODE // CREATE
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={3.5}
              toneMapped={false}
            />
          </Text>
          <mesh position={[2.3, 0, 0.02]}>
            <boxGeometry args={[0.25, 0.5, 0.08]} />
            <meshStandardMaterial color="#2a324b" roughness={0.3} metalness={0.8} />
          </mesh>
          <mesh position={[2.3, 0.15, 0.07]}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={3.0} toneMapped={false} />
          </mesh>
        </group>

        {/* ------------------------------------------------------------- */}
        {/* MODULAR TECH SHELVES & SERVER RACK (Left Wall)                */}
        {/* ------------------------------------------------------------- */}
        <group position={[2.5, 0.2, 0.15]}>
          {/* Vertical Struts */}
          <mesh position={[-1.2, 0, 0]}>
            <boxGeometry args={[0.08, 3.2, 0.08]} />
            <meshStandardMaterial color="#354060" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[1.2, 0, 0]}>
            <boxGeometry args={[0.08, 3.2, 0.08]} />
            <meshStandardMaterial color="#354060" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Top Shelf */}
          <group position={[0, 0.8, 0.35]}>
            <mesh receiveShadow castShadow>
              <boxGeometry args={[2.7, 0.06, 0.7]} />
              <meshStandardMaterial color="#262f48" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0, -0.035, 0.3]}>
              <boxGeometry args={[2.5, 0.015, 0.02]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} toneMapped={false} />
            </mesh>
            {/* High-tech Props */}
            <mesh position={[-0.8, 0.16, 0]} castShadow>
              <boxGeometry args={[0.35, 0.25, 0.45]} />
              <meshStandardMaterial color="#3a4568" metalness={0.85} roughness={0.2} />
            </mesh>
            <mesh position={[-0.35, 0.12, 0]} castShadow>
              <boxGeometry args={[0.3, 0.18, 0.4]} />
              <meshStandardMaterial color="#2a334d" metalness={0.85} roughness={0.2} />
            </mesh>
            <mesh position={[0.7, 0.22, 0]} castShadow>
              <cylinderGeometry args={[0.12, 0.12, 0.38, 16]} />
              <meshStandardMaterial
                color="#00f0ff"
                emissive="#00f0ff"
                emissiveIntensity={2.5}
                roughness={0.1}
                metalness={0.5}
                transparent
                opacity={0.9}
              />
            </mesh>
          </group>

          {/* Bottom Shelf */}
          <group position={[0, -0.4, 0.35]}>
            <mesh receiveShadow castShadow>
              <boxGeometry args={[2.7, 0.06, 0.7]} />
              <meshStandardMaterial color="#262f48" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0, -0.035, 0.3]}>
              <boxGeometry args={[2.5, 0.015, 0.02]} />
              <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={3.0} toneMapped={false} />
            </mesh>
            <mesh position={[-0.6, 0.18, 0]} castShadow>
              <boxGeometry args={[0.8, 0.3, 0.45]} />
              <meshStandardMaterial color="#303b5a" metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0.5, 0.15, 0]} castShadow>
              <boxGeometry args={[0.9, 0.24, 0.45]} />
              <meshStandardMaterial color="#262f48" metalness={0.8} roughness={0.25} />
            </mesh>
          </group>
        </group>

        {/* Futuristic High-Tech Server Rack Tower on Far Left */}
        <group position={[4.1, -0.5, 0.4]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.8, 4.2, 0.7]} />
            <meshStandardMaterial color="#1a2033" roughness={0.3} metalness={0.8} />
          </mesh>
          {/* Server Blade Slots & LED Status Arrays */}
          {[-1.5, -1.0, -0.5, 0, 0.5, 1.0, 1.5].map((y, idx) => (
            <group key={idx} position={[0, y, 0.36]}>
              <mesh>
                <boxGeometry args={[0.7, 0.35, 0.02]} />
                <meshStandardMaterial color="#121624" roughness={0.4} metalness={0.7} />
              </mesh>
              {/* Activity LEDs */}
              <mesh position={[-0.25, 0, 0.015]}>
                <sphereGeometry args={[0.018, 8, 8]} />
                <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={3.0} />
              </mesh>
              <mesh position={[-0.18, 0, 0.015]}>
                <sphereGeometry args={[0.018, 8, 8]} />
                <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} />
              </mesh>
              <mesh position={[-0.11, 0, 0.015]}>
                <sphereGeometry args={[0.018, 8, 8]} />
                <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2.5} />
              </mesh>
            </group>
          ))}
        </group>
      </group>

      {/* ================================================================= */}
      {/* 4. BACK-RIGHT WALL (X = -4.95, facing +X)                         */}
      {/* ================================================================= */}
      <group position={[-4.95, 3.25, 0]}>
        {/* Main Wall Slab (Dark Matte Architectural Finish) */}
        <mesh receiveShadow>
          <boxGeometry args={[0.2, 6.5, 9.9]} />
          <meshStandardMaterial color="#11131a" roughness={0.75} metalness={0.2} />
        </mesh>

        {/* Industrial Wall Panels (Dark Matte Accent Panelling) */}
        <group position={[0.11, 0, 0]}>
          <mesh position={[0, 0, -2.4]} receiveShadow>
            <boxGeometry args={[0.05, 5.8, 4.2]} />
            <meshStandardMaterial color="#161922" roughness={0.7} metalness={0.25} />
          </mesh>
          <mesh position={[0, 0, 2.4]} receiveShadow>
            <boxGeometry args={[0.05, 5.8, 4.2]} />
            <meshStandardMaterial color="#161922" roughness={0.7} metalness={0.25} />
          </mesh>
        </group>

        {/* Top Wall Crown Conduit */}
        <mesh position={[0.15, 3.1, 0]} receiveShadow>
          <boxGeometry args={[0.22, 0.35, 9.9]} />
          <meshStandardMaterial color="#2a324b" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* ------------------------------------------------------------- */}
        {/* CYBERPUNK POSTER / HOLOGRAPHIC CIRCUIT DISPLAY 1              */}
        {/* ------------------------------------------------------------- */}
        <group position={[0.18, 1.2, -1.8]}>
          <mesh>
            <boxGeometry args={[0.04, 2.2, 1.6]} />
            <meshStandardMaterial color="#121626" roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh position={[0.022, 0, 0]}>
            <boxGeometry args={[0.01, 2.1, 1.5]} />
            <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={2.5} wireframe />
          </mesh>
          <Text
            position={[0.03, 0.65, 0]}
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.16}
            color="#ff007f"
            letterSpacing={0.1}
            anchorX="center"
            anchorY="middle"
          >
            SYS // 2077
            <meshStandardMaterial color="#ff007f" emissive="#ff007f" emissiveIntensity={3.5} toneMapped={false} />
          </Text>
          <Text
            position={[0.03, 0.3, 0]}
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.1}
            color="#00f0ff"
            letterSpacing={0.06}
            anchorX="center"
            anchorY="middle"
          >
            NEURAL MATRIX ACTIVE
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} toneMapped={false} />
          </Text>
          <group position={[0.025, -0.35, 0]} rotation={[0, Math.PI / 2, 0]}>
            <mesh position={[0, 0.2, 0]}>
              <boxGeometry args={[1.1, 0.02, 0.01]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} />
            </mesh>
            <mesh position={[0, -0.2, 0]}>
              <boxGeometry args={[1.1, 0.02, 0.01]} />
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.0} />
            </mesh>
            <mesh position={[-0.3, 0, 0]}>
              <boxGeometry args={[0.02, 0.4, 0.01]} />
              <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2.5} />
            </mesh>
            <mesh position={[0.3, 0, 0]}>
              <boxGeometry args={[0.02, 0.4, 0.01]} />
              <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2.5} />
            </mesh>
          </group>
        </group>

        {/* ------------------------------------------------------------- */}
        {/* CYBERPUNK POSTER 2 (Tech Schematic)                          */}
        {/* ------------------------------------------------------------- */}
        <group position={[0.18, 1.2, 1.8]}>
          <mesh>
            <boxGeometry args={[0.04, 1.8, 1.4]} />
            <meshStandardMaterial color="#121626" roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh position={[0.022, 0, 0]}>
            <boxGeometry args={[0.01, 1.7, 1.3]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2.5} wireframe />
          </mesh>
          <Text
            position={[0.03, 0.45, 0]}
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.15}
            color="#00f0ff"
            letterSpacing={0.1}
            anchorX="center"
            anchorY="middle"
          >
            PROTOCOL // V3
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={3.5} toneMapped={false} />
          </Text>
          <Text
            position={[0.03, 0.15, 0]}
            rotation={[0, Math.PI / 2, 0]}
            fontSize={0.09}
            color="#ffaa00"
            letterSpacing={0.06}
            anchorX="center"
            anchorY="middle"
          >
            OVERCLOCK: 144%
            <meshStandardMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={3.0} toneMapped={false} />
          </Text>
        </group>

        {/* ------------------------------------------------------------- */}
        {/* INDUSTRIAL VENTILATION INTAKE GRILLE                         */}
        {/* ------------------------------------------------------------- */}
        <group position={[0.18, -1.2, 0]}>
          <mesh>
            <boxGeometry args={[0.06, 1.2, 3.2]} />
            <meshStandardMaterial color="#262f48" roughness={0.3} metalness={0.8} />
          </mesh>
          <mesh position={[-0.01, 0, 0]}>
            <boxGeometry args={[0.02, 1.0, 3.0]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} />
          </mesh>
          {[-0.4, -0.2, 0, 0.2, 0.4].map((y, idx) => (
            <mesh key={idx} position={[0.035, y, 0]}>
              <boxGeometry args={[0.03, 0.08, 2.9]} />
              <meshStandardMaterial color="#161c2c" roughness={0.4} metalness={0.85} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
};
