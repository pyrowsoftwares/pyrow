import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Mail, Linkedin, Compass, Target, Lightbulb, Sparkles, CheckCircle2 } from 'lucide-react';

interface FounderPageProps {
  onOpenStrategyCall: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onOpenStrategyCall }) => {
  const storyPoints = [
    {
      title: 'The Observation',
      desc: 'Small and medium enterprises everywhere operate on tight margins and intense operational pressure. We watched business owners spend entire evenings on manual invoicing, clinics coordinating appointments over messy WhatsApp threads, and retail shops drowning in inventory discrepancies.',
      icon: <Compass className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
    },
    {
      title: 'The Realization',
      desc: 'These businesses did not lack work ethic or ambition; they lacked modern digital tools. Legacy enterprise software was bloated, rigid, and prohibitively expensive. Off-the-shelf templates were brittle and broke when businesses started scaling.',
      icon: <Lightbulb className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
    },
    {
      title: 'Why Pyrow Exists',
      desc: 'We built Pyrow to solve this fundamentally: by delivering enterprise-grade custom software and high-ROI digital marketing all under one roof. We design for simplicity, engineer for extreme scalability, and execute with lightning speed.',
      icon: <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  const whatDrivesMe = [
    'Watching a retail chain automate a 4-hour daily manual stock audit into a real-time 30-second sync.',
    'Seeing a founder shift from firefighting daily operations to launching new revenue streams.',
    'Connecting clean code architecture with conversion funnels that measurably generate revenue.',
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Visionary Leadership"
        title="The Mind Behind"
        highlightText="Pyrow"
        description="Engineering intelligent software products and digital growth engines for high-performing businesses worldwide."
        breadcrumbs={[{ label: 'Founder' }]}
        primaryCtaText="Get in Touch"
        onPrimaryCtaClick={onOpenStrategyCall}
      />

      {/* Founder Intro Card */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-obsidian-900/80 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          {/* Avatar representation */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-violet-600 via-purple-600 to-fuchsia-600 p-1 shrink-0 shadow-xl shadow-violet-600/20">
            <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center text-white text-3xl sm:text-4xl font-black font-display">
              P
            </div>
          </div>

          <div className="flex-1">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
              Leadership & Product Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mt-1">
              Building Scalable Software with Purpose
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
              "We don't build software just for the sake of code. Every system, interface, and pipeline we ship is designed to eliminate operational friction and accelerate commercial revenue."
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="mailto:support@pyrow.in"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@pyrow.in</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Story Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white mt-2">
            From Local Bottlenecks to Global Standards
          </h2>
        </div>

        <div className="space-y-6">
          {storyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white dark:bg-obsidian-900/60 border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-all hover:border-violet-500/40"
            >
              <div className="p-3.5 rounded-2xl bg-violet-50 dark:bg-white/5 border border-violet-100 dark:border-white/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent border border-violet-500/20">
          <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
            Our Conviction
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white mt-2 mb-6">
            What Drives Us Every Day
          </h2>
          <div className="space-y-4">
            {whatDrivesMe.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 italic">
                  "{point}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <PageCtaBanner
        title="Ready to build your operating engine?"
        subtitle="Let's build software products that automate the boring and accelerate your commercial growth."
        buttonText="Discuss Your Project"
        onCtaClick={onOpenStrategyCall}
      />
    </div>
  );
};
