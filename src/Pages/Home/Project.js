import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = ({ project }) => {
    const { _id, projectCategory, projectName, projectDescription, liveWebsiteLink, clientSideCodeLink, serverSideCodeLink, technologyUsed, projectImg, projectStartDate, projectEndDate } = project;

    return (
        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between gap-y-8 my-8'>
            <img
                alt={projectName + ' home page'}
                src={projectImg}
                className="object-cover rounded-md lg:w-8/12 md:w-7/12 w-full"
            />

            <div className='lg:w-5/12 md:w-5/12 w-full'>
                <div className='text-right'>
                    <p className='lg:text-lg md:text-lg text-md text-primary mb-2'>{projectCategory} Project</p>
                    <h4 className='lg:text-2.5xl md:text-2.5xl text-2xl font-bold text-accent'>{projectName}</h4>
                </div>

                <div className='bg-[#112240] p-6 text-right my-6 lg:ml-[-100px] md:lg:ml-[-100px] ml-0 rounded'>
                    <p>{projectDescription.slice(0, 140)}</p>
                </div>

                <div className='flow-root'>
                    <div className='flex gap-x-6 float-right mb-8 text-[#a8b2d1]'>
                        <p>{technologyUsed}</p>
                    </div>
                </div>

                <div className='flow-root'>
                    <div className='grid grid-cols-2 gap-x-6 float-right text-2xl text-accent'>
                        <a href={clientSideCodeLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiGithub /></a>
                        <a href={liveWebsiteLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiExternalLink /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;