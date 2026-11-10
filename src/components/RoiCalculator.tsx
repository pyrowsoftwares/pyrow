import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Percent, Users, Award } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface RoiCalculatorProps {
  onOpenScopeCalculator: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenScopeCalculator }) => {
  // Monthly Revenue in INR (Default 25 Lakhs)
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(2500000);
  // Current Conversion Rate %
  const [conversionRate, setConversionRate] = useState<number>(1.5);
  // Monthly Ad Spend in INR (Default 3 Lakhs)
  const [adSpend, setAdSpend] = useState<number>(300000);

  // Projected conversion improvement (+45% lift from modern, fast website)
  const projectedConversionRate = Math.min(conversionRate * 1.45, 6.0);
  const conversionLiftPercent = Math.round(((projectedConversionRate - conversionRate) / conversionRate) * 100);

  // Annual extra revenue from website speed & UI improvements
  const projectedMonthlyRevenue = Math.round(monthlyRevenue * (projectedConversionRate / conversionRate));
  const annualRevenueGain = (projectedMonthlyRevenue - monthlyRevenue) * 12;

  // Ad Spend ROAS improvement (moving from ~2.2x to ~4.4x with optimized ad funnels)
  const currentAdSales = adSpend * 2.2;
  const projectedAdSales = adSpend * 4.4;
  const annualAdGain = Math.round((projectedAdSales - currentAdSales) * 12);

  // Hours saved per year with custom ERP / business automation
  const hoursSavedAnnual = Math.round((monthlyRevenue / 50000) * 18);

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakhs`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="roi-calculator" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background glow mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-ember-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-blue/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-3 font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            See How Much Your Business{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyber-blue bg-clip-text text-transparent">
              Can Grow.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Adjust the sliders below to see the estimated extra revenue and time saved when switching to Pyrow's fast software and targeted marketing campaigns.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 shadow-light-card">
            {/* Slider 1: Current Monthly Revenue */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-slate-900 dark:text-white block">
                    1. Current Monthly Business Revenue
                  </label>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    What your company makes each month today
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-ember-600 dark:text-ember-400">
                  {formatINR(monthlyRevenue)}
                </div>
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={250000}
                value={monthlyRevenue}
                onChange={(e) => {
                  soundFX.playClick();
                  setMonthlyRevenue(Number(e.target.value));
                }}
                className="w-full accent-ember-500 cursor-pointer h-2 bg-slate-200 dark:bg-obsidian-750 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>₹5 Lakhs / mo</span>
                <span>₹1 Crore</span>
                <span>₹2 Crores+ / mo</span>
              </div>
            </div>

            {/* Slider 2: Current Website Conversion Rate */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-slate-900 dark:text-white block">
                    2. Current Website Conversion Rate
                  </label>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Percentage of website visitors who make an enquiry or purchase
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-cyber-blue">
                  {conversionRate.toFixed(1)}%
                </div>
              </div>
              <input
                type="range"
                min={0.5}
                max={4.0}
                step={0.1}
                value={conversionRate}
                onChange={(e) => {
                  soundFX.playClick();
                  setConversionRate(Number(e.target.value));
                }}
                className="w-full accent-cyber-blue cursor-pointer h-2 bg-slate-200 dark:bg-obsidian-750 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>0.5% (Slow Website)</span>
                <span>2.0% (Average)</span>
                <span>4.0% (High Performer)</span>
              </div>
            </div>

            {/* Slider 3: Monthly Advertising Budget */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-bold text-slate-900 dark:text-white block">
                    3. Monthly Marketing & Ad Budget
                  </label>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    What you spend across Google, Meta, Instagram, or SEO
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-flare-amber">
                  {formatINR(adSpend)}
                </div>
              </div>
              <input
                type="range"
                min={50000}
                max={3000000}
                step={50000}
                value={adSpend}
                onChange={(e) => {
                  soundFX.playClick();
                  setAdSpend(Number(e.target.value));
                }}
                className="w-full accent-flare-amber cursor-pointer h-2 bg-slate-200 dark:bg-obsidian-750 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>₹50,000 / mo</span>
                <span>₹10 Lakhs</span>
                <span>₹30 Lakhs / mo</span>
              </div>
            </div>
          </div>

          {/* Results Output Card (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Ember Ambient Highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-ember-500/20 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-ember-400 uppercase tracking-wider font-bold mb-3">
                <TrendingUp className="w-4 h-4 text-ember-400" />
                <span>Your Projected Growth</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Estimated Annual Impact
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Based on real performance data from over 150+ software deployments in India.
              </p>

              {/* Big Metric Box */}
              <div className="mt-5 p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div>
                  <span className="text-xs text-zinc-400 font-mono block">Estimated Extra Annual Revenue</span>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyber-cyan mt-1">
                    +{formatINR(annualRevenueGain)}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                    ↑ {conversionLiftPercent}% increase from sub-second website speed & checkout
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-zinc-400 font-mono block">Extra Ad Sales Per Year</span>
                    <span className="text-lg font-bold font-mono text-flare-gold">+{formatINR(annualAdGain)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-400 font-mono block">Team Hours Saved</span>
                    <span className="text-lg font-bold font-mono text-cyber-blue">~{hoursSavedAnnual} hrs/yr</span>
                  </div>
                </div>
              </div>

              {/* Confidence Guarantee */}
              <div className="mt-5 flex items-start gap-2.5 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  Backed by Pyrow's 99.98% uptime SLA and 100% intellectual property ownership from Day 1.
                </span>
              </div>
            </div>

            <div className="mt-6">
              <MagneticButton
                variant="primary"
                size="md"
                onClick={onOpenScopeCalculator}
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get a Custom Growth Proposal
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
