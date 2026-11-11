import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Flame, Shield, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { TechGrowthMatrix } from './ui/TechGrowthMatrix';
import { MagneticButton } from './ui/MagneticButton';
import { MetricCounter } from './ui/MetricCounter';
import { HeroVisualShowcase } from './ui/HeroVisualShowcase';
import { soundFX } from './ui/sound-effects';

interface HeroProps {
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStrategyCall }) => {
  const techLogos = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Full-Stack' },
    { name: 'TypeScript', category: 'Architecture' },
    { name: 'Node.js', category: 'Distributed' },
    { name: 'Flutter', category: 'Cross-Platform' },
    { name: 'Python & AI', category: 'Pipelines' },
    { name: 'AWS Cloud', category: 'DevOps' },
    { name: 'Meta Ads', category: 'Performance' },
    { name: 'Google Ads', category: 'SEM' },
    { name: 'PostgreSQL', category: 'Data Layer' },
    { name: 'WhatsApp API', category: 'Automation' },
  ];

  const scrollToServices = () => {
    soundFX.playClick();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-28 pb-0 overflow-hidden">
      {/* High-End Dynamic Orbitals & Harmonic Wave Engine */}
      <TechGrowthMatrix />

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">
        {/* Eyebrow Tag with Live High-Tech Status */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-obsidian-850/90 border border-slate-200/90 dark:border-white/10 text-xs tracking-tight text-slate-800 dark:text-zinc-300 shadow-sm mb-5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">
            Digital Agency & Software Partner <span className="text-slate-300 dark:text-white/20 mx-1.5">•</span>
            <span className="text-ember-600 dark:text-ember-400 font-semibold">Websites • Custom Software • Mobile Apps • Google & Meta Ads</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 pl-2 border-l border-slate-200 dark:border-white/10 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> 100% Client Ownership
          </span>
        </motion.div>

        {/* Primary Headline with Monochromatic Base & Clean Ember Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-[-0.03em] text-slate-900 dark:text-zinc-50 max-w-5xl mx-auto leading-[1.1] sm:leading-[1.08]"
        >
          We Build Websites & Software That Work.{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-amber-500 bg-clip-text text-transparent">
            We Run Marketing That Grows Your Business.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          Pyrow is India's dedicated technology and digital growth partner. We build lightning-fast websites, custom billing & management software, mobile apps, and high-converting ad campaigns — with 100% complete intellectual property ownership from Day 1.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={onOpenStrategyCall}
            icon={<Sparkles className="w-5 h-5" />}
            className="w-full sm:w-auto justify-center"
          >
            Schedule Strategy Call
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="lg"
            onClick={scrollToServices}
            icon={<ArrowDown className="w-4 h-4 text-slate-500 dark:text-zinc-400 group-hover:translate-y-1 transition-transform" />}
            className="w-full sm:w-auto justify-center"
          >
            Explore What We Do
          </MagneticButton>
        </motion.div>

        {/* Tech Stack Floating Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 max-w-5xl mx-auto overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-light-bg dark:from-obsidian to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-light-bg dark:from-obsidian to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-3 animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-obsidian-850/80 backdrop-blur-sm border border-slate-200/90 dark:border-white/[0.08] hover:border-ember-500/40 text-xs font-mono text-slate-700 dark:text-zinc-400 hover:text-ember-600 dark:hover:text-white transition-all shadow-sm cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                <span className="font-semibold text-slate-800 dark:text-zinc-200">{tech.name}</span>
                <span className="text-[10px] text-slate-400 dark:text-zinc-500">• {tech.category}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Interactive Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5"
        >
          <HeroVisualShowcase />
        </motion.div>
      </div>

      {/* KPI Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-10 border-t border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/90 dark:bg-[#141D30] backdrop-blur-md py-6 sm:py-7"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Metric 1 */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1">
                <MetricCounter end={150} suffix="+" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-ember-500" />
                Projects Delivered in India
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1">
                <MetricCounter end={99} suffix=".98%" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                Software Uptime SLA
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1">
                <MetricCounter end={4} suffix=".2x" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                Average Client Ad ROAS
              </span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white flex items-center gap-1">
                <MetricCounter end={14} suffix=" Days" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mt-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                Sprint Delivery Time
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
