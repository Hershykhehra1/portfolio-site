import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import Verdant from '../assets/experience/Verdant.png';
import QTC from '../assets/experience/QTC.jpeg';
import Committee from '../assets/experience/Club.png';
import {
  sectionTitle,
  titleUnderline,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewport,
  springSnappy,
} from '../utils/motion';

const Experience = () => {
  const reduceMotion = useReducedMotion();

  const experiences = [
    {
      logo: Verdant,
      title: 'Software Engineer & Consultant',
      company: 'Verdant Development',
      location: 'Redwood City, CA',
      startDate: 'May 2025',
      endDate: 'August 2025',
      description:
        'Built a scalable full-stack AI interview platform with Next.js, React, and Supabase, serving 10,000+ users with 99% uptime and <2s latency. Integrated GPT-4, real-time voice transcription, multi-dimensional AI feedback scoring (95% accuracy), and a SaaS billing system with PayPal to enable rapid, customizable interview creation.',
      style: 'shadow-blue-500',
    },
    {
      logo: QTC,
      title: 'Software Engineer Intern',
      company: 'Leidos QTC Health Services',
      location: 'Los Angeles, CA',
      startDate: 'August 2024',
      endDate: 'May 2025',
      description:
        'Developed an AI/ML-powered Quality Management System using PyTorch, Python, and ASP.NET Core to analyze survey responses, generate KPI data, and visualize trends on a dashboard, enabling data-driven improvements in service quality.',
      style: 'shadow-purple-500',
    },
    {
      logo: Committee,
      title: 'Project Committee Lead',
      location: 'Los Angeles, CA',
      startDate: 'January 2024',
      endDate: 'June 2024',
      description:
        'Led development workshops on Python and Pygame, guiding members in building an advanced 2D platformer while providing debugging and concept support, boosting project completion rates and technical proficiency.',
      style: 'shadow-cyan-500',
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-32 pb-32 md:min-h-[130vh]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:flex-col">
        <motion.div
          className="pb-6"
          variants={sectionTitle}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          <span className="inline-block">
            <p className="text-4xl font-bold">Experience</p>
            <motion.span
              className="block h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-1 origin-left"
              variants={titleUnderline}
            />
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.05)}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {experiences.map((experience, index) => {
            const slideVariant = index % 2 === 0 ? slideInLeft : slideInRight;

            return (
              <motion.div
                key={index}
                variants={slideVariant}
                className={`mb-8 rounded-lg p-6 bg-gray-900/80 backdrop-blur-sm shadow-lg ${experience.style} flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8`}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                      y: -4,
                      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)',
                    }
                }
                transition={springSnappy}
              >
                <motion.img
                  src={experience.logo}
                  alt={`${experience.company || 'Company'} logo`}
                  className="w-20 h-20 object-contain shrink-0"
                  initial={reduceMotion ? false : { scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={viewport}
                  transition={{ ...springSnappy, delay: index * 0.15 + 0.2 }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-sky-600">{experience.title}</h3>
                  <p className="text-lg text-gray-400">
                    {experience.company} - {experience.location}
                  </p>
                  <p className="text-sm text-sky-400">
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p className="mt-2 text-gray-300 leading-relaxed">{experience.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;