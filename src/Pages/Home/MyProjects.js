import React from 'react';
import MyProject from './MyProject';


const MyProjects = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" id='portfolio' class="hero bg-gray-900 pt-20">
            <div class="hero-content text-center">
                <div class="w-full">
                    <h2 class="relative inline-block px-4 text-3xl font-bold text-center text-white uppercase">
                        My Portfolio
                    </h2>
                    <div class="max-w-screen-xl px-4 py-8 mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-x-4 gap-y-8">

                            <MyProject />
                            <MyProject />
                            <MyProject />
                            <MyProject />
                            <MyProject />
                            <MyProject />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;