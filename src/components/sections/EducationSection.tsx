import { ScrollReveal } from "@/components/ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in CSE (Cyber Security)",
    institution: "Prakasam Engineering College, Kandukuru",
    period: "2022 - Present",
    cgpa: "8.4",
    description: "Learned Web Development, Network Security, DBMS, Cloud Computing. Active participant in GFG DSA Challenge & Coding Club events.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "MSR Junior College, Kanigiri",
    period: "2020 - 2022",
    cgpa: "8.1",
    description: "Strengthened logical and quantitative reasoning through physics & math.",
  },
  {
    degree: "SSC",
    institution: "ZPHS Talluru, Kanigiri",
    period: "2019 - 2020",
    cgpa: "10.0",
    description: "Top performer in academics and extracurricular activities.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text neon-text px-2">
            Education
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {education.map((edu, index) => (
              <ScrollReveal key={index}>
                <div className="relative pl-12 sm:pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 sm:left-3 md:left-4 top-4 sm:top-5 md:top-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary border-2 sm:border-3 md:border-4 border-background neon-glow animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-3d neon-glow">
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        {index === 0 ? (
                          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        ) : (
                          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-2">{edu.degree}</h3>
                        <p className="text-base sm:text-lg text-muted-foreground mb-1">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                          <span>{edu.period}</span>
                          <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                        <p className="text-sm sm:text-base text-foreground">{edu.description}</p>
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
