import { ScrollReveal } from "@/components/ScrollReveal";
import certIot from "@/assets/cert-iot.jpeg";
import certCloud1 from "@/assets/cert-cloud-1.jpeg";
import certCloud2 from "@/assets/cert-cloud-2.jpeg";
import certCloud3 from "@/assets/cert-cloud-3.jpeg";
import certCip from "@/assets/cert-cip.jpeg";
import certSaviynt from "@/assets/cert-saviynt.jpeg";
const certificates = [{
  name: "Introduction to Internet of Things",
  image: certIot
}, {
  name: "Google Cloud Computing Certifications",
  image: certCloud1
}, {
  name: "Google Cloud AI & Gen AI",
  image: certCloud2
}, {
  name: "Google Cloud Professional ML Engineer",
  image: certCloud3
}, {
  name: "Introduction to Critical Infrastructure Protection",
  image: certCip
}, {
  name: "Saviynt Identity Security for AI Age",
  image: certSaviynt
}];
export const CertificatesSection = () => {
  return <section id="certificates" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text neon-text px-2">
            Certificates
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert, index) => <ScrollReveal key={index}>
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden card-3d neon-glow h-full hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5">
                  <p className="text-center font-semibold text-sm sm:text-base text-foreground">{cert.name}</p>
                </div>
              </div>
            </ScrollReveal>)}
        </div>
      </div>
    </section>;
};