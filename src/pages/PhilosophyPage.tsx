import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Zap, Target, Sliders, Layers, Clock, Cpu } from 'lucide-react';

interface PhilosophyPageProps {
  onOpenStrategyCall: () => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onOpenStrategyCall }) => {
  const rules = [
    {
      num: '01',
      title: 'Solve Real Problems First',
      desc: 'We never write code merely for novelty or buzzwords. Every architecture choice, database schema, and interface design must directly eliminate business friction or unlock new customer revenue.',
      icon: <Target className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
    },
    {
      num: '02',
      title: 'Ship, Then Iterate Relentlessly',
      desc: 'Perfectionism without shipping is just procrastination. We deploy rock-solid, production-ready v1 releases fast, observe real user telemetry in production, and refine with continuous agile deployments.',
      icon: <Zap className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
    },
    {
      num: '03',
      title: 'Obsess Over Simplicity',
      desc: 'Unchecked complexity is a critical failure mode. We aggressively strip away unnecessary layers so that your team, your cashiers, and your customers can master the software in minutes without training manuals.',
      icon: <Sliders className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  const mindsets = [
    {
      title: 'Speed Is A Feature',
      desc: 'We measure delivery in days and weeks, not quarters. High velocity compounded with rigorous automated testing builds market dominance.',
      icon: <Clock className="w-5 h-5 text-violet-500" />,
    },
    {
      title: 'No Bureaucracy, Pure Engineering',
      desc: 'You work directly with lead software architects and product engineers who write code and understand commercial growth.',
      icon: <Cpu className="w-5 h-5 text-fuchsia-500" />,
    },
    {
      title: 'Architected for Massive Scale',
      desc: 'Clean modular code and resilient cloud backends. Systems engineered to handle 10x or 100x traffic surges without architectural refactoring.',
      icon: <Layers className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Our Core Philosophy"
        title="Execution Is"
        highlightText="Everything."
        description="Ideas are cheap. Shipping robust, scalable software that solves actual business problems and accelerates revenue is hard. We optimize relentlessly for the latter."
        breadcrumbs={[{ label: 'Philosophy' }]}
        primaryCtaText="Build With Us"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* The Rules We Build By */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Our Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white mt-2">
            The Rules We Build By
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm relative group hover:border-violet-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display text-slate-200 dark:text-white/10 group-hover:text-violet-500/30 transition-colors">
                    {rule.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                    {rule.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {rule.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Mindset */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-obsidian-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
              Engineering Mindset
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mt-2">
              How We Think About Code and Revenue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mindsets.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-white dark:bg-white/10 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Ready to automate the friction?"
        subtitle="Stop managing spreadsheets and start focusing on growth. Let us engineer your business operational engine."
        buttonText="Build Together"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
