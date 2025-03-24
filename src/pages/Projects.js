import React from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";

const projects = [
  { 
    id: 1, 
    name: "Voortman steel group​", 
    image: Project1, 
    description: "Monee, Illinois, USA​." 
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Page Title */}
        <motion.h2 
          className="text-5xl font-extrabold text-center text-gray-50 mb-4 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        <motion.p 
          className="text-center text-gray-100 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Check out some of the projects we've worked on.
        </motion.p>

        {/* Project Cards Grid */}
        <div className="flex justify-center items-start">
          <div className="grid grid-cols-1 place-items-center gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow flex flex-col items-center w-96"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Image Centering Fix */}
                <div className="w-full flex justify-center">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-auto h-48 object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">
                  {project.name}
                </h3>
                <p className="text-gray-600 mt-2 text-center">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
