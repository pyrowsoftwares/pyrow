import React, { useEffect, useRef } from 'react';

interface KineticCursorGlowProps {
  theme: 'light' | 'dark';
}

export const KineticCursorGlow: React.FC<KineticCursorGlowProps> = ({ theme }) => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX - 210;
      targetY = e.clientY - 210;
    };

    const animate = () => {
      // Smooth lerp for buttery organic cursor lag
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
      className="fixed pointer-events-none rounded-full blur-[130px] -z-10 will-change-transform"
      style={{
        width: '420px',
        height: '420px',
        top: 0,
        left: 0,
        transform: 'translate3d(-1000px, -1000px, 0)',
        background:
          theme === 'dark'
            ? 'radial-gradient(circle, rgba(255, 77, 0, 0.14) 0%, rgba(2, 132, 199, 0.08) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 77, 0, 0.07) 0%, rgba(240, 100, 0, 0.02) 45%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
};

