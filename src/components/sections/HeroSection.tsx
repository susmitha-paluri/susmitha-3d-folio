import { Download, ArrowDown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import codechefIcon from "@/assets/codechef-icon.png";
import portswiggerIcon from "@/assets/portswigger-icon.png";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/susmitha-paluri", label: "LinkedIn", type: "lucide" },
  { icon: Github, url: "https://github.com/susmitha-paluri", label: "GitHub", type: "lucide" },
  { 
    iconUrl: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    url: "https://www.geeksforgeeks.org/user/psusmite0xx/",
    label: "GeeksforGeeks",
    type: "image"
  },
  {
    iconUrl: portswiggerIcon,
    url: "https://www.codechef.com/users/happy_ace_39",
    label: "CodeChef",
    type: "image"
  },
  {
    iconUrl: codechefIcon,
    url: "https://portswigger.net/web-security/dashboard",
    label: "PortSwigger",
    type: "image"
  },
  { icon: Instagram, url: "https://www.instagram.com/susmitha_reddy_paluri?igsh=b3hzY2ttZTg3cGdy", label: "Instagram", type: "lucide" },
];

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement("a");
    link.href = "/Susmitha_Paluri_Resume.pdf";
    link.download = "Susmitha_Paluri_Resume.pdf";
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="animate-float">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary neon-glow animate-glow-pulse">
            <img
              src={profilePhoto}
              alt="Paluri Susmitha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text neon-text">
          Susmitha Paluri
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Aspiring Security Engineer | Full Stack Developer | Web Developer | Java Developer | AI & Cybersecurity Enthusiast
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow group"
          >
            <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-glow"
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={downloadResume}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 neon-glow"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          {socialLinks.map((social, index) => {
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] rounded-lg bg-card border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:border-red-500 overflow-hidden p-1"
                aria-label={social.label}
              >
                {social.type === "image" ? (
                  <img 
                    src={social.iconUrl} 
                    alt={social.label}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <social.icon className="w-5 h-5" />
                )}
              </a>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};
