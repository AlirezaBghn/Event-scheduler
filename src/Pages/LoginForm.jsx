import React, { useState } from "react";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <form className="w-[450px] min-h-[500px] rounded-lg shadow-lg p-8 bg-gradient-to-b from-[#E3FDF5] to-[#FFE6FA]">
        <div className="flex flex-col items-center space-y-4">
          <header className="text-center">
            <h2 className="text-3xl font-serif text-gray-800">Log In</h2>
            <p className="text-sm text-gray-600">
              Login here using your username and password
            </p>
          </header>
          <div className="flex flex-col space-y-4 w-full">
            <div className="relative flex items-center">
              <span className="absolute left-0 pl-3">
                <i className="fa fa-user-circle text-gray-500"></i>
              </span>
              <input
                type="text"
                placeholder="@UserName"
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
                id="pwd"
                name="password"
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
              Log In
            </button>
          </div>

          <div className="flex justify-between w-full mt-4">
            <button className="text-sm text-gray-500 hover:underline">
              Forgot Password
            </button>
            <button className="flex items-center px-4 py-2 text-sm text-white bg-green-400 rounded-md hover:bg-green-500">
              Sign Up
              <i className="ml-2 fa fa-user-plus"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
