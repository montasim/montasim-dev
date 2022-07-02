import React from 'react';

const Email = () => {
    return (
        <section className='fixed bottom-0 right-0 mr-12 ml-20 px-2'>
            <div className='flex flex-col gap-y-6 justify-center'>
                <a className='transform rotate-180 text-center' style={{ writingMode: 'vertical-rl' }} href='mailto:montasimmamun@gmail.com'>montasimmamun@gmail.com</a>
                <div className='bg-white h-20 w-0.5 ml-[13px]'></div>
            </div>
        </section>
    );
};

export default Email;