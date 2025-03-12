import React, { useState, useEffect } from 'react';

const Projects: React.FC = () => {
    return (
        <div id="Projects" className="flex flex-col items-center pt-10">
            <div className="w-full">
                <h2 className="text-heading2Xl font-bold mb-16 w-fu">Projects</h2>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full bg-white border-1 shadow-sm rounded-lg">
                    <div className="flex flex-row">
                        <img
                            src="/images/projects/sp-icon.svg"
                            alt="science portal"
                            className="border-r-1 border-b-1 p-2 rounded-br-lg w-24"
                        />
                        <div className="flex flex-col gap-3 px-4 py-4">
                            <h2 className="text-headingXl font-semibold">Science Portal</h2>
                            <div className="flex flex-col">
                                <p className="text-bodyMd">
                                    Developed and deployed an insitution wide publication portal to centralize/simplify
                                    access to research outputs. Developed a scalable web application and data mining
                                    solutions designed for deployment across multiple institutions. The Science Portal
                                    in it's infancy has already garnered attention from other insitutions where we will
                                    soon be deploying their personalize instances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
