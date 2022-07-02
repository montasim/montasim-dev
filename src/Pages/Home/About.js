import React from 'react';
import professionalPhoto from '../../assets/images/SHUVO Transparent BG.png';
import { BiRightArrow } from 'react-icons/bi';

const About = () => {
    return (
        <section className='mb-16' id='about'>
            <div className='flex items-center gap-6'>
                <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>About Me </h3>
                <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-y-8'>
                <div className='mt-12 text-justify lg:w-6/12 md:w-6/12 w-full'>
                    <p>
                        Hello! My name is Mohammad Montasim -Al- Mamun Shuvo and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I was doing a university project — turns out this project taught me a lot about HTML & CSS!
                    </p>

                    <p className='my-5'>
                        Fast-forward to today, and I’ve had the privilege of working at an organization, as a Management Information System Officer (MIS). My main focus these days is building accessible, inclusive products and digital experiences using MERN Stack.
                    </p>

                    <p>
                        So far, I've built some exciting full stack project.
                    </p>

                    <p className='my-5'>
                        Here are a few technologies I’ve been working with recently:
                    </p>

                    <div className='grid grid-cols-2 gap-6 w-96'>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' /> JavaScript (ES6+)</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />React JS</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Node.js</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Express.js</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />Tailwind CSS</small>
                        <small className='flex items-center gap-x-3'><BiRightArrow className='text-primary' />BootStrap</small>
                    </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                    <div class="flex lg:py-12">
                        <div class="relative overflow-hidden bg-no-repeat bg-cover w-72" style={{ "backgroundPosition": "50%" }}>
                            <img src={professionalPhoto} alt='montasim avatar' class="w-full mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;