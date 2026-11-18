import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket, Infinity as InfinityIcon } from 'lucide-react';

export const HomeHowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We listen to your problems, understand your workflow, and map out exactly what you need.',
      icon: <Search className="w-5 h-5 text-violet-500" />,
    },
    {
      num: '02',
      title: 'Design',
      desc: 'We design the solution — clean interfaces, smart architecture, nothing unnecessary.',
      icon: <Palette className="w-5 h-5 text-fuchsia-500" />,
    },
    {
      num: '03',
      title: 'Build',
      desc: 'We build with precision. Every feature tested, every edge case handled.',
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'We deploy, train your team, and support you forever. Not just a handoff — a partnership.',
      icon: <Rocket className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest border border-violet-500/20 mb-3">
            How we work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            From idea to launch — and beyond.
          </h2>
        </div>

        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-zinc-200 shadow-sm self-start sm:self-auto">
          <InfinityIcon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          <span>Continuous Partnership</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-violet-500/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black font-mono text-violet-600 dark:text-violet-400">
                  {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
