import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccommodationHero.css';
import image49 from '../../assets/Accommodation/image 49.png';
import maskImg from '../../assets/Mask group.png';

const AccommodationHero = () => {
  const navigate = useNavigate();

  const goToTickets = () => {
    navigate('/tickets');
  };

  return (
    <section className="accommodation-hero">
      {/* Background Image Container */}
      <div
        className="accommodation-hero-bg"
        style={{ backgroundImage: `url(${image49})` }}
      >
        {/* Deep Reddish-Pink Burgundy Tint Overlay matching user's photo */}
        <div className="accommodation-hero-overlay" />

        {/* Top Brush Stroke (Seamless transition from header) */}
        <div
          className="accommodation-brush-top"
          style={{ WebkitMaskImage: `url(${maskImg})`, maskImage: `url(${maskImg})` }}
        />

        {/* Hero Content */}
        <div className="accommodation-hero-content">
          <p className="accommodation-subtitle">The Oneness Festival Packages<span><br/>2026</span></p>
          <h1 className="accommodation-title">ACCOMMODATION REGISTRATION</h1>

          <div className="accommodation-btn-wrapper">
            <button className="accommodation-reserve-btn" onClick={goToTickets}>
              BOOK TICKET NOW
            </button>
          </div>
        </div>

        {/* Bottom Brush Stroke (Teal or Cream, let's use the page background color for seamless blending) */}
        <div
          className="accommodation-brush-bottom"
          style={{ WebkitMaskImage: `url(${maskImg})`, maskImage: `url(${maskImg})` }}
        />
      </div>
    </section>
  );
};

export default AccommodationHero;
