import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../context/RouterContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import {
  ChevronDown,
  Search,
  Sparkles,
  Laptop,
  TrendingUp,
  Cpu,
  Smartphone,
  Users,
  Layers,
  Award,
  PhoneCall,
  Menu,
  ArrowRight,
  Sun,
  Moon,
  Building2,
  Compass,
  Lightbulb,
  UserCheck,
  Target,
  Briefcase,
  HelpCircle,
  Clock,
  MessageSquare,
  X,
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
  const { navigate, currentPath } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let lastScrolled = window.scrollY > 20;
    setScrolled(lastScrolled);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
      if (activeMenu) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeMenu]);

  const handleNav = (path: string, scrollToId?: string) => {
    soundFX.playClick();
    setActiveMenu(null);
    setMobileMenuOpen(false);
    navigate(path, scrollToId);
  };

  const scrollTo = (id: string) => {
    handleNav('/', id);
  };

  const toggleMobileAccordion = (key: string) => {
    soundFX.playClick();
    setOpenMobileAccordion(openMobileAccordion === key ? null : key);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] px-2.5 sm:px-6 transition-all duration-300 pointer-events-auto">
        <div
          className={`mx-auto max-w-7xl rounded-2xl sm:rounded-full transition-all duration-300 ${
            scrolled
              ? 'backdrop-blur-2xl bg-white/95 dark:bg-[#070512]/95 border border-slate-200/90 dark:border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] my-1.5 sm:my-2 px-3.5 sm:px-6 py-2.5'
              : 'backdrop-blur-2xl bg-white/90 dark:bg-[#070512]/90 border border-slate-200/90 dark:border-white/[0.08] my-2 sm:my-4 px-3.5 sm:px-6 py-2.5 sm:py-3 shadow-[0_4px_25px_rgba(0,0,0,0.2)]'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo with Sizing & Glow */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0">
              <FlameLogo variant="full" size="md" onClick={() => handleNav('/')} />
            </div>

            {/* Desktop Navigation Links — Z3Connect Architectural Blueprint */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home */}
              <button
                onClick={() => handleNav('/')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Home
              </button>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('company')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === 'company' ? null : 'company')}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeMenu === 'company'
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-50/80 dark:bg-white/5'
                      : 'text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white'
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === 'company' ? 'rotate-180 text-violet-600 dark:text-violet-400' : 'text-slate-400 dark:text-zinc-500'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === 'company' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1.5 w-72 rounded-2xl bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-2xl p-2 z-50"
                    >
                      <button
                        onClick={() => handleNav('/about')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            About us
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Who we are and what drives us
                          </div>
                        </div>
                      </button>

                      {/* Founder (Commented out as requested) */}
                      {/*
                      <button
                        onClick={() => handleNav('/founder')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Lightbulb className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Founder
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            The mind behind Pyrow
                          </div>
                        </div>
                      </button>
                      */}

                      <button
                        onClick={() => handleNav('/philosophy')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Philosophy
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            How we think and build
                          </div>
                        </div>
                      </button>

                      {/* Team (Commented out as requested) */}
                      {/*
                      <button
                        onClick={() => handleNav('/team')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <UserCheck className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Team
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Engineers building the future
                          </div>
                        </div>
                      </button>
                      */}

                      <button
                        onClick={() => handleNav('/why-we-exist')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Target className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Why we exist
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Our purpose & vision
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <button
                onClick={() => handleNav('/services')}
                className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  currentPath === '/services'
                    ? 'text-violet-600 dark:text-violet-400 bg-violet-50/80 dark:bg-white/5'
                    : 'text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white'
                }`}
              >
                Services
              </button>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('products')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === 'products' ? null : 'products')}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeMenu === 'products'
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-50/80 dark:bg-white/5'
                      : 'text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === 'products' ? 'rotate-180 text-violet-600 dark:text-violet-400' : 'text-slate-400 dark:text-zinc-500'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1.5 w-80 rounded-2xl bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-2xl p-2 z-50"
                    >
                      <button
                        onClick={() => handleNav('/products')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            All products
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Our complete product suite
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNav('/solutions')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Solutions
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Industry-specific software
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Work Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMenu('work')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => setActiveMenu(activeMenu === 'work' ? null : 'work')}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeMenu === 'work'
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-50/80 dark:bg-white/5'
                      : 'text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white'
                  }`}
                >
                  <span>Work</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMenu === 'work' ? 'rotate-180 text-violet-600 dark:text-violet-400' : 'text-slate-400 dark:text-zinc-500'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === 'work' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1.5 w-80 rounded-2xl bg-white/95 dark:bg-obsidian-950/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-2xl p-2 z-50"
                    >
                      <button
                        onClick={() => handleNav('/portfolio')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Clients & Work
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            100+ businesses, filter by ERP, SaaS, POS
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNav('/case-studies')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Award className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Case studies
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Real results, real impact
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNav('/portfolio')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-violet-50 dark:bg-white/5 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            Portfolio
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                            Live demos & deployed products
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blogs */}
              <button
                onClick={() => handleNav('/blogs')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Blogs
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNav('/contact')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Contact
              </button>

              {/* Careers (Hidden as requested)
              <button
                onClick={() => handleNav('/careers')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Careers
              </button>
              */}
            </nav>

            {/* Right Action Controls: Theme Switcher, Search, Sound, CTAs */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Light / Dark Mode Toggle */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  onToggleTheme();
                }}
                className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all hover:scale-105 cursor-pointer"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-purple-400 fill-purple-400/20" />
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
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 text-xs transition-colors cursor-pointer"
                title="Open Command Menu (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd className="text-[10px] font-mono px-1 py-0.2 rounded bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10">
                  ⌘K
                </kbd>
              </button>

              {/* CTA 1: Schedule Strategy Call / Get a Quote */}
              <MagneticButton
                variant="primary"
                size="sm"
                onClick={onOpenStrategyCall}
                icon={<Sparkles className="w-3.5 h-3.5" />}
                className="hidden sm:inline-flex"
              >
                Get quote
              </MagneticButton>

              {/* Mobile Drawer Navigation Toggle Button */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="min-w-[40px] min-h-[40px] p-2 rounded-full bg-slate-100 dark:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-zinc-200 lg:hidden cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-sm"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-800 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cinematic MotionSites Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Slide-in Drawer from Right with High-Stiffness Spring */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 w-[88vw] max-w-[370px] bg-white dark:bg-[#070512] border-l border-slate-200/90 dark:border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto overscroll-contain z-10"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80 dark:border-white/10 mb-3">
                  <div className="cursor-pointer">
                    <FlameLogo
                      variant="full"
                      size="sm"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNav('/');
                      }}
                    />
                  </div>
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.08] text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                    aria-label="Close Menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Command Search Bar inside Mobile Drawer */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full mb-3 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10 text-xs text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-violet-500" />
                    <span>Search routes, apps & tools...</span>
                  </div>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-500">
                    ⌘K
                  </kbd>
                </button>

                {/* Navigation Links List */}
                <div className="space-y-1">
                  {/* Home */}
                  <button
                    onClick={() => handleNav('/')}
                    className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      currentPath === '/'
                        ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-800/40'
                        : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>Home</span>
                    <ArrowRight className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </button>

                  {/* Company Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('company')}
                      className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                        ['/about', '/philosophy', '/why-we-exist'].includes(currentPath)
                          ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-300'
                          : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-violet-500" />
                        <span>Company</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMobileAccordion === 'company'
                            ? 'rotate-180 text-violet-600 dark:text-violet-400'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {openMobileAccordion === 'company' && (
                      <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-violet-500/30 ml-4 my-1">
                        <button
                          onClick={() => handleNav('/about')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/about'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>About us</span>
                        </button>
                        <button
                          onClick={() => handleNav('/philosophy')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/philosophy'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Compass className="w-3.5 h-3.5" />
                          <span>Philosophy</span>
                        </button>
                        <button
                          onClick={() => handleNav('/why-we-exist')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/why-we-exist'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Target className="w-3.5 h-3.5" />
                          <span>Why we exist</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Services */}
                  <button
                    onClick={() => handleNav('/services')}
                    className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      currentPath === '/services'
                        ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-800/40'
                        : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-violet-500" />
                      <span>Services</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </button>

                  {/* Products Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('products')}
                      className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                        ['/products', '/solutions'].includes(currentPath)
                          ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-300'
                          : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-violet-500" />
                        <span>Products & Solutions</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMobileAccordion === 'products'
                            ? 'rotate-180 text-violet-600 dark:text-violet-400'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {openMobileAccordion === 'products' && (
                      <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-violet-500/30 ml-4 my-1">
                        <button
                          onClick={() => handleNav('/products')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/products'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Cpu className="w-3.5 h-3.5" />
                          <span>All Products (POS, AI, ERP)</span>
                        </button>
                        <button
                          onClick={() => handleNav('/solutions')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/solutions'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Industry Solutions</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Work & Track Record Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleMobileAccordion('work')}
                      className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                        ['/portfolio', '/case-studies', '/clients'].includes(currentPath)
                          ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-300'
                          : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-violet-500" />
                        <span>Work & Track Record</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openMobileAccordion === 'work'
                            ? 'rotate-180 text-violet-600 dark:text-violet-400'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {openMobileAccordion === 'work' && (
                      <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-violet-500/30 ml-4 my-1">
                        <button
                          onClick={() => handleNav('/portfolio')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/portfolio' || currentPath === '/clients'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>Portfolio & Clients (100+ Track)</span>
                        </button>
                        <button
                          onClick={() => handleNav('/case-studies')}
                          className={`w-full text-left text-xs font-semibold py-2 px-2.5 rounded-lg flex items-center gap-2 ${
                            currentPath === '/case-studies'
                              ? 'text-violet-600 dark:text-violet-400 font-bold bg-violet-50 dark:bg-white/5'
                              : 'text-slate-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400'
                          }`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Case Studies & ROI</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Blogs */}
                  <button
                    onClick={() => handleNav('/blogs')}
                    className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      currentPath === '/blogs'
                        ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-800/40'
                        : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-violet-500" />
                      <span>Engineering Insights & Blogs</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </button>

                  {/* Contact */}
                  <button
                    onClick={() => handleNav('/contact')}
                    className={`w-full text-left text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      currentPath === '/contact'
                        ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-800/40'
                        : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-violet-500" />
                      <span>Contact Us</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </button>
                </div>
              </div>

              {/* Bottom Actions: Theme Switcher + CTA + Direct Contact micro-chips */}
              <div className="pt-4 border-t border-slate-200/90 dark:border-white/10 space-y-3 mt-4">
                {/* Theme Switcher Row */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-zinc-300">Theme</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        if (theme !== 'light') onToggleTheme();
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        theme === 'light'
                          ? 'bg-white text-slate-900 shadow-sm border border-slate-200 font-bold'
                          : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => {
                        if (theme !== 'dark') onToggleTheme();
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        theme === 'dark'
                          ? 'bg-violet-600 text-white shadow-sm font-bold'
                          : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900'
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5" />
                      <span>Dark</span>
                    </button>
                  </div>
                </div>

                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStrategyCall();
                  }}
                  icon={<Sparkles className="w-4 h-4 text-white" />}
                  className="w-full justify-center shadow-lg shadow-violet-600/30"
                >
                  Claim Strategy Call
                </MagneticButton>

                {/* Direct Phone & WhatsApp Micro-chips */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="tel:+917358163590"
                    className="flex-1 py-2.5 px-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-mono font-semibold text-slate-700 dark:text-zinc-300 flex items-center justify-center gap-1.5 hover:text-violet-600 active:scale-95 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                    <span>+91 73581 63590</span>
                  </a>
                  <a
                    href="https://wa.me/917358163590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-1.5 hover:bg-emerald-500/20 active:scale-95 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
