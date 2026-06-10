import React from 'react';
import './UnderDevelopment.css';
import textureBg from '../../assets/exp page img/image 34 (1).png';
import dividerImg from '../../assets/exp page img/Group 5.png';

export default function UnderDevelopment() {
  return (
    <div className="dev-container" style={{ backgroundImage: `url('${textureBg}')` }}>
      <div className="dev-card">
        <div className="dev-icon-container">
          <svg className="dev-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#B5451B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="dev-title">COMING SOON</h1>
        <img src={dividerImg} alt="Divider" className="dev-divider" />
        <p className="dev-text-main">This section is currently under development.</p>
        <p className="dev-text-sub">The final version will be completed in the upcoming update.</p>
        <button onClick={() => window.history.back()} className="dev-btn">
          GO BACK
        </button>
      </div>
    </div>
  );
}
