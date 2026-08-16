import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Instagram, Copy, Check, Send, Download, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onPrintCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onPrintCV }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding Robotics & Full-Stack Development'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono-code tracking-tight">
            Let's Collaborate on Next-Gen Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Available for robotics engineering projects, full-stack web applications, IoT automation, and research collaborations.
          </p>
        </div>

        {/* 2-COLUMN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: DIRECT CONTACT CARDS (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* EMAIL CARD */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-amber-500/40 glass-card-hover flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code text-slate-400">Direct Email</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-sm sm:text-base font-bold text-white hover:text-amber-300 block font-mono-code transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Copy Email"
              >
                {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* PHONE / WHATSAPP CARD */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-emerald-500/40 glass-card-hover flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code text-slate-400">Phone & Telegram / WhatsApp</span>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`} 
                    className="text-sm sm:text-base font-bold text-white hover:text-emerald-300 block font-mono-code transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Copy Phone"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* INSTAGRAM CARD */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-sky-500/40 glass-card-hover flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono-code text-slate-400">Instagram Handle</span>
                  <a 
                    href={PERSONAL_INFO.instagramUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-sky-300 block font-mono-code transition-colors"
                  >
                    @{PERSONAL_INFO.instagram}
                  </a>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Open Instagram"
              >
                <Instagram className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* LOCATION CARD */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-white/5 text-amber-400 border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-code text-slate-400">Location Base</span>
                <p className="text-sm sm:text-base font-bold text-white font-mono-code">
                  {PERSONAL_INFO.location} <span className="font-arabic font-normal text-slate-400">({PERSONAL_INFO.locationArabic})</span>
                </p>
              </div>
            </div>

            {/* QUICK DOWNLOAD CV BANNER */}
            <div className="p-5 rounded-2xl glass-card border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Executive Resume Available</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need a printable one-page executive resume for recruitment or evaluation?
              </p>
              <button
                onClick={onPrintCV}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/50 flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-95 uppercase tracking-wider"
              >
                <Download className="w-4 h-4" />
                <span>Download One-Page A4 Resume (PDF)</span>
              </button>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE MESSAGE COMPOSER (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 relative">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white font-mono-code">
                  Send Direct Project Inquiry
                </h3>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1.5">
                    Subject / Project Domain
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Robotics System Integration / Full-Stack Project"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500/50 text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-400 mb-1.5">
                    Your Message / Specifications
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project requirements, timeline, or engineering inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500/50 text-sm text-white placeholder:text-slate-600 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono-code text-slate-500">
                    Sends directly to hassan0980490620@gmail.com
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-500 to-sky-500 hover:from-amber-400 hover:to-sky-400 flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-mono-code flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email client launched! Thank you for reaching out.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
