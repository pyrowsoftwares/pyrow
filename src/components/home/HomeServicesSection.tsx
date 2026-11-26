import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import {
  Share2,
  Target,
  Sparkles,
  Globe,
  Search,
  Linkedin,
  Bot,
  Zap,
  PlayCircle,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { DIGITAL_SERVICES, DigitalServiceItem } from '../../data/digitalServicesData';

interface HomeServicesSectionProps {
  onOpenStrategyCall: (topic?: string) => void;
}

type ServiceTab = 'featured' | 'ads' | 'social' | 'creative' | 'organic';

export const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({ onOpenStrategyCall }) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<ServiceTab>('featured');

  const getServiceIcon = (iconName: string) => {
    const iconClass = 'w-4 h-4 text-violet-600 dark:text-violet-400';
    switch (iconName) {
      case 'Share2':
        return <Share2 className={iconClass} />;
      case 'Target':
        return <Target className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Globe':
        return <Globe className={iconClass} />;
      case 'Search':
        return <Search className={iconClass} />;
      case 'Linkedin':
        return <Linkedin className={iconClass} />;
      case 'Bot':
        return <Bot className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'PlayCircle':
        return <PlayCircle className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const tabs: { id: ServiceTab; label: string; count: number; icon: React.ReactNode }[] = [
    { id: 'featured', label: 'Featured Growth Suite', count: 4, icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'ads', label: 'Paid Advertising', count: 4, icon: <Target className="w-3.5 h-3.5" /> },
    { id: 'social', label: 'Social & Influencer', count: 2, icon: <Share2 className="w-3.5 h-3.5" /> },
    { id: 'creative', label: 'Web & Content', count: 2, icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'organic', label: 'SEO & Next-Gen AI', count: 2, icon: <Bot className="w-3.5 h-3.5" /> },
  ];

  // Curated 4 flagship services for default view to keep the landing page clean and compact
  const featuredIds = [
    'ad-campaign-management',
    'social-media-management',
    'ecommerce-web-design',
    'chatgpt-ads-ai-advertising',
  ];

  const getFilteredServices = (): DigitalServiceItem[] => {
    switch (activeTab) {
      case 'featured':
        return DIGITAL_SERVICES.filter((item) => featuredIds.includes(item.id));
      case 'ads':
        return DIGITAL_SERVICES.filter((item) =>
          ['ad-campaign-management', 'google-ads', 'youtube-ads', 'linkedin-ads'].includes(item.id)
        );
      case 'social':
        return DIGITAL_SERVICES.filter((item) =>
          ['social-media-management', 'influencer-marketing'].includes(item.id)
        );
      case 'creative':
        return DIGITAL_SERVICES.filter((item) =>
          ['content-marketing', 'ecommerce-web-design'].includes(item.id)
        );
      case 'organic':
        return DIGITAL_SERVICES.filter((item) =>
          ['seo-search-engine-optimization', 'chatgpt-ads-ai-advertising'].includes(item.id)
        );
      default:
        return DIGITAL_SERVICES.filter((item) => featuredIds.includes(item.id));
    }
  };

  const displayedServices = getFilteredServices();

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 transition-colors duration-300">
      {/* MotionSites Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-violet-600/10 via-fuchsia-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Header Section (Clean, Calm, and Mirroring CaseStudies Pattern) */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Services · Performance & Growth</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          We Build Brands.{' '}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-300 dark:to-indigo-300">
            We Create Growth.
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto">
          From powerful digital marketing strategies to innovative web experiences, PYROW helps businesses build their
          digital presence, connect with the right audience, and turn opportunities into measurable growth.
        </p>

        {/* Dynamic Category Filter Pills (Matches CaseStudies.tsx layoutId spring) */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab(tab.id);
                }}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors duration-200 ${
                  isSelected
                    ? 'text-white font-bold'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-home-service-tab"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-600/30 border border-violet-400/30 -z-0"
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-white/10 text-slate-500 dark:text-zinc-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid: Compact 2x2 Layout (Max 2 lines, Never 5 lines of clutter) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="group relative rounded-3xl bg-white/95 dark:bg-[#070512]/90 border border-slate-200/90 dark:border-white/[0.08] hover:border-violet-500/50 dark:hover:border-violet-500/40 p-6 sm:p-7 backdrop-blur-xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${service.gradient} blur-2xl pointer-events-none rounded-full opacity-30 group-hover:opacity-80 transition-opacity`}
              />

              <div>
                {/* Meta Top Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 dark:bg-white/5 border border-violet-500/20 dark:border-white/10 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-violet-600 dark:text-violet-400 font-semibold tracking-wider">
                      {service.number} / 10
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {service.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                        {service.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5">
                      {service.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-medium text-violet-600 dark:text-violet-300 mt-0.5 mb-2.5">
                  {service.tagline}
                </p>

                {/* Description (Concise & Legible) */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Top Deliverables (Clean Compact Pills) */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-white/5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-semibold mb-2">
                    Core Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-zinc-300">
                    {service.offers.slice(0, 4).map((offer, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 min-w-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                        <span className="truncate text-[11px]">{offer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.disclaimer && (
                  <div className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-1.5 text-[10px] text-amber-700 dark:text-amber-300 leading-snug">
                    <AlertCircle className="w-3 h-3 shrink-0 mt-0.5 text-amber-600" />
                    <span>OpenAI platform eligibility applies</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenStrategyCall(service.title);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors cursor-pointer group/btn"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    navigate('/services');
                  }}
                  className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  Full Roadmap →
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Elegant Bottom Road Link: Direct to Complete 10-Service Suite */}
      <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-2.5 rounded-xl bg-violet-500/10 dark:bg-white/5 text-violet-600 dark:text-violet-400 hidden sm:block">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Looking for our complete 10-discipline digital marketing suite?
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Explore in-depth deliverables, strategy pillars, and direct booking on our dedicated Services page.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => {
              soundFX.playClick();
              navigate('/services');
            }}
            className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs shadow-md shadow-violet-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Full Services Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeServicesSection;
