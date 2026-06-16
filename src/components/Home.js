import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroImage from '../assets/harshaunkhehra.png';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import SocialLinks from './SocialLinks';
import {
  fadeUp,
  staggerContainer,
} from '../utils/motion';

const Home = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div name="home" className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 overflow-hidden">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex justify-center mb-8 md:mb-0 md:w-1/2 md:order-2 mt-8 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-xl w-3/4 sm:w-4/5 md:w-4/5"
          />
        </div>

        <motion.div
          className="flex flex-col justify-center h-full md:w-1/2 md:order-1"
          variants={staggerContainer(0.12, 0.2)}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-2"
          >
            Software Developer
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-200">
              Harshaun Khehra
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 py-4 max-w-md">
            First year Masters Student at UC Irvine. Let's Chat!
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-90}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
