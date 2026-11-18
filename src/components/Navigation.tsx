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
  const { navigate } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-300 pointer-events-auto ${
            scrolled
              ? 'backdrop-blur-xl bg-white/90 dark:bg-obsidian-950/85 border border-slate-200/90 dark:border-white/10 shadow-lg dark:shadow-2xl dark:shadow-black/80 my-2 px-4 sm:px-6 py-2.5'
              : 'backdrop-blur-lg bg-white/75 dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 my-3 sm:my-4 px-4 sm:px-6 py-3 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo with Sizing & Glow */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNav('/')}
            >
              <FlameLogo variant="full" size="md" />
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
                            Our purpose & competitive matrix
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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

              {/* Careers */}
              <button
                onClick={() => handleNav('/careers')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                Careers
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

              {/* Mobile Drawer Navigation with shadcn Sheet */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger
                  className="p-2 rounded-full bg-slate-100 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 lg:hidden cursor-pointer"
                  aria-label="Toggle Navigation Menu"
                >
                  <Menu className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[380px] p-6 bg-white dark:bg-obsidian-900 border-l border-slate-200 dark:border-white/10 z-50 overflow-y-auto">
                  <SheetHeader className="mb-4">
                    <SheetTitle className="flex items-center text-left">
                      <FlameLogo />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-2">
                    {/* Mobile Home */}
                    <button
                      onClick={() => handleNav('/')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                    >
                      <span>Home</span>
                      <ArrowRight className="w-4 h-4 text-violet-600" />
                    </button>

                    {/* Mobile Company Accordion */}
                    <div className="border-b border-slate-100 dark:border-white/5 pb-1">
                      <button
                        onClick={() => toggleMobileAccordion('company')}
                        className="w-full text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                      >
                        <span>Company</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                            openMobileAccordion === 'company' ? 'rotate-180 text-violet-600' : ''
                          }`}
                        />
                      </button>
                      {openMobileAccordion === 'company' && (
                        <div className="pl-3 pb-2 space-y-2 border-l-2 border-violet-500/20 my-1">
                          <button
                            onClick={() => handleNav('/about')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            About us
                          </button>
                          <button
                            onClick={() => handleNav('/founder')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Founder
                          </button>
                          <button
                            onClick={() => handleNav('/philosophy')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Philosophy
                          </button>
                          <button
                            onClick={() => handleNav('/team')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Team
                          </button>
                          <button
                            onClick={() => handleNav('/why-we-exist')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Why we exist
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Mobile Products Accordion */}
                    <div className="border-b border-slate-100 dark:border-white/5 pb-1">
                      <button
                        onClick={() => toggleMobileAccordion('products')}
                        className="w-full text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                      >
                        <span>Products</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                            openMobileAccordion === 'products' ? 'rotate-180 text-violet-600' : ''
                          }`}
                        />
                      </button>
                      {openMobileAccordion === 'products' && (
                        <div className="pl-3 pb-2 space-y-2 border-l-2 border-violet-500/20 my-1">
                          <button
                            onClick={() => handleNav('/products')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            All products
                          </button>
                          <button
                            onClick={() => handleNav('/solutions')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Solutions
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Mobile Work Accordion */}
                    <div className="border-b border-slate-100 dark:border-white/5 pb-1">
                      <button
                        onClick={() => toggleMobileAccordion('work')}
                        className="w-full text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                      >
                        <span>Work</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                            openMobileAccordion === 'work' ? 'rotate-180 text-violet-600' : ''
                          }`}
                        />
                      </button>
                      {openMobileAccordion === 'work' && (
                        <div className="pl-3 pb-2 space-y-2 border-l-2 border-violet-500/20 my-1">
                          <button
                            onClick={() => handleNav('/portfolio')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Clients & Work
                          </button>
                          <button
                            onClick={() => handleNav('/case-studies')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Case studies
                          </button>
                          <button
                            onClick={() => handleNav('/portfolio')}
                            className="block text-xs text-slate-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-white py-1 cursor-pointer"
                          >
                            Portfolio
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Mobile Blogs */}
                    <button
                      onClick={() => handleNav('/blogs')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                    >
                      <span>Blogs</span>
                      <ArrowRight className="w-4 h-4 text-violet-600" />
                    </button>

                    {/* Mobile Contact */}
                    <button
                      onClick={() => handleNav('/contact')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                    >
                      <span>Contact</span>
                      <ArrowRight className="w-4 h-4 text-violet-600" />
                    </button>

                    {/* Mobile Careers */}
                    <button
                      onClick={() => handleNav('/careers')}
                      className="text-left text-sm font-semibold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between cursor-pointer hover:text-violet-600 transition-colors"
                    >
                      <span>Careers</span>
                      <ArrowRight className="w-4 h-4 text-violet-600" />
                    </button>

                    <div className="pt-4 flex flex-col gap-2.5">
                      <MagneticButton
                        variant="primary"
                        size="md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenStrategyCall();
                        }}
                        className="w-full justify-center"
                      >
                        Get quote
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
                        Project Estimator Desk
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
