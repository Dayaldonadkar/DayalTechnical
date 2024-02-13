import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = ({ showNavbar, handleNavbar, hideNavbar }) => {
  return (
    <div className="text-[#5358EB] py-3 sticky top-0 z-10 bg-[#121212]">
      <div className="w-[100%]">
        <div className="flex justify-between">
          <Link to="/">
            <h1 className="text-xl hover:cursor-pointer font-medium">
              Dayal Tech
            </h1>
          </Link>
          <div onClick={handleNavbar} className="md:hidden">
            <MenuIcon />
          </div>
          <div className="hidden md:block">
            <ul className="space-y-2 flex space-x-7 md:space-y-0">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/register">
                <li>Register</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={`flex justify-center md:hidden transition-opacity duration-500 ${
            showNavbar
              ? "opacity-100"
              : "opacity-0 duration-700 pointer-events-none"
          }`}
        >
          <div className="w-[100%] bg-[#121212] h-52 left-0 flex justify-center absolute top-12">
            <ul className="">
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
        </div>

        {/* <div className="flex justify-center md:hidden">
          {showNavbar && (
            <div className="w-[100%] bg-[#121212] h-52 left-0 flex justify-center absolute">
              <ul className="space-y-2 ">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Services</li>
                <li>Login</li>
              </ul>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
