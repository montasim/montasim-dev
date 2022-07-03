import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { BiMenuAltLeft } from 'react-icons/bi';

const Navbar = () => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbarHide").style.top = "0";
        } else {
            document.getElementById("navbarHide").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    };

    const navbarItems = <>
        <li><Link to='/#introduction'>Home</Link></li>
        <li><Link to='/#about'>About</Link></li>
        <li><Link to='/#projects'>Projects</Link></li>
        <li><Link to='/#contact'>Contact</Link></li>
        <li><a href='https://a-coders-diary.web.app/' target='_blank' rel='noreferrer'>Blog</a></li>
        <li className='ml-2'><a className='btn btn-sm rounded pb-6 hover:bg-primary text-primary hover:opacity-70 hover:text-black' href='https://drive.google.com/file/d/1sR4CxyIYw1uIesJHWaERKDGOBwfOVUcH/view?usp=sharing' target='_blank' rel='noreferrer'>Resume</a></li>
    </>;

    return (
        <div id='navbarHide' className="navbar fixed top-0 bg-[#112240] opacity-95" >
            <div className="navbar-start" >
                <div className="dropdown" >
                    <label tabIndex="0" className="btn btn-ghost lg:hidden" >
                        <BiMenuAltLeft className='text-4xl' />
                    </label >
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 shadow rounded-box w-52 bg-[#112240]" >
                        {
                            navbarItems
                        }
                    </ul >
                </div >
                <Link className="btn border-0 lg:text-xl md:text-xl text-md text-primary uppercase lg:ml-6 md:ml-2 ml-0 hover:bg-[#112240]" to='/' > Montasim -Al- Mamun</Link >
            </div >

            <div className="navbar-center" >

            </div >

            <div className="navbar-end hidden lg:flex" >
                <ul className="menu menu-horizontal items-center mr-10" >
                    {
                        navbarItems
                    }
                </ul >
            </div >
        </div >
    );
};

export default Navbar;