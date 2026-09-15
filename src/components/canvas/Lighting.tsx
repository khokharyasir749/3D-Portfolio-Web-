interface LightingProps {
  theme?: 'dark' | 'light';
}

export const Lighting: React.FC<LightingProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  return (
    <>
      {/* 1. Global Soft Ambient Fill */}
      <ambientLight intensity={isLight ? 0.75 : 0.45} color={isLight ? "#e2e8f0" : "#181828"} />

      {/* 2. Soft Neutral Key Light (Left-Front Studio Placement) */}
      <directionalLight
        position={[-3, 4, 3.5]}
        intensity={isLight ? 1.1 : 0.9}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* 3. Subtle Rim Silhouette Light */}
      <directionalLight
        position={[3.5, 3.0, -3.0]}
        intensity={isLight ? 0.45 : 0.65}
        color={isLight ? "#a855f7" : "#6b21a8"}
      />

      {/* 4. Very Soft Front-Right Fill */}
      <directionalLight
        position={[3, 2, 3]}
        intensity={isLight ? 0.55 : 0.35}
        color={isLight ? "#f8fafc" : "#cbd5e1"}
      />
    </>
  );
};

export default Lighting;
