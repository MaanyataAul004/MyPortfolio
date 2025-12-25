import { Briefcase, CheckCircle } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Experience</p>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Real-world impact through hands-on industry experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 hover-lift">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Logo Area */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-teal" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Full Stack Developer Intern
                    </h3>
                    <p className="text-primary font-medium">Jio Platforms Ltd.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-accent rounded-full border border-border">
                      Dec 2025 – Jan 2026
                    </span>
                    <span className="px-3 py-1 bg-teal/10 rounded-full text-teal border border-teal/20">
                      Winter Internship
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Contributed to full-stack development projects using modern technologies, 
                  focusing on performance optimization and clean code practices.
                </p>

                <ul className="space-y-3">
                  {[
                    "Built full-stack features using the MERN stack (MongoDB, Express, React, Node.js)",
                    "Developed responsive UI components and improved page load time significantly",
                    "Integrated REST APIs with clean, maintainable code architecture",
                    "Collaborated with cross-functional teams to deliver production-ready solutions",
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["MERN Stack", "React", "Node.js", "REST APIs", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
