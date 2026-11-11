import React from 'react';
import {
  ShieldCheck,
  Quote,
  Linkedin,
  Twitter,
  Github,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Star,
} from 'lucide-react';
import { leadershipTeam, pyrowPillars, clientTestimonials } from '../data/companyData';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface AboutPyrowProps {
  onOpenStrategyCall: () => void;
}

export const AboutPyrow: React.FC<AboutPyrowProps> = ({ onOpenStrategyCall }) => {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Mission</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              Combining World-Class Engineering with{' '}
              <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-flare-gold bg-clip-text text-transparent">
                High-Converting Marketing.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
              <p>
                Most businesses struggle because their agencies are divided. Software companies write code without caring about sales or lead funnels. Marketing agencies run ads on slow, clunky websites that lose visitors before they can buy.
              </p>
              <p className="text-slate-900 dark:text-white font-bold">
                <span className="text-ember-600 dark:text-ember-400">Pyrow</span> was built to solve this exact problem.
                We bring high-speed software development and high-return digital marketing together into one dependable partner.
              </p>
              <p className="text-slate-500 dark:text-zinc-400 text-sm">
                Every website or app we build is engineered for sub-second speed, 99.98% uptime, and 100% intellectual property ownership from Day 1.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-ember-500" />
                <span>100% In-House Team (Zero Outsourcing)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyber-blue" />
                <span>Bank-Grade Security & Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-flare-amber" />
                <span>Weekly Live Test Demos</span>
              </div>
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative border border-slate-800">
              <div className="text-xs font-mono text-ember-400 uppercase tracking-widest mb-3 font-semibold">
                // THE PYROW STANDARD
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                "We measure software not by lines written, but by markets captured."
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                When you partner with Pyrow, you do not just hire developers. You embed a lethal technical taskforce committed to your financial dominance.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5">
                  <div className="text-2xl font-bold font-mono text-white">&lt; 0.6s</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Average P95 Latency</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5">
                  <div className="text-2xl font-bold font-mono text-ember-400">99.98%</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Availability Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Pyrow Standard (3 Pillars) */}
        <div id="standard" className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flare-amber/10 border border-flare-amber/30 text-xs font-mono text-flare-amber mb-3 font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Strict Engineering Doctrine</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              The Pyrow Standard
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400">
              Three non-negotiable principles that dictate every line of code and every ad dollar deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pyrowPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-7 rounded-3xl bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 hover:border-ember-500/40 dark:hover:border-ember-500/50 transition-all duration-300 relative group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div className="text-3xl font-black font-mono bg-gradient-to-r from-ember-500 to-flare-gold bg-clip-text text-transparent mb-4">
                  {pillar.number}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Founder Spotlight */}
        <div id="leadership" className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-xs font-mono text-cyber-blue mb-3 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Governance</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
                Leadership & Founder Spotlight
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md">
              Led by seasoned systems architects and growth engineers with deep enterprise credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={leader.name}
                className={`p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border transition-all duration-300 hover:scale-[1.01] shadow-sm dark:shadow-none ${
                  idx === 0
                    ? 'border-ember-500/60 dark:border-ember-500/80'
                    : 'border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Avatar & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-800 shadow-sm"
                    />
                    {idx === 0 && (
                      <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-ember-500 text-white">
                        <Sparkles className="w-3 h-3 fill-white" />
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">{leader.name}</h4>
                    <div className="text-xs font-bold text-ember-600 dark:text-ember-400">{leader.role}</div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500 mt-0.5">{leader.titleBadge}</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {leader.bio}
                </p>

                {/* Founder Quote */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200/80 dark:border-white/5 mb-5 relative">
                  <Quote className="w-4 h-4 text-ember-500/30 absolute top-2 right-2" />
                  <p className="text-xs italic text-slate-700 dark:text-zinc-300 font-sans leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2 mb-4 bg-slate-100/80 dark:bg-obsidian-950/70 rounded-xl px-2 border border-slate-200/80 dark:border-white/5 text-center">
                  {leader.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-xs font-bold font-mono text-slate-900 dark:text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-500 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Social Verification Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">Verified:</span>
                  {leader.socials.linkedin && (
                    <a
                      href={leader.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {leader.socials.twitter && (
                    <a
                      href={leader.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="Twitter / X"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {leader.socials.github && (
                    <a
                      href={leader.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
              Enterprise Trust & Results
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2 font-mono">
              Direct feedback from CXOs scaling their companies on Pyrow systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/95 dark:bg-[#141D30]/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{t.author}</div>
                      <div className="text-[11px] text-slate-500 dark:text-zinc-500">{t.role}, {t.company}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-ember-500/15 text-ember-600 dark:text-ember-400 border border-ember-500/30">
                    {t.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
