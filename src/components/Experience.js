import React from 'react'
import { motion } from 'framer-motion'

import Verdant from '../assets/experience/Verdant.png'
import QTC from '../assets/experience/QTC.jpeg'
import Committee from '../assets/experience/Club.png'

const Experience = () => {
  const experiences = [
    {
      logo: Verdant,
      title: 'Software Engineer & Consultant',
      company: 'Verdant Development',
      location: 'Redwood City, CA',
      startDate: 'May 2025',
      endDate: 'August 2025',
      description: 'Built a scalable full-stack AI interview platform with Next.js, React, and Supabase, serving 10,000+ users with 99% uptime and <2s latency. Integrated GPT-4, real-time voice transcription, multi-dimensional AI feedback scoring (95% accuracy), and a SaaS billing system with PayPal to enable rapid, customizable interview creation.',
      style: 'shadow-blue-500'
    },
    {
      logo: QTC,
      title: 'Software Engineer Intern',
      company: 'Leidos QTC Health Services',
      location: 'Los Angeles, CA',
      startDate: 'August 2024',
      endDate: 'May 2025',
      description: 'Developed an AI/ML-powered Quality Management System using PyTorch, Python, and ASP.NET Core to analyze survey responses, generate KPI data, and visualize trends on a dashboard, enabling data-driven improvements in service quality.',
      style: 'shadow-purple-500'
    },
    {
      logo: Committee,
      title: 'Project Committee Lead',
      location: 'Los Angeles, CA',
      startDate: 'January 2024',
      endDate: 'June 2024',
      description: 'Led development workshops on Python and Pygame, guiding members in building an advanced 2D platformer while providing debugging and concept support, boosting project completion rates and technical proficiency.',
      style: 'shadow-cyan-500'
    },
  ]

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-32 pb-32 md:min-h-[130vh]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:flex-col">
        <div className='pb-6'>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mb-8 rounded-lg p-6 bg-gray-900 shadow-lg ${experience.style} flex items-center gap-8`}
          >
            <img
              src={experience.logo}
              alt={`${experience.company || 'Company'} logo`}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <p className="text-lg">{experience.company || experience.location}</p>
              <p className="text-sm text-gray-400">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="mt-2">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
