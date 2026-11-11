import React, { useState } from 'react';
import { Calculator, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
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

  // Dynamic relative conversion lift scaling with baseline optimization potential
  // (e.g. 85% lift at 0.5% baseline down to 25% lift at 4.0% baseline)
  const liftMultiplier = 0.85 - ((conversionRate - 0.5) / 3.5) * 0.60;
  const projectedConversionRate = Number((conversionRate * (1 + liftMultiplier)).toFixed(2));
  const conversionLiftPercent = Math.round(liftMultiplier * 100);

  // Annual extra revenue from website speed, checkout modernization & UI improvements
  const projectedMonthlyRevenue = Math.round(monthlyRevenue * (1 + liftMultiplier * 0.45));
  const annualRevenueGain = (projectedMonthlyRevenue - monthlyRevenue) * 12;

  // Ad Spend ROAS improvement (moving from ~2.2x to ~3.8x with high-speed landing funnels)
  const currentAdSales = adSpend * 2.2;
  const projectedAdSales = adSpend * 3.8;
  const annualAdGain = Math.round((projectedAdSales - currentAdSales) * 12);

  // Hours saved per year with custom ERP & automated workflows
  const hoursSavedAnnual = Math.min(2400, Math.round((monthlyRevenue / 100000) * 14 + 120));

  const formatINR = (val: number) => {
    const absVal = Math.abs(val);
    const prefix = val < 0 ? '-' : '';
    // Format edge case around 100 Lakhs into Crores
    if (absVal >= 10000000 || Math.round(absVal / 100000) >= 100) {
      return `${prefix}₹${(absVal / 10000000).toFixed(2)} Cr`;
    }
    if (absVal >= 100000) {
      const lakhs = (absVal / 100000).toFixed(1);
      return `${prefix}₹${lakhs} ${parseFloat(lakhs) === 1.0 ? 'Lakh' : 'Lakhs'}`;
    }
    return `${prefix}₹${absVal.toLocaleString('en-IN')}`;
  };

  const handlePointerSound = () => {
    soundFX.playClick();
  };

  return (
    <section id="roi-calculator" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-obsidian-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background glow mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-ember-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-3 font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            See How Much Your Business{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-500 bg-clip-text text-transparent">
              Can Scale.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Adjust the sliders below to project estimated revenue expansion and workflow automation gains with Pyrow enterprise software.
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
                  <label htmlFor="roi-revenue" className="text-sm font-bold text-slate-900 dark:text-white block cursor-pointer">
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
                id="roi-revenue"
                type="range"
                min={500000}
                max={20000000}
                step={250000}
                value={monthlyRevenue}
                aria-label="Current Monthly Revenue"
                aria-valuemin={500000}
                aria-valuemax={20000000}
                aria-valuenow={monthlyRevenue}
                aria-valuetext={formatINR(monthlyRevenue)}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                onPointerUp={handlePointerSound}
                onKeyUp={handlePointerSound}
                className="w-full accent-ember-500 cursor-pointer h-2 bg-slate-200 dark:bg-obsidian-750 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>₹5 Lakhs / mo</span>
                <span>₹1 Crore (Mid)</span>
                <span>₹2 Crores / mo</span>
              </div>
            </div>

            {/* Slider 2: Current Website Conversion Rate */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="roi-conversion" className="text-sm font-bold text-slate-900 dark:text-white block cursor-pointer">
                    2. Current Website Conversion Rate
                  </label>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Percentage of visitors who convert into qualified leads or sales
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-emerald-500">
                  {conversionRate.toFixed(1)}% <span className="text-xs text-zinc-400">→ {projectedConversionRate}%</span>
                </div>
              </div>
              <input
                id="roi-conversion"
                type="range"
                min={0.5}
                max={4.0}
                step={0.1}
                value={conversionRate}
                aria-label="Current Website Conversion Rate"
                aria-valuemin={0.5}
                aria-valuemax={4.0}
                aria-valuenow={conversionRate}
                aria-valuetext={`${conversionRate.toFixed(1)} percent`}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                onPointerUp={handlePointerSound}
                onKeyUp={handlePointerSound}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-obsidian-750 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>0.5% (Baseline)</span>
                <span>2.25% (Average)</span>
                <span>4.0% (Optimized)</span>
              </div>
            </div>

            {/* Slider 3: Monthly Advertising Budget */}
            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="roi-ad-spend" className="text-sm font-bold text-slate-900 dark:text-white block cursor-pointer">
                    3. Monthly Marketing & Ad Budget
                  </label>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Spend across Search, Meta, Performance Ads, or Organic Funnels
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-amber-500">
                  {formatINR(adSpend)}
                </div>
              </div>
              <input
                id="roi-ad-spend"
                type="range"
                min={50000}
                max={3000000}
                step={50000}
                value={adSpend}
                aria-label="Monthly Marketing Budget"
                aria-valuemin={50000}
                aria-valuemax={3000000}
                aria-valuenow={adSpend}
                aria-valuetext={formatINR(adSpend)}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                onPointerUp={handlePointerSound}
                onKeyUp={handlePointerSound}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 dark:bg-obsidian-750 rounded-lg"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>₹50,000 / mo</span>
                <span>₹15 Lakhs (Mid)</span>
                <span>₹30 Lakhs / mo</span>
              </div>
            </div>
          </div>

          {/* Results Output Card (lg:col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Ember Ambient Highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-ember-500/15 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-ember-400 uppercase tracking-wider font-semibold mb-3">
                <TrendingUp className="w-4 h-4 text-ember-400" />
                <span>Projected Impact Metrics</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Estimated Annual Impact
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Calibrated against performance benchmarks across 150+ high-traffic enterprise deployments.
              </p>

              {/* Big Metric Box */}
              <div className="mt-5 p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div>
                  <span className="text-xs text-zinc-400 font-mono block">Estimated Revenue Lift Per Year</span>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 mt-1">
                    +{formatINR(annualRevenueGain)}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                    ↑ +{conversionLiftPercent}% relative lift from sub-second speed & UX friction removal
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-zinc-400 font-mono block">Extra Ad Sales Per Year</span>
                    <span className="text-lg font-bold font-mono text-amber-300">+{formatINR(annualAdGain)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-zinc-400 font-mono block">Automation Time Saved</span>
                    <span className="text-lg font-bold font-mono text-teal-300">~{hoursSavedAnnual} hrs/yr</span>
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
