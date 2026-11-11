import React, { useState, useEffect, memo } from 'react';
import { Sparkles, ArrowDown, Flame, Shield, TrendingUp, Star, Clock } from 'lucide-react';
import { ParticleForge } from './ui/ParticleForge';
import { MagneticButton } from './ui/MagneticButton';
import { MetricCounter } from './ui/MetricCounter';
import { HeroVisualShowcase } from './ui/HeroVisualShowcase';
import { soundFX } from './ui/sound-effects';

interface HeroProps {
  onOpenScopeCalculator: () => void;
  onOpenStrategyCall: () => void;
}

const rotatingWords = [
  'Lightning-Fast Websites',
  'Custom Business ERPs',
  'Android & iOS Mobile Apps',
  'High-ROAS Ad Campaigns',
  'Sub-Second Billing & POS',
  'WhatsApp AI Automation',
];

// Isolated Typewriter Leaf Component (Zero Parent Hero Re-renders)
const TypewriterDisplay = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const currentWord = rotatingWords[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1900);
          setTypingSpeed(60);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed]);

  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-sm sm:text-base font-mono text-slate-600 dark:text-zinc-400">
      <span className="text-slate-400 dark:text-zinc-500 font-sans">We engineer →</span>
      <span className="font-semibold text-ember-600 dark:text-ember-400 bg-ember-500/10 dark:bg-ember-500/15 px-3 py-1 rounded-lg border border-ember-500/30 min-w-[220px] sm:min-w-[260px] text-left">
        {displayText}
        <span className="animate-pulse ml-0.5 text-ember-500">|</span>
      </span>
    </div>
  );
});

TypewriterDisplay.displayName = 'TypewriterDisplay';

export const Hero: React.FC<HeroProps> = ({ onOpenScopeCalculator, onOpenStrategyCall }) => {
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
    <section id="hero" className="relative min-h-[88vh] flex flex-col justify-between pt-24 sm:pt-28 pb-0 overflow-hidden">
      {/* Interactive Cybernetic Particle Forge Canvas */}
      <ParticleForge />

      {/* Adaptive Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-ember-500/10 via-amber-500/8 to-orange-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20 pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-obsidian-800/90 border border-slate-200/90 dark:border-white/10 text-xs tracking-tight text-slate-800 dark:text-zinc-300 shadow-sm mb-5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember-500" />
          </span>
          <span className="text-zinc-700 dark:text-zinc-300 font-medium">
            Next-Gen Software Agency <span className="text-slate-300 dark:text-white/20 mx-1.5">•</span>
            <span className="text-ember-600 dark:text-ember-400 font-semibold">Web • Mobile • Enterprise ERP • Growth</span>
          </span>
        </div>

        {/* Primary Headline with Monochromatic Base & Clean Ember Accent */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-[-0.03em] text-slate-900 dark:text-zinc-50 max-w-5xl mx-auto leading-[1.1] sm:leading-[1.08]">
          We Engineer Software That Works.{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-amber-500 bg-clip-text text-transparent">
            We Run Growth That Scales.
          </span>
        </h1>

        {/* Dynamic Memoized Text Rotator */}
        <TypewriterDisplay />

        {/* Sub-headline */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Pyrow is India's dedicated technology and marketing powerhouse. We build fast websites, dependable mobile apps, custom ERP systems, and high-converting ad campaigns — with 100% intellectual property ownership from Day 1.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <MagneticButton
            variant="primary"
            size="lg"
            onClick={onOpenScopeCalculator}
            icon={<Sparkles className="w-5 h-5" />}
          >
            Calculate Project Cost (Instant Quote)
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="lg"
            onClick={scrollToServices}
            icon={<ArrowDown className="w-4 h-4 text-slate-500 dark:text-zinc-400 group-hover:translate-y-1 transition-transform" />}
          >
            Explore What We Do
          </MagneticButton>
        </div>

        {/* Tech Stack Floating Marquee */}
        <div className="mt-9 max-w-5xl mx-auto overflow-hidden relative">
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
        </div>

        {/* Hero Interactive Visual Showcase */}
        <div className="mt-5">
          <HeroVisualShowcase />
        </div>
      </div>

      {/* KPI Trust Bar */}
      <div className="relative z-10 mt-10 border-t border-b border-slate-200/90 dark:border-white/[0.08] bg-slate-50/90 dark:bg-obsidian-900/90 backdrop-blur-md py-6 sm:py-7">
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
      </div>
    </section>
  );
};
