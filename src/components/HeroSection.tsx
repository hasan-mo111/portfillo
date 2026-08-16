import React from 'react';
import { 
  PERSONAL_INFO 
} from '../data/portfolioData';
import { 
  Download, 
  Terminal, 
  Cpu, 
  Code2, 
  Award, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onPrintCV: () => void;
  onOpenCVModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onPrintCV, onOpenCVModal }) => {
  return (
    <section id="hero" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Cyber Orbs & Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/10 to-amber-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: TEXT & INTRO (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* STATUS BADGE & STAT PILLS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/30 text-amber-300 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="font-mono-code">INTELLIGENT SYSTEMS & FULL-STACK ENG</span>
              </div>
              <span className="stat-pill text-slate-300">React 19</span>
              <span className="stat-pill text-slate-300">Next.js</span>
              <span className="stat-pill text-slate-300">C++</span>
              <span className="stat-pill text-slate-300">SolidWorks CAD</span>
            </motion.div>

            {/* MAIN HEADINGS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-mono-code">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-arabic">
                  ({PERSONAL_INFO.nameArabic})
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-semibold neon-text-amber tracking-tight">
                {PERSONAL_INFO.role}
              </p>
            </motion.div>

            {/* BIO SUMMARY */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              {PERSONAL_INFO.shortProfile}
            </motion.p>

            {/* QUICK CONTACT CHIPS */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 text-xs text-slate-300"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.locationArabic})</span>
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors font-mono-code"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a 
                href={PERSONAL_INFO.instagramUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-amber-400" />
                <span>@{PERSONAL_INFO.instagram}</span>
              </a>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={onPrintCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/50 shadow-lg shadow-amber-500/10 active:scale-95 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span className="uppercase tracking-wider">Download CV / Print A4</span>
              </button>

              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-500/40 active:scale-95 transition-all cursor-pointer"
              >
                <span>View A4 Resume Preview</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 border border-sky-500/30 hover:border-sky-500/50 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>
            </motion.div>

            {/* HIGHLIGHT STATS TILES */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-3.5 border border-white/5 hover:border-amber-500/40 transition-all">
                  <div className="text-xl sm:text-2xl font-black text-white font-mono-code">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold neon-text-amber mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: CYBERNETIC AVATAR / ARCHITECTURE CARD (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-card p-6 border-t-2 border-t-[#f59e0b] border-white/10 shadow-2xl shadow-slate-950/60 overflow-hidden">
              
              {/* Profile Avatar Header with Photo & Gradient Ring */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-white/10">
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-sky-500 to-emerald-500 p-0.5 shrink-0 shadow-lg shadow-amber-500/20 group">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-[14px] bg-[#0b1329]"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0b1329] flex items-center justify-center shadow" title="Available for Projects & Research">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white font-mono-code">{PERSONAL_INFO.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-arabic">
                      {PERSONAL_INFO.nameArabic}
                    </span>
                  </div>
                  <p className="neon-text-amber text-xs font-semibold mt-0.5">{PERSONAL_INFO.role}</p>
                  <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1.5 font-mono-code">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Robotics & Intelligent Systems • GPA 90%</span>
                  </p>
                </div>
              </div>

              {/* Core Skill Matrix Visualizer */}
              <div className="space-y-4 font-mono-code text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <Cpu className="w-3.5 h-3.5" /> Robotics & IoT Core
                    </span>
                    <span className="neon-text-emerald font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 w-[95%] rounded-full" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Arduino • ESP32 • Raspberry Pi • Node-RED • PID</p>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <Code2 className="w-3.5 h-3.5" /> Full-Stack Architecture
                    </span>
                    <span className="neon-text-amber font-bold">94%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-sky-400 w-[94%] rounded-full" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Next.js 19 • NestJS • TypeScript • PostgreSQL • Docker</p>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <Bot className="w-3.5 h-3.5" /> CAD & SolidWorks 3D
                    </span>
                    <span className="neon-text-emerald font-bold">90%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[90%] rounded-full" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Kinematic Workspace • 3D Assembly • Mechanical Modeling</p>
                </div>
              </div>

              {/* Key Certifications highlight */}
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Academic Standing & Credentials</span>
                </div>
                <div className="glass-card rounded-xl p-3 border border-white/5 text-[11px] text-slate-300 space-y-1.5 border-l-4 border-l-emerald-500">
                  <div className="flex items-center justify-between text-white font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Robotics Engineering</span>
                    </div>
                    <span className="neon-text-emerald font-bold font-mono-code">90% GPA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>National Centre for the Distinguished (NCD)</span>
                  </div>
                </div>
              </div>

              {/* Quick Prompt Command Box */}
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono-code text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1 text-slate-300">
                  <Terminal className="w-3 h-3 text-sky-400" /> $ print --mode=single-page-a4
                </span>
                <button 
                  onClick={onPrintCV}
                  className="text-amber-400 hover:text-amber-300 text-[10px] bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/40 cursor-pointer font-bold transition-all"
                >
                  EXECUTE
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
