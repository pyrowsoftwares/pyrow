import React, { useState } from 'react';
import {
  Flame,
  ShieldCheck,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  Github,
  CheckCircle2,
  Lock,
  Globe,
  Sparkles,
} from 'lucide-react';
import { FlameLogo } from './ui/FlameLogo';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface FooterProps {
  onOpenScopeCalculator: () => void;
  onOpenStrategyCall: () => void;
  onOpenDemoRequest: (name?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenScopeCalculator,
  onOpenStrategyCall,
  onOpenDemoRequest,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    soundFX.playChime();
    setSubscribed(true);
  };

  const scrollTo = (id: string) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-obsidian-950 border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* High-Impact Animated Call-To-Action Marquee Banner */}
      <div
        onClick={onOpenScopeCalculator}
        className="group relative cursor-pointer py-6 sm:py-8 bg-gradient-to-r from-ember-600 via-ember-500 to-flare-amber text-white overflow-hidden select-none transition-all duration-300 hover:brightness-105"
      >
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap text-xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span>READY TO GROW YOUR BUSINESS?</span>
              <span className="w-3 h-3 rounded-full bg-white" />
              <span className="underline decoration-2 underline-offset-4">START YOUR PROJECT</span>
              <span className="w-3 h-3 rounded-full bg-white" />
              <span>WE BUILD SOFTWARE THAT DELIVERS RESULTS</span>
              <span className="w-3 h-3 rounded-full bg-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-200 dark:border-white/10">
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <FlameLogo variant="full" size="lg" />
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm mt-3">
              Pyrow is a leading Indian technology agency. We design and build fast websites, mobile apps, custom company ERP software, and high-return digital marketing campaigns.
            </p>

            {/* Compliance Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <Lock className="w-3 h-3 text-ember-500" />
                SOC2 Type II Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <ShieldCheck className="w-3 h-3 text-cyber-blue" />
                ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <Globe className="w-3 h-3 text-flare-amber" />
                GDPR & HIPAA Compliant
              </span>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-obsidian-800 hover:bg-slate-200 dark:hover:bg-obsidian-700 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-obsidian-800 hover:bg-slate-200 dark:hover:bg-obsidian-700 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-obsidian-800 hover:bg-slate-200 dark:hover:bg-obsidian-700 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Engineering & Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Engineering Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400 font-sans">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-ember-600 dark:hover:text-ember-400 transition-colors"
                >
                  Web Development & UI/UX
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-ember-600 dark:hover:text-ember-400 transition-colors"
                >
                  Headless E-Commerce & Shopify Plus
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-ember-600 dark:hover:text-ember-400 transition-colors"
                >
                  24/7 Cloud DevOps & AWS Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-ember-600 dark:hover:text-ember-400 transition-colors"
                >
                  Website Revamp & Speed (95+ PageSpeed)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-ember-600 dark:hover:text-ember-400 transition-colors"
                >
                  Custom Software & Microservices
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-ember-600 dark:hover:text-ember-400 transition-colors"
                >
                  iOS, Android & Flutter Engineering
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industry Software (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Software Suites
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400 font-sans">
              <li>
                <button
                  onClick={() => {
                    scrollTo('industries');
                    onOpenDemoRequest('Enterprise ERP');
                  }}
                  className="hover:text-cyber-blue transition-colors"
                >
                  Enterprise ERP Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('industries');
                    onOpenDemoRequest('Predictive CRM');
                  }}
                  className="hover:text-cyber-blue transition-colors"
                >
                  Predictive CRM Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('industries');
                    onOpenDemoRequest('Inventory System');
                  }}
                  className="hover:text-cyber-blue transition-colors"
                >
                  Inventory & Multi-Warehouse
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('industries');
                    onOpenDemoRequest('Sub-Second POS');
                  }}
                  className="hover:text-cyber-blue transition-colors"
                >
                  Sub-Second Billing & POS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('industries');
                    onOpenDemoRequest('WhatsApp Bot API');
                  }}
                  className="hover:text-cyber-blue transition-colors"
                >
                  WhatsApp Business API Bot
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('industries');
                    onOpenDemoRequest('Hospital EMR');
                  }}
                  className="hover:text-cyber-blue transition-colors"
                >
                  Hospital & Healthcare EMR
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Call (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Engineering Intelligence
            </h4>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Curated breakdowns of modern distributed architectures, performance marketing frameworks, and zero-loss migrations.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-ember-500"
                  />
                </div>
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Subscribe to Briefing
                </MagneticButton>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed! Welcome to the Pyrow Dispatch.</span>
              </div>
            )}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} Pyrow Technologies & Systems Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Engineering
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Security Whitepaper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
