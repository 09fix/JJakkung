import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home.jsx";
import Jjakkung from "./components/jjakkung/Jjakkung";
import Schedule from "./components/screens/Schedule";
import OtherSchedule from "./components/screens/OtherSchedule";
import WeddingInfo from "./components/screens/WeddingInfo";
import DatingInfo from "./components/screens/DatingInfo";
import Community from "./components/screens/Community";
import Login from "./components/screens/Login";

import MainMenu from "./components/menu/MainMenu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <MainMenu />
      <div className="screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jjakkung" element={<Jjakkung />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/other-schedule" element={<OtherSchedule />} />
          <Route path="/wedding-info" element={<WeddingInfo />} />
          <Route path="/dating-info" element={<DatingInfo />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
