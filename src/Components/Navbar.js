import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const navbarItems = <>
        <li><Link to='/#introduction'>Home</Link></li>
        <li><Link to='/#about'>About</Link></li>
        <li><Link to='/#skills'>Skills</Link></li>
        <li><Link to='/#projects'>Projects</Link></li>
        <li><Link to='/#contact'>Contact</Link></li>
        <li><a className='btn btn-primary rounded-full text-white' href='https://a-coders-diary.web.app/' target='_blank' rel='noreferrer'>Blog</a></li>
    </>;

    return (
        <div class="navbar sticky top-0 z-50 bg-gray-900 uppercase p-8">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                        {
                            navbarItems
                        }
                    </ul>
                </div>
                <Link class="btn btn-ghost text-2xl" to='/'>Montasim Dev</Link>
            </div>

            <div class="navbar-center">

            </div>

            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-semibold">
                    {
                        navbarItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;