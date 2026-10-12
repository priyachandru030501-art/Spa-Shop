import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/style/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="serenova-home">
      <nav className="spa-navbar">
        <Link to="/" className="spa-logo">
          SERENOVA
          <small>SPA & WELLNESS CENTRE</small>
        </Link>

        <button
          className="spa-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`spa-nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" >Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="spa-book">
            Book Now
          </Link>
        </div>
      </nav>

      <section className="spa-hero">
        <div className="spa-hero-content" data-aos="fade-up">
          <p className="spa-eyebrow">RELAX · REJUVENATE · RESTORE</p>

          <h1>Your Wellness,<br />Our Priority</h1>

          <p>
            Discover a peaceful escape with relaxing massages,
            refreshing facials and holistic wellness treatments.
          </p>

          <Link to="/service" className="spa-button">
            Explore Services →
          </Link>
        </div>
      </section>

      <section className="spa-welcome" data-aos="fade-up">
        <p className="spa-eyebrow">WELCOME TO SERENOVA</p>
        <h2>A Peaceful Escape From Everyday Life</h2>
        <p>
          Take a moment for yourself. Let our experienced therapists
          help you relax your body, calm your mind and refresh your spirit.
        </p>
      </section>

      <section className="spa-home-services">
        <div className="spa-section-heading" data-aos="fade-up">
          <p className="spa-eyebrow">WHAT WE OFFER</p>
          <h2>Our Signature Services</h2>
        </div>

        <div className="spa-home-grid">
          {[
            {
              title: "Relaxing Massage",
              image: "photo-1544161515-4ab6ce6db874",
              description: "Release tension and feel deeply relaxed.",
            },
            {
              title: "Facial Treatment",
              image: "photo-1570172619644-dfd03ed5d881",
              description: "Refresh your skin with gentle treatments.",
            },
            {
              title: "Aromatherapy",
              image: "photo-1608571423902-eed4a5ad8108",
              description: "Enjoy calming aromas and peaceful moments.",
            },
          ].map((service, index) => (
            <article className="spa-home-card" data-aos="fade-up" key={service.title}>
              <img
                src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=700&q=80`}
                alt={service.title}
              />
              <div className="spa-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/service">Discover More →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="spa-promo" data-aos="zoom-in">
        <div>
          <p className="spa-eyebrow">YOUR TIME. YOUR WELLNESS.</p>
          <h2>Make Relaxation a Priority</h2>
          <p>Give yourself the care and attention you deserve.</p>
          <Link to="/package" className="spa-button">
            View Our Packages →
          </Link>
        </div>
      </section>

      <footer className="spa-footer">
        <h3>SERENOVA</h3>
        <p>Spa & Wellness Centre</p>

        <div className="spa-footer-links">
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="spa-copyright">
          © 2026 SERENOVA Spa & Wellness Centre. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;