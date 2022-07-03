import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h2 className='lg:text-9xl md:text-7xl text-6xl text-primary font-bold font-mono'>404</h2>
            <h3 className='lg:text-4xl md:text-3xl text-2xl text-accent font-semibold mt-8 mb-16'>Page Not Found!</h3>
            <Link className="btn rounded-xs border-primary text-primary px-10 capitalize text-md hover:bg-primary hover:opacity-70 hover:text-black" to='/'> Go Home</Link>
        </div>
    );
};

export default NotFound;