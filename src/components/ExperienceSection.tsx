import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Language, TRANSLATIONS } from '../data/translations';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].experience;
  const isAr = language === 'ar';

  return (
    <section id="experience" className="py-16 border-t border-slate-200 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-mono-code mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-mono-code tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            {t.subtitle}
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
                exp.featured ? 'border-amber-500/40 shadow-lg border-t-2 border-t-[#f59e0b]' : 'border-slate-200 dark:border-white/5'
              } glass-card-hover relative overflow-hidden`}
            >
              {exp.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-amber-500/20 border-b border-l border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono-code text-[10px] font-bold px-4 py-1 rounded-bl-xl shadow-xs uppercase tracking-wider flex items-center gap-1 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400" /> 
                    <span>{isAr ? "منصة إنتاجية حية" : "Production Platform"}</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono-code">
                      {isAr ? (exp.roleAr || exp.role) : exp.role}
                    </h3>
                    <span className="text-xs sm:text-sm px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-arabic">
                      {isAr ? exp.role : exp.roleAr}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm font-semibold text-amber-700 dark:text-amber-400 mt-2">
                    <span className="text-base text-slate-800 dark:text-slate-200">{isAr ? (exp.companyAr || exp.company) : exp.company}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-normal font-arabic">
                      ({isAr ? exp.company : exp.companyAr})
                    </span>
                    {exp.id === 'exp-1' && (
                      <a 
                        href="https://tamoora-sy.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 hover:underline ml-2"
                      >
                        <span>tamoora-sy.com</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>{isAr ? (exp.periodAr || exp.period) : exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{isAr ? (exp.locationAr || exp.location) : exp.location}</span>
                  </div>
                </div>
              </div>

              {/* HIGHLIGHTS BULLETS */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  {t.milestonesHeader}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(isAr && exp.highlightsAr ? exp.highlightsAr : exp.highlights).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH STACK BADGES */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code text-slate-600 dark:text-slate-400 mr-2 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-amber-600 dark:text-amber-400" /> {t.techStack}
                </span>
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-amber-800 dark:text-amber-300 border border-amber-500/20 hover:border-amber-500/40 transition-colors"
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

