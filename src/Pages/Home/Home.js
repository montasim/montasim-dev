import React from 'react';
import About from './About';
import Introduction from './Introduction';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Summary from './Summary';
import Social from '../../Components/Social';

const Home = () => {
    return (
        <div className='mx-44'>
            <Introduction />
            <Summary />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;