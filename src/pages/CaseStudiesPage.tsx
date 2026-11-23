import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { TrendingUp, Clock, CheckCircle2, Shield, Users, ArrowRight } from 'lucide-react';
import { LuxuryScrollCard } from '../components/ui/LuxuryScrollCard';
import { LuxurySectionHeading } from '../components/ui/LuxurySectionHeading';
import { QuantumSnapSection } from '../components/ui/QuantumSnapSection';

interface CaseStudiesPageProps {
  onOpenStrategyCall: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenStrategyCall }) => {
  const metrics = [
    { value: '92%', label: 'Reduction in Admin Time', sub: 'For multi-store inventory audits' },
    { value: '2.4x', label: 'Booking Volume Surge', sub: 'Via automated appointment scheduling' },
    { value: 'Zero', label: 'Invoicing & Stock Errors', sub: 'Using real-time barcode sync' },
    { value: '120k+', label: 'Active Concurrent Users', sub: 'On high-traffic cloud dashboards' },
  ];

  const caseStudies = [
    {
      title: 'Scalable Cloud Dashboard for High-Traffic SaaS',
      industry: 'FinTech / SaaS Platform',
      metric: '120,000+ Concurrent Users',
      desc: 'Architected and deployed a microservice dashboard handling sudden 3x traffic spikes during market openings with 99.99% uptime and 40% reduced infrastructure costs.',
      tags: ['Auto-Scaling K8s', 'Redis Cache', 'PostgreSQL', 'Cloudflare CDN'],
    },
    {
      title: 'Multi-Store Supermarket POS & Inventory Hub',
      industry: 'Retail & Supermarkets',
      metric: '80% Faster Checkouts',
      desc: 'Replaced a slow legacy offline system with an offline-first hybrid cloud POS across 12 store locations. Cashiers process billing in sub-second time even during internet outages.',
      tags: ['Offline-First', 'Weighing Scale Integration', 'Thermal Sync', 'Multi-Store'],
    },
    {
      title: 'Automated Logistics & Real-Time Fleet Tracking',
      industry: 'Logistics & Quick Commerce',
      metric: '150+ Live Delivery Riders',
      desc: 'Engineered a real-time dispatch dashboard with GPS tracking, automated driver allocation, and instant customer SMS delivery notifications.',
      tags: ['Live WebSockets', 'Google Maps API', 'Driver Mobile App', 'Automated Dispatch'],
    },
    {
      title: 'Enterprise Payroll & Attendance ERP',
      industry: 'Manufacturing & Enterprise',
      metric: '500+ Staff Payroll in 10 Mins',
      desc: 'Automated biometric attendance reconciliation, overtime calculations, statutory compliance, and direct bank batch payouts, cutting HR payroll prep from 4 days to 10 minutes.',
      tags: ['Biometric Sync', 'Automated Compliance', 'Batch Payouts', 'Role Permissions'],
    },
  ];

  const testimonials = [
    {
      quote: "Pyrow built our complete operations dashboard. Over 100k active users and not a single crash or lag during peak traffic.",
      author: "Chief Technology Officer",
      company: "Scalable Web Platform",
    },
    {
      quote: "Our billing used to take hours of manual paper checking. The system Pyrow engineered cut invoicing time by 80% and eliminated stock errors.",
      author: "Managing Director",
      company: "Regional Retail Chain",
    },
    {
      quote: "Our customer bookings doubled within 60 days of launching the automated appointment system. The zero no-show rate is unbelievable.",
      author: "Operations Head",
      company: "Healthcare & Studio Group",
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Proven In Production"
        title="Real Impact."
        highlightText="Verified Results."
        description="See how Pyrow engineers scalable software products and high-converting funnels that deliver measurable commercial revenue for growing companies."
        breadcrumbs={[{ label: 'Case Studies' }]}
        primaryCtaText="Get Enterprise Results"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Impact Metric Bar */}
      <QuantumSnapSection id="case-studies-metrics-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={4}
              className="p-6 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black font-display bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-200">
                {m.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-500 dark:text-zinc-400">
                {m.sub}
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </QuantumSnapSection>

      {/* Deep Case Studies Grid */}
      <QuantumSnapSection id="case-studies-grid-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <LuxurySectionHeading
          badge="Featured Deployments"
          title="Engineering Case Studies"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={2}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900/70 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between group hover:border-violet-500/50 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/20">
                    {cs.metric}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {cs.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {cs.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                {cs.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </QuantumSnapSection>

      {/* Client Testimonials Wall */}
      <QuantumSnapSection id="case-studies-testimonials-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <LuxurySectionHeading
          badge="Client Voices"
          title="The Business Impact in Their Words"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={3}
              className="p-7 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.author}
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400">
                  {t.company}
                </div>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </QuantumSnapSection>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Ready to achieve proven results?"
        subtitle="Let's engineer your next digital success story with production-proven architecture."
        buttonText="Discuss Your Project"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
