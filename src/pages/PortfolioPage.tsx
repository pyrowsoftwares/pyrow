import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, Building2, ShoppingBag, Stethoscope, Smartphone, Zap } from 'lucide-react';
import { soundFX } from '../components/ui/sound-effects';

interface PortfolioPageProps {
  onOpenStrategyCall: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenStrategyCall }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'erp' | 'pos' | 'mobile' | 'ai'>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'erp', label: 'Cloud ERP & SaaS' },
    { id: 'pos', label: 'Retail & POS' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Automation' },
  ];

  const projects = [
    {
      id: 'velox-logistics',
      title: 'Velox Global Freight ERP',
      category: 'erp',
      client: 'Velox Logistics Inc.',
      industry: 'Global Freight & Supply Chain',
      headline: 'End-to-end cloud dispatch, fleet telematics, and cross-border billing platform.',
      results: [
        '94% reduction in manual dispatch scheduling',
        'Real-time GPS tracking across 450+ vehicles',
        'Zero downtime across 18 months of operation',
      ],
      tags: ['Next.js 14', 'Go Microservices', 'PostgreSQL', 'Redis', 'AWS Fargate'],
      gradient: 'from-violet-600 to-indigo-600',
    },
    {
      id: 'prism-retail-pos',
      title: 'Prism Multi-Store Retail POS',
      category: 'pos',
      client: 'Prism Lifestyle Retail Chain',
      industry: 'Fashion & Retail Superstores',
      headline: 'High-speed offline-capable point of sale syncing 24 store locations with central warehouse.',
      results: [
        '0.8 second barcode scan-to-receipt latency',
        'Offline resilience: 100% sales captured during network outages',
        'Automatic multi-branch inventory reconciliation',
      ],
      tags: ['Electron', 'React 18', 'SQLite (Local)', 'Node.js', 'WebSockets'],
      gradient: 'from-fuchsia-600 to-pink-600',
    },
    {
      id: 'nexus-health',
      title: 'ApexCare Hospital Management System',
      category: 'erp',
      client: 'Apex Regional Health Network',
      industry: 'Healthcare & Clinical Management',
      headline: 'Comprehensive inpatient/outpatient management with unified patient electronic records and pharmacy billing.',
      results: [
        '100k+ digital health records migrated seamlessly',
        'Reduced patient waiting times by 62%',
        'HIPAA & ISO-27001 compliant cloud infrastructure',
      ],
      tags: ['TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'GCP'],
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'gourmet-qr-kiosk',
      title: 'DineFlow Kitchen Display & Kiosk Suite',
      category: 'pos',
      client: 'DineFlow Food Group (40+ Locations)',
      industry: 'QSR & Restaurant Chains',
      headline: 'Contactless QR table ordering, self-checkout kiosks, and synchronized Kitchen Display Systems.',
      results: [
        '2.4x increase in average dessert & addon order value',
        'Order-to-kitchen transmission under 400ms',
        'Real-time recipe inventory deductions per order',
      ],
      tags: ['React Native', 'Node.js', 'TailwindCSS', 'Socket.io', 'Thermal Printer SDK'],
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'aurora-fintech',
      title: 'Aurora Wealth & Investment App',
      category: 'mobile',
      client: 'Aurora Capital Partners',
      industry: 'FinTech & Portfolio Management',
      headline: 'Native mobile companion with biometric auth, portfolio analytics, and automated SIP allocations.',
      results: [
        '4.9 Star rating on iOS App Store & Google Play',
        'Bank-grade AES-256 end-to-end payload encryption',
        'Over $40M in assets under tracking within 6 months',
      ],
      tags: ['Flutter', 'Rust Engine', 'GraphQL', 'AWS KMS'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'synth-agent-engine',
      title: 'Pyrow AutoPilot Customer AI',
      category: 'ai',
      client: 'OmniBrand Direct-to-Consumer',
      industry: 'E-Commerce & Omnichannel Retail',
      headline: 'Multi-lingual customer support and autonomous order tracking agent resolving 70% of tickets with zero human intervention.',
      results: [
        'Instant response time (< 1.5s vs 4 hours previously)',
        '71% of return & exchange requests handled autonomously',
        '$12,000 monthly support cost reduction',
      ],
      tags: ['LangChain', 'Python', 'Vector DB', 'OpenAI', 'WhatsApp Cloud API'],
      gradient: 'from-purple-600 to-violet-800',
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Proven Deliverables"
        title="Engineered for impact,"
        highlightText="Built to Scale"
        description="Explore how Pyrow crafts robust enterprise software, responsive retail systems, and high-performance apps that drive tangible revenue growth."
        breadcrumbs={[{ label: 'Portfolio & Clients' }]}
        primaryCtaText="Start Your Project"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Filter Tabs */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="pt-12 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFX.playClick();
                setActiveTab(tab.id as any);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95 ${
                activeTab === tab.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold shadow-md'
                  : 'bg-white dark:bg-obsidian-850 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/10 hover:border-violet-500/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Card */}
                  <div className={`p-6 bg-gradient-to-br ${project.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8" />
                    <div className="flex items-center justify-between relative z-10 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-md">
                        {project.industry}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white relative z-10">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 relative z-10 font-mono">
                      Client: {project.client}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5">
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {project.headline}
                    </p>

                    {/* Results / Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                        Key Production Impact:
                      </div>
                      {project.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Tags */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/5 mt-auto">
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-obsidian-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <PageCtaBanner
        badge="Custom Architecture"
        title="Ready to build your next flagship platform?"
        description="Schedule a technical discovery session with our software architects and receive a milestone breakdown."
        primaryBtnText="Book Architecture Call"
        onPrimaryClick={onOpenStrategyCall}
      />
    </div>
  );
};
