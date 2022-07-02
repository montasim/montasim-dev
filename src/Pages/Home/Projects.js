import React, { useEffect, useState } from 'react';
import NoteWorthyProjects from './NoteWorthyProjects';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [projects]);

    return (
        <section id='projects' className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 min-h-screen">
            <div className="">
                <div className='flex items-center gap-6'>
                    <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>Some Things I’ve Built </h3>
                    <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 sm:gap-y-4"
            >
                {
                    projects?.slice(-6).map((project) => <Project key={project._id} project={project} />)
                }
            </div>

            <div className='text-center mt-28'>
                <h2 className='text-3xl font-bold text-accent mb-6'>Other Noteworthy Projects</h2>
                <p className='text-lg text-primary'>view the archive</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20'>
                {
                    projects?.slice(-6).map((project) => <NoteWorthyProjects key={project._id} project={project} />)
                }
            </div>
        </section>
    );
};

export default Projects;