import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { MetricCounter } from './ui/MetricCounter';
import { HeroUntanglingThread } from './ui/HeroUntanglingThread';
import { soundFX } from './ui/sound-effects';
import { useRouter } from '../context/RouterContext';

interface HeroProps {
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStrategyCall }) => {
  const { navigate } = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const techLogos = [
    { name: 'React 19', category: 'Frontend' },
    { name: 'Next.js 15', category: 'Full-Stack' },
    { name: 'TypeScript', category: 'Architecture' },
    { name: 'Node.js', category: 'Distributed' },
    { name: 'Python & AI', category: 'Pipelines' },
    { name: 'AWS Cloud', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Data Layer' },
    { name: 'Docker & K8s', category: 'Cloud' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Google Ads', category: 'Growth' },
    { name: 'Meta Ads', category: 'Acquisition' },
  ];

  return (
    <div id="hero" className="relative w-full bg-transparent">
      {/* 1. Interactive Untangling Thread Intro Banner */}
      <HeroUntanglingThread />

      {/* 2. Full Pyrow Hero Main Section (Directly below untangling with seamless transparent connection) */}
      <section
        id="hero-main"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full pt-16 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-transparent"
        aria-label="Pyrow Software Engineering & Digital Growth"
      >
      {/* MotionSites Unified Cinematic Ambient Video Backdrop */}
      {/* Uses pure alpha radial falloff so it seamlessly blends with the exact global site background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 35%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 35%, black 25%, transparent 75%)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 dark:opacity-30 mix-blend-screen filter saturate-150 contrast-125"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_135039_b04d00db-6ee2-4e2a-a7f5-b2dfd3d24fd2.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Eyebrow Announcement Chip */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs text-slate-700 dark:text-zinc-300 shadow-sm mb-6 backdrop-blur-xl transition-colors"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-700 dark:text-zinc-200 font-medium text-[11px] sm:text-xs">
            Enterprise Digital Agency & Engineering Partner <span className="text-slate-400 dark:text-white/20 mx-1.5">•</span>
            <span className="text-violet-600 dark:text-violet-400 font-semibold">Web • Custom ERP • Mobile • AI</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 pl-2 border-l border-slate-300 dark:border-white/10 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> 100% Client Ownership
          </span>
        </motion.div>

        {/* Primary Headline with 3D Interactive Perspective Tilt */}
        <motion.h1
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-[1.14] text-center transition-colors select-none"
        >
          <span>
            We Build Software Products{' '}
            <br className="hidden sm:inline" />
            and Grow Them with{' '}
            <span className="font-serif italic font-normal tracking-wide underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Digital Marketing
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 text-base sm:text-xl md:text-2xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed text-center font-normal transition-colors"
        >
          From raw idea to launch to customers, all under one roof
        </motion.p>

        {/* Action Buttons with 3D Perspective Tilt */}
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto"
        >
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={onOpenStrategyCall}
            icon={<Sparkles className="w-5 h-5" />}
            className="w-full sm:w-auto justify-center"
          >
            Get a Quote
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="lg"
            onClick={() => {
              soundFX.playClick();
              navigate('/portfolio');
            }}
            icon={<ArrowRight className="w-4 h-4 text-slate-600 dark:text-zinc-400 group-hover:translate-x-1 transition-transform" />}
            className="w-full sm:w-auto justify-center"
          >
            View Our Portfolio & Results
          </MagneticButton>
        </motion.div>

        {/* Quick Metrics Trust Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 inline-flex items-center gap-4 sm:gap-6 px-5 py-2.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 shadow-sm backdrop-blur-xl"
        >
          <div>
            <span className="font-bold text-violet-600 dark:text-violet-400">100+</span> Clients
          </div>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <div>
            <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">120+</span> Projects Shipped
          </div>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <div>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">15+</span> Commercial Industries
          </div>
        </motion.div>

        {/* Tech Molecules Marquee with Alpha Gradient Masks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl mx-auto overflow-hidden relative mt-9 sm:mt-11"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex items-center gap-2.5 animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 shadow-sm backdrop-blur-md transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                <span className="font-semibold text-slate-900 dark:text-white">{tech.name}</span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-500">• {tech.category}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* KPI Trust Bar — 100% Unified Surface with Zero Color Discrepancy */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-16 border-t border-b border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-2xl py-7 sm:py-8 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                <MetricCounter end={150} suffix="+" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Projects Delivered in India
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                <MetricCounter end={99} suffix=".98%" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Software Uptime SLA
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                <MetricCounter end={4} suffix=".2x" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                <TrendingUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Average Client Ad ROAS
              </span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                <MetricCounter end={14} suffix=" Days" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                <Clock className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                Sprint Delivery Time
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  </div>
  );
};
