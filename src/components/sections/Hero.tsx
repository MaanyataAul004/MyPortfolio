import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-dark.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Decorative geometric elements */}
      <div className="absolute top-24 right-[15%] animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-16 h-16 rounded-full border-2 border-teal opacity-60" />
        <div className="w-3 h-3 rounded-full bg-primary absolute -right-2 top-0" />
      </div>
      <div className="absolute top-36 right-[10%] animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-8 h-8 rounded-full bg-teal" />
      </div>

      {/* Main content */}
      <div className="container-wide mx-auto px-6 min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full pt-20 md:pt-0">
          
          {/* Left side - Main intro */}
          <div className="z-10 flex-1 max-w-xxl text-center md:text-left order-2 md:order-1">
            <p className="text-foreground text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-2 animate-fade-in">
              Hi,
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold animate-fade-in-delay-1">
              I'm <span className="text-primary">Maanyata Aul</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 animate-fade-in-delay-2">
              Full-Stack & AI/ML Developer
            </p>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto md:mx-0 leading-relaxed animate-fade-in-delay-2">
              Based in India. Looking for a developer to build your project with clean code and beautiful design? Let's make it happen.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-8 animate-fade-in-delay-3">

              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                Hire Me
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              
            </div>

            {/* Social links */}
            <div className="flex justify-center md:justify-start gap-4 mt-8 animate-fade-in-delay-3">
              <a
                href="https://www.linkedin.com/in/maanyata-aul-79103321b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/MaanyataAul004"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:Maanyata.aul1302official@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Circular Profile Image */}
          <div className="relative flex justify-center order-1 md:order-2 -mt-6 md:-mt-14 animate-fade-in">

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">


              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              
              {/* Profile image container */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-muted shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Maanyata Aul - AI/ML Developer"
                  className="w-full h-full object-cover object-[60%_45%] grayscale-[15%] contrast-105 brightness-95"


                />
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl -z-10" />

            </div>
          </div>
        </div>
      </div>
      {/* Let's Chat floating button */}
      <button 
        onClick={() => scrollToSection("#contact")}
        className="fixed bottom-8 right-8 flex items-center gap-2 bg-card border border-border px-4 py-3 rounded-full hover:border-primary hover:text-primary transition-all z-50 group"
      >
        <span className="text-sm font-medium">Let's Chat</span>
        <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center group-hover:bg-primary transition-colors">
          <MessageCircle size={16} className="text-background" />
        </div>
      </button>
    </section>
  );
};
