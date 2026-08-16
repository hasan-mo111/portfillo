export interface ProjectItem {
  id: string;
  title: string;
  titleAr?: string;
  category: 'Robotics & IoT' | 'Software';
  type: string;
  year: string;
  description: string;
  features: string[];
  techStack: string[];
  highlightMetric?: string;
  badgeColor?: 'sky' | 'emerald' | 'amber' | 'purple';
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleAr?: string;
  company: string;
  companyAr?: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeAr?: string;
  institution: string;
  institutionAr?: string;
  period: string;
  grade: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: { name: string; level: number; tag?: string }[];
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
  avatarUrl: "/hasan_profile.jpg",
  instagram: "hasan_ali_m0hamad",
  instagramUrl: "https://instagram.com/hasan_ali_m0hamad",
  shortProfile: "Passionate robotics & intelligent systems engineer and full-stack software developer with 3+ years of experience. Distinguished graduate of the National Centre for the Distinguished (NCD) and top-ranking 2nd-year undergraduate in Robotics Engineering (90% GPA). Highly proficient in combining SolidWorks CAD modeling, mathematical kinematics, embedded C++/IoT hardware, and scalable cloud applications.",
  stats: [
    { label: "Academic Standing", value: "90% GPA", detail: "Robotics & Intelligent Systems" },
    { label: "Experience", value: "3+ Years", detail: "Robotics, IoT & Full-Stack" },
    { label: "Engineered Systems", value: "7+ Projects", detail: "Hardware & Production Web" },
    { label: "Honors & Certifications", value: "3 Awards", detail: "NCD, SCS & Omega Institute" }
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "edu-robotics",
    degree: "Robotics and Intelligent Systems Engineering",
    degreeAr: "هندسة الروبوت والأنظمة الذكية",
    institution: "Faculty of Mechanical & Electrical Engineering",
    institutionAr: "جامعة تشرين / كلية الهندسة الميكانيكية والكهربائية",
    period: "Currently in 2nd Year (2024 - Present)",
    grade: "Outstanding GPA: 90%",
    description: "Deep specialization in kinematic modeling, intelligent control systems, embedded microcontrollers, sensor integration, autonomous motion planning, and artificial intelligence.",
    badge: "90% GPA Outstanding"
  },
  {
    id: "edu-ncd",
    degree: "High School Scientific Diploma",
    degreeAr: "الشهادة الثانوية العامة - الفرع العلمي",
    institution: "National Centre for the Distinguished (NCD)",
    institutionAr: "المركز الوطني للمتميزين",
    period: "Graduated",
    grade: "Very Good Grade",
    description: "Rigorous elite academy program centered on advanced mathematics, algorithmic logic, analytical physics, and competitive scientific research methodologies.",
    badge: "Elite Academic Center"
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "exp-tamoura",
    role: "Full-Stack Developer",
    roleAr: "مطور برمجيات الويب الشامل",
    company: "Tamoura Platform",
    companyAr: "منصة طامورة الاستثمارية التشاركية",
    period: "2024 - Present",
    location: "Syria / Remote",
    type: "Production Platform",
    featured: true,
    highlights: [
      "Architected and fully developed the entire Next.js (React 19) frontend and high-throughput NestJS (TypeScript) micro-service backend.",
      "Designed PostgreSQL database schemas with optimized relationships, integrated ultra-fast Redis caching layers, and orchestrated Docker containers for CI/CD.",
      "Built an interactive, tamper-proof digital contract signature canvas, dual-layer OTP phone/email verification, and granular Role-Based Access Control (Admin/Investor/User).",
      "Integrated automated cryptocurrency checkout & deposit gateways (USDT via OxaPay Webhooks) with cryptographic hash verification and automated payout ledger."
    ],
    technologies: ["Next.js (React 19)", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "OxaPay USDT", "Canvas API", "Tailwind CSS"]
  },
  {
    id: "exp-instructor",
    role: "Programming & Logic Instructor",
    roleAr: "مدرب برمجة وتفكير منطقي",
    company: "Syrian Computer Society (SCS) & Omega Institute",
    companyAr: "الجمعية السورية للمعلوماتية ومعهد أوميغا",
    period: "2023 - 2024",
    location: "Syria",
    type: "Education & Mentorship",
    featured: false,
    highlights: [
      "Designed and successfully delivered 3 comprehensive Scratch programming, computational thinking, and algorithmic logic courses for young innovators.",
      "Taught core programming constructs (control flows, event loops, recursive variables, and modular function thinking).",
      "Awarded 2 prestigious official recognition certifications from the Syrian Computer Society (الجمعية السورية للمعلوماتية) and Omega Institute (معهد أوميغا) for pedagogical excellence."
    ],
    technologies: ["Scratch", "Algorithms", "Logic Thinking", "Python Basics", "Curriculum Design", "STEM Mentorship"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Software",
    iconName: "Terminal",
    color: "sky",
    skills: [
      { name: "Python", level: 92, tag: "AI & Scripting" },
      { name: "C++", level: 90, tag: "Embedded & Control" },
      { name: "JavaScript / TypeScript", level: 95, tag: "Full-Stack Core" },
      { name: "Next.js (React 19)", level: 94, tag: "Modern Frontend" },
      { name: "NestJS", level: 90, tag: "Enterprise Backend" },
      { name: "PHP", level: 82, tag: "Server Architecture" },
      { name: "HTML5 / Tailwind CSS", level: 96, tag: "Modern UI/UX" }
    ]
  },
  {
    title: "Systems & Hardware (IoT & Robotics)",
    iconName: "Cpu",
    color: "emerald",
    skills: [
      { name: "Arduino IDE", level: 95, tag: "Microcontrollers" },
      { name: "ESP32 / ESP8266", level: 93, tag: "WiFi & BLE Mesh" },
      { name: "Raspberry Pi", level: 88, tag: "Linux Edge Server" },
      { name: "Node-RED", level: 90, tag: "IoT Data Flow & MQTT" },
      { name: "Sensors & Actuators", level: 92, tag: "Hardware Interfacing" }
    ]
  },
  {
    title: "CAD & Engineering Modeling",
    iconName: "Wrench",
    color: "amber",
    skills: [
      { name: "SolidWorks", level: 90, tag: "3D Mechanical Design" },
      { name: "Kinematic Workspace Analysis", level: 88, tag: "Robotic Modeling" },
      { name: "Structural Prototyping", level: 86, tag: "Rapid Assembly" },
      { name: "Schematic Architecture", level: 87, tag: "Circuit Design" }
    ]
  },
  {
    title: "Leadership & Professional Soft Skills",
    iconName: "Award",
    color: "purple",
    skills: [
      { name: "Algorithmic Problem Solving", level: 95, tag: "Core Mindset" },
      { name: "Technical Leadership", level: 90, tag: "Team & Project" },
      { name: "Interactive Presentation", level: 92, tag: "Tech Communication" },
      { name: "Agile Project Execution", level: 88, tag: "End-to-End Delivery" }
    ]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-tamoura",
    title: "Tamoura Platform",
    titleAr: "منصة طامورة الاستثمارية التشاركية",
    category: "Software",
    type: "Full-Stack Fintech Web App",
    year: "2024 - 2025",
    description: "Enterprise-grade collaborative investment platform featuring real-time contract signing, role-based workflows, automated USDT crypto webhooks, and high-performance server-side rendering.",
    features: [
      "Next.js 19 App Router + NestJS modular backend",
      "Interactive digital contract canvas with legal signature serialization",
      "Automated USDT (TRC20/BEP20) OxaPay webhook settlement ledger",
      "Dockerized micro-architecture with Redis query caching and PostgreSQL transactions"
    ],
    techStack: ["Next.js (React 19)", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "OxaPay", "Tailwind CSS"],
    highlightMetric: "Production Grade",
    badgeColor: "sky"
  },
  {
    id: "proj-spherical-arm",
    title: "Spherical Robotic Arm",
    titleAr: "الذراع الروبوتية ذات الإحداثيات الكروية",
    category: "Robotics & IoT",
    type: "Hardware & Kinematics",
    year: "2024",
    description: "3 Degrees of Freedom (3-DOF) precision robotic manipulator built with custom calculated spherical workspace, wireless remote controller base, and servo inverse kinematic equations.",
    features: [
      "Custom SolidWorks 3D CAD mechanical assembly and joint linkages",
      "Arduino-powered servo PWM motion control with anti-jitter smoothing",
      "Calculated spherical coordinates reach envelope for precision object manipulation",
      "Integrated tactile wireless remote controller interface"
    ],
    techStack: ["Arduino IDE", "SolidWorks 3D", "C++", "Kinematics", "Servo Actuators", "PWM Control"],
    highlightMetric: "3-DOF Spherical Envelope",
    badgeColor: "emerald"
  },
  {
    id: "proj-smart-house",
    title: "Smart Future House",
    titleAr: "نظام المنزل الذكي المتكامل",
    category: "Robotics & IoT",
    type: "Distributed IoT Automation",
    year: "2025",
    description: "Unified building automation ecosystem powered by a central Raspberry Pi Node-RED automation broker and distributed ESP32/ESP8266 sensor nodes.",
    features: [
      "Real-time MQTT telemetry and visual Node-RED flow engine",
      "Environmental monitoring (temperature, gas detection, intrusion, ambient illumination)",
      "Automated relay actuations and responsive web dashboard control",
      "Fail-safe local mesh offline operation mode"
    ],
    techStack: ["Raspberry Pi", "ESP32", "ESP8266", "Node-RED", "MQTT", "C++", "WebSockets"],
    highlightMetric: "Unified IoT Mesh",
    badgeColor: "emerald"
  },
  {
    id: "proj-autonomous-car",
    title: "Autonomous Robotic Car",
    titleAr: "السيارة الروبوتية ذاتية القيادة",
    category: "Robotics & IoT",
    type: "Autonomous Mobile Robotics",
    year: "2024",
    description: "Multi-tasking autonomous mobile robot combining high-speed infrared line tracking with ultrasonic dynamic obstacle collision avoidance routines.",
    features: [
      "Real-time PID closed-loop line following logic on high-contrast tracks",
      "Ultrasonic scanning servo head for active real-time path replanning",
      "H-Bridge dual motor driver torque distribution and speed regulation",
      "Dual state machine switching between trajectory tracking and obstacle bypassing"
    ],
    techStack: ["Arduino", "C++", "IR Array", "Ultrasonic Sensors", "Motor Drivers", "PID Algorithm"],
    highlightMetric: "Dual-Mode Autonomous Navigation",
    badgeColor: "emerald"
  },
  {
    id: "proj-ecommerce-store",
    title: "Interactive E-Commerce Store",
    titleAr: "متجر إلكتروني تفاعلي متقدم",
    category: "Software",
    type: "Frontend Web Application",
    year: "2025",
    description: "High-performance, modern client-side digital store demo featuring instant category filtering, dynamic cart state management, and silky smooth micro-interactions.",
    features: [
      "Instant state updates, cart calculation, and local persistence",
      "Responsive cybernetic UI with intuitive filtering and search index",
      "Clean modular vanilla/modern JavaScript and optimized CSS styling",
      "Accessible modal checkout workflow and receipt preview"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3 / Modern UI", "Local State", "UX Design"],
    highlightMetric: "Blazing Fast Client-Side",
    badgeColor: "sky"
  },
  {
    id: "proj-research-ml-sentiment",
    title: "Research Paper: ML & Sentiment Analysis",
    titleAr: "ورقة بحثية: تعلم الآلة وتحليل المشاعر النصية",
    category: "Software",
    type: "Applied AI Research",
    year: "2024",
    description: "Experimental research evaluating modern natural language classification algorithms to extract contextual nuances, emotion polarity, and subjective tone in varied text datasets.",
    features: [
      "Data preprocessing pipeline with tokenization, TF-IDF, and stop-word filtering",
      "Comparative accuracy benchmarking across multiple supervised classifiers",
      "Confusion matrix visualizer and validation metrics evaluation",
      "Comprehensive research paper methodology and literature review"
    ],
    techStack: ["Python", "Machine Learning", "Scikit-Learn", "NLP", "Pandas / NumPy", "Matplotlib"],
    highlightMetric: "AI Sentiment Pipeline",
    badgeColor: "amber"
  },
  {
    id: "proj-research-quantum",
    title: "Research Paper: Quantum Computing & Predictive Modeling",
    titleAr: "ورقة بحثية: الحوسبة الكمومية والنمذجة التنبؤية",
    category: "Software",
    type: "Theoretical & Computational Analysis",
    year: "2025",
    description: "Theoretical and mathematical exploration of quantum state superpositions, quantum gates, and predictive quantum simulation models applied to complex computational dilemmas.",
    features: [
      "Mathematical analysis of qubits, superposition states, and entanglement vectors",
      "State-vector transformations and quantum circuit simulation logic",
      "Comparative complexity analysis against classical algorithmic paradigms",
      "Future trajectory analysis for quantum-assisted intelligent systems"
    ],
    techStack: ["Quantum Theory", "Python Simulation", "Linear Algebra", "Mathematical Modeling", "Research"],
    highlightMetric: "Quantum State Simulation",
    badgeColor: "amber"
  }
];
