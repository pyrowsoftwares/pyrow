import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { soundFX } from '../ui/sound-effects';

interface HomeCtaBannerProps {
  onOpenStrategyCall?: () => void;
}

export const HomeCtaBanner: React.FC<HomeCtaBannerProps> = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" id="cta">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-white/90 dark:bg-gradient-to-b dark:from-[#0f0a26] dark:via-[#070512] dark:to-[#04030a] text-slate-900 dark:text-white border border-slate-200/90 dark:border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.18)] dark:shadow-2xl dark:shadow-violet-950/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] backdrop-blur-2xl text-center"
      >
        {/* Glow Spheres */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/15 dark:bg-violet-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-fuchsia-600/12 dark:bg-fuchsia-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-mono font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Next Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight relative overflow-hidden inline-block text-slate-900 dark:text-white">
            <span className="relative z-10">
              Ready to automate
              <br />
              <span className="font-black tracking-tight underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
                your business?
              </span>
            </span>

            {/* Radiant light sweep */}
            <motion.span
              variants={{
                hidden: { x: '-130%', opacity: 0 },
                visible: {
                  x: '180%',
                  opacity: [0, 0.5, 0],
                  transition: { duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-violet-400/25 dark:via-violet-400/35 to-transparent z-20 skew-x-[-22deg]"
            />
          </h2>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                soundFX.playClick();
                navigate('/contact');
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-violet-50 font-bold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xl shadow-violet-600/25 hover:scale-105 active:scale-95 border border-violet-400/30 dark:border-transparent"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-9 pt-6 border-t border-slate-200/60 dark:border-white/[0.08] flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            {/* Direct Phone Chip */}
            <a
              href="tel:+917358163590"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-white/[0.06] hover:bg-slate-200/90 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-violet-600/10 dark:bg-violet-400/15 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:rotate-12 transition-transform">
                <PhoneCall className="w-3 h-3" />
              </div>
              <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-sans">Call Us:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">+91 73581 63590</span>
            </a>

            {/* Direct WhatsApp Chip */}
            <a
              href="https://wa.me/917358163590"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-3 h-3" />
              </div>
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">Chat on WhatsApp</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
