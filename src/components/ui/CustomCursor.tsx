import React, { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
  theme: 'light' | 'dark';
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ theme }) => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsTouchDevice(true);
      return;
    }

    document.documentElement.classList.add('has-custom-cursor');

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    let width = (canvas ? (canvas.width = window.innerWidth) : window.innerWidth);
    let height = (canvas ? (canvas.height = window.innerHeight) : window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse & Ring Physics
    let mouseX = -200;
    let mouseY = -200;
    let prevMouseX = -200;
    let prevMouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let animId: number;

    const sparks: Spark[] = [];
    const emberPalette = ['#FF4D00', '#FF8A00', '#FFB703', '#FB8500', '#FF3700'];

    const createSpark = (x: number, y: number, vx: number, vy: number, count = 1, burst = false) => {
      for (let i = 0; i < count; i++) {
        const angle = burst ? Math.random() * Math.PI * 2 : Math.atan2(vy, vx) + (Math.random() - 0.5) * 1.5;
        const speed = burst ? Math.random() * 3.5 + 1.2 : Math.random() * 1.4 + 0.3;
        const maxLife = burst ? Math.random() * 25 + 20 : Math.random() * 20 + 15;

        sparks.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed * (burst ? 1 : -0.7),
          vy: Math.sin(angle) * speed * (burst ? 1 : -0.7) - 0.3, // slight upward heat draft
          size: burst ? Math.random() * 2.8 + 1.5 : Math.random() * 2.2 + 1.2,
          alpha: 1,
          color: emberPalette[Math.floor(Math.random() * emberPalette.length)],
          life: 0,
          maxLife,
        });
      }

      // Cap maximum active sparks for high performance
      if (sparks.length > 45) {
        sparks.splice(0, sparks.length - 45);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant 0ms response on the focal dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Generate ember spark trail when moving
      const dist = Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY);
      if (dist > 7) {
        createSpark(mouseX, mouseY, mouseX - prevMouseX, mouseY - prevMouseY, 1, false);
        prevMouseX = mouseX;
        prevMouseY = mouseY;
      }

      // Check hover states
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor="pointer"]')
        );
        setIsHovering(isInteractive);

        const isInput = Boolean(
          target.closest('input[type="text"], input[type="email"], input[type="search"], textarea, [contenteditable="true"]')
        );
        setIsTextMode(isInput);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Burst 8 spark particles on click
      createSpark(e.clientX, e.clientY, 0, 0, 8, true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Render loop
    const render = () => {
      // 1. Follower ring spring lerp
      const lerp = 0.2;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // 2. Render particle spark trail on canvas
      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        for (let i = sparks.length - 1; i >= 0; i--) {
          const s = sparks[i];
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 0.02; // soft gravity/draft
          s.life++;

          const progress = s.life / s.maxLife;
          s.alpha = Math.max(0, 1 - progress);
          s.size = Math.max(0.4, s.size * 0.96);

          ctx.save();
          ctx.globalAlpha = s.alpha * 0.85;
          ctx.fillStyle = s.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          if (s.life >= s.maxLife || s.alpha <= 0.01) {
            sparks.splice(i, 1);
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    render();

    return () => {
      cancelAnimationFrame(animId);
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  const isDark = theme === 'dark';

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[999999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Canvas for Floating Pyrow Ember Sparks Trail */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 2. Magnetic Fluid Lens Ring */}
      <div
        ref={ringRef}
        className="absolute -top-5 -left-5 w-10 h-10 rounded-full flex items-center justify-center will-change-transform transition-[width,height,margin,border-radius,background-color] duration-200 pointer-events-none"
        style={{
          width: isTextMode ? '16px' : isHovering ? '48px' : isClicking ? '26px' : '34px',
          height: isTextMode ? '26px' : isHovering ? '48px' : isClicking ? '26px' : '34px',
          marginLeft: isTextMode ? '-8px' : isHovering ? '-24px' : isClicking ? '-13px' : '-17px',
          marginTop: isTextMode ? '-13px' : isHovering ? '-24px' : isClicking ? '-13px' : '-17px',
          borderRadius: isTextMode ? '4px' : '9999px',
        }}
      >
        <div
          className={`w-full h-full rounded-[inherit] transition-all duration-200 ${
            isTextMode
              ? 'border-2 border-ember-500 bg-ember-500/10'
              : isHovering
              ? isDark
                ? 'border-[1.5px] border-ember-400 bg-ember-500/15 shadow-[0_0_20px_rgba(255,77,0,0.5)] scale-110'
                : 'border-[1.5px] border-ember-500 bg-ember-500/10 shadow-[0_0_16px_rgba(255,77,0,0.3)] scale-110'
              : isDark
              ? 'border border-ember-500/60 bg-ember-500/[0.04] shadow-[0_0_10px_rgba(255,77,0,0.2)]'
              : 'border border-ember-500/70 bg-ember-500/[0.05] shadow-[0_0_8px_rgba(255,77,0,0.15)]'
          }`}
        >
          {/* Rotating target accent tick marks on hover */}
          {isHovering && !isTextMode && (
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_6s_linear_infinite]">
              <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-ember-500 shadow-[0_0_6px_#FF4D00]" />
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#FFB703]" />
              <span className="absolute top-1/2 -left-0.5 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ember-500 shadow-[0_0_6px_#FF4D00]" />
              <span className="absolute top-1/2 -right-0.5 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#FFB703]" />
            </div>
          )}
        </div>
      </div>

      {/* 3. Central Precision Focal Ember Dot (Instant 0ms Response) */}
      <div
        ref={dotRef}
        className="absolute -top-1 -left-1 w-2 h-2 rounded-full pointer-events-none will-change-transform flex items-center justify-center"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isTextMode
              ? 'opacity-0'
              : isHovering
              ? 'w-2.5 h-2.5 bg-gradient-to-tr from-ember-600 via-ember-400 to-white shadow-[0_0_10px_#FF4D00]'
              : isClicking
              ? 'w-1.5 h-1.5 bg-white shadow-[0_0_12px_#FF4D00]'
              : 'w-2 h-2 bg-ember-500 shadow-[0_0_8px_rgba(255,77,0,0.9)]'
          }`}
        />
      </div>
    </div>
  );
};
