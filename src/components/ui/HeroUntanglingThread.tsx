import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { soundFX } from './sound-effects';

export const HeroUntanglingThread: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef({ current: 0, target: 0 });
  const sizeRef = useRef({ width: 0, height: 0, knotRadius: 110, expandedRadius: 240, isMobile: false });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const [state, setState] = useState({
    knotRadius: 110,
    annotOpacity: 1,
    annotY: 0,
    containerOpacity: 0,
    containerScale: 0.32,
    line1Opacity: 0,
    line1Y: 0,
    line1Blur: 0,
    line2Opacity: 0,
    line2Y: 0,
    line2Blur: 0,
    line3Opacity: 0,
    line3Scale: 1,
    line3Y: 0,
    line3Glow: 0,
    hintOpacity: 1,
  });

  // Track theme changes dynamically
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Track scroll progress strictly across container's 250vh travel
  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.min(1, Math.max(0, -rect.top / scrollable));
      scrollRef.current.target = pct;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Canvas animation & exact codebuilders.in choreography loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = Math.min(r.width, window.innerWidth || document.documentElement.clientWidth || 360);
      const h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const mob = w < 768;
      const exR = mob ? Math.min(0.38 * w, 0.26 * h, 160) : Math.min(0.24 * w, 0.32 * h, 240);
      const knR = mob ? Math.min(0.46 * exR, 72) : Math.min(0.46 * exR, 110);
      sizeRef.current = { width: w, height: h, knotRadius: knR, expandedRadius: exR, isMobile: mob };
    };
    resize();
    window.addEventListener('resize', resize);

    // Parametric tangled knot with multi-frequency harmonic perturbations (codebuilders.in math)
    const makeKnot = (cx: number, cy: number, r: number) => {
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= 360; i++) {
        const s = i / 360;
        const ang = 8 * s * Math.PI * 2;
        const rr =
          r * (0.55 + 0.45 * Math.sin(s * Math.PI)) +
          0.25 * r * Math.sin(2.7 * ang) +
          0.20 * r * Math.cos(4.3 * ang) +
          0.14 * r * Math.sin(6.5 * ang) +
          0.16 * r * Math.cos(1.9 * ang);
        pts.push({
          x: cx + Math.cos(ang) * rr + 0.12 * r * Math.sin(3.1 * ang),
          y: cy + 0.90 * rr * Math.sin(ang) + 0.10 * r * Math.cos(2.3 * ang),
        });
      }
      return pts;
    };

    // Clean circle target
    const makeCircle = (cx: number, cy: number, r: number) => {
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= 360; i++) {
        const ang = (i / 360) * Math.PI * 2;
        pts.push({ x: cx + Math.cos(ang) * r, y: cy + Math.sin(ang) * r });
      }
      return pts;
    };

    let time = 0;

    const loop = () => {
      time += 0.016;
      const ref = scrollRef.current;
      ref.current += (ref.target - ref.current) * 0.14;
      if (Math.abs(ref.target - ref.current) < 0.0003) ref.current = ref.target;

      const n = ref.current;
      const { width: W, height: H, knotRadius: knR, expandedRadius: exR, isMobile } = sizeRef.current;

      // ── Timing math (Extracted verbatim from codebuilders.in engine module 41498) ──
      // 1. "your idea" badge fades [0 → 0.16]
      const C = Math.min(1, Math.max(0, n / 0.16));
      const annotOpacity = Math.max(0, 1 - C);
      const annotY = -(26 * C);

      // 2. Knot unspooling into circle [0 → 0.45] easeInOutQuad
      const m = Math.min(1, Math.max(0, n / 0.45));
      const p = m < 0.5 ? 2 * m * m : 1 - Math.pow(-2 * m + 2, 2) / 2;

      // 3. Filament dissolve & scale [0.45 → 0.68]
      const b = Math.min(1, Math.max(0, (n - 0.45) / 0.23));
      const fScale = 1 - 0.35 * Math.pow(b, 1.6);
      const fAlpha = Math.max(0, 1 - Math.pow(b, 1.3));

      // 4. Headline container entrance [0.20 → 0.52] with smoothstep
      const k = Math.min(1, Math.max(0, (n - 0.20) / (0.52 - 0.20)));
      const containerOpacity = Math.min(1, 1.5 * k);
      const containerScale = 0.32 + k * k * (3 - 2 * k) * 0.68;

      // 5. Cinematic exit transition [0.68 → 0.94]
      const exitProgress = Math.min(1, Math.max(0, (n - 0.68) / (0.94 - 0.68)));
      const M = Math.max(0, 1 - 3.2 * exitProgress);
      const W_exit = -(36 * exitProgress);
      const blurVal = 8 * exitProgress;
      const B = Math.pow(exitProgress, 1.4);

      const line1Opacity = containerOpacity * M;
      const line1Y = W_exit;
      const line1Blur = blurVal;

      const line2Opacity = containerOpacity * M;
      const line2Y = 0.65 * W_exit;
      const line2Blur = blurVal;

      const line3Opacity =
        containerOpacity *
        (exitProgress > 0.70 ? Math.max(0, 1 - (exitProgress - 0.70) / 0.30) : 1);
      const line3Scale = 1 + B * ((isMobile ? 2.2 : 4.6) - 1);
      const line3Y = -exitProgress * (isMobile ? 36 : 52);
      const line3Glow = 32 * exitProgress;

      // 6. Scroll hint fades [0 → 0.20]
      const hintOpacity = Math.max(0, 1 - n / 0.20);

      setState({
        knotRadius: knR,
        annotOpacity,
        annotY,
        containerOpacity,
        containerScale,
        line1Opacity,
        line1Y,
        line1Blur,
        line2Opacity,
        line2Y,
        line2Blur,
        line3Opacity,
        line3Scale,
        line3Y,
        line3Glow,
        hintOpacity,
      });

      // ── Canvas Filament Draw ──
      ctx.clearRect(0, 0, W, H);
      const cx = W * 0.5, cy = H * 0.5;

      if (fAlpha > 0.003) {
        const breath = (1 - p) * Math.sin(time * 2.4) * 4;
        const kPts = makeKnot(cx, cy, knR + breath);
        const cPts = makeCircle(cx, cy, exR);
        const pts = kPts.map((kp, i) => ({
          x: (1 - p) * kp.x + p * cPts[i].x,
          y: (1 - p) * kp.y + p * cPts[i].y,
        }));

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(fScale, fScale);
        ctx.translate(-cx, -cy);

        const dark = document.documentElement.classList.contains('dark');

        // 1. Outer Neon Violet Halo
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          const mx = (pts[i - 1].x + pts[i].x) / 2;
          const my = (pts[i - 1].y + pts[i].y) / 2;
          ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, mx, my);
        }
        ctx.strokeStyle = dark
          ? `rgba(168,85,247,${0.45 * fAlpha})`
          : `rgba(147,51,234,${0.35 * fAlpha})`;
        ctx.lineWidth = isMobile ? 8 : 12;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // 2. High-Luminance Core
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          const mx = (pts[i - 1].x + pts[i].x) / 2;
          const my = (pts[i - 1].y + pts[i].y) / 2;
          ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, mx, my);
        }
        ctx.strokeStyle = dark
          ? `rgba(255,255,255,${0.96 * fAlpha})`
          : `rgba(109,40,217,${0.95 * fAlpha})`;
        ctx.lineWidth = isMobile ? 3.5 : 4.8;
        ctx.shadowColor = dark ? '#C084FC' : '#7C3AED';
        ctx.shadowBlur = (dark ? 16 : 12) * fAlpha;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // 3. Orbiting Photon Bead
        const orbIdx = Math.floor((time * 48) % pts.length);
        const orb = pts[orbIdx];
        if (orb) {
          const orbR = isMobile ? 18 : 24;
          const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orbR);
          if (dark) {
            g.addColorStop(0, `rgba(255,255,255,${0.98 * fAlpha})`);
            g.addColorStop(0.35, `rgba(192,132,252,${0.85 * fAlpha})`);
            g.addColorStop(1, 'rgba(124,58,237,0)');
          } else {
            g.addColorStop(0, `rgba(124,58,237,${0.95 * fAlpha})`);
            g.addColorStop(0.4, `rgba(168,85,247,${0.70 * fAlpha})`);
            g.addColorStop(1, 'rgba(147,51,234,0)');
          }
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orbR, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(orb.x, orb.y, isMobile ? 3.5 : 5, 0, Math.PI * 2);
          ctx.fillStyle = dark ? `rgba(255,255,255,${fAlpha})` : `rgba(255,255,255,${0.95 * fAlpha})`;
          ctx.shadowColor = dark ? '#FDF4FF' : '#7C3AED';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Automatically transition from Untangling intro to Hero on initial website opening
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only auto-scroll if opening at the very top of the page
    if (window.scrollY > 40) return;
    if (window.location.hash && window.location.hash !== '#hero' && window.location.hash !== '#hero-main') return;

    let autoScrollRaf = 0;
    let timerId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const cancelEvents = ['wheel', 'touchstart', 'touchmove', 'keydown', 'mousedown'];
    const stopAutoScroll = () => {
      cancelled = true;
      if (autoScrollRaf) cancelAnimationFrame(autoScrollRaf);
      cancelEvents.forEach((ev) => window.removeEventListener(ev, stopAutoScroll));
    };

    // If user touches, scrolls, or clicks anywhere, instantly hand them full control
    cancelEvents.forEach((ev) => window.addEventListener(ev, stopAutoScroll, { passive: true }));

    // Gentle initial pause: display tangled knot and "your idea" for 1100ms, then slowly and gracefully glide into Hero
    timerId = setTimeout(() => {
      if (cancelled) return;

      const heroEl = document.getElementById('hero-main');
      if (!heroEl) return;

      const startY = window.scrollY;
      const targetY = heroEl.getBoundingClientRect().top + window.scrollY;
      const distance = targetY - startY;
      if (distance <= 10) return;

      const duration = 4400; // 4.4s slow, relaxed, cinematic progression
      const startTime = performance.now();

      // Ultra-gentle sine easing with steady continuous velocity (no sudden rush in the middle)
      const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

      const step = (now: number) => {
        if (cancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutSine(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          autoScrollRaf = requestAnimationFrame(step);
        } else {
          stopAutoScroll();
        }
      };

      autoScrollRaf = requestAnimationFrame(step);
    }, 1100);

    return () => {
      clearTimeout(timerId);
      stopAutoScroll();
    };
  }, []);

  const handleScrollHint = () => {
    soundFX.playClick();
    const heroEl = document.getElementById('hero-main');
    if (!heroEl) return;

    const startY = window.scrollY;
    const targetY = heroEl.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;

    const duration = 3200; // Leisurely pace for manual hint click
    const startTime = performance.now();
    let raf = 0;

    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, startY + distance * easeInOutSine(progress));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[100vw] overflow-x-clip"
      style={{ height: '250vh' }}
      aria-label="Interactive Untangling Intro"
    >
      {/* Sticky Stage: Pinned at top-0, 100svh tall (Pure transparent backdrop to inherit site background) */}
      <div
        className="sticky top-0 w-full max-w-[100vw] bg-transparent overflow-hidden select-none"
        style={{ height: '100svh' }}
      >
        {/* 1. Canvas Filament */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 4 }}
          aria-hidden="true"
        />

        {/* 2. "your idea" Handwritten Annotation Badge + Doodle Arrow */}
        <div
          className="absolute left-1/2 pointer-events-none flex flex-col items-center"
          style={{
            top: `calc(50% - ${state.knotRadius + 18}px)`,
            opacity: state.annotOpacity,
            transform: `translate(-50%, -100%) translateY(${state.annotY}px)`,
            visibility: state.annotOpacity > 0.005 ? 'visible' : 'hidden',
            zIndex: 10,
            willChange: 'transform, opacity',
          }}
          aria-hidden="true"
        >
          <span
            className="font-mono text-xs sm:text-sm font-bold tracking-wider px-3.5 py-1 rounded-full bg-white/95 text-amber-800 border border-amber-300/80 shadow-[0_4px_20px_rgba(245,158,11,0.25)] dark:bg-slate-900/90 dark:text-amber-200 dark:border-amber-300/40 dark:shadow-[0_0_15px_rgba(253,230,138,0.45)] backdrop-blur-md transition-colors"
          >
            ✨ your idea
          </span>
          <svg className="w-6 h-5 mt-1 animate-bounce text-amber-600 dark:text-amber-200 transition-colors" viewBox="0 0 24 20" fill="none" aria-hidden="true">
            <path d="M 12 2 C 13.5 6, 13.5 11, 12 15" stroke={isDark ? '#FEF08A' : '#D97706'} strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 7 10 L 12 16 L 17 10" stroke={isDark ? '#FEF08A' : '#D97706'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* 3. Emerging 3-Line Headline Container with Smooth Zoom Entrance & Exit Fly-Through */}
        <div
          className="absolute top-1/2 left-1/2 w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) scale(${state.containerScale})`,
            opacity: state.containerOpacity,
            transformOrigin: '50% 50%',
            zIndex: 10,
            visibility: state.containerOpacity > 0.005 ? 'visible' : 'hidden',
            willChange: 'transform, opacity',
          }}
        >
          <h1
            className="w-full flex flex-col items-center justify-center tracking-tight text-center leading-tight select-none font-display"
            aria-label="We Transform Raw Ideas into Meaningful Digital Solutions"
          >
            <span className="sr-only">We Transform Raw Ideas into Meaningful Digital Solutions</span>

            {/* Line 1 */}
            <span
              aria-hidden="true"
              className="block font-bold tracking-tight text-slate-700 dark:text-zinc-300 leading-snug transition-colors"
              style={{
                fontSize: 'clamp(1.5rem, 4.2vw, 3.5rem)',
                opacity: state.line1Opacity,
                transform: `translateY(${state.line1Y}px)`,
                filter: state.line1Blur > 0.1 ? `blur(${state.line1Blur}px)` : 'none',
                visibility: state.line1Opacity > 0.005 ? 'visible' : 'hidden',
                willChange: 'transform, opacity, filter',
              }}
            >
              We Transform Raw Ideas into
            </span>

            {/* Line 2 */}
            <span
              aria-hidden="true"
              className="block font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug mt-1 sm:mt-2 transition-colors"
              style={{
                fontSize: 'clamp(1.8rem, 5.2vw, 4.2rem)',
                opacity: state.line2Opacity,
                transform: `translateY(${state.line2Y}px)`,
                filter: state.line2Blur > 0.1 ? `blur(${state.line2Blur}px)` : 'none',
                visibility: state.line2Opacity > 0.005 ? 'visible' : 'hidden',
                willChange: 'transform, opacity, filter',
              }}
            >
              Meaningful Digital
            </span>

            {/* Line 3 — Fly-Through Zoom Portal Word */}
            <span
              aria-hidden="true"
              className="block font-black tracking-tight leading-snug mt-1 sm:mt-2"
              style={{
                fontSize: 'clamp(2.3rem, 6.4vw, 5.4rem)',
                opacity: state.line3Opacity,
                transform: `translateY(${state.line3Y}px) scale(${state.line3Scale})`,
                filter:
                  state.line3Glow > 0.5
                    ? `drop-shadow(0 0 ${state.line3Glow}px rgba(168,85,247,0.95))`
                    : 'none',
                visibility: state.line3Opacity > 0.005 ? 'visible' : 'hidden',
                willChange: 'transform, opacity, filter',
              }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: isDark
                    ? 'linear-gradient(90deg, #A78BFA, #C084FC, #E879F9)'
                    : 'linear-gradient(90deg, #6D28D9, #7C3AED, #9333EA)',
                }}
              >
                Solutions.
              </span>
            </span>
          </h1>
        </div>

        {/* 4. Bottom Scroll Hint */}
        <button
          onClick={handleScrollHint}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none group"
          style={{
            opacity: state.hintOpacity,
            pointerEvents: state.hintOpacity > 0.1 ? 'auto' : 'none',
            zIndex: 20,
          }}
          aria-label="Scroll down to explore Pyrow"
        >
          <span className="tracking-widest uppercase text-[10px] text-violet-600 dark:text-violet-400 font-bold font-mono group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-violet-600 dark:text-violet-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors animate-bounce" />
        </button>
      </div>
    </div>
  );
};
