import React, { useState } from 'react';
import {
  Activity,
  Layers,
  Database,
  TrendingUp,
  ShieldCheck,
  Server,
  Zap,
  CheckCircle2,
  Cpu,
  Globe,
  Sparkles,
  Smartphone,
} from 'lucide-react';
import { soundFX } from './sound-effects';

export const HeroVisualShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'erp' | 'growth' | 'mobile'>('cloud');

  const tabs = [
    { id: 'cloud', label: 'Cloud Infrastructure', icon: <Server className="w-3.5 h-3.5" /> },
    { id: 'erp', label: 'Enterprise ERP Suite', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'growth', label: 'AI Growth Engine', icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: '60fps Mobile Apps', icon: <Smartphone className="w-3.5 h-3.5" /> },
  ] as const;

  return (
    <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto px-2">
      {/* Radiant Dual-Glow Background halo */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyber-blue via-ember-500 to-flare-gold opacity-30 blur-xl pointer-events-none -z-10" />

      {/* Main Glassmorphic Showcase Card */}
      <div className="rounded-3xl bg-white/90 dark:bg-obsidian-900/90 border-2 border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300">
        {/* Top Control Bar with Dual-Color Identity */}
        <div className="flex flex-wrap items-center justify-between px-5 sm:px-6 py-3.5 bg-slate-100/80 dark:bg-obsidian-950/80 border-b border-slate-200 dark:border-white/10 gap-3">
          <div className="flex items-center gap-3">
            {/* macOS styled window controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-300 dark:border-white/10 text-xs font-mono">
              <span className="text-cyber-blue font-bold">PYROW_OS</span>
              <span className="text-slate-400 dark:text-zinc-500">v4.8.2-enterprise</span>
            </div>
          </div>

          {/* Interactive Feature View Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs font-semibold">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyber-blue to-ember-500 text-white font-bold shadow-sm'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Operational</span>
          </div>
        </div>

        {/* Content Pane */}
        <div className="p-6 sm:p-8">
          {/* View 1: Cloud Infrastructure */}
          {activeTab === 'cloud' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Top KPI Cards in Both Brand Colors */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Global Throughput</span>
                    <Activity className="w-3.5 h-3.5 text-cyber-blue" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                    54,280 <span className="text-xs text-cyber-blue font-bold">req/s</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    ↑ 18.4% Peak Capacity
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>P99 Edge Latency</span>
                    <Zap className="w-3.5 h-3.5 text-ember-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                    24.6 <span className="text-xs text-ember-500 font-bold">ms</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    Sub-second Global Edge
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Database Uptime</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                    99.998<span className="text-xs text-emerald-500 font-bold">%</span>
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-zinc-500 mt-0.5">
                    Zero Data Loss SLA
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <span>Cloud Regions</span>
                    <Globe className="w-3.5 h-3.5 text-flare-amber" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                    14 <span className="text-xs text-flare-amber font-bold">Nodes</span>
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-zinc-500 mt-0.5">
                    IN, US, EU, APAC Clusters
                  </div>
                </div>
              </div>

              {/* Simulated Dual-Color Interactive Telemetry Graph */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-cyber-blue font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyber-blue" />
                      Electric Blue: API Transactions
                    </span>
                    <span className="flex items-center gap-1.5 text-ember-400 font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-ember-500" />
                      Flame Orange: Conversion Revenue
                    </span>
                  </div>
                  <span className="text-zinc-500 hidden sm:inline">Real-Time Telemetry Stream</span>
                </div>

                {/* SVG Visual Graph Representation */}
                <div className="h-32 w-full relative">
                  <svg viewBox="0 0 800 120" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="grad-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0070F3" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0070F3" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="grad-orange" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Blue Line Graph */}
                    <path
                      d="M0,80 Q100,50 200,70 T400,30 T600,45 T800,15 L800,120 L0,120 Z"
                      fill="url(#grad-blue)"
                    />
                    <path
                      d="M0,80 Q100,50 200,70 T400,30 T600,45 T800,15"
                      fill="none"
                      stroke="#00E5FF"
                      strokeWidth="3"
                    />

                    {/* Orange Line Graph */}
                    <path
                      d="M0,95 Q100,75 200,85 T400,50 T600,35 T800,10 L800,120 L0,120 Z"
                      fill="url(#grad-orange)"
                    />
                    <path
                      d="M0,95 Q100,75 200,85 T400,50 T600,35 T800,10"
                      fill="none"
                      stroke="#FF4D00"
                      strokeWidth="3"
                    />

                    {/* Highlight Pulsing Pulse Node */}
                    <circle cx="800" cy="10" r="5" fill="#FF4D00" className="animate-ping" />
                    <circle cx="800" cy="10" r="4" fill="#FFB703" />
                    <circle cx="800" cy="15" r="4" fill="#00E5FF" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* View 2: Multi-Branch ERP */}
          {activeTab === 'erp' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    Consolidated Multi-Branch Financial Ledger
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Real-time sync across 14 international logistics centers</p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  GST & Tax Compliant
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-slate-500 dark:text-zinc-400">Bengaluru Tech Hub</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">₹4.82 Cr Transacted</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">+34% YoY Growth ★</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-slate-500 dark:text-zinc-400">Mumbai Commercial Center</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">₹6.15 Cr Transacted</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Automated GST Invoices</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-slate-500 dark:text-zinc-400">Delhi NCR Logistics Hub</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">₹5.40 Cr Transacted</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Live Stock Sync</div>
                </div>
              </div>
            </div>
          )}

          {/* View 3: AI Growth Engine */}
          {activeTab === 'growth' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    Omnichannel AI Lead Nurturing & Ad Routing
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Meta Advantage+ & Google Ads synchronized via Server-Side CAPI</p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-ember-500/15 text-ember-600 dark:text-ember-400 border border-ember-500/30">
                  4.8x Blended ROAS
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">&lt; 8 Secs</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono mt-0.5">Avg Lead Contact Time</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-lg font-bold font-mono text-ember-500">98.2%</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono mt-0.5">WhatsApp Open Rate</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-lg font-bold font-mono text-cyber-blue">82%</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono mt-0.5">24/7 AI Bot Resolution</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-lg font-bold font-mono text-emerald-500">+64%</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono mt-0.5">Qualified Lead Volume</div>
                </div>
              </div>
            </div>
          )}

          {/* View 4: 60fps Mobile Apps */}
          {activeTab === 'mobile' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    Flutter & Native Mobile High-Performance Architecture
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Single-codebase agility with 120fps hardware acceleration on iOS & Android</p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-flare-amber/15 text-flare-amber border border-flare-amber/30">
                  99.95% Crash-Free
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-slate-500 dark:text-zinc-400">Frame Rendering Rate</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">120 Hz ProMotion</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Zero Micro-Stutter</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-slate-500 dark:text-zinc-400">Biometric Encryption</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">FaceID & Fingerprint</div>
                  <div className="text-cyber-blue font-semibold mt-0.5">Hardware Enclave Protected</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5">
                  <div className="text-slate-500 dark:text-zinc-400">Offline SQLite Cache</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1">Sub-10ms Queries</div>
                  <div className="text-flare-amber font-semibold mt-0.5">Instant Background Sync</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

