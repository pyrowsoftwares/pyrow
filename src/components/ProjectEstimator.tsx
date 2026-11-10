import React, { useState } from 'react';
import {
  MessageSquare,
  PhoneCall,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Send,
  Zap,
  Globe2,
} from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { soundFX } from './ui/sound-effects';

interface ProjectEstimatorProps {
  onOpenStrategyCall: () => void;
  onOpenScopeCalculator: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onOpenStrategyCall,
  onOpenScopeCalculator,
}) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Website & E-Commerce Store',
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState('1 - 3 Months');
  const [selectedBudget, setSelectedBudget] = useState('₹5,00,000 - ₹15,00,000 (Growth)');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const disciplines = [
    'Website & E-Commerce Store',
    'Custom Business ERP Software',
    'Android & iOS Mobile Apps',
    'Google & Meta Ads (High-ROAS)',
    'Billing & Barcode POS System',
    'WhatsApp AI Automation Bot',
  ];

  const timelines = ['Urgent (< 1 Month)', '1 - 3 Months', '3 - 6 Months', 'Ongoing Retainer'];

  const budgets = [
    '₹1 Lakh - ₹5 Lakhs (Starter)',
    '₹5 Lakhs - ₹15 Lakhs (Growth)',
    '₹15 Lakhs - ₹50 Lakhs (Enterprise)',
    '₹50 Lakhs+ (Full Ecosystem)',
  ];

  const toggleDiscipline = (item: string) => {
    soundFX.playClick();
    if (selectedDisciplines.includes(item)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== item));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, item]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playChime();
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    soundFX.playClick();
    const message = encodeURIComponent(
      `Hello Pyrow! I would like to consult with your engineering and marketing team regarding a new technology deployment.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="estimator" className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-obsidian-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-ember-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember-500/10 border border-ember-500/30 text-xs font-mono text-ember-600 dark:text-ember-400 mb-3 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>Instant Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            Tell Us About Your Project.{' '}
            <span className="bg-gradient-to-r from-ember-500 via-flare-amber to-cyber-blue bg-clip-text text-transparent">
              Get an Instant Estimate.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Select your requirements below to receive a transparent price estimate and a dedicated roadmap consultation with our lead technical architect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Estimator Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white dark:bg-obsidian-900/90 border border-slate-200 dark:border-white/10 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Step 1: Disciplines */}
                  <div>
                    <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2.5 font-bold">
                      1. What do you need built? (Select one or more)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {disciplines.map((d) => {
                        const isSelected = selectedDisciplines.includes(d);
                        return (
                          <div
                            key={d}
                            onClick={() => toggleDiscipline(d)}
                            className={`p-3.5 rounded-2xl border text-xs font-bold cursor-pointer flex items-center justify-between transition-all ${
                              isSelected
                                ? 'bg-ember-500/10 border-ember-500 text-ember-600 dark:text-white shadow-sm'
                                : 'bg-slate-50 dark:bg-obsidian-800 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                            }`}
                          >
                            <span>{d}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'bg-ember-500 border-ember-400 text-white' : 'border-slate-300 dark:border-zinc-600'
                              }`}
                            >
                              {isSelected && <CheckCircle className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Target Timeline */}
                  <div>
                    <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      2. Expected Launch Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelines.map((time) => {
                        const isSelected = selectedTimeline === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              soundFX.playClick();
                              setSelectedTimeline(time);
                            }}
                            className={`py-2 px-2 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-flare-amber text-slate-900 font-bold border-flare-amber shadow-sm'
                                : 'bg-slate-50 dark:bg-obsidian-800 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/5 hover:text-slate-900'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Investment Range */}
                  <div>
                    <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      3. Target Budget (₹ INR)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {budgets.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => {
                              soundFX.playClick();
                              setSelectedBudget(b);
                            }}
                            className={`py-2.5 px-3 text-xs font-mono rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-ember-500 text-white font-bold border-ember-500 shadow-sm'
                                : 'bg-slate-50 dark:bg-obsidian-800 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/5 hover:text-slate-900'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-4">
                    <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block font-bold">
                      4. Your Contact Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Business Email *</label>
                        <input
                          required
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="rajesh@company.com"
                          className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Phone / WhatsApp Number *</label>
                        <input
                          required
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Company Name</label>
                        <input
                          type="text"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                          placeholder="Your Brand / Company"
                          className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Brief Project Notes</label>
                      <textarea
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us what features or goals you have in mind..."
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500 resize-none"
                      />
                    </div>

                    <MagneticButton
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="w-full justify-center mt-2"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit & Get Fixed-Price Estimate
                    </MagneticButton>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500 text-emerald-500 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                    Request Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{contactForm.name}</span>.
                    Our technical lead will review your scope and get in touch within 2 to 4 business hours with your preliminary roadmap.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-ember-600 dark:text-ember-400 font-bold underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Office Details (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Instant WhatsApp Gateway */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Prefer WhatsApp Chat?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Average response time: &lt; 5 minutes</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Chat directly with our senior solutions team on WhatsApp to share wireframes, ask questions, or schedule a video call.
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </button>
            </div>

            {/* Direct Consultation Call */}
            <div className="glass-panel p-6 rounded-3xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 shadow-light-card space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-bold">
                Direct Engineering Desk
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 text-slate-700 dark:text-zinc-300">
                  <PhoneCall className="w-4 h-4 text-ember-500" />
                  <a href="tel:+919876543210" className="hover:text-ember-500 font-mono font-semibold">+91 98765 43210</a>
                </div>
                <div className="flex items-center gap-3 text-slate-700 dark:text-zinc-300">
                  <Clock className="w-4 h-4 text-cyber-blue" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
                </div>
                <div className="flex items-start gap-3 text-slate-700 dark:text-zinc-300">
                  <MapPin className="w-4 h-4 text-flare-amber flex-shrink-0 mt-0.5" />
                  <span>Pyrow Digital HQ, Tech Corridor, Bengaluru & Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-obsidian-900/60 border border-slate-200 dark:border-white/5 space-y-2 text-[11px] text-slate-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Intellectual Property ownership signed on Day 1</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyber-blue" />
                <span>Strict Non-Disclosure Agreement (NDA) protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-ember-500" />
                <span>Transparent milestone pricing with zero hidden maintenance fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
