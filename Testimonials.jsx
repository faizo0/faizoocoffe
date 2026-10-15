import React from 'react';

const reviews = [
  { id: 1, name: 'Ayesha Khan', role: 'Regular Customer', comment: 'Faizoo Shop has the best vanilla latte in town! The cozy vibe makes it my favorite spot to relax.', rating: '⭐⭐⭐⭐⭐' },
  { id: 2, name: 'Ali Raza', role: 'Coffee Enthusiast', comment: 'Absolute perfection! The croissants are always warm and flaky, and the staff is incredibly welcoming.', rating: '⭐⭐⭐⭐⭐' },
  { id: 3, name: 'Zainab Malik', role: 'Student', comment: 'Super peaceful environment and amazing cold brew. Highly recommended for anyone looking for good coffee!', rating: '⭐⭐⭐⭐⭐' }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header">
        <h2>What Our Customers Say</h2>
        <p>Real feedback from coffee lovers who visit us daily</p>
      </div>
      <div className="testimonials-grid">
        {reviews.map(rev => (
          <div key={rev.id} className="testimonial-card">
            <div className="rating">{rev.rating}</div>
            <p className="comment">"{rev.comment}"</p>
            <h4 className="author">{rev.name}</h4>
            <span className="role">{rev.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}