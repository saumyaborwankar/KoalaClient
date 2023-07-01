import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {/* <Routes> */}
      <Navbar />
      {/* <Routes> */}
      {/* <Route path="/" element={<Homepage />} /> */}
      {/* <Route path="/create" element={<Create />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/message/:id" element={<SendMessage />} /> */}
      {/* <Route path="/aboutme" element={<AboutMe />} /> */}
      {/* <Route path="/disclaimer" element={<Disclaimer />} /> */}
      {/* </Routes> */}
      <Homepage />
      {/* </Routes> */}
    </div>
  );
}

export default App;
