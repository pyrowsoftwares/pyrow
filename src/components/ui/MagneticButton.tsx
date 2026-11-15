import React, { useRef, useState } from 'react';
import { soundFX } from './sound-effects';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow' | 'cyber';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundFX.playClick();
    if (onClick) onClick(e);
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500/50';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-bold',
  }[size];

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 active:scale-95',
    secondary:
      'bg-white dark:bg-obsidian-700/80 hover:bg-slate-50 dark:hover:bg-obsidian-600 text-slate-800 dark:text-zinc-100 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 active:scale-95 shadow-sm',
    outline:
      'bg-transparent text-slate-800 dark:text-zinc-200 border border-violet-500/50 hover:border-violet-500 hover:text-violet-600 dark:hover:text-white hover:bg-violet-500/10 shadow-sm active:scale-95',
    glow:
      'bg-violet-500/10 text-violet-600 dark:text-purple-400 border border-violet-500/30 hover:bg-violet-500/20 active:scale-95',
    cyber:
      'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold shadow-glow-cyan active:scale-95',
  }[variant];

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onMouseEnter={() => soundFX.playHover()}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {/* Light Reflection Sweep */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </button>
  );
};
