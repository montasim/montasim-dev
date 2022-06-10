import React from 'react';
import professionalPhoto from '../../assets/images/SHUVO Transparent BG.png';

const AboutMeBanner = () => {
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" class="hero min-h-screen bg-gray-900">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={professionalPhoto} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <p className='mb-2 text-xl'>Hello 👋, I am</p>
                    <h1 class="text-5xl font-bold uppercase">Montasim Al Mamun</h1>
                    <h5 className='text-2xl mt-4 uppercase'>Full Stack Web Developer</h5>
                    <p class="py-6 lg:w-8/12 text-[20px]">I am a proficient MERN stack developer who is passionate about developing websites and web-based applications.</p>
                    <a class="btn btn-primary" href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank'>Download My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default AboutMeBanner;