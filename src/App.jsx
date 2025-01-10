import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/SignupForm";
import Profile from "./Pages/Profile";
import EventDetails from "./Pages/EventDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
