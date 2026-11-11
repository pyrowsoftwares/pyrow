import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import {
  ChevronDown,
  Volume2,
  VolumeX,
  Search,
  Sparkles,
  Laptop,
  TrendingUp,
  Cpu,
  Smartphone,
  Database,
  Users,
  Shield,
  Layers,
  Award,
  PhoneCall,
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';
import { FlameLogo } from './ui/FlameLogo';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface NavigationProps {
  onOpenStrategyCall: () => void;
  onOpenDemoRequest: (name?: string) => void;
  onOpenCommandPalette: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenStrategyCall,
  onOpenDemoRequest,
  onOpenCommandPalette,
  theme,
  onToggleTheme,
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(soundFX.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    let lastScrolled = window.scrollY > 20;
    setScrolled(lastScrolled);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundFX.toggle();
    setSoundEnabled(state);
  };

  const scrollTo = (id: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
            scrolled
              ? 'backdrop-blur-xl bg-white/90 dark:bg-obsidian-950/85 border border-slate-200/90 dark:border-white/10 shadow-lg dark:shadow-2xl dark:shadow-black/80 my-2 px-4 sm:px-6 py-2.5'
              : 'backdrop-blur-lg bg-white/75 dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 my-3 sm:my-4 px-4 sm:px-6 py-3 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo with Sizing & Glow */}
            <div className="flex items-center gap-3">
              <FlameLogo variant="full" size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveMenu('services');
                  soundFX.playHover();
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => scrollTo('services')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors ${
                    activeMenu === 'services'
                      ? 'text-ember-500 bg-slate-100 dark:bg-white/5'
                      : 'text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === 'services' ? 'rotate-180 text-ember-500' : 'text-slate-400 dark:text-zinc-400'
                    }`}
                  />
                </button>

                {/* Mega-Menu: Services (4 Columns) */}
                {activeMenu === 'services' && (
                  <div className="absolute top-full -left-28 pt-3 w-[780px] xl:w-[860px] animate-in fade-in zoom-in-95 duration-150">
                    <div className="glass-panel p-6 rounded-2xl bg-white/95 dark:bg-obsidian-900/95 border border-slate-200 dark:border-white/10 shadow-2xl">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-white/10">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                          <Sparkles className="w-3.5 h-3.5 text-ember-500" />
                          Engineering & Hyper-Growth Matrix
                        </div>
                        <span className="text-[11px] font-mono text-ember-500 font-bold">Next-Gen Delivery SLA</span>
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        {/* Web Development */}
                        <div
                          onClick={() => scrollTo('services')}
                          className="group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-ember-500/30 cursor-pointer transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue group-hover:scale-110 transition-transform">
                              <Laptop className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyber-blue/15 text-cyber-blue">
                              Sub-0.6s
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-ember-500 transition-colors">
                            Web Dev & E-Com
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 line-clamp-3">
                            Bespoke UI/UX, Shopify Plus, Headless Next.js, and 95+ PageSpeed revamps.
                          </p>
                        </div>

                        {/* Digital Marketing */}
                        <div
                          onClick={() => scrollTo('services')}
                          className="group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-ember-500/30 cursor-pointer transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 rounded-lg bg-ember-500/10 text-ember-500 group-hover:scale-110 transition-transform">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-ember-500/15 text-ember-500">
                              High ROAS
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-ember-500 transition-colors">
                            Digital Marketing
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 line-clamp-3">
                            Meta & Google Ads, SEO dominance, CXO branding, and AI conversational ads.
                          </p>
                        </div>

                        {/* Custom Software */}
                        <div
                          onClick={() => scrollTo('services')}
                          className="group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-ember-500/30 cursor-pointer transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                              <Cpu className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-600 dark:text-purple-400">
                              Cloud-Native
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-ember-500 transition-colors">
                            Custom Software
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 line-clamp-3">
                            Enterprise distributed backends, microservices, APIs, and desktop Tauri apps.
                          </p>
                        </div>

                        {/* Mobile Apps */}
                        <div
                          onClick={() => scrollTo('services')}
                          className="group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-ember-500/30 cursor-pointer transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 rounded-lg bg-flare-amber/10 text-flare-amber group-hover:scale-110 transition-transform">
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-flare-amber/15 text-flare-amber">
                              60fps Native
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-ember-500 transition-colors">
                            Mobile Engineering
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 line-clamp-3">
                            Native Swift & Kotlin, cross-platform Flutter, and ASO lifecycle growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setActiveMenu('industries');
                  soundFX.playHover();
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => scrollTo('industries')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors ${
                    activeMenu === 'industries'
                      ? 'text-ember-500 bg-slate-100 dark:bg-white/5'
                      : 'text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === 'industries' ? 'rotate-180 text-ember-500' : 'text-slate-400 dark:text-zinc-400'
                    }`}
                  />
                </button>

                {/* Mega-Menu: Industries */}
                {activeMenu === 'industries' && (
                  <div className="absolute top-full -left-48 pt-3 w-[680px] animate-in fade-in zoom-in-95 duration-150">
                    <div className="glass-panel p-5 rounded-2xl bg-white/95 dark:bg-obsidian-900/95 border border-slate-200 dark:border-white/10 shadow-2xl">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-white/10">
                        <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                          <Database className="w-3.5 h-3.5 text-cyber-blue" />
                          11 Specialized Enterprise Management Suites
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-400">Click to preview demo</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          { title: 'ERP Software Suite', sub: 'Unified supply chain & multi-branch finance' },
                          { title: 'CRM & Pipeline Intelligence', sub: 'Predictive deal health & omnichannel sync' },
                          { title: 'Inventory & Stock Engine', sub: 'Multi-warehouse & predictive restock' },
                          { title: 'Sub-Second Billing & POS', sub: 'Offline-sync & instant tax invoices' },
                          { title: 'WhatsApp Business API Bot', sub: 'Official Meta Green Tick conversational AI' },
                          { title: 'School & Campus ERP', sub: 'RFID attendance & parent mobile portal' },
                          { title: 'Zero-Leakage LMS', sub: 'Sub-second lead capture & auto-calls' },
                          { title: 'Hospital & Healthcare EMR', sub: 'HIPAA/NABH-ready doctor OPD & lab POS' },
                          { title: 'Gym & Fitness Management', sub: 'Biometric gate lock & recurring MRR' },
                          { title: 'Luxury Salon & Spa Booking', sub: 'Chair allocation & stylist commission' },
                        ].map((ind) => (
                          <div
                            key={ind.title}
                            onClick={() => {
                              scrollTo('industries');
                              onOpenDemoRequest(ind.title);
                            }}
                            className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-ember-500/20 cursor-pointer flex items-start gap-2.5 transition-colors group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-ember-500 mt-1.5 group-hover:scale-150 transition-transform" />
                            <div>
                              <div className="font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-ember-600 dark:group-hover:text-white transition-colors">
                                {ind.title}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1">{ind.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* How It Works Link */}
              <button
                onClick={() => scrollTo('how-it-works')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors"
              >
                How It Works
              </button>

              {/* Case Studies Link */}
              <button
                onClick={() => scrollTo('case-studies')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors"
              >
                Case Studies
              </button>

              {/* Contact Link */}
              <button
                onClick={() => scrollTo('estimator')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Right Action Controls: Theme Switcher, Search, Sound, CTAs */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Light / Dark Mode Toggle */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  onToggleTheme();
                }}
                className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-all hover:scale-105"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 fill-slate-700/20" />
                )}
              </button>

              {/* Quick Command Search Pill (Linear.app style) */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenCommandPalette();
                }}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 text-xs transition-colors"
                title="Open Command Menu (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd className="text-[10px] font-mono px-1 py-0.2 rounded bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10">
                  ⌘K
                </kbd>
              </button>

              {/* Sound FX Toggle Pill */}
              <button
                onClick={toggleSound}
                className={`p-2 rounded-full border transition-all ${
                  soundEnabled
                    ? 'bg-ember-500/15 border-ember-500/50 text-ember-500 shadow-sm'
                    : 'bg-slate-100 dark:bg-obsidian-800 border-slate-200 dark:border-white/10 text-slate-400 dark:text-zinc-500'
                }`}
                title={soundEnabled ? 'Mute audio feedback' : 'Enable futuristic sound FX'}
                aria-label="Toggle Sound Effects"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* CTA 1: Schedule Strategy Call (Desktop & Tablet) */}
              <MagneticButton
                variant="primary"
                size="sm"
                onClick={onOpenStrategyCall}
                icon={<Sparkles className="w-3.5 h-3.5" />}
                className="hidden sm:inline-flex"
              >
                Schedule Call
              </MagneticButton>

              {/* Mobile Drawer Navigation with shadcn Sheet */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger
                  className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 lg:hidden cursor-pointer"
                  aria-label="Toggle Navigation Menu"
                >
                  <Menu className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[380px] p-6 bg-white dark:bg-obsidian-900 border-l border-slate-200 dark:border-white/10 z-50">
                  <SheetHeader className="mb-6">
                    <SheetTitle className="flex items-center gap-2 text-left">
                      <FlameLogo />
                      <span className="font-display font-black text-lg text-slate-900 dark:text-white">PYROW</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => scrollTo('services')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-ember-500 transition-colors"
                    >
                      <span>Services Matrix</span>
                      <ArrowRight className="w-4 h-4 text-ember-500" />
                    </button>
                    <button
                      onClick={() => scrollTo('industries')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-cyber-blue transition-colors"
                    >
                      <span>11 Industry Solutions</span>
                      <ArrowRight className="w-4 h-4 text-cyber-blue" />
                    </button>
                    <button
                      onClick={() => scrollTo('how-it-works')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-emerald-500 transition-colors"
                    >
                      <span>How We Partner (4 Steps)</span>
                      <ArrowRight className="w-4 h-4 text-emerald-500" />
                    </button>
                    <button
                      onClick={() => scrollTo('case-studies')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-amber-500 transition-colors"
                    >
                      <span>Case Studies</span>
                      <ArrowRight className="w-4 h-4 text-amber-500" />
                    </button>
                    <button
                      onClick={() => scrollTo('estimator')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-ember-500 transition-colors"
                    >
                      <span>Project Enquiry Desk</span>
                      <ArrowRight className="w-4 h-4 text-ember-500" />
                    </button>

                    <div className="pt-6 flex flex-col gap-2.5">
                      <MagneticButton
                        variant="primary"
                        size="md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenStrategyCall();
                        }}
                        className="w-full justify-center"
                      >
                        Schedule Strategy Call
                      </MagneticButton>
                      <MagneticButton
                        variant="secondary"
                        size="md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          scrollTo('estimator');
                        }}
                        className="w-full justify-center"
                      >
                        Project Enquiry Desk
                      </MagneticButton>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
