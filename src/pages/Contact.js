import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <motion.div
        className="bg-gray-700  backdrop-blur-2xl shadow-xl rounded-2xl p-8 md:p-12 max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-center text-white">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-gray-900 rounded-2xl bg-white text-white font-black shadow-md"
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-900 rounded-2xl bg-white text-black font-black  shadow-md"
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div>
            <motion.input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="w-full mt-2 p-3 border border-gray-900 rounded-2xl bg-white text-black font-black  shadow-md"
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 border border-gray-900 rounded-2xl bg-white text-black font-black shadow-md"
              required
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            ></motion.textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-2xl text-lg font-semibold hover:bg-yellow-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
