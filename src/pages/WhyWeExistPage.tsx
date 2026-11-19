import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { ShieldCheck, FileSpreadsheet, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

interface WhyWeExistPageProps {
  onOpenStrategyCall: () => void;
}

export const WhyWeExistPage: React.FC<WhyWeExistPageProps> = ({ onOpenStrategyCall }) => {
  const problems = [
    {
      title: 'The Chaos of Fragmented Spreadsheets',
      desc: 'Businesses lose hundreds of thousands every year through misplaced invoices, out-of-sync inventory sheets, and untracked leads scattered across WhatsApp and email.',
      icon: <FileSpreadsheet className="w-6 h-6 text-rose-500" />,
    },
    {
      title: 'Rigid, Outdated Legacy Software',
      desc: 'Old desktop software breaks without internet, cannot be accessed remotely by executives, and forces your business to warp its operations to fit a clunky tool built a decade ago.',
      icon: <Layers className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'The Disconnected Agency Trap',
      desc: 'Hiring a development shop that doesn’t understand marketing leaves you with an unmarketable product. Hiring a marketing agency without engineering depth leaves you with broken funnels.',
      icon: <TrendingUp className="w-6 h-6 text-violet-500" />,
    },
  ];

  const pyrowSolution = [
    'Unified Cloud-Native Systems: One single source of truth for billing, stock, and customer relationships.',
    'Offline-First Reliability: Blazing fast point-of-sale and mobile apps that work even when Wi-Fi drops.',
    'Engineering Combined with Marketing: Scalable software paired directly with customer acquisition channels.',
    'Transparent Ownership: You own your code, your database, your infrastructure, and your digital destiny.',
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Our Purpose"
        title="Why We"
        highlightText="Exist."
        description="We exist to end operational friction, eliminate spreadsheet chaos, and democratize enterprise-grade software and growth engines for ambitious businesses."
        breadcrumbs={[{ label: 'Why We Exist' }]}
        primaryCtaText="Transform Your Operations"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* The Problem Landscape */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-wider">
            The Status Quo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white mt-2">
            The Bottlenecks Holding High-Growth Businesses Back
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm"
            >
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 w-fit mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Pyrow Operating System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-violet-900/25 via-purple-900/15 to-transparent border border-violet-500/30 shadow-xl">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
              The Pyrow Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white mt-2">
              How We Solve It Once and for All
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {pyrowSolution.map((sol, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-zinc-200">
                  {sol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Ready to end operational chaos?"
        subtitle="Step into a streamlined digital future. Let's design and deploy your custom software product."
        buttonText="Get a Free Project Estimate"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
