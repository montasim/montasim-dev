import React from 'react';
import professionalPhoto from '../../assets/images/SHUVO Transparent BG.png';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiJavascript, SiCplusplus, SiPython, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiTypescript, SiJsonwebtokens, SiGit, SiFirebase, SiHeroku, SiNetlify, SiVisualstudiocode } from 'react-icons/si';

const About = () => {
    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="grid grid-cols-1 overflow-hidden rounded-lg group sm:grid-cols-3 mx-4 lg:mx-36"
        >
            <div class="relative">
                <img src={professionalPhoto} class="max-w-sm rounded-lg shadow-2xl mx-auto" alt='montasim pic' />
            </div>

            <div class="p-8 sm:col-span-2">
                <h5 class="mt-4 font-bold text-3xl">ABOUT ME</h5>
                <hr className='mt-4' />

                <p class="mt-4 text-xl">
                    I am Mohammad Montasim -Al- Mamun Shuvo. I have completed my engineering on Computer Science in 2021. I started my journey with C programming language. I used to learn lots of tech. I wanted to be a web developer.

                    I want to make the internet minimal and easy to use. I am a MERN full stack developer. I write poem in JavaScript.
                </p>

                <p className='mt-8 text-2xl'>I love to work with those tech:</p>

                <div class="flex gap-2 lg:gap-4 mt-6">
                    <SiMongodb className='text-4xl' />
                    <SiExpress className='text-4xl' />
                    <SiReact className='text-4xl' />
                    <FaNodeJs className='text-4xl' />
                    <SiJavascript className='text-4xl' />
                    <SiHtml5 className='text-4xl' />
                    <SiCss3 className='text-4xl' />
                    <SiTailwindcss className='text-4xl' />
                    <SiBootstrap className='text-4xl' />
                    <SiTypescript className='text-4xl' />
                    <SiGit className='text-4xl' />
                </div>
            </div>
        </section>
    );
};

export default About;