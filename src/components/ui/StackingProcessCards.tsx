import React from 'react';
import {
  Compass,
  Palette,
  Terminal,
  Rocket,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface StackingCardProps {
  step: string;
  phase: string;
  title: string;
  tagline: string;
  duration: string;
  accent: string;
  icon: React.ReactNode;
  deliverables: string[];
  metrics: { label: string; value: string };
  stickyTop: string;
}

export const StackingProcessCards: React.FC = () => {
  const steps: StackingCardProps[] = [
    {
      step: '01',
      phase: 'Discovery & Systems Architecture',
      title: 'Technical Scope & Infrastructure Blueprint',
      tagline:
        'We deconstruct your business workflows, database schemas, and compliance requirements to build a zero-assumption architecture roadmap.',
      duration: 'Week 1',
      accent: 'border-violet-500/30 dark:border-violet-500/60 shadow-violet-500/10 dark:shadow-violet-500/20',
      icon: <Compass className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      deliverables: [
        'Detailed Technical Specification Document (TSD)',
        'Database Entity-Relationship (ER) Architecture',
        'API Contract & Third-Party Integration Map',
        'Cloud Hosting & Infrastructure Cost Projection',
      ],
      metrics: { label: 'Scope Clarity', value: '100% Bound' },
      stickyTop: 'top-24 sm:top-28',
    },
    {
      step: '02',
      phase: 'Interactive UI/UX Prototyping',
      title: 'High-Fidelity Clickable Design in Figma',
      tagline:
        'Before writing a single line of production code, we design every screen, responsive breakpoint, and micro-interaction for user validation.',
      duration: 'Week 2',
      accent: 'border-cyan-500/30 dark:border-cyan-500/60 shadow-cyan-500/10 dark:shadow-cyan-500/20',
      icon: <Palette className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      deliverables: [
        'Complete Design System & Component Library',
        'Mobile & Desktop Interactive Prototypes',
        'User Journey Mapping & Friction Elimination',
        'Client Click-Through Review & Sign-Off',
      ],
      metrics: { label: 'UX Validation', value: '48h Revisions' },
      stickyTop: 'top-28 sm:top-36',
    },
    {
      step: '03',
      phase: 'Sprint Engineering & Optimization',
      title: 'Full-Stack Development & Performance Tuning',
      tagline:
        'Bi-weekly production sprint cycles with live staging access. Clean TypeScript, modular microservices, and sub-500ms server response times.',
      duration: 'Weeks 3 – 5',
      accent: 'border-fuchsia-500/30 dark:border-fuchsia-500/60 shadow-fuchsia-500/10 dark:shadow-fuchsia-500/20',
      icon: <Terminal className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
      deliverables: [
        'Bi-Weekly Interactive Staging Builds',
        'Sub-0.6s TTFB Performance Guarantee',
        'Automated CI/CD Testing & Static Analysis',
        'Direct WhatsApp & Slack Developer Access',
      ],
      metrics: { label: 'Core Web Vitals', value: '99+ PageSpeed' },
      stickyTop: 'top-32 sm:top-44',
    },
    {
      step: '04',
      phase: 'Security Hardening & Global Launch',
      title: 'Production Deployment & Day-1 IP Handover',
      tagline:
        'Zero-downtime deployment to AWS/Cloud infrastructure, penetration testing, automated backups, and 100% code ownership handover.',
      duration: 'Week 6 & Ongoing',
      accent: 'border-emerald-500/30 dark:border-emerald-500/60 shadow-emerald-500/10 dark:shadow-emerald-500/20',
      icon: <Rocket className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      deliverables: [
        'Zero-Downtime Global Production Go-Live',
        '100% IP & Git Repository Rights Handover',
        'Automated Cloud Backups & SSL Provisioning',
        '30-Day Post-Launch Hypercare & 24/7 SLA',
      ],
      metrics: { label: 'Code Ownership', value: '100% Client IP' },
      stickyTop: 'top-36 sm:top-52',
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(75%_50%_at_50%_30%,rgba(124,58,237,0.06),transparent_70%)] dark:bg-[radial-gradient(75%_50%_at_50%_30%,rgba(124,58,237,0.15),transparent_70%)] transition-opacity duration-300" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 dark:border-violet-500/30 text-xs font-mono text-violet-700 dark:text-violet-300 mb-3 font-semibold shadow-sm backdrop-blur-sm transition-colors">
            <Zap className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Structured Delivery Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight transition-colors">
            How We Build & Scale Your Software
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 transition-colors">
            A battle-tested 4-phase agile engineering pipeline that eliminates guesswork and delivers production-grade software on time.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-8 sm:space-y-12 pb-20">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`sticky ${item.stickyTop} rounded-3xl p-6 sm:p-10 bg-white/95 dark:bg-[#160B2A]/95 backdrop-blur-xl border ${item.accent} shadow-xl dark:shadow-2xl transition-all duration-300`}
              style={{
                zIndex: idx + 10,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left Column: Phase Info */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-violet-50 dark:bg-white/5 border border-violet-200 dark:border-white/10 flex items-center justify-center font-mono font-bold text-violet-700 dark:text-violet-400 text-sm shadow-inner transition-colors">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-violet-700 dark:text-violet-300 font-semibold transition-colors">
                      {item.phase}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-zinc-300 transition-colors">
                      <Clock className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mb-3 tracking-tight transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 transition-colors">
                    {item.tagline}
                  </p>

                  {/* Deliverables List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300 font-medium transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Milestone Feature Frame */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="p-6 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 space-y-4 shadow-sm transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-violet-500/10 dark:bg-violet-600/20 border border-violet-500/25 dark:border-violet-500/30 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 transition-colors">Milestone SLA</div>
                          <div className="text-base font-bold text-slate-900 dark:text-white transition-colors">{item.metrics.value}</div>
                        </div>
                      </div>
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <div className="space-y-2 text-xs font-mono text-slate-500 dark:text-zinc-400 transition-colors">
                      <div className="flex justify-between">
                        <span>Code Review:</span>
                        <span className="text-slate-900 dark:text-white font-semibold transition-colors">Senior Architect</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sprint Demo:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live URL Deployed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IP Ownership:</span>
                        <span className="text-violet-600 dark:text-violet-400 font-semibold transition-colors">100% Client Signed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};