import React from 'react';
import projects from '../../data/projects-experience/projects.json';

interface Project {
    name: string;
    achievements: string[];
    image: string;
    technologies: {
        name: string;
        image: string;
    }[];
}

const Projects: React.FC = () => {
    return (
        <div id="Projects" className="flex flex-col items-center w-full">
            <h2 className="text-heading3Xl sm:text-heading2Xl font-bold mb-8 text-center">Projects</h2>
            <div className="flex flex-col justify-center items-center gap-6 w-full">
                {projects.map(project => (
                    <div
                        id={project.nav}
                        className="bg-white rounded-xl drop-shadow-sm hover:drop-shadow-md transition-shadow duration-300 overflow-hidden w-full"
                        key={project.name}
                    >
                        <div className="flex flex-row smd:flex-col smd:justify-center smd:items-center">
                            <div className="w-1/4 flex items-center justify-center p-3 border-r-1 border-gray-100 bg-gray-100 smd:hidden">
                                <img src={project.image} alt={project.name} className="w-24 h-24" />
                            </div>

                            <div className="flex flex-col gap-2 p-4 w-full">
                                <div className="flex flex-row justify-between xs:items-center px-2">
                                    <div className="flex flex-row xs:flex-col gap-2">
                                        <h3 className="text-headingXl font-bold sm:text-headingLg">{project.name}</h3>
                                        <span className="flex flex-row xs:self-start text-bodyMd sm:text-bodySm justify-center items-center text-black rounded-full px-3 bg-yellow-400 bg-opacity-20">
                                            {project.tag}
                                        </span>
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="flex flex-col justify-center items-center text-bodySm font-semibold transition ease-in duration-400 hover:scale-110"
                                        >
                                            <img
                                                src="/images/assets/export-1.svg"
                                                alt="export"
                                                className="w-5 animate-bounce"
                                            />
                                        </a>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <ul className="list-disc pl-6">
                                        {project.achievements.map((ach, ind) => (
                                            <li
                                                key={ind}
                                                className="leading-relaxed text-bodyMd sm:text-bodySm text-gray-700 hover:cursor-default"
                                            >
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-row flex-wrap items-center gap-2">
                                    {project.technologies.map(tech => (
                                        <div
                                            className="flex flex-row justify-center items-center gap-1 bg-white drop-shadow rounded-lg py-1 px-3"
                                            key={tech.name}
                                        >
                                            <img src={tech.image} alt={tech.name} className="w-4" />
                                            <h4 className="text-bodySm font-semibold">{tech.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
