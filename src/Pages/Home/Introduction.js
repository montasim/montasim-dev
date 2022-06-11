import React from 'react';
import professionalPhoto from '../../assets/images/SHUVO Transparent BG.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const Introduction = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <section data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" class="hero min-h-screen bg-gray-900">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#111827",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={professionalPhoto} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <p className='mb-2 text-xl'>Hello 👋, I am</p>
                    <h1 class="text-5xl font-bold uppercase">Montasim Al Mamun</h1>
                    <h5 className='text-2xl mt-4 uppercase'>Full Stack Web Developer</h5>
                    <div class="flex gap-4 text-3xl mt-6">
                        <a href='https://www.linkedin.com/in/montasim' target='_blank' rel='noreferrer'><BsLinkedin /></a>
                        <a href='https://github.com/montasim' target='_blank' rel='noreferrer'><BsGithub /></a>
                        <a href='https://www.facebook.com/montasimmamun/' target='_blank' rel='noreferrer'><BsFacebook /></a>
                    </div>
                    <p class="py-6 lg:w-8/12 text-[20px]">I am a proficient MERN stack developer who is passionate about developing websites and web-based applications.</p>
                    <a class="btn btn-primary" href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank'>Download My Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Introduction;