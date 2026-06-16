import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  fadeUp,
  sectionTitle,
  titleUnderline,
  staggerContainer,
  viewport,
} from '../utils/motion';

const About = () => {
  const reduceMotion = useReducedMotion();

  const paragraphs = [
    "Hi there, my name is Harshaun Khehra and I am a senior computer science student at California State University, Los Angeles. I'm an aspiring software developer and web designer dedicated to creating appealing websites.",
    "I have a strong foundation with a wide range of front-end and back-end technologies. I enjoy transforming ideas into interactive experiences with style.",
    "Feel free to explore my portfolio and get in touch with me. Let's build something amazing!",
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <motion.div
          className="pb-8"
          variants={sectionTitle}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block">
            <p className="text-4xl font-bold">About</p>
            <motion.span
              className="block h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-1 origin-left"
              variants={titleUnderline}
            />
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
          className="space-y-6 mt-8 md:mt-12"
        >
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed text-gray-200"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
