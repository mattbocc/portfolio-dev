import React from 'react';
import projects from '../data/navbar/projects.json';
import experience from '../data/navbar/experience.json';

export const Navbar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 flex flex-col justify-between h-screen w-[250px] py-10 px-8 shadow border-r-1 bg-white">
            <div className="flex flex-col gap-2">
                <div id="General" className="flex flex-col gap-2">
                    <h4 className="text-headingMd font-semibold text-gray-800">General</h4>
                    <div className="flex flex-col">
                        <span className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5">
                            About
                        </span>
                        <span className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5">
                            Contact
                        </span>
                    </div>
                </div>
                <div id="Projects" className="flex flex-col gap-2">
                    <h4 className="text-headingMd font-semibold text-gray-800">Projects</h4>
                    <div className="flex flex-col">
                        {projects.map(item => (
                            <span className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5">
                                {item.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div id="Experience" className="flex flex-col gap-2">
                    <h4 className="text-headingMd font-semibold text-gray-800">Experience</h4>
                    <div className="flex flex-col">
                        {experience.map(item => (
                            <span className="text-bodySm text-gray-500 transition ease-in duration-400 hover:font-semibold hover:text-yellow-400 hover:scale-110 cursor-pointer py-0.5">
                                {item.name}
                            </span>
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
                    <img src="/images/contact/linkedin-icon.svg" alt="Linkedin" className="w-7" />
                </a>
            </div>
        </div>
    );
};
