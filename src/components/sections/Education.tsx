import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    institution: "Manipal University Jaipur",
    degree: "B.Tech in Computer Science",
    period: "2023 – 2027",
    details: "CGPA: 8.8",
    highlight: "Dean's List Awardee (Twice)",
    current: true,
  },
  {
    institution: "Delhi Public School, Sector-19 Faridabad",
    degree: "Class 12 (CBSE)",
    period: "2021 – 2023",
    details: "89.2%",
    highlight: "Gold Medal Awardee",
    current: false,
  },
  {
    institution: "Delhi Public School, Sector-19 Faridabad",
    degree: "Class 10 (CBSE)",
    period: "2019 – 2021",
    details: "94.2%",
    highlight: null,
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Education</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle mx-auto">
            A consistent track record of academic excellence and dedication
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-glow z-10" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                          {edu.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground mb-2">{edu.degree}</p>
                        <p className="text-primary font-medium">{edu.details}</p>
                        {edu.highlight && (
                          <div className="flex items-center gap-2 mt-3 text-sm">
                            <Award className="w-4 h-4 text-teal" />
                            <span className="text-teal font-medium">{edu.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
