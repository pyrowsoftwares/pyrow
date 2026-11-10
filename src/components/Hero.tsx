import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowDown, Flame, ChevronDown, Shield, TrendingUp, Star, Clock } from 'lucide-react';
import { ParticleForge } from './ui/ParticleForge';
import { MagneticButton } from './ui/MagneticButton';
import { MetricCounter } from './ui/MetricCounter';
import { HeroVisualShowcase } from './ui/HeroVisualShowcase';
import { soundFX } from './ui/sound-effects';

interface HeroProps {
  onOpenScopeCalculator: () => void;
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScopeCalculator, onOpenStrategyCall }) => {
  const rotatingWords = [
    'Lightning-Fast Websites',
    'Custom Business ERPs',
    'Android & iOS Mobile Apps',
    'High-ROAS Google & Meta Ads',
    'Sub-Second Billing & POS',
    'WhatsApp AI Automation',
  ];

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

  const techLogos = [
    { name: 'React', category: 'Web' },
    { name: 'Next.js', category: 'Full-Stack' },
    { name: 'TypeScript', category: 'Code' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Flutter', category: 'Mobile App' },
    { name: 'Python & AI', category: 'Automation' },
    { name: 'AWS Cloud', category: 'Hosting' },
    { name: 'Meta Ads', category: 'Marketing' },
    { name: 'Google Ads', category: 'Search' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'WhatsApp API', category: 'Messaging' },
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyber-blue/10 via-ember-500/10 to-flare-gold/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">
        {/* Eyebrow Tag in Clear English */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-obsidian-800/90 border border-slate-200 dark:border-white/10 text-xs font-mono tracking-wide text-slate-800 dark:text-zinc-300 shadow-sm mb-5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember-500" />
          </span>
          <span className="text-ember-600 dark:text-ember-400 font-bold">
            Web Development • Mobile Apps • Custom Software • Digital Marketing
          </span>
        </div>

        {/* Primary Headline in Clear High-Impact English */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.1] sm:leading-[1.08]">
          We Build{' '}
          <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            Software That Works.
          </span>{' '}
          <br className="hidden sm:inline" />
          We Run{' '}
          <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-flare-gold bg-clip-text text-transparent drop-shadow-sm">
            Growth That Scales.
          </span>
        </h1>

        {/* Dynamic Text Rotator in Simple English */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm sm:text-lg font-mono text-slate-600 dark:text-zinc-400">
          <span className="text-slate-400 dark:text-zinc-500">We engineer →</span>
          <span className="font-bold text-ember-600 dark:text-ember-400 bg-ember-500/10 dark:bg-ember-500/15 px-3 py-1 rounded-lg border border-ember-500/30">
            {displayText}
            <span className="animate-pulse ml-0.5 text-ember-500">|</span>
          </span>
        </div>

        {/* Sub-headline in Plain English */}
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
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/5 hover:border-ember-500/40 text-xs font-mono text-slate-700 dark:text-zinc-400 hover:text-ember-600 dark:hover:text-white transition-all shadow-sm cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                <span className="font-bold text-slate-800 dark:text-zinc-200">{tech.name}</span>
                <span className="text-[10px] text-slate-400 dark:text-zinc-500">• {tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Interactive Visual Showcase in Brand Colors */}
        <div className="mt-5">
          <HeroVisualShowcase />
        </div>
      </div>

      {/* Live Metrics Ticker Bar (Strictly Indian Rupees) */}
      <div className="relative mt-12 sm:mt-14 border-y border-slate-200 dark:border-white/10 bg-white/85 dark:bg-obsidian-900/70 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/10">
            <div className="pt-2 sm:pt-0 sm:px-4">
              <MetricCounter
                end={150}
                suffix="+"
                label="Delivered Projects"
                sublabel="Websites, ERPs & Mobile Apps"
              />
            </div>
            <div className="pt-2 sm:pt-0 sm:px-4">
              <MetricCounter
                end={99.98}
                decimals={2}
                suffix="%"
                label="Server Uptime Guarantee"
                sublabel="Zero-Downtime Infrastructure"
              />
            </div>
            <div className="pt-2 sm:pt-0 sm:px-4">
              <MetricCounter
                end={350}
                prefix="₹"
                suffix=" Cr+"
                label="Client Revenue Generated"
                sublabel="Across Indian Enterprises"
              />
            </div>
            <div className="pt-2 sm:pt-0 sm:px-4">
              <MetricCounter
                end={4.9}
                decimals={1}
                suffix="/5"
                label="Client Satisfaction Rating"
                sublabel="From 90+ Business Audits"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
