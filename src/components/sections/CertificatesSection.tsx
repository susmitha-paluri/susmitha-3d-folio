import { ScrollReveal } from "@/components/ScrollReveal";
import { Award } from "lucide-react";

const certificates = [
  "Generative AI",
  "IoT (Internet of Things)",
  "Cybersecurity Fundamentals",
  "Cloud Computing",
  "Web Development",
  "Java Programming",
  "Full Stack Development",
  "AI Basics",
  "Data Analytics",
  "DBMS (Database Management)",
  "Python Programming",
  "C Programming",
  "Ethical Hacking",
  "SQL",
  "Problem-Solving Achievement",
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative py-20 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text neon-text">
            Certificates
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden card-3d neon-glow h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6">
                  <Award className="w-20 h-20 text-primary animate-float" />
                </div>
                <div className="p-4">
                  <p className="text-center font-semibold text-foreground">{cert}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
