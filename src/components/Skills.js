import React from 'react';
import { motion } from 'framer-motion';

// Importing skill images
import java from '../assets/java.png';
import python from '../assets/python.png';
import swift from '../assets/swift.png';
import c from '../assets/c.png';
import css from '../assets/css.png';
import sql from '../assets/sql.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import github from '../assets/github.png';
import mysql from '../assets/mysqll.png';
import jira from '../assets/jira.png';
import agile from '../assets/agile.png';
import machinelearning from '../assets/machinelearning.png';
import azure from '../assets/azure.png';
import linux from '../assets/linux.png';
import mongoDB from '../assets/mongodb.png';
import spring from '../assets/spring.png';
import scikitlearn from '../assets/scikit-learn.png';
import pytorch from '../assets/PyTorch.png';
import tensorflow from '../assets/TensorFlow.png';
import django from '../assets/django.png';
import react from '../assets/react.png';
import next from '../assets/next.jpeg';
import tailwindLogo from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';

const Skills = () => {
    const sections = [
        {
            title: "Languages",
            skills: [
                { id: 1, src: java, name: "Java", style: "shadow-blue-500" },
                { id: 2, src: python, name: "Python", style: "shadow-yellow-300" },
                { id: 3, src: javascript, name: "JavaScript", style: "shadow-yellow-500" },
                { id: 4, src: typescript, name: "Typescript", style: "shadow-yellow-500" },
                { id: 5, src: swift, name: "Swift", style: "shadow-orange-600" },
                { id: 6, src: c, name: "C", style: "shadow-indigo-400" },
                { id: 7, src: html, name: "HTML", style: "shadow-orange-500" },
                { id: 8, src: css, name: "CSS", style: "shadow-blue-500" },
                { id: 9, src: sql, name: "SQL", style: "shadow-blue-400" }
            ]
        },
        {
            title: "Tools",
            skills: [
                { id: 10, src: agile, name: "Agile Development", style: "shadow-gray-500" },
                { id: 11, src: github, name: "GitHub", style: "shadow-purple-500" },
                { id: 12, src: jira, name: "JIRA", style: "shadow-blue-800" },
                { id: 13, src: machinelearning, name: "Machine Learning", style: "shadow-blue-600" },
                { id: 14, src: linux, name: "Linux", style: "shadow-yellow-600" },
                { id: 15, src: azure, name: "Azure", style: "shadow-blue-500" },
                { id: 16, src: mysql, name: "MySQL Database", style: "shadow-orange-500" },
                { id: 17, src: mongoDB, name: "Mongo DB", style: "shadow-green-500" },

            ]
        },
        {
            title: "Frameworks and Libraries",
            skills: [
                { id: 18, src: spring, name: "Spring Boot", style: "shadow-green-500" },
                { id: 19, src: scikitlearn, name: "Sci-Kit Learn", style: "shadow-blue-500" },
                { id: 20, src: pytorch, name: "PyTorch", style: "shadow-red-600" },
                { id: 21, src: tensorflow, name: "TensorFlow", style: "shadow-orange-500" },
                { id: 22, src: django, name: "Django", style: "shadow-green-400" },
                { id: 23, src: react, name: "React.js", style: "shadow-cyan-500" },
                { id: 24, src: next, name: "Next.js", style: "shadow-slate-200" },
                { id: 25, src: tailwindLogo, name: "Tailwind CSS", style: "shadow-cyan-600" },
                { id: 26, src: bootstrap, name: "Bootstrap CSS", style: "shadow-purple-900" }
            ]
        }
    ];

    return (
        <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full text-white pt-32 pb-32 md:min-h-[130vh]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:flex-col">
                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Skills
                    </p>
                    <p className="py-2">These are the technologies I've worked with</p>
                </div>

                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold text-center mb-6">{section.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                            {section.skills.map(({ id, src, name, style }) => (
                                <div key={id} className={`flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-lg ${style} transition-transform duration-300 transform hover:scale-105`}>
                                    <img src={src} alt={name} className="w-16 h-16 mb-2" />
                                    <span className="text-center">{name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
