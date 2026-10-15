import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-tag">Welcome to Faizoo Shop</span>
        <h1>Brewed to Perfection, Served with Love</h1>
        <p>Experience the finest hand-crafted coffee, cozy ambiance, and freshly baked pastries made specially for your daily moments of joy.</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn primary-btn">Explore Menu</a>
          <a href="#about" className="btn secondary-btn">Our Story</a>
        </div>
      </div>
    </section>
  );
}