import React from 'react';
import experiences from '../../data/projects-experience/experience.json';

const Experience: React.FC = () => {
    return (
        <div id="Projects" className="flex flex-col items-center w-full mb-16">
            <div className="w-full mx-auto">
                <h2 className="text-heading3Xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
                <div className="flex flex-col gap-2">
                    {experiences.map((job, index) => (
                        <div
                            id={job.nav}
                            key={index}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="border-b border-gray-100 p-6">
                                <div className="flex flex-row sm:flex-col justify-between gap-2">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-headingXl font-bold text-gray-900">{job.name}</h3>

                                        <div className="flex items-center text-gray-600 text-bodyMd">
                                            <img
                                                src="/images/experience/location-icon.svg"
                                                alt="location"
                                                className="w-4 h-4 mr-1 opacity-90"
                                            />
                                            {job.location}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 justify-start items-end">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-bodySm font-medium rounded-full">
                                            {job.date}
                                        </span>
                                        {index === 0 && (
                                            <span className="px-3 py-1 text-bodySm bg-yellow-400 bg-opacity-20 text-gray-800 rounded-full">
                                                Current Position
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-gray-700">
                                <p className="leading-relaxed">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
