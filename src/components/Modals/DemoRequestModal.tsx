import React, { useState } from 'react';
import { X, PlayCircle, ShieldCheck, CheckCircle2, Database, ArrowRight } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';
import { MagneticButton } from '../ui/MagneticButton';
import { submitEnquiry } from '../../lib/supabase';
import { validateName, validatePhone, validateEmail, validateField } from '../../lib/formValidation';
import { showValidationError } from '../../lib/sweetAlert';

interface DemoRequestModalProps {
  isOpen: boolean;
  softwareName?: string;
  onClose: () => void;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  softwareName = 'Enterprise ERP Software',
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userCount: '25 - 100 Users',
    sandboxMode: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Real-time and On-Blur Validation Handlers
  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const val = formData[field as keyof typeof formData] || '';
    const res = validateField(field, typeof val === 'string' ? val : '');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate Your Name
    const nameCheck = validateName(formData.name);
    if (!nameCheck.isValid) {
      setErrors((prev) => ({ ...prev, name: nameCheck.error || '' }));
      showValidationError(nameCheck.error || 'Please enter your real name.', 'Name Validation');
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

    const res = await submitEnquiry({
      type: 'demo_request',
      name: nameCheck.cleanedValue || formData.name.trim(),
      email: emailCheck.cleanedValue || formData.email.trim(),
      phone: phoneCheck.cleanedValue || formData.phone.trim(),
      company: formData.company,
      software_requested: softwareName,
      message: `Team size: ${formData.userCount}. Pre-loaded sandbox: ${formData.sandboxMode ? 'Yes' : 'No'}`,
      source_page: typeof window !== 'undefined' ? window.location.pathname : '/',
      raw_data: {
        softwareName,
        ...formData,
        phone: phoneCheck.cleanedValue || formData.phone,
      },
    });

    setIsSubmitting(false);
    if (res.success) {
      setIsSuccess(true);
    } else {
      showValidationError(res.error || 'Unable to submit demo request.', 'Submission Notice');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 dark:bg-obsidian-950/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[94vh]">
        {/* Glow Bar */}
        <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-600 to-fuchsia-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyber-blue/15 text-cyber-blue border border-cyber-blue/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Request Interactive Demo Sandbox</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Experience <span className="text-violet-600 dark:text-purple-400 font-bold">{softwareName}</span> in real time
              </p>
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-obsidian-800 border border-slate-200/80 dark:border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase font-bold">Selected Module</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{softwareName}</div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold">
                  Interactive Live Demo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Your Name *</label>
                  <input
                    required
                    type="text"
                    pattern="^[a-zA-Z][a-zA-Z\s.'\-]{1,59}$"
                    title="Name must contain at least 2 letters and no numbers or symbols."
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="Rajesh"
                    className={`w-full bg-slate-50 dark:bg-obsidian-800 border rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : touched.name && !errors.name && formData.name.trim().length >= 2
                        ? 'border-emerald-500/60 dark:border-emerald-500/40 focus:border-emerald-500'
                        : 'border-slate-200 dark:border-white/10 focus:border-violet-500'
                      }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Email *</label>
                  <input
                    required
                    type="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address (e.g. name@domain.com)"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="rachel@acme.com"
                    className={`w-full bg-slate-50 dark:bg-obsidian-800 border rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : touched.email && !errors.email && formData.email.trim().length >= 5
                        ? 'border-emerald-500/60 dark:border-emerald-500/40 focus:border-emerald-500'
                        : 'border-slate-200 dark:border-white/10 focus:border-violet-500'
                      }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Phone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    pattern="^[+]?[0-9\s\-()]{7,18}$"
                    title="Please enter a valid mobile number (e.g. +91 98765 43210 or international +1 212 555 0199)"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder="+91 98765 43210 / +1 202 555 0199"
                    className={`w-full bg-slate-50 dark:bg-obsidian-800 border rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : touched.phone && !errors.phone && formData.phone.trim().length >= 7
                          ? 'border-emerald-500/60 dark:border-emerald-500/40 focus:border-emerald-500'
                          : 'border-slate-200 dark:border-white/10 focus:border-violet-500'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Company & Title</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Pyrow Software, Founder"
                    className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Estimated Internal Users / Seats</label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 - 25 Users', '25 - 100 Users', '100+ Enterprise'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        soundFX.playClick();
                        setFormData({ ...formData, userCount: tier });
                      }}
                      className={`py-2 px-2 text-xs font-mono font-bold rounded-xl border transition-all ${formData.userCount === tier
                        ? 'bg-cyber-blue text-white border-cyber-blue shadow-sm'
                        : 'bg-slate-50 dark:bg-obsidian-800 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                        }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-obsidian-850 border border-slate-200/80 dark:border-white/5">
                <div className="text-xs">
                  <div className="text-slate-900 dark:text-white font-bold">Provision Live Sandbox Environment</div>
                  <div className="text-slate-500 dark:text-zinc-500">Includes pre-loaded synthetic data for testing</div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.sandboxMode}
                  onChange={(e) => setFormData({ ...formData, sandboxMode: e.target.checked })}
                  className="w-4 h-4 accent-violet-600 rounded cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Provisioning Sandbox...' : 'Instant Access to Interactive Demo'}
                </MagneticButton>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyber-blue/15 border border-cyber-blue text-cyber-blue mx-auto flex items-center justify-center animate-pulse">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Sandbox Environment Provisioned!</h4>
              <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto">
                Temporary credentials and guided interactive walkthrough for{' '}
                <span className="text-violet-600 dark:text-purple-400 font-bold">{softwareName}</span> have been sent to{' '}
                <span className="text-slate-900 dark:text-white font-bold">{formData.email}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 max-w-sm mx-auto text-left text-xs font-mono space-y-2">
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Instance ID:</span>
                  <span className="text-cyber-blue font-bold">#DEMO-{(Math.random() * 80000 + 20000).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Status:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Live (Expires in 7 Days)</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Dedicated Rep:</span>
                  <span className="text-slate-900 dark:text-white font-bold">Assigned within 15 mins</span>
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
