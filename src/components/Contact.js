import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  sectionTitle,
  titleUnderline,
  staggerContainer,
  staggerItem,
  viewport,
  springSnappy,
} from '../utils/motion';

const Contact = () => {
  const reduceMotion = useReducedMotion();

  const fields = [
    { type: 'text', name: 'name', placeholder: 'Enter your Name' },
    { type: 'text', name: 'email', placeholder: 'Enter your Email' },
    { type: 'textarea', name: 'message', placeholder: 'Enter your Message', rows: 10 },
  ];

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto min-h-screen">
        <motion.div
          className="pb-8"
          variants={sectionTitle}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block">
            <p className="text-4xl font-bold">Let's Chat</p>
            <motion.span
              className="block h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-1 origin-left"
              variants={titleUnderline}
            />
          </span>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.form
            action="https://getform.io/f/akkkkwwa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            variants={staggerContainer(0.12, 0.1)}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={viewport}
          >
            {fields.map((field, index) =>
              field.type === 'textarea' ? (
                <motion.textarea
                  key={field.name}
                  variants={staggerItem}
                  name={field.name}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                />
              ) : (
                <motion.input
                  key={field.name}
                  variants={staggerItem}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 ${
                    index === 1 ? 'my-4' : ''
                  }`}
                />
              )
            )}
            <motion.button
              variants={staggerItem}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md"
              whileHover={
                reduceMotion
                  ? {}
                  : { scale: 1.08, boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }
              }
              whileTap={reduceMotion ? {} : { scale: 0.95 }}
              transition={springSnappy}
            >
              Let's Talk
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
