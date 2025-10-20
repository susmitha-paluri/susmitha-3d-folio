import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bricks Breaker Game",
    stack: "HTML, CSS, JavaScript",
    summary: "Classic arcade-style game with paddle control, scoring, and level system.",
    description: "Built an interactive Bricks Breaker game featuring smooth paddle controls, dynamic brick layouts, scoring system, multiple difficulty levels, and responsive sound effects. The game includes power-ups, level progression, and a high-score leaderboard.",
    github: "https://github.com/susmitha-paluri/Bricks-Game.git",
  },
  {
    title: "Tic Tac Toe Game",
    stack: "HTML, CSS, JavaScript",
    summary: "Two-player mode with dynamic win/draw detection and reset option.",
    description: "Developed a classic Tic Tac Toe game with smooth animations, intelligent win detection algorithm, draw condition handling, and instant reset functionality. Features include turn indicators, winning highlight animations, and a clean, modern UI.",
    github: "https://github.com/susmitha-paluri/TicTocToe-game.git",
  },
  {
    title: "Number Guessing Game",
    stack: "HTML, CSS, JavaScript",
    summary: "Fun guessing game with random number generation and limited attempts.",
    description: "Created an engaging number guessing game with randomized number generation, attempt tracking, real-time feedback system providing 'higher' or 'lower' hints, score calculation based on attempts, and difficulty level selection. Includes victory and game-over animations.",
    github: "https://github.com/susmitha-paluri/NumberGuessingGame.git",
  },
  {
    title: "Real Estate Website",
    stack: "React, HTML, CSS, JavaScript",
    summary: "Real-estate platform with advanced property filters and location-based search.",
    description: "Built a comprehensive real estate platform featuring advanced filtering (price, location, property type, amenities), interactive property cards with image galleries, detailed property pages, location-based search with map integration, responsive design for all devices, and optimized performance. Achieved +40% navigation efficiency and improved UI consistency.",
    github: "https://github.com/susmitha-paluri/Real-Estate-project.git",
  },
  {
    title: "Attendance Management System",
    stack: "Java, MySQL",
    summary: "Secure CRUD-based system managing student details and attendance.",
    description: "Developed a robust Student Attendance Management System with secure authentication, complete CRUD operations for student records, attendance tracking with date-time stamps, automated report generation, data validation to prevent errors, and MySQL database integration. Reduced manual errors by 70% and streamlined the attendance process.",
    github: "https://github.com/susmitha-paluri/Attendance-Mangement-System.git",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text neon-text">
            Projects
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
              <div className="bg-card border border-border rounded-2xl p-6 card-3d neon-glow h-full flex flex-col">
                <h3 className="text-2xl font-bold gradient-text mb-3">{project.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{project.stack}</p>
                <p className="text-foreground mb-6 flex-grow">{project.summary}</p>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex-1 border-primary hover:bg-primary hover:text-primary-foreground neon-glow"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Repository
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-sm border-border">
          <DialogHeader>
            <DialogTitle className="text-3xl gradient-text">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-lg text-primary font-semibold">
              {selectedProject?.stack}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <p className="text-foreground leading-relaxed">{selectedProject?.description}</p>
            
            <Button
              onClick={() => window.open(selectedProject?.github, "_blank")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
