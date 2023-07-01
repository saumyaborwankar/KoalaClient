import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Aboutme from "./components/aboutme/Aboutme";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/message/:id" element={<SendMessage />} /> */}
          <Route path="/aboutme" element={<Aboutme />} />
          {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
