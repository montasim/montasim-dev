import React from 'react';
import professionalPhoto from '../../assets/images/SHUVO Transparent BG.png';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiJavascript, SiCplusplus, SiPython, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiTypescript, SiJsonwebtokens, SiGit, SiFirebase, SiHeroku, SiNetlify, SiVisualstudiocode } from 'react-icons/si';

const AboutMe = () => {
    return (
        <div class="hero min-h-screen bg-gray-900">
            <div class="hero-content flex-col lg:flex-row justify-between">
                <img src={professionalPhoto} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-7/12 '>
                    <h1 class="text-3xl font-bold uppercase">About Me</h1>
                    <hr className='mt-3' />
                    <p class="pt-6 text-[20px]">
                        I am Mohammad Montasim -Al- Mamun Shuvo. I have completed my engineering on Computer Science in 2021. I started my journey with C programming language. I used to learn lots of tech. I wanted to be a web developer.
                    </p>
                    <p className='text-[20px] pt-5 pb-12'>I want to make the internet minimal and easy to use. I am a MERN full stack developer. I write poem in JavaScript.</p>
                    <h6 className='text-2xl font-semibold'>I love to work with those tech:</h6>
                    <div class="grid grid-flow-col gap-2 text-4xl mt-6">
                        <a><SiMongodb /></a>
                        <a><SiExpress /></a>
                        <a><SiReact /></a>
                        <a><FaNodeJs /></a>
                        <a><SiJavascript /></a>
                        <a><SiCplusplus /></a>
                        <a><SiPython /></a>
                        <a><SiHtml5 /></a>
                        <a><SiCss3 /></a>
                        <a><SiTailwindcss /></a>
                        <a><SiBootstrap /></a>
                        <a><SiTypescript /></a>
                        <a><SiJsonwebtokens /></a>
                        <a><SiGit /></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;