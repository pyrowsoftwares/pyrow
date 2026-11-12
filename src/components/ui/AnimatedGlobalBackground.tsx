import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

export const AnimatedGlobalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Warm, elegant agency accent colors that shine on light backgrounds
    const colors = [
      '#FF4D00', // Pyrow Ember
      '#FF9500', // Amber Flare
      '#FFB703', // Solar Gold
      '#0284C7', // Sky Blue
      '#8B5CF6', // Purple
      '#10B981', // Emerald
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Optimized lightweight ambient floating sparks
    const particleCount = Math.min(Math.floor((width * height) / 45000), 30);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.35 + 0.1), // Gentle upward drift
        size: Math.random() * 2.0 + 1.0,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      // Update and draw particles with zero heavy shadow filters
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around seamlessly
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const currentSize = p.size + Math.sin(p.pulse) * 0.4;
        const currentAlpha = p.alpha * (0.8 + Math.sin(p.pulse) * 0.2);

        ctx.globalAlpha = isDark ? currentAlpha : currentAlpha * 0.75;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, currentSize), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Luminous Full-Portal Multi-Stop Gradient (Rich Light Aesthetic) */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 opacity-100 dark:opacity-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% 10%, rgba(255, 77, 0, 0.16) 0%, transparent 55%),
            radial-gradient(ellipse 80% 50% at 85% 18%, rgba(2, 132, 199, 0.16) 0%, transparent 55%),
            radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 10% 75%, rgba(139, 92, 246, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 90% 85%, rgba(244, 63, 94, 0.14) 0%, transparent 55%),
            radial-gradient(circle at 50% 95%, rgba(255, 77, 0, 0.12) 0%, transparent 50%),
            linear-gradient(145deg, #FFF6EE 0%, #FAF8F5 18%, #F0F7FF 38%, #F6F2FF 58%, #FFF2F4 78%, #FFF8EE 100%)
          `,
        }}
      />

      {/* 1B. Luminous Full-Portal Multi-Stop Gradient (Rich Midnight Velvet Dark Aesthetic - No Pure Black, No Harsh Glow) */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 opacity-0 dark:opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% 10%, rgba(255, 77, 0, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 85% 18%, rgba(2, 132, 199, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 50% 45%, rgba(245, 158, 11, 0.05) 0%, transparent 55%),
            radial-gradient(ellipse 90% 60% at 10% 75%, rgba(139, 92, 246, 0.06) 0%, transparent 65%),
            radial-gradient(ellipse 80% 50% at 90% 85%, rgba(244, 63, 94, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 50% 95%, rgba(255, 77, 0, 0.06) 0%, transparent 55%),
            linear-gradient(145deg, #090D17 0%, #0D1322 20%, #0B101E 40%, #100D20 60%, #130D1A 80%, #090D17 100%)
          `,
        }}
      />

      {/* 2. Precision Geometric Architectural Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.045] dark:opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Floating Animated Glowing Auroras (Subtle in Dark Mode to Prevent Card Bleed) */}
      {/* Top Left: Warm Pyrow Ember Glow */}
      <div className="absolute -top-32 -left-32 w-[650px] sm:w-[950px] h-[650px] sm:h-[950px] rounded-full bg-gradient-to-br from-ember-500/22 via-amber-400/15 to-transparent dark:from-ember-500/8 dark:via-amber-500/4 blur-[130px] animate-[pulse_9s_ease-in-out_infinite]" />

      {/* Top Right: Sky Azure & Cyan Glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-gradient-to-bl from-sky-400/20 via-cyan-400/14 to-transparent dark:from-cyan-500/7 dark:via-blue-600/4 blur-[135px] animate-[pulse_11s_ease-in-out_infinite]" />

      {/* Lower Mid: Soft Violet & Lilac Glow */}
      <div className="absolute top-2/3 -left-32 w-[650px] sm:w-[950px] h-[650px] sm:h-[950px] rounded-full bg-gradient-to-tr from-purple-400/18 via-rose-400/14 to-transparent dark:from-purple-600/6 dark:via-ember-500/4 blur-[145px] animate-[pulse_13s_ease-in-out_infinite]" />

      {/* Bottom Right: Warm Amber & Solar Gold Glow */}
      <div className="absolute -bottom-40 right-10 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full bg-gradient-to-tl from-amber-400/20 via-yellow-400/14 to-transparent dark:from-amber-500/7 dark:via-rose-500/4 blur-[130px] animate-[pulse_10s_ease-in-out_infinite]" />

      {/* 4. Active Animated Stardust & Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
