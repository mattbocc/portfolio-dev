import React from 'react';
import projects from '../data/navbar/projects.json';
import experience from '../data/navbar/experience.json';
import { Link } from 'react-scroll';

export const Navbar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 flex flex-col justify-between h-screen w-[250px] py-10 px-8 shadow border-r-1 bg-white">
            <div className="flex flex-col gap-2">
                <div id="General" className="flex flex-col gap-2">
                    <h4 className="text-headingMd font-semibold text-gray-800">General</h4>
                    <div className="flex flex-col">
                        <Link
                            to="About"
                            smooth={true}
                            spy={true}
                            offset={-200}
                            duration={500}
                            activeClass="text-yellow-400 font-semibold scale-110"
                            className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5"
                        >
                            About
                        </Link>
                        {/* <span className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5">
                            Contact
                        </span> */}
                    </div>
                </div>
                <div id="Projects" className="flex flex-col gap-2">
                    <h4 className="text-headingMd font-semibold text-gray-800">Projects</h4>
                    <div className="flex flex-col">
                        {projects.map(proj => (
                            <Link
                                key={proj.nav}
                                to={proj.nav}
                                smooth={true}
                                spy={true}
                                offset={-200}
                                duration={500}
                                activeClass="text-yellow-400 font-semibold scale-110"
                                className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5"
                            >
                                {proj.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div id="Experience" className="flex flex-col gap-2">
                    <h4 className="text-headingMd font-semibold text-gray-800">Experience</h4>
                    <div className="flex flex-col">
                        {experience.map(exp => (
                            <Link
                                key={exp.nav}
                                to={exp.nav}
                                smooth={true}
                                spy={true}
                                offset={-200}
                                duration={500}
                                activeClass="text-yellow-400 font-semibold scale-110"
                                className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5"
                            >
                                {exp.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 w-full">
                <a
                    href="https://github.com/mattbocc"
                    target="#blank"
                    className="transition ease-in duration-400 hover:scale-110"
                >
                    <img src="/images/contact/github-icon.svg" alt="Github" className="w-7" />
                </a>
                <a
                    href="https://www.linkedin.com/in/matthew-boccalon-1b96791a2"
                    target="#blank"
                    className="transition ease-in duration-400 hover:scale-110"
                >
                    <img src="/images/contact/linkedin-icon.svg" alt="LinkedIn" className="w-7" />
                </a>
                <a href="mailto:matthew.boccalon@live.ca" className="transition ease-in duration-400 hover:scale-110">
                    <img src="/images/contact/email-icon.svg" alt="Email" className="w-7" />
                </a>
            </div>
        </div>
    );
};
