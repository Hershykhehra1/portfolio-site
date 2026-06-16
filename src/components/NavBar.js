import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { springSnappy, staggerContainer, staggerItem } from '../utils/motion';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const reduceMotion = useReducedMotion();

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'experience' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'portfolio', offset: -80 },
    { id: 6, link: 'contact' },
  ];

  return (
    <motion.div
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/90 backdrop-blur-md fixed z-50 border-b border-white/5"
      initial={reduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, ...springSnappy }}
      >
        <h1 className="text-5xl font-signature ml-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          H.K
        </h1>
      </motion.div>

      <motion.ul
        className="hidden md:flex"
        variants={staggerContainer(0.06, 0.3)}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
      >
        {links.map(({ id, link, offset }) => (
          <motion.li
            key={id}
            variants={staggerItem}
            className="px-4 cursor-pointer capitalize font-medium text-sky-600 relative group"
          >
            <Link to={link} smooth duration={500} offset={offset || 0}>
              <motion.span
                className="inline-block"
                whileHover={reduceMotion ? {} : { y: -2, color: '#67e8f9' }}
                transition={springSnappy}
              >
                {link}
              </motion.span>
            </Link>
            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.li>
        ))}
      </motion.ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-sky-600 md:hidden"
      >
        <motion.div
          animate={reduceMotion ? {} : { rotate: nav ? 90 : 0 }}
          transition={springSnappy}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </motion.div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.ul
            className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black/95 to-gray-800/95 backdrop-blur-lg text-sky-600 z-40"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {links.map(({ id, link, offset }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ delay: index * 0.08, ...springSnappy }}
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
                <span className="absolute bottom-4 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200 group-hover:w-full" />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
