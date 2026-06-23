import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-bg">
      <div className="section-inner">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's Create Together</h2>

        <div className="contact-wrapper">
          {/* Left */}
          <div className="contact-left">
            <p>
              Have a project in mind? Whether it's a brand film, social media content,
              or a full production campaign — I'd love to hear about it. Let's bring
              your vision to life.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <div className="label">Phone</div>
                  <div className="value">+91 8800218205</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <div className="label">Email</div>
                  <div className="value">Sk2730581@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="label">Location</div>
                  <div className="value">Karkardooma, Delhi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="contact-right">
            <h3>Send a Message</h3>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:Sk2730581@gmail.com'; }}>
              <div className="form-group">
                <label>Your Name</label>
                <input id="contact-name" type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input id="contact-email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Project Details</label>
                <textarea id="contact-message" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
