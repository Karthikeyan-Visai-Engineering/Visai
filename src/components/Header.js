import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

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
    <header className="relative w-full font-sans z-50">
      {/* Top Bar - optional (add info here if needed) */}
      <div className="bg-gray-800 text-yellow-400 text-sm py-2 px-4 text-right">
        {/* Optional top bar content here */}
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md py-4 px-6 md:px-12 relative">
        <div className="container mx-auto flex items-center justify-between relative">

          {/* Left Nav */}
          <motion.nav
            className="hidden md:flex space-x-8 text-lg font-semibold text-blue-900"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {["Home", "About"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.05 }}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-500 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-32 drop-shadow-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Right Nav */}
          <motion.nav
            className="hidden md:flex space-x-8 text-lg font-semibold text-blue-900"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {["Projects", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.05 }}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-500 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-3xl text-blue-900">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-blue-900 bg-opacity-95 text-white flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <ul className="text-3xl font-bold space-y-8 text-center">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: "#FACC15" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
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
