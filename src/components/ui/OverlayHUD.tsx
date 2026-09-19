import React from 'react';
import { TopNav } from './TopNav';

interface OverlayHUDProps {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  isMuted: boolean;
  onToggleAudio: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const OverlayHUD: React.FC<OverlayHUDProps> = ({
  activeSectionId,
  onNavigate,
  isMuted,
  onToggleAudio,
  theme = 'dark',
  onToggleTheme,
}) => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 flex flex-col justify-between select-none"
      style={{ pointerEvents: 'none' }}
    >
      {/* Edge-to-Edge Top Navigation with Controls & Socials */}
      <TopNav
        activeSectionId={activeSectionId}
        onNavigate={onNavigate}
        isMuted={isMuted}
        onToggleAudio={onToggleAudio}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
    </div>
  );
};

export default OverlayHUD;
