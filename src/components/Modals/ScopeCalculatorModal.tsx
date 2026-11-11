import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';
import { MagneticButton } from '../ui/MagneticButton';

interface ScopeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStrategyCall: () => void;
  initialService?: string;
}

export const ScopeCalculatorModal: React.FC<ScopeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenStrategyCall,
  initialService,
}) => {
  const [step, setStep] = useState(1);
  const [projectTypes, setProjectTypes] = useState<string[]>(() => {
    if (initialService) return [initialService];
    return ['Website & E-Commerce'];
  });

  // Keep in sync when initialService changes on modal open
  React.useEffect(() => {
    if (initialService && isOpen) {
      setProjectTypes([initialService]);
    }
  }, [initialService, isOpen]);
  const [timeline, setTimeline] = useState('1 - 3 Months');
  const [budgetTier, setBudgetTier] = useState('₹5 Lakhs - ₹15 Lakhs');
  const [addons, setAddons] = useState<string[]>(['24/7 Hosting & DevOps Support']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleProjectType = (type: string) => {
    soundFX.playClick();
    if (projectTypes.includes(type)) {
      if (projectTypes.length > 1) {
        setProjectTypes(projectTypes.filter((t) => t !== type));
      }
    } else {
      setProjectTypes([...projectTypes, type]);
    }
  };

  const toggleAddon = (addon: string) => {
    soundFX.playClick();
    if (addons.includes(addon)) {
      setAddons(addons.filter((a) => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  // Indian Rupee Estimation (in Lakhs)
  const calculateEstimate = () => {
    let minLakhs = 1.5;
    let maxLakhs = 3.5;

    if (projectTypes.includes('Custom Business ERP Software')) {
      minLakhs += 3.0;
      maxLakhs += 7.0;
    }
    if (projectTypes.includes('Android & iOS Mobile App')) {
      minLakhs += 2.5;
      maxLakhs += 5.5;
    }
    if (projectTypes.includes('Digital Marketing & Google/Meta Ads')) {
      minLakhs += 1.0;
      maxLakhs += 2.5;
    }
    if (projectTypes.includes('Billing & Barcode POS Suite')) {
      minLakhs += 1.5;
      maxLakhs += 3.5;
    }
    if (projectTypes.includes('WhatsApp AI Automation Bot')) {
      minLakhs += 0.8;
      maxLakhs += 2.0;
    }

    minLakhs += addons.length * 0.5;
    maxLakhs += addons.length * 1.2;

    if (timeline.includes('Urgent')) {
      minLakhs *= 1.2;
      maxLakhs *= 1.25;
    }

    return {
      min: minLakhs.toFixed(1),
      max: maxLakhs.toFixed(1),
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playChime();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-obsidian-950/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Top Accent Gradient */}
        <div className="h-1.5 bg-gradient-to-r from-ember-500 via-flare-amber to-cyber-blue" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-ember-500/10 text-ember-600 dark:text-ember-400 border border-ember-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Project Cost & Scope Estimator
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">Step {step} of 4 • Transparent Pricing in Indian Rupees (₹)</p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFX.playClick(600);
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!isSubmitted ? (
            <>
              {/* Live Estimate Floating Card (Strictly Indian Rupees) */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50/80 via-white to-sky-50/80 dark:from-ember-500/10 dark:via-obsidian-800 dark:to-cyber-blue/10 border border-ember-500/30 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5 text-ember-500" />
                    ESTIMATED INVESTMENT RANGE
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-display">
                    ₹{estimate.min} Lakhs – ₹{estimate.max} Lakhs
                    <span className="text-xs font-normal text-slate-500 dark:text-zinc-400 ml-2 font-mono">INR</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-zinc-300 font-semibold">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-flare-amber" />
                    <span>Timeline: {timeline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>99.98% Uptime SLA</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Project Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">1. What would you like to build?</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Select all services you need</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Website & E-Commerce', desc: 'Custom responsive website or online store built for speed' },
                      { id: 'Custom Business ERP Software', desc: 'Complete software to manage accounts, stock & branches' },
                      { id: 'Android & iOS Mobile App', desc: 'Fast, native-feeling mobile app for customers or staff' },
                      { id: 'Digital Marketing & Google/Meta Ads', desc: 'Targeted ads and SEO that bring real paying leads' },
                      { id: 'Billing & Barcode POS Suite', desc: 'Quick barcode billing with automated GST invoices' },
                      { id: 'WhatsApp AI Automation Bot', desc: 'Automated 24/7 customer chat, order alerts & broadcasts' },
                    ].map((item) => {
                      const isSelected = projectTypes.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleProjectType(item.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-ember-500/10 dark:bg-ember-500/15 border-ember-500 text-slate-900 dark:text-white shadow-sm'
                              : 'bg-slate-50 dark:bg-obsidian-800/80 border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-zinc-300 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold text-sm">
                            <span>{item.id}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'bg-ember-500 border-ember-400 text-white' : 'border-slate-300 dark:border-zinc-600'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Timeline */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">2. Expected Launch Timeline</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Choose how quickly you need your project live</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: 'Urgent Launch', time: 'Urgent (< 1 Month)', desc: 'Fast-track priority delivery with daily check-ins' },
                      { title: 'Standard Launch', time: '1 - 3 Months', desc: 'Recommended balance of deep quality and speed' },
                      { title: 'Phased Rollout', time: '3 - 6 Months', desc: 'Multi-stage enterprise rollout across departments' },
                    ].map((item) => {
                      const isSelected = timeline === item.time;
                      return (
                        <div
                          key={item.title}
                          onClick={() => {
                            soundFX.playClick();
                            setTimeline(item.time);
                          }}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-ember-500/10 dark:bg-ember-500/15 border-ember-500 text-slate-900 dark:text-white shadow-sm'
                              : 'bg-slate-50 dark:bg-obsidian-800/80 border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-zinc-300 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm">{item.title}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-ember-500" />}
                          </div>
                          <div className="text-xs font-mono text-ember-600 dark:text-ember-400 font-bold mt-1">{item.time}</div>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2">
                    <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      Estimated Budget Range (INR ₹)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['₹1 Lakh - ₹5 Lakhs', '₹5 Lakhs - ₹15 Lakhs', '₹15 Lakhs+ Enterprise'].map((bracket) => (
                        <button
                          key={bracket}
                          type="button"
                          onClick={() => {
                            soundFX.playClick();
                            setBudgetTier(bracket);
                          }}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                            budgetTier === bracket
                              ? 'bg-ember-500 text-white border-ember-500 shadow-sm'
                              : 'bg-slate-50 dark:bg-obsidian-800 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/5 hover:text-slate-900'
                          }`}
                        >
                          {bracket}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Add-ons */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">3. Additional Services (Optional)</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Select any extra support you would like</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: '24/7 Hosting & DevOps Support', desc: 'Continuous server monitoring, automated daily backups, zero downtime' },
                      { name: 'WhatsApp AI Chatbot', desc: 'Instant automated answers to customer enquiries on WhatsApp' },
                      { name: 'Google & Meta Ads Setup', desc: 'High-converting ad copy, video creatives, and conversion tracking' },
                      { name: 'Old Database Migration', desc: 'Safely transfer your old records with zero data loss' },
                      { name: 'SEO & Search Ranking Boost', desc: 'Rank higher on Google for your target local and national keywords' },
                      { name: 'Staff Training & Video Guides', desc: 'Step-by-step video training for your team to use the new system' },
                    ].map((addon) => {
                      const isSelected = addons.includes(addon.name);
                      return (
                        <div
                          key={addon.name}
                          onClick={() => toggleAddon(addon.name)}
                          className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-ember-500/10 dark:bg-ember-500/15 border-ember-500 text-slate-900 dark:text-white font-bold'
                              : 'bg-slate-50 dark:bg-obsidian-800/80 border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-zinc-300 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between text-sm font-bold">
                            <span>{addon.name}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isSelected ? 'bg-ember-500 border-ember-400 text-white' : 'border-slate-300 dark:border-zinc-600'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">{addon.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">4. Where should we send your estimate?</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">We will share your detailed scope breakdown within 2-4 business hours</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rajesh Kumar"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company / Brand"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-medium">Any specific requirements or notes?</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Brief details about what you want to achieve..."
                      className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500 resize-none"
                    />
                  </div>

                  <MagneticButton
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full justify-center mt-2"
                  >
                    Send Me My Proposal
                  </MagneticButton>
                </form>
              )}
            </>
          ) : (
            <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500 text-emerald-500 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Estimate Request Submitted!
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>.
                We have generated your preliminary scope estimate of <span className="font-bold text-ember-600 dark:text-ember-400">₹{estimate.min}L – ₹{estimate.max}L INR</span>.
                Our team will reach out to you within 2 to 4 business hours.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose();
                    onOpenStrategyCall();
                  }}
                >
                  Schedule a Video Call
                </MagneticButton>
                <MagneticButton
                  variant="outline"
                  size="md"
                  onClick={onClose}
                >
                  Close
                </MagneticButton>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {!isSubmitted && (
          <div className="px-6 py-4 bg-slate-50 dark:bg-obsidian-950 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => {
                  soundFX.playClick();
                  setStep((prev) => prev - 1);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Step
              </button>
            ) : (
              <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono">100% Free • No Obligation</span>
            )}

            {step < 4 ? (
              <MagneticButton
                variant="primary"
                size="sm"
                onClick={() => {
                  soundFX.playClick();
                  setStep((prev) => prev + 1);
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Next Step
              </MagneticButton>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
