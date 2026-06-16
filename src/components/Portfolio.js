import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BookStore from '../assets/portfolio/BES.gif';
import recipeWebsite from '../assets/portfolio/RecipeWebsite.png';
import portfolio from '../assets/portfolio/Portfolio.png';
import spaceInvaders from '../assets/portfolio/spaceInvaders.gif';
import MovieRater from '../assets/portfolio/MovieRater.gif';
import { sectionTitle, titleUnderline, viewport } from '../utils/motion';

const Portfolio = () => {
    const reduceMotion = useReducedMotion();
    const projects = [
        {
            id: 1,
            src: MovieRater,
            title: "Full Stack Movie Rater Website",
            description: "A full-stack movie rater webiste which allows users to log in, view featured movies, view movies by genre, search for any movie, add comments, add ratings, and mark favorites.",
            technologies: ["Next.js", "React.js", "Javascript", "HTML", "Tailwind CSS"],
            link: "https://github.com/Jdhwang98/movie-rater"
        },
        {
            id: 2,
            src: recipeWebsite,
            title: "Full Stack Recipe Book Website",
            description: "A full-stack recipe book website with user authentication, enabling users to add, edit, and delete their own recipes. Data is securely stored in a MySQL database, with permissions to prevent unauthorized changes to others' recipes.",
            technologies: ["Java", "SpringBoot", "Javascript", "jQuery", "HTML", "CSS"],
            link: "https://github.com/Hershykhehra1/Recipe_Website"
        },
        {
            id: 3,
            src: BookStore,
            title: "Full Stack Book Store Website",
            description: "A full-stack book store website that lets users to log in, post books, view a gallery, add comments and ratings, mark favorites, and search for books.",
            technologies: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
            link: "https://github.com/Hershykhehra1/Book-Exchange-System"
        },
        {
            id: 4,
            src: portfolio,
            title: "Portfolio Website",
            description: "This portfolio website is designed to highlight and display my computer science skills.",
            technologies: ["React.js", "Javascript", "HTML", "Tailwind CSS"],
            link: "https://github.com/Hershykhehra1/portfolio-website"
        },
        {
            id: 5,
            src: spaceInvaders,
            title: "Space Invader Game",
            description: "A classic Space Invaders game built with Python and Pygame, featuring object-oriented design, smooth animations, and interactive gameplay. Demonstrates skills in game development, collision detection, and responsive controls.",
            technologies: ["Python", "Pygame"],
            link: "https://github.com/Hershykhehra1/Space_Invaders_Game"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 30,
            opacity: 0,
            scale: 0.95
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.08,
            rotate: [0, 1, -1, 0],
            transition: {
                scale: { type: "spring", stiffness: 300 },
                rotate: { duration: 0.3 }
            }
        }
    };

    const techBadgeVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 12
            }
        }),
        hover: {
            scale: 1.05,
            boxShadow: '0 0 16px rgba(59, 130, 246, 0.7)',
            transition: { type: "spring", stiffness: 400 }
        }
    };

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    className="pb-6"
                    variants={sectionTitle}
                    initial={reduceMotion ? false : 'hidden'}
                    whileInView="visible"
                    viewport={viewport}
                >
                    <span className="inline-block">
                        <p className="text-4xl font-bold">Portfolio</p>
                        <motion.span
                            className="block h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-1 origin-left"
                            variants={titleUnderline}
                        />
                    </span>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="py-2"
                    >
                        Check out some of my work right here - Click on the title for the repo!
                    </motion.p>
                </motion.div>

                <motion.ul
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map(({ id, src, title, description, technologies, link }, index) => (
                        <motion.li
                            key={id}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="flex items-start space-x-4 shadow-lg shadow-gray-700 rounded-lg p-4 backdrop-blur-sm bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300"
                        >
                            <motion.img
                                src={src}
                                alt={title}
                                className="rounded-md w-48 h-32 object-cover"
                                variants={imageVariants}
                                whileHover="hover"
                            />
                            <div className="flex-1">
                                <motion.a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold hover:text-cyan-400 transition-colors duration-200 inline-block"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {title}
                                </motion.a>
                                <motion.p
                                    className="mb-3 text-gray-300"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {description}
                                </motion.p>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            custom={i}
                                            variants={techBadgeVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            whileHover="hover"
                                            className="bg-gray-950 text-gray-100 px-3 py-1.5 rounded-sm text-sm font-medium border border-gray-800 shadow-lg shadow-blue-500"
                                        >
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default Portfolio;