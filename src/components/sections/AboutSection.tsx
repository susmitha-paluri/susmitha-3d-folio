import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, User } from "lucide-react";
export const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Susmitha_Paluri_Resume.pdf";
    link.download = "Susmitha_Paluri_Resume.pdf";
    link.click();
  };
  return <section id="about" className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text neon-text">
            About Me
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 card-3d neon-glow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                I'm <span className="gradient-text font-semibold">Paluri Susmitha</span>, an enthusiastic and detail-oriented developer with a deep passion for cybersecurity, full-stack development, and AI. I believe in continuous learning, problem-solving, and creating impactful web experiences.
              </p>
            </div>

            <div className="flex gap-4 justify-center mt-8">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                See More About Me
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-border">
          <DialogHeader>
            <DialogTitle className="text-3xl gradient-text">More About Paluri Susmitha</DialogTitle>
            <DialogDescription className="text-lg">
              My journey, goals, and achievements
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">My Journey</h3>
              <p className="text-foreground leading-relaxed">
                From achieving a perfect CGPA in my school years to pursuing B.Tech in Cyber Security at Prakasam Engineering College, my journey has been driven by curiosity and passion for technology. I've participated in numerous coding challenges, hackathons, and workshops that have shaped my problem-solving mindset.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Goals & Vision</h3>
              <p className="text-foreground leading-relaxed">
                My goal is to become a leading Security Engineer, contributing to building secure, scalable, and innovative web applications. I aim to blend my expertise in full-stack development with cybersecurity to create solutions that protect users and their data.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Achieved 10.0 CGPA in SSC and 8.1 CGPA in Intermediate</li>
                <li>Currently maintaining 8.4 CGPA in B.Tech (Cyber Security)</li>
                <li>Completed multiple internships in Full Stack, Web Development, and Java</li>
                <li>Active participant in GFG DSA Challenge and Coding Club events</li>
                <li>Earned 15+ certifications in various technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Interests</h3>
              <p className="text-foreground leading-relaxed">
                Beyond coding, I'm passionate about exploring new technologies, participating in CTF competitions, reading about AI advancements, and contributing to open-source projects. I believe in sharing knowledge and helping others grow in their tech journey.
              </p>
            </div>


            <div className="flex justify-center mt-8">
              <Button size="lg" onClick={downloadResume} className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};