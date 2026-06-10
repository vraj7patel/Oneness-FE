import React from 'react';
import './TeamImage.css';
import dancersImg from '../../assets/teampage/Gemini_Generated_Image_mw910omw910omw91 1.png';
import maskTop from '../../assets/teampage/Mask group (5).png';
import maskBottom from '../../assets/teampage/Mask group (7).png';

const TeamImage = () => {
  return (
    <section className="team-image-section">
      <div 
        className="team-image-bg" 
        style={{ backgroundImage: `url(${dancersImg})` }}
      >
        <img src={maskBottom} alt="Top Mask" className="team-image-mask-top" />
        <img src={maskTop} alt="Bottom Mask" className="team-image-mask-bottom" />
      </div>
    </section>
  );
};

export default TeamImage;
