import React, { useState } from 'react';
import { PROJECTS_LIST, ProjectItem } from '../data/portfolioData';
import { 
  Code2, 
  Cpu, 
  Layers, 
  ExternalLink, 
  Terminal, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  Bot, 
  FileText, 
  X, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Robotics & IoT' | 'Software'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_LIST.filter((proj) => {
    if (activeTab === 'All') return true;
    return proj.category === activeTab;
  });

  const getBadgeStyle = (category: string) => {
    if (category === 'Robotics & IoT') {
      return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
    }
    return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
  };

  return (
    <section id="projects" className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER & TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono-code mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono-code tracking-tight">
              Featured Projects & Research
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Cutting-edge robotics, IoT hardware architectures, full-stack web platforms, and peer scientific research papers.
            </p>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="filter-tabs-wrapper flex items-center p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto backdrop-blur-md">
            {(['All', 'Robotics & IoT', 'Software'] as const).map((tab) => {
              const count = tab === 'All' 
                ? PROJECTS_LIST.length 
                : PROJECTS_LIST.filter(p => p.category === tab).length;
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive 
                      ? 'text-white bg-white/15 border border-white/20 shadow-md backdrop-blur-md' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl glass-card p-6 border border-white/5 hover:border-amber-500/40 glass-card-hover cursor-pointer flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow bar on top of card */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-400/80 to-transparent transition-all duration-500" />

                <div>
                  {/* CATEGORY & YEAR ROW */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono-code px-2.5 py-0.5 rounded border ${getBadgeStyle(project.category)}`}>
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono-code text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {project.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-white font-mono-code group-hover:text-amber-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.titleAr && (
                    <p className="text-xs text-slate-400 font-arabic mt-1">
                      {project.titleAr}
                    </p>
                  )}

                  {/* TYPE PILL */}
                  <div className="mt-2 text-xs font-semibold text-amber-400/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{project.type}</span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* TECH TAGS & EXPAND BUTTON */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[11px] font-mono-code px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span className="flex items-center gap-1">
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {project.highlightMetric && (
                      <span className="text-[10px] text-emerald-400 font-mono-code bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.highlightMetric}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* PROJECT DETAILS MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative"
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* MODAL HEADER */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono-code px-2.5 py-0.5 rounded border ${getBadgeStyle(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400">
                    {selectedProject.year} • {selectedProject.type}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white font-mono-code">
                  {selectedProject.title}
                </h3>
                {selectedProject.titleAr && (
                  <p className="text-sm font-semibold text-cyan-400 font-arabic mt-0.5">
                    {selectedProject.titleAr}
                  </p>
                )}

                {/* SUMMARY */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </div>

                {/* ARCHITECTURAL HIGHLIGHTS */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-mono-code uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Technical Architecture & Features</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FULL TECH STACK */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2">
                    Full Technologies & Tools Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono-code px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CLOSE FOOTER */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 cursor-pointer"
                  >
                    Close Specifications
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
