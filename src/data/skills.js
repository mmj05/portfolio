import { Monitor, Server, Settings, BookOpen } from 'lucide-react';

export const skills = [
  {
    category: "Frontend",
    icon: <Monitor size={24} />,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    technologies: ["Spring Boot", "Java", "SQL", "PostgreSQL", "MySQL"]
  },
  {
    category: "Additional Skills",
    icon: <Settings size={24} />,
    technologies: ["Git", "Unit Testing", "Restful APIs", "Docker", "CI/CD", "Linux"]
  },
  {
    category: "Learning",
    icon: <BookOpen size={24} />,
    technologies: ["Machine Learning", "Cloud Architecture", "System Design", "API Design", "AWS"]
  }
]; 