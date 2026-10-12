import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Package.css";

const packages = [
  {
    name: "Relax & Rejuvenate",
    duration: "2 HOURS",
    price: "₹4,500",
    features: ["Relaxing full-body massage", "Herbal facial", "Steam bath"],
    image: "photo-1544161515-4ab6ce6db874",
  },
  {
    name: "Glow & Refresh",
    duration: "3 HOURS",
    price: "₹6,500",
    features: ["Aromatherapy massage", "Premium facial", "Body scrub"],
    image: "photo-1570172619644-dfd03ed5d881",
    featured: true,
  },
  {
    name: "Ultimate Wellness",
    duration: "4 HOURS",
    price: "₹9,000",
    features: ["Full-body massage", "Herbal body wrap", "Facial treatment", "Steam bath"],
    image: "photo-1540555700478-4be289fbecef",
  },
];

function Package() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="package-page">
      <nav className="package-navbar">
        <Link to="/" className="package-logo">SERENOVA<small>SPA & WELLNESS CENTRE</small></Link>
        <button className="package-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>

        <div className={`package-nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" >Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="package-book">Book Now</Link>
        </div>
      </nav>

      <header className="package-hero" data-aos="fade-up">
        <p>EXCLUSIVE WELLNESS EXPERIENCES</p>
        <h1>Our Spa Packages</h1>
        <span>Choose your perfect escape and make time for yourself.</span>
      </header>

      <section className="package-section">
        <div className="package-heading" data-aos="fade-up">
          <p>TIME TO UNWIND</p>
          <h2>Choose Your Experience</h2>
        </div>

        <div className="package-grid">
          {packages.map((item) => (
            <article className={`package-card ${item.featured ? "featured" : ""}`} data-aos="fade-up" key={item.name}>
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=800&q=80`}
                alt={item.name}
              />

              <div className="package-card-content">
                {item.featured && <span className="package-popular">MOST POPULAR</span>}
                <p className="package-duration">{item.duration}</p>
                <h3>{item.name}</h3>

                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <div className="package-price">{item.price}</div>
                <Link to="/contact" className="package-button">Book This Package →</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="package-note" data-aos="fade-up">
          <h3>A Little More Self-Care</h3>
          <p>Ask our team about custom packages for couples, friends and special occasions.</p>
          <Link to="/contact" className="package-button">Enquire Now →</Link>
        </div>
      </section>

      <footer className="package-footer">
        <h3> SERENOVA</h3>
        <p>Find your balance. Feel renewed.</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="package-copy">© 2026 SERENOVA Spa & Wellness Centre.</p>
      </footer>
    </div>
  );
}

export default Package;