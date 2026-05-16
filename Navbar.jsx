import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/");

  };

  return (

    <nav className="w-full flex justify-between items-center px-12 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* LOGO */}
      <div className="font-satisfy text-2xl font-semibold text-[#2b2d42]">

        <Link to="/">
          Verify
          <span className="text-[#5c7cfa]">
            Careers
          </span>
        </Link>

      </div>

      {/* NAV LINKS */}
      <ul className="flex gap-8 items-center text-[16px] font-medium text-gray-700">

        {/* ANALYZE */}
        <li>

          <Link
            to="/analyze"
            className="hover:text-[#5c7cfa] transition duration-300"
          >
            Analyze
          </Link>

        </li>

        {/* DASHBOARD */}
        <li>

          <Link
            to="/dashboard"
            className="hover:text-[#5c7cfa] transition duration-300"
          >
            Dashboard
          </Link>

        </li>

        {/* RESUME */}
        <li>

          <Link
            to="/resume"
            className="hover:text-[#5c7cfa] transition duration-300"
          >
            Resume Analyzer
          </Link>

        </li>

        {/* COMMUNITY */}
        <li>

          <Link
            to="/community"
            className="hover:text-[#5c7cfa] transition duration-300"
          >
            Community Forum
          </Link>

        </li>

        {/* LOGOUT */}
        <li>

          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-sm"
          >
            Logout
          </button>

        </li>

      </ul>

    </nav>

  );
};

export default Navbar;