import React from 'react';
import About from './About';
import Introduction from './Introduction';
import Contact from './Contact';
import Projects from './Projects';
import Summary from './Summary';
import Education from './Education';

const Home = () => {
    return (
        <div className='lg:mx-40 md:mx-20 mx-4 text-[#8892b0]'>
            <Introduction />
            <Summary />
            <About />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;