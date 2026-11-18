import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ShoppingBag, Cloud, Layers, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';

export const HomeExpertise: React.FC = () => {
  const { navigate } = useRouter();

  const services = [
    {
      title: 'AI Automation',
      desc: 'Smart tools like ContentFlow AI and automated WhatsApp workflows that streamline your daily operations.',
      icon: <Bot className="w-6 h-6 text-violet-500" />,
      link: '/products',
      tag: 'Autonomous',
    },
    {
      title: 'POS Solutions',
      desc: 'Offline-first retail billing systems for supermarkets, fashion boutiques, and restaurant QSR chains.',
      icon: <ShoppingBag className="w-6 h-6 text-fuchsia-500" />,
      link: '/products',
      tag: 'Sub-Second',
    },
    {
      title: 'Enterprise SaaS',
      desc: 'Cloud platforms like Pyrow Flow & Multi-Store Inventory to manage and automate your entire business.',
      icon: <Cloud className="w-6 h-6 text-indigo-500" />,
      link: '/products',
      tag: 'Cloud-Native',
    },
    {
      title: 'Industry Platforms',
      desc: 'Specialized operating software for Salons (Pyrow Salon), Car Detailing, Clinics, and Academies.',
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      link: '/solutions',
      tag: 'Tailored',
    },
    {
      title: 'Digital Presence',
      desc: 'Ultra-fast websites designed for 100+ brands with 98+ PageSpeed, modern UX, and conversion optimization.',
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      link: '/portfolio',
      tag: 'High-Converting',
    },
    {
      title: 'Custom Software',
      desc: 'Tailor-made cloud applications, internal logistics engines, and automated billing software.',
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      link: '/products',
      tag: 'Bespoke',
    },
  ];

  return (
    <section id="services-section" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest border border-violet-500/20 mb-3"
        >
          Expertise
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight"
        >
          Software that solves real problems.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            whileHover={{ y: -4 }}
            onClick={() => {
              soundFX.playClick();
              navigate(item.link);
            }}
            className="group p-8 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 hover:border-violet-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-violet-600 dark:text-violet-400">
              <span>Explore details</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
