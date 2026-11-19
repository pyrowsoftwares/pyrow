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
        className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-br from-slate-900 via-obsidian-950 to-slate-900 text-white border border-white/10 shadow-2xl text-center"
      >
        {/* Glow circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-fuchsia-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-violet-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {displaySubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                soundFX.playClick();
                handleClick();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-violet-50 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xl shadow-white/10"
            >
              <span>{displayButtonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/916383582980"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2 font-mono">
              <Phone className="w-3.5 h-3.5 text-violet-400" />
              <a href="tel:+916383582980" className="hover:text-white transition-colors">+91 63835 82980</a>
              <span>/</span>
              <a href="tel:+917867009044" className="hover:text-white transition-colors">+91 78670 09044</a>
            </div>
            <span>•</span>
            <div>Zero-obligation consultation</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
