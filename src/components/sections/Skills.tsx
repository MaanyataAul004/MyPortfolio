const skillCategories = [
  {
    title: "Frontend",
    color: "coral",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "teal",
    skills: ["Django", "Python", "REST APIs", "Node.js"],
  },
  {
    title: "Databases",
    color: "coral",
    skills: ["SQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Core CS",
    color: "teal",
    skills: ["Data Structures", "Algorithms", "OOP", "System Design"],
  },
  {
    title: "Tools",
    color: "coral",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "coral":
      return "bg-primary/10 text-primary";
    case "teal":
      return "bg-teal/10 text-teal";
    default:
      return "bg-primary/10 text-primary";
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Skills</p>
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-subtitle mx-auto">
            A versatile toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-pill ${getColorClasses(category.color)}`}
                  >
                    {skill}
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
