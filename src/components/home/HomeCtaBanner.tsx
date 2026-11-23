import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
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
        className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-br from-slate-900 via-obsidian-950 to-slate-900 text-white border border-white/10 shadow-2xl text-center"
      >
        {/* Glow Spheres */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-fuchsia-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight relative overflow-hidden inline-block">
            <span className="relative z-10">
              Ready to automate
              <br />
              <span className="font-serif italic font-normal tracking-wide underline decoration-violet-400/30 underline-offset-8 bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
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
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-violet-400/35 to-transparent z-20 skew-x-[-22deg]"
            />
          </h2>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                soundFX.playClick();
                navigate('/contact');
              }}
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-violet-50 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm text-zinc-400 font-sans">
            <div>
              or call{' '}
              <a
                href="tel:+917358163590"
                className="text-white hover:text-violet-400 font-medium underline underline-offset-4 transition-colors"
              >
                +91 73581 63590
              </a>
            </div>
            <span className="hidden sm:inline">•</span>
            <div>
              or{' '}
              <a
                href="https://wa.me/917358163590"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
