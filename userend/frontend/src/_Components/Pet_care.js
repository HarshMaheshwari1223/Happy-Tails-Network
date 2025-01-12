import React from 'react'
import "./Css/Pet_care.css";
import Navbar from '../_Components/Navbar.js';

function Pet_care() {
  return (
    <div className="homepage">
    <Navbar/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Fetch Pet Care: Loving, Local Pet Care Services</h1>
          {/* <p>We're here to give your pets the care and attention they deserve. Find a trusted sitter or walker near you today!</p> */}
          <button className="cta-button">Find Your Sitter</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Pet Sitting</h3>
            <p>Professional, reliable care while you're away.</p>
          </div>
          <div className="service-card">
            <h3>Dog Walking</h3>
            <p>Daily walks to keep your pup happy and healthy.</p>
          </div>
          <div className="service-card">
            <h3>Overnight Care</h3>
            <p>Comfort and companionship overnight for your pet.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section_2">
        <h2>Happy Pet Owners</h2>
        <div className="testimonials-container_2">
          <div className="testimonial-card_2">
            <p>"Fetch Pet Care has been amazing for our dog. The sitters are reliable and caring."</p>
            <h4>- Emily R.</h4>
          </div>
          <div className="testimonial-card_2">
            <p>"Our cat loves their sitter from Fetch. We feel so at ease knowing she's in good hands."</p>
            <h4>- Mike S.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Start Your Journey with Fetch Pet Care Today!</h2>
        <button className="cta-button">Book a Service</button>
      </section>
    </div>
  );
};

export default Pet_care




