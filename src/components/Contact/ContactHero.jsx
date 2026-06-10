import React from 'react';
import './ContactHero.css';
import redBg from '../../assets/Rectangle 79.png';
import ornamentImg from '../../assets/d4119d57a886abf8e8b352c386d80fa9e2e3db7f.png';
import team4 from '../../assets/team 4.png';
import team3 from '../../assets/team 3.png';
import group237 from '../../assets/Group 237.png';
import group238 from '../../assets/Group 238.png';
import mandalaImg from '../../assets/Group 54.png';

const ContactHero = () => {
  return (
    <section className="contact-hero-wrapper">
      <div className="contact-hero-bg" style={{ backgroundImage: `url(${redBg})` }}>
        {/* Top Ornament */}
        <div className="hero-ornament hero-top-ornament" style={{ backgroundImage: `url(${ornamentImg})` }} />
        
        {/* Center Mandala Ornament */}
        <img src={mandalaImg} alt="" className="hero-center-mandala" />

        {/* Left Team with Brush Shape on TOP */}
        <div className="side-team-container left-edge">
          <img src={team3} className="team-member-img left-team-img" alt="Team Left" />
          <div 
            className="hero-left-brush" 
            style={{ WebkitMaskImage: `url(${group237})`, maskImage: `url(${group237})` }} 
          />
        </div>

        {/* Right Team with Brush Shape on TOP */}
        <div className="side-team-container right-edge">
          <img src={team4} className="team-member-img right-team-img" alt="Team Right" />
          <div 
            className="hero-right-brush" 
            style={{ WebkitMaskImage: `url(${group238})`, maskImage: `url(${group238})` }} 
          />
        </div>

        {/* Bottom Ornament */}
        <div 
          className="hero-ornament hero-bottom-ornament" 
          style={{ WebkitMaskImage: `url(${ornamentImg})`, maskImage: `url(${ornamentImg})` }} 
        />
      </div>
    </section>
  );
};

export default ContactHero;
