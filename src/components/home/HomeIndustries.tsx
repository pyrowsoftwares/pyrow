import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';

export const HomeIndustries: React.FC = () => {
  const { navigate } = useRouter();

  const industries = [
    'Healthcare & Clinics',
    'Retail Supermarkets',
    'F&B & Cloud Kitchens',
    'Construction & Real Estate',
    'Salons, Spas & Beauty',
    'Education & Academies',
    'Photography & Studios',
    'Automotive & Detailing',
    'Digital Agencies',
    'E-Commerce & D2C',
    'Global Freight & Logistics',
    'Sports & Fitness Gyms',
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 text-violet-600 dark:text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest border border-violet-500/20 mb-3">
          Industries
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
          We've worked across them all.
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-12">
        {industries.map((ind, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3, delay: idx * 0.025 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              soundFX.playClick();
              navigate('/solutions');
            }}
            className="px-5 py-3 rounded-full bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 hover:border-violet-500 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            {ind}
          </motion.button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => {
            soundFX.playClick();
            navigate('/solutions');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
        >
          <span>Explore all industry vertical platforms</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
