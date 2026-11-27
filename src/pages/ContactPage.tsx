import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '../context/RouterContext';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2, ChevronDown, Linkedin, Instagram, Globe } from 'lucide-react';
import { soundFX } from '../components/ui/sound-effects';
import { submitEnquiry } from '../lib/supabase';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    currency: 'INR',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const projectTypes = [
    { value: 'web_development', label: 'Website & Web App Development' },
    { value: 'mobile_app', label: 'Mobile App Development (iOS & Android)' },
    { value: 'billing_system', label: 'POS & Billing Systems' },
    { value: 'automation_tools', label: 'AI & WhatsApp Automation' },
    { value: 'ecommerce_solution', label: 'E-commerce Solutions' },
    { value: 'digital_marketing', label: 'Digital Marketing & Growth Campaigns' },
    { value: 'performance_marketing', label: 'Performance Ads (Google & Meta Ads)' },
    { value: 'seo_optimization', label: 'Search Engine Optimization (SEO)' },
    { value: 'social_media_branding', label: 'Social Media Management & Brand Identity' },
    { value: 'other', label: 'Custom Software, ERP, CRM, SaaS & Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();
    setSubmitting(true);

    await submitEnquiry({
      type: 'contact',
      name: formData.fullName,
      email: formData.email,
      phone: formData.contactNumber,
      service: formData.projectType,
      budget: `${formData.currency} ${formData.budget}`,
      message: formData.projectDescription,
      source_page: '/contact',
      raw_data: formData,
    });

    setSubmitting(false);
    setSubmitted(true);
  };

  const contactFaqs = [
    {
      q: 'How fast can I get a quote?',
      a: 'Typically, we respond to all inquiries within 24 hours. For urgent requirements, you can reach us instantly via WhatsApp or call at +91 73581 63590.',
    },
    {
      q: 'Where is our office located?',
      a: 'Our headquarters is in Nagercoil, Tamil Nadu. We serve clients across India and internationally through remote collaboration and on-site deployments where necessary.',
    },
  ];

  return (
    <div className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold mb-2">
            <span>Direct Inquiry Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight">
            Let's build{' '}
            <span className="font-black tracking-tight underline decoration-violet-500/30 underline-offset-8 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 dark:from-violet-300 dark:via-purple-200 dark:to-indigo-300 bg-clip-text text-transparent">
              Something Great.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We'll tell you how we can help.
          </p>
        </motion.div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact Info & Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-3 mt-3 border-t border-slate-100 dark:border-white/5 text-xs font-mono">
                  <a
                    href="https://wa.me/917358163590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-zinc-300 hover:text-emerald-500 transition-colors font-semibold"
                  >
                    +91 73581 63590
                  </a>
                </div>
              </div>

              <a
                href="mailto:support@pyrow.in"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 hover:border-violet-500/50 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Direct Inquiries
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-500 transition-colors">
                    support@pyrow.in
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400">
                    24-hour turnaround guaranteed
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    Global Hub
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    Bangalore • Chennai • Remote Worldwide
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400">
                    Serving global clients across US, UK, MEA & APAC
                  </div>
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

            {/* Official Social Channels */}
            <div className="flex items-center gap-2.5 pt-2 flex-wrap">
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 font-semibold">Official Channels:</span>
              <a
                href="https://www.linkedin.com/company/pyrow-in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 hover:border-violet-500 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/pyrow.in?gwpx=bXJ2ZzczemU3YWVu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 hover:border-pink-500 text-xs font-mono text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Software Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-[32px] bg-white dark:bg-[#070512]/90 backdrop-blur-3xl border border-slate-200 dark:border-white/[0.08] shadow-[0_0_80px_-20px_rgba(124,58,237,0.25)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent pointer-events-none" />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-violet-600 dark:text-violet-400">{formData.fullName}</span>! Our team will review your project requirements and get back to you, typically within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        contactNumber: '',
                        projectType: '',
                        projectDescription: '',
                        budget: '',
                        currency: 'INR',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-obsidian font-bold hover:scale-105 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Career Notice Banner (Commented out as requested) */}
                  {/*
                  <div className="p-3.5 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    This form is for software projects. Looking for a job? Apply on our{' '}
                    <button
                      type="button"
                      onClick={() => {
                        soundFX.playClick();
                        navigate('/careers');
                      }}
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 cursor-pointer"
                    >
                      careers page
                    </button>
                    .
                  </div>
                  */}

                  {/* Two Column: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                      Project Type *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                    >
                      <option value="" disabled className="bg-white dark:bg-obsidian-900 text-slate-500">
                        Select your project or service type...
                      </option>
                      {projectTypes.map((pt) => (
                        <option
                          key={pt.value}
                          value={pt.value}
                          className="bg-white dark:bg-obsidian-900 text-slate-900 dark:text-white"
                        >
                          {pt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Goals & Requirements */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Tell us what you want to build, current bottlenecks, required features, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Budget & Currency */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                        Estimated Budget (Optional)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="e.g. 50000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2 font-semibold">
                        Currency
                      </label>
                      <select
                        value={formData.currency}
                        onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                      >
                        <option value="INR" className="bg-white dark:bg-obsidian-900 text-slate-900 dark:text-white">
                          INR (₹)
                        </option>
                        <option value="USD" className="bg-white dark:bg-obsidian-900 text-slate-900 dark:text-white">
                          USD ($)
                        </option>
                        <option value="EUR" className="bg-white dark:bg-obsidian-900 text-slate-900 dark:text-white">
                          EUR (€)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-violet-600/25 hover:opacity-95 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting Your Request...' : 'Request My Software Quote'}</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-zinc-500 pt-1">
                    No obligation to proceed • Project Review by our Nagercoil team
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-bold">
            Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 text-slate-900 dark:text-white">
            Contact FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-obsidian-850 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setOpenFaq(isOpen ? null : idx);
                  }}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-base hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 dark:text-zinc-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-violet-600 dark:text-violet-400' : ''
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
    </div>
  );
};
