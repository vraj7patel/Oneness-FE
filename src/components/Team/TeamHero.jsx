import React from 'react';
import './TeamHero.css';
import teamBg from '../../assets/teampage/Team page 1.png';
import maskTop from '../../assets/teampage/Mask group (5).png';
import maskBottom from '../../assets/teampage/Mask group (7).png';

const TeamHero = () => {
  return (
    <section className="team-hero">
      {/* Background Image Container */}
      <div
        className="team-hero-bg"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        {/* Dark overlay matching user's photo to enhance readability */}
        <div className="team-hero-overlay" />

        <img src={maskBottom} alt="Top Mask" className="team-hero-mask-top" />

        {/* Hero Content */}
        <div className="team-hero-content">
          <p className="team-subtitle">
            The Oneness Festival Team <span className="team-year">2026</span>
          </p>
          <h1 className="team-title">CREATING THE PATH TO ONENESS</h1>
        </div>

        {/* <img src={maskBottom} alt="Bottom Mask" className="team-hero-mask-bottom" /> */}
      </div>
    </section>
  );
};

export default TeamHero;
