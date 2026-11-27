import React, { useState } from 'react';
import { X, Calendar, Clock, Video, User, Mail, Building, CheckCircle2, ShieldCheck, PhoneCall, TrendingUp, Sparkles, Megaphone } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';
import { MagneticButton } from '../ui/MagneticButton';
import { submitEnquiry } from '../../lib/supabase';
import { validateName, validatePhone, validateEmail, validateField } from '../../lib/formValidation';
import { showValidationError } from '../../lib/sweetAlert';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState('Enterprise Architecture & Custom Software');
  const [selectedMarketingServices, setSelectedMarketingServices] = useState<string[]>([]);

  React.useEffect(() => {
    if (initialTopic && isOpen) {
      setSelectedTopic(initialTopic);
    }
  }, [initialTopic, isOpen]);

  const toggleMarketingService = (service: string) => {
    setSelectedMarketingServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const [selectedTime, setSelectedTime] = useState('11:00 AM IST');
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Real-time and On-Blur Validation Handlers
  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = formData[field as keyof typeof formData] || '';
    const res = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: res.isValid ? '' : (res.error || '') }));
  };

  const handleChange = (field: string, rawVal: string) => {
    const value = field === 'phone' ? rawVal.replace(/[^0-9+\s\-()]/g, '') : rawVal;
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === 'name' && /\d/.test(value)) {
      setErrors((prev) => ({ ...prev, name: 'Name cannot contain numbers.' }));
      return;
    }

    if (touched[field] || errors[field]) {
      const res = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: res.isValid ? '' : (res.error || '') }));
    } else {
      if (field === 'phone' && value.replace(/\D/g, '').length >= 10) {
        const res = validatePhone(value);
        if (res.isValid) {
          setErrors((prev) => ({ ...prev, phone: '' }));
        }
      }
    }
  };

  if (!isOpen) return null;

  const topics = [
    'Enterprise Architecture & Custom Software',
    'Performance Marketing (Meta & Google High-ROAS)',
    'SEO & Local Google Map Pack Dominance',
    'Mobile Application (iOS / Android / Flutter)',
    'Social Media, Video Reels & Creative Direction',
    'Enterprise ERP & Multi-Branch POS Systems',
    'Email Marketing & Automated Retention Funnels',
    'Web Modernization & Speed Optimization',
  ];

  const marketingPills = [
    'Meta Ads (Facebook / Instagram)',
    'Google Search & Performance Max',
    'Technical & Local SEO',
    'Social Media & Video Content',
    'Email & WhatsApp Funnels',
    'AI Search (ChatGPT/GEO) Engine',
  ];

  const times = ['10:30 AM IST', '02:00 PM IST', '04:30 PM IST', '06:00 PM IST', '08:30 PM IST'];
  const days = ['Tomorrow (Priority)', 'In 2 Days', 'Next Monday'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate Your Name
    const nameCheck = validateName(formData.name);
    if (!nameCheck.isValid) {
      setErrors((prev) => ({ ...prev, name: nameCheck.error || '' }));
      showValidationError(nameCheck.error || 'Please enter your actual name.', 'Name Validation');
      return;
    }

    // 2. Validate Email
    const emailCheck = validateEmail(formData.email);
    if (!emailCheck.isValid) {
      setErrors((prev) => ({ ...prev, email: emailCheck.error || '' }));
      showValidationError(emailCheck.error || 'Please enter a valid email address.', 'Email Validation');
      return;
    }

    // 3. Validate Phone Number
    const phoneCheck = validatePhone(formData.phone);
    if (!phoneCheck.isValid) {
      setErrors((prev) => ({ ...prev, phone: phoneCheck.error || '' }));
      showValidationError(phoneCheck.error || 'Please enter a valid active phone number.', 'Phone Number Validation');
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    soundFX.playChime();

    const fullServiceDescription = selectedMarketingServices.length > 0
      ? `${selectedTopic} [Marketing: ${selectedMarketingServices.join(', ')}]`
      : selectedTopic;

    const res = await submitEnquiry({
      type: 'strategy_call',
      name: nameCheck.cleanedValue || formData.name.trim(),
      email: emailCheck.cleanedValue || formData.email.trim(),
      phone: phoneCheck.cleanedValue || formData.phone.trim(),
      company: formData.company,
      service: fullServiceDescription,
      preferred_time: `${selectedDay} at ${selectedTime}`,
      message: formData.notes
        ? `${formData.notes} | Marketing Scope: ${selectedMarketingServices.join(', ')}`
        : selectedMarketingServices.length > 0
          ? `Selected Marketing Scope: ${selectedMarketingServices.join(', ')}`
          : '',
      source_page: typeof window !== 'undefined' ? window.location.pathname : '/',
      raw_data: {
        topic: selectedTopic,
        marketing_services: selectedMarketingServices,
        day: selectedDay,
        time: selectedTime,
        ...formData,
        phone: phoneCheck.cleanedValue || formData.phone,
      },
    });

    setIsSubmitting(false);
    if (res.success) {
      setIsSuccess(true);
    } else {
      showValidationError(res.error || 'Unable to submit booking. Please verify details.', 'Booking Notice');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 dark:bg-obsidian-950/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[94vh]">
        {/* Glowing top line */}
        <div className="h-1.5 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Schedule 30-Min Strategy Consultation</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">Directly with a Principal Solutions Architect & Growth Strategist • Free & Confidential</p>
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

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Consultation Topic */}
              <div>
                <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                  Select Focus Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedTopic(t);
                      }}
                      className={`text-left text-xs p-3 rounded-xl border transition-all ${selectedTopic === t
                        ? 'bg-violet-500/10 dark:bg-violet-500/20 border-violet-500 text-slate-900 dark:text-white font-bold shadow-sm'
                        : 'bg-slate-50 dark:bg-obsidian-800 text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Digital Marketing & Growth Scope */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-500/[0.08] via-purple-500/[0.04] to-transparent border border-violet-500/20 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-mono font-bold text-violet-700 dark:text-violet-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-violet-500" />
                    <span>Digital Marketing & Growth Scope:</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">Select any required services</span>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                  We don't just write code—we scale real revenue with high-ROAS paid acquisition, SEO, and retention funnels.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {marketingPills.map((service) => {
                    const isSelected = selectedMarketingServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          toggleMarketingService(service);
                        }}
                        className={`text-[11px] font-mono px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${isSelected
                          ? 'bg-violet-600 text-white border-violet-600 font-bold shadow-sm shadow-violet-600/30'
                          : 'bg-white/80 dark:bg-obsidian-800 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-white/10 hover:border-violet-400'
                          }`}
                      >
                        <span className="font-bold text-[10px]">{isSelected ? '✓' : '+'}</span>
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Day & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-violet-600 dark:text-purple-400" />
                    Target Day
                  </label>
                  <div className="space-y-1.5">
                    {days.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedDay(d);
                        }}
                        className={`w-full text-left text-xs px-3.5 py-2.5 rounded-xl border transition-all font-semibold ${selectedDay === d
                          ? 'bg-violet-600 text-white font-bold border-violet-600 shadow-sm'
                          : 'bg-slate-50 dark:bg-obsidian-800 text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/5 hover:bg-slate-100'
                          }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    Available Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {times.map((tm) => (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setSelectedTime(tm);
                        }}
                        className={`text-center text-xs py-2 px-2 rounded-xl border transition-all font-mono font-bold ${selectedTime === tm
                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                          : 'bg-slate-50 dark:bg-obsidian-800 text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                          }`}
                      >
                        {tm}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Your Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        required
                        type="text"
                        pattern="^[a-zA-Z][a-zA-Z\s.'\-]{1,59}$"
                        title="Name must contain at least 2 letters and no numbers or symbols."
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="Rajesh"
                        className={`w-full bg-slate-50 dark:bg-obsidian-800 border rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : touched.name && !errors.name && formData.name.trim().length >= 2
                            ? 'border-emerald-500/60 dark:border-emerald-500/40 focus:border-emerald-500'
                            : 'border-slate-200 dark:border-white/10 focus:border-violet-500'
                          }`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        required
                        type="email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address (e.g. name@domain.com)"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="rahul@company.com"
                        className={`w-full bg-slate-50 dark:bg-obsidian-800 border rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : touched.email && !errors.email && formData.email.trim().length >= 5
                            ? 'border-emerald-500/60 dark:border-emerald-500/40 focus:border-emerald-500'
                            : 'border-slate-200 dark:border-white/10 focus:border-violet-500'
                          }`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Phone / WhatsApp *</label>
                    <div className="relative">
                      <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        required
                        type="tel"
                        pattern="^[+]?[0-9\s\-()]{7,18}$"
                        title="Please enter a valid mobile number (e.g. +91 98765 43210 or international +1 212 555 0199)"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+91 98765 43210 / +1 202 555 0199"
                        className={`w-full bg-slate-50 dark:bg-obsidian-800 border rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : touched.phone && !errors.phone && formData.phone.trim().length >= 7
                            ? 'border-emerald-500/60 dark:border-emerald-500/40 focus:border-emerald-500'
                            : 'border-slate-200 dark:border-white/10 focus:border-violet-500'
                          }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Company & Title</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Pyrow Software, Founder"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-violet-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-zinc-400 bg-slate-50 dark:bg-obsidian-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                <ShieldCheck className="w-4 h-4 text-violet-600 dark:text-purple-400 flex-shrink-0" />
                <span>Includes a 30-min architecture roadmap + complimentary digital marketing & ad spend audit. Google Meet / Zoom link dispatched automatically.</span>
              </div>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Reserving Session...' : 'Confirm & Reserve 30-Min Strategy Session'}
                </MagneticButton>
              </div>
            </form>
          ) : (
            /* Success confirmation */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-violet-500/15 border border-violet-500 text-violet-600 dark:text-purple-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Strategy Session Confirmed!</h4>
              <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto">
                Invitation and calendar invite dispatched to <span className="text-violet-600 dark:text-purple-400 font-bold">{formData.email}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 max-w-sm mx-auto text-left text-xs font-mono space-y-2">
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Topic:</span>
                  <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">{selectedTopic}</span>
                </div>
                {selectedMarketingServices.length > 0 && (
                  <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                    <span>Marketing:</span>
                    <span className="text-violet-600 dark:text-purple-400 font-medium truncate max-w-[200px]">
                      {selectedMarketingServices.join(', ')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Scheduled Time:</span>
                  <span className="text-purple-500 font-bold">{selectedDay} @ {selectedTime}</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Meeting Room:</span>
                  <span className="text-cyber-blue font-bold">meet.google.com/pyr-call</span>
                </div>
              </div>

              <div className="pt-4">
                <MagneticButton variant="primary" size="md" onClick={onClose}>
                  Done
                </MagneticButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
