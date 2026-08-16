export type Language = 'en' | 'ar';

export interface TranslationDictionary {
  nav: {
    experience: string;
    education: string;
    projects: string;
    skills: string;
    cli: string;
    contact: string;
    previewCV: string;
    downloadCV: string;
    toggleTheme: string;
    langToggle: string;
  };
  hero: {
    availableBadge: string;
    titleGreeting: string;
    roleTag: string;
    bio: string;
    visitTamoora: string;
    downloadCV: string;
    previewA4: string;
    contactMe: string;
    profileSummary: string;
    gpaBadge: string;
    activeStatus: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    visitPlatform: string;
    technologies: string;
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    academicStanding: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    robotics: string;
    software: string;
    viewSpecs: string;
    visitLive: string;
    modalClose: string;
    featuresTitle: string;
    techTitle: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
  };
  terminal: {
    badge: string;
    title: string;
    quickCLI: string;
    placeholder: string;
    runBtn: string;
    helpText: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    instagramLabel: string;
    locationLabel: string;
    executiveResumeBadge: string;
    executiveResumeDesc: string;
    downloadA4: string;
    inquiryTitle: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    charCount: string;
    sendBtn: string;
    successMsg: string;
    copyTooltip: string;
    copiedTooltip: string;
  };
  footer: {
    rights: string;
    printCV: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      cli: "CLI",
      contact: "Contact",
      previewCV: "A4 CV Preview",
      downloadCV: "Download CV",
      toggleTheme: "Toggle Theme",
      langToggle: "العربية"
    },
    hero: {
      availableBadge: "AVAILABLE FOR ROBOTICS RESEARCH & PRODUCTION ROLES",
      titleGreeting: "Designing Intelligent Robots & Scalable Web Platforms",
      roleTag: "Robot Engineer & Full-Stack Developer",
      bio: "Passionate robotics and intelligent systems engineer and full-stack software developer with 3+ years of experience. Distinguished graduate of the National Centre for the Distinguished (NCD) and top-ranking 2nd-year undergraduate in Robotics Engineering (90% GPA). Highly proficient in combining SolidWorks CAD modeling, mathematical kinematics, embedded C++/IoT hardware, and scalable cloud architectures.",
      visitTamoora: "Visit Tamoura Platform (tamoora-sy.com)",
      downloadCV: "Download One-Page CV (PDF)",
      previewA4: "A4 CV Preview",
      contactMe: "Get in Touch",
      profileSummary: "Executive Profile & Metrics",
      gpaBadge: "90% Outstanding GPA",
      activeStatus: "Ready for High-Impact Projects"
    },
    experience: {
      badge: "CAREER & TRACK RECORD",
      title: "Professional Experience",
      subtitle: "Proven experience building commercial fintech ecosystems, hardware-connected systems, and leading STEM academic instruction.",
      visitPlatform: "Visit tamoora-sy.com",
      technologies: "Technologies:"
    },
    education: {
      badge: "ACADEMIC FOUNDATION",
      title: "Education & Academics",
      subtitle: "Formal academic training at leading scientific institutions, focusing on robotics, control systems, and computational algorithms.",
      academicStanding: "Academic Standing:"
    },
    projects: {
      badge: "PORTFOLIO SHOWCASE",
      title: "Featured Projects & Research",
      subtitle: "A curated collection of physical robotics manipulators, distributed IoT systems, fintech software, and theoretical AI research.",
      all: "All",
      robotics: "Robotics & IoT",
      software: "Software",
      viewSpecs: "View Specifications",
      visitLive: "Visit Live Platform",
      modalClose: "Close",
      featuresTitle: "Key Architecture & Features",
      techTitle: "Technology Stack & Tools"
    },
    skills: {
      badge: "CAPABILITIES MATRIX",
      title: "Technical Skills & Engineering Toolkit",
      subtitle: "Comprehensive technical proficiency across hardware prototyping, kinematics analysis, embedded programming, and modern full-stack development."
    },
    terminal: {
      badge: "INTERACTIVE CONSOLE",
      title: "Interactive System Terminal",
      quickCLI: "Quick CLI:",
      placeholder: "Type command ('help', 'tamoura', 'projects', 'print', 'contact')...",
      runBtn: "Run",
      helpText: "Type 'help' to see all available commands or click the quick pills below."
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Let's Collaborate on Next-Gen Systems",
      subtitle: "Available for robotics engineering projects, full-stack enterprise architecture, or academic research collaborations.",
      emailLabel: "Direct Email",
      phoneLabel: "Phone & WhatsApp",
      instagramLabel: "Instagram Profile",
      locationLabel: "Location",
      executiveResumeBadge: "Executive Resume Available",
      executiveResumeDesc: "Need a printable one-page executive resume for recruitment or evaluation?",
      downloadA4: "Download One-Page A4 Resume (PDF)",
      inquiryTitle: "Send Direct Project Inquiry",
      subjectLabel: "Subject / Project Scope",
      subjectPlaceholder: "e.g. Robotics System Integration / Full-Stack Project",
      messageLabel: "Project Details / Message",
      messagePlaceholder: "Describe your project requirements, timeline, or engineering inquiry...",
      charCount: "characters",
      sendBtn: "Send Message",
      successMsg: "Email client launched! Thank you for reaching out.",
      copyTooltip: "Copy",
      copiedTooltip: "Copied!"
    },
    footer: {
      rights: "All Rights Reserved",
      printCV: "Print Single-Page CV"
    }
  },
  ar: {
    nav: {
      experience: "الخبرات المهنية",
      education: "التعليم الأكاديمي",
      projects: "المشاريع والبحوث",
      skills: "المهارات التقنية",
      cli: "الطرفية التفاعلية",
      contact: "تواصل معي",
      previewCV: "معاينة السيرة الذاتية A4",
      downloadCV: "تنزيل السيرة الذاتية",
      toggleTheme: "تبديل المظهر",
      langToggle: "English"
    },
    hero: {
      availableBadge: "متاح لمشاريع هندسة الروبوت وتطوير البرمجيات المتقدمة",
      titleGreeting: "هندسة الروبوتات والأنظمة الذكية والمنصات السحابية",
      roleTag: "مهندس روبوت ومطور برمجيات شامل (Full-Stack)",
      bio: "مهندس روبوت وأنظمة ذكية ومطور برمجيات شامل بخبرة تتجاوز 3 سنوات. خريج المركز الوطني للمتميزين (NCD) وطالب في السنة الثانية بهندسة الروبوت والأنظمة الذكية بمعدل متميز 90%. أمتلك خبرة عملية واسعة تجمع بين النمذجة الميكانيكية ثلاثية الأبعاد (SolidWorks)، التحليل الحركي، الأنظمة المضمنة وإنترنت الأشياء (C++/IoT)، وتطوير منصات الويب السحابية المتكاملة والآمنة.",
      visitTamoora: "زيارة منصة طامورة (tamoora-sy.com)",
      downloadCV: "تنزيل السيرة الذاتية صفحة واحدة (PDF)",
      previewA4: "معاينة السيرة الذاتية A4",
      contactMe: "تواصل معي مباشرة",
      profileSummary: "الملف التنفيذي والمؤشرات",
      gpaBadge: "معدل متميز 90%",
      activeStatus: "جاهز للمشاريع النوعية والبحث العلمي"
    },
    experience: {
      badge: "المسار المهني والإنجازات",
      title: "الخبرات المهنية والعملية",
      subtitle: "سجل حافل في بناء المنصات المالية والاستثمارية السحابية، والأنظمة المرتبطة بالعتاد الصلب، والتدريب الأكاديمي المتقدم.",
      visitPlatform: "زيارة منصة طامورة tamoora-sy.com",
      technologies: "التقنيات المستخدمة:"
    },
    education: {
      badge: "المؤهلات والمسار الأكاديمي",
      title: "التعليم الأكاديمي والمؤهلات",
      subtitle: "تأهيل علمي ونوعي في أعرق الصروح العلمية التخصصية، بالتركيز على هندسة التحكم والروبوت والخوارزميات المعقدة.",
      academicStanding: "المرتبة الأكاديمية:"
    },
    projects: {
      badge: "معرض المشاريع والابتكارات",
      title: "المشاريع المميزة والأبحاث العلمية",
      subtitle: "مجموعة مختارة تشمل أذرعاً روبوتية فيزيائية، أنظمة إنترنت الأشياء والمنزل الذكي، برمجيات الويب الإنتاجية، وأبحاث الذكاء الاصطناعي.",
      all: "الكل",
      robotics: "الروبوت وإنترنت الأشياء",
      software: "البرمجيات والويب",
      viewSpecs: "عرض المواصفات الهندسية",
      visitLive: "زيارة المنصة المباشرة",
      modalClose: "إغلاق",
      featuresTitle: "الميزات والمعمارية الهندسية",
      techTitle: "مجموعة التقنيات والأدوات"
    },
    skills: {
      badge: "مصفوفة الكفاءات",
      title: "المهارات التقنية والأدوات الهندسية",
      subtitle: "شغف وإتقان عبر طيف واسع يشمل النمذجة ثلاثية الأبعاد، برمجة المتحكمات، إنترنت الأشياء، وتطوير الأنظمة السحابية والواجهات الحديثة."
    },
    terminal: {
      badge: "محاكي سطر الأوامر",
      title: "الطرفية التفاعلية للأنظمة (CLI)",
      quickCLI: "أوامر سريعة:",
      placeholder: "اكتب أمراً مثل ('help', 'tamoura', 'projects', 'طامورة', 'مشاريع', 'طباعة')...",
      runBtn: "تنفيذ",
      helpText: "اكتب 'help' أو 'مساعدة' لمعرفة جميع الأوامر المتاحة أو اضغط على الأزرار السريعة أدناه."
    },
    contact: {
      badge: "قنوات التواصل",
      title: "دعنا نبني معاً أنظمة وتقنيات الجيل القادم",
      subtitle: "متاح للمشاريع الهندسية، تطوير البرمجيات الشاملة، أو الأبحاث الأكاديمية المشتركة.",
      emailLabel: "البريد الإلكتروني المباشر",
      phoneLabel: "الهاتف والواتساب",
      instagramLabel: "حساب إنستغرام",
      locationLabel: "الموقع الجغرافي",
      executiveResumeBadge: "السيرة الذاتية الرسمية متاحة",
      executiveResumeDesc: "هل تحتاج إلى سيرة ذاتية تنفيذية قياسية من صفحة واحدة لتقييم المشاريع أو التوظيف؟",
      downloadA4: "تنزيل السيرة الذاتية القياسية A4 (PDF)",
      inquiryTitle: "إرسال استفسار أو طلب مشروع",
      subjectLabel: "موضوع الرسالة / نطاق المشروع",
      subjectPlaceholder: "مثال: مشروع تكامل روبوتي / تطوير منصة ويب متكاملة",
      messageLabel: "تفاصيل المشروع أو الرسالة",
      messagePlaceholder: "يرجى وصف متطلبات المشروع، الجدول الزمني، أو الاستفسار الهندسي...",
      charCount: "حرف",
      sendBtn: "إرسال الرسالة",
      successMsg: "تم تشغيل تطبيق البريد الإلكتروني بنجاح! شكراً لتواصلك.",
      copyTooltip: "نسخ",
      copiedTooltip: "تم النسخ!"
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      printCV: "طباعة السيرة الذاتية القياسية"
    }
  }
};
