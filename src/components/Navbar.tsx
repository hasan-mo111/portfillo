import React from 'react';
import { Download, FileText, Sun, Moon, Sparkles, Terminal, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCVModal: () => void;
  onPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark, onOpenCVModal, onPrintCV }) => {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 no-print
      border-white/10 bg-[#0b1329]/80 text-slate-100 dark:border-white/10 dark:bg-[#0b1329]/80
      data-[light=true]:bg-white/90 data-[light=true]:text-slate-900 data-[light=true]:border-slate-200"
      data-light={!isDark}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LOGO / BRAND */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-sky-500 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all overflow-hidden">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-[9px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-base font-mono-code text-slate-100 group-hover:text-amber-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-arabic">
                {PERSONAL_INFO.nameArabic}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono-code flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Robot Engineer & Full-Stack
            </p>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#experience" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <span>Experience</span>
          </a>
          <a href="#education" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <span>Education</span>
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors flex items-center gap-1">
            <span>Projects</span>
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span>Skills</span>
          </a>
          <a href="#terminal" className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono-code text-xs">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>CLI</span>
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">
            <span>Contact</span>
          </a>
        </div>

        {/* ACTION CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />}
          </button>

          {/* CV PREVIEW MODAL BUTTON */}
          <button
            onClick={onOpenCVModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>A4 CV Preview</span>
          </button>

          {/* PRINT / DOWNLOAD CV PRIMARY BUTTON */}
          <button
            onClick={onPrintCV}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/50 shadow-md shadow-amber-500/10 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
            title="Download formatted single-page A4 PDF resume"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
