import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";

// ================================
// EmailJS Configuration
// ================================

const SERVICE_ID = "service_wccyfma";

const CONTACT_TEMPLATE_ID = "template_2u7ptxk";

const AUTOREPLY_TEMPLATE_ID = "template_19uiiub";

const PUBLIC_KEY = "v3xseKgiY6EutpIfp";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ================================
  // Handle input changes
  // ================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================================
  // Submit form
  // ================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        time: new Date().toLocaleString(),
      };

      // ========================================
      // 1. Send message to YOU
      // ========================================

      const contactResponse = await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        },
      );

      console.log("Contact email sent successfully:", contactResponse);

      // ========================================
      // 2. Send automatic reply to visitor
      // ========================================

      const autoReplyResponse = await emailjs.send(
        SERVICE_ID,
        AUTOREPLY_TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        },
      );

      console.log("Auto reply sent successfully:", autoReplyResponse);

      // ========================================
      // Success
      // ========================================

      setSuccess(
        "Your message has been sent successfully! I'll get back to you soon.",
      );

      // Clear form
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS ERROR:", err);
      console.error("Status:", err?.status);
      console.error("Text:", err?.text);

      setError(
        err?.text || "Unable to send your message right now. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section">
      <div className="container">
        {/* ================================
            Section Title
        ================================= */}

        <SectionTitle title="Contact Me" subtitle="Let's work together" />

        <div className="contact-grid">
          {/* =================================
              LEFT SIDE
          ================================= */}

          <div className="contact-info">
            <span className="section-label">GET IN TOUCH</span>

            <h3>Let's build something great together.</h3>

            <p className="contact-description">
              Have a project, job opportunity, or just want to say hello? Send
              me a message and I'll get back to you as soon as possible.
            </p>

            {/* ================================
                Email
            ================================= */}

            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>

                <a href="mailto:abdulbasirmomand97@gmail.com">
                  abdulbasirmomand97@gmail.com
                </a>
              </div>
            </div>

            {/* ================================
                Phone
            ================================= */}

            {profile.phone && (
              <div className="contact-item">
                <div className="contact-icon">☎</div>

                <div>
                  <span>Phone</span>

                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </div>
              </div>
            )}

            {/* ================================
                Location
            ================================= */}

            {profile.location && (
              <div className="contact-item">
                <div className="contact-icon">📍</div>

                <div>
                  <span>Location</span>

                  <p>{profile.location}</p>
                </div>
              </div>
            )}

            {/* ================================
                Social Links
            ================================= */}

            <div className="contact-socials">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}

              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* =================================
              RIGHT SIDE - FORM
          ================================= */}

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* ================================
                  Success Message
              ================================= */}

              {success && <div className="success-message">✓ {success}</div>}

              {/* ================================
                  Error Message
              ================================= */}

              {error && <div className="error-message">✕ {error}</div>}

              {/* ================================
                  Name
              ================================= */}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* ================================
                  Email
              ================================= */}

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* ================================
                  Subject
              ================================= */}

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* ================================
                  Message
              ================================= */}

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* ================================
                  Submit Button
              ================================= */}

              <button
                type="submit"
                className="btn contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
