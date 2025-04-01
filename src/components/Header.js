import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // Update with your logo path

const navVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full ">
      {/* Top Bar */}
      <div className="bg-gray-700 text-white py-1 text-sm flex justify-between px-6 items-center"></div>

      {/* Main Navigation */}
      <div className="relative bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-5 px-8">
          {/* Left Links */}
          <motion.nav
            className="hidden md:flex space-x-8 text-2xl font-bold text-red-800"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/" className="text-gray-900 font-semibold hover:text-yellow-500 transition-all">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Link to="/about" className="text-gray-900 font-semibold hover:text-yellow-500 transition-all">
                About
              </Link>
            </motion.div>
          </motion.nav>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <motion.img
                src={logo}
                alt="Company Logo"
                className="w-40"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Right Links */}
          <motion.nav
            className="hidden md:flex space-x-8 text-2xl font-extrabold text-blue-100"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {["Projects", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <Link to={`/${item.toLowerCase()}`} className="text-gray-900 font-semibold hover:text-yellow-500 transition-all">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-yellow-400 text-4xl" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white text-5xl" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>

            {/* Mobile Links */}
            <ul className="text-white text-3xl space-y-6 font-extrabold">
              {["Home", "Pages", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1, color: "#FACC15" }} transition={{ duration: 0.3 }}>
                  <Link to={`/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
