import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-50 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 font-semibold">
          <Link to="/Home" className="flex items-center text-blue-500 hover:text-blue-800">
            <i className="fas fa-home mr-2 text-gray-500"></i> Home
          </Link>
          <Link to="/about" className="flex items-center text-blue-500 hover:text-blue-800">
            <i className="fas fa-info-circle mr-2 text-gray-500"></i> About
          </Link>
          <Link to="/contact" className="flex items-center text-blue-500 hover:text-blue-800">
            <i className="fas fa-envelope mr-2 text-gray-500"></i> Contact
          </Link>
          <Link to="/dashboard" className="flex items-center text-blue-500 hover:text-blue-800">
            <i className="fas fa-tachometer-alt mr-2 text-gray-500"></i> Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
