import React from 'react';
import './ContactDetails.css';
import dividerImg from '../../assets/Group 5.png';

const ContactDetails = () => {
  return (
    <section className="contact-details-section">
      <div className="contact-details-container">
        <div className="contact-details-header">
          <h2 className="contact-details-title">CONTACT US</h2>
          <img src={dividerImg} alt="" className="contact-details-divider" />
          <p className="contact-details-intro">
            If you would like information about the festival, tickets, participation, partnerships,
            or media, please contact us.
          </p>
          <p className="contact-details-support">We're happy to support you.</p>
        </div>

        <div className="contact-details-grid">
          {/* Email Box */}
          <div className="contact-detail-box email-box">
            <div className="detail-icon-title">
              <span className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5D4E8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon email-icon-svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#FAF8FC" />
                  <polyline points="22,6 12,13 2,6" />
                  <path d="M12 14.5s-2.5-1.8-2.5-3c0-.8.6-1.5 1.5-1.5.5 0 1 .3 1 .8.1-.5.6-.8 1-.8.9 0 1.5.7 1.5 1.5 0 1.2-2.5 3-2.5 3z" fill="#C44D4D" stroke="none" />
                </svg>
              </span>
              <h3 className="detail-label">Email</h3>
            </div>
            <p className="detail-value">contact@onenessfestival.in</p>
            <p className="detail-subtext">We usually reply within 24-48 hours.</p>
          </div>

          {/* Phone Box */}
          <div className="contact-detail-box phone-box">
            <div className="detail-icon-title">
              <span className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none" className="contact-svg-icon phone-icon-svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" fill="#C44D4D" />
                  <path d="M17 15.2c-.7 0-1.5-.1-2.1-.4-.2-.1-.5 0-.7.2l-1.4 1.4c-2.5-1.3-4.5-3.3-5.8-5.8l1.4-1.4c.2-.2.2-.5.1-.7-.3-.7-.4-1.5-.4-2.1 0-.6-.4-1-1-1H4.5c-.6 0-1 .4-1 1C3.5 14.5 10.5 21.5 18 21.5c.6 0 1-.4 1-1V16.2c0-.6-.4-1-1-1z" fill="#FAF8FC" />
                </svg>
              </span>
              <h3 className="detail-label">Phone / WhatsApp</h3>
            </div>
            <p className="detail-value">+91 XXXX XXX XXX</p>
            <p className="detail-subtext">Hours: 10:00 - 18:00 IST (Monday-Friday)</p>
          </div>

          {/* Location Box */}
          <div className="contact-detail-box location-box">
            <div className="detail-icon-title">
              <span className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D98C45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon location-icon-svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#FAF8FC" />
                  <circle cx="12" cy="10" r="3" fill="#D98C45" stroke="none" />
                </svg>
              </span>
              <h3 className="detail-label">Location</h3>
            </div>
            <p className="detail-value">Jaipur, Rajasthan, India</p>
            <p className="detail-subtext">Office or location details here?</p>
          </div>

          {/* Social Media Box */}
          <div className="contact-detail-box social-box">
            <div className="detail-icon-title">
              <span className="detail-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4D8B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon link-icon-svg">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <h3 className="detail-label">Social Media</h3>
            </div>
            <div className="social-links-row">
              <a href="https://instagram.com/onenessfestivalindia" target="_blank" rel="noopener noreferrer" className="social-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg-logo instagram-logo-svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com/onenessfestivalindia" target="_blank" rel="noopener noreferrer" className="social-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" className="social-svg-logo facebook-logo-svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://youtube.com/onenessfestivalindia" target="_blank" rel="noopener noreferrer" className="social-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000" className="social-svg-logo youtube-logo-svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.518 3.5 12 3.5 12 3.5s-7.517 0-9.388.555A3.002 3.002 0 0 0 .5 6.163C0 8.07 0 12 0 12s0 3.93.5 5.837a3.002 3.002 0 0 0 2.112 2.108c1.87.556 9.388.556 9.388.556s7.518 0 9.389-.556a3.007 3.007 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
            <p className="detail-subtext">@onenessfestivalindia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
