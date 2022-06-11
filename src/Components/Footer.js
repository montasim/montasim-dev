import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-gray-900 text-base-content rounded mt-32">
            <div class="grid grid-flow-col gap-4 text-lg uppercase">
                <a href='#about'>About</a>
                <a href='#services'>Skills</a>
                <a href='#portfolio'>Projects</a>
                <a href='#contact'>Contact</a>
                <a href='https://a-coders-diary.web.app/' target='_blank' rel='noreferrer'>Blog</a>
            </div>
            <div class="grid grid-flow-col gap-4 text-3xl">
                <a href='https://www.linkedin.com/in/montasim' target='_blank' rel='noreferrer'><BsLinkedin /></a>
                <a href='https://github.com/montasim' target='_blank' rel='noreferrer'><BsGithub /></a>
                <a href='https://www.facebook.com/montasimmamun/' target='_blank' rel='noreferrer'><BsFacebook /></a>
            </div>
            <div>
                <p className='text-lg'>This portfolio is made by React with
                    ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;