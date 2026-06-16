import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import { fadeUp, staggerContainer, staggerItem, viewport } from '../utils/motion';

const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-black py-8 border-t border-white/5">
      <motion.div
        className="w-10/12 mx-auto"
        variants={staggerContainer(0.1, 0)}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp} className="mb-4 text-center">
          <SocialLinks centered />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p
            variants={staggerItem}
            className="font-playfair font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500"
          >
            Harshaun Khehra
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-playfair text-md bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 mt-4 md:mt-0 md:ml-4"
          >
            ©2025 Khehra. All Rights Reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
