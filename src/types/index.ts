export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
  status?: "Completed" | "In Progress";
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Milestone {
  label: string;
  value: string;
  icon: string;
}

export interface JourneyStep {
  title: string;
  subtitle?: string;
  year?: string;
  description: string;
  icon: string;
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
}
