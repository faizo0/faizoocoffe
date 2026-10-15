import React from 'react';

const menuItems = [
  { id: 1, name: 'Classic Espresso', price: '$3.50', desc: 'Rich, bold, and crafted with premium roasted coffee beans.', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Creamy Cappuccino', price: '$4.50', desc: 'Espresso with steamed milk and a velvety foam layer.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Vanilla Latte', price: '$5.00', desc: 'Smooth espresso blended with sweet vanilla and steamed milk.', image: 'https://images.unsplash.com/photo-1561882468-9110e53a0f78?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Cold Brew Delight', price: '$4.80', desc: 'Steeped for 24 hours for a smooth, refreshing caffeine kick.', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Butter Croissant', price: '$3.00', desc: 'Flaky, buttery pastry baked fresh every single morning.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Caramel Macchiato', price: '$5.25', desc: 'Layered espresso with vanilla syrup, steamed milk, and caramel drizzle.', image: 'https://images.unsplash.com/photo-1485808191679-5ed865c761c9?auto=format&fit=crop&w=600&q=80' }
];

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="menu-section">
      <div className="section-header">
        <h2>Our Signature Menu</h2>
        <p>Hand-crafted with passion using ethically sourced beans</p>
      </div>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <div className="card-img-wrapper">
              <img src={item.image} alt={item.name} />
              <span className="price-tag">{item.price}</span>
            </div>
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <button className="add-cart-btn" onClick={onAddToCart}>
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}