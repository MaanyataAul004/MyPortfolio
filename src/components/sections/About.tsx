import { Code, Palette, Sparkles, Target } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI/ML Focus",
    description: "Specializing in intelligent systems and machine learning applications",
  },
  {
    icon: Code,
    title: "Full-Stack Dev",
    description: "End-to-end development from database to beautiful frontends",
  },
  {
    icon: Palette,
    title: "UI Excellence",
    description: "Creating clean, responsive, and user-centric interfaces",
  },
  {
    icon: Target,
    title: "Dean's List",
    description: "Academic excellence recognized twice for outstanding performance",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">About Me</p>
          <h2 className="section-title">Full-Stack Web Developer</h2>
          <p className="section-subtitle mx-auto">
            A Computer Science undergraduate combining technical expertise with creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
            <p>
              I’m{" "}
              <span className="font-semibold text-foreground">Maanyata Aul</span>, a CS student at{" "}
              <span className="font-semibold text-foreground">
                Manipal University Jaipur
              </span>
              , who loves crafting simple, responsive web apps and exploring how technology can solve real,
              everyday problems.
            </p>

            <p className="italic text-muted-foreground"> <span className="font-semibold text-foreground">MERN </span> on one side,<span className="font-semibold text-foreground"> Django </span> on the other — I like to keep my stack options open, basically, I enjoy building both the <em>pretty parts</em> and the{" "}
              <em>functional parts</em> of a product.
            </p>

            <p>
              I care about{" "}
              <span className="font-semibold text-foreground">
                clean code, good structure, and tiny details
              </span>{" "}
              that make an interface feel smooth and intuitive. I’ve been on the{" "}
              <span className="font-semibold text-foreground">
                Dean’s List (twice)
              </span>
              , which mostly means I like staying consistent, curious, and a little obsessed with doing
              things well.
            </p>

            <p>
              Sometimes, I switch from builder mode to{" "}
              <span className="font-semibold text-foreground"> research mode, </span>{" "}including an{" "}
              <span className="font-semibold text-foreground">
                IEEE-published paper
              </span>{" "}
              on an intelligent clinical assistant, because it’s fun to slow down, think deeply, and see
              ideas take shape not just in code, but on paper too.
            </p>

            <p className="italic border-l-2 border-primary pl-4 text-muted-foreground">
              Mostly building. Occasionally researching. Always learning.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

      