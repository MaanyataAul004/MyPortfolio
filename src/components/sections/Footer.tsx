import { Heart, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/maanyata-aul-79103321b", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/MaanyataAul004", label: "GitHub" },
    { icon: Mail, href: "mailto:Maanyata.aul1302@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-darker border-t border-border py-16">
      <div className="container-narrow mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
              Maanyata<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Crafting clean code and beautiful designs. Building the future, one project at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Let's Connect</h4>
            <p className="text-muted-foreground mb-2">
              Maanyata.aul1302@gmail.com
            </p>
            <p className="text-muted-foreground">
              +91 8840688215
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Maanyata Aul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
