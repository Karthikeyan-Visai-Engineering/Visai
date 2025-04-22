import React, { useState } from "react";
import { motion } from "framer-motion";
import contact from "../assets/formigggggg.png";

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
      alert(result.message);
      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-10 min-h-screen px-6 py-12 bg-white">
      
      {/* Enquiry Section */}
      <motion.div
        className="bg-gray-700 shadow-xl rounded-2xl p-8 md:p-10 max-w-lg w-full border border-gray-200"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        whileHover={{ y: -5, boxShadow: "0px 12px 24px rgba(0,0,0,0.15)" }}
      >
        <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
          Direct Inquiries
        </h2>

        <div className="mb-6 text-center">
          <h4 className="font-semibold text-gray-100">Project Manager / Director</h4>
          <a
            href="mailto:kamal.govindhan@visaiengineering.com"
            className="text-blue-100 hover:underline block"
          >
            kamal.govindhan@visaiengineering.com
          </a>
        </div>

        <div className="text-center">
          <h4 className="font-semibold text-gray-100">Project Manager</h4>
          <a
            href="mailto:devaraj.perumal@visaiengineering.com"
            className="text-blue-100 hover:underline block"
          >
            devaraj.perumal@visaiengineering.com
          </a>
        </div>

        {/* Image */}
        <img
          src={contact}
          alt="Contact Illustration"
          className="mt-6 rounded-lg w-full h-80 object-cover"
        />
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-[#2f3a4b] shadow-xl rounded-2xl p-8 md:p-10 max-w-lg w-full"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        whileHover={{ y: -5, boxShadow: "0px 12px 24px rgba(0,0,0,0.2)" }}
      >
        <h2 className="text-4xl font-extrabold text-center text-white">
          Get in Touch
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {["name", "email", "subject", "message"].map((field) => (
            <motion.div key={field} variants={itemVariants}>
              {field === "message" ? (
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 border border-gray-300 rounded-2xl bg-white text-black font-medium shadow-md placeholder-gray-400"
                  required
                />
              ) : (
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  className="w-full p-3 border border-gray-300 rounded-2xl bg-white text-black font-medium shadow-md placeholder-gray-400"
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-2xl text-lg font-semibold hover:bg-yellow-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
