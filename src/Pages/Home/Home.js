import React from 'react';
import AboutMe from './AboutMe';
import AboutMeBanner from './AboutMeBanner';
import MyProjects from './MyProjects';
import MyService from './MyService';

const Home = () => {
    return (
        <div className='text-gray-300'>
            <AboutMeBanner />
            <AboutMe />
            <MyService />
            <MyProjects />
        </div>
    );
};

export default Home;