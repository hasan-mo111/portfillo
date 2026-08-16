import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Terminal, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono-code tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Demonstrated engineering leadership spanning production-grade fintech web platforms and STEM algorithmic education.
          </p>
        </div>

        {/* TIMELINE / EXPERIENCE CARDS */}
        <div className="space-y-8">
          {EXPERIENCE_LIST.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl glass-card p-6 sm:p-8 border ${
                exp.featured ? 'border-amber-500/40 shadow-xl shadow-amber-950/20 border-t-2 border-t-[#f59e0b]' : 'border-white/5'
              } glass-card-hover relative overflow-hidden`}
            >
              {exp.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-amber-500/20 border-b border-l border-amber-500/30 text-amber-300 font-mono-code text-[10px] font-bold px-4 py-1 rounded-bl-xl shadow-md uppercase tracking-wider flex items-center gap-1 backdrop-blur-md">
                    <Sparkles className="w-3 h-3" /> Production Platform
                  </div>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-mono-code">
                      {exp.role}
                    </h3>
                    {exp.roleAr && (
                      <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-arabic">
                        {exp.roleAr}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm font-semibold text-amber-400 mt-2">
                    <span className="text-base text-slate-200">{exp.company}</span>
                    {exp.companyAr && (
                      <span className="text-slate-400 text-xs font-normal font-arabic">
                        ({exp.companyAr})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* HIGHLIGHTS BULLETS */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Architectural Milestones:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH STACK BADGES */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code text-slate-400 mr-2 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-amber-400" /> Technologies:
                </span>
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-white/5 text-amber-300 border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
