import React, { useState, useEffect } from 'react';
import About from '../components/sub-sections/About';

const Home: React.FC = () => {
    return (
        <div className="h-screen pl-[250px] w-full">
            <About />
            <div id="Experience"></div>
            <div id="Socials"></div>
        </div>
    );
};

export default Home;
