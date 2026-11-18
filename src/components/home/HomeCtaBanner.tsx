import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';

interface HomeCtaBannerProps {
  onOpenStrategyCall: () => void;
}

export const HomeCtaBanner: React.FC<HomeCtaBannerProps> = ({ onOpenStrategyCall }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-br from-slate-900 via-obsidian-950 to-slate-900 text-white border border-white/10 shadow-2xl text-center"
      >
        {/* Glow Spheres */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-fuchsia-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-violet-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Take the Next Step?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
            Ready to automate your business?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Get a tailored architecture roadmap and transparent project quote. Speak directly with our software architects.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenStrategyCall();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-violet-50 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xl"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/916383582980"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp us</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-violet-400" />
              <span>Call / WhatsApp:</span>
              <a href="tel:+916383582980" className="hover:text-white transition-colors">+91 63835 82980</a>
              <span>/</span>
              <a href="tel:+917867009044" className="hover:text-white transition-colors">+91 78670 09044</a>
            </div>
            <span>•</span>
            <span>24-Hour Technical Scope SLA</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
