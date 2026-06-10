import React from 'react';
import AccommodationHero from '../components/Accommodation/AccommodationHero';
import AccommodationRegistration from '../components/Accommodation/AccommodationRegistration';

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <AccommodationHero />
      <AccommodationRegistration />
    </div>
  );
};

export default Accommodation;
