import { Code2, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "End-to-end full-stack web applications with modern stacks including React, Django, and Node.js. From database design to deployment-ready solutions.",
    features: ["Custom Web Apps", "API Development", "Database Design", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Clean, responsive, aesthetic UI focused on usability and performance. Creating intuitive interfaces that users love to interact with.",
    features: ["Responsive Design", "UI/UX Focus", "Modern Aesthetics", "Accessibility"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Services</p>
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle mx-auto">
            Bringing ideas to life with thoughtful design and solid engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full border border-border"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
