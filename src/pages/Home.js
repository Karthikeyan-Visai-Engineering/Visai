import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

import hvac from "../assets/servicehvac.jpg";
import safety from "../assets/safety.jpg";
import structural from "../assets/Structure.jpg";
import bg from "../assets/bg.png";

function Home() {
  const slideLeftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-white text-white py-">
      <motion.div
      className="space-y-16 px-4 md:px-12"
      initial="hidden"
      animate="visible"
      exit="hidden"
    ></motion.div>

      {/* Banner Image with Motion Effect */}
      <motion.img
        src={bg}
        alt="Banner Image"
        className="w-full h-[500px] object-cover mt-5"
        initial={{ opacity: 0, x: -150, y: -50, rotate: -10, scale: 0.8 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 120, damping: 15, velocity: 2 },
        }}
        whileHover={{
          scale: 1.08,
          rotateY: 10,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      />

      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-4xl font-extrabold text-center mt-10 uppercase tracking-wide text-black"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        "Innovating Engineering Solutions for a Sustainable Future"
      </motion.h1>
      <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

      {/* Key Features Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 my-4 text-md px-4 font-bold text-center">
        {[
          "Certified Experts",
          "High-Quality Standards",
          "Efficient Project Execution",
          "Commitment to Safety",
        ].map((text, index) => (
          <div
            key={index}
            className="bg-yellow-500 text-black text-center font-bold px-6 py-2 rounded-xl shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
          >
            {text}
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-900 p-12 md:p-16 mb-10 mt-20 rounded-3xl shadow-lg mx-auto max-w-5xl transform hover:scale-105 transition duration-300">
        <h2 className="text-5xl text-white font-extrabold text-center">
          WELCOME TO{" "}
          <span className="text-yellow-400 font-bold">VISAI ENGINEERING</span>
        </h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-white  text-lg md:text-2xl px-6 py-6 leading-relaxed text-center">
          "At Visai Engineering, we specialize in innovative building and infrastructure solutions. 
          Our expertise spans structural and mechanical design engineering. Our team of certified 
          professionals delivers industry-leading services with cutting-edge technology."
        </p>
      </div>

      {/* Services Section */}
      <motion.h1
  className="text-5xl font-extrabold text-orange-600 py-12 text-center"
  initial={{ x: "-50vw", opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  OUR SERVICES
</motion.h1>


      {/* Combined Services Container */}
      <div className="space-y-16 mb-10">

        {/* Structural Engineering (Slide Left to Right) */}
         {/* Structural Engineering */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-12 md:p-16 rounded-3xl shadow-lg mx-auto max-w-5xl flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300"
        variants={slideLeftToRight}
      >
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={structural} alt="Structural Engineering" className="w-full h-64 object-cover rounded-l-xl" />
        </div>
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h1 className="text-3xl text-yellow-400 font-bold mb-4">STRUCTURAL ENGINEERING</h1>
          <p className="text-white text-lg font-semibold">
            Our structural engineers design and analyze buildings and infrastructure to ensure safety, 
            stability, and durability.
          </p>
        </div>
      </motion.div>

      {/* Mechanical Engineering */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-800  text-white p-12 md:p-16 rounded-3xl shadow-lg mx-auto max-w-5xl flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300"
        variants={slideRightToLeft}
      >
        <div className="w-full lg:w-1/2 order-last lg:order-first p-4 md:p-8">
          <h1 className="text-3xl text-yellow-400 font-bold mb-4">MECHANICAL ENGINEERING</h1>
          <p className="text-gray-100 text-lg font-semibold">
            Our mechanical engineers design HVAC, plumbing, and fire protection systems to create safe 
            and comfortable environments.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={hvac} alt="HVAC Solution" className="w-full h-72 object-cover rounded-xl" />
        </div>
      </motion.div>

      {/* Safety & Sustainability */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-800  text-white p-12 md:p-16 pb-24 rounded-3xl shadow-lg mx-auto max-w-5xl flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300"
        variants={slideLeftToRight}
      >
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={safety} alt="Safety Worker" className="w-full h-full object-cover rounded-l-xl" />
        </div>
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-10">SAFETY & SUSTAINABILITY</h2>
          <p className="text-lg font-semibold">
            We prioritize sustainability to ensure minimal environmental impact and future responsibility.
          </p>
        </div>
      </motion.div></div>
</div>
  );
}

export default Home;
