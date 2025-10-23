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
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text neon-text px-2">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex}>
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 card-3d neon-glow h-full">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 rounded-full text-xs sm:text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-pointer neon-glow animate-float"
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
