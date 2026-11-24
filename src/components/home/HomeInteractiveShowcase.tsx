import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Bot,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  WifiOff,
  Printer,
  Barcode,
  Send,
  MessageSquare,
  Clock,
  TrendingUp,
  Share2,
  ExternalLink,
  ShieldCheck,
  Check,
  RotateCcw,
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import { LuxurySectionHeading } from '../ui/LuxurySectionHeading';

type ProductKey = 'pos' | 'assist' | 'contentflow' | 'erp';

const PRODUCT_LIST: { id: ProductKey; num: string; label: string; tag: string; badge: string }[] = [
  { id: 'pos', num: '01', label: 'Pyrow POS', tag: 'Offline-First Billing', badge: '0.8s Sub-Second' },
  { id: 'assist', num: '02', label: 'Pyrow Assist', tag: '24/7 AI Assistant', badge: 'WhatsApp Cloud' },
  { id: 'contentflow', num: '03', label: 'ContentFlow AI', tag: 'Autonomous Marketing', badge: 'Multi-Channel' },
  { id: 'erp', num: '04', label: 'Pyrow Flow ERP', tag: 'Enterprise Cloud', badge: '99.99% Uptime' },
];

export const HomeInteractiveShowcase: React.FC<{ onOpenDemoRequest?: (name?: string) => void }> = ({
  onOpenDemoRequest,
}) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<ProductKey>('pos');

  // Interactive POS simulation states
  const [posItems, setPosItems] = useState([
    { name: 'Organic Cold Brew 250ml', code: 'BAR-9801', price: 180, qty: 1 },
    { name: 'Artisan Sourdough Toast', code: 'BAR-4421', price: 220, qty: 1 },
  ]);
  const [posSimulatingScan, setPosSimulatingScan] = useState(false);
  const [posPrintedNotice, setPosPrintedNotice] = useState(false);

  // Interactive AI Assist simulation states
  const [assistMessages, setAssistMessages] = useState([
    { sender: 'user', text: 'Hi! Can I book an architecture consultation for my retail ERP tomorrow at 3 PM?' },
    { sender: 'ai', text: 'Hello! Certainly. I have locked your slot with our Lead Solutions Architect for tomorrow at 3:00 PM IST. A calendar invite & WhatsApp confirmation have been dispatched!' },
  ]);
  const [assistInput, setAssistInput] = useState('');
  const [assistTyping, setAssistTyping] = useState(false);

  // Interactive ContentFlow AI states
  const [cfActiveChannel, setCfActiveChannel] = useState<'linkedin' | 'instagram' | 'x'>('linkedin');
  const [cfCopied, setCfCopied] = useState(false);

  // Scroll spy references for each of the 4 product sections
  const posRef = useRef<HTMLDivElement>(null);
  const assistRef = useRef<HTMLDivElement>(null);
  const contentflowRef = useRef<HTMLDivElement>(null);
  const erpRef = useRef<HTMLDivElement>(null);

  // Smooth, flicker-free scroll position observer with requestAnimationFrame
  const isManualScrolling = useRef(false);
  const manualScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (isManualScrolling.current) return;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cards: { id: ProductKey; el: HTMLDivElement | null }[] = [
          { id: 'pos', el: posRef.current },
          { id: 'assist', el: assistRef.current },
          { id: 'contentflow', el: contentflowRef.current },
          { id: 'erp', el: erpRef.current },
        ];

        // Optimal focal line in viewport (38% from top)
        const focalLine = window.innerHeight * 0.38;
        let closestId: ProductKey = 'pos';
        let minDistance = Infinity;

        cards.forEach(({ id, el }) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          // Distance from card center to focal line
          const cardCenter = rect.top + rect.height * 0.5;
          const distance = Math.abs(cardCenter - focalLine);
          if (distance < minDistance) {
            minDistance = distance;
            closestId = id;
          }
        });

        setActiveTab((prev) => (prev !== closestId ? closestId : prev));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial positioning check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
      if (manualScrollTimer.current) clearTimeout(manualScrollTimer.current);
    };
  }, []);

  const handleSimulateScan = () => {
    soundFX.playClick();
    setPosSimulatingScan(true);
    setTimeout(() => {
      const extraItems = [
        { name: 'Belgian Truffle Pastry', code: 'BAR-7712', price: 190, qty: 1 },
        { name: 'Specialty Espresso Shot', code: 'BAR-3309', price: 140, qty: 1 },
      ];
      const nextItem = extraItems[posItems.length % extraItems.length];
      setPosItems((prev) => [...prev, nextItem]);
      setPosSimulatingScan(false);
      soundFX.playChime();
    }, 450);
  };

  const handleSimulatePrint = () => {
    soundFX.playClick();
    setPosPrintedNotice(true);
    setTimeout(() => setPosPrintedNotice(false), 3000);
  };

  const handleResetPos = () => {
    soundFX.playClick();
    setPosItems([
      { name: 'Organic Cold Brew 250ml', code: 'BAR-9801', price: 180, qty: 1 },
      { name: 'Artisan Sourdough Toast', code: 'BAR-4421', price: 220, qty: 1 },
    ]);
  };

  const handleSendAssistMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assistInput.trim()) return;
    soundFX.playClick();
    const userMsg = assistInput.trim();
    setAssistMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setAssistInput('');
    setAssistTyping(true);

    setTimeout(() => {
      soundFX.playChime();
      setAssistMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Got it! I have recorded your inquiry regarding "${userMsg.slice(0, 32)}...". Our technical team will reach out via WhatsApp immediately.`,
        },
      ]);
      setAssistTyping(false);
    }, 900);
  };

  const posTotal = posItems.reduce((acc, it) => acc + it.price * it.qty, 0);

  const scrollToProduct = (id: ProductKey) => {
    soundFX.playClick();
    setActiveTab(id);
    isManualScrolling.current = true;
    if (manualScrollTimer.current) clearTimeout(manualScrollTimer.current);
    manualScrollTimer.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 750);

    const elementMap: Record<ProductKey, React.RefObject<HTMLDivElement>> = {
      pos: posRef,
      assist: assistRef,
      contentflow: contentflowRef,
      erp: erpRef,
    };
    const target = elementMap[id]?.current;
    if (target) {
      const navOffset = 150;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <LuxurySectionHeading
        badge="Autonomous Product Showcase"
        title={
          <span>
            Software Built to Scale,{' '}
            <span className="font-serif italic font-normal tracking-wide underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Tested in Production.
            </span>
          </span>
        }
        subtitle="Scroll through the 4 live products below. The showcase automatically switches as you scroll, demonstrating our sub-second billing engine, WhatsApp AI assistant, and autonomous marketing pipelines."
        align="center"
        className="mb-14"
      />

      {/* Pinned Scroll Progress Indicator (Fluid MotionSites Glass Pill) */}
      <div className="sticky top-20 z-30 flex justify-center mb-14 sm:mb-16 py-2">
        <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/90 dark:bg-[#070512]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.25)] max-w-full overflow-x-auto scrollbar-none">
          {PRODUCT_LIST.map((prod) => {
            const isActive = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => scrollToProduct(prod.id)}
                className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-showcase-pill-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-600/30 border border-violet-400/30 -z-0"
                  />
                )}
                <span className={`relative z-10 font-mono text-[10px] ${isActive ? 'text-white/80' : 'text-slate-400 dark:text-zinc-500'}`}>
                  {prod.num}
                </span>
                <span className="relative z-10">{prod.label}</span>
                <span
                  className={`relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white border border-white/20 opacity-100 inline-block'
                      : 'hidden sm:inline-block bg-transparent text-slate-400/70 dark:text-zinc-500/70 border border-transparent'
                  }`}
                >
                  {prod.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Layout: Scroll Story on Left, Sticky Live Console on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        {/* Left Column: 4 Scroll-Driven Product Sections (lg:col-span-6) */}
        <div className="lg:col-span-6 space-y-24 sm:space-y-36 py-4">
          {/* PRODUCT 1: PYROW POS */}
          <div
            ref={posRef}
            data-product-id="pos"
            className={`p-6 sm:p-10 rounded-3xl transition-all duration-300 ease-out border ${
              activeTab === 'pos'
                ? 'bg-white dark:bg-obsidian-900 border-emerald-500/60 shadow-[0_15px_35px_-10px_rgba(16,185,129,0.18)] dark:shadow-xl dark:shadow-emerald-500/10'
                : 'bg-white/50 dark:bg-obsidian-900/30 border-slate-200/70 dark:border-white/5 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                01 / RETAIL & BILLING
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">0.8s Offline Sync</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mb-3">
              Pyrow POS Retail Engine
            </h3>

            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
              Designed for supermarkets, high-footfall grocery chains, and restaurant QSR counters. Operates at <strong>sub-second 0.8s speed</strong> completely offline with SQLite and auto-syncs when reconnected. Zero frozen queues during internet outages.
            </p>

            <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-0.8s Barcode scan to thermal invoice print</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Offline resilience with local database sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Multi-store inventory auto-sync & barcode generator</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenDemoRequest) onOpenDemoRequest('Pyrow POS Retail Suite');
                else navigate('/products');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <span>Request POS Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 2: PYROW ASSIST */}
          <div
            ref={assistRef}
            data-product-id="assist"
            className={`p-6 sm:p-10 rounded-3xl transition-all duration-300 ease-out border ${
              activeTab === 'assist'
                ? 'bg-white dark:bg-obsidian-900 border-violet-500/60 shadow-[0_15px_35px_-10px_rgba(139,92,246,0.18)] dark:shadow-xl dark:shadow-violet-500/10'
                : 'bg-white/50 dark:bg-obsidian-900/30 border-slate-200/70 dark:border-white/5 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono font-bold text-violet-600 dark:text-violet-400 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                02 / AI CONVERSATIONAL AGENT
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">Meta Cloud API</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mb-3">
              Pyrow Assist AI Agent
            </h3>

            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
              Never lose an inquiry outside business hours. Integrates directly with the official <strong>Meta WhatsApp Cloud API</strong> and your website to answer queries, qualify leads, and schedule appointments on your calendar 24/7.
            </p>

            <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
                <span>Multilingual natural NLP (English, Tamil, Hindi)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
                <span>Direct Google Calendar & CRM booking integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
                <span>Meta Verified WhatsApp Business Green Tick assistance</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenDemoRequest) onOpenDemoRequest('Pyrow Assist AI Engine');
                else navigate('/products');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <span>Request AI Assistant Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 3: CONTENTFLOW AI */}
          <div
            ref={contentflowRef}
            data-product-id="contentflow"
            className={`p-6 sm:p-10 rounded-3xl transition-all duration-300 ease-out border ${
              activeTab === 'contentflow'
                ? 'bg-white dark:bg-obsidian-900 border-fuchsia-500/60 shadow-[0_15px_35px_-10px_rgba(217,70,239,0.18)] dark:shadow-xl dark:shadow-fuchsia-500/10'
                : 'bg-white/50 dark:bg-obsidian-900/30 border-slate-200/70 dark:border-white/5 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20">
                03 / MARKETING AUTOMATION
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">One-Prompt Engine</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mb-3">
              ContentFlow AI Strategy
            </h3>

            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
              With one prompt, ContentFlow AI generates platform-optimized content for LinkedIn, Instagram, and Twitter in your authentic brand voice, complete with hashtags and scheduling hooks.
            </p>

            <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0" />
                <span>One-prompt multi-channel content auto-adaptation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0" />
                <span>Trained on high-converting B2B & retail copywriting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-500 shrink-0" />
                <span>Visual social media auto-publishing calendar</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenDemoRequest) onOpenDemoRequest('ContentFlow AI');
                else navigate('/products');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <span>Request Marketing Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 4: PYROW FLOW ERP */}
          <div
            ref={erpRef}
            data-product-id="erp"
            className={`p-6 sm:p-10 rounded-3xl transition-all duration-300 ease-out border ${
              activeTab === 'erp'
                ? 'bg-white dark:bg-obsidian-900 border-indigo-500/60 shadow-[0_15px_35px_-10px_rgba(99,102,241,0.18)] dark:shadow-xl dark:shadow-indigo-500/10'
                : 'bg-white/50 dark:bg-obsidian-900/30 border-slate-200/70 dark:border-white/5 opacity-75 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                04 / ENTERPRISE ERP
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">PostgreSQL 17</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mb-3">
              Pyrow Flow ERP Suite
            </h3>

            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
              Multi-warehouse inventory, automated employee payroll with biometric sync, vendor purchase reconciliation, and real-time executive P&L analytics — customized to your exact operations.
            </p>

            <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Multi-tenant isolated schemas with daily automated snapshots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Biometric attendance & automated 1-click payroll slips</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>100% intellectual property & source code handover on Day 1</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenDemoRequest) onOpenDemoRequest('Pyrow Flow ERP');
                else navigate('/products');
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <span>Request ERP Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Sticky Live Simulated Software Console (MotionSites Standard) */}
        {/* Pins to top on scroll and automatically displays the UI of whichever product the user is currently scrolling past! */}
        <div className="lg:col-span-6 lg:sticky lg:top-44 pt-2 sm:pt-4">
          <div className="rounded-[32px] bg-white/95 dark:bg-[#070512]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/[0.08] p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(124,58,237,0.15)] dark:shadow-[0_0_80px_-20px_rgba(124,58,237,0.3)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 dark:via-white/20 to-transparent" />
            <AnimatePresence mode="wait" initial={false}>
              {/* CONSOLE VIEW: POS */}
              {activeTab === 'pos' && (
                <motion.div
                  key="pos-console"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="space-y-4 font-mono text-slate-800 dark:text-slate-100"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        PYROW POS // SUB-SECOND ENGINE
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-zinc-400">LATENCY: 0.78s</span>
                  </div>

                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {posItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 text-xs transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Barcode className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">{item.name}</div>
                            <div className="text-[10px] text-slate-500 dark:text-zinc-400">{item.code}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-600 dark:text-emerald-400">₹{item.price}</div>
                          <div className="text-[10px] text-slate-500 dark:text-zinc-500">Qty: {item.qty}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between font-sans">
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-mono font-bold">Net Payable Total</div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white">₹{posTotal.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="text-right text-[11px] text-emerald-600 dark:text-emerald-400">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono font-semibold">
                        UPI QR & 80mm Print
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={handleSimulateScan}
                      disabled={posSimulatingScan}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-emerald-600/20"
                    >
                      <Barcode className="w-4 h-4" />
                      <span>{posSimulatingScan ? 'Scanning...' : 'Test Barcode Scan'}</span>
                    </button>
                    <button
                      onClick={handleSimulatePrint}
                      className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all border border-slate-200 dark:border-transparent"
                    >
                      <Printer className="w-4 h-4 text-slate-600 dark:text-zinc-300" />
                      <span>Print</span>
                    </button>
                    <button
                      onClick={handleResetPos}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-transparent"
                      title="Reset POS"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {posPrintedNotice && (
                    <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs text-center font-sans">
                      ✓ Thermal receipt printed & WhatsApp digital bill dispatched!
                    </div>
                  )}
                </motion.div>
              )}

              {/* CONSOLE VIEW: ASSIST */}
              {activeTab === 'assist' && (
                <motion.div
                  key="assist-console"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="space-y-3 font-sans"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-bold text-slate-900 dark:text-white">Pyrow Assist // Live Cloud Chat</span>
                    </div>
                    <span className="text-slate-500 dark:text-zinc-400 text-[10px]">Meta API v21.0</span>
                  </div>

                  <div className="h-[230px] overflow-y-auto space-y-3 py-2 pr-1 text-xs">
                    {assistMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-2xl ${
                            msg.sender === 'user'
                              ? 'bg-violet-600 text-white rounded-tr-none shadow-md'
                              : 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-zinc-100 rounded-tl-none border border-slate-200 dark:border-white/10'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {assistTyping && (
                      <div className="flex justify-start">
                        <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-zinc-400 rounded-tl-none border border-slate-200 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-400 animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
                          <span>Pyrow Assist is typing...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSendAssistMsg} className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-white/10">
                    <input
                      type="text"
                      value={assistInput}
                      onChange={(e) => setAssistInput(e.target.value)}
                      placeholder="Type a message to test response..."
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 font-sans"
                    />
                    <button
                      type="submit"
                      className="p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white cursor-pointer transition-all shadow-md shadow-violet-600/20"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* CONSOLE VIEW: CONTENTFLOW */}
              {activeTab === 'contentflow' && (
                <motion.div
                  key="contentflow-console"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="space-y-4 font-sans"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCfActiveChannel('linkedin')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                          cfActiveChannel === 'linkedin'
                            ? 'bg-fuchsia-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        LinkedIn
                      </button>
                      <button
                        onClick={() => setCfActiveChannel('instagram')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                          cfActiveChannel === 'instagram'
                            ? 'bg-fuchsia-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        Instagram
                      </button>
                      <button
                        onClick={() => setCfActiveChannel('x')}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                          cfActiveChannel === 'x'
                            ? 'bg-fuchsia-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                      >
                        X Post
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setCfCopied(true);
                        setTimeout(() => setCfCopied(false), 2000);
                      }}
                      className="text-xs text-fuchsia-600 dark:text-fuchsia-400 hover:underline flex items-center gap-1 cursor-pointer font-mono font-semibold"
                    >
                      {cfCopied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{cfCopied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-800 dark:text-zinc-300 leading-relaxed min-h-[170px]">
                    {cfActiveChannel === 'linkedin' && (
                      <p>
                        🚀 Most retail founders spend 14 hours a week stuck in manual spreadsheets. Here is the automation stack we deployed for a multi-store retailer that reclaimed 92% of their team’s time:<br /><br />
                        1️⃣ Sub-second offline POS syncing 24 stores<br />
                        2️⃣ 24/7 WhatsApp AI routing inquiries in under 1.2s<br />
                        3️⃣ Automated invoice reconciliation with zero spreadsheets.<br /><br />
                        #RetailTech #Automation #SaaS #PyrowTechnologies
                      </p>
                    )}
                    {cfActiveChannel === 'instagram' && (
                      <p>
                        Stop losing customers while your internet is down! 🚨 Check out how our offline-first retail engine processes barcode transactions in 0.8 seconds without ever freezing the queue. Drop &quot;DEMO&quot; in the DMs for instant access! ⚡️ #RetailHacks #StoreOperations
                      </p>
                    )}
                    {cfActiveChannel === 'x' && (
                      <p>
                        1/5 Off-the-shelf SaaS forces you to change your workflow to fit the tool. Custom software does the opposite: 100% data ownership, sub-second latency, zero per-seat fees. Breakdown 🧵👇
                      </p>
                    )}
                  </div>

                  <div className="p-2.5 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs text-fuchsia-700 dark:text-fuchsia-300 flex items-center justify-between font-mono">
                    <span>Generated in 0.64s • Score: 98/100</span>
                    <span className="font-bold">Ready to Publish</span>
                  </div>
                </motion.div>
              )}

              {/* CONSOLE VIEW: ERP */}
              {activeTab === 'erp' && (
                <motion.div
                  key="erp-console"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="space-y-4 font-mono text-slate-800 dark:text-slate-100"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 text-xs">
                    <span className="font-bold text-slate-900 dark:text-white">Pyrow Flow // Multi-Branch Metrics</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">PostgreSQL 17</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400">Total Revenue MTD</div>
                      <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-sans">₹42.8 Lakhs</div>
                      <div className="text-[9px] text-slate-500 dark:text-zinc-500 font-sans">+18.4% vs last month</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400">Warehouse Nodes</div>
                      <div className="text-xl font-black text-slate-900 dark:text-white font-sans">18,420 Units</div>
                      <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-sans">All Nodes In Stock</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs">
                    <div className="text-[11px] font-bold text-slate-800 dark:text-zinc-300 mb-2 font-sans">Live Automated Operations Log</div>
                    <div className="space-y-1.5 text-[11px] text-slate-600 dark:text-zinc-400">
                      <div className="flex justify-between">
                        <span>• Branch 03 Inventory Auto-Reconciled</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Sync (0.4s)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• GST E-Way Bill Generated for Batch #9842</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Dispatched</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Automated Daily PostgreSQL Snapshot</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">✓ AES-256</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
