import { Project, SkillCategory, Milestone, JourneyStep, ContactLink } from "@/types";

export const personalInfo = {
  name: "Manjeet Lodha",
  firstName: "Manjeet",
  lastName: "Lodha",
  role: "Student Developer",
  college: "Newton School of Technology (NST)",
  tagline: "Full Stack Developer | Problem Solver | AI Enthusiast",
  subtitle:
    "I craft full-stack applications and experiment with AI to solve real problems — always shipping, always learning.",
  about: [
    "I am Manjeet Lodha, a B.Tech Computer Science student at Newton School of Technology with a strong passion for Full Stack Development, Backend Engineering, Artificial Intelligence, and problem-solving.",
    "I enjoy building real-world projects, exploring modern technologies, and transforming ideas into meaningful digital products. My journey began in a small village in Madhya Pradesh and continues through continuous learning, innovation, and hands-on development.",
    "Currently, I focus on creating scalable applications, learning advanced technologies, and leveraging AI to solve impactful real-world problems.",
  ],
  email: "manjeetlodha@example.com",
  resumeUrl: "/resume.pdf",
};

export const codeSnippet = `const developer = {
  name: "Manjeet Lodha",
  role: "Student Developer",
  college: "NST",
  passions: [
    "Web Development",
    "DSA",
    "Building Projects"
  ],
  status: "Learning Continuously"
}`;

export const journeySteps: JourneyStep[] = [
  {
    title: "Village Rajnakhedi",
    subtitle: "The Beginning",
    description:
      "Raised in a small village in Madhya Pradesh, where curiosity, determination, and a desire to learn became the foundation of my journey.",
    icon: "🏡",
  },
  {
    title: "St. Mary's High School, Dourana",
    subtitle: "Class 10th",
    year: "2022",
    description:
      "Built a strong academic foundation while developing discipline, problem-solving skills, and a passion for continuous learning.",
    icon: "📚",
  },
  {
    title: "New Life School, Guna",
    subtitle: "Higher Secondary Education",
    year: "2022–2025",
    description:
      "Completed higher secondary education while simultaneously preparing for JEE through Allen Career Institute, strengthening analytical thinking, perseverance, and consistency.",
    icon: "🎓",
  },
  {
    title: "Newton School of Technology",
    subtitle: "B.Tech in Computer Science",
    year: "2025–Present",
    description:
      "Pursuing Computer Science with a focus on software development, modern technologies, and building practical solutions to real-world problems.",
    icon: "🎓",
  },
  {
    title: "Web Development",
    year: "2025",
    description:
      "Discovered the power of creating interactive digital experiences and started building responsive web applications using modern frontend technologies.",
    icon: "🌐",
  },
  {
    title: "Backend Development",
    year: "2026",
    description:
      "Expanded into backend development by working with APIs, databases, authentication systems, and scalable application architectures.",
    icon: "⚙️",
  },
  {
    title: "Building Projects",
    year: "2026–Present",
    description:
      "Applying technical knowledge to build real-world projects, transforming ideas into functional products through code, experimentation, and continuous improvement.",
    icon: "🚀",
  },
  {
    title: "AI & Innovation",
    year: "2026–Present",
    description:
      "Exploring artificial intelligence and modern AI tools to develop impactful solutions that solve meaningful problems and create value.",
    icon: "🤖",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "⟨/⟩",
    skills: ["Python", "JavaScript", "C++"],
  },
  {
    title: "Frontend Development",
    icon: "◆",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: "⬡",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    icon: "◈",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: "⊞",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
  },
  {
    title: "AI & Productivity",
    icon: "✦",
    skills: ["OpenAI APIs", "Prompt Engineering", "GitHub Copilot", "AI Assisted Development"],
  },
];

export const featuredProject: Project = {
  title: "NeoKrishiTech",
  description:
    "A comprehensive agricultural technology platform designed to empower farmers with real-time data, AI-driven insights, and market intelligence — bridging the gap between technology and agriculture.",
  techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "OpenAI API"],
  githubUrl: "https://github.com/manjeetlodha",
  liveUrl: "#",
  featured: true,
};

export const featuredProjectFeatures = [
  {
    title: "Weather Updates",
    description: "Real-time weather forecasts for precise farming decisions",
    icon: "☁️",
  },
  {
    title: "Mandi Prices",
    description: "Live market prices to maximize crop revenue",
    icon: "📊",
  },
  {
    title: "AI Advisory",
    description: "Intelligent crop recommendations powered by AI",
    icon: "🤖",
  },
  {
    title: "Crop Assistance",
    description: "End-to-end guidance for crop management",
    icon: "🌾",
  },
];

export const projects: Project[] = [
  {
    title: "Finora",
    description:
      "A fully responsive fintech platform with auth, dark mode, and interactive trading UI.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Manjeet-cse/Finora",
    liveUrl: "https://manjeet-cse.github.io/Finora/",
    image: "/images/finora.png",
    status: "Completed",
  },
  {
    title: "World Statistics Explorer",
    description:
      "Interactive country data explorer with REST API, search, filters, and sorting.",
    techStack: ["HTML5", "CSS3", "JavaScript", "REST API"],
    githubUrl: "https://github.com/Manjeet-cse",
    liveUrl: "https://world-statistics-explorer.vercel.app/",
    image: "/images/world-stats.png",
    status: "Completed",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium developer portfolio with animations, dot-grid background, and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Manjeet-cse",
    liveUrl: "#",
    status: "Completed",
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task management app with authentication, CRUD operations, and priority sorting.",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/Manjeet-cse",
    liveUrl: "#",
    status: "In Progress",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with real-time data, location search, and visual indicators.",
    techStack: ["React", "JavaScript", "OpenWeather API", "CSS"],
    githubUrl: "https://github.com/Manjeet-cse",
    liveUrl: "#",
    status: "In Progress",
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance tracker with categorization, visual charts, and monthly summaries.",
    techStack: ["React", "Node.js", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/Manjeet-cse",
    liveUrl: "#",
    status: "In Progress",
  },
];

export const milestones: Milestone[] = [
  {
    label: "DSA Problems Solved",
    value: "100+",
    icon: "⟨/⟩",
  },
  {
    label: "VBYLD 2026 Participant",
    value: "VBYLD",
    icon: "🏆",
  },
  {
    label: "B.Tech @ NST",
    value: "NST",
    icon: "🎓",
  },
  {
    label: "Building NeoKrishiTech",
    value: "Live",
    icon: "🌱",
  },
  {
    label: "Consistent Learner",
    value: "Daily",
    icon: "📈",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    url: "mailto:manjeetlodha@example.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    url: "https://github.com/manjeetlodha",
    icon: "⌘",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/manjeetlodha",
    icon: "in",
  },
  {
    label: "Resume",
    url: "/resume.pdf",
    icon: "📄",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
