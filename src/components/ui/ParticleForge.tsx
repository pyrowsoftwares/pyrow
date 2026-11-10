import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  isCyan: boolean;
  pulseSpeed: number;
}

export const ParticleForge: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 70);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.7 + 0.2), // Rising up like embers
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.1,
        maxOpacity: Math.random() * 0.5 + 0.3,
        isCyan: Math.random() < 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDarkMode = document.documentElement.classList.contains('dark');

      // Draw subtle connecting cybernetic grid lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const alpha = (1 - dist / 105) * (isDarkMode ? 0.12 : 0.08);
            ctx.beginPath();
            if (particles[i].isCyan || particles[j].isCyan) {
              ctx.strokeStyle = isDarkMode
                ? `rgba(0, 229, 255, ${alpha})`
                : `rgba(0, 112, 243, ${alpha})`;
            } else {
              ctx.strokeStyle = isDarkMode
                ? `rgba(255, 122, 0, ${alpha})`
                : `rgba(230, 81, 0, ${alpha})`;
            }
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.2;
          p.y -= (dy / dist) * force * 2.2;
        }

        // Move upward
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Gentle breathing opacity
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Render glowing particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        if (p.isCyan) {
          if (isDarkMode) {
            gradient.addColorStop(0, `rgba(0, 229, 255, ${p.opacity})`);
            gradient.addColorStop(0.5, `rgba(0, 112, 243, ${p.opacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');
          } else {
            gradient.addColorStop(0, `rgba(0, 102, 255, ${p.opacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(56, 189, 248, ${p.opacity * 0.4})`);
            gradient.addColorStop(1, 'rgba(0, 102, 255, 0)');
          }
        } else {
          if (isDarkMode) {
            gradient.addColorStop(0, `rgba(255, 140, 0, ${p.opacity})`);
            gradient.addColorStop(0.4, `rgba(255, 77, 0, ${p.opacity * 0.6})`);
            gradient.addColorStop(1, 'rgba(255, 77, 0, 0)');
          } else {
            gradient.addColorStop(0, `rgba(255, 87, 34, ${p.opacity * 0.8})`);
            gradient.addColorStop(0.4, `rgba(255, 122, 0, ${p.opacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(255, 87, 34, 0)');
          }
        }

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core center
        ctx.beginPath();
        ctx.fillStyle = isDarkMode
          ? p.isCyan ? '#E0F7FF' : '#FFF3E0'
          : p.isCyan ? '#0066FF' : '#FF4D00';
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
      style={{ opacity: 0.8 }}
    />
  );
};
