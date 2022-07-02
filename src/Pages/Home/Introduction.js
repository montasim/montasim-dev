import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Introduction = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };

    return (
        <section data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="mt-12" >
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
                <div>
                    <p className='mb-2 text-[18px] text-[#64ffda]'>Hi, my name is</p>
                    <h1 className="text-[66px] font-bold text-[#ccd6f6]">Montasim.</h1>
                    <h5 className='text-[66px] font-bold text-[#8892b0]'>I build things for the web.</h5>
                    <p className="py-2 lg:w-7/12 text-[18px] text-[#8892b0]" > I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p >
                    <a className="btn btn-outline border-[#64ffda] text-[#64ffda] my-[50px] pt-[20] px-[28] capitalize text-[14px]" href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank' rel="noreferrer" > Download My Resume</a >
                </div >
            </div >
        </section >
    );
};

export default Introduction;