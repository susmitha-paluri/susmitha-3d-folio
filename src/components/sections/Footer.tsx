export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-wrap gap-6 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors hover:neon-text cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p className="text-center text-muted-foreground">
            © 2025 Paluri Susmitha | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
