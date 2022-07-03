import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ArchiveRow = ({ project, index }) => {
    const { _id, projectCategory, projectName, projectDescription, liveWebsiteLink, clientSideCodeLink, serverSideCodeLink, technologyUsed, projectImg, projectStartDate, projectEndDate } = project;

    return (
        <tr>
            <th className='text-primary'>{index + 1}</th>
            <td className='text-accent'>{projectName}</td>
            <td>{projectCategory}</td>
            <td>{technologyUsed}</td>
            <td>
                <span className='grid grid-cols-2 gap-x-6 float-right text-xl text-accent'>
                    <a href={clientSideCodeLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiGithub /></a>
                    <a href={liveWebsiteLink} target='_blank' rel="noreferrer" className='hover:text-primary'><FiExternalLink /></a>
                </span></td>
        </tr>
    );
};

export default ArchiveRow;