import React from 'react';
import './ContactSection.css';
import dividerImg from '../../assets/Group 5.png';
import mandalaImg from '../../assets/Group 54.png';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">CONTACT US</h1>
          <img src={dividerImg} alt="" className="contact-divider" />
        </div>

        <form className="contact-form">
          <div className="contact-field">
            <label>Full Name</label>
            <input type="text" placeholder="Enter Your Full Name" />
          </div>

          <div className="contact-row">
            <div className="contact-field">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="contact-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="contact-field">
            <label>Select Your Contribution in This Oneness Festival</label>
            <select>
              <option value="">Choose option</option>
              <option value="volunteer">Volunteer</option>
              <option value="performer">Performer</option>
              <option value="partner">Partner</option>
            </select>
          </div>

          <div className="contact-field">
            <label>Message</label>
            <textarea rows="4" placeholder="Enter your special notes"></textarea>
          </div>

          <div className="contact-submit-wrapper">
            <button type="submit" className="contact-submit-btn">
              SUBMIT NOW &rarr;
            </button>
          </div>
        </form>

        <p className="contact-footer-text">
          You can send an email to ... if your enthusiasm is so great that you want to
          message us about how you would like to get involved with us right now.
        </p>
      </div>

      {/* Decorative Mandalas */}
      <img src={mandalaImg} alt="" className="contact-mandala mandala-2" />
      <img src={mandalaImg} alt="" className="contact-mandala mandala-3" />
      <img src={mandalaImg} alt="" className="contact-mandala mandala-4" />
      <img src={mandalaImg} alt="" className="contact-mandala mandala-5" />
    </section>
  );
};

export default ContactSection;
