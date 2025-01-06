import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <div className="w-[450px] min-h-[500px] rounded-lg shadow-lg p-8 bg-gradient-to-b from-[#E3FDF5] to-[#FFE6FA]">
        <div className="flex flex-col items-center space-y-4">
          <header className="text-center">
            <h2 className="text-3xl font-serif text-gray-800">
              Welcome to Event Scheduler
            </h2>
            <p className="text-sm text-gray-600">
              Manage your events efficiently and effortlessly
            </p>
          </header>
          <div className="flex flex-col space-y-4 w-full">
            <button className="w-full py-3 text-sm font-semibold text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300">
              Get Started
            </button>
            <button className="w-full py-3 text-sm font-semibold text-gray-800 bg-yellow-400 rounded-md shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
