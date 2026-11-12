import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  shortSummary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; change: string }[];
  tags: string[];
}

export const CaseStudies: React.FC<{ onOpenStrategyCall: (title?: string) => void }> = ({ onOpenStrategyCall }) => {
  const studies: CaseStudy[] = [
    {
      id: 'fintech-gateway',
      client: 'Vanguard Capital',
      industry: 'FinTech Payments',
      title: 'High-speed payment engine routing 10M+ monthly transactions at 28ms latency.',
      shortSummary: 'Sub-30ms automated multi-bank routing and real-time double-entry ledger reconciliation with 99.99% uptime.',
      challenge: 'Legacy core took 4.2s per transaction, dropped traffic during peak flash sales, and needed 5 days for manual branch reconciliation.',
      solution: 'Engineered an event-driven payment routing microservice with automated bank fallbacks and zero-latency double-entry audit logging.',
      impactMetrics: [
        { label: 'Payment Speed', value: '28ms', change: '-94% Wait' },
        { label: 'Throughput', value: '10M+', change: '+280% Vol' },
        { label: 'Reconciliation', value: 'Real-Time', change: 'Instant' },
      ],
      tags: ['Distributed Go/Node', 'PostgreSQL', 'Bank Security'],
    },
    {
      id: 'health-network',
      client: 'Apex Healthcare Network',
      industry: 'Healthcare Cloud EHR',
      title: 'Unified clinical platform synchronizing 48 multi-specialty regional medical centers.',
      shortSummary: 'HIPAA-compliant medical cloud system connecting 48 hospitals with instant doctor scheduling and zero-latency lab feeds.',
      challenge: 'Fragmented local installations caused duplicate patient records, 36-hour lab delivery delays, and severe appointment overlap.',
      solution: 'Architected a central cloud EHR with instant doctor calendars, verified lab APIs, and end-to-end encrypted telemetry.',
      impactMetrics: [
        { label: 'Patient Wait', value: '14 Mins', change: '-58%' },
        { label: 'Lab Delivery', value: 'Real-Time', change: 'Instant' },
        { label: 'Prescriptions', value: '100%', change: 'Zero Errors' },
      ],
      tags: ['Cloud EHR', 'Patient Portal', 'Lab Pipeline'],
    },
    {
      id: 'd2c-hypergrowth',
      client: 'Aether Retail',
      industry: 'D2C E-Commerce',
      title: 'Scaling multi-channel storefront to 500,000+ orders with sub-second mobile loads.',
      shortSummary: 'Headless Next.js storefront delivering 380ms mobile checkouts combined with algorithmic WhatsApp customer re-engagement.',
      challenge: 'Storefront lagged at 5+ seconds on mobile with a 72% cart drop-off and rising social acquisition customer costs.',
      solution: 'Rebuilt the commerce engine using headless Next.js, optimized Meta conversion APIs, and deployed automated WhatsApp retention flows.',
      impactMetrics: [
        { label: 'Orders Shipped', value: '500,000+', change: '15x Scale' },
        { label: 'ROAS Lift', value: '5.4x', change: '+142%' },
        { label: 'Mobile Checkout', value: '4.6%', change: '+180%' },
      ],
      tags: ['Headless Next.js', 'WhatsApp Bots', 'Dynamic SEO'],
    },
  ];

  return (
    <section id="case-studies" className="relative py-16 sm:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - PipeRocket Style: Short, Clean & Direct */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/25 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Production Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Enterprise Results.{' '}
              <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-amber-500 bg-clip-text text-transparent">
                Proven In Production.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              Real metrics, real systems, and verifiable growth engineered for high-growth tech brands and enterprises.
            </p>
          </div>

          <MagneticButton
            variant="outline"
            size="md"
            onClick={() => onOpenStrategyCall()}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Schedule Strategy Call
          </MagneticButton>
        </div>

        {/* Case Studies Grid - PipeRocket Outcome Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border min-h-[360px] bg-white dark:bg-[#111726] border-slate-200/90 dark:border-white/10 hover:border-ember-500/50 shadow-sm hover:shadow-[0_16px_36px_rgba(255,77,0,0.1)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Header Tag & Client */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-ember-500/10 text-ember-600 dark:text-ember-400 border border-ember-500/20 uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-zinc-400">
                    {study.client}
                  </span>
                </div>

                {/* Title / Headline */}
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ember-500 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Middle Cross-Fade Container (Zero Height Shift) */}
                <div className="relative h-[135px] my-4 overflow-hidden">
                  {/* Default State: Short Summary + Tech Chips */}
                  <div className="absolute inset-0 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {study.shortSummary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover State: The Challenge & The Solution */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="space-y-2">
                      <div className="text-xs text-slate-700 dark:text-zinc-300 leading-snug">
                        <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-0.5">
                          The Challenge:
                        </span>
                        <span className="line-clamp-2">{study.challenge}</span>
                      </div>

                      <div className="text-xs text-slate-800 dark:text-zinc-200 leading-snug">
                        <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-0.5">
                          Pyrow Solution:
                        </span>
                        <span className="line-clamp-2">{study.solution}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics Bar */}
                <div className="grid grid-cols-3 gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 text-center">
                  {study.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="truncate">
                      <div className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-[9px] text-slate-500 dark:text-zinc-400 truncate">
                        {metric.label}
                      </div>
                      <div className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button (Lights Up on Hover) */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/10">
                <button
                  onClick={() => onOpenStrategyCall(study.title)}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-zinc-300 group-hover:bg-ember-500 group-hover:text-white group-hover:border-ember-500 transition-all duration-200 cursor-pointer"
                >
                  <span>Build a System Like This</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
