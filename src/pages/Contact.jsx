import React from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactSection from '../components/Contact/ContactSection';
import ContactDetails from '../components/Contact/ContactDetails';
import ContactBottom from '../components/Contact/ContactBottom';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero />
      
      {/* Actual Contact Form Section */}
      <ContactSection />

      {/* Dark brown bottom section */}
      <ContactBottom />

      <ContactDetails />
    </div>
  );
};

export default Contact;
