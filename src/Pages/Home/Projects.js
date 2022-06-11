import React, { useEffect, useState } from 'react';
import Project from './Project';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [projects]);

    return (
        <section
            class="grid grid-cols-1 overflow-hidden rounded-lg group sm:grid-cols-3 mx-4 lg:mx-36"
        >
            <div class="relative">
                <img
                    class="object-cover w-full h-full"
                    src={professionalPhoto}
                    alt=""
                />
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
        
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" id='projects' className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
            <div className="max-w-xl mx-auto text-center">
                <div className='flex items-center justify-center'>
                    <p className='text-4xl mr-4' />
                    <h2 className="text-4xl font-bold sm:text-3xl text-center uppercase">
                        My Projects
                    </h2>
                </div>

                <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                    Some of my best project is displayed here.
                </p>
            </div>

            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
            >
                {
                    projects?.slice(-6).map((project, index) => <Project key={index} project={project} />)
                }
            </div>
        </section>
    );
};

export default Projects;