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
  {
    title: "Cybersecurity Intern",
    company: "ExcelR Edtech Pvt. Ltd.",
    period: "June - August 2024",
    achievements: [
      "Worked on identifying and mitigating web application vulnerabilities like XSS, SQL Injection, and CSRF",
      "Conducted security assessments and implemented encryption techniques to secure user data",
      "Strengthened understanding of network security, ethical hacking, and real-world cybersecurity practices",
    ],
  },
];

export const InternshipsSection = () => {
  return (
    <section id="internships" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text neon-text px-2">
            Internships
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {internships.map((internship, index) => (
              <ScrollReveal key={index}>
                <div className="relative pl-12 sm:pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 sm:left-3 md:left-4 top-4 sm:top-5 md:top-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary border-2 sm:border-3 md:border-4 border-background neon-glow animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-3d neon-glow">
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-2">{internship.title}</h3>
                        <p className="text-base sm:text-lg text-muted-foreground mb-1">{internship.company}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">{internship.period}</p>
                        
                        <div className="space-y-2">
                          {internship.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-sm sm:text-base text-foreground">{achievement}</p>
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
