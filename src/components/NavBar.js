import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'portfolio', offset: -80 },
        { id: 5, link: 'contact' },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
            <div>
                <h1 className="text-5xl font-signature ml-2">H.K</h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex">
                {links.map(({ id, link, offset }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 relative group"
                    >
                        <Link to={link} smooth duration={500} offset={offset || 0}>
                            {link}
                        </Link>
                        {/* Underline highlight effect */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 transition-all duration-200 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Navigation Menu */}
            {nav && (
                <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40">
                    {links.map(({ id, link, offset }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl relative group"
                        >
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                offset={offset || 0}
                                onClick={() => setNav(false)}
                            >
                                {link}
                            </Link>
                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-500 transition-all duration-200 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
