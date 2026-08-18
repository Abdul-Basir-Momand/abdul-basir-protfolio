import { Link } from "react-router-dom";
import { profile, skills, projects } from "../assets/data/portfolio";
import ProjectCard from "../components/ProjectCard";
import profileImage from "../assets/momand.jpeg";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          {/* LEFT SIDE */}
          <div className="hero-content">
            <span className="hero-badge">👋 Welcome to my portfolio</span>

            <p className="hero-small">Hello, I'm</p>

            <h1>
              Abdul Basir
              <span> Momand</span>
            </h1>

            <h2>{profile.title}</h2>

            <p className="hero-description">{profile.description}</p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn">
                View My Work
              </Link>

              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hero-image-container">
            <div className="hero-image-bg"></div>

            <img
              src={profileImage}
              alt="Abdul Basir Momand"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          {profile.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">WHAT I DO</span>

            <h2>My Skills</h2>

            <p>Technologies and tools I use to build modern applications.</p>
          </div>

          <div className="skills-grid">
            {skills.slice(0, 8).map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.name.charAt(0)}</div>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
