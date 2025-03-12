import React, { useState, useEffect } from 'react';
import About from '../components/sub-sections/About';
import Experience from '../components/sub-sections/Experience';
import Projects from '../components/sub-sections/Projects';

const Home: React.FC = () => {
    return (
        <div className="h-screen pl-[250px] w-full">
            <div className="flex flex-col items-center px-72 lg:px-32">
                <About />
                <hr className="w-3/4 my-16" />
                <Projects />
                <Experience />
            </div>
        </div>
    );
};

export default Home;
