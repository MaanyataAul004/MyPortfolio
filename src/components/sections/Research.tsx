import { BookOpen, Award, Brain, FileCheck } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide">Research</p>
          <h2 className="section-title">Published Work</h2>
          <p className="section-subtitle mx-auto">
            Contributing to the intersection of AI and healthcare through peer-reviewed research
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 hover-lift relative overflow-hidden">
            {/* IEEE Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full border border-teal/20">
                <Award className="w-4 h-4 text-teal" />
                <span className="text-sm font-medium text-teal">IEEE Published</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-teal" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-8 md:pt-0">
                <span className="text-sm text-muted-foreground">2025</span>
                <h3 className="font-heading font-semibold text-2xl text-foreground mt-1 mb-3">
                  CURA — Intelligent Clinical Assistant
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  An ML-powered system for preliminary diagnosis and smart clinical assistance. 
                  CURA generates structured medical reports and cross-verifies outcomes using 
                  references from standard medical textbooks, targeting AI-driven clinical 
                  decision support to reduce diagnostic workload and improve accuracy.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Brain, text: "ML-Powered Diagnosis" },
                    { icon: FileCheck, text: "Structured Reports" },
                    { icon: BookOpen, text: "Medical References" },
                    { icon: Award, text: "Peer-Reviewed" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Publication Info */}
                <div className="p-4 bg-accent/50 rounded-xl border border-border">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Publication:</span> IEEE Conference 2025
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Highlighting peer-reviewed technical rigor in AI-driven healthcare solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
