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
    <section id="education" className="relative py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text neon-text">
            Education
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <ScrollReveal key={index}>
                <div className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-primary border-4 border-background neon-glow animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 card-3d neon-glow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        {index === 0 ? (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        ) : (
                          <Award className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold gradient-text mb-2">{edu.degree}</h3>
                        <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{edu.period}</span>
                          <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                        <p className="text-foreground">{edu.description}</p>
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
