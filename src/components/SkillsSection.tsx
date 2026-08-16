import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Cpu, Wrench, Award, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono-code tracking-tight">
            Technical Skills & Engineering Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of programming languages, hardware embedded platforms, 3D CAD modeling, and leadership competencies.
          </p>
        </div>

        {/* SKILLS CARDS GRID (4 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl glass-card p-6 sm:p-7 border border-white/5 hover:border-amber-500/30 glass-card-hover"
            >
              {/* CATEGORY HEADER */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono-code">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {category.skills.length} core proficiencies
                  </span>
                </div>
              </div>

              {/* SKILLS BARS & TAGS */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono-code">
                      <span className="text-slate-200 font-semibold">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        {skill.tag && (
                          <span className="stat-pill text-slate-300">
                            {skill.tag}
                          </span>
                        )}
                        <span className="text-amber-400 font-bold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                        className={`h-full rounded-full ${
                          category.color === 'sky' 
                            ? 'bg-gradient-to-r from-amber-500 to-sky-400' 
                            : category.color === 'emerald'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                            : category.color === 'amber'
                            ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                            : 'bg-gradient-to-r from-purple-500 to-pink-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
