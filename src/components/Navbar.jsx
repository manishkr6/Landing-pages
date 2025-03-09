import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-3xl font-bold text-blue-400">SeeCodes</h1>
        <div className="space-x-6">
        <Link to="/login" className="hover:text-blue-400 transition text-[19px]">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 px-4 py-2 rounded-md text-[19px] hover:bg-blue-600 transition"
        >
          Sign Up
        </Link>
      </div>
      </nav>
  );
};

export default Navbar;

      