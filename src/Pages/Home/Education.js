import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

const Education = () => {
    return (
        <section className='mb-24' id='about'>
            <div className='mb-12'>
                <div className='flex items-center gap-6'>
                    <h3 className='lg:text-3xl md:text-3xl text-2xl text-accent font-bold'>Education </h3>
                    <hr className='bg-[#233554] lg:w-80 md:w-64 w-40 h-0.5'></hr>
                </div>
                <div className='divide-x bg-[#233554] h-60 w-0.5 ml-[10px] mt-6 fixed left-45'></div>
            </div>

            <div>
                <h3 className='text-accent text-xl font-semibold'>Bachelor of Science, Computer Science and Engineering</h3>
                <h4 className='text-lg my-2'>Bangladesh Army University of Science & Technology (BAUST)</h4>
                <p className='text-accent'>November 2016 - April 2021</p>

                <div className='mt-5 grid gap-y-2 ml-3'>
                    <p className='flex items-center gap-x-3'>
                        <BiRightArrow className='text-primary text-sm' />
                        Intensive course with core computer science topics.
                    </p>
                    <p className='flex items-center gap-x-3'>
                        <BiRightArrow className='text-primary text-sm' />
                        C, C++, Java, Data Structures, Algorithms, OOP, DBMS.
                    </p>
                    <p className='flex items-center gap-x-3'>
                        <BiRightArrow className='text-primary text-sm' />
                        Android application development.
                    </p>
                    <p className='flex items-center gap-x-3'>
                        <BiRightArrow className='text-primary text-sm' />
                        Different software design patterns.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;