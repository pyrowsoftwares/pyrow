import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Clock, BookOpen, ArrowUpRight, Calendar, User, Tag } from 'lucide-react';
import { soundFX } from '../components/ui/sound-effects';
import { LuxuryScrollCard } from '../components/ui/LuxuryScrollCard';

interface BlogsPageProps {
  onOpenStrategyCall: () => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onOpenStrategyCall }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Architecture', 'Retail Tech', 'Cloud Engineering', 'SaaS Growth'];

  const articles = [
    {
      id: 'offline-first-architecture',
      title: 'Architecting Offline-First Point of Sale Systems That Never Lose a Transaction',
      tag: 'Architecture',
      date: 'Nov 12, 2026',
      readTime: '6 min read',
      author: 'Barathraj S, Lead Architect',
      excerpt:
        'When high-volume retail stores face network outages, every second of downtime costs money. Here is how we engineered bidirectional SQLite-to-Cloud sync with zero conflict resolution bottlenecks.',
      slug: '/blogs/offline-first-architecture',
    },
    {
      id: 'saas-pricing-engine',
      title: 'Building a High-Concurrency Billing and Subscription Engine in Go and Postgres',
      tag: 'Cloud Engineering',
      date: 'Oct 28, 2026',
      readTime: '8 min read',
      author: 'Engineering Squad',
      excerpt:
        'Handling tiered usage, prorations, and tax compliance across 14 currencies without drifting ledger numbers. A deep dive into immutable transactional records.',
    },
    {
      id: 'retail-ai-automation',
      title: 'How Autonomous WhatsApp Ordering Agents Reduced Restaurant Overhead by 40%',
      tag: 'Retail Tech',
      date: 'Oct 15, 2026',
      readTime: '5 min read',
      author: 'AI Solutions Squad',
      excerpt:
        'Case breakdown of how we connected conversational LLMs to kitchen POS hardware, enabling frictionless guest ordering and instant payment reconciliation.',
    },
    {
      id: 'react-framer-performance',
      title: 'Achieving 60 FPS Animations on Complex Enterprise Dashboards in React 18',
      tag: 'Architecture',
      date: 'Sep 30, 2026',
      readTime: '7 min read',
      author: 'Frontend Platform Squad',
      excerpt:
        'Techniques for eliminating virtual DOM layout thrashing, virtualizing 10,000+ data rows, and isolating kinetic animations to dedicated compositor threads.',
    },
    {
      id: 'b2b-growth-funnel',
      title: 'The Modern B2B Product-Led Growth Playbook: From Cold Traffic to Paid Tier',
      tag: 'SaaS Growth',
      date: 'Sep 18, 2026',
      readTime: '9 min read',
      author: 'Growth Engineering',
      excerpt:
        'Why traditional digital marketing fails B2B software, and how pairing interactive product estimators with programmatic SEO unlocks 3.5x conversion lift.',
    },
    {
      id: 'kubernetes-multi-tenant',
      title: 'Multi-Tenant Isolation at Scale: Hardening Microservices on AWS and Cloudflare',
      tag: 'Cloud Engineering',
      date: 'Aug 24, 2026',
      readTime: '10 min read',
      author: 'DevOps & Infrastructure',
      excerpt:
        'Securing enterprise customer data boundaries with tenant-specific database schemas, automated mTLS encryption, and distributed rate limiters.',
    },
  ];

  const filteredArticles = selectedTag === 'All'
    ? articles
    : articles.filter((a) => a.tag === selectedTag);

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Engineering & Strategy Insights"
        title="Knowledge from the"
        highlightText="Production Trenches"
        description="Deep dives into scalable cloud architecture, point of sale engineering, offline synchronization, and data-driven product growth."
        breadcrumbs={[{ label: 'Blog & Insights' }]}
        primaryCtaText="Work With Us"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Filter Chips */}
      <section className="pt-12 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                soundFX.playClick();
                setSelectedTag(tag);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${selectedTag === tag
                  ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/20'
                  : 'bg-white dark:bg-obsidian-850 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/10 hover:border-violet-500/50'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <LuxuryScrollCard
              key={article.id}
              index={idx}
              columns={3}
              className="bg-white dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all flex flex-col justify-between"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-violet-600/10 text-violet-600 dark:text-violet-400 font-semibold border border-violet-500/20">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="p-7 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                  <div className="font-semibold text-slate-900 dark:text-white">{article.author}</div>
                  <div className="font-mono text-[10px]">{article.date}</div>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-obsidian-900 flex items-center justify-center text-slate-700 dark:text-zinc-300 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </LuxuryScrollCard>
          ))}
        </div>
      </section>

      <PageCtaBanner
        badge="Have a technical challenge?"
        title="Need an experienced engineering team for your platform?"
        description="Let’s discuss your technical architecture and explore how Pyrow can accelerate your roadmap."
        primaryBtnText="Consult Our Architects"
        onPrimaryClick={onOpenStrategyCall}
      />
    </div>
  );
};
