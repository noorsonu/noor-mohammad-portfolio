export const profile = {
  name: "Noor Mohammad",
  role: "Java Backend Developer",
  tagline:
    "I design and ship secure, layered REST APIs — Spring Boot on the server, clean contracts on the wire.",
  phone: "+91-7052806684",
  email: "noorsonu11@gmail.com",
  linkedin: "https://linkedin.com/in/noorsonu11",
  github: "https://github.com/noorsonu",
  location: "India",
  summary:
    "Java Backend Developer with hands-on experience building and deploying production-style REST APIs using Spring Boot, Spring Security (JWT), and MySQL. Designed and shipped 2 full-stack backend projects covering authentication, layered architecture, and API documentation. Strong foundation in writing clean, maintainable Java code.",
};

// Opens the user's Gmail inbox in a new tab.
export const GMAIL_URL = "https://mail.google.com/mail/u/0/#inbox";

export const stats = [
  { label: "Backend projects shipped", value: "2" },
  { label: "DSA problems solved", value: "200+" },
  { label: "API modules built", value: "8" },
  { label: "CGPA (B.Tech IT)", value: "7.66" },
];

export const skillGroups = [
  {
    title: "Core Java",
    icon: "Coffee",
    items: ["OOP", "Collections", "Data Structures & Algorithms", "Exception Handling"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: [
      "Spring Boot",
      "Spring Security (JWT)",
      "REST API Development",
      "JPA / Hibernate",
      "Bean Validation",
      "Global Exception Handling",
    ],
  },
  {
    title: "API & Documentation",
    icon: "FileJson2",
    items: ["Swagger", "Postman"],
  },
  {
    title: "Database",
    icon: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    items: ["Git", "GitHub", "Maven", "IntelliJ IDEA", "VS Code", "Render (Cloud Deployment)"],
  },
  {
    title: "Frontend (Basic)",
    icon: "LayoutTemplate",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];

export const projects = [
  {
    id: "securecart",
    endpoint: "GET /projects/securecart",
    name: "SecureCart",
    subtitle: "E-Commerce REST API",
    description:
      "A layered Controller–Service–Repository REST API covering the full commerce lifecycle: users, products, cart, and orders — secured end to end with JWT.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "MapStruct", "Swagger"],
    highlights: [
      "Architected a layered REST API with 4 core modules — User, Product, Cart, Order — supporting full CRUD, pagination, and sorting.",
      "Implemented JWT-based authentication and role-based authorization with Spring Security, securing every endpoint against unauthorized access.",
      "Enforced clean API contracts using MapStruct DTO mapping, Bean Validation, and centralized global exception handling to eliminate raw stack-trace leaks.",
    ],
    link: "https://github.com/noorsonu/SecureCart",
    status: "deployed",
  },
  {
    id: "student-management",
    endpoint: "GET /projects/student-management",
    name: "Student Management System",
    subtitle: "Academic Records REST API",
    description:
      "A REST API for managing student records end to end, from schema design in MySQL to fully validated, exception-safe endpoints.",
    stack: ["Java", "Spring Boot", "MySQL", "JPA / Hibernate", "Postman"],
    highlights: [
      "Built REST APIs to manage student records, supporting complete CRUD operations — add, update, delete, view.",
      "Integrated MySQL via JPA/Hibernate for persistent storage, applying the DTO pattern to decouple request and response models.",
      "Validated every endpoint in Postman and implemented structured exception handling for predictable, standards-compliant HTTP responses.",
    ],
    link: "https://github.com/noorsonu",
    status: "stable",
  },
];

export const achievements = [
  {
    icon: "Trophy",
    title: "200+ DSA problems solved",
    description:
      "Solved on CodeChef, building strong problem-solving fundamentals for technical interviews.",
  },
  {
    icon: "Rocket",
    title: "2 projects, deployed end-to-end",
    description:
      "Independently designed, built, and deployed 2 backend projects — from schema design to live cloud deployment.",
  },
  {
    icon: "GraduationCap",
    title: "Self-directed production practices",
    description:
      "Learned JWT authentication, DTO/MapStruct patterns, and API documentation via Swagger outside the classroom.",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) — Information Technology",
    school: "Technocrats Institute of Technology",
    period: "2025",
    detail: "CGPA: 7.66",
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "R.B.T. Vidyalaya, Deoria",
    period: "2021",
    detail: "61.3%",
  },
];

export const navRoutes = [
  { label: "About", path: "/about", href: "#about" },
  { label: "Skills", path: "/skills", href: "#skills" },
  { label: "Projects", path: "/projects", href: "#projects" },
  { label: "Achievements", path: "/achievements", href: "#achievements" },
  { label: "Contact", path: "/contact", href: "#contact" },
];
