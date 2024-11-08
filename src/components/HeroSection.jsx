import React from 'react';
import './HeroSection.css';
import imagei from '../assets/imagei.jpg'; 

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We offer a wide range of logistics solutions.</h1>
        <ul>
          <li>Fast Delivery</li>
          <li>Global Coverage</li>
          <li>Customer Support</li>
        </ul>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={imagei} alt="Delivery person on scooter" />
      </div>
    </section>
  );
}

export default HeroSection;