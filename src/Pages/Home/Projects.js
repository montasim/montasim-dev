import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoteWorthyProjects from './NoteWorthyProjects';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [noteWorthyProjects, setNoteWorthyProjects] = useState([]);

    useEffect(() => {
        fetch('projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    useEffect(() => {
        fetch('noteWorthyProjects.json')
            .then(res => res.json())
            .then(data => setNoteWorthyProjects(data));
    }, []);

    return (
        <section id='projects' className="min-h-screen">
            <div className="">
                <div className='flex items-center gap-6'>
                    <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>Some Things I’ve Built </h3>
                    <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 sm:gap-y-4"
            >
                {
                    projects?.map((project) => <Project key={project._id} project={project} />)
                }
            </div>

            <div className='text-center mt-14'>
                <h2 className='text-3xl font-bold text-accent mb-6'>Other Noteworthy Projects</h2>
                <Link to='/archive' className='text-lg text-primary hover:underline transition duration-700 ease-in-out'>view the archive</Link>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
                {
                    noteWorthyProjects?.map((project) => <NoteWorthyProjects key={project._id} project={project} />)
                }
            </div>

            <div className='flex justify-center items-center mt-10'>
                <button className="btn rounded-xs border-primary text-primary px-10 capitalize text-md mt-14 hover:bg-primary hover:opacity-70 hover:text-black" > Show All</button >
            </div>
        </section>
    );
};

export default Projects;