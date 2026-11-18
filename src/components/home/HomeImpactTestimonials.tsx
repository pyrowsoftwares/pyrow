import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';

export const HomeImpactTestimonials: React.FC = () => {
  const { navigate } = useRouter();

  const metrics = [
    {
      stat: '92%',
      label: 'Reduction in Admin Time',
      sub: "For Insta Cafe's multi-store inventory management.",
    },
    {
      stat: '2.4x',
      label: 'Booking Volume Increase',
      sub: "For Shiv's Photography via automated scheduling.",
    },
    {
      stat: 'Zero',
      label: 'Estimation Errors',
      sub: 'For Atom Infra using our real-time quoting engine.',
    },
    {
      stat: '120k+',
      label: 'Active Users Handled',
      sub: "For Safuu's high-traffic DeFi dashboard.",
    },
  ];

  const testimonials = [
    {
      quote: 'Pyrow built our entire dashboard. 100k+ users and not a single glitch.',
      client: 'DeFi Ecosystem',
      role: 'Lead Developer',
    },
    {
      quote: 'Finally, a payroll & ERP system that actually works for our 500+ employees.',
      client: 'Meta Giants',
      role: 'HR Operations',
    },
    {
      quote: 'The AR quoting system reduced our customer estimation error by 90%.',
      client: 'Atom Infra',
      role: 'Chief Architect',
    },
    {
      quote: 'Our lead conversion went up by 40% after the new automated CRM.',
      client: 'Right Choice',
      role: 'Founding Partner',
    },
    {
      quote: 'Student management is now paperless and takes 10% of the previous time.',
      client: 'Iqrah Academy',
      role: 'Administrator',
    },
    {
      quote: 'Professional, reliable, and incredibly fast at shipping sprint updates.',
      client: 'MWI Groups',
      role: 'Tech Operations',
    },
    {
      quote: 'Our online bookings have doubled since the automated scheduling launched.',
      client: "Shiv's Photography",
      role: 'Owner',
    },
    {
      quote: 'Real-time tracking for 100+ riders — flawlessly executed.',
      client: 'Pocket Delivery',
      role: 'Logistics Head',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest border border-violet-500/20 mb-3">
          Impact & Testimonials
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
          Real improvements for real businesses.
        </h2>
      </div>

      {/* 4 Metric Callout Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 shadow-sm text-center flex flex-col justify-between transition-all"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-black font-display bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                {m.stat}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {m.label}
              </div>
            </div>
            <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
              {m.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl bg-slate-50 dark:bg-obsidian-900/60 border border-slate-200/60 dark:border-white/5 flex flex-col justify-between group hover:border-violet-500/30 transition-all"
          >
            <div>
              <Quote className="w-5 h-5 text-violet-500 mb-3 opacity-60" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/40 dark:border-white/5">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {t.client}
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                {t.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button to View All Projects */}
      <div className="text-center">
        <button
          onClick={() => {
            soundFX.playClick();
            navigate('/portfolio');
          }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-xl cursor-pointer"
        >
          <span>View all 100+ projects</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
