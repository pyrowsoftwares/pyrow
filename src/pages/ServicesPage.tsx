import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../context/RouterContext';
import { soundFX } from '../components/ui/sound-effects';
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
  Compass,
  Palette,
  TrendingUp,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  MessageSquare,
  Home,
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import {
  DIGITAL_SERVICES,
  WHY_CHOOSE_PYROW,
  SERVICES_CTA_CONTENT,
  DigitalServiceItem,
} from '../data/digitalServicesData';

interface ServicesPageProps {
  onOpenStrategyCall: (topic?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenStrategyCall }) => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderServiceIcon = (iconName: string) => {
    const iconClass = 'w-5 h-5 text-violet-600 dark:text-violet-400';
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

  const renderPillarIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-white';
    switch (iconName) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Palette':
        return <Palette className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services', count: DIGITAL_SERVICES.length },
    { id: 'ads', label: 'Paid Advertising', count: DIGITAL_SERVICES.filter((s) => s.category === 'ads').length },
    { id: 'social', label: 'Social & Influencer', count: DIGITAL_SERVICES.filter((s) => s.category === 'social').length },
    { id: 'content', label: 'Content & Stories', count: DIGITAL_SERVICES.filter((s) => s.category === 'content').length },
    { id: 'web', label: 'Web & E-Commerce', count: DIGITAL_SERVICES.filter((s) => s.category === 'web').length },
    { id: 'seo', label: 'Organic SEO', count: DIGITAL_SERVICES.filter((s) => s.category === 'seo').length },
    { id: 'ai', label: 'AI Advertising', count: DIGITAL_SERVICES.filter((s) => s.category === 'ai').length },
  ];

  const filteredServices = DIGITAL_SERVICES.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.offers.some((offer) => offer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden pt-28 pb-20">
      {/* Editorial MotionSites Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-violet-600/15 via-indigo-600/5 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[600px] right-0 w-[450px] h-[450px] bg-gradient-to-bl from-pink-500/10 via-purple-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl shadow-xs text-xs font-mono text-slate-500 dark:text-zinc-400">
          <button
            onClick={() => {
              soundFX.playClick();
              navigate('/');
            }}
            className="flex items-center gap-1 hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400 dark:text-zinc-600" />
          <span className="text-violet-600 dark:text-violet-400 font-semibold">Services</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16 sm:pb-24">
        {/* Micro-badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-mono uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SERVICES PAGE · WEBSITE CONTENT</span>
        </div>

        {/* Headline with Clean Accent */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] max-w-5xl mx-auto">
          We Build Brands.{' '}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-300 dark:to-indigo-300">
            We Create Growth.
          </span>
        </h1>

        {/* Subheadline (Exact user text) */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
          From powerful digital marketing strategies to innovative web experiences, PYROW helps businesses build their
          digital presence, connect with the right audience, and turn opportunities into measurable growth.
        </p>

        {/* Hero Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenStrategyCall('Digital Growth Project');
            }}
            className="px-6 py-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              const el = document.getElementById('services-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-full bg-white/80 dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-zinc-200 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-white/10 transition-all cursor-pointer backdrop-blur-xl"
          >
            Explore All 10 Services
          </button>

          <a
            href="https://wa.me/917358163590?text=Hi%20PYROW%20team,%20I'd%20like%20to%20discuss%20your%20digital%20marketing%20and%20web%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:bg-emerald-500/20 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Services Section Header & Controls */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/10 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-mono uppercase tracking-wider mb-2">
              <span>Full Suite Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Digital Marketing & Creative Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              10 specialized disciplines architected to establish authority, attract targeted traffic, and drive sustainable revenue.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter services or offerings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-hidden focus:border-violet-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
                    : 'bg-white/70 dark:bg-white/[0.03] text-slate-600 dark:text-zinc-300 border border-slate-200/80 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-white/10 text-slate-500 dark:text-zinc-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 10 Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 2) * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl bg-white/95 dark:bg-[#070512]/90 border border-slate-200/90 dark:border-white/[0.08] hover:border-violet-500/50 dark:hover:border-violet-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Card Ambient Glow */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${service.gradient} blur-3xl pointer-events-none rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Top Header Badge Row */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-violet-500/10 dark:bg-white/5 border border-violet-500/20 dark:border-white/10 flex items-center justify-center shrink-0">
                        {renderServiceIcon(service.iconName)}
                      </div>
                      <span className="font-mono text-xs text-violet-600 dark:text-violet-400 font-semibold tracking-wider">
                        {service.number} / 10
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                          {service.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5">
                        {service.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base sm:text-lg font-medium text-violet-600 dark:text-violet-300 mt-1 mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What We Offer Checklist */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold mb-3">
                      What We Offer:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-zinc-300">
                      {service.offers.map((offer, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Disclaimer (e.g. ChatGPT Ads) */}
                  {service.disclaimer && (
                    <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2 text-[11px] text-amber-700 dark:text-amber-300 leading-relaxed">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                      <span>{service.disclaimer}</span>
                    </div>
                  )}
                </div>

                {/* Card CTA Footer */}
                <div className="mt-8 pt-5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onOpenStrategyCall(service.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                    Pyrow Growth Standard
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white/50 dark:bg-white/[0.02] rounded-3xl border border-slate-200 dark:border-white/5 p-8">
            <p className="text-slate-500 dark:text-zinc-400 text-sm">
              No services matched "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Why Choose PYROW? Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200/80 dark:border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{WHY_CHOOSE_PYROW.headline}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            More Than Marketing.{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-300 dark:to-indigo-300">
              We're Your Growth Partner.
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            {WHY_CHOOSE_PYROW.description}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_PYROW.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-6 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-md`}
                  >
                    {renderPillarIcon(pillar.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-zinc-600">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                  Core Discipline
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section (Exact user copy & buttons) */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-violet-900/30 via-slate-900/60 to-black/80 dark:from-violet-950/40 dark:via-obsidian-950/90 dark:to-black border border-violet-500/30 p-8 sm:p-12 md:p-16 text-center backdrop-blur-2xl shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Ignite Your Growth</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              {SERVICES_CTA_CONTENT.headline}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-2 font-normal">
              {SERVICES_CTA_CONTENT.paragraph1}
            </p>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 font-normal">
              {SERVICES_CTA_CONTENT.paragraph2}
            </p>

            <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-200 to-indigo-200 mb-8">
              {SERVICES_CTA_CONTENT.tagline}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenStrategyCall('Services Page - Start Your Project');
                }}
                className="px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-xl shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{SERVICES_CTA_CONTENT.button1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  navigate('/contact');
                }}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-xl transition-all cursor-pointer"
              >
                <span>{SERVICES_CTA_CONTENT.button2}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServicesPage;
