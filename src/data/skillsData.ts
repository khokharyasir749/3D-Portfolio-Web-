export interface SkillDetail {
  name: string;
  category: string;
  tagline: string;
  capabilities: string[];
  ecosystem: string[];
  relatedProjects: { id?: string; title: string; role: string }[];
}

export const SKILL_DETAILS: Record<string, SkillDetail> = {
  // Frontend
  React: {
    name: 'React',
    category: 'Frontend Engineering',
    tagline: 'Component-driven declarative UI with concurrent rendering and custom hooks.',
    capabilities: [
      'Concurrent Mode, automatic batching & transition prioritization (useTransition)',
      'Custom hooks architecture for reusable stateful logic & domain services',
      'Server & Client Component boundaries (RSC) with zero-bundle-size hydration',
      'Context API, state orchestration & sub-50ms reactive reconciliation',
      'Virtual DOM diffing optimization with memoization (useMemo, useCallback)',
    ],
    ecosystem: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Framer Motion'],
    relatedProjects: [
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Web & Mobile Client' },
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Interactive Menu & Cart' },
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Real-Time Interface' },
      { id: 'smartlearn-lms', title: 'SmartLearn LMS', role: 'Course Catalog & Video UI' },
    ],
  },
  'Next.js': {
    name: 'Next.js',
    category: 'Frontend & Full-Stack',
    tagline: 'Full-stack React framework optimized for SSR, SSG, and Edge execution.',
    capabilities: [
      'App Router architecture with nested layouts and error boundary trees',
      'Hybrid rendering: SSR (Server-Side), SSG (Static Site), and ISR pipelines',
      'Built-in image, font, and script performance optimization engines',
      'Edge API Routes, server actions, and middleware request interception',
      'Enterprise SEO architecture with automated dynamic Open Graph metadata',
    ],
    ecosystem: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Turbopack'],
    relatedProjects: [
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Unified Web App' },
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Operations Portal' },
    ],
  },
  TypeScript: {
    name: 'TypeScript',
    category: 'Languages & Core Stack',
    tagline: 'Typed superset of JavaScript bringing compile-time contracts and safety.',
    capabilities: [
      'Strict type-checking preventing runtime null/undefined pointer exceptions',
      'Advanced generics, mapped types, and conditional return signatures',
      'Discriminated union state modeling for deterministic UI states',
      'End-to-end API type contracts aligned with backend schema definitions',
      'Zero-cost runtime abstractions with clean ESM transpilation',
    ],
    ecosystem: ['ESNext', 'Node.js', 'React', 'Zod', 'TSConfig'],
    relatedProjects: [
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Strict Full-Stack' },
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Data Types & Models' },
      { id: 'smartlearn-lms', title: 'SmartLearn LMS', role: 'Catalog Schemas' },
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace', role: 'Socket Event Contracts' },
    ],
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    category: 'Frontend & Design Systems',
    tagline: 'Utility-first CSS framework for bespoke, highly responsive design systems.',
    capabilities: [
      'Design tokenization (color spaces, typography scales, glassmorphism)',
      'Arbitrary value support, dynamic pseudo-classes, and group-hover states',
      'Mobile-first responsive layout breakpoints from 320px to 4K displays',
      'Dark mode color harmony with subtle borders and ambient radial glows',
      'PostCSS build-time purge producing ultra-lean production stylesheets',
    ],
    ecosystem: ['PostCSS', 'Autoprefixer', 'tailwind-merge', 'clsx', 'Lucide React'],
    relatedProjects: [
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Cyberpunk Neon Theme' },
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Responsive Portal' },
      { id: 'real-estate-portal', title: 'PrimeSpace — Real Estate', role: 'Property Layouts' },
      { id: 'lonetex-inventory', title: 'Lonetex Inventory System', role: 'Warehouse UI' },
    ],
  },
  'Three.js': {
    name: 'Three.js',
    category: 'Creative 3D & Graphics',
    tagline: 'WebGL 3D engine enabling hardware-accelerated spatial graphics in browsers.',
    capabilities: [
      'Scene graph management, transformation matrices & perspective cameras',
      'PBR (Physically Based Rendering) materials, ambient & spot lighting',
      'Custom BufferGeometry construction and instanced mesh optimization',
      'Raycasting for 3D cursor tracking, click intersection, and hover events',
      '60 FPS render loops calibrated with requestAnimationFrame lifecycle',
    ],
    ecosystem: ['React Three Fiber', 'Drei', 'WebGL', 'GLSL Shaders', 'PostProcessing'],
    relatedProjects: [
      { title: '3D Spatial Web Portfolio', role: 'Interactive Scene & Matrix' },
      { title: 'Physics Spheres Matrix', role: 'Tech Spheres Simulation' },
    ],
  },
  GSAP: {
    name: 'GSAP',
    category: 'Frontend & Motion',
    tagline: 'High-performance JavaScript animation engine for complex timelines.',
    capabilities: [
      'Scroll-triggered timeline sequences with pinned viewport elements',
      'Sub-pixel GPU rendering avoiding browser layout thrashing',
      'Staggered batch animations for cards, lists, and typography reveals',
      'MorphSVG and complex vector path tweening with elastic easings',
      'Precise velocity management and bidirectional playback control',
    ],
    ecosystem: ['ScrollTrigger', 'Framer Motion', 'Lenis Smooth Scroll', 'Canvas'],
    relatedProjects: [
      { title: '3D Spatial Web Portfolio', role: 'Section Entrances & Timelines' },
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Menu Interactions' },
    ],
  },

  // Backend
  'Node.js': {
    name: 'Node.js',
    category: 'Backend & Systems',
    tagline: 'Asynchronous event-driven JavaScript runtime for scalable services.',
    capabilities: [
      'Single-threaded event loop architecture handling concurrent I/O requests',
      'Stream processing for large data sets with minimal memory footprint',
      'Microservices orchestration and centralized REST / WebSocket daemons',
      'Native crypto, buffer manipulation, and secure authentication flows',
      'Cluster module and worker threads for multi-core parallel workloads',
    ],
    ecosystem: ['Express', 'Socket.io', 'MongoDB', 'Docker', 'npm'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Real-Time Server' },
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'API Microservices' },
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Backend API' },
    ],
  },
  Express: {
    name: 'Express',
    category: 'Backend & Routing',
    tagline: 'Fast, unopinionated, minimalist web framework for Node.js.',
    capabilities: [
      'Modular router architecture with RESTful controller decoupling',
      'Chained middleware pipelines for JWT auth, validation, and logging',
      'Centralized error handling and standardized JSON response envelopes',
      'CORS origin protection, Helmet HTTP headers, and rate limiting',
      'Static asset serving and proxy forwarding configuration',
    ],
    ecosystem: ['Node.js', 'Mongoose', 'Cors', 'Helmet', 'JWT'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'REST & Auth Server' },
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Order API Service' },
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Booking Endpoints' },
    ],
  },
  'REST APIs': {
    name: 'REST APIs',
    category: 'Backend & Protocols',
    tagline: 'Stateless, standardized client-server communication protocols.',
    capabilities: [
      'Resource-oriented URL hierarchy following strict HTTP verb semantics',
      'Predictable JSON response schemas with standardized status codes',
      'Offset/cursor-based pagination, field filtering, and sorting parameters',
      'Request body validation and sanitization preventing injection attacks',
      'OpenAPI / Swagger specifications and Postman documentation',
    ],
    ecosystem: ['Postman', 'Express', 'Fetch API', 'Axios', 'OpenAPI'],
    relatedProjects: [
      { id: 'smartlearn-lms', title: 'SmartLearn LMS', role: 'Course Catalog Endpoints' },
      { id: 'lonetex-inventory', title: 'Lonetex Inventory System', role: 'Stock & SKU Sync' },
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Tour Booking Gateway' },
    ],
  },
  WebSockets: {
    name: 'WebSockets',
    category: 'Backend & Real-Time',
    tagline: 'Full-duplex bi-directional communication channels over a single TCP connection.',
    capabilities: [
      'Sub-millisecond latency messaging without HTTP polling overhead',
      'Persistent bi-directional client-server connection state',
      'Binary and text payload frame transmission with minimal headers',
      'Heartbeat ping-pong mechanisms detecting network disconnections',
      'Live state synchronization across distributed client nodes',
    ],
    ecosystem: ['Socket.io', 'Node.js', 'Redis Pub/Sub', 'WebSocket API'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Live Message Bus' },
    ],
  },
  'Socket.io': {
    name: 'Socket.io',
    category: 'Backend & Real-Time',
    tagline: 'Event-based bidirectional real-time communication engine with fallbacks.',
    capabilities: [
      'Room & namespace isolation for multi-channel chat and live rooms',
      'Real-time user presence, typing status indicators, and read receipts',
      'Automatic reconnection management with exponential backoff',
      'Fallback to HTTP long-polling when WebSocket firewalls intervene',
      'Horizontal scalability integration via Redis Pub/Sub adapter',
    ],
    ecosystem: ['Node.js', 'React', 'Redis', 'Express'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Real-Time Engine' },
    ],
  },

  // Creative 3D & Graphics
  'React Three Fiber': {
    name: 'React Three Fiber',
    category: 'Creative 3D & Spatial Web',
    tagline: 'Declarative React reconciler for Three.js scene graphs.',
    capabilities: [
      'Declarative 3D component trees replacing imperative scene graph code',
      'Zero-overhead render loop integration with useFrame hook',
      'Seamless Drei helper integration (OrbitControls, Float, Text3D, Environment)',
      'Raycasting and pointer event dispatching directly to 3D geometry components',
      'Canvas lifecycle management with adaptive pixel ratios and suspension',
    ],
    ecosystem: ['Three.js', '@react-three/drei', 'postprocessing', 'Framer Motion'],
    relatedProjects: [
      { title: '3D Spatial Web Portfolio', role: 'Interactive Scene Canvas' },
      { title: 'Tech Matrix Spheres', role: 'Interactive Physics World' },
    ],
  },
  WebGL: {
    name: 'WebGL',
    category: 'Creative 3D & Graphics',
    tagline: 'Hardware-accelerated raster graphics API executing directly on the GPU.',
    capabilities: [
      'Direct GPU hardware acceleration via browser canvas contexts',
      'Depth testing, alpha blending, and stencil buffer configuration',
      'Custom framebuffer objects (FBO) for multi-pass render effects',
      'VBO (Vertex Buffer Object) streaming for dynamic geometries',
      'Optimized viewport transformations and high-DPI scaling',
    ],
    ecosystem: ['Three.js', 'GLSL', 'Canvas', 'WebGPU'],
    relatedProjects: [
      { title: '3D Spatial Web Portfolio', role: 'Hardware Viewport' },
    ],
  },
  Canvas: {
    name: 'Canvas',
    category: 'Creative 3D & Graphics',
    tagline: 'High-performance HTML5 raster drawing surface for 2D/3D graphics.',
    capabilities: [
      'Direct 2D bitmap manipulation via CanvasRenderingContext2D',
      'High-performance particle systems with independent physics trajectories',
      'Path drawing, bezier curves, gradient fills, and composite operations',
      'OffscreenCanvas rendering for compute-heavy background visual workers',
      'Sub-millisecond frame render times synced to display refresh rate',
    ],
    ecosystem: ['canvas-confetti', 'Three.js', 'HTML5', 'Framer Motion'],
    relatedProjects: [
      { id: 'modern-calculator', title: 'AeroCalc Calculator', role: 'Keypad Canvas Feedback' },
      { title: '3D Spatial Web Portfolio', role: 'Confetti & Spatial Surface' },
    ],
  },
  Shaders: {
    name: 'Shaders',
    category: 'Creative 3D & Graphics',
    tagline: 'GPU programs written in GLSL for custom vertex and fragment processing.',
    capabilities: [
      'Vertex shaders: Real-time vertex displacement and organic wave physics',
      'Fragment shaders: Procedural Perlin/Simplex noise and color gradients',
      'Screen-space post-processing: Bloom, chromatic aberration, and film grain',
      'Uniform and varying variable passing between CPU and GPU pipelines',
      'Mathematical lighting models (Phong, Blinn, PBR approximations)',
    ],
    ecosystem: ['Three.js', 'GLSL', 'React Three Fiber', 'PostProcessing'],
    relatedProjects: [
      { title: '3D Spatial Web Portfolio', role: 'Ambient Background Noise' },
    ],
  },

  // Databases & Cloud
  MongoDB: {
    name: 'MongoDB',
    category: 'Databases & Cloud',
    tagline: 'Flexible, scalable document-oriented NoSQL database.',
    capabilities: [
      'JSON-like BSON document modeling with dynamic nested schemas',
      'Compound, text, and TTL indexing for sub-10ms query execution',
      'Multi-stage aggregation pipelines for analytics and summary metrics',
      'Mongoose ODM schema validation, middleware hooks, and virtuals',
      'High availability replica sets and automated failover handling',
    ],
    ecosystem: ['Mongoose', 'MongoDB Atlas', 'Node.js', 'Compass'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Channel & Message Store' },
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Order & Item Catalog' },
    ],
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    category: 'Databases & Cloud',
    tagline: 'Enterprise-grade relational database with strict ACID compliance.',
    capabilities: [
      'Strict relational schemas with foreign keys and referential integrity',
      'ACID transaction guarantees for mission-critical financial ledgers',
      'JSONB document columns with binary indexing for hybrid data patterns',
      'Complex multi-table JOIN queries and window aggregation functions',
      'Connection pooling and prepared query optimization',
    ],
    ecosystem: ['Prisma', 'pg', 'SQL', 'Supabase', 'Docker'],
    relatedProjects: [
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Client & Deal Store' },
    ],
  },
  Redis: {
    name: 'Redis',
    category: 'Databases & Cloud',
    tagline: 'In-memory key-value data structure store used for caching and messaging.',
    capabilities: [
      'Sub-millisecond data retrieval directly from volatile memory',
      'Key-value, hash, and sorted set primitives for real-time leaderboards',
      'Pub/Sub message distribution across distributed backend instances',
      'Token bucket rate limiting preventing API abuse and DDoS attacks',
      'TTL (Time-To-Live) key expiration policies for user session management',
    ],
    ecosystem: ['Node.js', 'Socket.io', 'ioredis', 'Docker'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Active Session Cache' },
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Query Result Cache' },
    ],
  },

  // Dev Tools
  Git: {
    name: 'Git',
    category: 'Dev Tools & VCS',
    tagline: 'Distributed version control system for atomic tracking of code changes.',
    capabilities: [
      'Feature branch workflows (GitFlow, trunk-based development)',
      'Atomic commits with clean, semantic commit history messages',
      'Interactive rebasing, squashing, and clean linear history management',
      'Merge conflict resolution and three-way diff inspection',
      'Local hooks (pre-commit, pre-push) enforcing lint and build standards',
    ],
    ecosystem: ['GitHub', 'GitLab', 'Terminal', 'VS Code'],
    relatedProjects: [
      { title: 'All Production Projects', role: 'Version Control Foundation' },
    ],
  },
  GitHub: {
    name: 'GitHub',
    category: 'Dev Tools & Collaboration',
    tagline: 'Cloud platform for version control, code collaboration, and CI/CD.',
    capabilities: [
      'Pull Request code reviews, branch protection rules, and merge gates',
      'GitHub Actions automation for build verification and preview deploys',
      'Issue tracking, milestones, and project kanban board management',
      'Release tagging with automated semantic versioning and changelogs',
      'SSH key authentication and granular personal access token security',
    ],
    ecosystem: ['Git', 'GitHub Actions', 'Markdown', 'Dependabot'],
    relatedProjects: [
      { title: 'All Production Repositories', role: 'Remote Hosting & CI/CD' },
    ],
  },
  Vite: {
    name: 'Vite',
    category: 'Dev Tools & Bundlers',
    tagline: 'Next-generation frontend tooling with instant ESM dev server and Rollup builds.',
    capabilities: [
      'Instant hot module replacement (HMR) powered by native browser ESM',
      'Optimized Rollup production bundling with tree-shaking & code splitting',
      'Native TypeScript, JSX, and PostCSS compilation out of the box',
      'Environment variable management via .env files and import.meta.env',
      'Extensible plugin ecosystem (@vitejs/plugin-react, visualizer)',
    ],
    ecosystem: ['Rollup', 'esbuild', 'React', 'PostCSS', 'Tailwind CSS'],
    relatedProjects: [
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Build Architecture' },
      { id: 'real-estate-portal', title: 'PrimeSpace — Real Estate', role: 'Frontend Bundler' },
      { id: 'lonetex-inventory', title: 'Lonetex Inventory System', role: 'Production Engine' },
      { title: '3D Spatial Web Portfolio', role: 'Vite 5 Production Pipeline' },
    ],
  },
  Postman: {
    name: 'Postman',
    category: 'Dev Tools & Testing',
    tagline: 'API platform for designing, testing, and documenting HTTP endpoints.',
    capabilities: [
      'Comprehensive endpoint test collections with assertion scripts',
      'Environment variable switching between Localhost, Staging, and Production',
      'Automated token extraction from login responses into global auth headers',
      'Payload schema verification and HTTP status code validation',
      'Mock server creation for rapid frontend-first prototyping',
    ],
    ecosystem: ['REST APIs', 'Express', 'Node.js', 'OpenAPI'],
    relatedProjects: [
      { id: 'smartlearn-lms', title: 'SmartLearn LMS', role: 'API Contract Testing' },
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Workflow Verification' },
      { id: 'flight-one-travel', title: 'FlightOne — Travel Platform', role: 'Booking API QA' },
    ],
  },
  Docker: {
    name: 'Docker',
    category: 'Dev Tools & Containers',
    tagline: 'Containerization platform ensuring environment parity from dev to prod.',
    capabilities: [
      'Multi-stage Dockerfile builds minimizing production image sizes',
      'Isolated container runtimes eliminating "works on my machine" defects',
      'Docker Compose orchestration for multi-container web/db/cache stacks',
      'Volume mapping for persistent database storage and live source syncing',
      'Container network bridging and secure environment variable injection',
    ],
    ecosystem: ['Docker Compose', 'Linux', 'Node.js', 'PostgreSQL', 'Redis'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Containerized Stack' },
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Multi-Service Dev' },
    ],
  },
  Linux: {
    name: 'Linux',
    category: 'Dev Tools & Environments',
    tagline: 'Open-source Unix-like operating system powering cloud servers.',
    capabilities: [
      'Bash shell scripting and task automation via cron jobs',
      'Systemd service unit creation for persistent background daemons',
      'File permission management (chmod, chown) and SSH key authentication',
      'Process monitoring, memory inspection, and network socket inspection',
      'Package management and headless server maintenance',
    ],
    ecosystem: ['Ubuntu', 'Debian', 'Nginx', 'Bash', 'SSH', 'Docker'],
    relatedProjects: [
      { id: 'syncspace-chat', title: 'SyncSpace — Workspace & Chat', role: 'Server Hosting' },
      { title: 'Cloud VPS Infrastructure', role: 'Production Deployment' },
    ],
  },

  // Languages
  JavaScript: {
    name: 'JavaScript',
    category: 'Languages & Core Stack',
    tagline: 'The foundational language of the modern web and Node.js ecosystems.',
    capabilities: [
      'ESNext syntax: destructuring, optional chaining, nullish coalescing',
      'Asynchronous event loop, microtask queues, and Promises (async/await)',
      'Closures, lexical scoping, and functional composition patterns',
      'Browser DOM APIs, Web Storage, Fetch, and Canvas drawing contexts',
      'High-performance array transformations (map, filter, reduce, flatMap)',
    ],
    ecosystem: ['Node.js', 'React', 'TypeScript', 'Vite', 'HTML5/CSS3'],
    relatedProjects: [
      { id: 'bithub-system', title: 'Bite-Hub — Fast Food System', role: 'Core Logic' },
      { id: 'real-estate-portal', title: 'PrimeSpace — Real Estate', role: 'Mortgage Math' },
      { id: 'lonetex-inventory', title: 'Lonetex Inventory System', role: 'State Engine' },
    ],
  },
  Python: {
    name: 'Python',
    category: 'Languages & Scripting',
    tagline: 'High-level programming language renowned for clean syntax and automation agility.',
    capabilities: [
      'Data analysis, CSV transformation, and automated system scripts',
      'Object-oriented and functional programming paradigms with clean syntax',
      'REST API prototyping with lightweight frameworks',
      'Algorithmic computation and mathematical financial formulas',
      'File I/O automation, web scraping, and data validation routines',
    ],
    ecosystem: ['FastAPI', 'Pandas', 'NumPy', 'Pip', 'Virtualenv'],
    relatedProjects: [
      { title: 'Data Processing Pipelines', role: 'Automated Scripts' },
      { title: 'Financial Calculation Models', role: 'Math Validation' },
    ],
  },
  HTML5: {
    name: 'HTML5',
    category: 'Languages & Web Standards',
    tagline: 'Modern semantic markup standard powering accessible web structures.',
    capabilities: [
      'Semantic document structure (header, main, section, article, nav)',
      'Accessibility best practices with ARIA roles and keyboard tab ordering',
      'Rich native form input types with built-in validation attributes',
      'Canvas, SVG, and multimedia integration for interactive graphics',
      'Search engine optimization (SEO) with metadata and Open Graph tags',
    ],
    ecosystem: ['CSS3', 'JavaScript', 'React', 'Next.js', 'SEO'],
    relatedProjects: [
      { title: 'All Production Portfolio Projects', role: 'Semantic Foundation' },
    ],
  },
  CSS3: {
    name: 'CSS3',
    category: 'Languages & Styling',
    tagline: 'Modern styling language delivering responsive layouts and visual design.',
    capabilities: [
      'CSS Grid and Flexbox for multidimensional responsive interfaces',
      'Custom properties (variables) for theme tokenization and runtime changes',
      'Hardware-accelerated CSS transforms, transitions, and keyframes',
      'Backdrop filter glassmorphism and modern gradient blending modes',
      'Fluid typography with clamp(), min(), and viewport units',
    ],
    ecosystem: ['Tailwind CSS', 'PostCSS', 'Framer Motion', 'Vanilla CSS'],
    relatedProjects: [
      { title: 'All Production Portfolio Projects', role: 'Styling & Visual Polish' },
    ],
  },
  SQL: {
    name: 'SQL',
    category: 'Languages & Databases',
    tagline: 'Standard language for querying and managing relational databases.',
    capabilities: [
      'Complex multi-table INNER, LEFT, and FULL OUTER JOIN queries',
      'Data definition language (DDL) modeling tables, constraints, and keys',
      'Aggregate queries with GROUP BY, HAVING, and analytic window functions',
      'ACID transaction execution with commit/rollback safety',
      'B-Tree and composite indexing strategies for high-speed queries',
    ],
    ecosystem: ['PostgreSQL', 'Prisma', 'MySQL', 'Database Modeling'],
    relatedProjects: [
      { id: 'enterprise-crm-system', title: 'Enterprise CRM Platform', role: 'Relational Queries' },
    ],
  },
};
