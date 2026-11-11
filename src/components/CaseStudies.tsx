import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
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
      industry: 'FinTech & Online Payments',
      title: 'High-Speed Payment Engine Processing 10M+ Monthly Transactions with 99.99% Reliability',
      challenge:
        'Legacy banking software was slow (4.2 seconds latency per payment), dropped transactions during spike sales, and took 5 full business days to reconcile accounts manually across branches.',
      solution:
        'Pyrow engineered an event-driven payment processing platform with sub-30ms automated multi-bank routing and instant double-entry database reconciliation.',
      impactMetrics: [
        { label: 'Payment Speed', value: '28ms', change: '-94% Wait' },
        { label: 'Monthly Throughput', value: '10M+ Txns', change: '+280%' },
        { label: 'Account Balancing', value: '3 Mins', change: 'Instant' },
      ],
      tags: ['Fast Payments', 'Distributed Go/Node', 'PostgreSQL', 'Bank Security'],
    },
    {
      id: 'health-network',
      client: 'Apex Healthcare Network',
      industry: 'Healthcare & Clinical ERP',
      title: 'Connecting 48 Multi-Specialty Clinics into One Unified Cloud EHR System',
      challenge:
        'Fragmented clinic installations led to duplicate patient profiles, 36-hour delays in delivering lab results, and recurring scheduling double-bookings.',
      solution:
        'Pyrow designed a HIPAA-compliant unified healthcare web platform connecting all 48 facilities with real-time lab data delivery and instant doctor scheduling.',
      impactMetrics: [
        { label: 'Patient Wait Time', value: '14 Mins', change: '-58%' },
        { label: 'Lab Report Delivery', value: 'Real-Time', change: 'Instant' },
        { label: 'Prescription Accuracy', value: '100%', change: 'Zero Errors' },
      ],
      tags: ['Healthcare ERP', 'Patient Portal', 'Lab Pipeline', 'Staff Apps'],
    },
    {
      id: 'd2c-hypergrowth',
      client: 'Aether Retail & Apparel',
      industry: 'D2C E-Commerce & Growth',
      title: 'Scaling D2C Store to 500,000+ Customers via Sub-Second Storefront & Precision Ads',
      challenge:
        'A bloated store loading in 5+ seconds on mobile caused a 72% abandonment rate. Uncoordinated social ads were exhausting marketing capital with deteriorating ROAS.',
      solution:
        'Pyrow rebuilt the entire online store using Next.js with sub-second page loads, restructured Meta/Google acquisition funnels, and automated WhatsApp re-engagement.',
      impactMetrics: [
        { label: 'Orders Delivered', value: '500,000+', change: '15x Growth' },
        { label: 'Return on Ad Spend', value: '5.4x', change: '+142%' },
        { label: 'Mobile Checkout Rate', value: '4.6%', change: '+180%' },
      ],
      tags: ['Headless E-Com', 'Performance Ads', 'WhatsApp Bots', 'Dynamic SEO'],
    },
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="case-studies" className="relative py-16 sm:py-20 lg:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/25 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Production Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Enterprise Results.{' '}
              <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-amber-500 bg-clip-text text-transparent">
                Measurable Business Growth.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              Explore how Pyrow has engineered mission-critical platforms and scalable acquisition engines for premier organizations.
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

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              onMouseMove={handleCardMouseMove}
              onMouseEnter={() => soundFX.playHover()}
              className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 hover:border-ember-500/40 dark:hover:border-ember-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] relative group overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(450px circle at var(--mouse-x, -200px) var(--mouse-y, -200px), rgba(255, 77, 0, 0.08), transparent 70%)`,
              }}
            >
              <div>
                {/* Header Tag & Industry */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="outline" className="border-ember-500/30 text-ember-600 dark:text-ember-400 bg-ember-500/10 text-[11px] font-mono">
                    {study.industry}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 font-semibold">{study.client}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ember-600 dark:group-hover:text-ember-400 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* The Challenge */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-1">
                    The Challenge:
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mt-3 p-4 rounded-2xl bg-ember-50/40 dark:bg-obsidian-950 border border-ember-500/20 dark:border-white/5">
                  <div className="text-[10px] font-mono text-ember-600 dark:text-ember-400 uppercase tracking-wider font-semibold mb-1">
                    What Pyrow Delivered:
                  </div>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Impact Metrics Ticker */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10">
                <div className="grid grid-cols-3 gap-2 py-3 bg-slate-50 dark:bg-obsidian-950 rounded-2xl px-3 border border-slate-200/80 dark:border-white/5 mb-4">
                  {study.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-xs sm:text-sm font-bold font-mono text-slate-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400 truncate">{metric.label}</div>
                      <div className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenStrategyCall(study.title);
                  }}
                  className="w-full flex items-center justify-between text-xs font-semibold py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-ember-500 hover:text-white text-slate-800 dark:text-zinc-200 transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Build a System Like This</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
