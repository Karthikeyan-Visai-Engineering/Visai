import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader"; 

import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timer = setTimeout(() => setLoading(false), 1000); // Smooth transition
    return () => clearTimeout(timer);
  }, [location.pathname]); // ✅ Track only `pathname` to prevent unnecessary reloads

  return (
    <>
      {loading ? (
        <Loader /> // ✅ Show loader while switching pages
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="*" element={<NotFound />} /> {/* ✅ 404 Page */}
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
};

export default App;
