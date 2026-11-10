import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Zap, Globe, Layers, CheckCircle2 } from 'lucide-react';
import { soundFX } from './ui/sound-effects';

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
      metric: '50,000+ RPS',
      summary: 'High-concurrency microservices, lightweight goroutines, and sub-millisecond memory footprint.',
    },
    {
      name: 'Node.js & FastAPI',
      category: 'backend',
      tier: 'Production Core',
      metric: '< 25ms P99',
      summary: 'Asynchronous event loops, REST/GraphQL gateways, and AI agent LLM orchestration.',
    },
    {
      name: 'PostgreSQL 16 & Citus',
      category: 'data',
      tier: 'Enterprise Scale',
      metric: 'Billion Rows',
      summary: 'ACID transactional integrity, declarative partitioning, and horizontal sharding.',
    },
    {
      name: 'Redis Enterprise',
      category: 'data',
      tier: 'High-Throughput',
      metric: '< 2ms Cache',
      summary: 'Sub-millisecond token rate limiting, distributed session cache, and pub/sub queues.',
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

  return (
    <section id="tech-radar" className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-obsidian-900/60 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs font-mono text-cyber-blue mb-3 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Reliable Modern Technologies.{' '}
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-flare-gold bg-clip-text text-transparent">
              Built to Scale.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            We build with the same high-performance tools used by leading global technology companies — ensuring your software runs fast, stays secure, and never crashes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(c.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-cyber-blue text-white shadow-md'
                  : 'bg-white dark:bg-obsidian-800 text-slate-700 dark:text-zinc-400 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={() => soundFX.playHover()}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 hover:border-cyber-blue/50 transition-all duration-300 hover:scale-[1.015] shadow-light-card hover:shadow-light-card-hover dark:shadow-glass-edge flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 font-bold border border-slate-200/80 dark:border-white/5">
                    {tech.tier}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyber-blue">
                    {tech.metric}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyber-blue transition-colors">
                  {tech.name}
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {tech.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-zinc-500 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Production Hardened Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
