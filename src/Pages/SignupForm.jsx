import React, { useState } from "react";

const SignupForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <form className="w-[450px] min-h-[600px] rounded-lg shadow-lg p-8 bg-gradient-to-b from-[#E3FDF5] to-[#FFE6FA]">
        <div className="flex flex-col items-center space-y-4">
          <header className="text-center">
            <h2 className="text-3xl font-serif text-gray-800">Sign Up</h2>
            <p className="text-sm text-gray-600">
              Create your account by filling the form below
            </p>
          </header>
          <div className="flex flex-col space-y-4 w-full">
            <div className="relative flex items-center">
              <span className="absolute left-0 pl-3">
                <i className="fa fa-user-circle text-gray-500"></i>
              </span>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full pl-10 py-3 text-sm text-gray-700 bg-white rounded-md outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 pl-3">
                <i className="fa fa-envelope text-gray-500"></i>
              </span>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 py-3 text-sm text-gray-700 bg-white rounded-md outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 pl-3">
                <i className="fa fa-key text-gray-500"></i>
              </span>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full pl-10 py-3 text-sm text-gray-700 bg-white rounded-md outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <span
                onClick={togglePassword}
                className="absolute right-0 pr-3 cursor-pointer text-gray-500"
              >
                <i
                  className={`fa ${passwordShown ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-sm font-semibold text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/LoginForm" className="text-indigo-500 hover:underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
