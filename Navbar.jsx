import React, { useState } from 'react';

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          ☕ <span>Faizoo Shop</span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-right">
          <div className="cart-icon" title="Cart Items">
            🛒 <span className="cart-badge">{cartCount}</span>
          </div>
          <a href="#menu" className="order-btn">Order Now</a>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}