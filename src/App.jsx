import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Jjakkung from "./components/screens/jjakkung/Jjakkung.jsx";
import Description from "./components/screens/description/Description.jsx";
import Schedule from "./components/screens/schedule/Schedule.jsx";
import OtherSchedule from "./components/screens/otherSchedule/OtherSchedule.jsx";
import WeddingInfo from "./components/screens/weddingInfo/WeddingInfo.jsx";
import DatingInfo from "./components/screens/datingInfo/DatingInfo.jsx";
import Community from "./components/screens/community/Community.jsx";
import Login from "./components/screens/login/Login.jsx";

import MainMenu from "./components/menu/MainMenu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <MainMenu />
      <div className="screen">
        <Routes>
          <Route path="/" element={<Jjakkung />} />
          <Route path="/home" element={<Jjakkung />} />
          <Route path="/description" element={<Description />} />
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
