import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  // Mock API data
  useEffect(() => {
    const fetchEvents = async () => {
      const mockEvents = [
        {
          id: 1,
          name: "React Workshop",
          description: "Learn the basics of React with hands-on projects.",
        },
        {
          id: 2,
          name: "JavaScript Conference",
          description: "Explore the latest trends in JavaScript development.",
        },
        {
          id: 3,
          name: "CSS Mastery",
          description: "Master advanced CSS techniques for modern web design.",
        },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#a8edea] to-[#fed6e3]">
      <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 bg-gradient-to-b from-[#E3FDF5] to-[#FFE6FA]">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-serif text-gray-800">Upcoming Events</h2>
          <p className="text-sm text-gray-600">
            Browse our events and find something exciting for you!
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {event.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              <Link
                to={`/event/${event.id}`}
                className="text-sm text-yellow-500 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
