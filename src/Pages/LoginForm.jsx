import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <form
        className="w-[450px] min-h-[400px] rounded-lg shadow-lg p-8 bg-gradient-to-b from-[#E3FDF5] to-[#FFE6FA]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center space-y-4">
          <header className="text-center">
            <h2 className="text-3xl font-serif text-gray-800">Log In</h2>
            <p className="text-sm text-gray-600">
              Enter your credentials to access your account
            </p>
          </header>
          <div className="flex flex-col space-y-4 w-full">
            <div className="relative flex items-center">
              <span className="absolute left-0 pl-3">
                <i className="fa fa-envelope text-gray-500"></i>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full pl-10 py-3 text-sm text-gray-700 bg-white rounded-md outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 text-sm font-semibold text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Log In
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/SignupForm" className="text-indigo-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
