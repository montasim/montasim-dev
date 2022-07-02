import React, { useEffect, useState } from 'react';
import Project from './Project';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaRegFolder } from 'react-icons/fa';

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

            <div className='text-center'>
                <h2 className='text-3xl font-bold text-accent mb-6'>Other Noteworthy Projects</h2>
                <p className='text-lg text-primary'>view the archive</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20'>
                <div class="grid flex-grow h-96 card bg-[#112240] rounded-md p-6">
                    <div className='flex justify-between items-center mb-8'>
                        <FaRegFolder className='text-5xl text-primary' />
                        <BsBoxArrowUpRight className='text-xl text-accent' />
                    </div>

                    <div>
                        <h4 className='text-xl text-accent font-bold'>Tools Manufacturer Website</h4>

                        <p className='mt-4 mb-8'>
                            Jantrik is a tools manufacturer website. Here user can create an account with email and password. User can also use social media like Google to login.
                        </p>

                        <div className='grid grid-cols-3 gap-4'>
                            <small>React</small>
                            <small>React</small>
                            <small>React</small>
                        </div>
                    </div>
                </div>

                <div class="grid flex-grow h-96 card bg-[#112240] rounded-md p-6">
                    <div className='flex justify-between items-center mb-8'>
                        <FaRegFolder className='text-5xl text-primary' />
                        <BsBoxArrowUpRight className='text-xl text-accent' />
                    </div>

                    <div>
                        <h4 className='text-xl text-accent font-bold'>Tools Manufacturer Website</h4>

                        <p className='mt-4 mb-8'>
                            Jantrik is a tools manufacturer website. Here user can create an account with email and password. User can also use social media like Google to login.
                        </p>

                        <div className='grid grid-cols-3 gap-4'>
                            <small>React</small>
                            <small>React</small>
                            <small>React</small>
                        </div>
                    </div>
                </div>

                <div class="grid flex-grow h-96 card bg-[#112240] rounded-md p-6">
                    <div className='flex justify-between items-center mb-8'>
                        <FaRegFolder className='text-5xl text-primary' />
                        <BsBoxArrowUpRight className='text-xl text-accent' />
                    </div>

                    <div>
                        <h4 className='text-xl text-accent font-bold'>Tools Manufacturer Website</h4>

                        <p className='mt-4 mb-8'>
                            Jantrik is a tools manufacturer website. Here user can create an account with email and password. User can also use social media like Google to login.
                        </p>

                        <div className='grid grid-cols-3 gap-4'>
                            <small>React</small>
                            <small>React</small>
                            <small>React</small>
                        </div>
                    </div>
                </div>

                <div class="grid flex-grow h-96 card bg-[#112240] rounded-md p-6">
                    <div className='flex justify-between items-center mb-8'>
                        <FaRegFolder className='text-5xl text-primary' />
                        <BsBoxArrowUpRight className='text-xl text-accent' />
                    </div>

                    <div>
                        <h4 className='text-xl text-accent font-bold'>Tools Manufacturer Website</h4>

                        <p className='mt-4 mb-8'>
                            Jantrik is a tools manufacturer website. Here user can create an account with email and password. User can also use social media like Google to login.
                        </p>

                        <div className='grid grid-cols-3 gap-4'>
                            <small>React</small>
                            <small>React</small>
                            <small>React</small>
                        </div>
                    </div>
                </div>

                <div class="grid flex-grow h-96 card bg-[#112240] rounded-md p-6">
                    <div className='flex justify-between items-center mb-8'>
                        <FaRegFolder className='text-5xl text-primary' />
                        <BsBoxArrowUpRight className='text-xl text-accent' />
                    </div>

                    <div>
                        <h4 className='text-xl text-accent font-bold'>Tools Manufacturer Website</h4>

                        <p className='mt-4 mb-8'>
                            Jantrik is a tools manufacturer website. Here user can create an account with email and password. User can also use social media like Google to login.
                        </p>

                        <div className='grid grid-cols-3 gap-4'>
                            <small>React</small>
                            <small>React</small>
                            <small>React</small>
                        </div>
                    </div>
                </div>

                <div class="grid flex-grow h-96 card bg-[#112240] rounded-md p-6">
                    <div className='flex justify-between items-center mb-8'>
                        <FaRegFolder className='text-5xl text-primary' />
                        <BsBoxArrowUpRight className='text-xl text-accent' />
                    </div>

                    <div>
                        <h4 className='text-xl text-accent font-bold'>Tools Manufacturer Website</h4>

                        <p className='mt-4 mb-8'>
                            Jantrik is a tools manufacturer website. Here user can create an account with email and password. User can also use social media like Google to login.
                        </p>

                        <div className='grid grid-cols-3 gap-4 text-[#677391]'>
                            <small>React</small>
                            <small>React</small>
                            <small>React</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;