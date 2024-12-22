import React from 'react';
import { motion } from 'framer-motion';
import BookStore from '../assets/portfolio/BES.gif';
import recipeWebsite from '../assets/portfolio/RecipeWebsite.png';
import portfolio from '../assets/portfolio/Portfolio.png';
import spaceInvaders from '../assets/portfolio/spaceInvaders.gif';
import MovieRater from '../assets/portfolio/MovieRater.gif';

const Portfolio = () => {
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

    return (
        <div name="portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-2">Check out some of my work right here</p>
                </div>

                <ul className="space-y-2">
                    {projects.map(({ id, src, title, description, technologies, link }) => (
                        <motion.li
                            key={id}
                            initial={{ x: id % 2 === 0 ? -100 : 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start space-x-4 shadow-md shadow-gray-600 rounded-lg p-4"
                        >
                            <img src={src} alt={title} className="rounded-md w-48 h-32 duration-200 hover:scale-105" />
                            <div className="flex-1">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:underline">
                                    {title}
                                </a>
                                <p className="mb-2">{description}</p>
                                <div className="flex flex-wrap space-x-2">
                                    {technologies.map((tech, index) => (
                                        <div key={index} className="bg-black shadow-lg shadow-blue-500 text-white p-2 rounded">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;
