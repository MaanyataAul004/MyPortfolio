import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Maanyata Aul | AI/ML Computer Science Student & Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Maanyata Aul - AI/ML focused Computer Science undergraduate, IEEE published researcher, and Full-Stack Developer. Dean's List awardee at Manipal University Jaipur."
        />
        <meta
          name="keywords"
          content="Maanyata Aul, AI ML developer, Computer Science, Full Stack Developer, React Developer, Portfolio, IEEE researcher"
        />
        <link rel="canonical" href="https://maanyataaul.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Services />
          <Achievements />
          <Projects />
          <Research />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
