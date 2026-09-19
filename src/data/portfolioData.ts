export type SectionType =
  | 'hero'
  | 'about'
  | 'what-i-do'
  | 'experience'
  | 'work'
  | 'projects'
  | 'tech-stack'
  | 'skills'
  | 'contact'
  | null;

export interface Project {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  features: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image: string;
  gallery: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; note: string }[];
}

export interface AboutData {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  status: string;
  location: string;
  bio: string[];
  timeline: TimelineEntry[];
  stats: { label: string; value: string; sub: string }[];
  philosophies: string[];
}

export interface ContactChannel {
  name: string;
  handle: string;
  link: string;
  type: 'email' | 'phone' | 'whatsapp' | 'github' | 'linkedin';
  icon: string;
  directAction?: string;
}

export const portfolioData = {
  about: {
    name: "Yasir Khokhar",
    handle: "khokharyasir749",
    role: "Full-Stack Developer & Creative Technologist",
    tagline: "Building digital experiences with React, Node.js & modern web technologies.",
    status: "AVAILABLE FOR WORK",
    location: "Lahore, Pakistan // Remote Worldwide",
    bio: [
      "A full-stack developer & creative technologist specializing in crafting high-performance, visually stunning web applications and interactive digital experiences with React, Node.js, modern CSS systems, and 3D WebGL.",
      "Experienced across modern full-stack engineering, single-page application state persistence, real-time WebSocket pipelines, and interactive 3D interfaces with Three.js and React Three Fiber.",
      "Committed to clean architecture, intuitive micro-animations, and fluid 60 FPS performance across desktop and mobile devices."
    ],
    timeline: [
      {
        year: "2024",
        title: "Full-Stack Web Developer",
        subtitle: "React • Vite • Tailwind CSS • Enterprise Catalog UI",
        description: "Engineered high-conversion e-commerce catalogs (Lonetex Pakistan), food ordering platforms (Bite-Hub), and real estate investment portals with interactive calculators.",
        tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "REST APIs", "LocalStorage"]
      },
      {
        year: "2025",
        title: "Real-Time & Full-Stack Interfaces",
        subtitle: "Socket.io • Interactive Dashboards • State Architecture",
        description: "Built real-time messaging hubs (Sync-Space), LMS course discovery platforms (SmartLearn LMS), and industrial warehouse stock platforms (Lonetex Inventory).",
        tags: ["React", "Node.js", "Socket.io", "TypeScript", "Tailwind CSS", "MongoDB"]
      },
      {
        year: "NOW",
        title: "Creative Technologist & 3D Web Specialist",
        subtitle: "Three.js • R3F • Spatial Interfaces • Next.js",
        description: "Designing spatial 3D web experiences, cursor-tracking avatars, physics-based tech matrices, and modern responsive digital products.",
        tags: ["Three.js", "React Three Fiber", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        current: true
      }
    ],
    stats: [
      { label: "EXPERIENCE", value: "Full-Stack", sub: "Web & Creative 3D" },
      { label: "PROJECTS DELIVERED", value: "10+", sub: "Production Apps" },
      { label: "PERFORMANCE", value: "60 FPS", sub: "Fluid Micro-Interactions" },
      { label: "STATUS", value: "Available", sub: "Open for Contracts" }
    ],
    philosophies: [
      "Pixel-perfect responsive design systems tailored with modern typography and dark glassmorphism",
      "Robust state management and instantaneous UI feedback with sub-50ms transitions",
      "Modular, reusable, and type-safe component architecture from start to finish",
      "Interactive 3D storytelling that elevates user engagement without compromising performance"
    ]
  } as AboutData,

  projects: [
    {
      number: "01",
      id: "lonetex-pakistan",
      title: "Lonetex Pakistan",
      tagline: "Commercial Cleaning Equipment E-Commerce & Wholesale Catalog",
      description: "A comprehensive digital commerce & industrial equipment catalog built for high-volume wholesale distribution. Features multi-category product filtering, instant WhatsApp inquiry dispatch, and persistent cart state via LocalStorage v30.",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage v30", "JavaScript"],
      features: [
        "Dynamic equipment catalog with category & brand filtering",
        "Persistent cart drawer with LocalStorage v30 state synchronization",
        "Instant one-click WhatsApp quotation generator with pre-filled SKU details",
        "High-definition product visual showcase and responsive specification tabs"
      ],
      metrics: "Streamlined wholesale buyer inquiries with instant WhatsApp order generation",
      demoUrl: "https://lonetexpakistan.com",
      githubUrl: "https://github.com/khokharyasir749/lonetex-pakistan",
      featured: true,
      image: "/projects/lonetex-1.png",
      gallery: [
        "/projects/lonetex-1.png",
        "/projects/lonetex-2.png",
        "/projects/lonetex-3.png",
        "/projects/lonetex-4.png"
      ]
    },
    {
      number: "02",
      id: "bite-hub",
      title: "Bite-Hub",
      tagline: "Cyberpunk-themed fast-food ordering web app with state persistence & admin dashboard",
      description: "An immersive, futuristic cyber-themed food ordering application featuring interactive neon food menus, live cart calculations, item customization options, and an administrative order management dashboard.",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Context API"],
      features: [
        "Vibrant cyberpunk neon dark UI with fluid motion design",
        "Real-time food customization (modifiers, combos, and spice level selection)",
        "Persistent order cart with live discount code & tax calculation engine",
        "Dedicated admin portal for menu adjustments and live order tracking"
      ],
      metrics: "Zero-latency local state persistence with smooth 60 FPS transitions",
      demoUrl: "https://bite-hub-demo.netlify.app",
      githubUrl: "https://github.com/khokharyasir749/bite-hub",
      featured: true,
      image: "/projects/bite-hub-1.png",
      gallery: [
        "/projects/bite-hub-1.png",
        "/projects/bite-hub-2.png",
        "/projects/bite-hub-3.png"
      ]
    },
    {
      number: "03",
      id: "shopsphere-ecommerce",
      title: "ShopSphere E-Commerce",
      tagline: "Modern digital commerce platform with dynamic filters & shopping cart",
      description: "A feature-rich digital storefront crafted with responsive product grids, real-time search queries, multi-filter attributes, and checkout state persistence.",
      tags: ["React", "Tailwind CSS", "Vite", "Context API", "JavaScript"],
      features: [
        "Dynamic multi-attribute catalog filtering by category, price, and ratings",
        "Persistent sliding shopping cart drawer with live subtotal calculation",
        "Product quick-view modals with high-resolution image galleries",
        "Responsive checkout workflow with form validation and instant feedback"
      ],
      metrics: "Instantaneous product search indexing with sub-100ms client state updates",
      demoUrl: "https://shopsphere-store.netlify.app",
      githubUrl: "https://github.com/khokharyasir749/shopsphere-ecommerce",
      featured: true,
      image: "/projects/ecommerce-ui-1.png",
      gallery: [
        "/projects/ecommerce-ui-1.png",
        "/projects/ecommerce-ui-2.png",
        "/projects/ecommerce-ui-3.png"
      ]
    },
    {
      number: "04",
      id: "sync-space",
      title: "Sync-Space Chat Hub",
      tagline: "Real-time full-stack chat application with Socket.io & live presence",
      description: "A lightning-fast real-time messaging application engineered with WebSockets. Features bi-directional channels, direct 1-on-1 private messaging, live typing indicators, and Instagram-style 'Seen' read receipts.",
      tags: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
      features: [
        "Bi-directional WebSocket streaming with sub-30ms message delivery",
        "Instagram-style 'Seen' read receipts and real-time typing indicators",
        "Channel switcher, private DMs, and multimedia attachment previews",
        "Dark glassmorphic workspace aesthetic with customizable chat themes"
      ],
      metrics: "Engineered for 500+ simultaneous connections with zero packet loss",
      demoUrl: "https://sync-space-chat.herokuapp.com",
      githubUrl: "https://github.com/khokharyasir749/sync-space",
      featured: true,
      image: "/projects/sync-space-1.png",
      gallery: [
        "/projects/sync-space-1.png",
        "/projects/sync-space-2.png"
      ]
    },
    {
      number: "05",
      id: "smartlearn-lms",
      title: "SmartLearn LMS",
      tagline: "Modern learning management frontend with course discovery & progress filters",
      description: "A comprehensive education and course streaming frontend featuring video curriculum navigation, category-based course discovery filters, interactive quiz modules, and student dashboard analytics.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      features: [
        "Course catalog with multi-tag filtering, search, and difficulty ratings",
        "Interactive video player interface with lesson bookmarking and notes",
        "Student progress dashboard with completion percentage rings and certificates",
        "Module quiz assessment engine with instant grade calculations"
      ],
      metrics: "Instantaneous page transitions with modular TypeScript component architecture",
      demoUrl: "https://smartlearn-lms.vercel.app",
      githubUrl: "https://github.com/khokharyasir749/smartlearn-lms",
      featured: true,
      image: "/projects/smartlearn-1.png",
      gallery: [
        "/projects/smartlearn-1.png",
        "/projects/smartlearn-2.png",
        "/projects/smartlearn-3.png",
        "/projects/smartlearn-4.png"
      ]
    },
    {
      number: "06",
      id: "lonetex-inventory",
      title: "Lonetex Inventory ERP",
      tagline: "Industrial stock operations dashboard with rack allocations & supply metrics",
      description: "An enterprise warehouse inventory control platform tailored for supply chains. Features dense sticky data tables, real-time rack/zone allocation indicators, low-stock warnings, and audit logging.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
      features: [
        "Dense sticky data tables with multi-column sorting, filtering, and pagination",
        "Visual warehouse zone & rack allocation indicators",
        "Automated low-stock threshold triggers and audit event trail logs",
        "Instant CSV export engine and SKU movement analytics graphs"
      ],
      metrics: "Monitored 50,000+ daily inventory SKU events with sub-50ms render latency",
      demoUrl: "https://lonetex-inventory.vercel.app",
      githubUrl: "https://github.com/khokharyasir749/lonetex-inventory",
      featured: true,
      image: "/projects/lonetex-inventory-1.png",
      gallery: [
        "/projects/lonetex-inventory-1.png",
        "/projects/lonetex-inventory-2.png",
        "/projects/lonetex-inventory-3.png"
      ]
    },
    {
      number: "07",
      id: "weather-dashboard",
      title: "Cyber Weather Dashboard",
      tagline: "Real-time global meteorological monitor with forecast telemetry",
      description: "A precision weather monitoring application featuring 7-day forecasts, atmospheric pressure graphs, satellite telemetry radar maps, and geolocation search.",
      tags: ["React", "Weather API", "Tailwind CSS", "Charts.js", "TypeScript"],
      features: [
        "Real-time geo-coordinates meteorological telemetry with live radar updates",
        "Interactive 7-day hourly temperature and precipitation graphs",
        "UV index, humidity, wind velocity, and air quality barometer dials",
        "City bookmarking with LocalStorage persistence"
      ],
      metrics: "Sub-200ms meteorological API data parsing with responsive radar charts",
      demoUrl: "https://weather-cyber-dashboard.vercel.app",
      githubUrl: "https://github.com/khokharyasir749/weather-dashboard",
      featured: false,
      image: "/projects/weather-dashboard-1.png",
      gallery: [
        "/projects/weather-dashboard-1.png",
        "/projects/weather-dashboard-2.png",
        "/projects/weather-dashboard-3.png"
      ]
    },
    {
      number: "08",
      id: "modern-calculator",
      title: "Modern Glass Calculator",
      tagline: "Precision financial and scientific calculation engine with dark UI",
      description: "A sleek, responsive dark glassmorphic calculator with history logging, keyboard event listeners, memory recall registers, and scientific arithmetic modes.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Instant arithmetic computation engine with float precision formatting",
        "Calculation history tape with one-click past result insertion",
        "Full keyboard numpad bindings and tactile sound feedback",
        "Sleek frosted glass neumorphic button matrix with active animations"
      ],
      metrics: "Zero-latency arithmetic evaluation with full keyboard shortcut bindings",
      demoUrl: "https://modern-glass-calculator.vercel.app",
      githubUrl: "https://github.com/khokharyasir749/modern-calculator",
      featured: false,
      image: "/projects/modern-calculator-1.png",
      gallery: [
        "/projects/modern-calculator-1.png",
        "/projects/modern-calculator-2.png"
      ]
    },
    {
      number: "09",
      id: "netflix-clone",
      title: "Netflix Clone",
      tagline: "Video Streaming Platform UI & Dynamic Catalog",
      description: "A full-featured Netflix web interface clone built with modern frontend architecture, movie categorization, dynamic search, and responsive streaming media layouts.",
      tags: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "Vite"],
      features: [
        "Dynamic movie & TV show catalog categorization with horizontal scrolling carousels",
        "Instant real-time search query filtering and genre browsing engine",
        "Responsive video media player interface with interactive preview trailers",
        "Pixel-perfect dark streaming layout with fluid micro-interactions and modal overlays"
      ],
      metrics: "Sub-50ms catalog interaction latency with optimized responsive media grids",
      githubUrl: "https://github.com/khokharyasir749",
      featured: true,
      image: "/NETFLIX CLONE1.png",
      gallery: [
        "/NETFLIX CLONE1.png",
        "/NETFLIX CLONE 2.png",
        "/NETFLIX CLONE 3.png",
        "/NETFLIX CLONE 4.png",
        "/NETFLIX CLONE 5.png"
      ]
    },
    {
      number: "10",
      id: "inventory-system",
      title: "Inventory System",
      tagline: "Enterprise Inventory & Stock Management Platform",
      description: "An enterprise-grade SaaS inventory management dashboard featuring stock movement tracking, automated ledger logging, catalog controls, and analytics grids.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: [
        "Real-time stock movement tracking and automated inventory ledger logging",
        "Multi-warehouse catalog controls with category sorting and SKU management",
        "Interactive analytics dashboard with restock warnings and supply chain KPIs",
        "Audit trail logs and fast exportable transaction records"
      ],
      metrics: "Real-time ledger updates with persistent database synchronization",
      githubUrl: "https://github.com/khokharyasir749/Lonetex-inventory",
      featured: true,
      image: "/INVENTORY SYSTEM 1.png",
      gallery: [
        "/INVENTORY SYSTEM 1.png",
        "/INVENTORY SYSTEM 2.png",
        "/INVENTORY SYSTEM 3.png"
      ]
    }
  ] as Project[],

  techStack: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Node.js",
    "Vite",
    "Three.js",
    "TypeScript",
    "Next.js"
  ],

  skills: [
    {
      category: "Frontend Engineering",
      iconName: "Layout",
      skills: [
        { name: "React / Next.js", level: 95, note: "App Router, Hooks, Redux, State Architecture" },
        { name: "JavaScript & TypeScript", level: 94, note: "ESNext, Async, Strict typing, Clean patterns" },
        { name: "Tailwind CSS & CSS3", level: 96, note: "Responsive layouts, custom design systems, animations" },
        { name: "HTML5 & Semantic Web", level: 98, note: "Accessibility, SEO standards, Web APIs" }
      ]
    },
    {
      category: "Creative 3D & WebGL",
      iconName: "Box",
      skills: [
        { name: "Three.js & R3F", level: 90, note: "React Three Fiber, Drei, Scene Graph optimization" },
        { name: "Framer Motion", level: 94, note: "Spring physics, scroll-linked animations, micro-interactions" },
        { name: "Vite & Tooling", level: 95, note: "Fast HMR, optimized production bundlers, PostCSS" },
        { name: "Git & GitHub", level: 94, note: "Version control, branching workflows, CI/CD pipelines" }
      ]
    },
    {
      category: "Backend & Real-Time",
      iconName: "Server",
      skills: [
        { name: "Node.js & Express", level: 90, note: "RESTful APIs, routing, JWT auth, middleware" },
        { name: "Socket.io / WebSockets", level: 92, note: "Bi-directional real-time chat & live event pipelines" },
        { name: "MongoDB & Databases", level: 88, note: "Document schemas, aggregation pipelines, indexing" },
        { name: "Full-Stack Security", level: 86, note: "CORS, token authentication, sanitized inputs" }
      ]
    }
  ] as SkillCategory[],

  contacts: [
    {
      name: "GitHub",
      handle: "github.com/khokharyasir749",
      link: "https://github.com/khokharyasir749",
      type: "github",
      icon: "Github"
    },
    {
      name: "WhatsApp",
      handle: "+92 328 0790704",
      link: "https://wa.me/923280790704",
      type: "whatsapp",
      icon: "Phone",
      directAction: "Open WhatsApp"
    },
    {
      name: "Email",
      handle: "khokharyasir749@gmail.com",
      link: "mailto:khokharyasir749@gmail.com",
      type: "email",
      icon: "Mail",
      directAction: "Copy Email"
    },
    {
      name: "LinkedIn",
      handle: "Yasir Khokhar",
      link: "https://linkedin.com/in/yasirkhokhar",
      type: "linkedin",
      icon: "Linkedin"
    }
  ] as ContactChannel[]
};

export default portfolioData;
