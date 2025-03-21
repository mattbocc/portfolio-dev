import React from 'react';

interface Experience {
    name: string;
    location: string;
    date: string;
    description: string;
}

const Experience: React.FC = () => {
    const experiences: Experience[] = [
        {
            name: 'University Health Network',
            location: 'Toronto, Ontario',
            date: 'June 2023 - Present',
            description:
                'Led the full-stack development and deployment of three web applications to tackle challenges in the oncology sector. Worked with cross-functional teams and five major pharmaceutical companies to develop new oncology applications and enhance existing ones. Recruited and managed developer interns, overseeing project execution and task development.'
        },
        {
            name: 'Lymphoma Canada',
            location: 'Mississauga, Ontario',
            date: 'Oct 2021 - Mar 2022',
            description:
                'Developed and optimized Python scripts to query databases, enforce data integrity, and streamline audit preparation. Engineered a reliable automation pipeline to seamlessly transfer data from QuickBooks to the database. Designed and implemented advanced end-of-term data analysis, providing key insights into database improvements for the CEO and bookkeeper.'
        },
        {
            name: "Marco's Way",
            location: 'Remote',
            date: 'Jan 2021 - Present',
            description:
                "Manage and enhance the core functionality of the Marco's Way charity website, ensuring optimal performance and user experience. Work closely with organizers to develop and implement new event and project features, seamlessly integrating them into the fundraising platform."
        }
    ];

    return (
        <section className="py-16 bg-[#FAFAFA]">
            <div className="w-full mx-auto">
                <h2 className="text-heading3Xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>

                <div className="flex flex-col gap-2">
                    {experiences.map((job, index) => (
                        <div
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
        </section>
    );
};

export default Experience;
