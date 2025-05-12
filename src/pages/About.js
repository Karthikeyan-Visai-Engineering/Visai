import React from "react";
import ab1 from "../assets/about1.png";
function About() {
  return (
    <div className="bg-white text-blue-900 py-16">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section: Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold uppercase tracking-wide">
            Why Choose Us?
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* About Description */}
        <div className="bg-gray-700 text-white p-10 rounded-3xl shadow-xl transform hover:scale-105 transition duration-300">
          <p className="text-2xl leading-relaxed text-center font-medium">
            At <span className="font-extrabold text-yellow-400">Visai Engineering</span>, we are not just engineers; we are pioneers in building innovation.  
            With expertise in <span className="font-extrabold text-yellow-400">Structural and Mechanical</span>,  
            we create sustainable, reliable, and cutting-edge solutions for clients worldwide.
          </p>
        </div>

        {/* Section: Purpose */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-wide">Our Purpose</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          <div className="mt-8 space-y-6 text-xl">
          <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* Left Side - Text */}
    <div className="md:w-1/2 text-xl text-white ">
      <p>
        <strong className="text-orange-500 font-extrabold">Engineering Excellence:</strong> 
        <span className="font-extrabold"> Creating world-class innovative solutions.</span>
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="md:w-1/2 ">
      <img 
        src={ab1}
        alt="Engineering Excellence - Innovative Solutions" 
        className="rounded-5xl shadow-lg object-cover w-full h-full"
      />
    </div>
  </div>
</div>



            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              <p><strong className="text-orange-500 font-extrabold"> Customer Commitment:</strong>
              <span className="font-extrabold text-white"> Your trust is our greatest success. </span> </p>
            </div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
            <p>
            <strong className="text-orange-500 font-extrabold">Quality-Driven: </strong>
            <span className="font-extrabold text-gray-100">Every project is a masterpiece of precision and reliability.</span>
            </p>
           </div>

          </div>
        </div>

        {/* Section: Values */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-wide">Our Values</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
            <div className="bg-gray-700 text-white font-bold p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              <p> Integrity is the foundation of our work.</p>
            </div>
            <div className="bg-gray-700 text-white p-6 font-bold rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              <p> Customer satisfaction is our top priority.</p>
            </div>
            <div className="bg-gray-700 text-white p-6 font-bold rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              <p> Every decision is made for the greater good.</p>
            </div>
            <div className="bg-gray-700 text-white p-6 font-bold rounded-2xl shadow-lg hover:scale-105 transition transform duration-300">
              <p> We provide a healthy work-life balance.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
