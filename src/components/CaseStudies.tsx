import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  ShoppingBag,
  Smartphone,
  Bot,
  Layers,
} from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { LuxurySectionHeading } from './ui/LuxurySectionHeading';
import { useRouter } from '../context/RouterContext';
import { soundFX } from './ui/sound-effects';

export type CaseStudyCategory = 'all' | 'erp' | 'pos' | 'mobile' | 'ai';

export interface CaseStudy {
  id: string;
  category: CaseStudyCategory;
  client: string;
  industry: string;
  title: string;
  shortSummary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; change: string }[];
  tags: string[];
}

export const CaseStudies: React.FC<{
  onOpenStrategyCall: (title?: string) => void;
  initialCategory?: CaseStudyCategory;
}> = ({ onOpenStrategyCall, initialCategory = 'all' }) => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<CaseStudyCategory>(initialCategory);

  const categories: { id: CaseStudyCategory; label: string; count: number; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Deliverables', count: 6, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'erp', label: 'Cloud ERP & SaaS', count: 2, icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'pos', label: 'Retail & POS', count: 2, icon: <ShoppingBag className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: 'Mobile Apps', count: 1, icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'ai', label: 'AI & Automation', count: 1, icon: <Bot className="w-3.5 h-3.5" /> },
  ];

  const studies: CaseStudy[] = [
    {
      id: 'velox-logistics',
      category: 'erp',
      client: 'Velox Logistics Inc.',
      industry: 'Global Freight & ERP',
      title: 'End-to-end cloud dispatch, fleet telematics, and cross-border billing platform.',
      shortSummary: 'High-concurrency ERP coordinating 450+ cross-border freight vehicles with automated driver dispatch and multi-currency billing.',
      challenge: 'Manual dispatch on spreadsheets caused 3-hour route planning delays, frequent missed deadheads, and 12-day billing cycles.',
      solution: 'Engineered an event-driven Go and Next.js dispatch platform with automated GPS telematics and sub-second invoicing.',
      impactMetrics: [
        { label: 'Dispatch Speed', value: '0.4s', change: 'Real-Time' },
        { label: 'Active Fleet', value: '450+', change: '100% Tracked' },
        { label: 'Manual Effort', value: '-94%', change: 'Automated' },
      ],
      tags: ['Next.js 15', 'Go Microservices', 'PostgreSQL 17', 'AWS Fargate'],
    },
    {
      id: 'prism-retail-pos',
      category: 'pos',
      client: 'Prism Lifestyle Chain',
      industry: 'Fashion & Retail Superstores',
      title: 'Offline-capable point of sale syncing 24 store locations with central warehouse.',
      shortSummary: 'Sub-second POS operating 100% offline with SQLite and auto-syncing across 24 high-footfall retail stores with zero frozen queues.',
      challenge: 'Frequent mall internet cuts caused checkout queues to freeze, leading to 28% walkout rates during peak Saturday rush hours.',
      solution: 'Architected local-first SQLite checkout engines that print thermal bills at 0.8s speed and sync to cloud PostgreSQL upon reconnect.',
      impactMetrics: [
        { label: 'Scan-to-Bill', value: '0.8s', change: 'Sub-Second' },
        { label: 'Store Outlets', value: '24', change: 'Live Sync' },
        { label: 'Offline Uptime', value: '100%', change: 'Zero Drop' },
      ],
      tags: ['Electron', 'React 19', 'SQLite Local', 'Node.js', 'WebSockets'],
    },
    {
      id: 'nexus-health',
      category: 'erp',
      client: 'Apex Regional Health Network',
      industry: 'Healthcare & Clinical ERP',
      title: 'Unified clinical hospital management system with electronic health records & pharmacy billing.',
      shortSummary: 'Comprehensive inpatient/outpatient management platform migrating 100k+ patient records with sub-second lab report dispatch and HIPAA-compliant privacy.',
      challenge: 'Fragmented legacy records resulted in 45-minute patient admission queues and frequent prescription billing discrepancies across 4 hospital wings.',
      solution: 'Built high-throughput clinical ERP in FastAPI and PostgreSQL with isolated multi-tenant schemas and automated prescription verification.',
      impactMetrics: [
        { label: 'Digital Records', value: '100k+', change: 'Migrated' },
        { label: 'Wait Times', value: '-62%', change: 'Optimized' },
        { label: 'Compliance', value: 'HIPAA', change: 'Bank-Grade' },
      ],
      tags: ['TypeScript', 'FastAPI', 'PostgreSQL 17', 'Docker', 'GCP'],
    },
    {
      id: 'gourmet-qr-kiosk',
      category: 'pos',
      client: 'DineFlow Food Group (40+ Locations)',
      industry: 'QSR & Restaurant Chains',
      title: 'Contactless QR table ordering, self-checkout kiosks, and synchronized Kitchen Display Systems.',
      shortSummary: 'Ultra-low latency POS and Kitchen Display System coordinating 40+ high-traffic locations with automated ingredient inventory deductions.',
      challenge: 'Waitstaff bottlenecks during lunch rush led to 18-minute order lag, kitchen confusion, and unrecorded ingredient spoilage.',
      solution: 'Engineered sub-400ms WebSocket kitchen transmission engines with touch self-checkout kiosks and thermal ticket printing.',
      impactMetrics: [
        { label: 'Ticket Velocity', value: '< 400ms', change: 'Real-Time' },
        { label: 'Order Value', value: '+240%', change: 'Kiosk Upsell' },
        { label: 'Active Outlets', value: '40+', change: 'Synced' },
      ],
      tags: ['React Native', 'Node.js', 'Socket.io', 'Thermal Printer SDK', 'Tailwind'],
    },
    {
      id: 'aurora-fintech',
      category: 'mobile',
      client: 'Aurora Capital Partners',
      industry: 'FinTech & Mobile Wealth',
      title: 'Native mobile companion with biometric auth, portfolio analytics, and automated SIPs.',
      shortSummary: 'Bank-grade encrypted wealth management app tracking over $40M in active client assets with real-time portfolio performance charts.',
      challenge: 'Legacy web portal had no mobile presence, resulting in low daily active engagement and high customer drop-off on trade allocations.',
      solution: 'Developed 60-120fps native Flutter app with iOS Secure Enclave biometrics, GraphQL telemetry, and automated recurring investment flows.',
      impactMetrics: [
        { label: 'App Store Rating', value: '4.9★', change: 'iOS & Android' },
        { label: 'Assets Tracked', value: '$40M+', change: '6 Months' },
        { label: 'Encryption', value: 'AES-256', change: 'Bank-Grade' },
      ],
      tags: ['Flutter', 'Rust Core', 'GraphQL', 'AWS KMS'],
    },
    {
      id: 'synth-agent-engine',
      category: 'ai',
      client: 'OmniBrand D2C Retail',
      industry: 'AI & WhatsApp Automation',
      title: 'Autonomous Meta WhatsApp AI resolving 71% of customer inquiries in under 1.2 seconds.',
      shortSummary: 'Direct Meta WhatsApp Cloud API integration with multilingual natural NLP routing orders, returns, and sales inquiries 24/7.',
      challenge: 'Support team was overwhelmed with 1,800+ daily WhatsApp queries, resulting in 4-hour response delays and lost sales opportunities.',
      solution: 'Deployed custom Pyrow AutoPilot AI assistant with vector retrieval for catalog search, automated return approvals, and CRM sync.',
      impactMetrics: [
        { label: 'AI Resolution', value: '71%', change: 'No Human' },
        { label: 'Response Time', value: '1.2s', change: 'Instant' },
        { label: 'Support Savings', value: '$12k/mo', change: 'Reclaimed' },
      ],
      tags: ['WhatsApp Cloud API', 'Python NLP', 'Vector DB', 'OpenAI'],
    },
  ];

  const filteredStudies = selectedCategory === 'all'
    ? studies
    : studies.filter((s) => s.category === selectedCategory);

  return (
    <section id="track-record" className="relative py-20 sm:py-28 bg-transparent transition-colors duration-300 border-t border-slate-200/80 dark:border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <LuxurySectionHeading
          badge="Proven Deliverables"
          title={
            <span>
              Production Track Record.{' '}
              <span className="font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
                Tested In Real Operations.
              </span>
            </span>
          }
          subtitle="Real systems, verified uptime SLAs, and balance-sheet growth engineered for high-velocity brands and enterprise operators. Filter by system domain below."
          align="center"
          className="mb-10"
        />

        {/* Dynamic Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'text-white font-bold'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-track-category"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-600/30 border border-violet-400/30 -z-0"
                  />
                )}
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-white/10 text-slate-500 dark:text-zinc-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border min-h-[400px] bg-white/95 dark:bg-[#070512]/90 border-slate-200/90 dark:border-white/[0.08] hover:border-violet-500/50 shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:shadow-xl dark:hover:shadow-[0_20px_45px_-10px_rgba(124,58,237,0.3)] backdrop-blur-xl"
              >
                <div>
                  {/* Header Tag & Client */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-zinc-400 truncate max-w-[150px]">
                      {study.client}
                    </span>
                  </div>

                  {/* Title / Headline */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors leading-snug mb-3">
                    {study.title}
                  </h3>

                  {/* Middle Cross-Fade Container */}
                  <div className="relative h-[130px] my-3 overflow-hidden">
                    {/* Default State: Short Summary + Tech Chips */}
                    <div className="absolute inset-0 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                        {study.shortSummary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-white/[0.06]"
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
                            Pyrow Engineering Solution:
                          </span>
                          <span className="line-clamp-2">{study.solution}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] text-center">
                    {study.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="truncate">
                        <div className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-[9px] text-slate-500 dark:text-zinc-400 truncate font-sans">
                          {metric.label}
                        </div>
                        <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {metric.change}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                  <button
                    onClick={() => onOpenStrategyCall(study.title)}
                    className="w-full flex items-center justify-between text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-zinc-300 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <span>Build a Similar System</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Gateway to Full Client Portfolio */}
        <div className="mt-14 text-center">
          <MagneticButton
            variant="secondary"
            size="lg"
            onClick={() => {
              soundFX.playClick();
              navigate('/portfolio');
            }}
            icon={<ArrowRight className="w-4 h-4 text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform" />}
            className="shadow-md hover:shadow-xl border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-xl"
          >
            Explore Complete Portfolio & Client Deliverables (12+ Case Studies)
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
