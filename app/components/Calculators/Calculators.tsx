import React from 'react';

interface Project {
    title: string;
    description: string;
}

const projects: Project[] = [
    {
        title: 'Project Rebrand',
        description: 'Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    },
    {
        title: 'Website Redesign',
        description: 'Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    },
    {
        title: 'Premium Saas Design',
        description: 'Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    },
    {
        title: 'Web Visual Design',
        description: 'Aut cupiditate expedita dolor eveniet a autem rerum ut dicta. Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.',
    },
];

const Calculators: React.FC = () => {
    return (
        <div className="bg-gray-100 py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Calculators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
                            <img
                                className="w-full h-40 object-cover"
                                src={`project-${index + 1}.jpg`} // Assuming you have images named project-1.jpg, project-2.jpg, etc.
                                alt={project.title}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculators;