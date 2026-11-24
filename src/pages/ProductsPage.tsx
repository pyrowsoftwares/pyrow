import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { LuxuryScrollCard } from '../components/ui/LuxuryScrollCard';
import { QuantumSnapSection } from '../components/ui/QuantumSnapSection';
import {
  Bot,
  ShoppingBag,
  Cloud,
  Layers,
  Sparkles,
  ArrowRight,
  Check,
  Smartphone,
  ShieldCheck,
  Zap,
  Printer,
  WifiOff,
  Database,
  BarChart3,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { soundFX } from '../components/ui/sound-effects';

interface ProductsPageProps {
  onOpenStrategyCall: () => void;
  onOpenDemoRequest: (name?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenStrategyCall,
  onOpenDemoRequest,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'pos' | 'saas' | 'industry'>('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'pos', label: 'POS & Billing Suites' },
    { id: 'saas', label: 'Enterprise Cloud ERP & CRM' },
    { id: 'industry', label: 'Industry Specialized Suites' },
  ];

  const products = [
    {
      id: 'zassist',
      name: 'Pyrow Assist',
      tag: 'Flagship AI Assistant',
      category: 'ai',
      badge: 'Flagship',
      desc: 'Your autonomous 24/7 AI-powered business assistant. Automatically handles customer inquiries on WhatsApp & web, schedules appointments, syncs with CRM leads, and eliminates repetitive administrative tasks so your team can focus on closing deals.',
      highlights: [
        'Multi-channel AI chat (WhatsApp, Website widget, Instagram DMs)',
        'Automated calendar booking and appointment rescheduling',
        'Natural language customer intent recognition and routing',
        'Multilingual support (English, Tamil, Hindi, Spanish, Arabic)',
        'Direct CRM lead extraction and automatic follow-up reminders',
      ],
      specs: {
        deployment: 'Cloud Native / Serverless',
        responseSpeed: '< 1.2s average latency',
        integrations: 'WhatsApp Cloud API, Google Calendar, HubSpot, Zapier',
      },
    },
    {
      id: 'content-flow',
      name: 'ContentFlow AI',
      tag: 'AI Content Strategy',
      category: 'ai',
      badge: 'Popular',
      desc: 'Automate your entire digital marketing content pipeline. With a single input prompt or product link, autonomous AI agents generate high-converting, platform-optimized social media posts, carousel copy, SEO blogs, and email newsletters in your exact brand voice.',
      highlights: [
        'Multi-platform auto-formatting (LinkedIn, Twitter/X, Instagram, Blogs)',
        'Custom brand voice memory and style guide enforcement',
        'Autonomous weekly content calendar generation and scheduling',
        'Built-in AI image generation and social graphic auto-resizing',
        'Real-time engagement analytics and post performance tracking',
      ],
      specs: {
        supportedNetworks: 'LinkedIn, Instagram, X/Twitter, WordPress, Webflow',
        aiEngine: 'Fine-tuned LLM with visual diffusion generators',
        outputFormats: 'Rich Markdown, Social Post Drafts, Carousels',
      },
    },
    {
      id: 'zpos',
      name: 'Pyrow POS',
      tag: 'Retail & Restaurant POS',
      category: 'pos',
      badge: 'Sub-Second Speed',
      desc: 'High-speed, offline-first Point of Sale billing system designed for supermarkets, grocery shops, fashion boutiques, and restaurants. Operates at full speed even during total internet blackouts, storing transactions locally in SQLite and syncing automatically when reconnected.',
      highlights: [
        'Sub-second barcode scan-to-receipt generation (under 0.8s)',
        '100% offline resilience: zero stalled checkout queues during outages',
        'Hardware agnostic: works with thermal printers, weighing scales, barcode scanners',
        'Multi-store inventory management with live warehouse synchronization',
        'Integrated customer loyalty reward points and instant discount schemes',
        'Comprehensive GST tax invoice compliance and E-way bill readiness',
      ],
      specs: {
        platforms: 'Windows, macOS, Android POS Terminals, iPadOS',
        localDatabase: 'Encrypted Embedded SQLite with bi-directional sync',
        hardwareProtocols: 'USB, Bluetooth, Ethernet POS Thermal SDKs',
      },
    },
    {
      id: 'zbills',
      name: 'Pyrow ZBills',
      tag: 'Free Lightweight Billing',
      category: 'pos',
      badge: 'MSME Favorite',
      desc: 'Fast, lightweight billing and invoicing software for shopkeepers, freelancers, and small businesses. Create professional GST-compliant tax invoices in 3 clicks and send them directly to customers via WhatsApp and email.',
      highlights: [
        'Instant WhatsApp PDF invoice dispatching with payment links',
        'Simple product catalog & inventory tracking',
        'Customer credit ledger (Khata / Udhar management)',
        'Daily, weekly, and monthly sales profit analytics',
      ],
      specs: {
        platforms: 'Web Browser, Android App, iOS App',
        cost: 'Free starter tier with zero hidden charges',
        sync: 'Instant Cloud Backup',
      },
    },
    {
      id: 'zcrm',
      name: 'Pyrow CRM',
      tag: 'Omnichannel Sales CRM',
      category: 'saas',
      badge: 'High Conversion',
      desc: 'Turn leads into recurring revenue. A lightweight yet powerful CRM that combines visual Kanban deal pipelines, automated WhatsApp follow-ups, and sales team call logging. Simple enough for a solopreneur, robust enough for a 50-person sales squad.',
      highlights: [
        'Visual drag-and-drop Kanban deal pipeline management',
        'Automated follow-up triggers and reminder notifications',
        'WhatsApp direct messaging and chat history logging',
        'Sales rep performance metrics and conversion analytics',
        'Instant quotation generator with digital approval signatures',
      ],
      specs: {
        accessControl: 'Role-based permissions (Admin, Manager, Rep)',
        integrations: 'Meta Lead Ads, Google Forms, Website inquiries',
        dataSecurity: 'AES-256 encrypted database',
      },
    },
    {
      id: 'pyrow-flow-erp',
      name: 'Pyrow Flow ERP',
      tag: 'Enterprise Management',
      category: 'saas',
      badge: 'Enterprise Core',
      desc: 'The complete digital operating system for growing companies. Connect human resources, attendance biometric sync, project management, multi-warehouse supply chains, and double-entry accounting ledgers under one unified roof.',
      highlights: [
        'Multi-warehouse inventory control with automated reorder levels',
        'Biometric attendance and payroll calculation engine',
        'Purchase orders, vendor invoicing, and expense reconciliation',
        'Real-time executive P&L dashboards and audit logs',
      ],
      specs: {
        architecture: 'Multi-tenant Cloud ERP with dedicated tenant schemas',
        compliance: 'GST, ISO-27001, SOC2 Type II audit readiness',
        uptimeSLA: '99.98% guaranteed uptime',
      },
    },
    {
      id: 'zaloon',
      name: 'Pyrow Zaloon Suite',
      tag: 'Salons & Spas',
      category: 'industry',
      badge: 'Zero No-Shows',
      desc: 'Specialized management software for premium salons, spas, and wellness centers. Features stylist appointment scheduling, chair occupancy tracking, automated WhatsApp reminder alerts to eliminate no-shows, and stylist commission calculations.',
      highlights: [
        'Therapist and stylist calendar booking with chair allocation',
        'Automated WhatsApp appointment confirmations and reminders',
        'Service package bundles and customer treatment history',
        'Daily stylist commission calculation and tip disbursement',
      ],
      specs: {
        industry: 'Beauty Salons, Spas, Nail Bars, Wellness Clinics',
        booking: 'Online client booking portal + Walk-in counter POS',
      },
    },
    {
      id: 'zwash',
      name: 'Pyrow Zwash AutoCare',
      tag: 'Automotive & Detailing',
      category: 'industry',
      badge: 'Live Status',
      desc: 'Complete operating system for car wash centers, ceramic coating studios, and automotive workshops. Digital vehicle inspection job cards, automated technician job assignment, and live SMS/WhatsApp vehicle status tracking for owners.',
      highlights: [
        'Vehicle digital job card with photo damage inspection',
        'Bay and technician assignment with service duration timers',
        'Automated customer alerts: "Vehicle Ready for Pickup"',
        'Spare parts consumption and billing integration',
      ],
      specs: {
        industry: 'Car Detailing Studios, Auto Workshops, Quick Washes',
        hardware: 'Mobile Tablet job-card app + Front-desk billing',
      },
    },
    {
      id: 'zlms',
      name: 'Pyrow ZLMS Academy',
      tag: 'Education & Schools',
      category: 'industry',
      badge: 'Scalable LMS',
      desc: 'Comprehensive school and academy management software handling student enrollments, automated digital fee invoicing, online exams with auto-grading, and unified parent-teacher communication portals.',
      highlights: [
        'Student digital admissions and identity generation',
        'Automated fee due reminders with online payment gateway',
        'Exam assessment engine with instant scorecards',
        'Parent portal for attendance tracking and teacher notes',
      ],
      specs: {
        capacity: 'Tested with 15,000+ simultaneous students',
        videoDelivery: 'DRM encrypted video hosting with CDN caching',
      },
    },
  ];

  const filtered = activeTab === 'all' ? products : products.filter((p) => p.category === activeTab);

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Complete Product Suite"
        title="Software products engineered to"
        highlightText="Solve Real Commercial Problems"
        description="Explore the full catalog of Pyrow's software products. From sub-second offline retail POS systems to autonomous AI marketing engines and cloud ERPs, built to scale your business."
        breadcrumbs={[{ label: 'All Products' }]}
        primaryCtaText="Request a Live Product Demo"
        onPrimaryCtaClick={() => onOpenDemoRequest()}
      />

      {/* Filter Category Tabs (MotionSites Glass Pill) */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="py-8 px-4 max-w-5xl mx-auto flex items-center justify-center"
      >
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 dark:bg-[#070512]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.25)] max-w-full overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFX.playClick();
                setActiveTab(cat.id as any);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 border border-violet-400/30 font-bold'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.section>

      {/* Comprehensive Product Cards Grid */}
      <QuantumSnapSection id="products-catalog-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((prod, idx) => (
              <LuxuryScrollCard
                key={prod.id}
                index={idx}
                columns={3}
                className="p-8 rounded-[32px] bg-white dark:bg-[#070512]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.18)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {prod.tag}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold">
                      Key Capabilities:
                    </div>
                    {prod.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specifications Pill Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-obsidian-900/60 border border-slate-100 dark:border-white/5 text-[11px] text-slate-600 dark:text-zinc-400 font-mono space-y-1 mb-6">
                    {Object.entries(prod.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <span className="capitalize text-slate-500 dark:text-zinc-500">{k}:</span>
                        <span className="text-right text-slate-800 dark:text-zinc-200 font-medium truncate">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onOpenDemoRequest(prod.name);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onOpenStrategyCall();
                    }}
                    className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 text-xs font-semibold hover:bg-violet-600 hover:text-white transition-all cursor-pointer"
                  >
                    Get Pricing
                  </button>
                </div>
              </LuxuryScrollCard>
            ))}
          </AnimatePresence>
        </div>
      </QuantumSnapSection>

      {/* Bottom CTA Banner */}
      <PageCtaBanner
        badge="Zero-Risk Discovery"
        title="Need custom software built for your business?"
        description="Whether you need a dedicated retail POS suite or a cloud ERP tailored to your proprietary processes, our engineering squad will build it with zero bloat."
        primaryBtnText="Consult Our Tech Architects"
        onPrimaryClick={onOpenStrategyCall}
      />
    </div>
  );
};
