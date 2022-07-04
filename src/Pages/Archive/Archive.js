import React, { useEffect, useState } from 'react';
import ArchiveRow from './ArchiveRow';

const Archive = () => {
    const [archive, setArchive] = useState([]);

    useEffect(() => {
        fetch('archive.json')
            .then(res => res.json())
            .then(data => setArchive(data));
    }, []);

    return (
        <section className='lg:mx-32 md:mx-20 mx-4 my-32'>
            <div>
                <h3 className='text-7xl text-accent font-bold'>Archive</h3>
                <h6 className='mt-5 text-primary'>A big list of things I’ve worked on</h6>
            </div>

            <div className="overflow-x-auto mt-20">
                <table className="table w-full">
                    <thead className='text-lg'>
                        <tr>
                            <th>SN</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Build With</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            archive?.map((project, index) => <ArchiveRow key={project._id} project={project} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Archive;