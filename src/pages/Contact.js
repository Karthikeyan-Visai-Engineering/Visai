import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message); // Show response message

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-center text-blue-900">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-3">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950 shadow-md"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950 shadow-md"
              required
            />
          </div>
          
          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950 shadow-md"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 border border-gray-900 rounded-lg bg-white text-blue-950 shadow-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
