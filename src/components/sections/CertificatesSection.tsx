import { ScrollReveal } from "@/components/ScrollReveal";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import certIot from "@/assets/cert-iot.jpeg";
import certCloud1 from "@/assets/cert-cloud-1.jpeg";
import certCloud2 from "@/assets/cert-cloud-2.jpeg";
import certCloud3 from "@/assets/cert-cloud-3.jpeg";
import certCip from "@/assets/cert-cip.jpeg";
import certSaviynt from "@/assets/cert-saviynt.jpeg";

const certificateGroups = [
  {
    title: "Full Stack Java Internship – ExcelR with APSCHE",
    certificates: [
      { name: "Introduction to Internet of Things", image: certIot }
    ]
  },
  {
    title: "Web Development Internship",
    certificates: [
      { name: "Google Cloud Computing Certifications", image: certCloud1 },
      { name: "Google Cloud AI & Gen AI", image: certCloud2 },
      { name: "Google Cloud Professional ML Engineer", image: certCloud3 }
    ]
  },
  {
    title: "Java Development Internship",
    certificates: [
      { name: "Introduction to Critical Infrastructure Protection", image: certCip },
      { name: "Saviynt Identity Security for AI Age", image: certSaviynt }
    ]
  }
];
const CertificateGroup = ({ group, index }: { group: typeof certificateGroups[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden card-3d neon-glow">
          <CollapsibleTrigger className="w-full p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/15 hover:to-primary/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-left glow-text">
                {group.title}
              </h3>
              <ChevronDown 
                className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-left">
              {group.certificates.length} {group.certificates.length === 1 ? 'Certificate' : 'Certificates'}
            </p>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {group.certificates.map((cert, certIndex) => (
                <div 
                  key={certIndex}
                  className="group relative bg-background border border-border rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5">
                    <p className="text-center font-semibold text-xs sm:text-sm text-foreground glow-text">
                      {cert.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </ScrollReveal>
  );
};

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text neon-text px-2">
            Certificates
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {certificateGroups.map((group, index) => (
            <CertificateGroup key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};