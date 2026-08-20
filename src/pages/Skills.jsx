import { skills } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and tools I use"
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h3>{skill.name}</h3>

              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
