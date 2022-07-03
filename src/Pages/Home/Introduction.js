import React from 'react';

const Introduction = () => {
    return (
        <section className='lg:mt-8 md:mt-6 mt-6'>
            <div className="hero-content min-h-screen flex-col lg:flex-row-reverse" id='introduction' >
                <div>
                    <p className='mb-2 text-[18px] text-[#64ffda]'>Hi, my name is</p>
                    <h1 className="lg:text-[66px] md:text-[46px] text-[36px] font-bold text-[#ccd6f6]">Montasim -Al- Mamun.</h1>
                    <h5 className='lg:text-[66px] md:text-[46px] text-[36px] font-bold text-[#8892b0]'>I build things for the web.</h5>
                    <p className="mt-4 py-2 lg:w-7/12 text-[18px] text-[#8892b0]" > I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products using MERN Stack.</p >
                    <a className="btn rounded-xs border-primary text-primary px-10 capitalize text-md mt-14 hover:bg-primary hover:opacity-70 hover:text-black" href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank' rel="noreferrer" > Download My Resume</a >
                </div >
            </div >
        </section >
    );
};

export default Introduction;