import React from 'react';
import About from './About';
import Introduction from './Introduction';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='mx-40 text-[#8892b0]'>
            <Introduction />
            <Summary />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;