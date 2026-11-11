import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Database,
  Smartphone,
  TrendingUp,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Clock,
  MessageSquare,
  MapPin,
  FileText,
  Boxes,
  Users,
  BellRing,
  Sparkles,
} from 'lucide-react';
import { soundFX } from './sound-effects';

export const HeroVisualShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'software' | 'apps' | 'marketing'>('websites');
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -2.5; // subtle 2.5 deg max
    const rotY = ((x - centerX) / centerX) * 2.5;
    setRotate({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const tabs = [
    { id: 'websites', label: 'Websites & E-Commerce', icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'software', label: 'Custom Software (ERP)', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'apps', label: 'Mobile Apps (iOS & Android)', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'marketing', label: 'Google & Meta Ads', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  ] as const;

  return (
    <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto px-2">
      {/* Radiant Subtle Dual-Glow Background halo */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-ember-500 via-amber-400 to-cyan-500 opacity-20 dark:opacity-8 blur-lg pointer-events-none -z-10" />

      {/* Main Glassmorphic Showcase Card with 3D Depth */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl bg-white/95 dark:bg-obsidian-900/95 border-2 border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden"
      >
        {/* Dynamic Glass Glare Highlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}) 0%, transparent 60%)`,
          }}
        />

        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 sm:px-6 py-3.5 bg-slate-100/90 dark:bg-obsidian-950/90 border-b border-slate-200 dark:border-white/10 gap-3 relative z-10">
          <div className="flex items-center gap-3">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center gap-2 pl-3 border-l border-slate-300 dark:border-white/10 text-xs font-medium">
              <span className="text-slate-900 dark:text-white font-bold">What We Build For You</span>
              <span className="text-slate-400 dark:text-zinc-500 hidden sm:inline">• Live Service Preview</span>
            </div>
          </div>

          {/* Interactive Feature View Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs font-semibold overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHeroTabPill"
                      className="absolute inset-0 bg-ember-500 rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Owned by Client</span>
          </div>
        </div>

        {/* Content Pane */}
        <div className="p-6 sm:p-8 min-h-[300px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* View 1: Fast Websites & E-Commerce */}
              {activeTab === 'websites' && (
                <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                    Fast Business Websites & Online Stores
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-0.5">
                    Designed to turn website visitors into phone calls, WhatsApp inquiries, and orders.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Loads in &lt; 1 Second
                </span>
              </div>

              {/* 4 Clear Business Benefit Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span>Mobile Speed</span>
                    <Zap className="w-4 h-4 text-ember-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                    0.6s <span className="text-xs text-emerald-500 font-semibold">Load</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Never lose a customer to slow loading pages</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span>Mobile First</span>
                    <Smartphone className="w-4 h-4 text-cyan-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                    100% <span className="text-xs text-cyan-500 font-semibold">Clean</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Stunning display on iPhone, Android & tablets</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span>Google Search</span>
                    <Globe className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                    Rank #1 <span className="text-xs text-amber-500 font-semibold">SEO</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Ranked high on Google for your target area</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span>Code Ownership</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
                    100% <span className="text-xs text-emerald-500 font-semibold">Yours</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">You own all domain, code & design files forever</p>
                </div>
              </div>

              {/* Real World Interactive Conversion Graph */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      Website Visitors
                    </span>
                    <span className="flex items-center gap-1.5 text-ember-400 font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-ember-500" />
                      Inquiries & Calls
                    </span>
                  </div>
                  <span className="text-zinc-400 hidden sm:inline">Daily Customer Conversion Trend</span>
                </div>

                <div className="h-28 w-full relative">
                  <svg viewBox="0 0 800 110" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="grad-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="grad-orange" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,75 Q100,55 200,65 T400,35 T600,40 T800,15 L800,110 L0,110 Z"
                      fill="url(#grad-blue)"
                    />
                    <path
                      d="M0,75 Q100,55 200,65 T400,35 T600,40 T800,15"
                      fill="none"
                      stroke="#00E5FF"
                      strokeWidth="2.5"
                    />

                    <path
                      d="M0,90 Q100,75 200,80 T400,50 T600,35 T800,12 L800,110 L0,110 Z"
                      fill="url(#grad-orange)"
                    />
                    <path
                      d="M0,90 Q100,75 200,80 T400,50 T600,35 T800,12"
                      fill="none"
                      stroke="#FF4D00"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* View 2: Custom Business Software & ERP */}
          {activeTab === 'software' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                    Custom Business Software (ERP)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-0.5">
                    Tailored around your exact business workflow. Replace messy Excel sheets with one reliable dashboard.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-ember-500/15 text-ember-600 dark:text-ember-400 border border-ember-500/30 w-fit">
                  GST Invoicing Included
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm">
                  <div className="flex items-center gap-2 text-ember-500 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Instant Billing & POS</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Print GST-compliant invoices in 2 seconds. Connects easily with barcode scanners and thermal receipt printers.
                  </p>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-3">✓ Works Offline Without Internet</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm">
                  <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm">
                    <Boxes className="w-4 h-4" />
                    <span>Live Stock & Inventory</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Track stock items across all your shops or godowns live. Automatic alerts when items run low.
                  </p>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-3">✓ Real-Time Multi-Branch Sync</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                    <Users className="w-4 h-4" />
                    <span>Staff & Attendance</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Track staff check-ins, biometric time-logs, monthly salary calculations, and team permissions securely.
                  </p>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-3">✓ Role-Based Safe Access</div>
                </div>
              </div>
            </div>
          )}

          {/* View 3: Mobile Apps (iOS & Android) */}
          {activeTab === 'apps' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                    Mobile Apps Built for Android & iPhone (iOS)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-0.5">
                    Fast, responsive mobile applications published directly to Google Play and Apple App Store.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 w-fit">
                  Play Store & App Store Ready
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm">
                  <div className="flex items-center gap-2 text-ember-500 font-bold text-sm">
                    <Smartphone className="w-4 h-4" />
                    <span>Single App for Both Platforms</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    We build using modern Flutter technology so your app runs butter-smooth on both Android and iOS without double costs.
                  </p>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-3">✓ 60fps Smooth Animations</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm">
                  <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm">
                    <BellRing className="w-4 h-4" />
                    <span>Instant Push Notifications</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Send updates, special festival discounts, and order progress directly to your customers' mobile lock screens.
                  </p>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-3">✓ 98% View Rate on Phones</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Biometric Login & Security</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Quick fingerprint and Face ID login. Safe payment gateways with instant UPI and card checkout.
                  </p>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-3">✓ Encrypted & 100% Secure</div>
                </div>
              </div>
            </div>
          )}

          {/* View 4: Digital Marketing & Ads */}
          {activeTab === 'marketing' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                    Google & Meta (Instagram / Facebook) Ads
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-0.5">
                    Targeted online marketing that delivers daily customer inquiries, WhatsApp messages, and phone calls.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-ember-500/15 text-ember-600 dark:text-ember-400 border border-ember-500/30 w-fit">
                  Verified Inquiries Only
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-center text-ember-500 mb-1">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">&lt; 15 Secs</div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Automated WhatsApp bot replies to new inquiries 24/7</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-center text-cyan-500 mb-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Google Maps</div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Rank top 3 when customers search in your city</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-center text-amber-500 mb-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Targeted Ads</div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Show ads only to people ready to buy</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 dark:shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-center text-emerald-500 mb-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Clear Reports</div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1">Simple weekly dashboard showing calls and leads</p>
                </div>
              </div>
            </div>
          )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
