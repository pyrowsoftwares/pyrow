import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { IndustrySolutions } from './components/IndustrySolutions';
import { CaseStudies } from './components/CaseStudies';
import { TechRadar } from './components/TechRadar';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { AboutPyrow } from './components/AboutPyrow';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StrategyCallModal } from './components/Modals/StrategyCallModal';
import { DemoRequestModal } from './components/Modals/DemoRequestModal';
import { CommandPalette } from './components/ui/CommandPalette';
import { QuantumSnapSection } from './components/ui/QuantumSnapSection';
import { KineticCursorGlow } from './components/ui/KineticCursorGlow';
import { CustomCursor } from './components/ui/CustomCursor';
import { AnimatedGlobalBackground } from './components/ui/AnimatedGlobalBackground';
import { TooltipProvider } from './components/ui/tooltip';
import { ArrowUp, PhoneCall, Sparkles } from 'lucide-react';
import { soundFX } from './components/ui/sound-effects';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      if (!sessionStorage.getItem('pyrow-visited')) {
        return 'light';
      }
      const saved = sessionStorage.getItem('pyrow-theme') || localStorage.getItem('pyrow-theme');
      return saved === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });
  const [strategyCallModalOpen, setStrategyCallModalOpen] = useState(false);
  const [selectedStrategyTopic, setSelectedStrategyTopic] = useState<string | undefined>();
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSoftwareName, setDemoSoftwareName] = useState('Enterprise ERP Software');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    sessionStorage.setItem('pyrow-visited', 'true');
    sessionStorage.setItem('pyrow-theme', newTheme);
    localStorage.setItem('pyrow-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Scroll top visibility & keyboard shortcuts
  useEffect(() => {
    let lastShow = false;
    const handleScroll = () => {
      const show = window.scrollY > 400;
      if (show !== lastShow) {
        lastShow = show;
        setShowScrollTop(show);
      }
    };

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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenStrategyCall = (topic?: string) => {
    soundFX.playClick();
    setSelectedStrategyTopic(topic);
    setStrategyCallModalOpen(true);
  };

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
    <TooltipProvider>
      <div className="relative min-h-screen bg-transparent text-slate-900 dark:text-zinc-100 selection:bg-ember-500 selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
        {/* Animated Global Atmospheric Cyber Matrix & Floating Starfield */}
        <AnimatedGlobalBackground />

        {/* Isolated Kinetic Ambient Glow (Zero Virtual-DOM Root Re-renders) */}
        <KineticCursorGlow theme={theme} />

        {/* Unique Pyrow Cyber-Kinetic Cursor */}
        <CustomCursor theme={theme} />

      {/* Global Navigation Bar */}
      <Navigation
        onOpenStrategyCall={() => handleOpenStrategyCall()}
        onOpenDemoRequest={handleOpenDemoRequest}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections: Premium continuous scroll-reactive flow */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {/* Section 1: Hero */}
        <Hero
          onOpenStrategyCall={() => handleOpenStrategyCall()}
        />

        {/* Section 2: Services */}
        <QuantumSnapSection id="services-section">
          <Services
            onOpenStrategyCall={handleOpenStrategyCall}
          />
        </QuantumSnapSection>

        {/* Section 3: How We Work (4 Simple Steps) */}
        <QuantumSnapSection id="how-it-works-section">
          <HowItWorks
            onOpenStrategyCall={() => handleOpenStrategyCall()}
          />
        </QuantumSnapSection>

        {/* Section 4: Industry-Specific Software Solutions */}
        <QuantumSnapSection id="solutions-section">
          <IndustrySolutions
            onOpenDemoRequest={handleOpenDemoRequest}
            onOpenStrategyCall={handleOpenStrategyCall}
          />
        </QuantumSnapSection>

        {/* Section 5: Case Studies (Real Stories & Client Growth) */}
        <QuantumSnapSection id="case-studies-section">
          <CaseStudies
            onOpenStrategyCall={handleOpenStrategyCall}
          />
        </QuantumSnapSection>

        {/* Section 6: Technology Stack */}
        <QuantumSnapSection id="tech-radar-section">
          <TechRadar />
        </QuantumSnapSection>

        {/* Section 7: Why Choose Pyrow (Comparison) */}
        <QuantumSnapSection id="comparison-section">
          <ComparisonMatrix />
        </QuantumSnapSection>

        {/* Section 8: About Pyrow & Leadership */}
        <QuantumSnapSection id="about-section">
          <AboutPyrow
            onOpenStrategyCall={() => handleOpenStrategyCall()}
          />
        </QuantumSnapSection>

        {/* Section 9: Frequently Asked Questions (FAQ) */}
        <QuantumSnapSection id="faq-section">
          <FaqSection />
        </QuantumSnapSection>

        {/* Section 10: Project Consultation & Contact */}
        <QuantumSnapSection id="estimator-section">
          <ProjectEstimator
            onOpenStrategyCall={() => handleOpenStrategyCall()}
          />
        </QuantumSnapSection>
      </main>

      {/* Section 11: Footer */}
      <Footer
        onOpenStrategyCall={() => handleOpenStrategyCall()}
        onOpenDemoRequest={handleOpenDemoRequest}
      />

      {/* Floating Scroll-To-Top & Quick Action Pill */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <button
            onClick={() => {
              soundFX.playClick();
              handleOpenStrategyCall();
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
      <StrategyCallModal
        isOpen={strategyCallModalOpen}
        onClose={() => setStrategyCallModalOpen(false)}
        initialTopic={selectedStrategyTopic}
      />

      <DemoRequestModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        softwareName={demoSoftwareName}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenStrategyCall={() => handleOpenStrategyCall()}
        onOpenDemoRequest={handleOpenDemoRequest}
      />
    </div>
  </TooltipProvider>
  );
}
