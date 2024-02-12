import React, { useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const hideNavbar = () => {
    setShowNavbar(false);
  };
  return (
    <div className="bg-[#121212] text-white flex justify-center">
      <div className="w-[84%] lg:w-[85%] xl:w-4/5 2xl:w-[75%]">
        <BrowserRouter>
          <Navbar handleNavbar={handleNavbar} showNavbar={showNavbar} />
          <div className="flex justify-center md:hidden">
            {showNavbar && (
              <div className="w-[100%] bg-[#121212] h-52 left-0 flex justify-center absolute">
                <ul className="" onClick={hideNavbar}>
                  <Link to="/">
                    <li className="py-1">Home</li>
                  </Link>
                  <Link to="/about">
                    <li className="py-1">About</li>
                  </Link>
                  <Link to="/services">
                    <li className="py-1">Services</li>
                  </Link>
                  <Link to="/contact">
                    <li className="py-1">Contact</li>
                  </Link>
                  <Link to="/register">
                    <li className="py-1">Register</li>
                  </Link>
                  <Link to="/login">
                    <li className="py-1">Login</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div onClick={hideNavbar}>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
