import React from 'react';

interface CodeFlameIconProps {
  className?: string;
  size?: number;
}

export const CodeFlameIcon: React.FC<CodeFlameIconProps> = ({
  className = 'w-8 h-8',
  size = 32,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="cfBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#050811" />
        </linearGradient>

        <linearGradient id="cfBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFB703" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.3" />
        </linearGradient>

        <linearGradient id="cfFlame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF3700" />
          <stop offset="45%" stopColor="#FF6B00" />
          <stop offset="80%" stopColor="#FFB703" />
          <stop offset="100%" stopColor="#FFF066" />
        </linearGradient>

        <linearGradient id="cfCore" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF8A00" />
          <stop offset="70%" stopColor="#FFF6A6" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        <linearGradient id="cfBracket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB703" />
          <stop offset="100%" stopColor="#FF4D00" />
        </linearGradient>

        <filter id="cfGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Squircle Base Frame */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="16"
        fill="url(#cfBg)"
        stroke="url(#cfBorder)"
        strokeWidth="2"
      />

      {/* Code Bracket Left: < */}
      <path
        d="M 20 22 L 10 32 L 20 42"
        fill="none"
        stroke="url(#cfBracket)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Code Bracket Right: > */}
      <path
        d="M 44 22 L 54 32 L 44 42"
        fill="none"
        stroke="url(#cfBracket)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Pyrow Flame & Engineering Core */}
      <g filter="url(#cfGlow)">
        {/* Outer Flame Silhouette */}
        <path
          d="M 32 11 C 36.5 19 41.5 24.5 39.5 33 C 38.2 38.5 34.8 42.5 32 48 C 29.2 42.5 25.8 38.5 24.5 33 C 22.5 24.5 27.5 19 32 11 Z"
          fill="url(#cfFlame)"
        />

        {/* Inner Core Luminous Spark */}
        <path
          d="M 32 23 C 34.5 27 37 31 35.8 36.5 C 34.6 40 33 42.5 32 46 C 31 42.5 29.4 40 28.2 36.5 C 27 31 29.5 27 32 23 Z"
          fill="url(#cfCore)"
        />

        {/* Ascending Code Slash Spark */}
        <path
          d="M 35 19 L 29 41"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
      </g>

      {/* Code Particle Sparks */}
      <circle cx="32" cy="11" r="1.5" fill="#FFE866" />
      <circle cx="23" cy="18" r="1" fill="#FF8A00" opacity="0.8" />
      <circle cx="41" cy="17" r="1" fill="#FFB703" opacity="0.8" />
    </svg>
  );
};

