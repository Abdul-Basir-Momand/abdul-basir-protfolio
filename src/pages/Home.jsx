import { Link } from "react-router-dom";
import { profile, skills } from "../assets/data/portfolio";
import profileImage from "../assets/momand.jpeg";
import { useEffect, useState } from "react";

export default function Home() {
  const fullName = "Abdul Basir Momand";

  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && typedName.length < fullName.length) {
      // Typing
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 120);
    } else if (!isDeleting && typedName.length === fullName.length) {
      // Wait 5 seconds after the full name is displayed
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 5000);
    } else if (isDeleting && typedName.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, 70);
    } else if (isDeleting && typedName.length === 0) {
      // Start typing again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting]);

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-small">Hello, I'm</p>

            <h1 className="hero-name">
              <span className="typing-name">
                {typedName}
                <span className="typing-cursor">|</span>
              </span>
            </h1>

            <h2 className="hero-role">{profile.title}</h2>

            <p className="hero-description">{profile.description}</p>

            {/* BUTTONS */}
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>View My Work</span>
                <span className="btn-arrow">→</span>
              </Link>

              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

              <a href={`mailto:${profile.email}`} className="social-link">
                <span>Email</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-container">
            <div className="image-ring image-ring-one"></div>
            <div className="image-ring image-ring-two"></div>

            <div className="hero-image-glow"></div>

            <div className="image-card">
              <img
                src={profileImage}
                alt="Abdul Basir Momand"
                className="hero-image"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="floating-card floating-card-top">
              <span className="floating-icon">{"</>"}</span>
              <div>
                <strong>Full Stack</strong>
                <small>Developer</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">✓</span>
              <div>
                <strong>Clean Code</strong>
                <small>Modern Solutions</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="stats-section">
        <div className="container stats-grid">
          {profile.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-number">{stat.number}</div>

              <div className="stat-info">
                <p>{stat.label}</p>
                <span>Professional Experience</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ====================================================== */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">EXPERTISE</span>

            <h2>Technologies I Work With</h2>

            <p>
              Modern technologies and tools I use to build reliable, scalable
              and high-performance applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.slice(0, 8).map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.name.charAt(0)}</div>

                <div className="skill-content">
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>

                <span className="skill-arrow">→</span>
              </div>
            ))}
          </div>

          <div className="skills-bottom">
            <Link to="/projects" className="text-link">
              Explore my projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
