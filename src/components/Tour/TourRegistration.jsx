import React from 'react';
import './TourRegistration.css';
import logo from '../../assets/Logo.png';
import boyImg from '../../assets/image.png';
import vectorOuter from '../../assets/Vector (1).png';
import vectorInner from '../../assets/Vector.png';

const TourRegistration = () => {
  return (
    <section className="tour-reg-section">
      <div className="tour-reg-container">

        {/* Left Side: Illustration + Info Boxes */}
        <div className="tour-reg-left">
          <div className="tour-reg-guide-wrapper">
            <div className="boy-img-container">
              <img src={boyImg} className="tour-reg-boy" alt="Guide" />
            </div>

            <div className="tour-reg-info-column">
              <div className="info-box-v2 additional-info-v2">
                <h4 className="info-title-v2">Additional Info:</h4>
                <p className="info-text-v2">
                  "Once you register, our team will contact you with detailed itineraries,
                  timings, and special tips to make your visit comfortable and memorable."
                </p>

                <h4 className="info-title-v2">Travel Tips Reminder:</h4>
                <ul className="info-list-v2">
                  <li>Comfortable shoes and clothing are recommended</li>
                  <li>Keep local currency handy</li>
                  <li>Respect local customs</li>
                  <li>Be ready to explore Jaipur at your own pace</li>
                </ul>
              </div>

              <div className="info-box-v2 contact-info-v2">
                <h4 className="info-title-v2">Contact / Help Info:</h4>
                <p className="info-contact-v2">📩 contact@onenessfestival.in</p>
                <p className="info-contact-v2">📞 +91-XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form with Layered Vectors */}
        <div className="tour-reg-right">
          <div className="layered-frame">
            <img src={vectorOuter} className="vector-outer" alt="" />
            <img src={vectorInner} className="vector-inner" alt="" />

            <div className="form-inner-content">
              <div className="form-header-v2">
                <img src={logo} alt="Logo" className="form-logo-v2" />
                <h3 className="form-subtitle-v2">Tour Registration Form</h3>
              </div>

              <form className="tour-reg-form-v2">
                <div className="reg-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>

                <div className="reg-row">
                  <div className="reg-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" />
                  </div>
                  <div className="reg-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="reg-group">
                  <label>Tour Package</label>
                  <select>
                    <option>Select tour package</option>
                    <option>Royal Rajasthan Oneness Tour</option>
                    <option>Jaipur Heritage Tour</option>
                  </select>
                </div>

                <div className="reg-group">
                  <label>Special Requests / Notes</label>
                  <textarea placeholder="Enter your special notes"></textarea>
                </div>

                <div className="reg-btn-container">
                  <button type="submit" className="reg-submit-btn">SIGN ME UP!</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TourRegistration;
