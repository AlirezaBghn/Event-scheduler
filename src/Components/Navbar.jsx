import { Link } from "react-router-dom";
import LoginForm from "../Pages/LoginForm";
const Navbar = () => {
  return (
    <nav className="bg-gray-200 mt-1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo and primary navigation */}
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
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
                  <span className="font-bold">Event scheduler</span>
                </Link>
              </a>
            </div>

            {/* Primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to={"/"}
                className="py-5 px-3 text-black hover:text-gray-700"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="hidden md:flex items-center space-x-1">
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
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
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Pricing
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
