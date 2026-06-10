import React from 'react';
import './ContactBottom.css';
import bgImg from '../../assets/Group 209.png';
import brushTop from '../../assets/Mask group.png';
import divider from '../../assets/Group 5.png';

const ContactBottom = () => {
  return (
    <section className="contact-bottom-section" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Brush stroke top edge */}
      <div
        className="cb-brush-top"
        style={{
          WebkitMaskImage: `url(${brushTop})`,
          maskImage: `url(${brushTop})`
        }}
      />

      {/* Dark overlay */}
      <div className="cb-overlay" />

      {/* Content */}
      <div className="cb-content">
        <p className="cb-year">2026</p>
        <h2 className="cb-title">STAY CONNECTED</h2>
        <img src={divider} alt="" className="cb-divider" />
        <p className="cb-desc">Subscribe for festival news and updates.</p>
        <div className="cb-form">
          <input type="email" className="cb-input" placeholder="Enter Your Email address" />
          <div className="cb-btn-wrapper">
            <button type="submit" className="cb-btn">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>

      {/* Brush stroke bottom edge */}
      <div
        className="cb-brush-bottom"
        style={{
          WebkitMaskImage: `url(${brushTop})`,
          maskImage: `url(${brushTop})`
        }}
      />
    </section>
  );
};

export default ContactBottom;
