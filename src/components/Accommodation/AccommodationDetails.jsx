import React from 'react';
import './AccommodationDetails.css';

// Importing decorations if needed
import pillarLeft from '../../assets/Group (2).png';
import pillarRight from '../../assets/Group (3).png';
import dividerImg from '../../assets/Group 5.png';

const AccommodationDetails = () => {
  const accommodations = [
    {
      id: 'palace-suite',
      title: "Royal Palace Suite",
      category: "Heritage Ultra-Luxury",
      tagline: "Live Like Rajasthan's Royalty",
      description: "Experience the grandeur of ancient Rajputana. Indulge in beautiful heritage suites featuring hand-painted fresco ceilings, ornate marble archways, royal vintage furniture, and a private stone balcony looking out over serene lake waters.",
      price: "Inquire for Rates",
      features: [
        "Palatial King Bed with custom silk linen",
        "Private heritage balcony & lounge area",
        "Personal butler service & 24/7 assistance",
        "Luxury clawfoot bathtub and organic bath amenities"
      ],
      inclusions: [
        "In-room traditional multi-course organic breakfast",
        "Dedicated luxury SUV festival shuttle transfers",
        "VIP lounge access & artist meet-and-greet pass"
      ]
    },
    {
      id: 'oasis-room',
      title: "Oasis Premium Room",
      category: "Boutique Serene Comfort",
      tagline: "Serenity and Elegant Comfort",
      description: "A peaceful luxury sanctuary combining elegant modern amenities with authentic Rajasthani craftsmanship. Located amidst tranquil lush gardens, offering stunning views of central courtyard pool and private stone patio sit-outs.",
      price: "Inquire for Rates",
      features: [
        "Premium Queen Bed with organic cotton linens",
        "Private sit-out overlooking beautiful gardens",
        "Fully-stocked organic tea & espresso bar",
        "Spacious stone shower & custom wellness kits"
      ],
      inclusions: [
        "Deluxe morning organic breakfast buffet",
        "Daily morning sunrise yoga and meditation session",
        "Scheduled luxury shuttle service to festival grounds"
      ]
    },
    {
      id: 'glamping-camp',
      title: "Oneness Glamping Camp",
      category: "Eco-Luxury Camping",
      tagline: "Nature's Serenade Under Starry Skies",
      description: "Stay in luxury Swiss cottage tents steps away from the festival heartbeat. Perfectly blending natural closeness with premium comforts. Features private wooden sit-outs, warm custom rugs, and premium attached bathrooms.",
      price: "Inquire for Rates",
      features: [
        "Cozy double bed with down duvets",
        "Attached modern bathroom with hot running water",
        "Private outdoor wooden deck with deck chairs",
        "Themed warm lighting and acoustic soundscapes"
      ],
      inclusions: [
        "Farm-to-table organic breakfast at the camp",
        "Nightly acoustic bonfire circles and stargazing",
        "Walking access (within 3 mins) to all festival areas"
      ]
    }
  ];

  const handleSelect = (accommodationName) => {
    const bookingSection = document.getElementById('accommodation-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill the select field with the chosen option if possible
      const selectElem = document.getElementById('accomm-select');
      if (selectElem) {
        selectElem.value = accommodationName;
      }
    }
  };

  return (
    <section className="accommodation-details-section">
      {/* Decorative Side Pillars */}
      <img src={pillarLeft} className="accomm-pillar accomm-pillar-left" alt="" />
      <img src={pillarRight} className="accomm-pillar accomm-pillar-right" alt="" />

      <div className="accomm-details-container">
        
        {/* Section Header */}
        <div className="accomm-section-header">
          <p className="accomm-year-tag">ONENESS 2026</p>
          <h2 className="accomm-section-title">EXCLUSIVE STAY PACKAGES</h2>
          <img src={dividerImg} alt="" className="accomm-divider-img" />
          <p className="accomm-section-desc">
            To make your Oneness experience fully immersive and effortless, we present three levels of premium curated accommodation. Relax, recharge, and absorb the festival's energies in high comfort and beauty.
          </p>
        </div>

        {/* Accommodation Cards */}
        <div className="accomm-cards-grid">
          {accommodations.map((item, index) => (
            <div key={item.id} className={`accomm-card card-delay-${index}`}>
              <div className="accomm-card-header">
                <span className="accomm-card-category">{item.category}</span>
                <h3 className="accomm-card-title">{item.title}</h3>
                <p className="accomm-card-tagline">“{item.tagline}”</p>
              </div>

              <div className="accomm-card-body">
                <p className="accomm-card-desc">{item.description}</p>
                
                <div className="accomm-features-box">
                  <h4>Room Amenities</h4>
                  <ul>
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="bullet-point">✦</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="accomm-inclusions-box">
                  <h4>Oneness Exclusives</h4>
                  <ul>
                    {item.inclusions.map((inc, iIdx) => (
                      <li key={iIdx}>
                        <span className="bullet-point">✾</span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="accomm-card-footer">
                <div className="accomm-price-tag">{item.price}</div>
                <button 
                  className="accomm-select-btn"
                  onClick={() => handleSelect(item.title)}
                >
                  INQUIRE / BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccommodationDetails;
