import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Scale, CheckCircle, AlertTriangle, ShieldCheck } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Terms of Service"
        title="Terms &"
        highlightText="Conditions"
        description="Clear, fair, and transparent contractual terms governing engineering services and software deliverables with Pyrow."
        breadcrumbs={[{ label: 'Terms of Service' }]}
        primaryCtaText="Contact Us"
        onPrimaryCtaClick={() => window.open('mailto:support@pyrow.in', '_blank')}
      />

      <motion.article
        initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12"
      >
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <span>1. Scope of Engagement</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Pyrow delivers bespoke software engineering, architecture design, cloud infrastructure orchestration, and digital growth consulting services. All projects are governed by formal Statements of Work (SOW) outlining milestones, technical requirements, deliverables, and acceptance criteria.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span>2. Intellectual Property Ownership</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Upon final milestone payment completion, all custom code, user interfaces, database schemas, and documentation produced for the client become 100% the property of the client. Open-source libraries incorporated into deliverables remain subject to their respective licenses (MIT, Apache 2.0, etc.).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
            <span>3. Warranty & Production Support</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            We provide a 30-day comprehensive bug-fixing warranty following production deployment at zero additional cost. Ongoing SLAs and 24/7 infrastructure monitoring are available via our dedicated DevOps and platform maintenance agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <span>4. Limitation of Liability</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Except in cases of gross negligence or willful misconduct, neither party shall be liable for indirect, incidental, or consequential damages. Pyrow's aggregate liability under any agreement is limited to the fees paid under the applicable Statement of Work.
          </p>
        </section>

        <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-zinc-400">
          Last revised: November 18, 2026. For questions regarding legal terms, email <span className="text-violet-600 dark:text-violet-400 font-semibold">support@pyrow.in</span>.
        </div>
      </motion.article>

      <PageCtaBanner
        badge="Transparent Engagement"
        title="Ready to discuss your project scope?"
        description="We are transparent with our agreements, roadmaps, and pricing models."
        primaryBtnText="Contact Legal & Business"
        onPrimaryClick={() => window.open('mailto:support@pyrow.in', '_blank')}
      />
    </div>
  );
};
