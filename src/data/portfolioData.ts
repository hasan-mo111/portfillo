export interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  category: 'Robotics & IoT' | 'Software';
  type: string;
  typeAr: string;
  year: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  techStack: string[];
  highlightMetric?: string;
  highlightMetricAr?: string;
  badgeColor?: 'sky' | 'emerald' | 'amber' | 'purple';
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleAr: string;
  company: string;
  companyAr: string;
  period: string;
  periodAr: string;
  location: string;
  locationAr: string;
  type: string;
  typeAr: string;
  highlights: string[];
  highlightsAr: string[];
  technologies: string[];
  featured?: boolean;
  websiteUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeAr: string;
  institution: string;
  institutionAr: string;
  period: string;
  periodAr: string;
  grade: string;
  gradeAr: string;
  description: string;
  descriptionAr: string;
  badge?: string;
  badgeAr?: string;
}

export interface SkillCategory {
  title: string;
  titleAr: string;
  iconName: string;
  color: string;
  skills: { name: string; level: number; tag?: string; tagAr?: string }[];
}

export const PERSONAL_INFO = {
  name: "Hasan Mohamad",
  nameArabic: "حسن محمد",
  role: "Robot Engineer & Full-Stack Developer",
  roleArabic: "مهندس روبوت ومطور برمجيات شامل",
  email: "hassan0980490620@gmail.com",
  phone: "+963-980-490-620",
  location: "Syria",
  locationArabic: "سوريا",
  avatarUrl: null,
  tamooraUrl: "https://tamoora-sy.com",
  instagram: "hasan_ali_m0hamad",
  instagramUrl: "https://instagram.com/hasan_ali_m0hamad",
  shortProfile: "Passionate robotics & intelligent systems engineer and full-stack software developer with 3+ years of experience. Distinguished graduate of the National Centre for the Distinguished (NCD) and top-ranking 2nd-year undergraduate in Robotics Engineering (90% GPA). Highly proficient in combining SolidWorks CAD modeling, mathematical kinematics, embedded C++/IoT hardware, and scalable cloud applications.",
  shortProfileAr: "مهندس روبوت وأنظمة ذكية ومطور برمجيات شامل بخبرة تفوق 3 سنوات. خريج متميز من المركز الوطني للمتميزين (NCD) وطالب في السنة الثانية بهندسة الروبوت والأنظمة الذكية بمعدل 90%. محترف في دمج التصميم الميكانيكي SolidWorks، الحسابات الحركية، أنظمة C++/IoT المضمنة، وتطوير منصات الويب السحابية الحديثة.",
  stats: [
    { label: "Academic Standing", labelAr: "المعدل الأكاديمي", value: "90% GPA", detail: "Robotics & Intelligent Systems", detailAr: "هندسة الروبوت والأنظمة الذكية" },
    { label: "Experience", labelAr: "سنوات الخبرة", value: "3+ Years", detail: "Robotics, IoT & Full-Stack", detailAr: "روبوت، إنترنت أشياء، وبرمجيات" },
    { label: "Engineered Systems", labelAr: "الأنظمة المنجزة", value: "7+ Projects", detail: "Hardware & Production Web", detailAr: "أنظمة عتادية ومنصات سحابية" },
    { label: "Honors & Certifications", labelAr: "الجوائز والشهادات", value: "3 Awards", detail: "NCD, SCS & Omega Institute", detailAr: "مركز المتميزين والمعلوماتية وأوميغا" }
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "edu-robotics",
    degree: "Robotics and Intelligent Systems Engineering",
    degreeAr: "هندسة الروبوت والأنظمة الذكية",
    institution: "Faculty of Mechanical & Electrical Engineering",
    institutionAr: "كلية الهندسة الميكانيكية والكهربائية - جامعة تشرين",
    period: "Currently in 2nd Year (2024 - Present)",
    periodAr: "طالب سنة ثانية حالياً (2024 - حتى الآن)",
    grade: "Outstanding GPA: 90%",
    gradeAr: "معدل متميز: 90%",
    description: "Deep specialization in kinematic modeling, intelligent control systems, embedded microcontrollers, sensor integration, autonomous motion planning, and artificial intelligence.",
    descriptionAr: "تخصص عميق في النمذجة الحركية، أنظمة التحكم الذكي، المتحكمات المضمنة، تكامل الحساسات والمشغلات، تخطيط الحركة الذاتية، وخوارزميات الذكاء الاصطناعي.",
    badge: "90% GPA Outstanding",
    badgeAr: "معدل تفوق 90%"
  },
  {
    id: "edu-ncd",
    degree: "High School Scientific Diploma",
    degreeAr: "الشهادة الثانوية العامة - الفرع العلمي",
    institution: "National Centre for the Distinguished (NCD)",
    institutionAr: "المركز الوطني للمتميزين (NCD)",
    period: "Graduated",
    periodAr: "تخرج رسمي",
    grade: "Very Good Grade",
    gradeAr: "تقدير جيد جداً",
    description: "Rigorous elite academy program centered on advanced mathematics, algorithmic logic, analytical physics, and competitive scientific research methodologies.",
    descriptionAr: "برنامج أكاديمي نخبي مكثف يركز على الرياضيات المتقدمة، التفكير الخوارزمي، الفيزياء التحليلية، ومناهج البحث العلمي التنافسي.",
    badge: "Elite Academic Center",
    badgeAr: "صرح علمي نخبي"
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "exp-tamoura",
    role: "Full-Stack Developer",
    roleAr: "مطور برمجيات شامل (Full-Stack Developer)",
    company: "Tamoura Platform",
    companyAr: "منصة طامورة الاستثمارية (tamoora-sy.com)",
    period: "2024 - Present",
    periodAr: "2024 - حتى الآن",
    location: "Syria / Remote",
    locationAr: "سوريا / عن بعد",
    type: "Production Platform",
    typeAr: "منصة إنتاجية حية",
    featured: true,
    websiteUrl: "https://tamoora-sy.com",
    highlights: [
      "Architected and fully developed the entire Next.js (React 19) frontend and high-throughput NestJS (TypeScript) micro-service backend.",
      "Designed PostgreSQL database schemas with optimized relationships, integrated ultra-fast Redis caching layers, and orchestrated Docker containers for CI/CD.",
      "Built an interactive, tamper-proof digital contract signature canvas, dual-layer OTP phone/email verification, and granular Role-Based Access Control (Admin/Investor/User).",
      "Integrated automated cryptocurrency checkout & deposit gateways (USDT via OxaPay Webhooks) with cryptographic hash verification and automated payout ledger."
    ],
    highlightsAr: [
      "بناء وتطوير الواجهة الأمامية بالكامل باستخدام Next.js (React 19) مع بناء الخادم الخلفي فائق السرعة عبر NestJS (TypeScript).",
      "تصميم قواعد بيانات PostgreSQL متقدمة وعالية الأداء، دمج طبقات التخزين المؤقت عبر Redis، وبناء بيئة تشغيل معزولة عبر Docker.",
      "تطوير مساحة توقيع العقود الرقمية التفاعلية غير القابلة للتلاعب، والتحقق الثنائي OTP عبر الهاتف والبريد، مع نظام صلاحيات متعدد المستويات.",
      "تكامل بوابات الإيداع والمدفوعات المشفرة التلقائية (عملة USDT عبر OxaPay Webhooks) مع التحقق الأمني بالهاش وسجلات التسوية المالية الآلية."
    ],
    technologies: ["Next.js (React 19)", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "OxaPay USDT", "Canvas API", "Tailwind CSS"]
  },
  {
    id: "exp-instructor",
    role: "Programming Instructor",
    roleAr: "مدرب برمجة",
    company: "Syrian Computer Society (SCS) & Omega Institute",
    companyAr: "الجمعية السورية للمعلوماتية ومعهد أوميغا",
    period: "2023 - 2024",
    periodAr: "2023 - 2024",
    location: "Syria",
    locationAr: "سوريا",
    type: "Education & Mentorship",
    typeAr: "تعليم أكاديمي وتدريب",
    featured: false,
    highlights: [
      "Designed and delivered Scratch for kids courses, focusing on computational thinking and algorithmic logic for young innovators.",
      "Taught core programming constructs (control flows, event loops, and modular function thinking).",
      "Awarded official recognition certifications from the Syrian Computer Society (الجمعية السورية للمعلوماتية) and Omega Institute (معهد أوميغا) for pedagogical excellence."
    ],
    highlightsAr: [
      "إعداد وتقديم دورات 'سكراتش للصغار' (Scratch for kids)، مع التركيز على التفكير الحسابي والمنطق البرمجي للجيل الواعد.",
      "تدريس المفاهيم البرمجية الأساسية (حلقات التحكم، إدارة الأحداث، وبناء الدوال المعيارية).",
      "نيل شهادات شكر وتقدير رسمية من الجمعية السورية للمعلوماتية ومعهد أوميغا للتميز التعليمي والتدريبي."
    ],
    technologies: ["Scratch", "Algorithms", "Logic Thinking", "Curriculum Design", "STEM Mentorship"]
  },
  {
    id: "exp-arc-coach",
    role: "Robotics Competition Coach",
    roleAr: "مدرب فرق مسابقات الروبوت",
    company: "ARC (Autonomous Robot Competition)",
    companyAr: "مسابقة الروبوت المستقل (ARC)",
    period: "2024",
    periodAr: "2024",
    location: "Syria",
    locationAr: "سوريا",
    type: "Mentorship",
    typeAr: "توجيه وتدريب",
    featured: false,
    highlights: [
      "Coached two teams for the ARC (Autonomous Robot Competition), guiding them through robot design, programming logic, and strategic problem-solving.",
      "Mentored students on sensor integration, autonomous navigation algorithms, and hardware troubleshooting under competitive constraints."
    ],
    highlightsAr: [
      "تدريب فريقين للمشاركة في مسابقة الروبوت المستقل (ARC)، وتوجيههم خلال مراحل تصميم الروبوت، البرمجة المنطقية، والاستراتيجيات التنافسية.",
      "تقديم الإرشاد للطلاب في مجالات دمج الحساسات، خوارزميات الملاحة الذاتية، وحل مشاكل العتاد تحت ضغط المسابقة."
    ],
    technologies: ["Robotics", "Mentorship", "Autonomous Navigation", "Hardware Troubleshooting", "Strategic Problem-Solving"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Software",
    titleAr: "البرمجة وهندسة البرمجيات",
    iconName: "Terminal",
    color: "sky",
    skills: [
      { name: "Python", level: 92, tag: "AI & Scripting", tagAr: "ذكاء اصطناعي وبرمجة" },
      { name: "C++", level: 90, tag: "Embedded & Control", tagAr: "أنظمة مضمنة وتحكم" },
      { name: "JavaScript / TypeScript", level: 95, tag: "Full-Stack Core", tagAr: "تطوير شامل متقدم" },
      { name: "Next.js (React 19)", level: 94, tag: "Modern Frontend", tagAr: "واجهات حديثة" },
      { name: "NestJS", level: 90, tag: "Enterprise Backend", tagAr: "خوادم مؤسساتية" },
      { name: "PHP", level: 82, tag: "Server Architecture", tagAr: "بنية خوادم" },
      { name: "HTML5 / Tailwind CSS", level: 96, tag: "Modern UI/UX", tagAr: "تصميم واجهات احترافية" }
    ]
  },
  {
    title: "Systems & Hardware (IoT & Robotics)",
    titleAr: "الأنظمة والعتاد (إنترنت الأشياء والروبوت)",
    iconName: "Cpu",
    color: "emerald",
    skills: [
      { name: "Arduino IDE", level: 95, tag: "Microcontrollers", tagAr: "برمجة المتحكمات" },
      { name: "ESP32 / ESP8266", level: 93, tag: "WiFi & BLE Mesh", tagAr: "شبكات لاسلكية" },
      { name: "Raspberry Pi", level: 88, tag: "Linux Edge Server", tagAr: "خادم لينكس طرفي" },
      { name: "Node-RED", level: 90, tag: "IoT Data Flow & MQTT", tagAr: "تدفق بيانات وبروتوكول MQTT" },
      { name: "Sensors & Actuators", level: 92, tag: "Hardware Interfacing", tagAr: "ربط الحساسات والمشغلات" }
    ]
  },
  {
    title: "CAD & Engineering Modeling",
    titleAr: "التصميم والنمذجة الميكانيكية ثلاثية الأبعاد",
    iconName: "Wrench",
    color: "amber",
    skills: [
      { name: "SolidWorks", level: 90, tag: "3D Mechanical Design", tagAr: "تصميم ميكانيكي 3D" },
      { name: "Kinematic Workspace Analysis", level: 88, tag: "Robotic Modeling", tagAr: "تحليل حركي للروبوت" },
      { name: "Structural Prototyping", level: 86, tag: "Rapid Assembly", tagAr: "بناء النماذج الأولية" },
      { name: "Schematic Architecture", level: 87, tag: "Circuit Design", tagAr: "تصميم الدارات الإلكترونية" }
    ]
  },
  {
    title: "Leadership & Professional Soft Skills",
    titleAr: "المهارات القيادية والشخصية",
    iconName: "Award",
    color: "purple",
    skills: [
      { name: "Algorithmic Problem Solving", level: 95, tag: "Core Mindset", tagAr: "حل المشكلات المعقدة" },
      { name: "Technical Leadership", level: 90, tag: "Team & Project", tagAr: "إدارة الفرق والمشاريع" },
      { name: "Interactive Presentation", level: 92, tag: "Tech Communication", tagAr: "التواصل الأكاديمي والتقني" },
      { name: "Agile Project Execution", level: 88, tag: "End-to-End Delivery", tagAr: "تسليم المشاريع المتكاملة" }
    ]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-tamoura",
    title: "Tamoura Platform",
    titleAr: "منصة طامورة الاستثمارية (tamoora-sy.com)",
    category: "Software",
    type: "Full-Stack Fintech Web App",
    typeAr: "منصة ويب مالية وإنتاجية متكاملة",
    year: "2024 - 2025",
    description: "Enterprise-grade collaborative investment platform featuring real-time contract signing, role-based workflows, automated USDT crypto webhooks, and high-performance server-side rendering.",
    descriptionAr: "منصة استثمارية وتشاركية رائدة تتميز بتوقيع العقود الرقمية المباشرة، إدارة الصلاحيات متعددة الأدوار، بوابات العملات الرقمية المؤتمتة (USDT)، وأداء فائق مع معالجة خادم سريعة.",
    features: [
      "Next.js 19 App Router + NestJS modular backend",
      "Interactive digital contract canvas with legal signature serialization",
      "Automated USDT (TRC20/BEP20) OxaPay webhook settlement ledger",
      "Dockerized micro-architecture with Redis query caching and PostgreSQL transactions"
    ],
    featuresAr: [
      "واجهة Next.js 19 مع معمارية خادم خلفي معيارية عبر NestJS",
      "مساحة توقيع عقود تفاعلية مع تشفير وتوثيق التوقيعات الرقمية",
      "تسوية ومعالجة مؤتمتة لمدفوعات USDT عبر بوابات OxaPay",
      "بيئة حاويات Docker مع تخزين مؤقت Redis وقواعد بيانات PostgreSQL"
    ],
    techStack: ["Next.js (React 19)", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "OxaPay", "Tailwind CSS"],
    highlightMetric: "Production Grade (Live)",
    highlightMetricAr: "منصة إنتاجية حية",
    badgeColor: "sky",
    demoUrl: "https://tamoora-sy.com"
  },
  {
    id: "proj-spherical-arm",
    title: "Spherical Robotic Arm",
    titleAr: "الذراع الروبوتية ذات الإحداثيات الكروية (3-DOF)",
    category: "Robotics & IoT",
    type: "Hardware & Kinematics",
    typeAr: "عتاد صلب وتحليل حركي كينماتيكي",
    year: "2024",
    description: "3 Degrees of Freedom (3-DOF) precision robotic manipulator built with custom calculated spherical workspace, wireless remote controller base, and servo inverse kinematic equations.",
    descriptionAr: "ذراع روبوتية ثلاثية درجات الحرية (3-DOF) مبنية بحيز عمل كروي مدروس رياضياً، مع قاعدة تحكم لاسلكية ومعادلات حركية عكسية دقيقة للمحركات.",
    features: [
      "Custom SolidWorks 3D CAD mechanical assembly and joint linkages",
      "Arduino-powered servo PWM motion control with anti-jitter smoothing",
      "Calculated spherical coordinates reach envelope for precision object manipulation",
      "Integrated tactile wireless remote controller interface"
    ],
    featuresAr: [
      "تصميم ميكانيكي ثلاثي الأبعاد مخصص عبر SolidWorks للوصلات والمفاصل",
      "تحكم دقيق بإشارات PWM للمحركات عبر Arduino مع تنعيم الحركة ومنع الاهتزاز",
      "حسابات رياضية دقيقة للإحداثيات الكروية للوصول والتقاط الأجسام بكفاءة",
      "وحدة تحكم لاسلكية تفاعلية مدمجة للتحكم المباشر"
    ],
    techStack: ["Arduino IDE", "SolidWorks 3D", "C++", "Kinematics", "Servo Actuators", "PWM Control"],
    highlightMetric: "3-DOF Spherical Envelope",
    highlightMetricAr: "حيز كروي 3-DOF",
    badgeColor: "emerald"
  },
  {
    id: "proj-smart-house",
    title: "Smart Future House",
    titleAr: "نظام المنزل الذكي المتكامل والموزع",
    category: "Robotics & IoT",
    type: "Distributed IoT Automation",
    typeAr: "أتمتة موزعة وإنترنت الأشياء",
    year: "2025",
    description: "Unified building automation ecosystem powered by a central Raspberry Pi Node-RED automation broker and distributed ESP32/ESP8266 sensor nodes.",
    descriptionAr: "نظام أتمتة مبانٍ متكامل يعتمد على خادم وسيط مركزي Raspberry Pi مع Node-RED وعقد استشعار وتحكم موزعة عبر شرائح ESP32/ESP8266.",
    features: [
      "Real-time MQTT telemetry and visual Node-RED flow engine",
      "Environmental monitoring (temperature, gas detection, intrusion, ambient illumination)",
      "Automated relay actuations and responsive web dashboard control",
      "Fail-safe local mesh offline operation mode"
    ],
    featuresAr: [
      "نقل بيانات القياس الفوري عبر بروتوكول MQTT وتدفقات Node-RED",
      "مراقبة بيئية شاملة (الحرارة، كشف تسرب الغاز، كشف الاقتحام، والإنارة)",
      "تحكم تلقائي بالمشغلات وريليهات الطاقة مع لوحة تحكم ويب متجاوبة",
      "آلية عمل محلية آمنة دون انقطاع حتى في حال غياب الإنترنت الخارجي"
    ],
    techStack: ["Raspberry Pi", "ESP32", "ESP8266", "Node-RED", "MQTT", "C++", "WebSockets"],
    highlightMetric: "Unified IoT Mesh",
    highlightMetricAr: "شبكة IoT موحدة",
    badgeColor: "emerald"
  },
  {
    id: "proj-autonomous-car",
    title: "Autonomous Robotic Car",
    titleAr: "السيارة الروبوتية ذاتية القيادة والملاحة",
    category: "Robotics & IoT",
    type: "Autonomous Mobile Robotics",
    typeAr: "روبوتات متنقلة ذاتية القيادة",
    year: "2024",
    description: "Multi-tasking autonomous mobile robot combining high-speed infrared line tracking with ultrasonic dynamic obstacle collision avoidance routines.",
    descriptionAr: "روبوت متنقل ذاتي القيادة يجمع بين تتبع المسارات عالي السرعة عبر مصفوفات الأشعة تحت الحمراء وتفادي العوائق الديناميكي بالأمواج فوق الصوتية.",
    features: [
      "Real-time PID closed-loop line following logic on high-contrast tracks",
      "Ultrasonic scanning servo head for active real-time path replanning",
      "H-Bridge dual motor driver torque distribution and speed regulation",
      "Dual state machine switching between trajectory tracking and obstacle bypassing"
    ],
    featuresAr: [
      "خوارزمية PID مغلقة الحلقة لتتبع الخطوط والمسارات بدقة وسرعة عالية",
      "رأس مسح بالموجات فوق الصوتية على محرك سيرفو لإعادة تخطيط المسار لحظياً",
      "توزيع العزم والتحكم بالسرعة عبر دارات قيادة المحركات H-Bridge",
      "آلة حالات مزدوجة للتبديل السلس بين تتبع المسار وتفادي الاصطدام"
    ],
    techStack: ["Arduino", "C++", "IR Array", "Ultrasonic Sensors", "Motor Drivers", "PID Algorithm"],
    highlightMetric: "Dual-Mode Autonomous Navigation",
    highlightMetricAr: "ملاحة ذاتية مزدوجة",
    badgeColor: "emerald"
  },
  {
    id: "proj-ecommerce-store",
    title: "Interactive E-Commerce Store",
    titleAr: "متجر إلكتروني تفاعلي متقدم وسريع",
    category: "Software",
    type: "Frontend Web Application",
    typeAr: "تطبيق ويب تفاعلي حديث",
    year: "2025",
    description: "High-performance, modern client-side digital store demo featuring instant category filtering, dynamic cart state management, and silky smooth micro-interactions.",
    descriptionAr: "متجر رقمي عالي الأداء مع تصفية فورية للمنتجات، إدارة سلة المشتريات التفاعلية، وتجربة مستخدم سلسة واستجابة فورية.",
    features: [
      "Instant state updates, cart calculation, and local persistence",
      "Responsive cybernetic UI with intuitive filtering and search index",
      "Clean modular vanilla/modern JavaScript and optimized CSS styling",
      "Accessible modal checkout workflow and receipt preview"
    ],
    featuresAr: [
      "تحديث فوري للحالة، حساب السلة تلقائياً، والتخزين المحلي",
      "واجهة مستخدم متجاوبة مع فهرس بحث وتصنيف فوري",
      "كود معياري نظيف ومعالجة CSS محسنة للأداء",
      "نافذة إتمام الشراء ومعاينة الفاتورة بمرونة"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3 / Modern UI", "Local State", "UX Design"],
    highlightMetric: "Blazing Fast Client-Side",
    highlightMetricAr: "أداء فائق السرعة",
    badgeColor: "sky"
  },
  {
    id: "proj-research-ml-sentiment",
    title: "Research Paper: ML & Sentiment Analysis",
    titleAr: "ورقة بحثية: تعلم الآلة وتحليل المشاعر النصية",
    category: "Software",
    type: "Applied AI Research",
    typeAr: "بحث تطبيقي في الذكاء الاصطناعي",
    year: "2024",
    description: "Experimental research evaluating modern natural language classification algorithms to extract contextual nuances, emotion polarity, and subjective tone in varied text datasets.",
    descriptionAr: "دراسة وتجربة بحثية تقيّم خوارزميات تصنيف معالجة اللغة الطبيعية الحديثة لاستخراج الدلالات السياقية والقطبية العاطفية في مجموعات بيانات نصية متنوعة.",
    features: [
      "Data preprocessing pipeline with tokenization, TF-IDF, and stop-word filtering",
      "Comparative accuracy benchmarking across multiple supervised classifiers",
      "Confusion matrix visualizer and validation metrics evaluation",
      "Comprehensive research paper methodology and literature review"
    ],
    featuresAr: [
      "خط معالجة بيانات متكامل يشمل التقطيع النصي، TF-IDF، وتصفية الكلمات الزائدة",
      "مقارنة معيارية للدقة عبر عدة مصنفات تعلم خاضع للإشراف",
      "تصور بصري لمصفوفة الارتباك ومقاييس التحقق من الصحة",
      "منهجية بحثية أكاديمية متكاملة ومراجعة شاملة للأدبيات السابقة"
    ],
    techStack: ["Python", "Machine Learning", "Scikit-Learn", "NLP", "Pandas / NumPy", "Matplotlib"],
    highlightMetric: "AI Sentiment Pipeline",
    highlightMetricAr: "نموذج تصنيف المشاعر بالـ AI",
    badgeColor: "amber"
  },
  {
    id: "proj-research-quantum",
    title: "Research Paper: Quantum Computing & Predictive Modeling",
    titleAr: "ورقة بحثية: الحوسبة الكمومية والنمذجة التنبؤية",
    category: "Software",
    type: "Theoretical & Computational Analysis",
    typeAr: "تحليل نظري ونمذجة حسابية",
    year: "2025",
    description: "Theoretical and mathematical exploration of quantum state superpositions, quantum gates, and predictive quantum simulation models applied to complex computational dilemmas.",
    descriptionAr: "استكشاف نظري ورياضي لحالات التراكب الكمومي، البوابات الكمومية، ونماذج المحاكاة الكمومية التنبؤية المطبقة على المسائل الحسابية المعقدة.",
    features: [
      "Mathematical analysis of qubits, superposition states, and entanglement vectors",
      "State-vector transformations and quantum circuit simulation logic",
      "Comparative complexity analysis against classical algorithmic paradigms",
      "Future trajectory analysis for quantum-assisted intelligent systems"
    ],
    featuresAr: [
      "تحليل رياضي للكيوبتات، حالات التراكب، ومتجهات التشابك الكمومي",
      "تحويلات متجهات الحالة ومنطق محاكاة الدارات الكمومية",
      "مقارنة التعقيد الحسابي مع الخوارزميات الكلاسيكية",
      "استشراف آفاق الأنظمة الذكية المعززة بالحوسبة الكمومية"
    ],
    techStack: ["Quantum Theory", "Python Simulation", "Linear Algebra", "Mathematical Modeling", "Research"],
    highlightMetric: "Quantum State Simulation",
    highlightMetricAr: "محاكاة الحالات الكمومية",
    badgeColor: "amber"
  }
];

