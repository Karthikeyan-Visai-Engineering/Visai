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
import Project10 from "../assets/Project10.jpg";
import Project11 from "../assets/Project11.jpg";
import Project12 from "../assets/Project12..png";
import Project13 from "../assets/Project13.jpg";

const projects = [
  {
    id: 1,
    name: " Voortman Steel Group",
    image: Project1,
    description: "Location: Monee, Illinois, US",
    weight: "Weight: 481 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 2,
    name: " New West Hardin Middle School",
    image: Project2,
    description: "Location: Kentucky, US",
    weight: "Weight: 271 MTon",
    scope_of_work: "Scope of Work: Connection Design, 3D Modeling & Detailing",
  },
  {
    id: 3,
    name: " TMMK – PEMC Booths & Ovens",
    image: Project3,
    description: "Location: Kentucky, US",
    weight: "Weight: 231 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 4,
    name: " Michelin Platform",
    image: Project4,
    description: "Location: Kentucky, US",
    weight: "Weight: 155 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 5,
    name: " Kaiser CCL4 Coater & Mix Room",
    image: Project5,
    description: "Location: Newburgh, US​ ",
    weight: "Weight : 125 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 6,
    name: " Conventional Test Facilities ",
    image: Project6,
    description: "Location: Indiana, US ",
    weight: "Weight : 84 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing",
  },
  {
    id: 7,
    name: "Conveyor​​ ",
    image: Project7,
    description: "Location: Kentucky, US​ ",
    weight: "Weight : 36 MTon",
    scope_of_work: "Scope of Work: Connection design, 3D Modeling & Detailing​",
  },
  {
    id: 8,
    name: " Gudel-Koch Steel​ ",
    image: Project8,
    description: "Location: Buffalo, New York, US​ ",
    weight: "Weight : 19 MTon​",
    scope_of_work: "Scope of Work: Connection Design, 3D Modeling & Detailing ​",
  },
  {
    id: 9,
    name: " Hoist Platform​ ",
    image: Project9,
    description: "Location: US ",
    weight: "Weight : 14 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing ",
  },
  {
    id: 10,
    name: " Voestalpine – Roll forming​ ",
    image: Project10,
    description: "Location: Indiana, US ",
    weight: "Weight : 300 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing ",
  },
  {
    id: 11,
    name: " River Ridge Building 11​ ",
    image: Project11,
    description: "Location: Indiana, US ",
    weight: "Weight : 151 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing ",
  },
  {
    id: 12,
    name: " Oppidan - 5MW Data Center ",
    image: Project12,
    description: "Location: Jeffersonville, Indiana, US ",
    weight: "Weight : 86 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing ",
  },
  {
    id: 13,
    name: " Algood Food Co -Roaster Expansion​ ",
    image: Project13,
    description: "Location: Trade Port Drive, Louisville KY, US ",
    weight: "Weight : 75 MTon",
    scope_of_work: "Scope of Work: 3D Modeling & Detailing ",
  }
];



function Projects() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Page Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center bg-gray-900 text-transparent bg-clip-text mb-10 mt-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", bounce: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          Our Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-10 border-gray-900">
          {projects.map((project, index) => (
            <motion.div
            key={project.id}
            className="bg-gray-700 shadow-3xl rounded-3xl p-6 sm:p-8 hover:shadow-3xl border-4 border-gray-100 transition-shadow flex flex-col items-center h-full w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
          
              {/* Image */}
              <div className="w-full h-auto flex justify-center rounded-3xl items-center overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Project Details */}
              <div className="w-full text-left px-6 mt-10">
                <h3 className="text-xl font-semibold text-yellow-400">{project.name}</h3>
                <p className="text-white mt-2 font-semibold">{project.description}</p>
                <p className="text-white mt-2 font-semibold">{project.weight}</p>
                <p className="text-white mt-2 font-semibold">{project.scope_of_work}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
