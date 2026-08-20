import { Link } from "react-router-dom";
import { profile, skills } from "../assets/data/portfolio";
import profileImage from "../assets/momand.jpeg";

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="modern-hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container modern-hero-container">
          {/* LEFT CONTENT */}
          <div className="modern-hero-content">
            <div className="modern-badge">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="modern-greeting">Hello, I'm</p>

            <h1 className="modern-title">
              Abdul Basir
              <span>Momand</span>
            </h1>

            <div className="modern-role">
              <span className="role-line"></span>
              <h2>{profile.title}</h2>
            </div>

            <p className="modern-description">{profile.description}</p>

            {/* CTA */}
            <div className="modern-buttons">
              <Link to="/projects" className="modern-btn modern-btn-primary">
                <span>Explore My Work</span>
                <span className="btn-arrow">↗</span>
              </Link>

              <Link to="/contact" className="modern-btn modern-btn-secondary">
                Let's Connect
              </Link>
            </div>

            {/* SOCIALS */}
            <div className="modern-socials">
              <span className="social-label">Find me on</span>

              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <span className="social-divider">/</span>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <span className="social-divider">/</span>

              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="modern-hero-visual">
            <div className="image-orbit orbit-one"></div>
            <div className="image-orbit orbit-two"></div>

            <div className="image-glow"></div>

            <div className="modern-image-wrapper">
              <img
                src={profileImage}
                alt="Abdul Basir Momand"
                className="modern-profile-image"
              />

              <div className="image-status">
                <span></span>
                Open to Work
              </div>
            </div>

            {/* FLOATING CARDS */}
            <div className="floating-card floating-card-one">
              <span className="floating-icon">{"</>"}</span>
              <div>
                <strong>Clean Code</strong>
                <small>Modern & scalable</small>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Full Stack</strong>
                <small>Web Development</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="modern-stats">
        <div className="container modern-stats-grid">
          {profile.stats.map((stat, index) => (
            <div className="modern-stat-card" key={stat.label}>
              <span className="stat-number">{stat.number}</span>

              <div className="stat-info">
                <strong>{stat.label}</strong>
                <span>
                  {index === 0 && "Professional experience"}
                  {index === 1 && "Successful projects"}
                  {index === 2 && "Technologies & tools"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section className="modern-section">
        <div className="container">
          <div className="modern-section-heading">
            <div>
              <span className="modern-section-label">EXPERTISE</span>

              <h2>
                Technologies I<span> work with.</span>
              </h2>
            </div>

            <p>
              I build reliable, scalable, and user-focused applications using
              modern technologies and development practices.
            </p>
          </div>

          <div className="modern-skills-grid">
            {skills.slice(0, 8).map((skill, index) => (
              <div className="modern-skill-card" key={skill.name}>
                <div className="skill-number">0{index + 1}</div>

                <div className="modern-skill-icon">{skill.name.charAt(0)}</div>

                <div className="modern-skill-content">
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>

                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>

          <div className="modern-skills-footer">
            <span>Always learning. Always improving.</span>

            <Link to="/projects">View my projects →</Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="modern-cta">
        <div className="container">
          <div className="modern-cta-content">
            <span className="modern-section-label">HAVE A PROJECT?</span>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm always interested in discussing new projects, ideas, and
              opportunities.
            </p>

            <Link to="/contact" className="modern-btn modern-btn-primary">
              Start a Conversation
              <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
