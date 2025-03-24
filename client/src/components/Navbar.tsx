import React, { useState } from 'react';
import projects from '../data/navbar/projects.json';
import experience from '../data/navbar/experience.json';
import { Link } from 'react-scroll';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export const Navbar: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const renderNavLinks = () => (
        <div className="flex flex-col gap-4">
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
                        onClick={() => setVisible(false)}
                    >
                        About
                    </Link>
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
                            onClick={() => setVisible(false)}
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
                            onClick={() => setVisible(false)}
                        >
                            {exp.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderSocialLinks = () => (
        <div className="flex flex-row justify-center items-center gap-2 w-full mt-6">
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
    );

    return (
        <>
            {/* Desktop Sidebar - Visible on screens larger than md */}
            <div className="fixed top-0 left-0 flex flex-col justify-between h-screen w-[250px] py-10 px-8 shadow border-r-1 bg-white md:hidden">
                {renderNavLinks()}
                {renderSocialLinks()}
            </div>

            {/* Mobile Burger Menu - Visible only on md screens and below */}
            <div className="fixed top-0 left-0 z-50 hidden md:block">
                <Button
                    icon="pi pi-bars"
                    onClick={() => setVisible(true)}
                    className="m-3 p-button-rounded p-button-text text-gray-700"
                    aria-label="Menu"
                />

                <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-[250px] p-4">
                    <div className="flex flex-col justify-between h-full">
                        {renderNavLinks()}
                        {renderSocialLinks()}
                    </div>
                </Sidebar>
            </div>
        </>
    );
};
