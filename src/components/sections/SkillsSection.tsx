import { ScrollReveal } from "@/components/ScrollReveal";
import { Code2, Wrench, Lightbulb, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks & Technologies",
    icon: Server,
    skills: ["Spring Boot", "React", "Bootstrap"],
  },
  {
    title: "Core Concepts",
    icon: Lightbulb,
    skills: ["OOPs", "DSA", "SDLC", "OS", "CN"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Eclipse", "VS Code", "MySQL Workbench", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Problem Solving", "Adaptability", "Communication", "Creativity"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text neon-text">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex}>
              <div className="bg-card border border-border rounded-2xl p-6 card-3d neon-glow h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-pointer neon-glow animate-float"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
