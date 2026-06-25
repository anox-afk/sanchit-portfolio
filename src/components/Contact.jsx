import React from 'react';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="contact-tag">05 — Let's Work Together</p>

        <h2 className="contact-headline">
          Looking for a<br />
          <span className="accent">Videographer</span>?
        </h2>

        <div className="contact-actions">
          <a href="mailto:sanchit@example.com" className="btn-primary" id="contact-email-btn">
            Send a Message
          </a>
          <a href="tel:+919999999999" className="btn-outline" id="contact-call-btn">
            Call Me
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-detail">
            <div className="detail-label">Email</div>
            <a href="mailto:sanchit@example.com" className="detail-val">sanchit@example.com</a>
          </div>
          <div className="contact-detail">
            <div className="detail-label">Phone</div>
            <a href="tel:+919999999999" className="detail-val">+91 99999 99999</a>
          </div>
          <div className="contact-detail">
            <div className="detail-label">Location</div>
            <div className="detail-val">Delhi, India</div>
          </div>
          <div className="contact-detail">
            <div className="detail-label">LinkedIn</div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="detail-val">sanchit-kumar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
