import React from 'react';
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

  const scrollToServices = () => {
    soundFX.playClick();
    const el = document.getElementById('services-section') || document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative w-full bg-transparent">
      {/* 1. Signature Untangling Thread Intro Banner (Exact codebuilders.in style) */}
      <HeroUntanglingThread />

      {/* 2. Full Pyrow Hero Page (Directly below untangling with seamless 0-gap connection) */}
      <section
        id="hero-main"
        className="relative w-full pt-16 sm:pt-24 pb-16 overflow-hidden bg-transparent scroll-mt-20"
        aria-label="Pyrow Software Engineering & Digital Growth"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_15%,rgba(124,58,237,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(80%_60%_at_50%_15%,rgba(124,58,237,0.22)_0%,transparent_70%)] transition-opacity duration-300" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-violet-500/25 dark:border-violet-500/30 text-xs text-slate-700 dark:text-zinc-300 shadow-sm mb-5 backdrop-blur-md transition-colors"
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

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-tight sm:leading-[1.08] text-center transition-colors"
          >
            We Build Software Products{' '}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              and Grow Them with Digital Marketing
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed text-center font-normal transition-colors"
          >
            From raw idea to launch to customers, all under one roof
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto"
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
              className="w-full sm:w-auto justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/20 transition-colors"
            >
              View Our Portfolio & Results
            </MagneticButton>
          </motion.div>

          {/* Quick Metrics Trust Pill (Z3Connect Section 1) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 inline-flex items-center gap-4 sm:gap-6 px-5 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 shadow-sm"
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

          {/* Tech Molecules Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto overflow-hidden relative mt-8 sm:mt-10"
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF8FF] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none transition-colors" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF8FF] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none transition-colors" />

            <div className="flex items-center gap-2.5 animate-marquee whitespace-nowrap">
              {[...techLogos, ...techLogos].map((tech, idx) => (
                <div
                  key={`${tech.name}-${idx}`}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 shadow-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                  <span className="font-semibold text-slate-900 dark:text-white">{tech.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-zinc-500">• {tech.category}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* KPI Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mt-14 border-t border-b border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-[#141D30]/90 backdrop-blur-md py-6 sm:py-7 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {/* Metric 1 */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                  <MetricCounter end={150} suffix="+" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  Projects Delivered in India
                </span>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                  <MetricCounter end={99} suffix=".98%" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                  <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Software Uptime SLA
                </span>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
                  <MetricCounter end={4} suffix=".2x" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1 transition-colors">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  Average Client Ad ROAS
                </span>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1 transition-colors">
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
