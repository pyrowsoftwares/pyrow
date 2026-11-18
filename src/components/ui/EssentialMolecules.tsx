import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Server,
  Sparkles,
  Layers,
  Lock,
} from 'lucide-react';
import { soundFX } from './sound-effects';

interface MoleculeItem {
  id: string;
  number: string;
  title: string;
  accent: string;
  badge: string;
  desc: string;
  icon: React.ReactNode;
  specs: string[];
}

export const EssentialMolecules: React.FC = () => {
  const molecules: MoleculeItem[] = [
    {
      id: 'perf',
      number: 'MOL_01',
      title: 'Sub-Second Performance',
      accent: 'text-violet-600 dark:text-violet-400',
      badge: '< 500ms TTFB',
      desc: 'Optimized server-side rendering, code-split bundles, and global edge caching guarantee 99+ Core Web Vitals on mobile and desktop.',
      icon: <Zap className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      specs: ['99+ PageSpeed Mobile Score', 'Edge Asset Optimization', 'Sub-second Database Queries'],
    },
    {
      id: 'resilience',
      number: 'MOL_02',
      title: 'Cloud High-Availability',
      accent: 'text-cyan-600 dark:text-cyan-400',
      badge: '99.99% Uptime',
      desc: 'Self-healing Kubernetes clusters, multi-AZ database replication, and automated failover keep your operations running 24/7/365.',
      icon: <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      specs: ['Multi-AZ Auto-Healing', 'Automated Daily Backups', 'Zero-Downtime Blue/Green Deploys'],
    },
    {
      id: 'security',
      number: 'MOL_03',
      title: 'Enterprise Cyber Security',
      accent: 'text-emerald-600 dark:text-emerald-400',
      badge: 'Bank-Grade Safe',
      desc: 'End-to-end encryption at rest and in transit, strict RBAC permissions, tokenized auth, and proactive vulnerability scanning.',
      icon: <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      specs: ['SOC2 Type II Aligned', 'AES-256 Data Encryption', 'Penetration Tested Code'],
    },
    {
      id: 'ux',
      number: 'MOL_04',
      title: 'Intuitive Human UX',
      accent: 'text-purple-600 dark:text-purple-400',
      badge: '60fps Delight',
      desc: 'Designed around real user behaviors to eliminate cognitive friction. Smooth 60fps micro-interactions that dramatically increase conversion rates.',
      icon: <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      specs: ['WCAG 2.1 AA Compliant', 'Frictionless Checkout Flows', 'Fluid Spring Micro-Interactions'],
    },
    {
      id: 'scale',
      number: 'MOL_05',
      title: 'Autonomous Elastic Scale',
      accent: 'text-fuchsia-600 dark:text-fuchsia-400',
      badge: '100k+ Concurrency',
      desc: 'Horizontal auto-scaling pods that dynamically expand compute during flash sales and traffic spikes without manual intervention.',
      icon: <Layers className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />,
      specs: ['Dynamic Pod Auto-Scaling', 'Distributed Redis Queues', 'Load Balanced Ingress'],
    },
    {
      id: 'ip',
      number: 'MOL_06',
      title: '100% Client IP Ownership',
      accent: 'text-amber-600 dark:text-amber-400',
      badge: 'Zero Lock-in',
      desc: 'You own every line of code, design file, API credential, and cloud account from Day 1. Full contractual transfer with zero recurring licensing fees.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      specs: ['Direct Git Repo Handover', 'Complete Architectural Docs', 'Clean Transfer of All Rights'],
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-transparent text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 dark:border-violet-500/30 text-xs font-mono text-violet-700 dark:text-violet-300 mb-3 font-semibold shadow-sm backdrop-blur-sm transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Architecture Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
            A Great Digital Solution is Never a Coincidence.{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              It is Built When These Core Molecules Align.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 transition-colors">
            Every platform we build is engineered according to these 6 uncompromised technical principles.
          </p>
        </motion.div>

        {/* Molecules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {molecules.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              onMouseEnter={() => soundFX.playHover()}
              className="group p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#130723]/90 hover:bg-white dark:hover:bg-[#190B2E] border border-slate-200/90 dark:border-violet-500/20 hover:border-violet-500/60 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(124,58,237,0.2)] dark:hover:shadow-[0_15px_40px_-10px_rgba(124,58,237,0.35)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-violet-50 dark:group-hover:bg-violet-500/20 border border-slate-200 dark:border-white/10 group-hover:border-violet-300 dark:group-hover:border-violet-500/40 flex items-center justify-center transition-colors">
                      {m.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-500 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                      {m.number}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-700 dark:text-zinc-300 transition-colors">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2.5 group-hover:text-violet-700 dark:group-hover:text-violet-200 transition-colors">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 transition-colors">
                  {m.desc}
                </p>
              </div>

              {/* Specs */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5 transition-colors">
                {m.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};