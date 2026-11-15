import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { soundFX } from './sound-effects';

interface SpectrumSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  metrics: { label: string; value: string }[];
  pills: string[];
  icon: React.ReactNode;
}

export const SpectrumSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: SpectrumSlide[] = [
    {
      id: 'ecommerce',
      tag: 'Digital Commerce',
      title: 'Headless E-Commerce & Omnichannel Stores',
      subtitle: 'Engineered for Sub-0.6s Speed & Maximum Cart Conversion',
      desc: 'We architect headless Shopify Plus and bespoke Next.js storefronts that load instantly, handle millions in flash sales, and turn visitors into buyers with frictionless one-click checkouts.',
      metrics: [
        { label: 'Average PageSpeed', value: '99/100' },
        { label: 'Checkout Latency', value: '< 300ms' },
        { label: 'Mobile Conversion', value: '+42%' },
      ],
      pills: ['Shopify Plus', 'Next.js 15', 'Tailwind', 'Stripe', 'Edge Caching'],
      icon: <Zap className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
    },
    {
      id: 'erp',
      tag: 'Enterprise Systems',
      title: 'Custom Multi-Branch ERP & Warehouse Suite',
      subtitle: 'Unified Operational Command with Zero Spreadsheet Clutter',
      desc: 'Centralize multi-branch billing, real-time inventory tracking, staff payroll, and GST invoicing into one secure, lightning-fast dashboard built specifically for your exact business model.',
      metrics: [
        { label: 'Audit Accuracy', value: '100%' },
        { label: 'Sync Latency', value: '< 0.05s' },
        { label: 'Manual Hours Saved', value: '35h / wk' },
      ],
      pills: ['Multi-Branch Billing', 'Role Permissions', 'Automated GST', 'Offline Sync'],
      icon: <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      id: 'mobile',
      tag: 'Native Mobile Engineering',
      title: 'High-Performance iOS & Android Applications',
      subtitle: 'Fluid 120Hz ProMotion UX with Offline-First Local Sync',
      desc: 'Deliver consumer delight with buttery 60/120fps cross-platform Flutter and React Native apps, featuring instant biometrics, deep linking, and automated push notification campaigns.',
      metrics: [
        { label: 'Frame Rate', value: '120fps Solid' },
        { label: 'Crash Rate', value: '< 0.01%' },
        { label: 'App Store Rating', value: '4.9 ★' },
      ],
      pills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase Push'],
      icon: <Zap className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
    },
  ];

  const handlePrev = () => {
    soundFX.playClick();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    soundFX.playClick();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentIndex];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-transparent text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Controls Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 dark:border-violet-500/30 text-xs font-mono text-violet-700 dark:text-violet-300 mb-3 font-semibold shadow-sm backdrop-blur-sm transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>Full-Spectrum Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight transition-colors">
              Future-Ready Engineering Spectrum
            </h2>
          </div>

          {/* Slider Counter & Navigation Arrows */}
          <div className="flex items-center gap-6">
            <div className="flex items-baseline gap-1 font-mono text-sm">
              <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                {(currentIndex + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-slate-400 dark:text-zinc-600">/</span>
              <span className="text-slate-500 dark:text-zinc-400">
                {slides.length.toString().padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous capability"
                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 hover:bg-violet-600 hover:text-white border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next capability"
                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 hover:bg-violet-600 hover:text-white border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Slide Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-white/95 dark:bg-[#1A0C35]/95 backdrop-blur-xl border border-slate-200/90 dark:border-violet-500/40 shadow-xl dark:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-600/20 border border-violet-200 dark:border-violet-500/40 flex items-center justify-center">
                  {current.icon}
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-violet-700 dark:text-violet-300 font-bold transition-colors">
                  {current.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-3 tracking-tight transition-colors">
                {current.title}
              </h3>

              <div className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-4 transition-colors">
                {current.subtitle}
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 transition-colors">
                {current.desc}
              </p>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.pills.map((pill, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-300 font-medium transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Metric Grid Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#120626] border border-slate-200 dark:border-violet-500/25 space-y-5 transition-colors">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-400 font-semibold pb-3 border-b border-slate-200 dark:border-white/10 transition-colors">
                  Verified Performance Benchmarks
                </div>

                <div className="space-y-4">
                  {current.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-baseline justify-between">
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-medium transition-colors">{metric.label}</span>
                      <span className="text-xl sm:text-2xl font-black font-mono text-violet-600 dark:text-violet-400 transition-colors">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-400 transition-colors">
                  <span>Guaranteed SLA Delivery</span>
                  <ArrowUpRight className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};