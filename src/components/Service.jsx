import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Service.css";

const services = [
  {
    title: "Relaxing Massage",
    category: "MASSAGE THERAPY",
    price: "₹2,000",
    duration: "60 minutes",
    image: "photo-1544161515-4ab6ce6db874",
    description: "Gentle massage techniques to help you unwind.",
  },
  {
    title: "Deep Tissue Massage",
    category: "MASSAGE THERAPY",
    price: "₹2,500",
    duration: "60 minutes",
    image: "photo-1519823551278-64ac92734fb1",
    description: "A focused massage for tight and tired muscles.",
  },
  {
    title: "Refreshing Facial",
    category: "SKINCARE",
    price: "₹1,800",
    duration: "45 minutes",
    image: "photo-1570172619644-dfd03ed5d881",
    description: "A refreshing facial designed to pamper your skin.",
  },
  {
    title: "Aromatherapy",
    category: "WELLNESS",
    price: "₹2,200",
    duration: "60 minutes",
    image: "photo-1608571423902-eed4a5ad8108",
    description: "A calming experience with aromatic essential oils.",
  },
  {
    title: "Body Scrub",
    category: "BODY CARE",
    price: "₹1,500",
    duration: "45 minutes",
    image: "photo-1600334129128-685c5582fd35",
    description: "A gentle exfoliation treatment for smoother skin.",
  },
  {
    title: "Herbal Body Wrap",
    category: "BODY CARE",
    price: "₹2,800",
    duration: "60 minutes",
    image: "photo-1540555700478-4be289fbecef",
    description: "A relaxing body treatment inspired by botanicals.",
  },
];

function Service() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="service-page">
      <nav className="service-navbar">
        <Link to="/" className="service-logo">SERENOVA<small>SPA & WELLNESS CENTRE</small></Link>
        <button className="service-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>

        <div className={`service-nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="service-book">Book Now</Link>
        </div>
      </nav>

      <header className="service-hero" data-aos="fade-up">
        <p>OUR SERVICES</p>
        <h1>Restore Your Balance</h1>
        <p>Thoughtfully designed treatments to help you relax, refresh and feel renewed.</p>
      </header>

      <section className="service-section">
        <div className="service-heading" data-aos="fade-up">
          <p>DISCOVER YOUR MOMENT</p>
          <h2>Our Signature Treatments</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" data-aos="fade-up" key={service.title}>
              <img
                src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=700&q=80`}
                alt={service.title}
              />
              <div className="service-card-content">
                <small>{service.category}</small>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price-row">
                  <strong>{service.price}</strong>
                  <span>{service.duration}</span>
                </div>
                <Link to="/contact" className="service-card-button">Book Treatment →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="service-footer">
        <h3>SERENOVA</h3>
        <p>Your time for peace, care and wellbeing.</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="service-copy">© 2026 SERENOVA Spa & Wellness Centre.</p>
      </footer>
    </div>
  );
}

export default Service;