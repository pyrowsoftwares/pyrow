import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Rocket, Building2, Store, Users, ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import { LuxurySectionHeading } from '../ui/LuxurySectionHeading';
import { LuxuryScrollCard } from '../ui/LuxuryScrollCard';

export const HomeAboutDeepDive: React.FC = () => {
  const { navigate } = useRouter();

  const coreServices = [
    {
      title: 'AI-Driven SaaS Development',
      desc: 'We design and develop fully customized Software-as-a-Service (SaaS) platforms built from the ground up to scale infinitely. Our AI-first approach integrates predictive workflows, automated customer pipelines, and smart notifications directly into your core product.',
      caps: [
        'Custom multi-tenant SaaS architecture for secure scaling',
        'Cloud-native deployment on AWS, Google Cloud, and Cloudflare',
        'AI-powered process automation and smart event triggers',
        'Scalable infrastructure designed for 100k+ concurrent requests',
      ],
    },
    {
      title: 'Custom Software & Enterprise ERP',
      desc: 'Off-the-shelf software often forces you to change your business to fit the tool. We do the opposite. We build custom software tailored specifically to your exact operations, giving you absolute ownership over your data and business logic.',
      caps: [
        'Complex multi-branch inventory and warehouse orchestration',
        'Real-time business intelligence dashboards and P&L ledgers',
        'Legacy desktop system modernization to modern cloud web/mobile',
        'Offline-first synchronization with zero conflict bottlenecks',
      ],
    },
    {
      title: 'High-Converting Web & App Platforms',
      desc: 'A great digital presence is nothing without performance. We build progressive web applications and mobile apps optimized for sub-second loading speeds, technical SEO rankings, and maximum checkout conversion rates.',
      caps: [
        'Responsive, mobile-first design with 60fps micro-interactions',
        'Progressive Web Apps (PWA) with instant offline cache',
        'Semantic HTML structure optimized for search engine crawlability',
        'Global edge CDN asset caching with 98+ Google PageSpeed score',
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: 'AI-First Engineering Approach',
      desc: 'We integrate artificial intelligence into the core database and operational layer of your software, automating repetitive customer tickets and administrative tasks.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Designed for Massive Scalability',
      desc: 'Our architectures scale seamlessly from your first 1,000 customers to millions of transactions without requiring expensive code rewrites.',
      icon: <Rocket className="w-5 h-5 text-violet-500" />,
    },
    {
      title: 'Sub-Second Performance Optimization',
      desc: 'Clean code architecture and isolated compositor rendering ensure lightning-fast UI responses and higher customer conversions.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
  ];

  const useCases = [
    {
      title: 'Service-Oriented Businesses',
      desc: 'Automated booking systems, multi-step customer inquiry flows, and centralized CRM pipelines that turn cold traffic into loyal clients.',
      icon: <Store className="w-5 h-5 text-violet-500" />,
    },
    {
      title: 'High-Growth Tech Startups',
      desc: 'Rapid MVP engineering, scalable SaaS foundation builds, and investor-ready technical documentation delivered in fast 14-day sprints.',
      icon: <Rocket className="w-5 h-5 text-fuchsia-500" />,
    },
    {
      title: 'Established Commercial Enterprises',
      desc: 'Advanced company-wide ERP software, inventory control, automated GST invoicing, and real-time management analytics across branches.',
      icon: <Building2 className="w-5 h-5 text-indigo-500" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      {/* What is Pyrow Intro */}
      <LuxurySectionHeading
        badge="Our Expertise"
        title="What is Pyrow?"
        subtitle={
          <>
            <strong className="text-slate-900 dark:text-white">Pyrow</strong> is an engineering-first software development agency specializing in{' '}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">AI-driven SaaS platforms</span>,{' '}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">custom software development</span>,{' '}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">retail POS & billing systems</span>, and{' '}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">high-converting web platforms</span>. Serving a global clientele across India, the US, and APAC, our mission is to empower ambitious businesses to automate repetitive operations and build resilient software designed for extreme scalability.
          </>
        }
        className="max-w-4xl mx-auto mb-20"
      />

      {/* Core Services Capability Breakdown */}
      <div className="mb-20">
        <LuxurySectionHeading
          tag="h3"
          title="Our Core Service Architecture"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((svc, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={3}
              className="p-8 bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {svc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100 dark:border-white/5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-bold">
                      Key capabilities:
                    </div>
                    {svc.caps.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </div>

      {/* Why Choose Pyrow */}
      <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-slate-100/70 dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10">
        <LuxurySectionHeading
          tag="h3"
          title="Why Choose Pyrow for Your Next Platform"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((w, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={3}
              className="p-6 bg-white/80 dark:bg-obsidian-850/80 border border-slate-200/50 dark:border-white/5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white dark:bg-obsidian-850 flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-sm">
                  {w.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {w.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </div>

      {/* Primary Use Cases */}
      <div>
        <LuxurySectionHeading
          tag="h3"
          title="Primary Use Cases"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((u, idx) => (
            <LuxuryScrollCard
              key={idx}
              index={idx}
              columns={3}
              className="p-8 bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200/60 dark:border-white/5">
                  {u.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {u.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {u.desc}
                </p>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </div>
    </section>
  );
};
