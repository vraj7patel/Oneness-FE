import React from 'react';
import './TeamInfo.css';
import separatorImg from '../../assets/teampage/Group 5.png';

const TeamInfo = () => {
  return (
    <section className="team-info-section">
      <div className="team-info-container">
        <h2 className="team-info-year">2026</h2>
        <h2 className="team-info-title">THE ONENESS FESTIVAL TEAM</h2>
        
        <div className="team-info-separator-container">
          <img src={separatorImg} alt="Separator" className="team-info-separator" />
        </div>

        <p className="team-info-text">
          We are a small, passionate team dedicated to crafting transformative festival experiences. Each member brings a unique creative spark, combined with years of experience in event design, logistics, and immersive experiences.
          <br />
          <br />
          Our intention is to not just organize events; we aim to create entire worlds where connection, presence, and transformation can thrive. From the first spark of inspiration to the final moment of celebration, we craft every detail with intention. Our mission is simple: to guide you into a space where unity, creativity, and personal awakening come alive.
        </p>
      </div>
    </section>
  );
};

export default TeamInfo;
