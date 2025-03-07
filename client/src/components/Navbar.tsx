import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
    return (
        <div className="flex flex-row justify-between w-full py-4 px-10 bg-white shadow-sm">
            <h3 className="text-headingXl font-bold">Matthew Boccalon</h3>
            <div className="flex flex-row gap-2 font-semibold text-headingLg">
                <h4>About</h4>
                <h4>Resume</h4>
            </div>
        </div>
    );
};
