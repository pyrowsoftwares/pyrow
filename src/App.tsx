import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
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

// Reverse-Engineered Home Page Sections (100% Z3Connect Blueprint)
import { HomeExpertise } from './components/home/HomeExpertise';
import { HomeFeaturedProducts } from './components/home/HomeFeaturedProducts';
import { HomeImpactTestimonials } from './components/home/HomeImpactTestimonials';
import { HomeHowWeWork } from './components/home/HomeHowWeWork';
import { HomeIndustries } from './components/home/HomeIndustries';
import { HomeAboutDeepDive } from './components/home/HomeAboutDeepDive';
import { HomeCtaBanner } from './components/home/HomeCtaBanner';
import { HomeInteractiveShowcase } from './components/home/HomeInteractiveShowcase';
import { HomeConnectedSolutions } from './components/home/HomeConnectedSolutions';
import { HomeImpactMarquee } from './components/home/HomeImpactMarquee';

// Interior Sub-Pages (Z3Connect Full Architecture Recreation)
import { AboutPage } from './pages/AboutPage';
import { FounderPage } from './pages/FounderPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { TeamPage } from './pages/TeamPage';
import { WhyWeExistPage } from './pages/WhyWeExistPage';
import { ProductsPage } from './pages/ProductsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';

// Interactive UI and Modals
import { StrategyCallModal } from './components/Modals/StrategyCallModal';
import { DemoRequestModal } from './components/Modals/DemoRequestModal';
import { CommandPalette } from './components/ui/CommandPalette';
import { QuantumSnapSection } from './components/ui/QuantumSnapSection';
import { KineticCursorGlow } from './components/ui/KineticCursorGlow';
import { CustomCursor } from './components/ui/CustomCursor';
import { AnimatedGlobalBackground } from './components/ui/AnimatedGlobalBackground';
import { TooltipProvider } from './components/ui/tooltip';
import { EssentialMolecules } from './components/ui/EssentialMolecules';
import { ArrowUp, PhoneCall } from 'lucide-react';
import { soundFX } from './components/ui/sound-effects';
import { recordPageView } from './lib/supabase';

function AppContent() {
  const { currentPath } = useRouter();

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pyrow-theme') || sessionStorage.getItem('pyrow-theme');
      if (saved === 'light') {
        return 'light';
      }
      return 'dark'; // Default as Dark theme
    }
    return 'dark';
  });

  const [strategyCallModalOpen, setStrategyCallModalOpen] = useState(false);
  const [selectedStrategyTopic, setSelectedStrategyTopic] = useState<string | undefined>();
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSoftwareName, setDemoSoftwareName] = useState('Enterprise ERP Software');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track page views in Supabase Analytics
  useEffect(() => {
    recordPageView(currentPath);
  }, [currentPath]);

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
    localStorage.setItem('pyrow-theme', newTheme);
    sessionStorage.setItem('pyrow-theme', newTheme);
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

  // Router View Resolver
  const renderCurrentRoute = () => {
    // Normalize path (strip trailing slashes if present)
    const normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    switch (normalized) {
      case '/about':
        return <AboutPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/founder':
        return <FounderPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/philosophy':
        return <PhilosophyPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/team':
        return <TeamPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/why-we-exist':
        return <WhyWeExistPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/products':
        return (
          <ProductsPage
            onOpenDemoRequest={handleOpenDemoRequest}
            onOpenStrategyCall={() => handleOpenStrategyCall()}
          />
        );
      case '/solutions':
        return (
          <SolutionsPage
            onOpenDemoRequest={handleOpenDemoRequest}
            onOpenStrategyCall={() => handleOpenStrategyCall()}
          />
        );
      case '/case-studies':
        return <CaseStudiesPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/portfolio':
      case '/clients':
        return <PortfolioPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/blogs':
        return <BlogsPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/contact':
        return <ContactPage />;
      case '/careers':
        return <CareersPage onOpenStrategyCall={() => handleOpenStrategyCall()} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      case '/admin':
        return <AdminPage />;
      case '/':
      default:
        return (
          <>
            {/* 1. Cinematic Ambient Hero with 3D Perspective Tilt & Editorial Serif */}
            <Hero onOpenStrategyCall={() => handleOpenStrategyCall()} />

            {/* 2. Interactive Product Showcase (Signature Live Software Consoles) */}
            <QuantumSnapSection id="products-showcase">
              <HomeInteractiveShowcase onOpenDemoRequest={handleOpenDemoRequest} />
            </QuantumSnapSection>

            {/* 3. Connected Full-Stack Solutions & Revenue Alignment (Sticky Editorial Split) */}
            <QuantumSnapSection id="connected-solutions">
              <HomeConnectedSolutions onOpenStrategyCall={() => handleOpenStrategyCall()} />
            </QuantumSnapSection>

            {/* 4. Architecture Standards: Core Molecules Alignment */}
            <QuantumSnapSection id="architecture-section">
              <EssentialMolecules />
            </QuantumSnapSection>

            {/* 5. Live Impact Numbers & Verified Client Testimonials */}
            <QuantumSnapSection id="client-impact">
              <HomeImpactMarquee />
            </QuantumSnapSection>

            {/* 6. How We Work: From idea to launch — and beyond */}
            <QuantumSnapSection id="how-it-works-section">
              <HomeHowWeWork />
            </QuantumSnapSection>

            {/* 7. Industries: We've worked across them all */}
            <QuantumSnapSection id="solutions-section">
              <HomeIndustries />
            </QuantumSnapSection>

            {/* 8. Production Engineering: Built to Scale Stack Radar */}
            <QuantumSnapSection id="tech-radar-section">
              <TechRadar />
            </QuantumSnapSection>

            {/* 9. Interactive Scope Estimator Desk */}
            <QuantumSnapSection id="estimator">
              <ProjectEstimator onOpenStrategyCall={() => handleOpenStrategyCall()} />
            </QuantumSnapSection>

            {/* 10. Frequently Asked Questions */}
            <QuantumSnapSection id="faq-section">
              <FaqSection />
            </QuantumSnapSection>

            {/* 11. Final Cinematic Bottom CTA Banner */}
            <QuantumSnapSection id="cta-banner-section">
              <HomeCtaBanner onOpenStrategyCall={() => handleOpenStrategyCall()} />
            </QuantumSnapSection>
          </>
        );
    }
  };

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-transparent text-slate-900 dark:text-zinc-100 selection:bg-violet-600 selection:text-white font-sans transition-colors duration-300">
        {/* Animated Global Atmospheric Cyber Matrix & Floating Starfield */}
        <AnimatedGlobalBackground />

        {/* Isolated Kinetic Ambient Glow (Zero Virtual-DOM Root Re-renders) */}
        <KineticCursorGlow theme={theme} />

        {/* Unique Pyrow Cyber-Kinetic Cursor */}
        <CustomCursor theme={theme} />

        {/* Global Navigation Bar */}
        {currentPath !== '/admin' && (
          <Navigation
            onOpenStrategyCall={() => handleOpenStrategyCall()}
            onOpenDemoRequest={handleOpenDemoRequest}
            onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        )}

        {/* Active Page View (Unified Stacking Context & Full Accessibility) */}
        <main className="relative z-10 w-full min-h-screen">
          {renderCurrentRoute()}
        </main>

        {/* Section 11: Global Footer */}
        {currentPath !== '/admin' && (
          <Footer
            onOpenStrategyCall={() => handleOpenStrategyCall()}
            onOpenDemoRequest={handleOpenDemoRequest}
          />
        )}

        {/* Floating Scroll-To-Top & Quick Action Pill */}
        {showScrollTop && (
          <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <button
              onClick={() => {
                soundFX.playClick();
                handleOpenStrategyCall();
              }}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:brightness-110 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>Book a Call</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white shadow-xl hover:scale-110 hover:border-violet-500 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-violet-600 dark:text-purple-400" />
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

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
