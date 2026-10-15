import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>☕ Faizoo Shop</h3>
          <p>Brewing happiness one cup at a time. Visit us for the finest coffee experience.</p>
        </div>
        <div className="footer-col">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
        </div>
        <div className="footer-col">
          <h4>Location & Contact</h4>
          <p>📍 Main Boulevard, Gulberg, Lahore</p>
          <p>📞 +92 319 6911574</p>
          <p>✉️ support@faizooshop.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Faizoo Shop. All rights reserved. Designed with ❤️ for coffee lovers.</p>
      </div>
    </footer>
  );
}