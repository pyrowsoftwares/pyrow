import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { soundFX } from './ui/sound-effects';
import { LuxurySectionHeading } from './ui/LuxurySectionHeading';
import { LuxuryScrollCard } from './ui/LuxuryScrollCard';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'cloud' | 'data' | 'growth';
  tier: 'Production Core' | 'High-Throughput' | 'Enterprise Scale';
  metric: string;
  summary: string;
}

export const TechRadar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const technologies: TechItem[] = [
    {
      name: 'Next.js 15 (React 19)',
      category: 'frontend',
      tier: 'Production Core',
      metric: '< 500ms TTFB',
      summary: 'Edge SSR, Turbopack bundling, server actions, and fluid streaming hydration.',
    },
    {
      name: 'TypeScript Strict',
      category: 'frontend',
      tier: 'Production Core',
      metric: '100% Typed',
      summary: 'Zero runtime type errors, strict null checks, and automated OpenAPI contract sync.',
    },
    {
      name: 'Tailwind & Framer Motion',
      category: 'frontend',
      tier: 'Production Core',
      metric: '60fps UI',
      summary: 'Fluid typography, physics-based springs, and glassmorphic micro-borders.',
    },
    {
      name: 'Go (Golang)',
      category: 'backend',
      tier: 'High-Throughput',
      metric: '50,000+ Users',
      summary: 'High-speed business backends, fast data processing, and lightweight memory footprint.',
    },
    {
      name: 'Node.js & Python',
      category: 'backend',
      tier: 'Production Core',
      metric: '< 25ms Speed',
      summary: 'Fast server APIs, webhooks, WhatsApp integrations, and automated business workflows.',
    },
    {
      name: 'PostgreSQL Database',
      category: 'data',
      tier: 'Enterprise Scale',
      metric: 'Zero Data Loss',
      summary: 'Rock-solid data storage, automated daily backups, and encrypted customer records.',
    },
    {
      name: 'Redis In-Memory Cache',
      category: 'data',
      tier: 'High-Throughput',
      metric: 'Instant Load',
      summary: 'Instant page loading, session management, and real-time live stock synchronization.',
    },
    {
      name: 'Flutter & Dart',
      category: 'mobile',
      tier: 'Production Core',
      metric: '60-120fps',
      summary: 'Unified codebase across iOS and Android with pixel-identical native rendering.',
    },
    {
      name: 'SwiftUI & Kotlin Compose',
      category: 'mobile',
      tier: 'Enterprise Scale',
      metric: '100% Native',
      summary: 'Deep iOS Dynamic Island integration, Android Material 3, and Secure Enclave biometrics.',
    },
    {
      name: 'AWS Cloud Architecture',
      category: 'cloud',
      tier: 'Enterprise Scale',
      metric: '99.99% SLA',
      summary: 'Multi-AZ auto-scaling, ECS/Fargate containerization, and CloudFront edge CDN.',
    },
    {
      name: 'Docker & Kubernetes',
      category: 'cloud',
      tier: 'Production Core',
      metric: 'Zero-Downtime',
      summary: 'Automated rolling deployments, self-healing node clusters, and Helm charts.',
    },
    {
      name: 'Meta Ads & Google Ads API',
      category: 'growth',
      tier: 'High-Throughput',
      metric: 'Server CAPI',
      summary: 'Server-side GTM, Conversions API, and algorithmic bidding automation.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'mobile', label: 'Mobile Engineering' },
    { id: 'data', label: 'Databases & Cache' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'growth', label: 'Growth & Ads API' },
  ];

  const filtered =
    activeCategory === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="tech-radar" className="relative py-16 sm:py-20 lg:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxurySectionHeading
          align="left"
          badge={
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-mono text-violet-600 dark:text-purple-400 font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>Modern Technology Stack</span>
            </div>
          }
          title={
            <>
              Production Engineering.{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Built to Scale.
              </span>
            </>
          }
          subtitle="We build with the same high-performance tools used by leading global technology companies — ensuring your software runs fast, stays secure, and never crashes."
          className="mb-10 sm:mb-12"
        />

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(c.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${activeCategory === c.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25 border border-violet-400/30'
                  : 'bg-white/95 dark:bg-[#070512]/90 text-slate-700 dark:text-zinc-400 border border-slate-200/90 dark:border-white/[0.08] hover:border-violet-500/40 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]'
                }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((tech, idx) => (
            <LuxuryScrollCard
              key={tech.name}
              index={idx}
              columns={4}
              className="p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#070512]/90 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] hover:border-violet-500/50 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-all"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-[10px] font-mono px-2 py-0.5 rounded-md text-slate-600 dark:text-zinc-400 font-semibold border border-slate-200/80 dark:border-white/[0.08]">
                      {tech.tier}
                    </Badge>
                    <span className="text-xs font-mono font-bold text-violet-600 dark:text-purple-400">
                      {tech.metric}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-purple-400 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {tech.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-zinc-500 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Production Hardened Standard</span>
                </div>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </div>
    </section>
  );
};
