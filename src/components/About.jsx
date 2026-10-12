import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/About.css";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="about-page">
      <nav className="about-navbar">
        <Link to="/" className="about-logo">SERENOVA<small>SPA & WELLNESS CENTRE</small></Link>
        <button className="about-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>

        <div className={`about-nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" >Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="about-book">Book Now</Link>
        </div>
      </nav>

      <header className="about-hero" data-aos="fade-up">
        <p>OUR STORY</p>
        <h1>Wellness Begins Within</h1>
        <span>A place where relaxation meets thoughtful care.</span>
      </header>

      <section className="about-story">
        <div className="about-story-image" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85"
            alt="Peaceful spa interior"
          />
        </div>

        <div className="about-story-content" data-aos="fade-left">
          <p className="about-eyebrow">ABOUT SERENOVA</p>
          <h2>Your Personal Space to Recharge</h2>
          <p>
            At SERENOVA, we believe that wellness starts with taking time
            for yourself. Our peaceful setting and carefully selected
            treatments create a welcoming space for relaxation.
          </p>
          <p>
            From soothing massages to refreshing skincare treatments,
            our goal is to make every visit feel special, calm and personal.
          </p>
          <Link to="/service" className="about-button">Explore Our Services →</Link>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading" data-aos="fade-up">
          <p className="about-eyebrow">WHAT GUIDES US</p>
          <h2>Our Mission & Vision</h2>
        </div>

        <div className="about-value-grid">
          <article data-aos="fade-up">
            <span>❋</span>
            <h3>Our Mission</h3>
            <p>
              To create relaxing wellness experiences that encourage
              self-care, comfort and balance.
            </p>
          </article>

          <article data-aos="fade-up">
            <span>✧</span>
            <h3>Our Vision</h3>
            <p>
              To become a welcoming destination where every guest
              feels cared for and refreshed.
            </p>
          </article>

          <article data-aos="fade-up">
            <span>♡</span>
            <h3>Our Values</h3>
            <p>
              We value kindness, personal attention, comfort and
              thoughtful service.
            </p>
          </article>
        </div>
      </section>

      <section className="about-quote" data-aos="zoom-in">
        <p>“Taking care of yourself is a beautiful way to begin again.”</p>
        <Link to="/contact" className="about-button">Plan Your Visit →</Link>
      </section>

      <footer className="about-footer">
        <h3>SERENOVA</h3>
        <p>Your time for peace, care and wellbeing.</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="about-copy">© 2026 SERENOVA Spa & Wellness Centre.</p>
      </footer>
    </div>
  );
}

export default About;