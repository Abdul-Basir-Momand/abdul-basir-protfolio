import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>{profile.name}</h2>
          <p>{profile.shortTitle}</p>
        </div>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href={`mailto:${profile.email}`}>Email</a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
