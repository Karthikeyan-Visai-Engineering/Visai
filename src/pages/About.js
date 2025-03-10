import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
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
        <div className="bg-white text-gray-900 p-10 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300">
          <p className="text-2xl leading-relaxed text-center font-medium">
            At <span className="font-bold text-blue-700">Visai Engineering</span>, we are not just engineers; we are pioneers in building innovation.  
            With expertise in <span className="font-semibold text-blue-600">HVAC, Plumbing, and Fire Protection</span>,  
            we create sustainable, reliable, and cutting-edge solutions for clients worldwide.
          </p>
        </div>

        {/* Section: Purpose */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-semibold uppercase tracking-wide">Our Purpose</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          <div className="mt-8 space-y-6 text-xl">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p><strong className="text-white"> Engineering Excellence:</strong> Creating world-class innovative solutions.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p><strong className="text-white"> Customer Commitment:</strong> Your trust is our greatest success.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p><strong className="text-white"> Quality-Driven:</strong> Every project is a masterpiece of precision and reliability.</p>
            </div>
          </div>
        </div>

        {/* Section: Values */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-semibold uppercase tracking-wide">Our Values</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p> Integrity is the foundation of our work.</p>
            </div>
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p> Customer satisfaction is our top priority.</p>
            </div>
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p> Every decision is made for the greater good.</p>
            </div>
            <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <p> We provide a healthy work-life balance.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
