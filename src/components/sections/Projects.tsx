import { ExternalLink, Github, Leaf, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PhytoGuard",
    year: "2025",
    description:
      "Full-Stack Plant Disease Detection Web App that helps farmers identify plant diseases through image analysis and AI-powered predictions.",
    icon: Leaf,
    features: [
      "Tailwind + JavaScript UI",
      "TensorFlow API for real-time predictions",
      "Optimized user flow and performance",
    ],
    tech: ["JavaScript", "Tailwind CSS", "TensorFlow", "REST API"],
    color: "coral",
  },
  {
    title: "MealMap",
    year: "2024",
    description:
      "Personalized Meal Recommendation System that provides tailored meal suggestions based on user preferences and dietary requirements.",
    icon: Utensils,
    features: [
      "Card-based responsive UI",
      "REST API integration for fast recommendations",
      "Lightweight navigation",
    ],
    tech: ["React", "REST API", "CSS", "Node.js"],
    color: "teal",
  },
];

const getIconBg = (color: string) => {
  switch (color) {
    case "coral":
      return "from-primary/20 to-primary/5 border-primary/20";
    case "teal":
      return "from-teal/20 to-teal/5 border-teal/20";
    default:
      return "from-primary/20 to-primary/5 border-primary/20";
  }
};

const getIconColor = (color: string) => {
  switch (color) {
    case "coral":
      return "text-primary";
    case "teal":
      return "text-teal";
    default:
      return "text-primary";
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world applications showcasing full-stack development capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getIconBg(project.color)} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`w-7 h-7 ${getIconColor(project.color)}`} />
                  </div>
                  <span className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full border border-border">
                    {project.year}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.color === 'coral' ? 'bg-primary' : 'bg-teal'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Actions */}
              <div className="p-6 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-accent text-muted-foreground rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
