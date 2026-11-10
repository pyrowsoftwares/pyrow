import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { soundFX } from './ui/sound-effects';

interface FaqItem {
  q: string;
  a: string;
  category: 'Ownership & Cost' | 'Timeline & Process' | 'Marketing & Growth' | 'Support';
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      q: 'Who owns the source code and designs after the project is done?',
      a: 'You own 100% of the source code, design files, and database from Day 1. We transfer full ownership directly to your company. There are zero licensing fees or platform lock-ins.',
      category: 'Ownership & Cost',
    },
    {
      q: 'How much does it cost to build a website, app, or software?',
      a: 'Pricing depends on your feature requirements. Starter websites begin from ₹1 Lakh, custom business software from ₹3 to ₹7 Lakhs, and comprehensive mobile apps from ₹5 Lakhs. We give you a fixed-price proposal with no surprise bills.',
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
      a: 'Yes! Along with engineering, our growth marketing team runs profitable Google Ads, Meta (Instagram & Facebook) ad campaigns, local/national SEO, and automated WhatsApp nurturing funnels that drive real business revenue.',
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

  const toggleAccordion = (idx: number) => {
    soundFX.playClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-bold">
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
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-ember-500 shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white dark:bg-obsidian-900 border-ember-500/50 shadow-md'
                    : 'bg-white/80 dark:bg-obsidian-900/60 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-ember-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-ember-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed border-t border-slate-100 dark:border-white/5 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 font-semibold">
                        Category: {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
