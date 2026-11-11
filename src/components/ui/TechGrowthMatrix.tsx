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

    let animId: number;
    let width = 0;
    let height = 0;

    const heroSection = canvas.closest('#hero') || canvas.parentElement;

    const resize = () => {
      if (!canvas) return;
      const rect = heroSection?.getBoundingClientRect();
      width = Math.floor(rect?.width || window.innerWidth);
      height = Math.floor(rect?.height || window.innerHeight);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();

    // Use ResizeObserver to adapt dynamically
    const ro = new ResizeObserver(() => {
      resize();
    });
    if (heroSection) ro.observe(heroSection);
    window.addEventListener('resize', resize);

    // Mouse coordinates with smooth damping
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      radius: 220,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Floating Radiant Star Embers (Pyrow Flame & Cyber Blue)
    const emberCount = 55;
    const embers: Particle[] = [];
    const colors = ['#FF4D00', '#FF7A00', '#FFB703', '#0284C7', '#8B5CF6'];

    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.45,
        vy: -(Math.random() * 0.55 + 0.2), // Upward drifting growth motion
        size: Math.random() * 2.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.35,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.015,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.018;

      if (width <= 0 || height <= 0) {
        resize();
      }

      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      // Smooth mouse interpolation (Damping)
      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      const centerX = width * 0.5;
      const centerY = height * 0.44;

      // ========================================================
      // 1. ELEGANT CONCENTRIC ORBITAL RINGS (Crisp & High-End)
      // ========================================================
      const rings = [
        { radius: Math.min(width * 0.22, 280), speed: 0.18, dashes: [10, 16], color: '#FF4D00', alpha: isDark ? 0.28 : 0.35, width: 2.0 },
        { radius: Math.min(width * 0.32, 420), speed: -0.14, dashes: [6, 20], color: '#0284C7', alpha: isDark ? 0.24 : 0.30, width: 1.8 },
        { radius: Math.min(width * 0.42, 580), speed: 0.10, dashes: [14, 28], color: '#FFB703', alpha: isDark ? 0.20 : 0.26, width: 1.5 },
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

        // High-vis satellite nodes on orbital track
        const nodeAngle = time * ring.speed * 2.2;
        const nx = Math.cos(nodeAngle) * ring.radius;
        const ny = Math.sin(nodeAngle) * ring.radius;

        ctx.fillStyle = ring.color;
        ctx.globalAlpha = isDark ? 0.9 : 0.85;
        ctx.shadowBlur = isDark ? 14 : 10;
        ctx.shadowColor = ring.color;
        ctx.beginPath();
        ctx.arc(nx, ny, 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // ========================================================
      // 2. HARMONIC DUAL FLUID WAVES (Smooth Growth Curves)
      // ========================================================
      const waveConfigs = [
        {
          color: '#FF4D00', // Pyrow Ember Flame
          baseY: centerY + 40,
          amplitude: 36,
          frequency: 0.0032,
          speed: 1.3,
          lineWidth: 2.6,
          alpha: isDark ? 0.65 : 0.60,
        },
        {
          color: '#0284C7', // Sky Azure
          baseY: centerY + 85,
          amplitude: 42,
          frequency: 0.0026,
          speed: -1.0,
          lineWidth: 2.2,
          alpha: isDark ? 0.55 : 0.50,
        },
        {
          color: '#FFB703', // Solar Gold
          baseY: centerY + 130,
          amplitude: 30,
          frequency: 0.0038,
          speed: 1.6,
          lineWidth: 2.0,
          alpha: isDark ? 0.50 : 0.45,
        },
      ];

      waveConfigs.forEach((wave) => {
        ctx.save();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.globalAlpha = wave.alpha;
        ctx.shadowBlur = isDark ? 16 : 8;
        ctx.shadowColor = wave.color;
        ctx.beginPath();

        const step = 6;
        for (let x = 0; x <= width; x += step) {
          let y =
            wave.baseY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.cos(x * 0.0016 - time * 0.7) * 14;

          // Interactive fluid ripple around mouse cursor
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 40;
            y += Math.sin(dist * 0.04 - time * 5) * force;
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Glowing pulse beads along the wave path
        for (let x = 40; x < width; x += 120) {
          const beadY =
            wave.baseY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.cos(x * 0.0016 - time * 0.7) * 14;

          ctx.fillStyle = wave.color;
          ctx.globalAlpha = isDark ? 0.8 : 0.75;
          ctx.beginPath();
          ctx.arc(x, beadY, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // ========================================================
      // 3. FLOATING RADIANT STARDUST EMBERS
      // ========================================================
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around gracefully
        if (p.y < -12) {
          p.y = height + 12;
          p.x = Math.random() * width;
        }
        if (p.x < -12) p.x = width + 12;
        if (p.x > width + 12) p.x = -12;

        // Refined mouse interaction: ZERO clumping.
        // Embers illuminate and softly part away when cursor comes near.
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let proximityGlow = 0;
        if (dist < mouse.radius) {
          proximityGlow = (1 - dist / mouse.radius);

          // Gentle soft parting away from cursor if within 70px (No clumping)
          if (dist < 70 && dist > 1) {
            const pushForce = (1 - dist / 70) * 0.8;
            p.x -= (dx / dist) * pushForce;
            p.y -= (dy / dist) * pushForce;
          }
        }

        // Draw glowing particle with proximity illumination
        const currentSize = p.size + Math.sin(p.pulse) * 0.7 + proximityGlow * 1.4;
        const currentAlpha = Math.min(1, p.alpha * (0.8 + Math.sin(p.pulse) * 0.2) + proximityGlow * 0.45);

        ctx.save();
        ctx.globalAlpha = isDark ? currentAlpha : currentAlpha * 0.9;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = isDark ? 12 : 6;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, currentSize), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      if (heroSection) ro.unobserve(heroSection);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* High-End Ambient Volumetric Radial Glows (Restrained in Dark Mode to Prevent Glare) */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1100px] h-[600px] bg-gradient-to-b from-ember-500/20 via-amber-400/10 to-transparent dark:from-ember-500/8 dark:via-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-5 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-r from-sky-400/16 via-cyan-400/10 to-transparent dark:from-sky-500/6 dark:via-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-l from-amber-400/16 via-rose-400/10 to-transparent dark:from-amber-500/6 dark:via-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* High-Precision Interactive Canvas Engine */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
