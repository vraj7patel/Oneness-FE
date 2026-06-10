import React from 'react';
import TeamHero from '../components/Team/TeamHero';
import TeamInfo from '../components/Team/TeamInfo';
import TeamProfiles from '../components/Team/TeamProfiles';
import TeamImage from '../components/Team/TeamImage';

const Team = () => {
  return (
    <div className="team-page" style={{ width: '100%' }}>
      <TeamHero />
      <TeamInfo />
      <TeamImage />
      <TeamProfiles />
    </div>
  );
};

export default Team;
