import React from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.jpg";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";
import Project7 from "../assets/Project7.jpg";
import Project8 from "../assets/Project8.jpg";
import Project9 from "../assets/Project9.jpg";



const projects = [
  {
    id: 1,
    name: "Building Name: Voortman Steel Group",
    image: Project1,
    description: "Location: Monee, Illinois, USA.",
    weight: "Weight: 481 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 2,
    name: "Building Name: New West Hardin Middle School",
    image: Project2,
    description: "Location: US, Kentucky.",
    weight: "Weight: 271 MTon",
    scope_of_work: "Scope of Work: Connection Design, 3D Modeling & Detailing",
  },
  {
    id: 3,
    name: "Building Name: TMMK – PEMC Booths & Ovens",
    image: Project3,
    description: "Location: US, Kentucky.",
    weight: "Weight: 231 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 4,
    name: "Building Name: Michelin Platform",
    image: Project4,
    description: "Location: US, Kentucky.",
    weight: "Weight: 155 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 5,
    name: "Building Name: Kaiser CCL4 Coater & Mix Room",
    image: Project5,
    description: "Location: US, Newburgh​ ",
    weight: "Weight : 125 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 6,
    name: "Building Name: Conventional Test Facilities ",
    image: Project6,
    description: "Location: US, Indiana ",
    weight: "Weight : 84 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 7,
    name: "Building Name: Conveyor​​ ",
    image: Project7,
    description: "Location: US, Kentucky​ ",
    weight: "Weight : 36 MTon",
    scope_of_work: "Scope of Work: Connection design, 3D Modeling & Detailing​",
  },
  {
    id: 8,
    name: "Building Name: Gudel-Koch Steel​ ",
    image: Project8,
    description: "Location: Buffalo, New York​ ",
    weight: "Weight : 19 MTon​",
    scope_of_work: "Scope of Work: Connection Design, 3D Modeling & Detailing ​",
  },
  {
    id: 9,
    name: "Building Name: Hoist Platform​ ",
    image: Project9,
    description: "Location: US ",
    weight: "Weight : 14 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing ",
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Page Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-50 mb-10 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
              key={project.id}
              className="bg-white shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow flex flex-col items-center h-full w-96"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <div className="w-full h-full flex justify-center itmems-center">
               <img
               src={project.image}
               alt={project.name}
               className="w-full h-full object-cover contain-t-lg"
               />  
               </div>
            
              {/* Left-Aligned Text (with center block positioning) */}
              <div className="w-full text-left px-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-gray-600 mt-2">{project.weight}</p>
                <p className="text-gray-600 mt-2">{project.scope_of_work}</p>
              </div>
            </motion.div>
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
