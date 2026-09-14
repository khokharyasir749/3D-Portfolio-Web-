import React from 'react';

export const Lighting: React.FC = () => {
  return (
    <>
      {/* 1. Global Soft Ambient Fill (Subtle & Damped) */}
      <ambientLight intensity={0.45} color="#181828" />

      {/* 2. Soft Neutral Key Light (Left-Front Studio Placement) */}
      <directionalLight
        position={[-3, 4, 3.5]}
        intensity={0.9}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* 3. Subtle Deep Violet Rim Silhouette Light */}
      <directionalLight
        position={[3.5, 3.0, -3.0]}
        intensity={0.65}
        color="#6b21a8"
      />

      {/* 4. Very Soft Front-Right Fill */}
      <directionalLight
        position={[3, 2, 3]}
        intensity={0.35}
        color="#cbd5e1"
      />
    </>
  );
};

export default Lighting;
