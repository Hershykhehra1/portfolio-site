import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { staggerContainer, staggerItem, springSnappy } from '../utils/motion';

const SocialLinks = ({ centered = false }) => {
    const reduceMotion = useReducedMotion();

    const links = [
        {
            id: 1,
            child: <FaLinkedin size={25} />,
            href: 'https://www.linkedin.com/in/harshaunkhehra/',
        },
        {
            id: 2,
            child: <FaGithub size={25} />,
            href: 'https://github.com/Hershykhehra1',
        },
        {
            id: 3,
            child: <HiOutlineMail size={25} />,
            href: 'mailto:Harshaunkhehra@yahoo.com',
        },
        {
            id: 4,
            child: <BsFillPersonLinesFill size={25} />,
            href: '/Harshaun_Khehra_Resume.pdf',
            download: true,
        },
    ];

    return (
        <div className={`flex items-center space-x-6 mt-10 ${centered ? 'justify-center' : 'justify-start ml-30'}`}>
            <motion.ul
                className="flex space-x-6"
                variants={staggerContainer(0.08, 0.2)}
                initial={reduceMotion ? false : 'hidden'}
                animate="visible"
            >
                {links.map(({ id, child, href, download }) => (
                    <motion.li
                        key={id}
                        variants={staggerItem}
                        className="flex items-center justify-center w-14 h-14 text-white rounded-lg border border-white/10 bg-white/5"
                        whileHover={
                            reduceMotion
                                ? {}
                                : {
                                    scale: 1.15,
                                    y: -4,
                                    background: 'linear-gradient(to right, rgb(6, 182, 212), rgb(59, 130, 246))',
                                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                                }
                        }
                        whileTap={reduceMotion ? {} : { scale: 0.92 }}
                        transition={springSnappy}
                    >
                        <a
                            href={href}
                            className="flex items-center justify-center w-full h-full"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default SocialLinks;