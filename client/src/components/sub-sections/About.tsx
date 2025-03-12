import React, { useState, useEffect } from 'react';
import languages from '../../data/about/languages.json';
import technologies from '../../data/about/technologies.json';
import databases from '../../data/about/databases.json';
import deployment from '../../data/about/deployment.json';
import accounts from '../../data/about/accounts.json';

const About: React.FC = () => {
    return (
        <div id="About" className="flex flex-col items-center pt-28">
            <div id="Intro" className="flex flex-col">
                <p className="text-gray-600 text-heading3Xl">
                    Hello, my name is
                    <span className="text-yellow-400 font-semibold "> Matthew Boccalon</span>. I'm a
                    <span className="font-semibold text-gray-800"> software developer </span>
                    working at University Health Network. I lead the development of several
                    <span className="font-semibold text-gray-800"> full-stack </span> web applications and
                    <span className="font-semibold text-gray-800"> API </span>'s, to tackle various challenges in
                    oncology. I'm passionate about <span className="font-semibold text-gray-800"> full-stack </span>
                    development as it lets me shape a project from inception to completion.
                </p>
            </div>
            <hr className="w-3/4 my-16" />
            <div className="flex flex-col w-full">
                <div id="Languages" className="flex flex-col gap-2 w-full">
                    <h3 className="text-headingSm text-gray-600 font-bold">Languages</h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {languages.map(item => (
                            <div
                                className="flex flex-row justify-center items-center gap-1 bg-white drop-shadow rounded-lg py-2 px-4"
                                key={item.name}
                            >
                                <img src={item.image} alt={item.name} className="w-5" />
                                <h4 className="text-bodyMd font-semibold">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="Technologies" className="flex flex-col gap-2 pt-4 w-full">
                    <h3 className="text-headingSm text-gray-600 font-bold">Development Technologies</h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {technologies.map(item => (
                            <div
                                className="flex flex-row justify-center items-center gap-1 bg-white drop-shadow rounded-lg py-2 px-4"
                                key={item.name}
                            >
                                <img src={item.image} alt={item.name} className="w-5" />
                                <h4 className="text-bodyMd font-semibold">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="Databases" className="flex flex-col gap-2 pt-4 w-full">
                    <h3 className="text-headingSm text-gray-600 font-bold">Databases</h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {databases.map(item => (
                            <div
                                className="flex flex-row justify-center items-center gap-1 bg-white drop-shadow rounded-lg py-2 px-4"
                                key={item.name}
                            >
                                <img src={item.image} alt={item.name} className="w-5" />
                                <h4 className="text-bodyMd font-semibold">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="Deployment/Containerization" className="flex flex-col gap-2 pt-4 w-full">
                    <h3 className="text-headingSm text-gray-600 font-bold">Deployment/Containerization</h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {deployment.map(item => (
                            <div
                                className="flex flex-row justify-center items-center gap-1 bg-white drop-shadow rounded-lg py-2 px-4"
                                key={item.name}
                            >
                                <img src={item.image} alt={item.name} className="w-5" />
                                <h4 className="text-bodyMd font-semibold">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="Account Management" className="flex flex-col gap-2 pt-4 w-full">
                    <h3 className="text-headingSm text-gray-600 font-bold">Access/Account Management</h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {accounts.map(item => (
                            <div
                                className="flex flex-row justify-center items-center gap-1 bg-white drop-shadow rounded-lg py-2 px-4"
                                key={item.name}
                            >
                                <img src={item.image} alt={item.name} className="w-5" />
                                <h4 className="text-bodyMd font-semibold">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
