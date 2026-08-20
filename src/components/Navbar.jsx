import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Abdul Basir Momand
        </Link>

        {/* Hamburger Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>

          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link to="/experience" onClick={closeMenu}>
            Experience
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
