import React from 'react';
import { Timeline } from 'primereact/timeline';

interface Experience {
    name: string;
    location: string;
    date: string;
    description: string;
    color: string;
}

const Experience: React.FC = () => {
    const exp: Experience[] = [
        {
            name: 'University Health Network',
            location: 'Toronto, Ontario',
            date: 'June 2023 - Present',
            description:
                'Led the full-stack development and deployment of three web applications to tackle challenges in the oncology sector. Worked with cross-functional teams and five major pharmaceutical companies to develop new oncology applications and enhance existing ones. Recruited and managed developer interns, overseeing project execution and task development.',
            color: 'indigo-500'
        },
        {
            name: 'Lymphoma Canada',
            location: 'Mississauga, Ontario',
            date: 'Oct 2021 - Mar 2022',
            description:
                'Developed and optimized Python scripts to query databases, enforce data integrity, and streamline audit preparation. Engineered a reliable automation pipeline to seamlessly transfer data from QuickBooks to the database. Designed and implemented advanced end-of-term data analysis, providing key insights into database improvements for the CEO and bookkeeper.',
            color: 'emerald-500'
        },
        {
            name: "Marco's Way",
            location: 'Remote',
            date: 'Jan 2021 - Present',
            description:
                "Manage and enhance the core functionality of the Marco's Way charity website, ensuring optimal performance and user experience. Work closely with organizers to develop and implement new event and project features, seamlessly integrating them into the fundraising platform.",
            color: 'amber-500'
        }
    ];

    const customizedMarker = (item: Experience) => {
        return (
            <div
                className={`flex items-center justify-center bg-${item.color} w-8 h-8 rounded-full shadow-md transform transition-all duration-300 hover:scale-110`}
            />
        );
    };

    const customizedContent = (item: Experience) => {
        return (
            <div
                className={`flex flex-col gap-2 border border-gray-200 p-6 my-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-${item.color} text-left`}
            >
                <div className="flex flex-col gap-1">
                    <h2 className="text-headingXl font-bold text-gray-800">{item.name}</h2>
                    <div className="flex flex-row gap-2 items-center text-gray-600 text-bodySm font-medium">
                        <div className="flex flex-row items-center">
                            <img src="/images/experience/calendar-icon.svg" alt="calendar" className="w-4 mr-2" />
                            {item.date}
                        </div>

                        <div className="flex flex-row items-center">
                            <img src="/images/experience/location-icon.svg" alt="pin" className="w-4 mr-1" />
                            {item.location}
                        </div>
                    </div>
                </div>
                <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 text-bodyMd">{item.description}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="mt-20 w-full px-4">
            <h1 className="text-heading2Xl font-bold mb-12 text-center text-gray-800">Work Experience</h1>
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 rounded"></div>
                </div>
                <Timeline
                    value={exp}
                    align="alternate"
                    className="customized-timeline"
                    marker={customizedMarker}
                    content={customizedContent}
                />
            </div>
        </div>
    );
};

export default Experience;
