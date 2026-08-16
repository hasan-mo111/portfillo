'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { PrintableCV } from './components/PrintableCV';
import { CVPreviewModal } from './components/CVPreviewModal';
import { Language, TRANSLATIONS } from './data/translations';
import { PERSONAL_INFO } from './data/portfolioData';
import { ArrowUp, Download, Heart, Terminal, Cpu } from 'lucide-react';

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [language, setLanguage] = useState<Language>('en');
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync dark class on html root
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Scroll listener for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrintCV = () => {
    // Invoke browser native print dialog
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-[#0b1329] text-slate-100 cyber-grid-bg bg-academic-pattern' 
        : 'bg-slate-50 text-slate-900 cyber-grid-bg-light bg-academic-pattern'
    }`}>
      
      {/* 
        PRINTABLE SINGLE-PAGE EXECUTIVE CV 
        Only visible when browser is in @media print mode 
      */}
      <PrintableCV />

      {/* SCREEN VIEW ONLY WRAPPER */}
      <div className="screen-only-container">
        
        {/* TOP NAVIGATION BAR */}
        <Navbar
          isDark={isDark}
          setIsDark={setIsDark}
          language={language}
          setLanguage={setLanguage}
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onPrintCV={handlePrintCV}
        />

        {/* MAIN BODY CONTENT */}
        <main className="relative">
          {/* HERO SECTION */}
          <HeroSection
            language={language}
            onPrintCV={handlePrintCV}
            onOpenCVModal={() => setIsCVModalOpen(true)}
          />

          {/* PROFESSIONAL EXPERIENCE */}
          <ExperienceSection language={language} />

          {/* ACADEMIC FOUNDATION & EDUCATION */}
          <EducationSection language={language} />

          {/* PROJECTS & RESEARCH SHOWCASE (With Filter Tabs) */}
          <ProjectsGallery language={language} />

          {/* TECHNICAL SKILLS & TOOLKIT */}
          <SkillsSection language={language} />

          {/* INTERACTIVE CYBER CLI TERMINAL */}
          <InteractiveTerminal language={language} onPrintCV={handlePrintCV} />

          {/* CONTACT & MESSAGE COMPOSER */}
          <ContactSection language={language} onPrintCV={handlePrintCV} />
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 bg-[#0b1329]/80 backdrop-blur-md text-xs text-slate-400 no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono-code text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{language === 'ar' ? PERSONAL_INFO.nameArabic : PERSONAL_INFO.name} ({language === 'ar' ? PERSONAL_INFO.name : PERSONAL_INFO.nameArabic})</span>
              <span className="text-slate-500">• {language === 'ar' ? PERSONAL_INFO.roleArabic : PERSONAL_INFO.role}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrintCV}
                className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer font-mono-code"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? TRANSLATIONS.ar.footer.printCV : TRANSLATIONS.en.footer.printCV}</span>
              </button>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.instagramUrl} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors font-mono-code"
              >
                @{PERSONAL_INFO.instagram}
              </a>
              <span>•</span>
              <span>{language === 'ar' ? PERSONAL_INFO.locationArabic : PERSONAL_INFO.location}</span>
            </div>
          </div>
        </footer>

        {/* FLOATING ACTION / SCROLL TO TOP */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 backdrop-blur-md shadow-xl border border-amber-500/40 transition-all cursor-pointer no-print active:scale-90"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* A4 CV MODAL PREVIEW */}
        <CVPreviewModal
          language={language}
          isOpen={isCVModalOpen}
          onClose={() => setIsCVModalOpen(false)}
          onPrint={handlePrintCV}
        />

      </div>
    </div>
  );
}
