import React, { useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Badge } from './ui/badge';
import { soundFX } from './ui/sound-effects';

interface FaqItem {
  q: string;
  a: string;
  category: 'Ownership & Cost' | 'Timeline & Process' | 'Marketing & Growth' | 'Support';
}

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      q: 'Who owns the source code and designs after the project is done?',
      a: 'You own 100% of the source code, design files, and database from Day 1. We transfer full intellectual property ownership directly to your company. There are zero licensing fees or platform lock-ins.',
      category: 'Ownership & Cost',
    },
    {
      q: 'How much does it cost to build a website, app, or software?',
      a: 'Every project receives a clear, transparent fixed-price proposal tailored to your exact deliverables and timeline. We operate on structured milestone-based payments with zero surprise invoices, zero hidden maintenance fees, and no hourly inflation.',
      category: 'Ownership & Cost',
    },
    {
      q: 'How long does a typical project take from start to finish?',
      a: 'Most responsive websites and mobile apps launch in 3 to 6 weeks. Custom business software and ERPs typically take 6 to 10 weeks. You receive live working demo links every single week so you can test real progress.',
      category: 'Timeline & Process',
    },
    {
      q: 'What payment modes and invoicing formats do you support in India?',
      a: 'We issue official GST-compliant tax invoices with 18% Input Tax Credit (ITC) eligibility. We accept payments through NEFT, RTGS, IMPS, UPI, and Corporate Net Banking.',
      category: 'Ownership & Cost',
    },
    {
      q: 'Can Pyrow also help us get paying leads and customers?',
      a: 'Yes! Along with engineering, our growth marketing team runs profitable Google Ads, Meta (Instagram & Facebook) ad campaigns, local/national SEO, and automated WhatsApp nurturing funnels that drive real business growth and customer orders.',
      category: 'Marketing & Growth',
    },
    {
      q: 'How does WhatsApp Business Automation and the Green Tick work?',
      a: 'As official Meta developer partners, we set up the official WhatsApp Business Cloud API for your brand. This enables 24/7 automated customer replies, instant order notifications, and application for the official WhatsApp Green Tick badge.',
      category: 'Marketing & Growth',
    },
    {
      q: 'Do you provide maintenance and updates after the website is launched?',
      a: 'Yes! All Pyrow projects include post-launch support, automatic daily cloud backups, security patching, and our 99.98% server uptime guarantee so your business never goes offline.',
      category: 'Support',
    },
    {
      q: 'Do we need a technical person on our team to work with you?',
      a: 'Not at all. Our team handles everything from design and coding to server hosting and domain setup. We explain everything in simple, plain English and provide step-by-step video training for your staff.',
      category: 'Timeline & Process',
    },
  ];

  const filtered = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/25 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Clear, straightforward answers about our pricing, timelines, code ownership, and support.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. pricing, ownership, timeline, WhatsApp)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-ember-500 shadow-sm dark:shadow-none"
            />
          </div>
        </div>

        {/* Accordion List with shadcn Accordion */}
        <div className="rounded-3xl bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-none p-4 sm:p-6">
          <Accordion defaultValue={["faq-0"]} className="w-full space-y-2">
            {filtered.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border border-slate-100 dark:border-slate-800/80 rounded-2xl px-4 py-1 data-[open]:bg-slate-50/50 dark:data-[open]:bg-white/[0.02] transition-colors"
              >
                <AccordionTrigger
                  onClick={() => soundFX.playClick()}
                  className="hover:no-underline py-4 text-left font-semibold text-slate-900 dark:text-white text-sm sm:text-base gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-ember-500 flex-shrink-0" />
                    <span>{item.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed pb-4 pt-1 pl-5">
                  <p>{item.a}</p>
                  <div className="mt-3">
                    <Badge variant="outline" className="text-[10px] font-mono border-slate-200 dark:border-slate-800 text-slate-500 dark:text-zinc-400">
                      Category: {item.category}
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
