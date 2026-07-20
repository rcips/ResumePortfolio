import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsExperienceSection from "./components/SkillsExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import usePortfolioData from "./hooks/usePortfolioData";

export default function App() {
  const { profile, experience, skills, education, projects } = usePortfolioData();

  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <Hero profile={profile} />
      <Projects projects={projects} />
      <SkillsExperienceSection skills={skills} education={education} experience={experience} profile={profile} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}
