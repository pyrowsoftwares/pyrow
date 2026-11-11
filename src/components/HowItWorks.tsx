import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  FileText,
  Terminal,
} from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface HowItWorksProps {
  onOpenStrategyCall: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenStrategyCall,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Step 1: Discover, Plan & Quote',
      timeline: 'Days 1 – 3',
      badge: '100% Free Plan',
      icon: <Compass className="w-5 h-5 text-ember-500" />,
      desc: 'We talk with you to understand your exact business needs, identify what features you want, and give you a clear roadmap with fixed pricing and timelines. No hidden charges.',
      deliverables: [
        'Complete project scope and feature checklist',
        'Fixed milestone budget and guaranteed delivery date',
        'Signed mutual Non-Disclosure Agreement (NDA)',
        'Free 30-min roadmap alignment call with our tech lead',
      ],
      clientAction: 'Share your vision and requirements during a quick 30-min consultation.',
    },
    {
      number: '02',
      title: 'Step 2: Design & Rapid Development',
      timeline: 'Weeks 1 – 4',
      badge: 'Weekly Live Demos',
      icon: <Code2 className="w-5 h-5 text-cyber-blue" />,
      desc: 'Our senior developers design and code your website, mobile app, or company software. You receive live preview links every Friday so you see real progress every single week.',
      deliverables: [
        'Weekly live test links to review on your phone and laptop',
        'Fast, mobile-friendly design that looks great on all screens',
        'Secure database, payment gateway, and GST billing setup',
        'Direct communication with our team via WhatsApp or Slack',
      ],
      clientAction: 'Try out the weekly test versions and share your feedback directly.',
    },
    {
      number: '03',
      title: 'Step 3: Quality Testing & Speed Boost',
      timeline: 'Week 5',
      badge: 'Zero-Bug Guarantee',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      desc: 'Before launching to the public, our QA team tests every button, form, and page across iPhones, Android phones, and desktops to ensure sub-second speed and zero crashes.',
      deliverables: [
        'Thorough bug-free testing on all devices and screen sizes',
        'Sub-second page load times with 95+ Google PageSpeed score',
        'Bank-grade SSL data encryption and secure logins',
        'Automated daily backups so your business data is always safe',
      ],
      clientAction: 'Review the completed system and give the final green light to launch.',
    },
    {
      number: '04',
      title: 'Step 4: Launch & Customer Growth',
      timeline: 'Launch & Scale',
      badge: 'Ongoing Support',
      icon: <Rocket className="w-5 h-5 text-flare-amber" />,
      desc: 'We launch your system smoothly with zero downtime. Then, our marketing team launches targeted Google and Meta ad campaigns and WhatsApp automations to bring you paying clients.',
      deliverables: [
        'Smooth live deployment to your custom domain',
        'High-converting Google Search & Meta ad campaigns setup',
        'Automated WhatsApp bot for instant 24/7 customer replies',
        '24/7 technical monitoring and monthly performance reports',
      ],
      clientAction: 'Watch customer enquiries, orders, and business market share grow.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 lg:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            How We Work With You.{' '}
            <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-cyber-blue bg-clip-text text-transparent">
              Simple, Fast & Transparent.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            No endless meetings, no technical confusion, and no surprise costs. Just clear milestones and weekly progress you can see and test.
          </p>
        </div>

        {/* Step Navigation Track */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={s.number}
                onClick={() => {
                  soundFX.playClick();
                  setActiveStep(idx);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer border transition-all duration-300 relative ${isActive
                    ? 'bg-white dark:bg-[#1A253D] border-ember-500 shadow-md dark:shadow-none scale-[1.02]'
                    : 'bg-white/95 dark:bg-[#141D30]/95 border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xl sm:text-2xl font-black font-mono ${isActive ? 'text-ember-500' : 'text-slate-300 dark:text-zinc-600'
                      }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${isActive
                        ? 'bg-ember-500/15 text-ember-600 dark:text-ember-400 border border-ember-500/30'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-500'
                      }`}
                  >
                    {s.timeline}
                  </span>
                </div>
                <h3
                  className={`text-xs sm:text-sm font-bold font-display line-clamp-2 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-zinc-400'
                    }`}
                >
                  {s.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-9 bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-sm dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Summary (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-ember-500/10 border border-ember-500/20 text-ember-500">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-ember-600 dark:text-ember-400 uppercase tracking-wider font-bold">
                    Phase {steps[activeStep].number} // {steps[activeStep].timeline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mt-0.5">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              {/* What You Receive (Deliverables) */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-bold">
                  What You Receive In This Step:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Role & Action Panel (lg:col-span-5) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-wider font-bold block mb-2">
                  Your Role In This Step:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-semibold">
                  "{steps[activeStep].clientAction}"
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-zinc-400">Ownership:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Client Owned</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-zinc-400">Guarantee:</span>
                  <span className="text-slate-900 dark:text-white font-bold">Fixed Budget & Timeline</span>
                </div>
              </div>

              <div className="pt-2">
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={onOpenStrategyCall}
                  className="w-full justify-center"
                >
                  Schedule Initial Consultation
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
