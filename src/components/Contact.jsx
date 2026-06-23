import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content glass-panel p-4" style={{ padding: '3rem' }}>
          <p className="about-text" style={{ marginBottom: '2rem' }}>
            Ready to elevate your brand's visual presence? Let's discuss your next project.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 8800218205</p>
              </div>
            </div>
            <div className="contact-item">
              <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>✉️</span>
              <div>
                <strong>Email</strong>
                <p>Sk2730581@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>📍</span>
              <div>
                <strong>Location</strong>
                <p>Karkardooma, Delhi</p>
              </div>
            </div>
          </div>
          <a href="mailto:Sk2730581@gmail.com" className="btn btn-primary" style={{ marginTop: '2rem' }}>Send an Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
