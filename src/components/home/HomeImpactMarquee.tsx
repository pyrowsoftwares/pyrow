import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import { LuxurySectionHeading } from '../ui/LuxurySectionHeading';

export const HomeImpactMarquee: React.FC = () => {
  const { navigate } = useRouter();

  const metrics = [
    {
      stat: '0.8s',
      label: 'Scan-to-Bill Latency',
      sub: 'Offline-first POS processing in high-footfall retail stores.',
    },
    {
      stat: '100k+',
      label: 'Active Cloud Users',
      sub: 'Concurrent traffic handled across deployed enterprise platforms.',
    },
    {
      stat: '99.98%',
      label: 'Production Uptime SLA',
      sub: 'Zero downtime achieved across 18 consecutive months.',
    },
    {
      stat: '100%',
      label: 'Client IP Ownership',
      sub: 'Full source code & database handover on Day 1.',
    },
  ];

  const testimonials = [
    {
      quote: 'Pyrow built our multi-store retail billing system. Sub-second speed and works 100% offline during internet cuts.',
      client: 'Insta Retail Chain',
      role: 'Operations Director',
      rating: 5,
    },
    {
      quote: '100k+ active users on our dashboard and not a single glitch. Their Go & React architecture is rock-solid.',
      client: 'Safuu DeFi Global',
      role: 'Lead Architect',
      rating: 5,
    },
    {
      quote: 'Finally, an ERP & biometric payroll system that works flawlessly across our 500+ employees and branches.',
      client: 'Meta Giants Corp',
      role: 'HR & Ops Head',
      rating: 5,
    },
    {
      quote: 'The automated WhatsApp booking bot cut our missed appointments to zero. Inquiries get answered in under 2 seconds.',
      client: "Shiv's Photography",
      role: 'Studio Founder',
      rating: 5,
    },
    {
      quote: 'Our quotation calculation error dropped by 90% once we deployed Pyrow’s real-time estimation engine.',
      client: 'Atom Infra Projects',
      role: 'Managing Partner',
      rating: 5,
    },
    {
      quote: 'Lead conversion increased by 40% in our first month following the automated CRM & WhatsApp nurturing funnels.',
      client: 'Right Choice Realty',
      role: 'Sales Director',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 overflow-hidden">
      <LuxurySectionHeading
        badge="Proven Results"
        title={
          <span>
            Real Impact for{' '}
            <span className="font-black tracking-tight underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              High-Growth Businesses.
            </span>
          </span>
        }
        subtitle="We measure our engineering by balance-sheet outcomes: faster checkouts, zero server crashes, and higher conversion rates."
        align="center"
        className="mb-14"
      />

      {/* High-Impact Mega Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 rounded-3xl bg-white/95 dark:bg-[#070512]/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-center flex flex-col justify-between hover:border-violet-500/40 backdrop-blur-xl transition-all"
          >
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-slate-900 dark:text-white mb-2">
                {m.stat}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider font-bold text-violet-600 dark:text-violet-400 mb-2">
                {m.label}
              </div>
              <div className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-sans">
                {m.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Cards Carousel / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="p-7 rounded-3xl bg-white/95 dark:bg-[#070512]/90 border border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex flex-col justify-between hover:border-violet-500/40 hover:shadow-lg backdrop-blur-xl transition-all"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {t.client}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                  {t.role}
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Client</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Link to Case Studies */}
      <div className="mt-12 text-center">
        <button
          onClick={() => {
            soundFX.playClick();
            navigate('/case-studies');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
        >
          <span>Read in-depth technical case studies</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
