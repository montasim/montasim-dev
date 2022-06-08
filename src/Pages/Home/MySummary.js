import React from 'react';

const MySummary = () => {
    return (
        <section class="text-center">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <ul class="grid grid-cols-2 gap-4 border-2 border-pink-500/40 rounded-xl lg:grid-cols-4">
                    <li class="p-8">
                        <p class="text-2xl font-extrabold text-pink-500">5+</p>
                        <p class="mt-1 text-lg font-medium">Full-stack Projects</p>
                    </li>

                    <li class="p-8">
                        <p class="text-2xl font-extrabold text-pink-500">3+</p>
                        <p class="mt-1 text-lg font-medium">Front-end Projects</p>
                    </li>

                    <li class="p-8">
                        <p class="text-2xl font-extrabold text-pink-500">2+</p>
                        <p class="mt-1 text-lg font-medium">Backend Projects</p>
                    </li>

                    <li class="p-8">
                        <p class="text-2xl font-extrabold text-pink-500">1</p>
                        <p class="mt-1 text-lg font-medium">Blog</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MySummary;