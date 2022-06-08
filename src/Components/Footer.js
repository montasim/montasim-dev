import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-gray-900 text-base-content rounded">
            <div class="grid grid-flow-col gap-4 text-lg">
                <a>Home</a>
                <a>About Me</a>
                <a>Portfolio</a>
                <a>Contact</a>
                <a>Blog</a>
                <a>Resume</a>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4 text-3xl">
                    <a><BsLinkedin /></a>
                    <a><BsGithub /></a>
                    <a><BsFacebook /></a>
                </div>
            </div>
            <div>
                <p>This portfolio is made by React with
                    ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;