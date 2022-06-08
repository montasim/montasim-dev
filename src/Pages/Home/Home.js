import React from 'react';
import AboutMe from './AboutMe';
import AboutMeBanner from './AboutMeBanner';
import ContactMe from './ContactMe';
import MyProjects from './MyProjects';
import MyService from './MyService';
import MySummary from './MySummary';

const Home = () => {
    return (
        <div className='text-gray-300'>
            <AboutMeBanner />
            <MySummary />
            <AboutMe />
            <MyService />
            <MyProjects />
            <ContactMe />
        </div>
    );
};

export default Home;