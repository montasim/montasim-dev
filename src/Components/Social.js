import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const Social = () => {
    return (
        <section className='fixed bottom-0 left-0 right-0 ml-10 mr-20 px-2 hidden lg:block md:block'>
            <div className='flex flex-col gap-y-6 justify-center'>
                <a className='text-2xl hover:text-primary' href="https://www.linkedin.com/in/montasim" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
                <a className='text-2xl hover:text-primary' href="https://github.com/montasim" target='_blank' rel="noreferrer"><AiFillGithub /></a>
                <a className='text-2xl hover:text-primary' href="https://www.facebook.com/montasimmamun/" target='_blank' rel="noreferrer"><AiFillFacebook /></a>
                <div className='bg-white h-20 w-0.5 ml-[10px]'></div>
            </div>
        </section>
    );
};

export default Social;