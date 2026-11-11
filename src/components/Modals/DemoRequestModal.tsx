import React, { useState } from 'react';
import { X, PlayCircle, ShieldCheck, CheckCircle2, Database, ArrowRight } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';
import { MagneticButton } from '../ui/MagneticButton';

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
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playChime();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-obsidian-950/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Glow Bar */}
        <div className="h-1.5 bg-gradient-to-r from-cyber-blue via-ember-500 to-flare-gold" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyber-blue/15 text-cyber-blue border border-cyber-blue/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Request Interactive Demo Sandbox</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Experience <span className="text-ember-600 dark:text-ember-400 font-bold">{softwareName}</span> in real time
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
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rachel Adams"
                    className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Business Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rachel@acme.com"
                    className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Phone / WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Company / Branches</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Apex Logistics (3 Branches)"
                    className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
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
                      className={`py-2 px-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                        formData.userCount === tier
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
                  className="w-4 h-4 accent-ember-500 rounded cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Instant Access to Interactive Demo
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
                <span className="text-ember-600 dark:text-ember-400 font-bold">{softwareName}</span> have been sent to{' '}
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
