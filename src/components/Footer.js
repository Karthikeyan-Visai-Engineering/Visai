import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Visai Engineering
        </h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Locations */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">Our Locations</h2>
            <div className="text-white text-base space-y-4">
              <div>
                <h3 className="text-orange-400 font-bold text-lg">USA</h3>
                <p>
                  Visai Engineering Inc <br />
                  6575 West Loop South, Suite 500 <br />
                  Bellaire, Texas 77401 <br />
                  Ph: 270 777 2620
                </p>
              </div>
              <div>
                <h3 className="text-orange-400 font-bold text-lg">CANADA</h3>
                <p>
                  Visai Energy Inc <br />
                  500 - 4th Avenue SW, Suite 2500 <br />
                  Calgary, T2P 2V6, Alberta <br />
                  Ph: 403 604 9777
                </p>
              </div>
              <div>
                <h3 className="text-orange-400 font-bold text-lg">INDIA</h3>
                <p>
                  Visai Engineering India Pvt Ltd <br />
                  8th Floor, Block 3, SmartWorks, <br />
                  A3 and A4, Olympia National Tower, North, Guindy Industrial Estate, <br />
                  Guindy, Chennai 600032, Tamil Nadu, India <br />
                  Ph: +91 72008 73833
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h2>
            <ul className="space-y-3 text-lg">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h2>
            <div className="space-y-4 text-lg">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@visaiengineering.com"
                  className="hover:text-yellow-400 transition"
                >
                  info@visaiengineering.com
                </a>
              </p>
              <div>
                <h3 className="text-lg font-semibold">Project Manager / Director</h3>
                <a
                  href="mailto:kamal@visaiengineering.com"
                  className="text-yellow-400 hover:underline"
                >
                  kamal.govindhan@visaiengineering.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Project Manager</h3>
                <a
                  href="mailto:devaraj@visai.com"
                  className="text-yellow-400 hover:underline"
                >
                  devaraj.perumal@visaiengineering.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-lg mt-10 border-t border-gray-600 pt-6">
          &copy; {new Date().getFullYear()} Visai Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
