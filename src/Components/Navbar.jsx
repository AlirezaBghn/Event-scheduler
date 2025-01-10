import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [fullName, setFullName] = useState("Event Scheduler");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.fullName) {
      setFullName(storedUser.fullName);
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-200 mt-1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <Link to={"/"}>
                <span className="font-bold">{fullName}</span>
              </Link>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to={"/"} className="py-5 px-3 text-black hover:text-gray-700">
              Home
            </Link>
            <Link
              to={"/profile"}
              className="py-5 px-3 text-black hover:text-gray-700"
            >
              Profile
            </Link>
            <Link
              to={"/LoginForm"}
              className="py-5 px-3 text-black hover:text-gray-700"
            >
              Login
            </Link>
            <Link
              to={"/SignupForm"}
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-black hover:text-gray-700 rounded transition duration-300"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 py-2">
              <Link
                to={"/"}
                className="py-2 px-4 text-black hover:text-gray-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
              {isLoggedIn && (
                <Link
                  to={"/profile"}
                  className="py-2 px-4 text-black hover:text-gray-700"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
              )}
              <Link
                to={"/LoginForm"}
                className="py-2 px-4 text-black hover:text-gray-700"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to={"/SignupForm"}
                className="py-2 px-4 text-black hover:text-gray-700"
                onClick={toggleMenu}
              >
                Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
