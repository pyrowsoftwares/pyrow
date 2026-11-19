import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import { LuxuryScrollCard } from '../ui/LuxuryScrollCard';
import { LuxurySectionHeading } from '../ui/LuxurySectionHeading';

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
      <LuxurySectionHeading
        badge="Impact & Testimonials"
        title="Real improvements for real businesses."
      />

      {/* 4 Metric Callout Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {metrics.map((m, idx) => (
          <LuxuryScrollCard
            key={idx}
            index={idx}
            columns={4}
            className="p-8 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.25)] text-center flex flex-col justify-between transition-all"
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
          </LuxuryScrollCard>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {testimonials.map((t, idx) => (
          <LuxuryScrollCard
            key={idx}
            index={idx}
            columns={4}
            className="p-6 rounded-3xl bg-slate-50 dark:bg-obsidian-900/60 border border-slate-200/60 dark:border-white/5 flex flex-col justify-between group hover:border-violet-500/40 hover:shadow-[0_15px_30px_-10px_rgba(124,58,237,0.2)] transition-all"
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
          </LuxuryScrollCard>
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
