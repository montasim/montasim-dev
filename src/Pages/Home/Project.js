import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsCode } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Project = ({ project }) => {
    const navigate = useNavigate();
    const { projectCategory, projectName, projectDescription, liveWebsiteLink, clientSideCodeLink, serverSideCodeLink, technologyUsed, projectImg, projectStartDate, projectEndDate } = project;

    return (
        <div
            className="block p-4 rounded-lg shadow-lg hover:shadow-primary/50 border border-gray-400 w-96"
        >
            <img
                alt={projectName + 'image'}
                src={projectImg}
                className="object-cover h-56 rounded-md w-full"
            />

            <div className="mt-4">
                <div className='h-44'>
                    <p className="text-sm text-gray-400 mt-10">Tech: {technologyUsed}</p>
                    <p className="font-medium text-2xl mt-1">{projectName}</p>
                    <p className='mt-4'>{projectDescription.length > 200 ? projectDescription?.slice(0, 196) + ' ...' : projectDescription}</p>
                </div>

                <dl className="flex items-center mt-12 space-x-8 text-xs">
                    <a href={liveWebsiteLink} className="sm:inline-flex sm:items-center sm:shrink-0">
                        <CgWebsite className='text-xl text-secondary' />

                        <div className="sm:ml-1 mt-1.5 sm:mt-0">
                            <dd className="font-medium">
                                Live Website
                            </dd>
                        </div>
                    </a>

                    <a href={clientSideCodeLink} className="sm:flex sm:items-center sm:shrink-0">
                        <BsCode className='text-2xl text-secondary' />

                        <div className="sm:ml-1 mt-1.5 sm:mt-0">
                            <dd className="font-medium">
                                Client Code
                            </dd>
                        </div>
                    </a>

                    <a href={serverSideCodeLink} className="sm:inline-flex sm:items-center sm:shrink-0">
                        <BsCode className='text-2xl text-secondary' />

                        <div className="sm:ml-1 mt-1.5 sm:mt-0">
                            <dd className="font-medium">
                                Server Code
                            </dd>
                        </div>
                    </a>
                </dl>

                <div className="flex justify-between items-center mt-6">
                    <button onClick={() => navigate(`/project-details/${projectName}`)} className="btn btn-primary btn-sm text-white">Details</button>
                    <p className='text-sm'>Type: {projectCategory}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;