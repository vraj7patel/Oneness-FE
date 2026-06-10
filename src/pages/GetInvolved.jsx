import React from 'react';
import './GetInvolved.css';
import GetInvolvedHero from '../components/GetInvolved/GetInvolvedHero';
import GetInvolvedSection from '../components/GetInvolved/GetInvolvedSection';

const GetInvolved = () => {
  return (
    <div className="get-involved-page">
      <GetInvolvedHero />
      <GetInvolvedSection />
    </div>
  );
};

export default GetInvolved;
