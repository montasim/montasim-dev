import React, { useEffect, useState } from 'react';
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
                    <h3 className='text-3xl text-accent font-bold'>Some Things I’ve Built </h3>
                    <hr className='bg-[#233554] w-80 h-0.5'></hr>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
            >
                {
                    projects?.slice(-6).map((project, index) => <Project key={index} project={project} />)
                }
            </div>
        </section>
    );
};

export default Projects;