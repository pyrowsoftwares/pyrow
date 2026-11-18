import React, { useState } from 'react';
import {
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
  Phone,
  MessageSquare,
} from 'lucide-react';
import { FlameLogo } from './ui/FlameLogo';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';
import { useRouter } from '../context/RouterContext';

interface FooterProps {
  onOpenStrategyCall: () => void;
  onOpenDemoRequest: (name?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenStrategyCall,
  onOpenDemoRequest,
}) => {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    soundFX.playChime();
    setSubscribed(true);
  };

  const handleLink = (path: string, scrollToId?: string) => {
    soundFX.playClick();
    navigate(path, scrollToId);
  };

  return (
    <footer className="relative bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      {/* High-Impact Animated Call-To-Action Marquee Banner */}
      <div
        onClick={onOpenStrategyCall}
        className="group relative cursor-pointer py-6 sm:py-8 bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-600 text-white overflow-hidden select-none transition-all duration-300 hover:brightness-105"
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
            <div onClick={() => handleLink('/')} className="cursor-pointer inline-block">
              <FlameLogo variant="full" size="lg" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm mt-3">
              Pyrow is a global software engineering and digital marketing agency. We design and build fast websites, mobile apps, retail POS suites, custom cloud ERPs, and high-converting marketing campaigns.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
              <div className="flex flex-wrap items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>WhatsApp:</span>
                <a
                  href="https://wa.me/916383582980"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-500 transition-colors font-mono"
                >
                  +91 63835 82980
                </a>
                <span className="text-slate-400">/</span>
                <a
                  href="https://wa.me/917867009044"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-500 transition-colors font-mono"
                >
                  +91 78670 09044
                </a>
              </div>
              <a
                href="mailto:contact@pyrow.in"
                className="flex items-center gap-2 hover:text-violet-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-violet-500" />
                <span>Email: contact@pyrow.in</span>
              </a>
            </div>

            {/* Compliance Trust Badges */}
            <div className="pt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <Lock className="w-3 h-3 text-violet-600 dark:text-purple-400" />
                SOC2 Type II Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-zinc-300 font-semibold">
                <Globe className="w-3 h-3 text-purple-500" />
                GDPR & HIPAA Compliant
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
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

          {/* Column 2: Company & Architecture (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Company & Culture
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400 font-sans">
              <li>
                <button
                  onClick={() => handleLink('/about')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  About Pyrow
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/founder')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Founder & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/philosophy')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Philosophy & Core Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/team')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Engineering Squads
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/why-we-exist')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Why We Exist
                </button>
              </li>
              {/* Careers (Hidden as requested)
              <li>
                <button
                  onClick={() => handleLink('/careers')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left font-medium text-violet-600 dark:text-violet-400"
                >
                  Careers (We're Hiring)
                </button>
              </li>
              */}
            </ul>
          </div>

          {/* Column 3: Products & Software (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Software & Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400 font-sans">
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  All Products Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Retail POS & Billing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Enterprise Cloud ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/solutions')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Industry Verticals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/case-studies')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Case Studies & Metrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/portfolio')}
                  className="hover:text-violet-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Portfolio & Clients
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

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => handleLink('/blogs')}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs font-medium hover:border-violet-500 transition-colors"
              >
                Read Engineering Blog
              </button>
              <button
                onClick={() => handleLink('/contact')}
                className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-medium hover:bg-violet-700 transition-colors"
              >
                Direct Inquiry Desk
              </button>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full bg-slate-50 dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-violet-500"
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
            <button
              onClick={() => handleLink('/privacy-policy')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleLink('/terms')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Terms of Engineering
            </button>
            <span>•</span>
            <button
              onClick={() => handleLink('/philosophy')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Architecture Standards
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
