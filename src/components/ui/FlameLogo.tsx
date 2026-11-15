import React from 'react';

interface FlameLogoProps {
  variant?: 'full' | 'icon-only' | 'wordmark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const FlameLogo: React.FC<FlameLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  // Balanced retina sizing for pixel-perfect clarity
  const sizeMap = {
    sm: { icon: 'h-7 sm:h-8', wordmark: 'h-5 sm:h-6' },
    md: { icon: 'h-9 sm:h-10', wordmark: 'h-6 sm:h-7' },
    lg: { icon: 'h-11 sm:h-12', wordmark: 'h-8 sm:h-9' },
    xl: { icon: 'h-14 sm:h-16', wordmark: 'h-10 sm:h-12' },
  }[size];

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`group relative inline-flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none select-none ${className}`}
      aria-label="Pyrow Home"
    >
      {/* Dynamic Ambient Mesh Glow behind logo: Electric Violet + Ultra Purple */}
      <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-r from-violet-600/35 via-purple-500/30 to-indigo-500/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 1. Official Authentic Pyrow Icon Mark (Geometric Violet 'P' Ribbon Mark) */}
      {(variant === 'full' || variant === 'icon-only') && (
        <div className="relative flex items-center justify-center flex-shrink-0">
          {/* Subtle pulsating back-violet on hover */}
          <div className="absolute -inset-1 rounded-full bg-violet-500/25 blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-pulse pointer-events-none" />
          
          <img
            src="/assets/pyrow-icon-transparent.png"
            alt="Pyrow Icon"
            draggable={false}
            className={`${sizeMap.icon} w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_8px_rgba(139,92,246,0.35)] group-hover:drop-shadow-[0_4px_16px_rgba(168,85,247,0.55)] group-hover:rotate-[-2deg] select-none`}
            style={{ imageRendering: 'auto' }}
          />
        </div>
      )}

      {/* 2. Official Authentic Pyrow 3D Violet Typography Wordmark */}
      {(variant === 'full' || variant === 'wordmark') && (
        <div className="relative flex items-center">
          <img
            src="/assets/pyrow-logo-transparent.png"
            alt="Pyrow"
            draggable={false}
            className={`${sizeMap.wordmark} w-auto object-contain transition-all duration-300 drop-shadow-sm group-hover:brightness-105 select-none`}
            style={{ imageRendering: 'auto' }}
          />
        </div>
      )}
    </a>
  );
};
