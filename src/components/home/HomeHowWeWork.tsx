import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket, Infinity as InfinityIcon } from 'lucide-react';
import { LuxuryScrollCard } from '../ui/LuxuryScrollCard';
import { LuxurySectionHeading } from '../ui/LuxurySectionHeading';

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
      <LuxurySectionHeading
        badge="How we work"
        title="From idea to launch — and beyond."
        rightAction={
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-zinc-200 shadow-sm">
            <InfinityIcon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>Continuous Partnership</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <LuxuryScrollCard
            key={idx}
            index={idx}
            columns={4}
            className="p-8 rounded-3xl bg-white/95 dark:bg-[#070512]/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] relative overflow-hidden flex flex-col justify-between group hover:border-violet-500/40 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)] backdrop-blur-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-mono font-bold text-violet-600 dark:text-violet-400">
                  {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          </LuxuryScrollCard>
        ))}
      </div>
    </section>
  );
};
