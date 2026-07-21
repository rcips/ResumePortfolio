// Shared content for the Vercel serverless functions in /api.
// Source of truth = your resume. Keep this in sync with
// backend/data/*.json and src/data/fallback.js if you edit your info.
// Files/folders prefixed with "_" are ignored by Vercel's API router,
// so this file itself is never exposed as an endpoint.

export const profile = {
  name: "Rallion Antonio Cipriano",
  title: "Full Stack Developer",
  tagline: "Spring Boot | GraphQL | AWS | Microservices",
  location: "Navotas City, Philippines",
  phone: "+63 976 012 5623",
  email: "ciprianorallion@gmail.com",
  summary:
    "Full Stack Developer with 4+ years of experience developing enterprise applications using Java, Spring Boot, Spring Framework, REST APIs, GraphQL, Oracle, PostgreSQL, AWS, JBoss and WildFly. Experienced in Agile development, CI/CD, scalable backend systems and cloud-native solutions.",
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "4", label: "Companies Served" },
    { value: "10+", label: "Core Technologies" },
  ],
  socials: {
    github: "https://github.com/rcips/",
    linkedin: "https://www.linkedin.com/in/rallion-antonio-cipriano-238a38205/",
    email: "mailto:ciprianorallion@gmail.com",
  },
  resume: "/Rallion Antonio Cipriano - Resume.pdf",
};

export const experience = [
  {
    id: 1,
    company: "CXFabric",
    role: "Backend Developer",
    start: "Dec 2023",
    end: "Present",
    current: true,
    bullets: [
      "Built scalable backend services using Java, Spring Boot, Node.js, REST APIs and GraphQL.",
      "Integrated AWS services and webhooks.",
      "Collaborated with Agile teams and improved application reliability.",
    ],
  },
  {
    id: 2,
    company: "Accenture",
    role: "Custom Software Engineering Senior Analyst",
    start: "Sept 2024",
    end: "Dec 2025",
    current: false,
    bullets: [
      "Developed enterprise Java applications using Spring Framework, Oracle and JBoss.",
      "Optimized backend performance and maintained production systems.",
    ],
  },
  {
    id: 3,
    company: "Entrego",
    role: "Software Engineer",
    start: "Dec 2022",
    end: "Dec 2023",
    current: false,
    bullets: ["Developed REST APIs using Java Spring Boot and PostgreSQL."],
  },
  {
    id: 4,
    company: "Pacific Sea BPO",
    role: "Risk Management Analyst",
    start: "Feb 2020",
    end: "May 2022",
    current: false,
    bullets: ["Performed fraud analysis and transaction risk investigations."],
  },
];

export const skills = [
  { id: 1, category: "Languages", items: ["Java (4+ Years)", "JavaScript", "TypeScript", "SQL", "Node.js"] },
  { id: 2, category: "Frameworks", items: ["Spring Boot", "Spring Framework", "Spring Batch", "React", "Express.js", "jQuery"] },
  { id: 3, category: "Backend", items: ["REST APIs", "GraphQL", "Microservices", "JWT Authentication", "OAuth2", "Webhooks"] },
  { id: 4, category: "Databases", items: ["Oracle", "PostgreSQL", "MongoDB", "Cassandra (CQL)", "SQL", "NoSQL"] },
  { id: 5, category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "CI/CD", "Maven", "Gradle", "JBoss", "WildFly"] },
  { id: 6, category: "Messaging", items: ["RabbitMQ"] },
  { id: 7, category: "Testing", items: ["JUnit", "Postman", "API Testing", "Integration Testing"] },
  { id: 8, category: "Engineering", items: ["OOP", "SOLID", "Design Patterns", "Clean Architecture", "Clean Code", "Agile/Scrum", "SDLC"] },
];

export const education = [
  {
    id: 1,
    school: "Universidad de Manila",
    degree: "Bachelor of Secondary Education, Major in Mathematics",
    start: "2014",
    end: "2019",
  },
];

export const projects = [
  {
    id: 1,
    number: "01",
    title: "CXFabric",
    category: "Workflow Automation Platform",
    description:
      "Built scalable backend services using Java, Spring Boot, Node.js, REST APIs and GraphQL. Integrated AWS services and webhooks. Collaborated with Agile teams and improved application reliability.",
    image: "/assets/portfolio/CXFabric.png",
    demo: "",
    code: "https://github.com/rcips/",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Online Library",
    category: "JavaScript Web App",
    description: "An online library system for browsing and managing books, built with vanilla JavaScript.",
    image: "/assets/portfolio/Onlinelibrary.jpg",
    demo: "https://rcips.github.io/OnlineLibrary-JS/",
    code: "https://github.com/rcips/OnlineLibrary-JS",
    featured: false,
  },
  {
    id: 3,
    number: "03",
    title: "Cyberpunk API Client",
    category: "Full-Stack Web App",
    description: "A client application consuming a custom-built Cyberpunk-themed API.",
    image: "/assets/portfolio/CPB.jpg",
    demo: "https://cypberpunk-client.vercel.app/",
    code: "https://github.com/ChrlnSaez/Cyberpunk_API",
    featured: false,
  },
  {
    id: 4,
    number: "04",
    title: "Simple Conversion",
    category: "Utility Tool",
    description: "A lightweight unit conversion tool built with vanilla JavaScript.",
    image: "/assets/portfolio/Converter.jpg",
    demo: "https://rcips.github.io/simpleconversion/",
    code: "https://github.com/rcips/simpleconversion",
    featured: false,
  },
    {
    id: 5,
    number: "05",
    title: "Entrego Parcel Tracking",
    category: "Parcel Tracking System",
    description: "A parcel tracking system for monitoring and managing deliveries.",
    image: "/assets/portfolio/Entrego.JPG",
    demo: "https://www.aclogistics.com.ph/track-trace/",
    code: "",
    featured: false,
  },

];
