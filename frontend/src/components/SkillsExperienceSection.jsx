import Skills from "./Skills";
import Experience from "./Experience";

export default function SkillsExperienceSection({ skills, education, experience, profile }) {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <Skills skills={skills} education={education} />
        <div id="experience">
          <Experience experience={experience} profile={profile} />
        </div>
      </div>
    </section>
  );
}
