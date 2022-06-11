import React from 'react';
import professionalPhoto from '../../assets/images/SHUVO Transparent BG.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const Introduction = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };

    return (
        <section data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="hero min-h-screen bg-gray-900" >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 60,
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
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
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
                            value: "#fff",
                        },
                        links: {
                            color: "#fff",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: .5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
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
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="hero-content min-h-screen flex-col lg:flex-row-reverse" id='introduction' >
                <img src={professionalPhoto} className="max-w-sm rounded-lg shadow-2xl" alt='montasim pic' />
                <div>
                    <p className='mb-2 text-xl'>Hello 👋, I am</p>
                    <h1 className="text-5xl font-bold uppercase">Montasim Al Mamun</h1>
                    <h5 className='text-2xl mt-4 uppercase'>Full Stack Web Developer</h5>
                    <div className="flex gap-4 text-3xl mt-6" >
                        <a href='https://www.linkedin.com/in/montasim' target='_blank' rel='noreferrer'><BsLinkedin /></a>
                        <a href='https://github.com/montasim' target='_blank' rel='noreferrer'><BsGithub /></a>
                        <a href='https://www.facebook.com/montasimmamun/' target='_blank' rel='noreferrer'><BsFacebook /></a>
                    </div >
                    <p className="py-6 lg:w-8/12 text-[20px]" > I am a proficient MERN stack developer who is passionate about developing websites and web - based applications.</p >
                    <a className="btn btn-primary" href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank' rel="noreferrer" > Download My Resume</a >
                </div >
            </div >
        </section >
    );
};

export default Introduction;