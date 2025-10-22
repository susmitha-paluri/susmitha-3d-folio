import { Download, ArrowDown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/susmitha-paluri", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/susmitha-paluri", label: "GitHub" },
  { 
    icon: function GeeksForGeeks() {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      );
    },
    url: "https://www.geeksforgeeks.org/user/psusmite0xx/",
    label: "GeeksforGeeks"
  },
  {
    icon: function CodeChef() {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.219 7.095h1.378l6.078 9.485V7.095h1.329v10.364h-1.329l-6.127-9.56v9.56H11.22V7.095zm-8.55.001h1.675l3.118 8.617 3.117-8.617h1.675l-4.176 10.838h-.233L2.669 7.096z"/>
        </svg>
      );
    },
    url: "https://www.codechef.com/users/happy_ace_39",
    label: "CodeChef"
  },
  {
    icon: function PortSwigger() {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.778c-.124 5.736-3.142 8.654-8.595 8.654h-.87l-1.578 4.743-2.363-.001 1.575-4.742h-.87c-1.297 0-1.933-.709-1.933-1.913 0-.247.034-.524.105-.831l1.806-7.366h2.363l-1.653 6.731c-.053.216-.079.408-.079.575 0 .437.203.656.609.656h.87l1.653-6.731 2.363-.001-1.653 6.731c-.053.216-.079.408-.079.575 0 .437.203.656.609.656h.87c3.865 0 5.771-1.946 5.865-5.836l2.36.001z"/>
        </svg>
      );
    },
    url: "https://portswigger.net/web-security/dashboard",
    label: "PortSwigger"
  },
  { icon: Instagram, url: "https://www.instagram.com/susmitha_reddy_paluri?igsh=b3hzY2ttZTg3cGdy", label: "Instagram" },
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
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-rotate-6 neon-glow"
                aria-label={social.label}
              >
                <IconComponent className="w-5 h-5" />
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
