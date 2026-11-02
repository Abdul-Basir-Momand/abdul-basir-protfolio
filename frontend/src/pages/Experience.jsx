import { experiences } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";

export default function Experience() {
  return (
    <section className="section experience-section">
      <div className="container">
        <SectionTitle title="Experience" subtitle="My professional journey" />

        <div className="timeline">
          {experiences.map((experience) => (
            <div className="experience-item" key={experience.id}>
              {/* Timeline dot */}
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="experience-top">
                  <span className="experience-date">{experience.duration}</span>
                </div>

                <h3>{experience.position}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
