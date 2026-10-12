import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "../assets/style/Contact.css";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="contact-page">
      <nav className="contact-navbar">
        <Link to="/" className="contact-logo"> SERENOVA<small>SPA & WELLNESS CENTRE</small></Link>
        <button className="contact-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>

        <div className={`contact-nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" >Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="contact-book">Book Now</Link>
        </div>
      </nav>

      <header className="contact-hero" data-aos="fade-up">
        <p>WE ARE HERE FOR YOU</p>
        <h1>Contact & Reservations</h1>
        <span>We would love to help you plan your wellness experience.</span>
      </header>

      <section className="contact-section">
        <div className="contact-info" data-aos="fade-right">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h2>Let's Make Time for You</h2>
          <p className="contact-intro">
            Have a question or need help choosing a treatment?
            Send us a message or reach out using the details below.
          </p>

          <div className="contact-detail">
            <span>⌖</span>
            <div>
              <h3>Our Location</h3>
              <p>123 Wellness Street,<br />Koramangala, Bengaluru</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>☎</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>✉</span>
            <div>
              <h3>Email</h3>
              <p>hello@serenova.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>◷</span>
            <div>
              <h3>Opening Hours</h3>
              <p>Monday – Sunday<br />9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap" data-aos="fade-left">
          <h2>Book Your Appointment</h2>
          <p>Complete the form and our team can follow up with you.</p>

          {submitted && (
            <div className="contact-success" role="status">
              Thank you! Your form was submitted in this demo.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Full Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Enter your name" required />

            <label htmlFor="contact-email">Email Address</label>
            <input id="contact-email" name="email" type="email" placeholder="Enter your email" required />

            <label htmlFor="contact-phone">Phone Number</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="Enter your phone number" required />

            <label htmlFor="contact-service">Choose a Service</label>
            <select id="contact-service" name="service" required defaultValue="">
              <option value="" disabled>Select a treatment</option>
              <option>Relaxing Massage</option>
              <option>Deep Tissue Massage</option>
              <option>Facial Treatment</option>
              <option>Aromatherapy</option>
              <option>Spa Package</option>
            </select>

            <label htmlFor="contact-date">Preferred Date</label>
            <input id="contact-date" name="date" type="date" required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell us how we can help" />

            <button type="submit" className="contact-submit">Send Booking Request →</button>
          </form>
        </div>
      </section>

      <section className="contact-bottom" data-aos="fade-up">
        <div>
          <p className="contact-eyebrow">YOUR WELLNESS JOURNEY STARTS HERE</p>
          <h2>Ready to Feel Renewed?</h2>
          <p>Choose your favourite treatment and take a moment just for you.</p>
          <Link to="/package" className="contact-bottom-button">Explore Packages →</Link>
        </div>
      </section>

      <footer className="contact-footer">
        <h3> SERENOVA</h3>
        <p>Spa & Wellness Centre</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/package">Packages</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="contact-copy">© 2026 SERENOVA Spa & Wellness Centre.</p>
      </footer>
    </div>
  );
}

export default Contact;