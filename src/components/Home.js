import React from 'react';
import HeroImage from '../assets/harshaunkhehra.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex justify-center mb-8 md:mb-0 md:w-1/2 md:order-2 mt-48 md:mt-0">
                    <img src={HeroImage} alt="my profile" className="rounded-xl w-3/4 sm:w-4/5 md:w-4/5" />
                </div>

                <div className="flex flex-col justify-center h-full md:w-1/2 md:order-1">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Harshaun Khehra</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Senior Computer Science Student at Cal State LA. Let's Chat!
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            offset={-90}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <HiOutlineArrowNarrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
