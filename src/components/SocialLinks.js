import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={25} />,
            href: "https://www.linkedin.com/in/harshaunkhehra/",
        },
        {
            id: 2,
            child: <FaGithub size={25} />,
            href: "https://github.com/Hershykhehra1",
        },
        {
            id: 3,
            child: <HiOutlineMail size={25} />,
            href: "mailto:Harshaunkhehra@yahoo.com",
        },
        {
            id: 4,
            child: <BsFillPersonLinesFill size={25} />,
            href: "/Harshaun_Khehra_Resume.pdf",
            download: true,
        },
    ];

    return (
        <div className="flex justify-start items-center space-x-6 mt-10 ml-30">
            <ul className="flex space-x-6">
                {links.map(({ id, child, href, download }) => (
                    <li
                        key={id}
                        className="flex items-center justify-center w-14 h-14 text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transition duration-300"
                    >
                        <a
                            href={href}
                            className="flex items-center justify-center w-full h-full"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
