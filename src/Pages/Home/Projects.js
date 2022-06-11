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
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" id='projects' className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 min-h-screen">
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