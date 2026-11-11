import React, { useState } from 'react';
import { X, Calendar, Clock, Video, User, Mail, Building, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import { soundFX } from '../ui/sound-effects';
import { MagneticButton } from '../ui/MagneticButton';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState('Enterprise Architecture & Custom Software');

  React.useEffect(() => {
    if (initialTopic && isOpen) {
      setSelectedTopic(initialTopic);
    }
  }, [initialTopic, isOpen]);
  const [selectedTime, setSelectedTime] = useState('11:00 AM IST');
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'Enterprise Architecture & Custom Software',
    'High-ROAS Meta & Google Ad Engine',
    'Mobile Application (iOS/Android/Flutter)',
    'Enterprise ERP & Multi-Branch Migration',
    'Web Modernization & Speed Optimization',
  ];

  const times = ['10:30 AM IST', '02:00 PM IST', '04:30 PM IST', '06:00 PM IST', '08:30 PM IST'];
  const days = ['Tomorrow (Priority)', 'In 2 Days', 'Next Monday'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playChime();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-obsidian-950/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Glowing top line */}
        <div className="h-1.5 bg-gradient-to-r from-flare-amber via-ember-500 to-cyber-blue" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-flare-amber/15 text-flare-amber border border-flare-amber/30">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">Schedule 30-Min Strategy Consultation</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">Directly with a Principal Solutions Architect • Free & Confidential</p>
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
                      className={`text-left text-xs p-3 rounded-xl border transition-all ${
                        selectedTopic === t
                          ? 'bg-ember-500/10 dark:bg-ember-500/20 border-ember-500 text-slate-900 dark:text-white font-bold shadow-sm'
                          : 'bg-slate-50 dark:bg-obsidian-800 text-slate-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/5 hover:border-slate-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Day & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-ember-500" />
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
                        className={`w-full text-left text-xs px-3.5 py-2.5 rounded-xl border transition-all font-semibold ${
                          selectedDay === d
                            ? 'bg-ember-500 text-white font-bold border-ember-500 shadow-sm'
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
                    <Clock className="w-3.5 h-3.5 text-flare-amber" />
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
                        className={`text-center text-xs py-2 px-2 rounded-xl border transition-all font-mono font-bold ${
                          selectedTime === tm
                            ? 'bg-flare-amber text-slate-900 border-flare-amber shadow-sm'
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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Verma"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Corporate Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-zinc-400 block mb-1 font-semibold">Company & Title</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies, Founder"
                        className="w-full bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-ember-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-obsidian-800/60 p-3 rounded-xl border border-slate-200 dark:border-white/5">
                <ShieldCheck className="w-4 h-4 text-ember-500 flex-shrink-0" />
                <span>Google Meet / Zoom calendar link will be dispatched to your email automatically.</span>
              </div>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Confirm & Reserve 30-Min Strategy Session
                </MagneticButton>
              </div>
            </form>
          ) : (
            /* Success confirmation */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-ember-500/15 border border-ember-500 text-ember-600 dark:text-ember-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Strategy Session Confirmed!</h4>
              <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto">
                Invitation and calendar invite dispatched to <span className="text-ember-600 dark:text-ember-400 font-bold">{formData.email}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-white/10 max-w-sm mx-auto text-left text-xs font-mono space-y-2">
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Topic:</span>
                  <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">{selectedTopic}</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                  <span>Scheduled Time:</span>
                  <span className="text-flare-amber font-bold">{selectedDay} @ {selectedTime}</span>
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
