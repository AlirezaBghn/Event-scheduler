import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  // Mock API data for event details
  useEffect(() => {
    const fetchEventDetails = async () => {
      const mockEvents = {
        1: {
          name: "React Workshop",
          description: "Learn the basics of React with hands-on projects.",
          date: "2025-01-15",
          location: "Online",
        },
        2: {
          name: "JavaScript Conference",
          description: "Explore the latest trends in JavaScript development.",
          date: "2025-02-10",
          location: "San Francisco, CA",
        },
        3: {
          name: "CSS Mastery",
          description: "Master advanced CSS techniques for modern web design.",
          date: "2025-03-05",
          location: "New York, NY",
        },
      };

      setEvent(mockEvents[id]);
    };

    fetchEventDetails();
  }, [id]);

  if (!event) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Loading event details...
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <div className="w-full max-w-xl rounded-lg shadow-lg p-8 bg-gradient-to-b from-[#E3FDF5] to-[#FFE6FA]">
        <button
          onClick={() => navigate(-1)}
          className="text-yellow-500 hover:underline mb-6"
        >
          ← Back to Events
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{event.name}</h1>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <p className="text-gray-600 mb-2">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
