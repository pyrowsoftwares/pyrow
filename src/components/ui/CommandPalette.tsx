import React, { useEffect, useState, useRef } from 'react';
import { Search, ArrowRight, Laptop, TrendingUp, Cpu, Smartphone, Database, PhoneCall, Sparkles, X, CornerDownLeft } from 'lucide-react';
import { soundFX } from './sound-effects';

interface CommandItem {
  id: string;
  title: string;
  category: 'Services' | 'Solutions' | 'Actions' | 'Company';
  icon: React.ReactNode;
  action: () => void;
  badge?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStrategyCall: () => void;
  onOpenDemoRequest: (softwareName?: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenStrategyCall,
  onOpenDemoRequest,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commandItems: CommandItem[] = [
    {
      id: 'contact-jump',
      title: 'Project Roadmap & Enquiries Desk',
      category: 'Actions',
      icon: <Sparkles className="w-4 h-4 text-ember-500" />,
      action: () => scrollToSection('estimator'),
      badge: 'Enquiry Desk',
    },
    {
      id: 'call',
      title: 'Schedule 30-Min Strategy Call (Solutions Architect)',
      category: 'Actions',
      icon: <PhoneCall className="w-4 h-4 text-flare-amber" />,
      action: () => {
        onClose();
        onOpenStrategyCall();
      },
      badge: 'Direct Booking',
    },
    {
      id: 'service-web',
      title: 'Website Development & E-Commerce Engineering',
      category: 'Services',
      icon: <Laptop className="w-4 h-4 text-cyber-blue" />,
      action: () => scrollToSection('services'),
      badge: 'Services',
    },
    {
      id: 'service-marketing',
      title: 'Performance Digital Marketing & SEO Dominance',
      category: 'Services',
      icon: <TrendingUp className="w-4 h-4 text-ember-500" />,
      action: () => scrollToSection('services'),
      badge: 'Growth Engine',
    },
    {
      id: 'service-software',
      title: 'Enterprise Custom Software & Cloud Architectures',
      category: 'Services',
      icon: <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      action: () => scrollToSection('services'),
      badge: 'Core Tech',
    },
    {
      id: 'service-mobile',
      title: 'iOS, Android & Flutter Mobile Engineering',
      category: 'Services',
      icon: <Smartphone className="w-4 h-4 text-flare-amber" />,
      action: () => scrollToSection('services'),
      badge: 'Mobile 60fps',
    },
    {
      id: 'how-it-works-jump',
      title: 'How We Partner: 4-Step Customer Journey',
      category: 'Company',
      icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
      action: () => scrollToSection('how-it-works'),
      badge: 'Methodology',
    },
    {
      id: 'case-studies-jump',
      title: 'Enterprise Case Studies & Throughput Metrics',
      category: 'Company',
      icon: <Database className="w-4 h-4 text-flare-amber" />,
      action: () => scrollToSection('case-studies'),
      badge: 'Flagships',
    },
    {
      id: 'ind-erp',
      title: 'Enterprise ERP Suite (Unified Multi-Branch)',
      category: 'Solutions',
      icon: <Database className="w-4 h-4 text-ember-500" />,
      action: () => {
        onClose();
        onOpenDemoRequest('Enterprise ERP Suite');
      },
      badge: 'Enterprise Demo',
    },
    {
      id: 'ind-crm',
      title: 'AI-Powered CRM & Omnichannel WhatsApp Automation',
      category: 'Solutions',
      icon: <Database className="w-4 h-4 text-cyber-blue" />,
      action: () => {
        onClose();
        onOpenDemoRequest('AI CRM & WhatsApp Business API');
      },
      badge: 'Enterprise Demo',
    },
    {
      id: 'about-story',
      title: 'Our Story & The Pyrow Engineering Standard',
      category: 'Company',
      icon: <Sparkles className="w-4 h-4 text-slate-500" />,
      action: () => scrollToSection('about'),
      badge: 'About Us',
    },
  ];

  const filtered = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      soundFX.playChime();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          soundFX.playClick();
          window.dispatchEvent(new CustomEvent('open-command-palette'));
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        soundFX.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        soundFX.playHover();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          soundFX.playClick();
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filtered, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/60 dark:bg-obsidian-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={() => {
          soundFX.playClick(600);
          onClose();
        }}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        {/* Glow ambient bar */}
        <div className="h-1.5 bg-gradient-to-r from-ember-500 via-flare-amber to-cyber-blue" />

        {/* Input header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-white/10">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search Pyrow services, solutions, or jump to..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-obsidian-700 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 ml-2">
            ESC
          </kbd>
        </div>

        {/* Items list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400 dark:text-zinc-500 text-sm">
              No matching commands found for "{query}".
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    soundFX.playClick();
                    item.action();
                  }}
                  onMouseEnter={() => {
                    setSelectedIndex(index);
                    soundFX.playHover();
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl cursor-pointer transition-colors duration-150 ${
                    isSelected
                      ? 'bg-ember-500/10 dark:bg-ember-500/15 text-slate-900 dark:text-white border border-ember-500/40 font-bold'
                      : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl ${
                        isSelected
                          ? 'bg-ember-500/20 text-ember-600 dark:text-ember-400'
                          : 'bg-slate-100 dark:bg-obsidian-700 text-slate-600 dark:text-zinc-400'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-xs text-slate-400 dark:text-zinc-500 font-mono">{item.category}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.badge && (
                      <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400">
                        {item.badge}
                      </span>
                    )}
                    {isSelected && <CornerDownLeft className="w-4 h-4 text-ember-500" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-obsidian-950 border-t border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-ember-500 font-bold">Pyrow Command Engine v2.4</span>
        </div>
      </div>
    </div>
  );
};
