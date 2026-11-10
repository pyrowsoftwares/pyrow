import React, { useState } from 'react';
import {
  Database,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Play,
  Monitor,
  Zap,
  Check,
  ExternalLink,
  Activity,
  Send,
} from 'lucide-react';
import { industrySolutions, IndustrySolution } from '../data/industryData';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface IndustrySolutionsProps {
  onOpenDemoRequest: (softwareName: string) => void;
  onOpenScopeCalculator: () => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({
  onOpenDemoRequest,
  onOpenScopeCalculator,
}) => {
  const [selectedSolution, setSelectedSolution] = useState<IndustrySolution>(industrySolutions[0]);
  const [simulatedCounter, setSimulatedCounter] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSelect = (sol: IndustrySolution) => {
    soundFX.playClick();
    setSelectedSolution(sol);
    setSimulatedCounter(0);
  };

  const handleSimulateEvent = () => {
    soundFX.playChime();
    setSimulatedCounter((prev) => prev + 1);
    const msg = `⚡ Live Transaction Processed for ${selectedSolution.name} (Latency: 28ms)`;
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="industry-solutions" className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-obsidian-900/60 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div id="industries" className="absolute -top-20 left-0" />
      {/* Background glow meshes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-cyber-blue/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gradient-to-r from-ember-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs font-mono text-cyber-blue mb-3 font-bold">
            <Database className="w-3.5 h-3.5" />
            <span>Ready-to-Use Business Software</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Specialized Software Suites.{' '}
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-flare-gold bg-clip-text text-transparent">
              Built for Your Industry.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            11 proven software systems designed for Indian businesses — from billing and school portals to hospital records and WhatsApp automation. Ready to customize and launch in days.
          </p>
        </div>

        {/* Master-Detail Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Solution Selector List (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin">
            {industrySolutions.map((sol, index) => {
              const isSelected = selectedSolution.id === sol.id;
              return (
                <div
                  key={sol.id}
                  onClick={() => handleSelect(sol)}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`p-3.5 sm:p-4 rounded-2xl cursor-pointer border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white dark:bg-obsidian-800 border-ember-500 shadow-light-card-hover dark:shadow-glow-ember text-slate-900 dark:text-white'
                      : 'bg-white/70 dark:bg-obsidian-850/80 border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold font-display">{sol.name}</h4>
                    </div>
                    {isSelected ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-ember-500 text-white font-bold">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">{sol.category}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {sol.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Product Mockup (lg:col-span-7) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-900/95 border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden">
              {/* Toast banner when simulated */}
              {toastMessage && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-mono font-bold shadow-lg animate-in slide-in-from-top-2 duration-150 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{toastMessage}</span>
                </div>
              )}

              {/* Top Bar with OS Dots */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 ml-3">
                    sys://pyrow-os/{selectedSolution.slug}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {selectedSolution.mockup.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-ember-500/15 text-ember-600 dark:text-ember-300 border border-ember-500/40 font-semibold">
                    {selectedSolution.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">{selectedSolution.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  {selectedSolution.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {selectedSolution.description}
                </p>
              </div>

              {/* Interactive Mockup Dashboard Canvas */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-900 text-white shadow-inner">
                {/* Hero Metric Banner */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {selectedSolution.mockup.heroLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-0.5 flex items-center gap-2">
                      <span>{selectedSolution.mockup.heroMetric}</span>
                      {simulatedCounter > 0 && (
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                          +{simulatedCounter} Live Evt
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Simulator Trigger Button */}
                  <button
                    onClick={handleSimulateEvent}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-ember-500 hover:bg-ember-400 text-obsidian shadow-sm transition-transform active:scale-95 cursor-pointer"
                  >
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Simulate Real-Time Event</span>
                  </button>
                </div>

                {/* Simulated Interactive Data Table */}
                <div className="overflow-x-auto">
                  <div className="text-xs font-mono text-zinc-400 mb-2 font-semibold">
                    {selectedSolution.mockup.chartTitle}
                  </div>
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="text-zinc-400 border-b border-white/10">
                        {selectedSolution.mockup.tableColumns.map((col, idx) => (
                          <th key={idx} className="pb-2 font-medium">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-zinc-200">
                      {selectedSolution.mockup.tableRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 font-semibold text-white">{row.col1}</td>
                          <td className="py-2.5">{row.col2}</td>
                          <td className="py-2.5">{row.col3}</td>
                          <td className="py-2.5 text-ember-400 font-bold">{row.col4}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedSolution.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-obsidian-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 flex items-center gap-1.5 font-medium"
                  >
                    <Check className="w-3 h-3 text-ember-500" />
                    {pill}
                  </span>
                ))}
              </div>

              {/* Key Architecture Bullets */}
              <div className="mt-4 space-y-2">
                {selectedSolution.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={() => onOpenDemoRequest(selectedSolution.name)}
                  icon={<Play className="w-4 h-4 fill-obsidian" />}
                  className="w-full sm:w-auto"
                >
                  Request Live Interactive Demo
                </MagneticButton>

                <MagneticButton
                  variant="outline"
                  size="md"
                  onClick={onOpenScopeCalculator}
                  className="w-full sm:w-auto"
                >
                  Calculate Deployment Cost
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
