/**
 * Portfolio Data File
 * Edit your personal information, skills, projects, and education easily in this file.
 */

export const personalInfo = {
  name: "Jiya",
  fullName: "Jiya Dev",
  titles: ["Creative Web Developer", "Full Stack Developer"],
  roleBadge: "Available for Freelance & Full-Time Roles",
  tagline: "Crafting visually captivating, pixel-perfect, and high-performance digital experiences.",
  email: "jiya.developer@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  location: "Worldwide / Remote",
  bioHeadline: "Turning visionary concepts into scalable, elegant, and interactive web applications.",
};

export const aboutData = {
  intro:
    "I'm a passionate web developer who enjoys creating modern, responsive, and user-friendly websites. I love turning creative ideas into functional digital experiences and continuously learning new technologies.",
  extendedBio:
    "With a strong foundation spanning frontend design aesthetics and resilient backend architecture, I focus on delivering seamless end-to-end user journeys. I believe that thoughtful animations, clean code structure, and intuitive interfaces elevate ordinary websites into unforgettable digital products.",
  cards: [
    {
      id: "creative-thinking",
      title: "Creative Thinking",
      icon: "Sparkles",
      gradient: "from-purple-500/20 to-indigo-500/20",
      borderGlow: "group-hover:border-purple-500/50",
      description:
        "Blending artistic design sensibilities with modern web standards to craft distinct, memorable user interfaces.",
      highlights: ["Visual Storytelling", "Micro-Interactions", "Aesthetic UI/UX"],
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      icon: "Cpu",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
      borderGlow: "group-hover:border-violet-500/50",
      description:
        "Deconstructing complex technical challenges into modular, clean, and scalable code architectures.",
      highlights: ["Algorithmic Logic", "Performance Tuning", "Debugging & Testing"],
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      icon: "Layout",
      gradient: "from-fuchsia-500/20 to-pink-500/20",
      borderGlow: "group-hover:border-fuchsia-500/50",
      description:
        "Ensuring seamless functionality, touch responsiveness, and visual harmony across all mobile, tablet, and desktop screens.",
      highlights: ["Mobile-First Approach", "Fluid Typography", "Adaptive Layouts"],
    },
    {
      id: "continuous-learning",
      title: "Continuous Learning",
      icon: "Rocket",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderGlow: "group-hover:border-indigo-500/50",
      description:
        "Actively expanding skills in modern frameworks, emerging developer tools, and cutting-edge web technologies.",
      highlights: ["Framework Evolution", "Tech Deep-Dives", "Best Practices"],
    },
  ],
  stats: [
    { label: "Core Technologies", value: "15+" },
    { label: "Completed Projects", value: "5+" },
    { label: "Code Quality", value: "Clean & Tested" },
    { label: "Client Satisfaction", value: "100%" },
  ],
};

export const skillsData = {
  frontend: {
    title: "Frontend Development",
    description: "Building responsive, engaging, and dynamic client-side interfaces.",
    skills: [
      { name: "HTML5", level: "Semantic, SEO & Accessibility", icon: "Code2", tag: "Markup" },
      { name: "CSS3", level: "Flexbox, Grid & Keyframes", icon: "Palette", tag: "Styling" },
      { name: "JavaScript", level: "ES6+, Async/Await & APIs", icon: "FileCode", tag: "Language" },
      { name: "React.js", level: "Hooks, Context & Architecture", icon: "Atom", tag: "Library" },
      { name: "Next.js", level: "App Router, SSR & SSG", icon: "Globe", tag: "Framework" },
      { name: "Bootstrap 5", level: "Responsive Grids & Utilities", icon: "Layers", tag: "UI Framework" },
      { name: "Tailwind CSS", level: "Utility-first & Custom Theming", icon: "Wind", tag: "CSS Framework" },
    ],
  },
  backend: {
    title: "Backend Development",
    description: "Developing robust server-side logic, secure auth, and RESTful architectures.",
    skills: [
      { name: "Node.js", level: "Runtime, Event Loop & Streams", icon: "Server", tag: "Runtime" },
      { name: "Express.js", level: "Middleware, Routing & Controllers", icon: "Workflow", tag: "Framework" },
      { name: "REST APIs", level: "CRUD Endpoints & Error Handling", icon: "Network", tag: "Architecture" },
      { name: "JWT Authentication", level: "Token Verification & Auth Guards", icon: "KeyRound", tag: "Security" },
      { name: "bcrypt", level: "Password Salting & Cryptographic Hashing", icon: "ShieldCheck", tag: "Security" },
    ],
  },
  database: {
    title: "Database Management",
    description: "Designing schema models, indexing, and high-integrity data operations.",
    skills: [
      { name: "MongoDB", level: "NoSQL Collections & Aggregation", icon: "Database", tag: "NoSQL DB" },
      { name: "Mongoose", level: "Schema Validation, Models & Middleware", icon: "Boxes", tag: "ODM" },
    ],
  },
  tools: {
    title: "Tools & Ecosystem",
    description: "Modern developer workflow tools for testing, version control, and design handoff.",
    skills: [
      { name: "Git", level: "Branching, Merging & Version Tracking", icon: "GitBranch", tag: "VCS" },
      { name: "GitHub", level: "Repositories, Pull Requests & Actions", icon: "Github", tag: "Platform" },
      { name: "VS Code", level: "Productivity Extensions & Debugging", icon: "Terminal", tag: "IDE" },
      { name: "Postman", level: "API Testing & Automated Suites", icon: "Send", tag: "API Tool" },
      { name: "Figma", level: "Design Inspection, UI Wireframes & Assets", icon: "Figma", tag: "Design" },
    ],
  },
};

export const projectsData = [
  {
    id: "burger-builder",
    title: "Burger Builder",
    subtitle: "Interactive Culinary Customizer",
    description:
      "An interactive burger customization website built using HTML, CSS, and JavaScript. Users can visually stack toppings, control patty ingredients, and see dynamic pricing recalculations in real time.",
    detailedDescription:
      "A dynamic DOM-driven application featuring live layer rendering, calorie/price estimation calculators, and animated ingredient drops. Built with modular vanilla JavaScript and responsive flex/grid layouts.",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM Animation"],
    accentColor: "#F59E0B",
    githubUrl: "https://github.com/placeholder/burger-builder",
    liveDemoUrl: "https://burger-builder-demo.placeholder",
    isInteractive: true,
    interactiveType: "burger",
    highlights: [
      "Real-time visual layer stacking animation",
      "Dynamic price & nutrition calculating engine",
      "Fully responsive touch controls for mobile",
    ],
    mockupType: "burger",
  },
  {
    id: "digital-marketing-agency",
    title: "Digital Marketing Agency",
    subtitle: "Modern Corporate Brand Experience",
    description:
      "A responsive digital marketing website built with React.js featuring interactive service carousels, client testimonials, modern aesthetic branding, and conversion-focused CTAs.",
    detailedDescription:
      "Engineered for high conversion and brand impact. Features sleek micro-interactions, responsive case study showcases, interactive metric counters, and an accessible contact lead intake system.",
    category: "React.js",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    accentColor: "#A855F7",
    githubUrl: "https://github.com/placeholder/digital-marketing-agency",
    liveDemoUrl: "https://agency-demo.placeholder",
    isInteractive: false,
    highlights: [
      "Smooth Framer Motion entrance & hover transitions",
      "Interactive testimonials carousel with responsive swiping",
      "Optimized Lighthouse 95+ performance metrics",
    ],
    mockupType: "agency",
  },
  {
    id: "todo-application",
    title: "Todo Application",
    subtitle: "Intelligent Task Management Suite",
    description:
      "A task management application built using Next.js with priority filtering, category tags, search, and local storage state persistence.",
    detailedDescription:
      "Streamlines everyday task workflows with inline editing, due date reminders, task categories (Work, Personal, Urgent), filter tabs, and real-time completion analytics.",
    category: "Next.js",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Local State"],
    accentColor: "#06B6D4",
    githubUrl: "https://github.com/placeholder/todo-application",
    liveDemoUrl: "https://todo-app.placeholder",
    isInteractive: false,
    highlights: [
      "Instant multi-criteria filtering (All, Pending, Completed)",
      "Priority badges and status tracking",
      "Persistent data storage with seamless hydration",
    ],
    mockupType: "todo",
  },
  {
    id: "calculator-app",
    title: "Calculator App",
    subtitle: "Themeable Mathematical Engine",
    description:
      "A modern calculator with a dark/light theme toggle, mathematical operation stack, memory storage, and tactile key animations.",
    detailedDescription:
      "Features real-time expression parsing, calculation history review, keyboard shortcut listeners, and a dual aesthetic theme switcher (Cosmic Purple Dark & Crisp Modern Light).",
    category: "Utility",
    tags: ["React.js", "Tailwind CSS", "Theme Engine", "Math Parser"],
    accentColor: "#10B981",
    githubUrl: "https://github.com/placeholder/calculator-app",
    liveDemoUrl: "https://calculator-demo.placeholder",
    isInteractive: true,
    interactiveType: "calculator",
    highlights: [
      "Live interactive embedded calculator demo in portfolio",
      "Seamless dark/light aesthetic toggle",
      "Calculation history log with quick recall",
    ],
    mockupType: "calculator",
  },
  {
    id: "authentication-system",
    title: "Authentication System",
    subtitle: "Enterprise-Grade Auth & Security",
    description:
      "A signup and login system using React.js, Node.js, Express.js, MongoDB, bcrypt, and JWT with secure password hashing and protected routes.",
    detailedDescription:
      "Complete end-to-end security suite featuring cryptographic salt/hashing via bcrypt, JSON Web Token (JWT) issuance, HttpOnly cookie support, input sanitization, and protected dashboard routing.",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "bcrypt", "JWT"],
    accentColor: "#EC4899",
    githubUrl: "https://github.com/placeholder/authentication-system",
    liveDemoUrl: "https://auth-system-demo.placeholder",
    isInteractive: false,
    highlights: [
      "Secure password hashing with 10-round bcrypt salt",
      "Stateless JWT authorization with automated expiration handling",
      "Input validation, error boundaries, and protected view states",
    ],
    mockupType: "auth",
  },
];

export const educationData = {
  timeline: [
    {
      id: "formal-degree",
      type: "Education",
      title: "Bachelor of Science in Computer Science",
      institute: "Institute of Technology & Sciences",
      year: "2021 – 2025",
      badge: "Degree",
      description:
        "Comprehensive foundations in Computer Science, Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Software Engineering methodologies.",
      achievements: [
        "Major in Software Development & Web Technologies",
        "Graduated with distinction and academic honors",
        "Led competitive programming and developer club initiatives",
      ],
    },
    {
      id: "specialized-course",
      type: "Web Development Course",
      title: "Full Stack Web Development Specialization",
      institute: "Modern Web Academy",
      year: "2023 – 2024",
      badge: "Specialization",
      description:
        "Rigorous project-driven curriculum focused on the modern JavaScript ecosystem: modern React patterns, Node.js runtime, Express REST API architecture, MongoDB database modeling, and production deployment.",
      achievements: [
        "Built 10+ real-world full stack and client-side applications",
        "Mastered state management, component lifecycles, and asynchronous architectures",
        "Implemented secure JWT authentication and RESTful standard practices",
      ],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Certified Full Stack Developer (MERN)",
      issuer: "Global Tech Certification Council",
      year: "2024",
      verified: true,
      description: "Validation of advanced competence across MongoDB, Express, React, and Node.js.",
    },
    {
      id: "cert-2",
      title: "Meta Frontend Developer Specialization",
      issuer: "Meta / Coursera",
      year: "2023",
      verified: true,
      description: "In-depth expertise in React, modern JavaScript, UI/UX principles, and responsive web design.",
    },
    {
      id: "cert-3",
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      year: "2024",
      verified: true,
      description: "Expertise in document modeling, schema validation, aggregation pipelines, and indexing.",
    },
    {
      id: "cert-4",
      title: "Responsive Web Design & Modern CSS Architecture",
      issuer: "freeCodeCamp",
      year: "2023",
      verified: true,
      description: "Mastery of CSS Grid, Flexbox, media queries, accessibility standards, and fluid layouts.",
    },
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
