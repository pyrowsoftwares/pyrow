import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { LuxuryScrollCard } from '../components/ui/LuxuryScrollCard';
import { QuantumSnapSection } from '../components/ui/QuantumSnapSection';
import {
  ShoppingBag,
  HeartPulse,
  UtensilsCrossed,
  HardHat,
  Sparkles,
  GraduationCap,
  Car,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenStrategyCall: () => void;
  onOpenDemoRequest: (name?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onOpenStrategyCall,
  onOpenDemoRequest,
}) => {
  const industries = [
    {
      title: 'Retail & Supermarkets',
      desc: 'Offline-first billing, barcode scanning, scale integration, and multi-location warehouse synchronization built for speed.',
      icon: <ShoppingBag className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      highlights: ['Sub-second barcode checkout', 'Multi-store stock balancing', 'Loyalty reward engine'],
    },
    {
      title: 'Healthcare & Clinics',
      desc: 'Electronic Medical Records (EMR), automated doctor appointment scheduling, lab test tracking, and pharmacy POS.',
      icon: <HeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      highlights: ['Doctor scheduling portal', 'Digital prescription sync', 'Confidential EMR storage'],
    },
    {
      title: 'Restaurants & Cloud Kitchens',
      desc: 'Kitchen Display Systems (KDS), table management, QR-based digital ordering, and split billing for dining & delivery.',
      icon: <UtensilsCrossed className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      highlights: ['Kitchen Display System (KDS)', 'Table turnover analytics', 'Automated recipe costing'],
    },
    {
      title: 'Construction & Real Estate',
      desc: 'Bill of Quantities (BOQ) estimation, sub-contractor progress tracking, material inventory, and client quotation portals.',
      icon: <HardHat className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      highlights: ['Material procurement logs', 'Project stage milestone billing', 'Client progress dashboards'],
    },
    {
      title: 'Salons, Spas & Beauty Studios',
      desc: 'Therapist appointment booking, automated WhatsApp reminders, commission tracking, and client package management.',
      icon: <Sparkles className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
      highlights: ['Zero no-show WhatsApp alerts', 'Therapist commission reports', 'Customer treatment histories'],
    },
    {
      title: 'Education, Academies & Schools',
      desc: 'Student admission portals, online test and exam grading engines, fee payment tracking, and real-time parent notifications.',
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      highlights: ['Automated online assessments', 'Parent fee payment gateway', 'Student performance tracking'],
    },
    {
      title: 'Automotive, Detailing & Logistics',
      desc: 'Job-card tracking, technician assignment, spare part billing, vehicle service history, and live delivery dispatching.',
      icon: <Car className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      highlights: ['Digital job cards & inspection', 'Real-time vehicle status SMS', 'Fleet dispatch monitoring'],
    },
    {
      title: 'B2B Enterprises & Digital Agencies',
      desc: 'Custom CRM pipelines, contract e-signing, automated recurring invoices, and white-label client reporting dashboards.',
      icon: <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      highlights: ['Retainer invoicing automation', 'Client onboarding workflows', 'Visual revenue forecasting'],
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Industry Architecture"
        title="Software Tailored for"
        highlightText="Your Industry."
        description="We don't force generic templates onto your business. We build specialized digital systems designed around the exact operational workflows of your vertical."
        breadcrumbs={[{ label: 'Solutions' }]}
        primaryCtaText="Get an Industry Solution"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Industry Solutions Grid */}
      <QuantumSnapSection id="solutions-grid-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={4}
              className="p-7 rounded-[30px] bg-white dark:bg-[#070512]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex flex-col justify-between group hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(124,58,237,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent pointer-events-none" />
              <div>
                <div className="p-3.5 rounded-2xl bg-violet-50 dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.08] w-fit mb-5 group-hover:scale-110 transition-transform duration-200">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {ind.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {ind.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <button
                  onClick={() => onOpenDemoRequest(ind.title)}
                  className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </QuantumSnapSection>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Don't see your specific industry?"
        subtitle="We build fully bespoke custom software tailored to any unique business model."
        buttonText="Discuss Custom Development"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
