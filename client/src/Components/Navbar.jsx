import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = ({ showNavbar, handleNavbar }) => {
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
