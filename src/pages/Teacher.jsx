import React from 'react';
import TeacherHero from '../components/TeacherPage/TeacherHero';
import TeacherGrid from '../components/TeacherPage/TeacherGrid';

const Teacher = () => {
  return (
    <div className="teacher-page-wrapper">
      <TeacherHero />
      <TeacherGrid />
    </div>
  );
};

export default Teacher;
