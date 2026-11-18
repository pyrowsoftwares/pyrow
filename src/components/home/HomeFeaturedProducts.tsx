import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, ShoppingBag, Users, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';

export const HomeFeaturedProducts: React.FC = () => {
  const { navigate } = useRouter();

  const products = [
    {
      badge: 'Flagship',
      category: 'AI Assistant',
      name: 'Pyrow Assist (ZAssist)',
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
      name: 'Pyrow POS (ZPOS)',
      desc: 'Mobile-first point-of-sale billing system. Works 100% offline during internet outages, syncs seamlessly when connected. Built for retail stores and restaurants that need sub-second speed.',
      tags: ['Offline-First', 'Fast 0.8s Billing', 'Reports', 'Barcode Sync'],
      gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent',
      borderColor: 'border-indigo-500/30',
      icon: <ShoppingBag className="w-5 h-5 text-indigo-500" />,
    },
    {
      badge: 'Pipeline CRM',
      category: 'Sales Automation',
      name: 'Pyrow CRM (ZCRM)',
      desc: 'Track every incoming lead, customer interaction, and follow-up pipeline. Simple enough for a solopreneur, powerful enough for multi-branch sales teams.',
      tags: ['Lead Scoring', 'Visual Pipeline', 'WhatsApp Reminders', 'Automated Quotes'],
      gradient: 'from-purple-600/20 via-violet-600/10 to-transparent',
      borderColor: 'border-purple-500/30',
      icon: <Users className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
      >
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest border border-violet-500/20 mb-3">
            Featured products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Tools we've built and shipped.
          </h2>
        </div>

        <button
          onClick={() => {
            soundFX.playClick();
            navigate('/products');
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md self-start sm:self-auto cursor-pointer"
        >
          <span>View all products</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className={`p-8 sm:p-10 rounded-3xl bg-white dark:bg-obsidian-850 border ${item.borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group`}
          >
            {/* Ambient Corner Gradient */}
            <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20`} />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                  {item.badge}
                </span>
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

            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};
