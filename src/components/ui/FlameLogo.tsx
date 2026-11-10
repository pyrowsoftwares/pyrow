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
      {/* Dynamic Ambient Mesh Glow behind logo: Flaring Flame Orange + Tech Cyan */}
      <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-r from-cyber-blue/35 via-ember-500/30 to-flare-amber/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 1. Official Authentic Pyrow Icon Mark (Circuit 'P' + Ascending Fire Arrow) */}
      {(variant === 'full' || variant === 'icon-only') && (
        <div className="relative flex items-center justify-center flex-shrink-0">
          {/* Subtle pulsating back-ember on hover */}
          <div className="absolute -inset-1 rounded-full bg-ember-500/20 blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-pulse pointer-events-none" />
          
          <img
            src="/assets/pyrow-icon-transparent.png"
            alt="Pyrow Icon"
            draggable={false}
            className={`${sizeMap.icon} w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,77,0,0.25)] group-hover:drop-shadow-[0_4px_16px_rgba(0,180,255,0.45)] group-hover:rotate-[-2deg] select-none`}
            style={{ imageRendering: 'auto' }}
          />
        </div>
      )}

      {/* 2. Official Authentic Pyrow Typography Wordmark */}
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
