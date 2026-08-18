import { profile, education } from "../assets/data/portfolio";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <div className="about-grid">
          {/* About Content */}
          <div className="about-content">
            <span className="section-label">WHO I AM</span>

            <h3>I'm {profile.name}</h3>

            <p>{profile.about}</p>

            <p>
              My goal is to create applications that are easy to use, fast,
              secure and maintainable.
            </p>

            <p>
              I specialize in building modern web & Mobile applications using React JS, React Native,
              Laravel, PHP and MySQL.
            </p>
          </div>

          {/* Personal Information */}
          <div className="about-info">
            <h3>Personal Information</h3>

            <div className="info-item">
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>

            <div className="info-item">
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </div>

            <div className="info-item">
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>

            <div className="info-item">
              <span>Profession</span>
              <strong>{profile.title}</strong>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="education">
          <div className="education-header">
            <span className="section-label">EDUCATION</span>

            <h3>My Education</h3>
          </div>

          {education.map((item) => (
            <div className="education-item" key={item.id}>
              <div>
                <h4>{item.degree}</h4>

                <p>{item.institution}</p>
              </div>

              <span className="education-year">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
