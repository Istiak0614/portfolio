export type SkillLevel = "Comfortable" | "Working knowledge" | "Learning";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

export type Education = {
  degree: string;
  institution: string;
  shortName: string;
  period: string;
  status: string;
  courseProjects: { name: string; summary: string; repo?: string }[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  facts: { role: string; type: string; built: string; commits: number };
  challenges: { title: string; detail: string }[];
  futurePlans: string[];
  liveUrl?: string;
  clientRepo: string;
};

export type NavLink = {
  label: string;
  href: string;
};
