import React, { useState } from 'react';
import {
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Zap,
  CheckCircle2,
  Briefcase,
  Users,
  Award,
} from 'lucide-react';
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
  accentColor: string;
}

export const CaseStudies: React.FC<{ onOpenScopeCalculator: () => void }> = ({ onOpenScopeCalculator }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const studies: CaseStudy[] = [
    {
      id: 'fintech-gateway',
      client: 'Vanguard Capital',
      industry: 'FinTech & Online Payments',
      title: 'Building a High-Speed Payment Engine Handling ₹1,200 Cr+ in Transactions',
      challenge:
        'The client’s old banking software was slow (4.2 seconds per payment), failed during peak traffic, and took their accounting team 5 full business days to balance branch accounts manually.',
      solution:
        'Pyrow engineered a modern, ultra-reliable payment processing platform with automated multi-bank routing and instant database reconciliation.',
      impactMetrics: [
        { label: 'Payment Speed', value: '28ms', change: '-94% Wait' },
        { label: 'Quarterly Volume', value: '₹1,200 Cr+', change: '+280%' },
        { label: 'Account Balancing', value: '3 Mins', change: 'Instant' },
      ],
      tags: ['Fast Payments', 'Go & Node.js', 'PostgreSQL', 'Bank-Grade Security'],
      accentColor: 'text-ember-600 dark:text-ember-400 border-ember-500/40 bg-ember-500/10',
    },
    {
      id: 'health-network',
      client: 'Apex Healthcare Network',
      industry: 'Hospital & Clinic Management',
      title: 'Connecting 48 Multi-Specialty Clinics into One Seamless Cloud System',
      challenge:
        'Each clinic had separate desktop computers, causing duplicate patient registrations, 36-hour delays in delivering lab reports, and constant scheduling mix-ups.',
      solution:
        'Pyrow developed a unified, secure healthcare web platform connecting all 48 clinics with instant patient digital records, live lab report delivery, and an easy online doctor appointment portal.',
      impactMetrics: [
        { label: 'Patient Wait Time', value: '14 Mins', change: '-58%' },
        { label: 'Lab Report Delivery', value: 'Instant', change: 'Real-Time' },
        { label: 'Prescription Accuracy', value: '100%', change: 'Zero Errors' },
      ],
      tags: ['Hospital Software', 'Patient Portal', 'Instant Lab Sync', 'Doctor App'],
      accentColor: 'text-cyber-blue border-cyber-blue/40 bg-cyber-blue/10',
    },
    {
      id: 'd2c-hypergrowth',
      client: 'Aether Retail & Apparel',
      industry: 'D2C E-Commerce & Growth Marketing',
      title: 'Scaling an Online Store from ₹10 Cr to ₹150 Cr with a Fast Website & High-ROAS Ads',
      challenge:
        'A slow online store (taking 5 seconds to load on mobile) caused 72% of shoppers to leave before buying. Generic social media ads were wasting budget with high customer acquisition costs.',
      solution:
        'Pyrow rebuilt the online store to load in under 1 second, launched hyper-targeted Google and Meta ad campaigns, and set up automated WhatsApp messages for order tracking and repeat purchases.',
      impactMetrics: [
        { label: 'Annual Revenue', value: '₹150 Cr', change: '15x Growth' },
        { label: 'Return on Ad Spend', value: '5.4x', change: '+142%' },
        { label: 'Mobile Checkout Rate', value: '4.6%', change: '+180%' },
      ],
      tags: ['Next.js E-Com', 'High-Converting Ads', 'WhatsApp Automation', 'SEO'],
      accentColor: 'text-flare-amber border-flare-amber/40 bg-flare-amber/10',
    },
  ];

  return (
    <section id="case-studies" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-ember-500/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Real Client Stories.{' '}
              <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-cyber-blue bg-clip-text text-transparent">
                Measurable Business Growth.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              Read how Pyrow helped ambitious Indian companies eliminate technical bottlenecks and achieve record-breaking revenue.
            </p>
          </div>

          <MagneticButton
            variant="outline"
            size="md"
            onClick={onOpenScopeCalculator}
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Calculate Your Project Cost
          </MagneticButton>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              onMouseEnter={() => soundFX.playHover()}
              className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 hover:border-ember-500/50 transition-all duration-300 hover:scale-[1.015] shadow-light-card hover:shadow-light-card-hover dark:shadow-glass-edge relative group"
            >
              <div>
                {/* Header Tag & Industry */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${study.accentColor}`}>
                    {study.industry}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 font-semibold">{study.client}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-ember-600 dark:group-hover:text-ember-400 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* The Challenge */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-wider font-bold mb-1">
                    The Challenge:
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mt-3 p-4 rounded-2xl bg-ember-50/40 dark:bg-obsidian-950 border border-ember-500/20 dark:border-white/5">
                  <div className="text-[10px] font-mono text-ember-600 dark:text-ember-400 uppercase tracking-wider font-bold mb-1">
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
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenScopeCalculator();
                  }}
                  className="w-full flex items-center justify-between text-xs font-bold py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-gradient-to-r hover:from-ember-500 hover:to-flare-amber hover:text-white text-slate-800 dark:text-zinc-200 transition-all duration-300 group/btn"
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
