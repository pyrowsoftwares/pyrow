import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/common/PageHeader';
import { PageCtaBanner } from '../components/common/PageCtaBanner';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { soundFX } from '../components/ui/sound-effects';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Custom Software & SaaS',
    budget: '$5,000 - $15,000',
    timeline: '1 - 2 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const projectTypes = [
    'Custom Software & SaaS',
    'Mobile Application (iOS/Android)',
    'Cloud ERP & CRM Systems',
    'Retail POS & Multi-Store Suite',
    'Digital Marketing & Growth Engine',
    'AI Integration & Workflow Automation',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000 - $75,000',
    '$75,000+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();
    setSubmitted(true);
  };

  const contactFaqs = [
    {
      q: 'How fast do you respond to project inquiries?',
      a: 'We review every project brief within 24 hours on business days and provide a preliminary scope assessment and timeline breakdown.',
    },
    {
      q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, absolutely. We sign mutually binding NDAs prior to in-depth architecture discussions or code reviews to safeguard your proprietary ideas and IP.',
    },
    {
      q: 'Can we schedule an in-person or video discovery session?',
      a: 'Yes. After submitting the form, you will receive a direct booking link to schedule a 30-minute technical roadmap call with our lead architect.',
    },
    {
      q: 'What is Pyrow’s engagement model?',
      a: 'We offer fixed-scope milestone delivery for clearly defined deliverables, as well as dedicated engineering squad retainers for fast-evolving products.',
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <PageHeader
        badge="Direct Inquiry Desk"
        title="Let's build something"
        highlightText="Extraordinary"
        description="Have a breakthrough product idea, enterprise modernization initiative, or growth challenge? Talk directly to our engineering and product strategists."
        breadcrumbs={[{ label: 'Contact Us' }]}
        primaryCtaText="Direct WhatsApp"
        onPrimaryCtaClick={() => window.open('https://wa.me/916383582980', '_blank')}
      />

      {/* Main Grid: Direct Contact Channels & Intake Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-slate-900 dark:text-white">
                Engineering team ready to deploy
              </h2>
              <p className="mt-4 text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                Whether you need a dedicated sprint squad, an enterprise cloud architecture, or end-to-end product delivery, we are ready to assist.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 hover:border-violet-500/50 shadow-sm transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">Instant WhatsApp Chat</div>
                    <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 mt-3 border-t border-slate-100 dark:border-white/5 text-xs font-mono">
                  <a
                    href="https://wa.me/916383582980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors font-semibold"
                  >
                    +91 63835 82980
                  </a>
                  <span className="text-slate-300 dark:text-zinc-600">|</span>
                  <a
                    href="https://wa.me/917867009044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors font-semibold"
                  >
                    +91 78670 09044
                  </a>
                </div>
              </div>

              <a
                href="mailto:contact@pyrow.in"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 hover:border-violet-500/50 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">Direct Inquiries</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-500 transition-colors">
                    contact@pyrow.in
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400">24-hour turnaround guaranteed</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">Global Hub</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    Bangalore • Chennai • Remote Worldwide
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400">Serving global clients across US, UK, MEA & APAC</div>
                </div>
              </div>
            </div>

            {/* Response SLA Guarantee */}
            <div className="p-6 rounded-2xl bg-violet-600/5 dark:bg-violet-950/20 border border-violet-500/20 space-y-3">
              <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold text-sm">
                <Clock className="w-4 h-4" />
                <span>Our 24-Hour Commitment</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Every request goes directly to our technical founders and delivery leads. No sales runarounds, just honest architecture analysis and clear roadmaps.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-obsidian-850 border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Brief Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-violet-600 dark:text-violet-400">{formData.name}</span>. Our lead architect is reviewing your requirements and will reach out to <span className="font-semibold text-slate-900 dark:text-white">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold hover:scale-105 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Request Technical Blueprint
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-zinc-400">
                      Fill out the parameters below to receive a personalized scope and architecture proposal.
                    </p>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-white dark:bg-obsidian-900 text-slate-900 dark:text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Two Column Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Two Column Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Ventures"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => {
                            soundFX.playClick();
                            setFormData({ ...formData, budget: range });
                          }}
                          className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${formData.budget === range
                              ? 'bg-violet-600 text-white border-violet-600 font-semibold shadow-md shadow-violet-600/20'
                              : 'bg-slate-50 dark:bg-obsidian-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-violet-500/40'
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Project Goals */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                      Project Scope & Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, key integration requirements, or business objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-600/25 hover:opacity-95 hover:shadow-violet-600/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Proposal Request</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-zinc-500">
                    We respect your privacy. Strictly confidential under mutual NDA upon request.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Inquiries Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian-850 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setOpenFaq(isOpen ? null : idx);
                  }}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-base hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 dark:text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <PageCtaBanner
        badge="Zero Commitment"
        title="Prefer an immediate technical chat?"
        description="Connect with our founders on WhatsApp for a fast response within hours."
        primaryBtnText="Chat on WhatsApp"
        onPrimaryClick={() => window.open('https://wa.me/916383582980', '_blank')}
      />
    </div>
  );
};
