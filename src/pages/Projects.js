import React from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";

const projects = [
  { 
    id: 1, 
    name: " Building  Name : Voortman steel group​", 
    image: Project1, 
    description: "Location : Monee, Illinois, USA​.",
    weight: "Weight : 481 MTon", 
    scope_of_work: "Scope of Work : 3D Modeling & Detailing​"
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        
        {/* Page Title */}
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-50 mb-6 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        <motion.p 
          className="text-center text-gray-100 mb-8 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Check out some of the projects we've worked on.
        </motion.p>

        {/* Project Cards Grid */}
        <div className="flex justify-center items-center">  
          <div className="grid grid-cols-1 place-items-center gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="bg-white shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow flex flex-col items-start max-w-lg w-full"
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
                    className="max-w-full h-auto object-contain"
                  />
                </div>

                {/* Left-Aligned Text */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">
                  {project.name}
                </h3>
                <p className="text-gray-700 mt-3 text-base sm:text-lg">
                  {project.description}
                </p>
                <p className="text-gray-700 mt-3 text-base sm:text-lg">
                  {project.weight}
                </p>
                <p className="text-gray-700 mt-3 text-base sm:text-lg">
                  {project.scope_of_work}
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
