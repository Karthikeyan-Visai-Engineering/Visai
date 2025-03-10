import React from "react";
import ImageSlider from "../components/ImageSlider";
import hvac from "../assets/servicehvac.jpg";
// import plumbing from "../assets/serviceplumbing.jpg";
// import fireSafety from "../assets/servicefire.webp";
import safety from "../assets/safety.jpg";
import structural from "../assets/Structure.jpg";

function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center uppercase tracking-wide text-white">
          "Innovating Engineering Solutions for a Sustainable Future"
        </h1>
        <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>

        {/* Image Slider */}
        <div className="mt-6">
          <ImageSlider />
        </div>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 text-lg font-bold text-center ">
          {["Certified Experts", "High-Quality Standards", "Efficient Project Execution", "Commitment to Safety"].map(
            (text, index) => (
              <div
                key={index}
                className="bg-yellow-500 text-black px-8 py-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                {text}
              </div>
            )
          )}
        </div>

        {/* About Us Section */}
        <div className="bg-white text-gray-900 p-12 md:p-16 rounded-xl shadow-2xl mx-4 md:mx-auto max-w-5xl transform hover:scale-105 transition duration-300">
          <h2 className="text-5xl font-extrabold text-center">
            WELCOME TO <span className="text-blue-700">VISAI ENGINEERING</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-700 text-lg md:text-2xl px-6 py-6 leading-relaxed text-center">
            "At Visai Engineering, we specialize in innovative building and infrastructure solutions. Our expertise spans structural and mechanical design engineering. Our team of certified professionals delivers industry-leading services with cutting-edge technology."
          </p>
        </div>

        {/* Services Section */}
        <h1 className="text-5xl font-extrabold text-orange-400 py-12 text-center">OUR SERVICES</h1>

        {/* Structural Engineering Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold text-yellow-400 uppercase text-center p-6">STRUCTURAL ENGINEERING</h2>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
          <div className="mt-16 bg-gray-100 text-gray-900 rounded-xl shadow-lg p-12 flex flex-col lg:flex-row items-center transform hover:scale-105 transition duration-300">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={structural}
                alt="Structural Engineering"
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>
            <div className="w-full lg:w-1/2 p-10">
              <h1 className="text-3xl font-bold mb-6">STRUCTURAL ENGINEERING</h1>
              <p className="text-gray-700 text-lg">
                Our structural engineers design and analyze buildings and infrastructure to ensure safety, stability, and durability.
              </p>
            </div>
          </div>
        </div>

        {/* Mechanical Engineering Section */}
        <h2 className="text-3xl font-extrabold text-yellow-400 uppercase text-center p-12">MECHANICAL ENGINEERING</h2>
        <div className="w-32 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

        <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* HVAC Solution */}
          <div className="bg-gray-100 text-gray-900 rounded-lg p-8 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img src={hvac} alt="HVAC Solution" className="w-full h-72 object-cover rounded-xl" />
            </div>
            <div className="w-full lg:w-1/2 p-10">
              <h1 className="text-3xl font-bold mb-4">MECHANICAL ENGINEERING</h1>
              <p className="text-gray-700 text-lg">
                Our mechanical engineers design HVAC, plumbing, and fire protection systems to create safe and comfortable environments.
              </p>
            </div>
          </div>
        </div>

        {/* Safety & Sustainability Section */}
        <h1 className="text-5xl font-extrabold text-orange-400 py-12 text-center">SAFETY AND SUSTAINABILITY</h1>

        <div className="mt-16 bg-gray-100 text-gray-900 rounded-xl shadow-lg p-12 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img src={safety} alt="Safety Worker" className="w-full h-full object-cover rounded-l-xl" />
          </div>
          <div className="w-full lg:w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-6">SAFETY & SUSTAINABILITY</h2>
            <p className="text-gray-700 text-lg">
              We prioritize sustainability to ensure minimal environmental impact and future responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
