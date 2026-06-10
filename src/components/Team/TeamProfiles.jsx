import React from 'react';
import './TeamProfiles.css';

import img1 from '../../assets/teampage/Mask group (9).png';
import img2 from '../../assets/teampage/Mask group (10).png';
import img3 from '../../assets/teampage/Mask group (11).png';
import img4 from '../../assets/teampage/Mask group (12).png';


import frameImg from '../../assets/teampage/Group (10).png';

const profiles = [
  {
    id: 1,
    name: 'Yash Kalra',
    image: img1,
    align: 'left',
    text: 'is a globally recognized event strategist, entrepreneur, and motivational speaker with over 20 years of experience in hospitality and large-scale event execution. As a key force behind the legacy-driven Kalra Group, he has delivered world-class destination weddings, corporate events, and experiential gatherings across 80+ cities worldwide. Known for his precision, storytelling, and high-energy leadership style, Yash blends business mastery with inspiration, empowering audiences to lead, create, and evolve.'
  },
  {
    id: 2,
    name: 'Nicholas Schenk',
    image: img2,
    align: 'right',
    text: 'is a Dutch-born spiritual teacher, facilitator, with over a decade of experience in guiding conscious workshops, retreats, and transformational experiences. Blending Western mysticism with Eastern philosophy, he creates powerful spaces for self-discovery. Known for his grounded and modern approach, Nicholas helps individuals reconnect with their inner truth, open the heart, and embody their full potential. His work centers around awakening life force energy, deepening human connection, and translating spiritual insight into real, lived experience.'
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    image: img3,
    align: 'left',
    text: 'is a dedicated professional with a deep passion for creating meaningful and transformative experiences. With a strong background in event management, he has spent several years bringing people together through well-organised and impactful events. Beyond his professional journey, Rahul is committed to personal growth, positive energy, and contributing to spiritually enriching environments. His ability to connect with people, manage responsibilities with calmness, and ensure smooth execution makes him a valuable part of any spiritual gathering. With a blend of practical expertise and a grounded mindset, Rahul strives to support and uplift others while contributing wholeheartedly to the success and purpose of the event.'
  },
  {
    id: 4,
    name: 'Rishi Joshi',
    image: img4,
    align: 'right',
    text: 'is a Jaipur-based event creator and marketeer with a passion for conscious gatherings and meaningful experiences. Blending practical strategy with a deep curiosity for human connection, he creates spaces for growth and shared exploration. Known for his grounded and sincere approach, Rishi helps bring ideas to life, foster authentic relationships, and support collective experiences. His work centers around conscious collaboration, creative expression, and translating vision into real, lived moments that feel both natural and impactful.'
  }
];

const TeamProfiles = () => {
  return (
    <section className="team-profiles-section">
      <div className="team-profiles-container">
        


        {profiles.map((profile, index) => (
          <div 
            key={profile.id} 
            className={`profile-row ${profile.align === 'right' ? 'row-reverse' : ''}`}
          >
            <div className="profile-image-col">
              <div className="profile-image-wrapper">
                <img src={frameImg} alt="" className="profile-frame" />
                <img src={profile.image} alt={profile.name} className="profile-img" />
              </div>
            </div>
            <div className={`profile-text-col ${profile.align === 'right' ? 'text-right' : 'text-left'}`}>
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-desc">{profile.text}</p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default TeamProfiles;
