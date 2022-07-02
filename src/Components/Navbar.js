import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const navbarItems = <>
        <li><Link to='/#introduction'>Home</Link></li>
        <li><Link to='/#about'>About</Link></li>
        <li><Link to='/#projects'>Projects</Link></li>
        <li><Link to='/#contact'>Contact</Link></li>
        <li><a className='border border-primary rounded-sm hover:bg-primary text-primary hover:opacity-70 hover:text-black' href='https://a-coders-diary.web.app/' target='_blank' rel='noreferrer'>Blog</a></li>
    </>;

    return (
        <div className="navbar sticky top-0 bg-[#112240]" >
            <div className="navbar-start" >
                <div className="dropdown" >
                    <label tabIndex="0" className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
                    </label >
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52" >
                        {
                            navbarItems
                        }
                    </ul >
                </div >
                <Link className="btn btn-ghost text-xl" to='/' > Montasim -Al- Mamun</Link >
            </div >

            <div className="navbar-center" >

            </div >

            <div className="navbar-end hidden lg:flex" >
                <ul className="menu menu-horizontal p-0 items-center" >
                    {
                        navbarItems
                    }
                </ul >
            </div >
        </div >
    );
};

export default Navbar;