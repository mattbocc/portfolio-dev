import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/contact" element={<Contact/>} */}
            </Routes>
        </React.Suspense>
    );
};

export default ProjectRoutes;
