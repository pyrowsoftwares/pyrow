import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, ShoppingBag, Users, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';
import { LuxuryScrollCard } from '../ui/LuxuryScrollCard';
import { LuxurySectionHeading } from '../ui/LuxurySectionHeading';

export const HomeFeaturedProducts: React.FC = () => {
  const { navigate } = useRouter();

  const products = [
    {
      badge: 'Flagship',
      category: 'AI Assistant',
      name: 'Pyrow Assist',
      desc: 'Your AI-powered business assistant. Handles customer queries 24/7, manages booking appointments, and automates repetitive workflows — so you can focus on growing.',
      tags: ['AI Chat', 'Appointments', 'Analytics', 'Multi-language'],
      gradient: 'from-violet-600/20 via-purple-600/10 to-transparent',
      borderColor: 'border-violet-500/30',
      icon: <Bot className="w-5 h-5 text-violet-500" />,
    },
    {
      badge: 'AI Automation',
      category: 'Growth Engine',
      name: 'ContentFlow AI',
      desc: 'Automate your entire content marketing strategy. One prompt generates optimized posts for all your channels — LinkedIn, Instagram, X, and Blogs — written in your authentic brand voice.',
      tags: ['Multi-platform', 'AI Scheduling', 'Brand Voice', 'Analytics'],
      gradient: 'from-fuchsia-600/20 via-pink-600/10 to-transparent',
      borderColor: 'border-fuchsia-500/30',
      icon: <Sparkles className="w-5 h-5 text-fuchsia-500" />,
    },
    {
      badge: 'Retail Engine',
      category: 'POS & Billing',
      name: 'Pyrow POS',
      desc: 'Mobile-first point-of-sale billing system. Works 100% offline during internet outages, syncs seamlessly when connected. Built for retail stores and restaurants that need sub-second speed.',
      tags: ['Offline-First', 'Fast 0.8s Billing', 'Reports', 'Barcode Sync'],
      gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent',
      borderColor: 'border-indigo-500/30',
      icon: <ShoppingBag className="w-5 h-5 text-indigo-500" />,
    },
    {
      badge: 'Pipeline CRM',
      category: 'Sales Automation',
      name: 'Pyrow CRM',
      desc: 'Track every incoming lead, customer interaction, and follow-up pipeline. Simple enough for a solopreneur, powerful enough for multi-branch sales teams.',
      tags: ['Lead Scoring', 'Visual Pipeline', 'WhatsApp Reminders', 'Automated Quotes'],
      gradient: 'from-purple-600/20 via-violet-600/10 to-transparent',
      borderColor: 'border-purple-500/30',
      icon: <Users className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <LuxurySectionHeading
        badge="Featured products"
        title="Tools we've built and shipped."
        rightAction={
          <button
            onClick={() => {
              soundFX.playClick();
              navigate('/products');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md cursor-pointer"
          >
            <span>View all products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((item, idx) => (
          <LuxuryScrollCard
            key={idx}
            index={idx}
            columns={2}
            className={`p-8 sm:p-10 rounded-3xl bg-white dark:bg-obsidian-850 border ${item.borderColor} shadow-md hover:shadow-[0_25px_60px_-12px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_30px_70px_-15px_rgba(139,92,246,0.38)] flex flex-col justify-between`}
          >
            {/* Ambient Corner Gradient */}
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20`} />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono tracking-widest text-slate-400 dark:text-zinc-500 font-semibold">
                    {`0${idx + 1} / 04`}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                    {item.badge}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {item.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-obsidian-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between relative z-10">
              <button
                onClick={() => {
                  soundFX.playClick();
                  navigate('/products');
                }}
                className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn more inside products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  soundFX.playClick();
                  navigate('/contact');
                }}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </LuxuryScrollCard>
        ))}
      </div>
    </section>
  );
};
