import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const MobileSocial = () => {
    return (
        <section className='block lg:hidden md:hidden mb-16'>
            <div className='flex gap-x-6'>
                <a className='text-3xl hover:text-primary' href="https://www.linkedin.com/in/montasim" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
                <a className='text-3xl hover:text-primary' href="https://github.com/montasim" target='_blank' rel="noreferrer"><AiFillGithub /></a>
                <a className='text-3xl hover:text-primary' href="https://www.facebook.com/montasimmamun/" target='_blank' rel="noreferrer"><AiFillFacebook /></a>
            </div>
        </section>
    );
};

export default MobileSocial;