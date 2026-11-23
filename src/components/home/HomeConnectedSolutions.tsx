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
      actionUrl: '/portfolio',
      actionLabel: 'View Web & Mobile Work',
    },
    {
      num: '02',
      title: 'Offline-First POS & Custom ERP',
      category: 'Operations & Billing',
      speed: '0.8s Scan-to-Bill',
      headline: 'Zero stalled queues during internet blackouts.',
      desc: 'High-velocity retail POS systems and multi-branch cloud ERPs. Transactions execute locally in SQLite and sync transparently to central PostgreSQL databases once reconnected.',
      points: ['Sub-second thermal receipt generation', 'Biometric employee payroll sync', 'Multi-warehouse automated stock reorders'],
      actionUrl: '/products',
      actionLabel: 'Explore POS & ERP Suites',
    },
    {
      num: '03',
      title: 'Autonomous AI & WhatsApp Funnels',
      category: 'AI Automation',
      speed: '< 1.2s NLP Latency',
      headline: 'Turn cold inquiries into booked clients 24/7.',
      desc: 'Direct integration with the official Meta WhatsApp Cloud API. Multilingual AI assistants that handle booking requests, answer pricing FAQs, and update your CRM without human delay.',
      points: ['Official WhatsApp Green Tick support', 'Google Calendar booking synchronization', 'Natural NLP language understanding'],
      actionUrl: '/solutions',
      actionLabel: 'Explore AI Automations',
    },
    {
      num: '04',
      title: 'Performance Marketing & SEO Growth',
      category: 'Revenue Acceleration',
      speed: 'High-ROAS Funnels',
      headline: 'We build the product, then flood it with paying customers.',
      desc: 'We do not build in isolation. Our digital marketing team runs profitable Google Search, Meta (Instagram/Facebook) ads, and high-ranking local/national SEO funnels.',
      points: ['Full-funnel attribution tracking', 'High-converting landing page copywriting', 'Automated WhatsApp lead nurturing'],
      actionUrl: '/contact',
      actionLabel: 'Consult with Growth Team',
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
            <span className="font-serif italic font-normal tracking-wide underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              To Measurable Revenue.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-8">
            Most digital agencies only write code or only run ads. We bridge the gap: custom high-performance software engineered from scratch, paired with autonomous WhatsApp workflows and performance marketing that drive real balance-sheet growth.
          </p>

          <div className="p-5 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200/80 dark:border-white/10 shadow-sm space-y-3 mb-8">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Client IP Ownership transferred on Day 1</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              <Lock className="w-4 h-4 text-violet-500 shrink-0" />
              <span>Zero vendor lock-in, zero hidden per-seat licensing fees</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
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
                navigate('/portfolio');
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
                className={`p-7 sm:p-9 rounded-3xl bg-white dark:bg-obsidian-900 border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isHovered
                    ? 'border-violet-500/60 shadow-xl shadow-violet-500/10 -translate-y-1'
                    : 'border-slate-200/90 dark:border-white/10 shadow-sm'
                }`}
                onClick={() => {
                  soundFX.playClick();
                  navigate(item.actionUrl);
                }}
              >
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

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

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
