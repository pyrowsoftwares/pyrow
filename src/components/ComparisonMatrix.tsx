import React from 'react';
import { Check, X, Shield, Zap, Sparkles } from 'lucide-react';

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
    <section id="comparison" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs font-mono text-cyber-blue mb-3 font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>Honest Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Why Growing Businesses Choose Pyrow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            See how Pyrow compares to traditional agencies, generic freelancers, and slow internal hiring cycles.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto scrollbar-none rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-obsidian-900">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-obsidian-850">
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold text-slate-900 dark:text-white w-1/3">
                  Key Evaluation Factor
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-black text-ember-600 dark:text-ember-400 bg-ember-500/10 dark:bg-ember-500/15 border-x-2 border-ember-500/40 w-1/3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-ember-500" />
                    <span>Pyrow Advantage</span>
                  </div>
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold text-slate-500 dark:text-zinc-400 w-1/6 hidden sm:table-cell">
                  Traditional Agencies
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold text-slate-500 dark:text-zinc-400 w-1/6 hidden md:table-cell">
                  In-House Hiring
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 sm:py-5 px-6 font-semibold text-slate-900 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 sm:py-5 px-6 font-bold text-slate-900 dark:text-white bg-ember-500/5 dark:bg-ember-500/10 border-x-2 border-ember-500/40">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 stroke-[3]" />
                      <span>{row.pyrow}</span>
                    </div>
                  </td>
                  <td className="py-4 sm:py-5 px-6 text-slate-500 dark:text-zinc-400 hidden sm:table-cell">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="py-4 sm:py-5 px-6 text-slate-500 dark:text-zinc-400 hidden md:table-cell">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{row.inHouse}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
