import React from 'react';
import './TourPackages.css';
import pillarLeft from '../../assets/Group (2).png';
import pillarRight from '../../assets/Group (3).png';
import maskImg from '../../assets/Mask group.png';

const TourPackages = () => {
  const packages = [
    {
      type: "Royal Rajasthan Oneness Tour",
      details: "Experience Jaipur's Majestic Forts, Palaces, And Royal History.",
      location: "Jaipur And Rajasthan Tour Package Available"
    },
    {
      type: "Jaipur Heritage Tour",
      details: "Walk Through The City Palace, Hawa Mahal, And Bustling Bazaars.",
      location: "Jaipur Package Available"
    },
    {
      type: "Oneness In Tradition Tour Package",
      details: "Discover Traditional Arts, Crafts, And Local Rituals.",
      location: "Jaipur And Rajasthan Tour Package Available"
    },
    {
      type: "Inner Oneness Journey - Conscious Tours",
      details: "Guided Reflective Journey Combining Cultural Sites And Spiritual Practices.",
      location: "Jaipur And Rajasthan Tour Package Available"
    }
  ];

  return (
    <section className="tour-packages-section" >
      <div className="tp-container">
        {/* Left Pillar */}
        <img src={pillarLeft} className="tp-pillar tp-pillar-left" alt="" />

        {/* Table Content Area */}
        <div className="tp-content-wrapper">
          <div className="tp-table-container">
            <table className="tp-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Jaipur/Rajasthan</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={idx}>
                    <td className="tp-pkg-type">{pkg.type}</td>
                    <td>{pkg.details}</td>
                    <td>{pkg.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reserve Button */}
          <div className="tp-btn-container">
            <div className="tp-btn-wrapper">
              <span className="tp-btn-ornament tp-orn-tl" />
              <span className="tp-btn-ornament tp-orn-tr" />
              <button className="tp-reserve-btn">RESERVE YOUR TOUR SPOT</button>
              <span className="tp-btn-ornament tp-orn-bl" />
              <span className="tp-btn-ornament tp-orn-br" />
            </div>
          </div>
        </div>

        {/* Right Pillar */}
        <img src={pillarRight} className="tp-pillar tp-pillar-right" alt="" />
      </div>
    </section>
  );
};

export default TourPackages;
