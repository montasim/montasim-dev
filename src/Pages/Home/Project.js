import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsCode } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
    const { _id, projectCategory, projectName, projectDescription, liveWebsiteLink, clientSideCodeLink, serverSideCodeLink, technologyUsed, projectImg, projectStartDate, projectEndDate } = project;

    return (
        <div className='flex items-center justify-between my-8'>
            <div className='w-7/12'>
                <img src={projectImg} alt="" />
            </div>

            <div className='w-5/12'>
                <div className='text-right'>
                    <p className='text-lg text-primary mb-2'>{projectCategory} Project</p>
                    <h4 className='text-3xl font-bold text-accent'>{projectName}</h4>
                </div>

                <div className='bg-[#112240] p-6 text-right my-8 ml-[-100px]'>
                    <p>{projectDescription.slice(0, 180)}</p>
                </div>

                <div className='flow-root'>
                    <div className='flex gap-x-6 float-right mb-10 text-[#a8b2d1]'>
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