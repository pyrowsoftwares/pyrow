import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Terminal, Layout, Bot, TrendingUp, Users } from 'lucide-react';

interface TeamPageProps {
  onOpenStrategyCall: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onOpenStrategyCall }) => {
  const squads = [
    {
      title: 'Systems & Cloud Architecture',
      role: 'Backend & Infrastructure',
      desc: 'Designs multi-tenant databases, microservices, event-driven queues, and bulletproof cloud infrastructure on AWS and Google Cloud with sub-50ms latency.',
      icon: <Terminal className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      skills: ['PostgreSQL', 'Node / Go', 'Redis', 'Docker & K8s', 'AWS / Cloudflare'],
    },
    {
      title: 'Product Design & Mobile',
      role: 'Frontend & App Engineering',
      desc: 'Crafts lightning-fast, high-converting interfaces and cross-platform mobile apps for iOS and Android that users genuinely love interacting with.',
      icon: <Layout className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
      skills: ['React / Vite', 'Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Intelligent Automation & AI',
      role: 'AI Workflows & Integration',
      desc: 'Builds autonomous messaging bots, smart quoting tools, automated inventory sync, and intelligent agent workflows that eliminate manual human error.',
      icon: <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      skills: ['OpenAI / Gemini', 'LangChain', 'Automated POS', 'WhatsApp API', 'Webhooks'],
    },
    {
      title: 'Growth Engineering & Conversion',
      role: 'Performance Marketing',
      desc: 'Connects your software directly to paying customers through data-backed Google/Meta ads, programmatic technical SEO, and conversion rate optimization.',
      icon: <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      skills: ['Technical SEO', 'Meta Ads', 'Google Search', 'Conversion Funnels', 'Analytics'],
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Cross-Functional Squad"
        title="Meet the Engineers Building"
        highlightText="The Future."
        description="A handpicked squad of software architects, product designers, full-stack developers, and growth strategists dedicated to making your business scale."
        breadcrumbs={[{ label: 'Team' }]}
        primaryCtaText="Join Our Team or Partner"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Squad Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {squads.map((squad, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm relative group hover:border-violet-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-violet-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-200">
                    {squad.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {squad.title}
                    </h3>
                    <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                      {squad.role}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {squad.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                {squad.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-obsidian-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm">
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Our Culture
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mt-2">
            No Bureaucracy. Just High-Velocity Delivery.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            We don't have layers of project managers or corporate red tape. When you partner with Pyrow, you communicate directly with senior engineers and architects who are actively writing code, deploying infrastructure, and reviewing analytics.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Ready to work with our engineering squad?"
        subtitle="Let's build, launch, and scale your digital software solution with unmatched velocity."
        buttonText="Book a Discovery Call"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
