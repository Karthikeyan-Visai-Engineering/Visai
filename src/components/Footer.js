import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo(0, 0); // Scroll to the top of the page
};

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl font-extrabold text-center mb-6">
            Visai Engineering
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
             {/* Location Section */}
             <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">
                Our Locations
              </h2>

              <div className=" text-white p-2 rounded-lg shadow-lg mb-4">
                <h1 className="text-2xl text-orange-400 font-bold mb-2 ">USA</h1>
                <p className="text-lg leading-relaxed">
                  Visai Engineering  Inc <br />
                  6575 West Loop South, Suite 500 <br />
                  Bellaire, Texas 77401 <br />
                  Ph : 270 777 2620 <br/>
                </p>
                <h1 className="text-2xl text-orange-400 font-bold mb-2 py-2">CANADA</h1>
                <p className="text-lg leading-relaxed">
                  Visai Engineering Inc<br />
                  500 - 4th Avenue SW, Suite 2500 <br />
                  Calgary, T2P 2V6, Alberta <br />
                  Ph : 403 604 9777 <br />
                </p>
                <h1 className="text-2xl text-orange-400 font-bold mb-2 py-2">INDIA</h1>
                <p className="text-lg leading-relaxed">
                Visai Engineering India Pvt Ltd <br/>
                  136, Arcot Road, 3rd Floor Suite #325, <br />
                  Shyamala Tower, Saligramam, <br />
                  Chennai 600093, Tamil Nadu, India<br />
                  Ph : +91 72008 73833
                </p>
              </div>

            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">
                Quick Links
              </h2>
              <ul className="space-y-3 text-lg">
                <li>
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">
                Contact Us
              </h2>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href="mailto:rkamalanathan@visaiengineering.com"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Email: rkamalanathan@visaiengineering.com
                  </a>
                </li>
              </ul>
              <div className="flex space-x-6 justify-center md:justify-start mt-6">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition duration-300"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition duration-300"
                >
                  <FaTwitter size={30} />
                </a>
              </div>
            </div>

                     </div>

          {/* Copyright Text */}
          <p className="text-center text-lg mt-8 border-t border-gray-600 pt-6">
            &copy; {new Date().getFullYear()} Visai Engineering. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
