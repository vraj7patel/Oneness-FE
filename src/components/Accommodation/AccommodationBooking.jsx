import React, { useState } from 'react';
import './AccommodationBooking.css';
import logo from '../../assets/Logo.png';
import vectorOuter from '../../assets/Vector (1).png';
import vectorInner from '../../assets/Vector.png';

const AccommodationBooking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stayOption: 'Select accommodation option',
    checkIn: '',
    checkOut: '',
    guests: '1',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate premium submission
    setSubmitted(true);
  };

  return (
    <section className="accommodation-booking-section" id="accommodation-booking">
      <div className="accomm-booking-container">
        
        {/* Left Side: General Info and Tips */}
        <div className="accomm-booking-left">
          <div className="accomm-booking-guide">
            <h3 className="guide-title">Planning Your Stay</h3>
            <p className="guide-intro">
              Our hospitality team is dedicated to curating a flawless, tranquil journey for you. After submitting your inquiry, a personal booking host will reach out to verify availability, coordinate dates, customize inclusions, and confirm reservation details.
            </p>

            <div className="guide-info-box guide-tips-box">
              <h4 className="box-title">Important Details:</h4>
              <ul className="guide-list">
                <li>Check-in time is at 2:00 PM; check-out is at 11:00 AM. Early arrivals can be requested.</li>
                <li>Premium shuttles operate continuously between all three locations and the Oneness Festival grounds.</li>
                <li>Gourmet dining options offer organic, locally sourced vegetarian and vegan meals.</li>
                <li>Flexible cancellation terms apply due to travel coordination.</li>
              </ul>
            </div>

            <div className="guide-info-box guide-contact-box">
              <h4 className="box-title">Hospitality Concierge:</h4>
              <p className="contact-detail">📩 stay@jaipuronenessfestival.com</p>
              <p className="contact-detail">📞 +91 98765 43210 (Toll-Free / WhatsApp)</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Booking Frame Form */}
        <div className="accomm-booking-right">
          <div className="booking-layered-frame">
            <img src={vectorOuter} className="booking-vector-outer" alt="" />
            <img src={vectorInner} className="booking-vector-inner" alt="" />

            <div className="booking-form-content">
              <div className="booking-form-header">
                <img src={logo} alt="Logo" className="booking-form-logo" />
                <h3 className="booking-form-subtitle">STAY RESERVATION INQUIRY</h3>
              </div>

              {submitted ? (
                <div className="booking-success-message">
                  <div className="success-icon">✾</div>
                  <h4>Thank You!</h4>
                  <p>Your stay inquiry has been successfully sent. A personal Oneness booking host will contact you within 24 hours to secure your reservations.</p>
                  <button className="inquire-again-btn" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
                </div>
              ) : (
                <form className="booking-form-element" onSubmit={handleSubmit}>
                  <div className="booking-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      required
                    />
                  </div>

                  <div className="booking-row">
                    <div className="booking-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email" 
                        required
                      />
                    </div>
                    <div className="booking-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number" 
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-row">
                    <div className="booking-group">
                      <label htmlFor="accomm-select">Accommodation Type</label>
                      <select 
                        id="accomm-select"
                        name="stayOption"
                        value={formData.stayOption}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select stay option</option>
                        <option value="Royal Palace Suite">Royal Palace Suite</option>
                        <option value="Oasis Premium Room">Oasis Premium Room</option>
                        <option value="Oneness Glamping Camp">Oneness Glamping Camp</option>
                      </select>
                    </div>
                    <div className="booking-group">
                      <label htmlFor="guests">Number of Guests</label>
                      <select 
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4+">4 or More Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="booking-row">
                    <div className="booking-group">
                      <label htmlFor="checkIn">Check-in Date</label>
                      <input 
                        type="date" 
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="booking-group">
                      <label htmlFor="checkOut">Check-out Date</label>
                      <input 
                        type="date" 
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-group">
                    <label htmlFor="specialNotes">Special Requests / Preferences</label>
                    <textarea 
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      placeholder="Dietary requests, room preferences, bed layout, etc."
                    ></textarea>
                  </div>

                  <div className="booking-btn-container">
                    <button type="submit" className="booking-submit-btn">SUBMIT STAY INQUIRY</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AccommodationBooking;
