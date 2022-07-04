import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const NoteWorthyProjects = ({ project }) => {
    const { _id, projectCategory, projectName, projectDescription, liveWebsiteLink, clientSideCodeLink, serverSideCodeLink, technologyUsed, projectImg, projectStartDate, projectEndDate } = project;
    return (
        <div className="h-96 bg-[#112240] rounded-md p-6">
            <div className='flex justify-between items-center mb-8'>
                <FaRegFolder className='text-5xl text-primary' />

                <div className='grid grid-cols-2 gap-x-6 float-right text-2xl text-accent'>
                    <a href={clientSideCodeLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiGithub /></a>
                    <a href={liveWebsiteLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiExternalLink /></a>
                </div>
            </div>

            <div>
                <h4 className='text-xl text-accent font-bold'>{projectName}</h4>

                <p className='mt-4 mb-8'>
                    {projectDescription.slice(0, 180)}
                </p>

                <div className='flex gap-x-6'>
                    <small>{technologyUsed}</small>
                </div>
            </div>
        </div>
    );
};

export default NoteWorthyProjects;