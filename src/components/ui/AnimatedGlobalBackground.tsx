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

    // Luminous, elegant violet and cyber accent palette matching new Pyrow brand
    const colors = [
      '#7C3AED', // Pyrow Electric Violet
      '#8B5CF6', // Vibrant Purple
      '#A855F7', // Neon Lavender
      '#C084FC', // Violet Glow
      '#6366F1', // Electric Indigo
      '#EC4899', // Cyber Pink Accent
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
            radial-gradient(ellipse 90% 60% at 15% 10%, rgba(124, 58, 237, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 80% 50% at 85% 18%, rgba(99, 102, 241, 0.14) 0%, transparent 55%),
            radial-gradient(circle at 50% 45%, rgba(168, 85, 247, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 10% 75%, rgba(139, 92, 246, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 90% 85%, rgba(192, 132, 252, 0.12) 0%, transparent 55%),
            radial-gradient(circle at 50% 95%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
            linear-gradient(145deg, #FAF8FF 0%, #F5F3FF 18%, #EEF2FF 38%, #F3E8FF 58%, #FAF5FF 78%, #F5F3FF 100%)
          `,
        }}
      />

      {/* 1B. Luminous Full-Portal Multi-Stop Gradient (Rich Midnight Velvet Obsidian-Violet - No Pure Black) */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 opacity-0 dark:opacity-100"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 15% 10%, rgba(124, 58, 237, 0.09) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 85% 18%, rgba(99, 102, 241, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 45%, rgba(168, 85, 247, 0.07) 0%, transparent 55%),
            radial-gradient(ellipse 90% 60% at 10% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 65%),
            radial-gradient(ellipse 80% 50% at 90% 85%, rgba(217, 70, 239, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 50% 95%, rgba(124, 58, 237, 0.08) 0%, transparent 55%),
            linear-gradient(145deg, #090615 0%, #0D0A20 20%, #0A081C 40%, #100C28 60%, #120A24 80%, #090615 100%)
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

      {/* 3. Floating Animated Glowing Auroras */}
      {/* Top Left: Ultra Violet Glow */}
      <div className="absolute -top-32 -left-32 w-[650px] sm:w-[950px] h-[650px] sm:h-[950px] rounded-full bg-gradient-to-br from-violet-600/22 via-purple-500/15 to-transparent dark:from-violet-600/10 dark:via-purple-500/5 blur-[130px] animate-[pulse_9s_ease-in-out_infinite]" />

      {/* Top Right: Electric Indigo & Cyber Blue Glow */}
      <div className="absolute top-1/4 -right-40 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-gradient-to-bl from-indigo-500/20 via-violet-400/14 to-transparent dark:from-indigo-600/8 dark:via-violet-600/5 blur-[135px] animate-[pulse_11s_ease-in-out_infinite]" />

      {/* Lower Mid: Soft Lavender & Neon Fuchsia Glow */}
      <div className="absolute top-2/3 -left-32 w-[650px] sm:w-[950px] h-[650px] sm:h-[950px] rounded-full bg-gradient-to-tr from-purple-500/18 via-fuchsia-400/14 to-transparent dark:from-purple-600/8 dark:via-violet-500/5 blur-[145px] animate-[pulse_13s_ease-in-out_infinite]" />

      {/* Bottom Right: Vivid Violet & Deep Purple Glow */}
      <div className="absolute -bottom-40 right-10 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full bg-gradient-to-tl from-violet-500/20 via-indigo-400/14 to-transparent dark:from-violet-600/8 dark:via-purple-500/5 blur-[130px] animate-[pulse_10s_ease-in-out_infinite]" />

      {/* 4. Active Animated Stardust & Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
