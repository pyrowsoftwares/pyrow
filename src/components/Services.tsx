import React, { useState } from 'react';
import {
  Laptop,
  TrendingUp,
  Cpu,
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Flame,
  Zap,
  Globe,
  Database,
  Layers,
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { MagneticButton } from './ui/MagneticButton';

interface ServicesProps {
  onOpenStrategyCall: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenStrategyCall,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'marketing' | 'software' | 'mobile'>('all');

  const tabs = [
    {
      id: 'all',
      label: 'All Services',
      count: servicesData.length,
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: 'web',
      label: 'Web Dev',
      count: servicesData.filter((s) => s.category === 'web').length,
      icon: <Laptop className="w-3.5 h-3.5" />,
    },
    {
      id: 'marketing',
      label: 'Marketing',
      count: servicesData.filter((s) => s.category === 'marketing').length,
      icon: <TrendingUp className="w-3.5 h-3.5" />,
    },
    {
      id: 'software',
      label: 'Software',
      count: servicesData.filter((s) => s.category === 'software').length,
      icon: <Cpu className="w-3.5 h-3.5" />,
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
      count: servicesData.filter((s) => s.category === 'mobile').length,
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
  ] as const;

  const filteredServices =
    activeTab === 'all'
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Globe className="w-5 h-5 text-sky-500" />;
      case 'marketing':
        return <TrendingUp className="w-5 h-5 text-ember-500" />;
      case 'software':
        return <Database className="w-5 h-5 text-purple-500" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-ember-500" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'web':
        return 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'marketing':
        return 'text-ember-600 dark:text-ember-400 bg-ember-500/10 border-ember-500/20';
      case 'software':
        return 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'mobile':
        return 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20';
      default:
        return 'text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10';
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Modeled on PipeRocket Outcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/25 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3.5 font-semibold">
              <Flame className="w-3.5 h-3.5 text-ember-500" />
              <span>Full-Stack Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Every Service Connected{' '}
              <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-amber-500 bg-clip-text text-transparent">
                To One Outcome.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              We don&apos;t build channels in isolation. Every service we deliver is part of a high-velocity connected system designed for revenue, customer acquisition, and scale.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              variant="outline"
              size="md"
              onClick={() => onOpenStrategyCall()}
            >
              Consult with Our Team
            </MagneticButton>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-start sm:justify-center w-full mb-10 overflow-x-auto scrollbar-none px-1">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 overflow-x-auto scrollbar-none max-w-full sm:max-w-fit shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-ember-500 text-white shadow-md shadow-ember-500/25'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-zinc-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PipeRocket-Style Outcome Approach Cards (No Jumping, Zero Text Cutoff) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem, idx) => {
            const isFeatured = idx === 0 && activeTab === 'all';
            const heroKpi = service.kpis?.[0];

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border min-h-[340px] ${
                  isFeatured
                    ? 'bg-white dark:bg-[#111726] border-ember-500/40 shadow-sm hover:shadow-[0_16px_36px_rgba(255,77,0,0.12)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]'
                    : 'bg-white dark:bg-[#111726] border-slate-200/90 dark:border-white/10 hover:border-ember-500/50 shadow-sm hover:shadow-[0_16px_36px_rgba(255,77,0,0.1)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getServiceIcon(service.category)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${getCategoryBadgeClass(service.category)}`}>
                        {service.category.toUpperCase()}
                      </span>
                      {service.badge && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-ember-500/10 text-ember-600 dark:text-ember-300 border border-ember-500/25">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ember-500 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Middle Container with Cross-Fade (Zero Height Jump) */}
                  <div className="relative h-[130px] my-4 overflow-hidden">
                    {/* State 1: Default View (Summary + Hero KPI) */}
                    <div className="absolute inset-0 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
                      <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>

                      {heroKpi && (
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 w-fit">
                          <Zap className="w-3.5 h-3.5 text-ember-500 shrink-0" />
                          <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                            {heroKpi.value}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                            {heroKpi.label}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* State 2: Hover View (Key Deliverables List) */}
                    <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div>
                        <div className="text-[10px] font-mono font-bold text-ember-600 dark:text-ember-400 uppercase tracking-wider mb-2">
                          Key Deliverables
                        </div>
                        <div className="space-y-1.5">
                          {service.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1">
                        {service.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PipeRocket-Style Action Link Button (Lights Up on Hover) */}
                <div className="pt-3 border-t border-slate-100 dark:border-white/10">
                  <button
                    onClick={() => onOpenStrategyCall(service.title)}
                    className="w-full flex items-center justify-between text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-zinc-300 group-hover:bg-ember-500 group-hover:text-white group-hover:border-ember-500 transition-all duration-200 cursor-pointer"
                  >
                    <span>Consult On This Service</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
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
