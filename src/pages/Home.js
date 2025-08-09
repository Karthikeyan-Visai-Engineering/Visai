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

      {/* Banner Image without Motion Effect */}
     <img
     src={bg}
     alt="Banner Image"
     className="w-full h-[500px] object-cover mt-0" 
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
      <motion.div
  className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 md:p-12 lg:p-16 mb-10 mt-10 rounded-3xl shadow-lg mx-auto max-w-[90%] md:max-w-4xl lg:max-w-5xl flex flex-col items-center gap-6 lg:gap-12 transform hover:scale-105 transition duration-300"
  variants={slideLeftToRight} // Keep this for the left-to-right animation
>
  <div className="w-full text-center lg:text-left">
    <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-extrabold">
      WELCOME TO <br className="block md:hidden" />
      <span className="text-yellow-400 font-bold">VISAI ENGINEERING</span>
    </h2>
    <div className="w-12 md:w-16 lg:w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
    <p className="text-white text-base md:text-lg lg:text-lg px-2 md:px-6 py-4 leading-relaxed">
      "At Visai Engineering, we specialize in innovative building and infrastructure solutions.
      Our expertise spans structural and mechanical design engineering. Our team of certified
      professionals delivers industry-leading services with cutting-edge technology."
    </p>
  </div>
</motion.div>




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
  className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg mx-auto max-w-[90%] md:max-w-4xl lg:max-w-5xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12 transform hover:scale-105 transition duration-300"
  variants={slideLeftToRight}
>
  <div className="w-full lg:w-1/2">
    <img 
      src={structural} 
      alt="Structural Engineering" 
      className="w-full h-48 md:h-64 object-cover rounded-xl lg:rounded-l-xl"
    />
  </div>
  <div className="w-full lg:w-1/2 p-4 md:p-10 text-center lg:text-left">
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold mb-4">
      STRUCTURAL ENGINEERING
    </h2>
    <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
      Our structural engineers design and analyze buildings and infrastructure to ensure 
      safety, stability, and durability.
    </p>
  </div>
</motion.div>


      {/* Mechanical Engineering */}
<motion.div
  className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg mx-auto max-w-[90%] md:max-w-4xl lg:max-w-5xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12 transform hover:scale-105 transition duration-300"
  variants={slideRightToLeft}
>
<div className="w-full lg:w-1/2 p-6 md:p-10 text-center lg:text-left">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-400 font-bold mb-4">
      MECHANICAL ENGINEERING
    </h2>
    <p className="text-gray-100 text-base md:text-lg font-semibold leading-relaxed">
      Our mechanical engineers design HVAC, plumbing, and fire protection systems to create safe 
      and comfortable environments.
    </p>
  </div>
  <div className="w-full lg:w-1/2">
    <img 
      src={hvac} 
      alt="HVAC Solution" 
      className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-xl"
    />
  </div>
</motion.div>


      {/* Safety & Sustainability */}
      {/* Safety & Sustainability */}
<motion.div
  className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg mx-auto max-w-[90%] md:max-w-4xl lg:max-w-5xl flex flex-col lg:flex-row items-center gap-6 lg:gap-12 transform hover:scale-105 transition duration-300"
  variants={slideLeftToRight}
>
  <div className="w-full lg:w-1/2">
    <img 
      src={safety} 
      alt="Safety Worker" 
      className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-xl"
    />
  </div>
  <div className="w-full lg:w-1/2 p-6 md:p-10 text-center lg:text-left">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-6">
      SAFETY & SUSTAINABILITY
    </h2>
    <p className="text-base md:text-lg font-semibold leading-relaxed">
      We prioritize sustainability to ensure minimal environmental impact and future responsibility.
    </p>
  </div>
</motion.div>
</div>
</div>
  );
}

export default Home;
