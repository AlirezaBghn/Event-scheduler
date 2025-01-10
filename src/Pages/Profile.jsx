import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleRemove = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    localStorage.setItem("fullName", "Event Scheduler");
    navigate("/LoginForm");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-700">
            No user is logged in.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <div className="w-full sm:max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome, {user.fullName}</h2>
          <p className="text-sm">Here’s your account information</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center">
            <span className="text-gray-500 w-1/3 font-semibold">Name:</span>
            <span className="text-gray-800 w-2/3">{user.fullName}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 w-1/3 font-semibold">Email:</span>
            <span className="text-gray-800 w-2/3">{user.email}</span>
          </div>
        </div>
        <div className="p-6 bg-gray-50 text-center">
          <button
            onClick={handleRemove}
            className="py-2 px-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          >
            Remove Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
