import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces that are fast, responsive and accessible.",
    skills: [
      { name: "HTML", level: "Comfortable" },
      { name: "CSS", level: "Comfortable" },
      { name: "Tailwind CSS", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "TypeScript", level: "Comfortable" },
      { name: "React", level: "Comfortable" },
      { name: "Next.js", level: "Comfortable" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "APIs, authentication and data that hold up in production.",
    skills: [
      { name: "Node.js", level: "Comfortable" },
      { name: "Express", level: "Comfortable" },
      { name: "MongoDB", level: "Comfortable" },
      { name: "Better Auth", level: "Comfortable" },
      { name: "JWT", level: "Comfortable" },
      { name: "MySQL", level: "Working knowledge" },
      { name: "PostgreSQL", level: "Working knowledge" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "The workflow from first commit to live deployment.",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "Vercel", level: "Comfortable" },
      { name: "Figma", level: "Comfortable" },
      { name: "VS Code", level: "Comfortable" },
      { name: "PyCharm", level: "Working knowledge" },
      { name: "Visual Studio", level: "Working knowledge" },
      { name: "Netlify", level: "Working knowledge" },
    ],
  },
  {
    title: "Other Engineering",
    description: "Languages and systems beyond the web stack.",
    skills: [
      { name: "Python", level: "Working knowledge" },
      { name: "OpenCV", level: "Working knowledge" },
      { name: "YOLO", level: "Working knowledge" },
      { name: "Arduino / ESP32", level: "Working knowledge" },
      { name: "Odoo", level: "Working knowledge" },
      { name: "C", level: "Working knowledge" },
      { name: "C++", level: "Working knowledge" },
      { name: "C#", level: "Learning" },
      { name: "ASP.NET", level: "Learning" },
    ],
  },
];
