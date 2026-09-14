import React from 'react';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

interface EffectsProps {
  enabled?: boolean;
}

export const Effects: React.FC<EffectsProps> = ({ enabled = true }) => {
  if (!enabled) return null;

  return (
    <EffectComposer multisampling={0} enableNormalPass={false} autoClear={false}>
      {/* Controlled Cyberpunk Bloom for genuine neon bleeding */}
      <Bloom
        luminanceThreshold={0.7}
        luminanceSmoothing={0.3}
        intensity={1.0}
        mipmapBlur={true}
      />

      {/* Cinematic Dark Vignette */}
      <Vignette
        eskil={false}
        offset={0.3}
        darkness={0.6}
      />

      {/* Subtle CRT Chromatic Aberration */}
      <ChromaticAberration
        offset={new THREE.Vector2(0.0006, 0.0006)}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  );
};
