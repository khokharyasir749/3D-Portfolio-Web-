import React from 'react';
import { TopNav } from './TopNav';
import { LeftControlBar } from './LeftControlBar';

interface OverlayHUDProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export const OverlayHUD: React.FC<OverlayHUDProps> = ({
  activeSectionId,
  onNavigate,
  isMuted,
  onToggleAudio,
}) => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 flex flex-col justify-between select-none"
      style={{ pointerEvents: 'none' }}
    >
      {/* Ultra-Minimal Edge-to-Edge Top Navigation */}
      <TopNav
        activeSectionId={activeSectionId}
        onNavigate={onNavigate}
      />

      {/* Persistent Left Control Bar (Sound, LinkedIn, X, GitHub, Theme) */}
      <LeftControlBar
        isMuted={isMuted}
        onToggleAudio={onToggleAudio}
      />
    </div>
  );
};

export default OverlayHUD;
