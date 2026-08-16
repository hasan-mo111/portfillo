import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Play, Sparkles, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_LIST, EXPERIENCE_LIST, EDUCATION_LIST } from '../data/portfolioData';
import { Language, TRANSLATIONS } from '../data/translations';

interface InteractiveTerminalProps {
  language: Language;
  onPrintCV: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ language, onPrintCV }) => {
  const t = TRANSLATIONS[language].terminal;
  const isAr = language === 'ar';
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'sys.init --welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">========================================================</p>
          <p className="text-emerald-400 font-bold">{isAr ? "حسن محمد // هندسة الروبوت والبرمجيات الشاملة" : "HASAN MOHAMAD // INTELLIGENT SYSTEMS & FULL-STACK CORE"}</p>
          <p className="text-slate-400">{isAr ? "اكتب 'help' أو 'مساعدة' لرؤية الأوامر المتاحة." : "Type 'help' to see available commands or click quick prompts below."}</p>
          <p className="text-cyan-400 font-bold">========================================================</p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    let response: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <div><span className="text-emerald-400 font-mono">about</span> : Engineer biography & profile</div>
              <div><span className="text-emerald-400 font-mono">skills</span> : Hardware, software & CAD toolkit</div>
              <div><span className="text-emerald-400 font-mono">projects</span> : List all 7 engineering works</div>
              <div><span className="text-emerald-400 font-mono">experience</span> : Tamoura Platform & teaching</div>
              <div><span className="text-emerald-400 font-mono">education</span> : Engineering degree & NCD details</div>
              <div><span className="text-emerald-400 font-mono">tamoura</span> : Deep dive into Fintech platform</div>
              <div><span className="text-emerald-400 font-mono">robotics</span> : Hardware & Arduino systems specs</div>
              <div><span className="text-emerald-400 font-mono">print</span> / <span className="text-emerald-400 font-mono">cv</span> : Trigger A4 CV Print / PDF</div>
              <div><span className="text-emerald-400 font-mono">contact</span> : Email, Phone, Instagram, Location</div>
              <div><span className="text-emerald-400 font-mono">clear</span> : Clear terminal output buffer</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.nameArabic})</p>
            <p className="text-emerald-400 font-semibold">{PERSONAL_INFO.role}</p>
            <p className="text-slate-300 mt-1">{PERSONAL_INFO.shortProfile}</p>
            <p className="text-slate-400 text-xs mt-1">📍 Location: {PERSONAL_INFO.location} | 🎓 GPA: 90% in Robotics Engineering</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold">Verified Competencies:</p>
            <p>💻 <span className="text-sky-300 font-semibold">Programming:</span> Python, C++, JavaScript (TypeScript), Next.js 19, NestJS, PHP, HTML5/CSS3</p>
            <p>⚡ <span className="text-emerald-300 font-semibold">Hardware & IoT:</span> Arduino, ESP32/ESP8266, Raspberry Pi, Node-RED (MQTT), Sensors & Actuators</p>
            <p>🛠️ <span className="text-amber-300 font-semibold">CAD & Mechanical:</span> SolidWorks (3D Modeling & Kinematic Assemblies)</p>
            <p>🌟 <span className="text-purple-300 font-semibold">Leadership:</span> Algorithmic Problem Solving, Technical Leadership, Mentorship</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-cyan-400 font-bold">Catalog of 7 Featured Works:</p>
            {PROJECTS_LIST.map((p, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-amber-400 font-semibold">{idx + 1}. {p.title}</span> [{p.category}] - {p.type} ({p.year})
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-2 text-slate-300">
            {EXPERIENCE_LIST.map((exp, idx) => {
              const role = isAr ? exp.roleAr : exp.role;
              const company = isAr ? exp.companyAr : exp.company;
              const period = isAr ? exp.periodAr : exp.period;
              const location = isAr ? exp.locationAr : exp.location;
              const highlights = isAr ? exp.highlightsAr : exp.highlights;
              return (
                <div key={idx} className="border-l-2 border-cyan-500 pl-2">
                  <p className="text-cyan-300 font-bold">{role} @ {company}</p>
                  <p className="text-slate-400 text-xs">{period} | {location}</p>
                  <ul className="text-slate-300 text-xs mt-0.5 list-disc pl-3">
                    {highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="space-y-2 text-slate-300">
            {EDUCATION_LIST.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-emerald-500 pl-2">
                <p className="text-emerald-300 font-bold">{edu.degree}</p>
                <p className="text-slate-400 text-xs">{edu.institution} • <span className="text-white font-bold">{edu.grade}</span></p>
              </div>
            ))}
          </div>
        );
        break;

      case 'tamoura':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Tamoura Platform (منصة طامورة الاستثمارية):</p>
            <p className="text-xs text-slate-300">• Next.js (React 19) + NestJS (TypeScript) micro-architecture.</p>
            <p className="text-xs text-slate-300">• PostgreSQL, Redis caching, Docker containerization.</p>
            <p className="text-xs text-slate-300">• Digital contract signature canvas & dual-factor OTP.</p>
            <p className="text-xs text-slate-300">• USDT OxaPay crypto checkout & settlement webhooks.</p>
          </div>
        );
        break;

      case 'robotics':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">Robotics & IoT Systems:</p>
            <p className="text-xs text-slate-300">🦾 <span className="text-white font-semibold">Spherical Arm:</span> 3-DOF manipulator, custom spherical workspace, SolidWorks CAD, Arduino.</p>
            <p className="text-xs text-slate-300">🏠 <span className="text-white font-semibold">Smart Future House:</span> Raspberry Pi + ESP32/ESP8266 mesh, Node-RED MQTT flow engine.</p>
            <p className="text-xs text-slate-300">🚗 <span className="text-white font-semibold">Autonomous Car:</span> Precision PID line tracker & ultrasonic collision bypass.</p>
          </div>
        );
        break;

      case 'print':
      case 'cv':
        onPrintCV();
        response = (
          <div className="text-emerald-400">
            ✓ Triggering Single-Page A4 Executive CV Print / PDF generation dialog...
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Contact Channels:</p>
            <p>📧 Email: <span className="text-white font-mono">{PERSONAL_INFO.email}</span></p>
            <p>📞 Phone: <span className="text-white font-mono">{PERSONAL_INFO.phone}</span></p>
            <p>📷 Instagram: <span className="text-white font-mono">@{PERSONAL_INFO.instagram}</span></p>
            <p>📍 Location: <span className="text-white font-mono">{PERSONAL_INFO.location} ({PERSONAL_INFO.locationArabic})</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        response = (
          <div className="text-rose-400">
            Command not recognized: '{cmdText}'. Type <span className="text-amber-400 underline font-bold cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for valid directives.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdText, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-16 border-t border-white/10 terminal-sim relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TERMINAL CONTAINER */}
        <div className="rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl">
          
          {/* TOP BAR */}
          <div className="bg-[#0b1329]/90 px-4 py-3 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono-code text-slate-400 ml-2">hasan@robotics-core: ~/portfolio</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono-code text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TERMINAL READY</span>
            </div>
          </div>

          {/* TERMINAL BODY */}
          <div className="p-4 sm:p-6 bg-[#070d1e]/80 font-mono-code text-xs sm:text-sm min-h-[300px] max-h-[440px] overflow-y-auto space-y-4">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <span className="text-emerald-400">hasan@core:~$</span>
                  <span>{entry.command}</span>
                </div>
                <div className="pl-4 text-slate-300">{entry.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* QUICK PROMPT PILLS */}
          <div className="p-3 bg-[#0b1329]/80 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono-code backdrop-blur-md">
            <span className="text-slate-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Quick CLI:
            </span>
            {['help', 'about', 'skills', 'projects', 'experience', 'tamoura', 'robotics', 'print', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-amber-500/10 text-slate-300 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* INPUT LINE */}
          <form onSubmit={onSubmit} className="p-3 bg-[#070d1e]/95 border-t border-white/10 flex items-center gap-2">
            <span className="text-emerald-400 font-mono-code text-xs sm:text-sm font-bold pl-2">
              hasan@core:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'projects', 'print', 'contact')..."
              className="flex-1 bg-transparent border-none outline-none font-mono-code text-xs sm:text-sm text-amber-300 placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-mono-code text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};
