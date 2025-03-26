import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/visailogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 ">
      <div className="container mx-auto flex justify-between items-center py-1 px-6">
        
        {/* Logo */}
        <Link to="/" className="flex justify-start px-4">
          <motion.img 
            src={logo} 
            alt="Company Logo" 
            className="logo-img"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotate: 10, scale: 1.1 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          <ul className="flex space-x-8 text-2xl font-extrabold text-blue-900">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.li 
                key={item}
                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.1, color: "#FACC15" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/${item.toLowerCase()}`} className="font-bold transition duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Full-Screen Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-gradient-to-r from-gray-900 to-gray-700 bg-opacity-90 flex flex-col justify-center items-center z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Navigation Links */}
            <motion.ul 
              className="text-white text-2xl space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.1, color: "#FACC15" }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="hover:text-yellow-300 transition duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;