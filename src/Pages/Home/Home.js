import React from 'react';
import AboutMe from './AboutMe';
import AboutMeBanner from './AboutMeBanner';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div>
            <AboutMeBanner />
            <AboutMe />
            <MyProjects />
        </div>
    );
};

export default Home;