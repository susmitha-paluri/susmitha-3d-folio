import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import certIot from "@/assets/cert-iot.jpeg";
import certCloud from "@/assets/cert-cloud.jpeg";
import certCip from "@/assets/cert-cip.jpeg";
import certSaviynt from "@/assets/cert-saviynt.jpeg";
import certTechMahindra from "@/assets/cert-tech-mahindra.jpeg";
import certGfg from "@/assets/cert-gfg.jpeg";
import certPowerBi from "@/assets/cert-powerbi.jpeg";
import certForage from "@/assets/cert-forage.jpeg";
import certGenAi1 from "@/assets/cert-genai-1.jpeg";
import certGenAi2 from "@/assets/cert-genai-2.jpeg";
import certGenAi3 from "@/assets/cert-genai-3.jpeg";
import certGenAi4 from "@/assets/cert-genai-4.jpeg";
import certGenAi5 from "@/assets/cert-genai-5.jpeg";
import certGenAi6 from "@/assets/cert-genai-6.jpeg";
import certGenAi7 from "@/assets/cert-genai-7.jpeg";
import certGenAi8 from "@/assets/cert-genai-8.jpeg";
import certGenAi9 from "@/assets/cert-genai-9.jpeg";
import certGenAi10 from "@/assets/cert-genai-10.jpeg";

// Individual certificates
const individualCertificates = [{
  name: "Introduction to Internet of Things",
  image: certIot
}, {
  name: "Introduction to Critical Infrastructure Protection",
  image: certCip
}, {
  name: "Saviynt Security for AI Age",
  image: certSaviynt
}, {
  name: "Cybersecurity Course Completion – Tech Mahindra",
  image: certTechMahindra
}, {
  name: "GeeksforGeeks DSA 160 Days Completion",
  image: certGfg
}, {
  name: "Power BI Workshop – Tech Tip 24",
  image: certPowerBi
}, {
  name: "Cybersecurity Simulation – Forage",
  image: certForage
}, {
  name: "Google Cloud Computing Foundations Certificate",
  image: certCloud
}];

// Grouped certificates
const groupedCertificates = [{
  title: "Google Generative AI",
  previewImage: certGenAi1,
  certificates: [{
    name: "Gen AI Agents: Transform Your Organization",
    image: certGenAi1
  }, {
    name: "Gen AI Apps: Transform Your Work",
    image: certGenAi2
  }, {
    name: "Gen AI: Navigate the Landscape",
    image: certGenAi3
  }, {
    name: "Gen AI: Unlock Foundational Concepts",
    image: certGenAi4
  }, {
    name: "Gen AI: Beyond the Chatbot",
    image: certGenAi5
  }, {
    name: "Applying AI Principles with Google Cloud",
    image: certGenAi6
  }, {
    name: "Prompt Design in Vertex AI",
    image: certGenAi7
  }, {
    name: "Introduction to Responsible AI",
    image: certGenAi8
  }, {
    name: "Introduction to Large Language Models",
    image: certGenAi9
  }, {
    name: "Introduction to Generative AI",
    image: certGenAi10
  }]
}];
const IndividualCertificate = ({
  cert
}: {
  cert: typeof individualCertificates[0];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Preload image for instant popup opening
  useEffect(() => {
    const img = new Image();
    img.src = cert.image;
  }, [cert.image]);
  
  return <>
      <ScrollReveal>
        <div className="bg-card border border-border rounded-xl overflow-hidden card-3d neon-glow group w-full max-w-[250px]">
          <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
            <img src={cert.image} alt={cert.name} className="w-full h-auto object-cover group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500" />
          </div>
          <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-center font-semibold text-xs mb-2 text-foreground glow-text">
              {cert.name}
            </h3>
            <Button onClick={() => setIsOpen(true)} className="w-full text-xs py-2 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300">
              View Full Certificate
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[75vh] overflow-y-auto bg-background/95 backdrop-blur-lg border-2 border-primary shadow-[0_0_30px_rgba(239,68,68,0.5)] p-0">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 text-primary hover:text-primary/80 transition-colors bg-background/80 rounded-full p-2 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            <X className="w-6 h-6" />
          </button>
          <div className="p-4 sm:p-8 flex flex-col items-center">
            <img src={cert.image} alt={cert.name} className="w-auto max-w-full max-h-[70vh] h-auto rounded-lg mx-auto object-contain" />
            <p className="text-center mt-4 text-base sm:text-lg font-semibold text-foreground glow-text">
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
  
  // Preload all certificate images for instant navigation
  useEffect(() => {
    group.certificates.forEach(cert => {
      const img = new Image();
      img.src = cert.image;
    });
  }, [group.certificates]);
  
  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % group.certificates.length);
  };
  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + group.certificates.length) % group.certificates.length);
  };
  return <>
      <ScrollReveal>
        <div className="bg-card border border-border rounded-xl overflow-hidden card-3d neon-glow group w-full max-w-[250px]">
          <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
            <img src={group.previewImage} alt={group.title} className="w-full h-auto object-cover group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-500" />
          </div>
          <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-center font-semibold text-xs mb-1 text-foreground glow-text">
              {group.title}
            </h3>
            <p className="text-center text-xs text-muted-foreground mb-2">
              {group.certificates.length} Certificates
            </p>
            <Button onClick={() => setIsOpen(true)} className="w-full text-xs py-2 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] transition-all duration-300">
              View All Certificates
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[75vh] overflow-y-auto bg-background/95 backdrop-blur-lg border-2 border-primary shadow-[0_0_30px_rgba(239,68,68,0.5)] p-0">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 text-primary hover:text-primary/80 transition-colors bg-background/80 rounded-full p-2 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative p-4 sm:p-8">
            <div className="flex justify-center">
              <img 
                src={group.certificates[currentIndex].image} 
                alt={group.certificates[currentIndex].name} 
                className="w-auto max-w-full max-h-[70vh] h-auto rounded-lg mx-auto object-contain" 
              />
            </div>
            
            {group.certificates.length > 1 && <>
                <button onClick={prevImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 sm:p-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button onClick={nextImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 sm:p-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>}

            <div className="text-center mt-4">
              <p className="text-base sm:text-lg font-semibold text-foreground glow-text">
                {group.certificates[currentIndex].name}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
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

        {/* Row 1: First 3 Certificates */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {individualCertificates.slice(0, 3).map((cert, index) => <IndividualCertificate key={index} cert={cert} />)}
          </div>
        </div>

        {/* Row 2: Next 3 Certificates */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {individualCertificates.slice(3, 6).map((cert, index) => <IndividualCertificate key={index + 3} cert={cert} />)}
          </div>
        </div>

        {/* Row 3: Last 2 Individual + Grouped Certificate */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {individualCertificates.slice(6, 8).map((cert, index) => <IndividualCertificate key={index + 6} cert={cert} />)}
            {groupedCertificates.map((group, index) => <GroupedCertificate key={`group-${index}`} group={group} />)}
          </div>
        </div>
      </div>
    </section>;
};