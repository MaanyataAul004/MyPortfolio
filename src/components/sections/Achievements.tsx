import { Award, BookOpen, Users, Heart } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Dean's List Awardee",
    subtitle: "Twice",
    description: "Recognized for academic excellence in B.Tech Computer Science at Manipal University Jaipur",
    color: "coral",
  },
  {
    icon: BookOpen,
    title: "IEEE Research Paper",
    subtitle: "Published",
    description: "CURA — Intelligent Clinical Assistant, a peer-reviewed publication on AI in healthcare",
    color: "teal",
  },
  {
    icon: Users,
    title: "ACM-SIGAI Team Lead",
    subtitle: "15+ Events",
    description: "Organized and led technical events with 200+ participants at university chapter",
    color: "coral",
  },
  {
    icon: Heart,
    title: "MUJ Blood Donation Camp",
    subtitle: "Executive Member",
    description: "Coordinated large-scale campus blood donation operations and volunteer activities",
    color: "teal",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "coral":
      return "from-primary/20 to-primary/5 border-primary/20 text-primary";
    case "teal":
      return "from-teal/20 to-teal/5 border-teal/20 text-teal";
    default:
      return "from-primary/20 to-primary/5 border-primary/20 text-primary";
  }
};

export const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Recognition</p>
          <h2 className="section-title">Achievements & Leadership</h2>
          <p className="section-subtitle mx-auto">
            Beyond academics—making an impact through leadership and community engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className="glass-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getColorClasses(item.color)} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {item.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent rounded-full text-muted-foreground border border-border">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
