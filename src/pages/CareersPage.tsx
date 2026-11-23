import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Briefcase, Zap, Terminal, Compass, Heart, Globe, ArrowUpRight } from 'lucide-react';
import { soundFX } from '../components/ui/sound-effects';

interface CareersPageProps {
  onOpenStrategyCall: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onOpenStrategyCall }) => {
  const perks = [
    {
      title: 'High Autonomy, Zero Red Tape',
      desc: 'No middle management layers or endless standup meetings. You own the architecture and ship code directly to production.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Work Remotely or From Our Hubs',
      desc: 'Work from anywhere with high-speed internet. Flexible hours focused entirely on output and craftsmanship.',
      icon: <Globe className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: 'Top-Tier Hardware & Software',
      desc: 'Every engineer receives an M3/M4 Max MacBook, mechanical keyboards, and licenses for any AI developer tools requested.',
      icon: <Terminal className="w-5 h-5 text-violet-500" />,
    },
    {
      title: 'Performance & Revenue Sharing',
      desc: 'Competitive base compensation plus project completion bonuses and profit sharing on Pyrow SaaS product spin-offs.',
      icon: <Heart className="w-5 h-5 text-rose-500" />,
    },
  ];

  const positions = [
    {
      id: 'senior-fullstack',
      title: 'Senior Full-Stack Engineer (React / Node / Go)',
      type: 'Full-time • Remote or Hybrid',
      exp: '4+ Years Exp',
      desc: 'Lead the architecture of offline-first retail POS platforms and cloud ERP backends handling 50k+ daily transactions.',
      skills: ['React 18', 'TypeScript', 'Node.js / Go', 'PostgreSQL', 'Redis'],
    },
    {
      id: 'mobile-engineer',
      title: 'Mobile Engineer (Flutter / React Native)',
      type: 'Full-time • Remote',
      exp: '3+ Years Exp',
      desc: 'Build slick, 60fps mobile customer apps with Bluetooth hardware integrations, biometric security, and offline cache.',
      skills: ['Flutter', 'React Native', 'SQLite', 'Bluetooth SDKs', 'Tailwind'],
    },
    {
      id: 'devops-architect',
      title: 'Cloud & Infrastructure Architect',
      type: 'Full-time / Contract • Remote',
      exp: '4+ Years Exp',
      desc: 'Maintain zero-downtime multi-region Kubernetes clusters on AWS, automated CI/CD pipelines, and Cloudflare edge workers.',
      skills: ['AWS / GCP', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus'],
    },
    {
      id: 'growth-marketer',
      title: 'Technical Growth & Performance Marketer',
      type: 'Full-time • Remote',
      exp: '2+ Years Exp',
      desc: 'Run programmatic acquisition funnels, technical SEO, and conversion rate optimization campaigns for high-growth tech clients.',
      skills: ['Meta / Google Ads', 'Programmatic SEO', 'GA4 & Mixpanel', 'Copywriting'],
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Join The Engineering Collective"
        title="Build world-class software with"
        highlightText="Obsessive Craft"
        description="We are engineers, designers, and growth strategists passionate about building resilient digital products. If you love shipping real code and despise corporate bureaucracy, you belong here."
        breadcrumbs={[{ label: 'Careers' }]}
        primaryCtaText="View Open Roles"
        onPrimaryCtaClick={() => {
          const el = document.getElementById('open-positions');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Why Pyrow Perks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Our Culture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-slate-900 dark:text-white">
            Why builders thrive at Pyrow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, delay: (idx % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.025, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              className="p-6 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 hover:border-violet-500/40 transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-obsidian-900 flex items-center justify-center">
                {perk.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {perk.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions List */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Open Positions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-slate-900 dark:text-white">
            Current Engineering Squad Openings
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400">
            Don't see your exact role? Email your GitHub / portfolio to <span className="text-violet-600 dark:text-violet-400 font-semibold">support@pyrow.in</span>.
          </p>
        </div>

        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-violet-600/10 text-violet-600 dark:text-violet-400 font-semibold border border-violet-500/20">
                    {pos.type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                    {pos.exp}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {pos.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {pos.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pos.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-obsidian-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`mailto:support@pyrow.in?subject=Application for ${encodeURIComponent(pos.title)}`}
                onClick={() => soundFX.playClick()}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold hover:scale-105 transition-all shadow-md"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <PageCtaBanner
        badge="Direct Founder Channel"
        title="Are you an exceptional engineer or designer?"
        description="We are always looking for outlier talent. Send a direct note to our founders."
        primaryBtnText="support@pyrow.in"
        onPrimaryClick={() => window.open('mailto:support@pyrow.in', '_blank')}
      />
    </div>
  );
};
