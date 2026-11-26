import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  Smartphone,
  Cpu,
  Bot,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  Database,
  Lock,
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import { MagneticButton } from '../ui/MagneticButton';

export const HomeConnectedSolutions: React.FC<{ onOpenStrategyCall?: () => void }> = ({
  onOpenStrategyCall,
}) => {
  const { navigate } = useRouter();
  const [activeHoverIdx, setActiveHoverIdx] = useState<number | null>(null);

  const pillars = [
    {
      num: '01',
      title: 'High-Converting Web & Mobile Apps',
      category: 'Product Engineering',
      speed: '< 500ms TTFB',
      headline: 'Sub-second speed that directly increases conversion rates.',
      desc: 'Built with Next.js 15, React 19, and native Flutter. Code-split bundles, edge asset caching, and fluid 60fps micro-interactions that eliminate cognitive bounce.',
      points: ['99+ Mobile Google PageSpeed', '100% Custom Source Code Handover', 'WCAG 2.1 Accessible UX'],
      featuredRecord: {
        title: 'Aurora Wealth & Investment App',
        client: 'Aurora Capital Partners',
        metric: '4.9★ App Store • $40M+ Assets Tracked',
      },
      targetCategory: 'mobile',
      actionUrl: '#track-record',
      actionLabel: 'View Mobile Deliverable in Track Record',
    },
    {
      num: '02',
      title: 'Offline-First POS & Logistics ERP',
      category: 'Operations & Billing',
      speed: '0.8s Scan-to-Bill',
      headline: 'Zero stalled queues during internet blackouts.',
      desc: 'High-velocity retail POS systems and multi-branch cloud ERPs. Transactions execute locally in SQLite and sync transparently to central PostgreSQL databases once reconnected.',
      points: ['Sub-second thermal receipt generation', 'GPS dispatch telematics for 450+ fleet', 'Multi-warehouse automated stock reorders'],
      featuredRecord: {
        title: 'Prism Multi-Store POS & Velox Freight ERP',
        client: 'Prism Lifestyle & Velox Logistics',
        metric: '24 Retail Stores • 450+ Fleet Dispatches',
      },
      targetCategory: 'pos',
      actionUrl: '#track-record',
      actionLabel: 'View POS & ERP in Track Record',
    },
    {
      num: '03',
      title: 'Clinical Hospital Systems & QSR Kiosks',
      category: 'Healthcare & Hospitality',
      speed: '< 400ms KDS Latency',
      headline: 'Mission-critical systems where reliability is non-negotiable.',
      desc: 'High-throughput inpatient/outpatient hospital management migrating 100k+ records with HIPAA compliance, paired with contactless QR ordering and synchronized kitchen display kiosks.',
      points: ['HIPAA-compliant multi-tenant clinical records', 'Sub-400ms ticket transmission to kitchen', 'Multi-branch live ingredient deductions'],
      featuredRecord: {
        title: 'ApexCare Hospital ERP & DineFlow Kiosks',
        client: 'Apex Health & DineFlow Food Group',
        metric: '100k+ Patient Records • 40+ Food Outlets',
      },
      targetCategory: 'erp',
      actionUrl: '#track-record',
      actionLabel: 'View Healthcare & QSR in Track Record',
    },
    {
      num: '04',
      title: 'Autonomous AI & Growth Automation',
      category: 'AI & Revenue Funnels',
      speed: '< 1.2s NLP Latency',
      headline: 'Turn cold inquiries into paying customers 24/7.',
      desc: 'Direct integration with the official Meta WhatsApp Cloud API. Multilingual AI assistants that handle booking requests, answer pricing FAQs, and update your CRM without human delay.',
      points: ['Official WhatsApp Green Tick support', 'Trained on high-converting copywriting', 'Automated CRM lead nurturing & scheduling'],
      featuredRecord: {
        title: 'Pyrow AutoPilot AI & ContentFlow',
        client: 'OmniBrand D2C & Retail Outlets',
        metric: '71% Autonomous Resolution • < 1.2s Response',
      },
      targetCategory: 'ai',
      actionUrl: '#track-record',
      actionLabel: 'View AI Automation in Track Record',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sticky Editorial Left Column (lg:col-span-5) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Connected Systems Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
            Every Line of Code Connected{' '}
            <span className="font-black tracking-tight underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              To Measurable Revenue.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-8">
            Most digital agencies only write code or only run ads. We bridge the gap: custom high-performance software engineered from scratch, paired with autonomous WhatsApp workflows and performance marketing that drive real balance-sheet growth.
          </p>

          <div className="p-6 rounded-[28px] bg-white dark:bg-[#070512]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.2)] space-y-3.5 mb-8 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent pointer-events-none" />
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Client IP Ownership transferred on Day 1</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              <Lock className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Zero vendor lock-in, zero hidden per-seat licensing fees</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>99.98% Cloud Uptime SLA & continuous post-launch warranty</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              variant="primary"
              size="md"
              onClick={onOpenStrategyCall || (() => navigate('/contact'))}
            >
              Get a Proposal
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="md"
              onClick={() => {
                soundFX.playClick();
                const el = document.getElementById('track-record');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/portfolio');
                }
              }}
            >
              Our Track Record
            </MagneticButton>
          </div>
        </div>

        {/* Dynamic Interactive Flow Right Column (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          {pillars.map((item, idx) => {
            const isHovered = activeHoverIdx === idx;
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveHoverIdx(idx)}
                onMouseLeave={() => setActiveHoverIdx(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`p-7 sm:p-9 rounded-[32px] bg-white dark:bg-[#070512]/90 backdrop-blur-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.25)] ${isHovered
                    ? 'border-violet-500/60 shadow-[0_0_40px_rgba(124,58,237,0.2)] -translate-y-1'
                    : 'border-slate-200/90 dark:border-white/[0.08]'
                  }`}
                onClick={() => {
                  soundFX.playClick();
                  if (item.actionUrl.startsWith('#')) {
                    const targetId = item.actionUrl.slice(1);
                    const el = document.getElementById(targetId);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      return;
                    }
                    navigate('/portfolio');
                  } else {
                    navigate(item.actionUrl);
                  }
                }}
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-black font-mono text-violet-600 dark:text-violet-400">
                      {item.num}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-white/10">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {item.speed}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-3">
                  {item.headline}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Featured Client Track Record Deliverable */}
                <div className="mb-5 p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs transition-colors">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-500 block">Verified Production Deliverable</span>
                      <span className="font-bold text-slate-900 dark:text-white">{item.featuredRecord.title}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 self-start sm:self-auto">{item.featuredRecord.metric}</span>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-slate-100 dark:border-white/5 mb-6 text-xs text-slate-600 dark:text-zinc-400 font-mono">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform">
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
