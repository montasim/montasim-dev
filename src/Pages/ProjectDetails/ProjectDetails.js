import React, { useEffect, useState } from 'react';
import { BsCode } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { _id } = useParams();
    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(() => {
        fetch(`https://a-coders-diary.herokuapp.com/project-details/${_id}`)
            .then(res => res.json())
            .then(data => setProjectDetails(data));
    }, [_id]);

    const { projectCategory, projectName, projectDescription, liveWebsiteLink, clientSideCodeLink, serverSideCodeLink, technologyUsed, projectImg, projectStartDate, projectEndDate } = projectDetails;

    return (
        <div className='d-block mx-auto my-12 p-12'>

            <h2 className="text-2xl font-bold">Details Of {projectName}</h2>

            <div className="container mt-16 px-6 mx-auto">
                <section className="text-white text-center md:text-left">
                    <div className="block rounded-lg shadow-xl">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                <img src={projectImg} alt={projectName + 'image'}
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-4 py-12 lg:px-12">
                                    <h2 className="text-3xl font-bold pb-2">{projectName}</h2>
                                    <p className="text-white mb-6 pb-2">
                                        {projectDescription}
                                    </p>
                                    <div className="flex flex-wrap mb-6">
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <a href={liveWebsiteLink} className="flex items-center justify-center md:justify-start">
                                                <CgWebsite className='text-xl text-secondary mr-3' /> Live Website
                                            </a>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <a href={clientSideCodeLink} className="flex items-center justify-center md:justify-start">
                                                <BsCode className='text-xl text-secondary mr-3' /> Client Side Code
                                            </a>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <a href={serverSideCodeLink} className="flex items-center justify-center md:justify-start">
                                                <BsCode className='text-xl text-secondary mr-3' /> Server Side Code
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full mb-4">
                                        <p className="flex items-center justify-center md:justify-start">
                                            Tech: {technologyUsed}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default ProjectDetails;