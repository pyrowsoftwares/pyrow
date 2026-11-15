import React, { useEffect, useRef } from 'react';

interface KineticCursorGlowProps {
  theme: 'light' | 'dark';
}

export const KineticCursorGlow: React.FC<KineticCursorGlowProps> = ({ theme }) => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion preference
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX - 175;
      targetY = e.clientY - 175;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none rounded-full -z-10 will-change-transform opacity-60 dark:opacity-40"
      style={{
        width: '350px',
        height: '350px',
        top: 0,
        left: 0,
        transform: 'translate3d(-1000px, -1000px, 0)',
        background:
          theme === 'dark'
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.16) 0%, rgba(168, 85, 247, 0.08) 35%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.10) 0%, rgba(192, 132, 252, 0.04) 40%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
};
