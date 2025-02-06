// app/projects/page.tsx
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "MERN Stack E-Commerce",
      description: "An e-commerce platform built with MongoDB, Express, React, and Node.js.",
      github: "https://github.com/MustafaRaheel26/mern-ecommerce",
      live: "https://example.com/mern-ecommerce",
    },
    {
      name: "Real-Time Chat Application",
      description: "A real-time messaging app with WebSocket and Node.js.",
      github: "https://github.com/MustafaRaheel26/chat-app",
      live: "https://example.com/chat-app",
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio website built using Next.js and Tailwind CSS.",
      github: "https://github.com/MustafaRaheel26/portfolio",
      live: "https://mustafa-portfolio.com",
    },
  ];

  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <h1 className="text-3xl font-semibold text-blue-600 mb-4">Projects</h1>
      <p className="text-lg text-gray-300 mb-8">Check out some of my latest work!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-400">{project.name}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>

            <div className="mt-6 flex justify-between space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <FaGithub className="text-2xl" />
                <span className="ml-2 text-lg">GitHub</span>
              </a>

              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <FaLink className="text-2xl" />
                <span className="ml-2 text-lg">Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
