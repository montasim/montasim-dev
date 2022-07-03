import React, { useEffect, useState } from 'react';
import ArchiveRow from './ArchiveRow';

const Archive = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://a-coders-diary.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [projects]);

    return (
        <section className='lg:mx-32 md:mx-20 mx-4 my-32'>
            <div>
                <h3 className='text-7xl text-accent font-bold'>Archive</h3>
                <h6 className='mt-5 text-primary'>A big list of things I’ve worked on</h6>
            </div>

            <div class="overflow-x-auto mt-20 text-lg">
                <table class="table w-full">
                    <thead>
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
                            projects?.map((project, index) => <ArchiveRow key={project._id} project={project} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Archive;