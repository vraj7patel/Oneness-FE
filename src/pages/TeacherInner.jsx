import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeacherInnerHero from '../components/TeacherPage/TeacherInnerHero';
import TeacherInnerDetails from '../components/TeacherPage/TeacherInnerDetails';
import './TeacherInner.css';

const TeacherInner = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="teacher-inner-page">
            {/* Hero Section */}
            <TeacherInnerHero />

            <TeacherInnerDetails />
        </div>
    );
};

export default TeacherInner;
