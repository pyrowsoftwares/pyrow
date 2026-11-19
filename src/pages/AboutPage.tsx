import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Sparkles, Shield, Rocket, Globe, Users, Award, ChevronDown } from 'lucide-react';

interface AboutPageProps {
  onOpenStrategyCall: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenStrategyCall }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '150+', label: 'Projects Shipped' },
    { value: '100+', label: 'Active Clients' },
    { value: '15+', label: 'Industries Transformed' },
    { value: '98%', label: 'Client Retention Rate' },
  ];

  const rules = [
    {
      num: '01',
      title: 'Ship Fast & Reliably',
      desc: 'We believe in rapid iteration. Real production features reach real users every sprint. No bloat, no corporate bureaucracy.',
      icon: <Rocket className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
    },
    {
      num: '02',
      title: 'Cloud-Native & Resilient Architecture',
      desc: 'Built for high concurrency and zero downtime. Systems that effortlessly scale from your first 1,000 users to millions of transactions.',
      icon: <Shield className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />,
    },
    {
      num: '03',
      title: 'Stay Agile, Think Global',
      desc: 'Modern engineering designed for the global market. We bring high-end Silicon Valley architectures directly to ambitious businesses.',
      icon: <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  const faqs = [
    {
      q: 'What is Pyrow?',
      a: 'Pyrow is a modern product engineering and digital growth agency. We specialize in custom software development, retail POS and billing engines, enterprise ERP/CRM platforms, and high-ROI digital marketing.',
    },
    {
      q: 'How does Pyrow differ from traditional software agencies?',
      a: 'Traditional agencies either write code with zero marketing awareness, or run marketing ads with no technical depth. Pyrow combines world-class software engineering with conversion-focused digital marketing under one roof.',
    },
    {
      q: 'What industries does Pyrow build for?',
      a: 'We have shipped software across 15+ industries including Retail, E-Commerce, Healthcare, Manufacturing, Real Estate, Automotive, Salons & Spas, and B2B SaaS startups.',
    },
    {
      q: 'Where are Pyrow software products hosted and deployed?',
      a: 'All our software platforms are built cloud-native, deploying onto AWS, Google Cloud, and Cloudflare with global CDN caching, auto-scaling, and bank-grade data security.',
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="About Pyrow"
        title="We are"
        highlightText="Pyrow"
        description="We build high-performance software products and scale them with digital marketing, connecting growing businesses with global engineering standards."
        breadcrumbs={[{ label: 'About Us' }]}
        primaryCtaText="Work With Us"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-obsidian-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm text-center"
        >
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 tracking-wider uppercase">
            Our Mission
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-snug">
            Exceptional engineering should not be a privilege for tech giants. It should power every ambitious business.
          </h2>
          <p className="mt-6 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Pyrow started with a simple observation: modern businesses were struggling with fragmented spreadsheets, slow legacy desktop software, and disjointed marketing agencies. They had the ambition to dominate their markets, but lacked the modern digital tools to execute.
          </p>
          <p className="mt-4 text-slate-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We don't just deliver code — we engineer the digital operating system for your revenue growth. Today, Pyrow platforms process millions in transactions, orchestrate enterprise workflows, and drive predictable customer acquisition.
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.96, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, delay: (idx % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-obsidian-900/50 border border-slate-200/80 dark:border-white/5 shadow-sm transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black font-display bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-zinc-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Rules We Build By */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Execution Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white mt-2">
            The Principles We Build By
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm relative group hover:border-violet-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black font-display text-slate-200 dark:text-white/10 group-hover:text-violet-500/30 transition-colors">
                  {rule.num}
                </span>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                  {rule.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {rule.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {rule.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-obsidian-900/60 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-violet-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Ready to build something together?"
        subtitle="Let's engineer your high-converting software product and fuel your digital growth."
        buttonText="Schedule a Consultation"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
