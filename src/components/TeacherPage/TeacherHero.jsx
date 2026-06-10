import React from 'react';
import { Link } from 'react-router-dom';
import './TeacherHero.css';

import heroBg from '../../assets/teacher page/bg (1).png';
import decorImg from '../../assets/teacher page/Group 60 (6).png';

const TeacherHero = () => {
  return (
    <section className="teacher-hero-section">
      {/* Background Image */}
      <img src={heroBg} alt="" className="teacher-hero-bg" />

      {/* White brush / torn edges */}
      <div className="teacher-brush-edge teacher-brush-top"></div>
      <div className="teacher-brush-edge teacher-brush-bottom"></div>

      {/* Centre Content */}
      <div className="teacher-hero-content">
        <p className="teacher-hero-subtitle">The Oneness Festival Teachers</p>
        <p className="teacher-hero-year">2026</p>
        <h1 className="teacher-hero-title">
          Music, Lectures, Workshops and<br />Devotion.
        </h1>

        {/* CTA Button */}
        <div className="teacher-book-btn-wrapper">
          <Link to="/tickets">
            <button className="teacher-book-btn">BOOK TICKET NOW</button>
          </Link>
          {/* <img src={decorImg} alt="" className="teacher-btn-decor" />  */}
        </div>
      </div>
    </section>
  );
};

export default TeacherHero;
