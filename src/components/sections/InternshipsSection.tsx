import { ScrollReveal } from "@/components/ScrollReveal";
import { Briefcase, TrendingUp, Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import certFullstackJava from "@/assets/cert-fullstack-java.jpeg";
import certGenz1 from "@/assets/cert-genz-1.jpeg";
import certGenz2 from "@/assets/cert-genz-2.jpeg";
import certGenz3 from "@/assets/cert-genz-3.jpeg";
import certGenz4 from "@/assets/cert-genz-4.jpeg";
import certElite1 from "@/assets/cert-elite-1.jpeg";
import certElite2 from "@/assets/cert-elite-2.jpeg";
import certElite3 from "@/assets/cert-elite-3.jpeg";
import certCybersecurity from "@/assets/cert-cybersecurity.jpeg";

const internships = [
  {
    title: "Full Stack Java Intern",
    company: "ExcelR Edtech Pvt. Ltd. (APSCHE)",
    period: "May - Jul 2025",
    achievements: [
      "Built REST APIs with Spring Boot & React integration",
      "Improved web performance by 60% through optimized API handling",
    ],
    certificates: [certFullstackJava],
  },
  {
    title: "Web Developer Intern",
    company: "Genz Educate Wing",
    period: "Jan - Mar 2025",
    achievements: [
      "Designed modern responsive web layouts",
      "Enhanced user engagement by 35%",
    ],
    certificates: [certGenz1, certGenz2, certGenz3, certGenz4],
  },
  {
    title: "Java Developer Intern",
    company: "Elite Tech Intern",
    period: "Feb - Apr 2025",
    achievements: [
      "Built Java modules with OOPs principles",
      "Debugged code and improved efficiency by 40%",
    ],
    certificates: [certElite1, certElite2, certElite3],
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
    certificates: [certCybersecurity],
  },
];

export const InternshipsSection = () => {
  const [selectedInternship, setSelectedInternship] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all internship certificate images for instant popup opening
  useEffect(() => {
    internships.forEach(internship => {
      internship.certificates.forEach(certSrc => {
        const img = new Image();
        img.src = certSrc;
      });
    });
  }, []);

  const openModal = (index: number) => {
    setSelectedInternship(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedInternship(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedInternship !== null) {
      const totalImages = internships[selectedInternship].certificates.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (selectedInternship !== null) {
      const totalImages = internships[selectedInternship].certificates.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

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
                        
                        <div className="space-y-2 mb-4">
                          {internship.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                              <p className="text-sm sm:text-base text-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>

                        <Button
                          onClick={() => openModal(index)}
                          className="bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                        >
                          <Award className="w-4 h-4 mr-2" />
                          View Proof
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <Dialog open={selectedInternship !== null} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl w-[95vw] max-h-[75vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-2 border-primary/50 shadow-[0_0_30px_rgba(239,68,68,0.4)] p-0">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 text-primary hover:text-primary/80 transition-colors bg-background/80 rounded-full p-2 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedInternship !== null && (
              <div className="relative p-4 sm:p-8">
                {/* Certificate Image */}
                <div className="flex items-center justify-center">
                  <img
                    src={internships[selectedInternship].certificates[currentImageIndex]}
                    alt={`${internships[selectedInternship].title} Certificate ${currentImageIndex + 1}`}
                    className="w-auto max-w-full max-h-[70vh] h-auto rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.3)] mx-auto object-contain"
                  />
                </div>

                {/* Navigation Arrows */}
                {internships[selectedInternship].certificates.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 sm:p-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 sm:p-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {internships[selectedInternship].certificates.length > 1 && (
                  <div className="text-center mt-4">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {internships[selectedInternship].certificates.length}
                    </span>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
