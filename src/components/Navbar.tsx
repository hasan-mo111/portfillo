import React from 'react';
import { Download, FileText, Sun, Moon, Terminal, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean | ((prev: boolean) => boolean)) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenCVModal: () => void;
  onPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isDark, 
  setIsDark, 
  language,
  setLanguage,
  onOpenCVModal, 
  onPrintCV 
}) => {
  const t = TRANSLATIONS[language].nav;
  const isAr = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 no-print
      bg-white/95 border-slate-200 text-slate-900 shadow-sm
      dark:bg-[#0b1329]/90 dark:border-white/10 dark:text-slate-100 dark:shadow-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LOGO / BRAND */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-sky-500 p-0.5 shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all overflow-hidden shrink-0">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-[9px]"
              onError={(e) => {
                // Fallback to local image path if needed
                (e.target as HTMLImageElement).src = '/hasan_profil.jpg';
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-base font-mono-code text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {isAr ? PERSONAL_INFO.nameArabic : PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-arabic">
                {isAr ? PERSONAL_INFO.name : PERSONAL_INFO.nameArabic}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono-code flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              {isAr ? "مهندس روبوت ومطور شامل" : "Robot Engineer & Full-Stack"}
            </p>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
          <a href="#experience" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {t.experience}
          </a>
          <a href="#education" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {t.education}
          </a>
          <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
            {t.projects}
          </a>
          <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            {t.skills}
          </a>
          <a href="#terminal" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono-code text-xs">
            <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.cli}</span>
          </a>
          <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {t.contact}
          </a>
        </div>

        {/* ACTION CONTROLS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* LANGUAGE SWITCHER BUTTON */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-xs"
            title={isAr ? "Switch to English" : "التحويل للغة العربية"}
          >
            <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span className="font-semibold">{t.langToggle}</span>
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-xs"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* CV PREVIEW MODAL BUTTON */}
          <button
            onClick={onOpenCVModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-amber-500/40 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t.previewCV}</span>
          </button>

          {/* PRINT / DOWNLOAD CV PRIMARY BUTTON */}
          <button
            onClick={onPrintCV}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-400 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/50 shadow-sm active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
            title="Download formatted single-page A4 PDF resume"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t.downloadCV}</span>
            <span className="sm:hidden">CV</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

