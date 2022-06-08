import React from 'react';
import AboutMe from './AboutMe';
import AboutMeBanner from './AboutMeBanner';
import MyProjects from './MyProjects';
import MyService from './MyService';

const Home = () => {
    return (
        <div>
            <AboutMeBanner />
            <AboutMe />
            <MyService />
            <MyProjects />
        </div>
    );
};

export default Home;