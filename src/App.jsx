import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/SignupForm";
import EventDetails from "./Pages/EventDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Login and Signup Pages */}
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />

          {/* Event Details Page */}
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
