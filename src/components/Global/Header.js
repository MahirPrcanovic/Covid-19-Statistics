import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-200 w-full h-14 flex sm:justify-between items-center sticky justify-center sm:px-2">
      <h3 className="text-white text-lg hidden sm:block">
        Covid-19 Statistics
      </h3>
      <ul className="text-sm flex gap-2 text-white sm:text-lg sm:gap-3 sm:px-2">
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-300">
          Contact
        </Link>
        <Link to="/login" className="hover:text-blue-300">
          Login
        </Link>
        <Link to="/register" className="hover:text-blue-300">
          Register
        </Link>
      </ul>
    </div>
  );
};

export default Header;
