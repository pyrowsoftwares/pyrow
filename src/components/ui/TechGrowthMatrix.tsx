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

export const TechGrowthMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number = 0;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const heroSection = canvas.closest('#hero') || canvas.parentElement;

    const resize = () => {
      if (!canvas) return;
      const rect = heroSection?.getBoundingClientRect();
      width = Math.floor(rect?.width || window.innerWidth);
      height = Math.floor(rect?.height || window.innerHeight);

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();

    const ro = new ResizeObserver(() => {
      resize();
    });
    if (heroSection) ro.observe(heroSection);
    window.addEventListener('resize', resize);

    // Pause canvas when Hero is not visible in viewport
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animId);
        animId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animId);
      }
    }, { threshold: 0.05 });

    if (heroSection) io.observe(heroSection);

    // Floating Radiant Star Embers (Adaptive Count: 16 on mobile, 30 on PC)
    const emberCount = window.innerWidth < 640 ? 16 : 30;
    const embers: Particle[] = [];
    const colors = ['#FF4D00', '#FF7A00', '#FFB703', '#0284C7', '#8B5CF6'];

    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.4 + 0.15),
        size: Math.random() * 2.2 + 1.0,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let time = 0;

    const render = () => {
      if (!isVisible) return;
      time += 0.015;

      if (width <= 0 || height <= 0) {
        resize();
      }

      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      const centerX = width * 0.5;
      const centerY = height * 0.44;

      // 1. Concentric orbital rings
      const rings = [
        { radius: Math.min(width * 0.22, 280), speed: 0.18, dashes: [10, 16], color: '#FF4D00', alpha: isDark ? 0.22 : 0.28, width: 1.6 },
        { radius: Math.min(width * 0.32, 420), speed: -0.14, dashes: [6, 20], color: '#0284C7', alpha: isDark ? 0.18 : 0.24, width: 1.4 },
        { radius: Math.min(width * 0.42, 580), speed: 0.10, dashes: [14, 28], color: '#FFB703', alpha: isDark ? 0.16 : 0.20, width: 1.2 },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * ring.speed);
        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = ring.alpha;
        ctx.lineWidth = ring.width;
        ctx.setLineDash(ring.dashes);
        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Satellite nodes
        const nodeAngle = time * ring.speed * 2.2;
        const nx = Math.cos(nodeAngle) * ring.radius;
        const ny = Math.sin(nodeAngle) * ring.radius;

        ctx.fillStyle = ring.color;
        ctx.globalAlpha = isDark ? 0.8 : 0.75;
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // 2. Ambient Stardust Embers
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.y < -12) {
          p.y = height + 12;
          p.x = Math.random() * width;
        }
        if (p.x < -12) p.x = width + 12;
        if (p.x > width + 12) p.x = -12;

        const currentSize = p.size + Math.sin(p.pulse) * 0.5;
        const currentAlpha = p.alpha * (0.8 + Math.sin(p.pulse) * 0.2);

        ctx.globalAlpha = isDark ? currentAlpha : currentAlpha * 0.8;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, currentSize), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      if (heroSection) {
        ro.unobserve(heroSection);
        io.unobserve(heroSection);
      }
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* High-End Ambient Volumetric Radial Glows (Optimized CSS Radial Gradients without costly blur filters) */}
      <div 
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1000px] h-[500px] pointer-events-none opacity-40 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 77, 0, 0.18) 0%, rgba(245, 158, 11, 0.08) 40%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-1/4 left-5 w-[500px] h-[400px] pointer-events-none opacity-30 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(2, 132, 199, 0.15) 0%, transparent 65%)',
        }}
      />

      {/* High-Precision Interactive Canvas Engine */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
