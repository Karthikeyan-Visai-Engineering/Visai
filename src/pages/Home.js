import React from "react";
import ImageSlider from "../components/ImageSlider";
import hvac from "../assets/servicehvac.jpg";
import safety from "../assets/safety.jpg";
import structural from "../assets/Structure.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-white text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center uppercase tracking-wide text-black">
          "Innovating Engineering Solutions for a Sustainable Future"
        </h1>
        <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

        {/* Image Slider */}
        <div className="mt-6">
          <ImageSlider />
        </div>

        {/* Key Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 text-lg font-bold text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            "Certified Experts",
            "High-Quality Standards",
            "Efficient Project Execution",
            "Commitment to Safety",
          ].map((text, index) => (
            <motion.div
              key={index}
              className="bg-yellow-500 text-black font-bold px-2 py-3 rounded-3xl shadow-lg hover:scale-110 hover:rotate-2 transition duration-500 cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* About Us Section */}
        <div className="bg-gray-100 text-gray-900 p-12 md:p-16 mb-10 rounded-xl shadow-lg mx-auto max-w-5xl transform hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-extrabold text-center">
            WELCOME TO <span className="text-blue-900 font-bold">VISAI ENGINEERING</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-900 text-lg md:text-2xl px-6 py-6 leading-relaxed text-center">
            "At Visai Engineering, we specialize in innovative building and infrastructure
            solutions. Our expertise spans structural and mechanical design engineering.
            Our team of certified professionals delivers industry-leading services with
            cutting-edge technology."
          </p>
        </div>

        {/* Services Section */}
        <motion.h1
          className="text-5xl font-extrabold text-orange-400 py-12 text-center"
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          OUR SERVICES
        </motion.h1>

        {/* Structural Engineering Section */}
        <div className="mt-12 bg-gray-100 text-gray-900 rounded-xl shadow-lg p-12 flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={structural}
              alt="Structural Engineering"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-6">STRUCTURAL ENGINEERING</h1>
            <p className="text-blue-700 text-lg font-bold">
              Our structural engineers design and analyze buildings and infrastructure
              to ensure safety, stability, and durability.
            </p>
          </div>
        </div>

        {/* Mechanical Engineering Section */}
        <div className="mt-16 bg-gray-100 text-gray-900 rounded-xl shadow-lg p-12 flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={hvac}
              alt="HVAC Solution"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10">
            <h1 className="text-3xl font-bold mb-4">MECHANICAL ENGINEERING</h1>
            <p className="text-blue-700 font-bold text-lg">
              Our mechanical engineers design HVAC, plumbing, and fire protection
              systems to create safe and comfortable environments.
            </p>
          </div>
        </div>

        {/* Safety & Sustainability Section */}
        <div className="mt-16 bg-gray-100 text-gray-900 rounded-xl shadow-lg p-12 flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={safety}
              alt="Safety Worker"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-6">SAFETY & SUSTAINABILITY</h2>
            <p className="text-blue-700 font-bold text-lg">
              We prioritize sustainability to ensure minimal environmental impact and
              future responsibility.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
