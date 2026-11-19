import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { ShieldCheck, Lock, FileText, Globe } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Legal & Transparency"
        title="Privacy"
        highlightText="Policy"
        description="We are committed to safeguarding your personal and business data. Read how we collect, store, and protect your information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        primaryCtaText="Contact Support"
        onPrimaryCtaClick={() => window.open('mailto:privacy@pyrow.in', '_blank')}
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
            <ShieldCheck className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            <span>1. Information We Collect</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            When you visit our website, submit a project inquiry, or engage our services, we may collect information such as your name, corporate email address, phone number, company name, and project specifications. We also collect anonymized usage analytics (such as browser type, device information, and pages visited) to optimize our platform performance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
            <span>2. How We Use and Safeguard Your Data</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Your information is used strictly to fulfill software development contracts, deliver architectural consultations, provide technical customer support, and communicate project milestones. We employ industry-standard encryption protocols (TLS 1.3 and AES-256) across all communication channels and databases.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>3. Non-Disclosure & Intellectual Property Protection</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Pyrow adheres to rigorous non-disclosure commitments. Any proprietary algorithms, customer databases, trade secrets, or software source code shared with our team remain 100% the intellectual property of the client. We do not resell or sublicense client code.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span>4. Third-Party Services & Cookies</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            We use minimal cookies necessary for session state, theme preferences, and security verification. We do not sell your personal data to data brokers or third-party advertising networks.
          </p>
        </section>

        <div className="p-6 rounded-2xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-zinc-400">
          Last revised: November 18, 2026. For questions regarding privacy or data deletion, email <span className="text-violet-600 dark:text-violet-400 font-semibold">privacy@pyrow.in</span>.
        </div>
      </motion.article>

      <PageCtaBanner
        badge="Zero Compromise"
        title="Have questions about our data security practices?"
        description="Our compliance team is ready to provide security whitepapers and compliance documentation."
        primaryBtnText="Email Privacy Team"
        onPrimaryClick={() => window.open('mailto:privacy@pyrow.in', '_blank')}
      />
    </div>
  );
};
