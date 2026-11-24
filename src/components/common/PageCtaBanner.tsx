import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';

interface PageCtaBannerProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  primaryBtnText?: string;
  onCtaClick?: () => void;
  onPrimaryClick?: () => void;
}

export const PageCtaBanner: React.FC<PageCtaBannerProps> = ({
  badge = 'Launch Your Next Product',
  title = 'Ready to build something great?',
  subtitle,
  description = 'Stop managing spreadsheets and outdated legacy tools. Let us build your high-converting digital engine.',
  buttonText,
  primaryBtnText,
  onCtaClick,
  onPrimaryClick,
}) => {
  const displaySubtitle = subtitle || description;
  const displayButtonText = primaryBtnText || buttonText || 'Start a Conversation';
  const handleClick = onPrimaryClick || onCtaClick || (() => {});

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-white/95 dark:bg-gradient-to-b dark:from-[#0f0a26] dark:via-[#070512] dark:to-[#04030a] text-slate-900 dark:text-white border border-slate-200/90 dark:border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.18)] dark:shadow-2xl dark:shadow-violet-950/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] backdrop-blur-2xl text-center"
      >
        {/* Glow circles */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-600/12 dark:bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-fuchsia-600/10 dark:bg-fuchsia-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-sans">
            {displaySubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                soundFX.playClick();
                handleClick();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-violet-50 font-bold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xl shadow-violet-600/25 hover:scale-105 active:scale-95 border border-violet-400/30 dark:border-transparent"
            >
              <span>{displayButtonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/917358163590"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.06] dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/[0.08] flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href="tel:+917358163590"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-white/[0.06] hover:bg-slate-200/90 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-violet-600/10 dark:bg-violet-400/15 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:rotate-12 transition-transform">
                <Phone className="w-3 h-3" />
              </div>
              <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-sans">Direct Desk:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">+91 73581 63590</span>
            </a>
            <span className="text-slate-400 dark:text-zinc-600 hidden sm:inline">•</span>
            <div className="text-slate-500 dark:text-zinc-400 font-sans text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Zero-obligation architecture consultation</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
