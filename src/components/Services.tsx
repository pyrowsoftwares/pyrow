import React, { useState } from 'react';
import {
  Laptop,
  TrendingUp,
  Cpu,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Flame,
  Zap,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface ServicesProps {
  onOpenScopeCalculator: (serviceTitle?: string) => void;
  onOpenStrategyCall: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenScopeCalculator,
  onOpenStrategyCall,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'marketing' | 'software' | 'mobile'>('all');

  const tabs = [
    { id: 'all', label: 'All Services', count: '14', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'web', label: 'Web Dev', count: '4', icon: <Laptop className="w-3.5 h-3.5" /> },
    { id: 'marketing', label: 'Marketing', count: '6', icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { id: 'software', label: 'Software', count: '2', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: 'Mobile Apps', count: '3', icon: <Smartphone className="w-3.5 h-3.5" /> },
  ] as const;

  const filteredServices =
    activeTab === 'all'
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'web':
        return 'text-sky-600 dark:text-sky-400 border-sky-500/20 bg-sky-500/10';
      case 'marketing':
        return 'text-ember-600 dark:text-ember-400 border-ember-500/20 bg-ember-500/10';
      case 'software':
        return 'text-purple-600 dark:text-purple-400 border-purple-500/20 bg-purple-500/10';
      case 'mobile':
        return 'text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-500/10';
      default:
        return 'text-slate-500 border-slate-200 bg-slate-100';
    }
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-obsidian-950/80 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ember-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/25 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-semibold">
              <Flame className="w-3.5 h-3.5 text-ember-500" />
              <span>Full-Stack Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Enterprise Engineering{' '}
              <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-amber-500 bg-clip-text text-transparent">
                For Fast Scale.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              From high-conversion e-commerce and native mobile applications to bespoke enterprise ERP suites and targeted performance acquisition.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              variant="outline"
              size="md"
              onClick={onOpenStrategyCall}
            >
              Consult with Our Team
            </MagneticButton>
          </div>
        </div>

        {/* Filter Tabs Switcher */}
        <div className="flex justify-center w-full mb-8">
          <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 overflow-x-auto scrollbar-none max-w-fit shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${isActive
                      ? 'bg-ember-500 text-white shadow-md shadow-ember-500/20'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/5'
                    }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-zinc-400'
                      }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Bento Grid with Linear-style Mouse Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const isFeatured = idx === 0 && activeTab === 'all';
            return (
              <div
                key={service.id}
                onMouseMove={handleCardMouseMove}
                onMouseEnter={() => soundFX.playHover()}
                className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 overflow-hidden ${isFeatured
                    ? 'bg-gradient-to-br from-white via-orange-50/15 to-amber-50/10 dark:from-obsidian-850 dark:via-obsidian-900 dark:to-obsidian-950 border border-ember-500/40 shadow-light-card-hover dark:shadow-glow-ember'
                    : 'bg-white dark:bg-obsidian-900/90 border border-slate-200/90 dark:border-white/[0.08] hover:border-ember-500/35 dark:hover:border-ember-500/40 shadow-light-card hover:shadow-light-card-hover dark:shadow-glass-edge'
                  }`}
                style={{
                  backgroundImage: `radial-gradient(400px circle at var(--mouse-x, -200px) var(--mouse-y, -200px), rgba(255, 77, 0, 0.08), transparent 70%)`,
                }}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${getCategoryColor(
                        service.category
                      )}`}
                    >
                      {service.category.toUpperCase()}
                    </span>

                    {service.badge && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-ember-500/10 text-ember-600 dark:text-ember-300 border border-ember-500/30 font-semibold">
                        <Zap className="w-3 h-3 text-ember-500 fill-ember-500" />
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ember-600 dark:group-hover:text-ember-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10">
                  {/* KPI Badges */}
                  <div className="grid grid-cols-3 gap-2 py-2.5 mb-4 bg-slate-50 dark:bg-obsidian-950 rounded-2xl px-3 border border-slate-200/80 dark:border-white/5">
                    {service.kpis.map((kpi, kIdx) => (
                      <div key={kIdx} className="text-center">
                        <div className="text-xs sm:text-sm font-bold font-mono text-slate-900 dark:text-white">
                          {kpi.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400 truncate font-semibold">{kpi.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Trigger with Contextual Prefill */}
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onOpenScopeCalculator(service.title);
                    }}
                    className="w-full flex items-center justify-between text-xs font-semibold py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-ember-500 hover:text-white text-slate-800 dark:text-zinc-200 transition-all duration-300 group/btn cursor-pointer"
                  >
                    <span>Scope This Capability</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
