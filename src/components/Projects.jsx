import React from 'react';
import image1 from '../assets/projects/img1.jpg';
import image2 from '../assets/projects/img2.jpg';
import image3 from '../assets/projects/img3.jpg';




const projects = [
    {
        title: 'Projekt 1',
        image: image1,
        link: '/',
        technologies: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
        title: 'Projekt 2',
        image: image2,

        link: '/',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Projekt 3',
        image: image3,

        link: '/',
        technologies: ['Node.js', 'Express', 'MongoDB']
    }
];

const Projects = () => {
    return (
        <div id="About" className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">Adam Waluś - doświadczony programista z pasją do tworzenia nowoczesnych i efektywnych aplikacji. </h1>
            <h2 className="text-2x2 font-bold text-center mb-10"> Główne technologie w jakich pracuję to: React, Flutter, C#/.net, TypeScript, Node.js</h2>
            <h2 className="text-2xl font-bold text-center mb-8">Moje największe projekty:</h2>
            <div id="Projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-lg">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <a href={project.link} className="text-blue-500 hover:underline mb-4">Link</a>
                                <div className="flex flex-wrap mt-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

        
    );
};

export default Projects;
