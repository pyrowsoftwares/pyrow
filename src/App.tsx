import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { IndustrySolutions } from './components/IndustrySolutions';
import { CaseStudies } from './components/CaseStudies';
import { TechRadar } from './components/TechRadar';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { AboutPyrow } from './components/AboutPyrow';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScopeCalculatorModal } from './components/Modals/ScopeCalculatorModal';
import { StrategyCallModal } from './components/Modals/StrategyCallModal';
import { DemoRequestModal } from './components/Modals/DemoRequestModal';
import { CommandPalette } from './components/ui/CommandPalette';
import { ArrowUp, PhoneCall, Sparkles } from 'lucide-react';
import { soundFX } from './components/ui/sound-effects';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scopeModalOpen, setScopeModalOpen] = useState(false);
  const [strategyCallModalOpen, setStrategyCallModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSoftwareName, setDemoSoftwareName] = useState('Enterprise ERP Software');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize theme from localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('pyrow-theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('pyrow-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Kinetic cursor tracking & scroll top visibility
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Keyboard shortcut (⌘K or Ctrl+K)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenDemoRequest = (softwareTitle?: string) => {
    soundFX.playClick();
    if (softwareTitle) setDemoSoftwareName(softwareTitle);
    setDemoModalOpen(true);
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-obsidian text-slate-900 dark:text-zinc-100 selection:bg-ember-500 selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
      {/* Kinetic Ambient Glow following mouse */}
      <div
        className="fixed pointer-events-none rounded-full blur-[120px] transition-transform duration-75 ease-out -z-10"
        style={{
          width: '420px',
          height: '420px',
          transform: `translate3d(${cursorPos.x - 210}px, ${cursorPos.y - 210}px, 0)`,
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(255, 77, 0, 0.08) 0%, rgba(0, 112, 243, 0.04) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 77, 0, 0.05) 0%, rgba(0, 112, 243, 0.03) 50%, transparent 70%)',
        }}
      />

      {/* Global Navigation Bar */}
      <Navigation
        onOpenScopeCalculator={() => setScopeModalOpen(true)}
        onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        onOpenDemoRequest={handleOpenDemoRequest}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections: Seamless, natural, continuous flow */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
          onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        />

        {/* Section 2: Services */}
        <Services
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
          onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        />

        {/* Section 3: How We Work (4 Simple Steps) */}
        <HowItWorks
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
          onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        />

        {/* Section 4: Industry-Specific Software Solutions */}
        <IndustrySolutions
          onOpenDemoRequest={handleOpenDemoRequest}
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
        />

        {/* Section 5: Case Studies (Real Stories & Client Growth) */}
        <CaseStudies
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
        />

        {/* Section 6: ROI Calculator */}
        <RoiCalculator
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
        />

        {/* Section 7: Technology Stack */}
        <TechRadar />

        {/* Section 8: Why Choose Pyrow (Comparison) */}
        <ComparisonMatrix />

        {/* Section 9: About Pyrow & Leadership */}
        <AboutPyrow
          onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        />

        {/* Section 10: Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* Section 11: Project Estimator & Contact */}
        <ProjectEstimator
          onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
          onOpenScopeCalculator={() => setScopeModalOpen(true)}
        />
      </main>

      {/* Section 12: Footer */}
      <Footer
        onOpenScopeCalculator={() => setScopeModalOpen(true)}
        onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        onOpenDemoRequest={handleOpenDemoRequest}
      />

      {/* Floating Scroll-To-Top & Quick Action Pill */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <button
            onClick={() => {
              soundFX.playClick();
              setStrategyCallModalOpen(true);
            }}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold text-xs shadow-xl hover:scale-105 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-ember-500" />
            <span>Book a Call</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white shadow-xl hover:scale-110 hover:border-ember-500 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-ember-500" />
          </button>
        </div>
      )}

      {/* Global Interactive Modals */}
      <ScopeCalculatorModal
        isOpen={scopeModalOpen}
        onClose={() => setScopeModalOpen(false)}
        onOpenStrategyCall={() => {
          setScopeModalOpen(false);
          setStrategyCallModalOpen(true);
        }}
      />

      <StrategyCallModal
        isOpen={strategyCallModalOpen}
        onClose={() => setStrategyCallModalOpen(false)}
      />

      <DemoRequestModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        softwareName={demoSoftwareName}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenScopeCalculator={() => setScopeModalOpen(true)}
        onOpenStrategyCall={() => setStrategyCallModalOpen(true)}
        onOpenDemoRequest={handleOpenDemoRequest}
      />
    </div>
  );
}
