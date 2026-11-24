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

  return (
    <div id="hero" className="relative w-full max-w-[100vw] overflow-x-clip bg-transparent">
      {/* 1. Interactive Untangling Thread Intro Animation */}
      <HeroUntanglingThread />

      {/* 2. Main Hero Section (Smooth transition from untangling into full conversion showcase) */}
      <section
        id="hero-main"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative w-full max-w-[100vw] pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden bg-transparent"
        aria-label="Pyrow Software Engineering & Digital Growth"
      >
        {/* MotionSites Unified Cinematic Ambient Video Backdrop (Dark Mode Only) */}
        <div
          className="hidden dark:block absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
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

        {/* Light Mode Soft Ambient Glow (100% Seamless with Global Light Background) */}
        <div className="dark:hidden absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-violet-400/12 via-purple-300/12 to-indigo-400/12 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Eyebrow Announcement Chip (Scroll-Triggered Cinematic Entrance) */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] text-xs text-slate-700 dark:text-zinc-300 shadow-[0_0_25px_-5px_rgba(124,58,237,0.25)] mb-6 backdrop-blur-2xl transition-all max-w-[92vw] sm:max-w-none text-center"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-800 dark:text-zinc-200 font-medium text-[11px] sm:text-xs tracking-wide">
            <span className="hidden sm:inline">Enterprise Digital Engineering Powerhouse • </span>
            <span className="text-violet-600 dark:text-violet-400 font-semibold font-mono">Bespoke Software • AI • Growth</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 pl-2.5 border-l border-slate-300 dark:border-white/10 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Code Ownership
          </span>
        </motion.div>

        {/* Primary Headline with 3D Interactive Perspective Tilt & Scroll-Triggered Reveal */}
        <motion.h1
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          initial={{ opacity: 0, y: 38, filter: 'blur(8px)', scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-tight sm:leading-[1.12] text-center transition-colors select-none"
        >
          <span>
            We Build Software Products{' '}
            <br className="hidden sm:inline" />
            and Grow Them with{' '}
            <span className="font-serif italic font-normal tracking-wide underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-300 dark:via-purple-200 dark:to-indigo-300 bg-clip-text text-transparent">
              Digital Marketing
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed text-center font-normal transition-colors"
        >
          From raw idea to launch to customers, all under one roof
        </motion.p>

        {/* Action Buttons with 3D Perspective Tilt & Scroll Reveal */}
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          initial={{ opacity: 0, y: 28, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto"
        >
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={onOpenStrategyCall}
            icon={<Sparkles className="w-5 h-5 text-violet-200" />}
            className="w-full sm:w-auto justify-center shadow-lg shadow-violet-600/30 border border-violet-400/30"
          >
            Claim Architecture Strategy Call
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="lg"
            onClick={() => {
              soundFX.playClick();
              navigate('/products');
            }}
            icon={<ArrowRight className="w-4 h-4 text-slate-600 dark:text-zinc-400 group-hover:translate-x-1 transition-transform" />}
            className="w-full sm:w-auto justify-center backdrop-blur-xl border border-white/[0.08]"
          >
            Explore Software Products
          </MagneticButton>
        </motion.div>

        {/* Trust Credibility Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 inline-flex items-center gap-2 sm:gap-5 px-4 sm:px-6 py-2 rounded-full bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-2xl max-w-full flex-wrap justify-center"
        >
          <div className="flex items-center gap-1.5 text-amber-500">
            <span>★★★★★</span>
            <span className="font-bold text-slate-900 dark:text-white ml-0.5">4.9/5 Rating</span>
          </div>
          <span className="text-slate-300 dark:text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-violet-600 dark:text-violet-400 font-mono text-sm">120+</span>
            <span>Enterprise Systems</span>
          </div>
          <span className="text-slate-300 dark:text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% Code Ownership</span>
          </div>
        </motion.div>

        {/* Alternative: Curated Core Architecture Stack (Clean, Static, Non-Scrolling) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto"
        >
          {[
            { name: 'React 19 & Next.js 15', category: 'Frontend', dot: 'bg-cyan-500' },
            { name: 'TypeScript & Node.js', category: 'Architecture', dot: 'bg-blue-500' },
            { name: 'Python & AI Pipelines', category: 'Intelligence', dot: 'bg-violet-500' },
            { name: 'AWS Cloud & K8s', category: 'DevOps', dot: 'bg-amber-500' },
            { name: 'PostgreSQL & Redis', category: 'Data Layer', dot: 'bg-emerald-500' },
          ].map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.06] text-[11px] font-mono text-slate-700 dark:text-zinc-300 shadow-sm backdrop-blur-md hover:border-violet-500/30 transition-colors"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${tech.dot}`} />
              <span className="font-semibold text-slate-900 dark:text-white">{tech.name}</span>
              <span className="text-[10px] text-slate-400 dark:text-zinc-500 hidden sm:inline">• {tech.category}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* KPI Trust Deck — Clean Floating Glass Bento Card (No Harsh Edge-to-Edge Divider Lines) */}
      <div className="relative z-10 mt-12 sm:mt-14 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] backdrop-blur-2xl shadow-xl shadow-purple-500/5 py-7 sm:py-8 px-6 sm:px-10 transition-colors duration-300"
        >
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
        </motion.div>
      </div>
    </section>
  </div>
  );
};
