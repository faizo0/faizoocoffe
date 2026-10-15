import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" alt="Coffee Shop Ambiance" />
        </div>
        <div className="about-text">
          <span className="hero-tag">About Faizoo Shop</span>
          <h2>Where Every Cup Tells a Story</h2>
          <p>
            Founded with a deep love for exceptional coffee and warm gatherings, **Faizoo Shop** is your ultimate escape from the hustle and bustle of daily life. We source the finest, ethically harvested coffee beans and roast them to absolute perfection.
          </p>
          <p>
            Whether you are here to catch up with friends, read your favorite book, or enjoy some peaceful time in our cozy ambiance, our doors are always open for you.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Organic Beans</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Coffee Blends</p>
            </div>
            <div className="stat-item">
              <h3>5K+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}