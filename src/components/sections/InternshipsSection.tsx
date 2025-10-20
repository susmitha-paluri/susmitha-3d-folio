import { ScrollReveal } from "@/components/ScrollReveal";
import { Briefcase, TrendingUp } from "lucide-react";

const internships = [
  {
    title: "Full Stack Java Intern",
    company: "ExcelR Edtech Pvt. Ltd. (APSCHE)",
    period: "May - Jul 2025",
    achievements: [
      "Built REST APIs with Spring Boot & React integration",
      "Improved web performance by 60% through optimized API handling",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Genz Educate Wing",
    period: "Jan - Mar 2025",
    achievements: [
      "Designed modern responsive web layouts",
      "Enhanced user engagement by 35%",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "Elite Tech Intern",
    period: "Feb - Apr 2025",
    achievements: [
      "Built Java modules with OOPs principles",
      "Debugged code and improved efficiency by 40%",
    ],
  },
];

export const InternshipsSection = () => {
  return (
    <section id="internships" className="relative py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text neon-text">
            Internships
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <ScrollReveal key={index}>
                <div className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-primary border-4 border-background neon-glow animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-3d neon-glow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold gradient-text mb-2">{internship.title}</h3>
                        <p className="text-lg text-muted-foreground mb-1">{internship.company}</p>
                        <p className="text-sm text-muted-foreground mb-4">{internship.period}</p>
                        
                        <div className="space-y-2">
                          {internship.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
