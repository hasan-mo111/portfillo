import React from 'react';
import { 
  PERSONAL_INFO, 
  EDUCATION_LIST, 
  EXPERIENCE_LIST, 
  PROJECTS_LIST, 
  SKILL_CATEGORIES 
} from '../data/portfolioData';
import { Mail, Phone, MapPin, Instagram, Award, GraduationCap, Briefcase, Cpu, Code2, Wrench } from 'lucide-react';

export const PrintableCV: React.FC = () => {
  return (
    <div id="printable-cv" className="print-only-container text-black bg-white font-sans text-[9pt] leading-tight">
      {/* EXECUTIVE HEADER WITH PHOTO */}
      <div className="border-b-2 border-black pb-2 mb-2 flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg border border-gray-400 p-0.5 shrink-0 overflow-hidden bg-gray-100">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h1 className="text-xl font-bold tracking-tight text-black uppercase font-mono-code">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-sm font-semibold text-gray-700 font-arabic">
                ({PERSONAL_INFO.nameArabic})
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-black mt-0.5">
              {PERSONAL_INFO.role} <span className="font-normal text-gray-600">| Intelligent Systems & Web Architecture</span>
            </p>
          </div>
        </div>

        <div className="text-right text-[8pt] text-gray-800 space-y-0.5 shrink-0">
          <div className="flex items-center justify-end gap-1">
            <Mail className="w-2.5 h-2.5 text-black inline" />
            <span>{PERSONAL_INFO.email}</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <Phone className="w-2.5 h-2.5 text-black inline" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <MapPin className="w-2.5 h-2.5 text-black inline" />
            <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.locationArabic})</span>
            <span className="mx-1">•</span>
            <Instagram className="w-2.5 h-2.5 text-black inline" />
            <span>@{PERSONAL_INFO.instagram}</span>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="mb-2">
        <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1 flex items-center gap-1">
          <span>Executive Profile</span>
        </h2>
        <p className="text-[8.5pt] text-gray-900 leading-snug text-justify">
          {PERSONAL_INFO.shortProfile}
        </p>
      </div>

      {/* 2-COLUMN MAIN CONTENT FOR MAXIMUM A4 EFFICIENCY */}
      <div className="grid grid-cols-12 gap-3">
        {/* LEFT COLUMN: Experience & Key Projects (7 Cols) */}
        <div className="col-span-7 space-y-2">
          {/* PROFESSIONAL EXPERIENCE */}
          <section className="avoid-break">
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-black" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-2">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="avoid-break">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[9pt] text-black">{exp.role}</span>
                    <span className="text-[7.5pt] font-medium text-gray-700">{exp.period}</span>
                  </div>
                  <div className="text-[8pt] font-semibold text-gray-800 flex justify-between">
                    <span>{exp.company} {exp.companyAr && <span className="font-normal font-arabic">({exp.companyAr})</span>}</span>
                    <span className="text-[7.5pt] text-gray-600">{exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-3.5 mt-0.5 space-y-0.5 text-[8pt] text-gray-900">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* KEY PROJECTS HIGHLIGHT */}
          <section className="avoid-break">
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 flex items-center gap-1">
              <Cpu className="w-3 h-3 text-black" />
              <span>Key Engineering & Software Projects</span>
            </h2>

            <div className="space-y-1.5">
              {PROJECTS_LIST.slice(0, 4).map((proj) => (
                <div key={proj.id} className="avoid-break">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[8.5pt] text-black">
                      {proj.title} <span className="font-normal text-gray-600 text-[7.5pt]">({proj.category})</span>
                    </span>
                    <span className="text-[7.5pt] font-medium text-gray-600">{proj.year}</span>
                  </div>
                  <p className="text-[8pt] text-gray-900 leading-snug">
                    {proj.description}
                  </p>
                  <p className="text-[7.5pt] text-gray-700 font-mono-code mt-0.5">
                    <span className="font-semibold text-black">Tech:</span> {proj.techStack.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Education, Skills, Honors (5 Cols) */}
        <div className="col-span-5 space-y-2">
          {/* EDUCATION & ACADEMICS */}
          <section className="avoid-break">
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-black" />
              <span>Education & Academics</span>
            </h2>

            <div className="space-y-1.5">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="avoid-break">
                  <div className="font-bold text-[8.5pt] text-black leading-tight">
                    {edu.degree}
                  </div>
                  <div className="text-[7.5pt] text-gray-800 font-semibold">
                    {edu.institution}
                  </div>
                  <div className="flex justify-between items-center text-[7.5pt] text-gray-700 mt-0.5">
                    <span className="font-bold text-black bg-gray-100 px-1 py-0.2 rounded border border-gray-300">
                      {edu.grade}
                    </span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNICAL SKILLS MATRIX */}
          <section className="avoid-break">
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 flex items-center gap-1">
              <Code2 className="w-3 h-3 text-black" />
              <span>Technical Skills</span>
            </h2>

            <div className="space-y-1.5 text-[8pt]">
              <div>
                <span className="font-bold text-black block">Programming:</span>
                <p className="text-gray-900 leading-snug">
                  Python, C++, JavaScript (TypeScript), Next.js (React 19), NestJS, PHP, HTML5/CSS3.
                </p>
              </div>
              <div>
                <span className="font-bold text-black block">Hardware & IoT:</span>
                <p className="text-gray-900 leading-snug">
                  Arduino IDE, ESP32/ESP8266, Raspberry Pi, Node-RED (MQTT), Sensors & Actuators.
                </p>
              </div>
              <div>
                <span className="font-bold text-black block">CAD & Mechanical:</span>
                <p className="text-gray-900 leading-snug">
                  SolidWorks (3D Modeling & Kinematic Assembly), Prototyping.
                </p>
              </div>
              <div>
                <span className="font-bold text-black block">Core Soft Skills:</span>
                <p className="text-gray-900 leading-snug">
                  Algorithmic Problem Solving, Technical Leadership, Mentorship, Effective Communication.
                </p>
              </div>
            </div>
          </section>

          {/* AWARDS & RESEARCH */}
          <section className="avoid-break">
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1.5 flex items-center gap-1">
              <Award className="w-3 h-3 text-black" />
              <span>Certifications & Research</span>
            </h2>

            <div className="space-y-1 text-[8pt] text-gray-900">
              <div className="border-l-2 border-black pl-1.5">
                <span className="font-semibold text-black">2x Training Excellence Awards:</span>
                <p className="text-[7.5pt] text-gray-700">Syrian Computer Society (SCS) & Omega Institute.</p>
              </div>
              <div className="border-l-2 border-black pl-1.5">
                <span className="font-semibold text-black">Research: ML & Sentiment Analysis (2024):</span>
                <p className="text-[7.5pt] text-gray-700">Text emotion extraction via NLP classification.</p>
              </div>
              <div className="border-l-2 border-black pl-1.5">
                <span className="font-semibold text-black">Research: Quantum Modeling (2025):</span>
                <p className="text-[7.5pt] text-gray-700">Theoretical quantum state simulations & predictive logic.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-2 pt-1 border-t border-gray-300 text-center text-[7pt] text-gray-500 flex justify-between items-center">
        <span>Hasan Mohamad • Official CV</span>
        <span>Portfolio & Live Verification: hasan_ali_m0hamad</span>
        <span>Updated 2026</span>
      </div>
    </div>
  );
};
