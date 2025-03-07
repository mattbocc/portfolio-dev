import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    return (
        <div className="h-screen px-20 md:px-10">
            <div id="About">
                <div id="Into">
                    <h2 className="text-gray-600 text-heading3Xl">Hello,</h2>
                    <h3 className="text-gray-400 text-headingXl">
                        my name is Matthew Boccalon, a software developer working at University Health Network. I have
                        experience leading software
                    </h3>
                </div>
                <div id="Languages"></div>
                <div id="Technologies"></div>
            </div>
            <div id="Experience"></div>
            <div id="Socials"></div>
        </div>
    );
};

export default Home;
