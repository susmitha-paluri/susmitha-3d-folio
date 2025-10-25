import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import certIot from "@/assets/cert-iot.jpeg";
import certCloud1 from "@/assets/cert-cloud-1.jpeg";
import certCloud2 from "@/assets/cert-cloud-2.jpeg";
import certCloud3 from "@/assets/cert-cloud-3.jpeg";
import certCip from "@/assets/cert-cip.jpeg";
import certSaviynt from "@/assets/cert-saviynt.jpeg";
import certFullstackJava from "@/assets/cert-fullstack-java.jpeg";
import certCybersecurity from "@/assets/cert-cybersecurity.jpeg";
import certElite1 from "@/assets/cert-elite-1.jpeg";
import certElite2 from "@/assets/cert-elite-2.jpeg";
import certElite3 from "@/assets/cert-elite-3.jpeg";
import certGenz1 from "@/assets/cert-genz-1.jpeg";
import certGenz2 from "@/assets/cert-genz-2.jpeg";
import certGenz3 from "@/assets/cert-genz-3.jpeg";
import certGenz4 from "@/assets/cert-genz-4.jpeg";

// Individual certificates
const individualCertificates = [{
  name: "Introduction to Internet of Things",
  image: certIot
}, {
  name: "Full Stack Java Development",
  image: certFullstackJava
}, {
  name: "Cybersecurity Fundamentals",
  image: certCybersecurity
}, {
  name: "Critical Infrastructure Protection",
  image: certCip
}, {
  name: "Saviynt Identity Security for AI Age",
  image: certSaviynt
}, {
  name: "Elite Tech Java Development",
  image: certElite1
}];

// Grouped certificates
const groupedCertificates = [{
  title: "Google Cloud Computing Series",
  previewImage: certCloud1,
  certificates: [{
    name: "Google Cloud Computing Foundations",
    image: certCloud1
  }, {
    name: "Google Cloud AI & Gen AI",
    image: certCloud2
  }, {
    name: "Google Cloud Professional ML Engineer",
    image: certCloud3
  }]
}, {
  title: "Generative AI Specialization",
  previewImage: certGenz1,
  certificates: [{
    name: "Generative AI Fundamentals",
    image: certGenz1
  }, {
    name: "Advanced GenAI Applications",
    image: certGenz2
  }, {
    name: "GenAI for Business",
    image: certGenz3
  }, {
    name: "GenAI Ethics & Best Practices",
    image: certGenz4
  }]
}];
const IndividualCertificate = ({
  cert
}: {
  cert: typeof individualCertificates[0];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <ScrollReveal>
        <div className="bg-card border border-border rounded-xl overflow-hidden card-3d neon-glow group">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-center font-semibold text-sm mb-3 text-foreground glow-text">
              {cert.name}
            </h3>
            <Button onClick={() => setIsOpen(true)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300">
              View Full Certificate
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] bg-background/95 backdrop-blur-lg border-2 border-primary shadow-[0_0_30px_rgba(239,68,68,0.5)] p-0">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 text-primary hover:text-primary/80 transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="p-4">
            <img src={cert.image} alt={cert.name} className="w-full h-auto rounded-lg" />
            <p className="text-center mt-4 text-lg font-semibold text-foreground glow-text">
              {cert.name}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
const GroupedCertificate = ({
  group
}: {
  group: typeof groupedCertificates[0];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % group.certificates.length);
  };
  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + group.certificates.length) % group.certificates.length);
  };
  return <>
      <ScrollReveal>
        <div className="bg-card border border-border rounded-xl overflow-hidden card-3d neon-glow group">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={group.previewImage} alt={group.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-center font-semibold text-sm mb-2 text-foreground glow-text">
              {group.title}
            </h3>
            <p className="text-center text-xs text-muted-foreground mb-3">
              {group.certificates.length} Certificates
            </p>
            <Button onClick={() => setIsOpen(true)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300">
              View All Certificates
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] bg-background/95 backdrop-blur-lg border-2 border-primary shadow-[0_0_30px_rgba(239,68,68,0.5)] p-0">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 text-primary hover:text-primary/80 transition-colors">
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative p-4">
            <img src={group.certificates[currentIndex].image} alt={group.certificates[currentIndex].name} className="w-full h-auto rounded-lg" />
            
            {group.certificates.length > 1 && <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>}

            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-foreground glow-text">
                {group.certificates[currentIndex].name}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {currentIndex + 1} / {group.certificates.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export const CertificatesSection = () => {
  return <section id="certificates" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text neon-text px-2">
            Certificates
          </h2>
        </ScrollReveal>

        {/* Individual Certificates */}
        <div className="mb-12">
          <ScrollReveal>
            
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualCertificates.map((cert, index) => <IndividualCertificate key={index} cert={cert} />)}
          </div>
        </div>

        {/* Grouped Certificates */}
        <div>
          <ScrollReveal>
            
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {groupedCertificates.map((group, index) => <GroupedCertificate key={index} group={group} />)}
          </div>
        </div>
      </div>
    </section>;
};