import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const Social = () => {
    return (
        <section className='fixed bottom-0 left-0 right-0 ml-10 mr-20 px-2'>
            <div className='flex flex-col gap-y-6 justify-center'>
                <BsLinkedin className='text-2xl hover:text-3xl' />
                <BsGithub className='text-2xl hover:text-3xl' />
                <BsFacebook className='text-2xl hover:text-3xl' />
                <div className='bg-white h-20 w-0.5 ml-[10px]'></div>
            </div>
        </section>
    );
};

export default Social;