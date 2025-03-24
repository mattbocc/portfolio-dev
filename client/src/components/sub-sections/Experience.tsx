import React from 'react';
import experiences from '../../data/projects-experience/experience.json';

const Experience: React.FC = () => {
    return (
        <div id="Projects" className="flex flex-col items-center w-full mb-32">
            <div className="w-full mx-auto">
                <h2 className="text-heading3Xl sm:text-heading2Xl font-bold text-gray-900 mb-12 text-center">
                    Professional Experience
                </h2>
                <div className="flex flex-col gap-6">
                    {experiences.map((job, index) => (
                        <div
                            id={job.nav}
                            key={index}
                            className="bg-white rounded-lg drop-shadow-sm hover:drop-shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="border-b border-gray-100 p-6">
                                <div className="flex flex-row justify-between smd:flex-col smd:items-center gap-2">
                                    <div className="flex flex-col smd:items-center gap-1">
                                        <h3 className="text-headingXl sm:text-headingLg font-bold text-gray-900 smd:text-center">
                                            {job.name}
                                        </h3>

                                        <div className="flex items-center text-gray-600 text-bodyMd sm:text-bodySm">
                                            <img
                                                src="/images/experience/location-icon.svg"
                                                alt="location"
                                                className="w-4 h-4 mr-1 opacity-90"
                                            />
                                            {job.location}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start items-end smd:items-center">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-bodySm sm:text-bodyXs font-medium rounded-full">
                                            {job.date}
                                        </span>
                                        {index === 0 && (
                                            <span className="px-3 py-1 text-bodySm sm:text-bodyXs bg-yellow-400 bg-opacity-20 text-gray-800 rounded-full">
                                                Current Position
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-gray-700">
                                <p className="text-bodyMd sm:text-bodySm">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
