import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-code mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono-code tracking-tight">
            Education & Academics
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Elite academic background at Syria's premier center for gifted minds and ongoing university degree in robotics engineering.
          </p>
        </div>

        {/* EDUCATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_LIST.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl glass-card p-6 sm:p-7 border border-white/5 border-l-4 border-l-emerald-500 hover:border-emerald-500/40 glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* TOP ROW BADGES */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400">
                    {edu.period}
                  </span>
                </div>

                {/* DEGREE NAME */}
                <h3 className="text-xl font-bold text-white font-mono-code leading-snug">
                  {edu.degree}
                </h3>
                {edu.degreeAr && (
                  <p className="text-sm font-semibold text-emerald-400/90 font-arabic mt-1">
                    {edu.degreeAr}
                  </p>
                )}

                {/* INSTITUTION */}
                <div className="mt-3 text-sm text-slate-300 font-medium">
                  <p>{edu.institution}</p>
                  {edu.institutionAr && (
                    <p className="text-xs text-slate-400 font-arabic mt-0.5">{edu.institutionAr}</p>
                  )}
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* GRADE HIGHLIGHT FOOTER */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono-code text-slate-400">Academic Standing:</span>
                <div className="text-right">
                  <span className="text-sm font-bold neon-text-emerald bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/30 inline-flex items-center gap-1.5 font-mono-code">
                    <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
