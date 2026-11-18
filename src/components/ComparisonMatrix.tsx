import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

export const ComparisonMatrix: React.FC = () => {
  const rows = [
    {
      feature: 'Delivery Speed & Launch Time',
      pyrow: 'Fast 1–3 Month Delivery (Weekly Live Demos)',
      agency: '6–12 Months (Frequent Delays)',
      inHouse: '4–8 Months Just to Hire Staff',
    },
    {
      feature: 'Software + Growth Marketing',
      pyrow: 'Single In-House Team: Code + Google/Meta Ads',
      agency: 'Fragmented (Code only or Marketing only)',
      inHouse: 'Requires Hiring 2–3 Separate Departments',
    },
    {
      feature: 'Code & Intellectual Property Ownership',
      pyrow: '100% Yours from Day 1 (No Platform Locks)',
      agency: 'Often Locked into Proprietary Systems',
      inHouse: '100% Client-Owned',
    },
    {
      feature: 'Pricing & Budget Transparency',
      pyrow: 'Fixed Milestone Quote (Zero Hidden Fees)',
      agency: 'Hourly Billing with Constant Change Orders',
      inHouse: 'High Fixed Salaries, Bonuses & Overhead',
    },
    {
      feature: 'Ready-to-Deploy Business Software',
      pyrow: '11 Pre-Engineered Suites Ready to Customize',
      agency: 'Builds from Scratch Every Time (High Risk)',
      inHouse: 'Years of Slow Development & Technical Debt',
    },
    {
      feature: 'Server Uptime & Technical Support',
      pyrow: '99.98% High-Availability Guarantee + 24/7 Monitoring',
      agency: 'No Guaranteed SLA or Bug Fixes',
      inHouse: 'Depends on Available Internal Staff',
    },
  ];

  return (
    <section id="comparison" className="relative py-16 sm:py-20 lg:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-mono text-violet-600 dark:text-purple-400 mb-3 font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>Competitive Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Why High-Growth Companies Choose Pyrow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Compare Pyrow's integrated engineering and growth approach against traditional vendor and hiring models.
          </p>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-end gap-1.5 text-[11px] font-mono text-slate-400 dark:text-zinc-500 mb-2 px-2">
          <span>Swipe horizontally</span>
          <ArrowRight className="w-3 h-3 text-violet-600 animate-pulse" />
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto scrollbar-none rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm dark:shadow-none bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md -webkit-overflow-scrolling-touch"
        >
          <table className="w-full text-left border-collapse min-w-[580px] sm:min-w-0">
            <thead>
              <tr className="border-b border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-[#1A253D]">
                <th className="py-3.5 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white w-1/3">
                  Evaluation Dimension
                </th>
                <th className="py-3.5 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-bold text-violet-600 dark:text-purple-400 bg-violet-500/10 dark:bg-violet-500/15 border-x-2 border-violet-500/40 w-1/3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                    <span>The Pyrow Model</span>
                  </div>
                </th>
                <th className="py-3.5 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400 w-1/6 hidden sm:table-cell">
                  Traditional Agency
                </th>
                <th className="py-3.5 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400 w-1/6 hidden md:table-cell">
                  Internal Hiring
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-white/5 transition-colors">
                  <td className="py-3.5 sm:py-5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-3.5 sm:py-5 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white bg-violet-500/5 dark:bg-violet-500/10 border-x-2 border-violet-500/40">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 stroke-[3]" />
                      <span>{row.pyrow}</span>
                    </div>
                  </td>
                  <td className="py-3.5 sm:py-5 px-4 sm:px-6 text-slate-500 dark:text-zinc-400 hidden sm:table-cell">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="py-4 sm:py-5 px-6 text-slate-500 dark:text-zinc-400 hidden md:table-cell">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-slate-400 dark:text-zinc-500 flex-shrink-0 mt-0.5" />
                      <span>{row.inHouse}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
