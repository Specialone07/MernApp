// Navbar.js
import React from "react";
import logo from "./logo.png";
import { FaTiktok, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <nav className="bg-white-50 h-20 px-10">
      <div className="container mx-auto w-[1440px] flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" className="h-10 w-16" />
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link to="/country" className="text-black flex items-center">
            Country
          </Link>
          <Link to="/" className="text-black flex items-center">
            New
          </Link>
          <Link to="/club" className="text-black flex items-center">
            Club
          </Link>
          {/* <Link to="/contact" className="text-black flex items-center">
            Contact Us
          </Link> */}
        </div>

        <div className="flex space-x-5">
          <Link
            to="/cart"
            className="text-black flex items-center hover:bg-gray-200 rounded-full p-2"
          >
            <FaShoppingCart className="mr-2" />
            <span className="bg-red-500 rounded-full px-2 text-white text-xs">
              1 {/* Number of items in the cart */}
            </span>
          </Link>

          {isUserSignedIn ? (
            <>
              <Link to='/account'><li>Account</li></Link>
              <li><button onClick={handleSignOut}>Sign Out</button></li>
            </>
          ) : (
            <>
              <div className="flex space-x-5">
                <Link
                  to="/login"
                  className="text-black text-2xl flex items-center hover:bg-gray-200"
                >
                  <HiOutlineUserCircle />
                </Link>
              </div>
              <div className="flex space-x-5">
                <Link
                  to="/signup"
                  className="text-black text-1xl flex items-center hover:bg-gray-200"
                >
                  Signup
                </Link>
              </div>
            </>
          )}

          <Link to="/tiktok" className="text-black flex items-center">
            <FaTiktok className="mr-2" />
          </Link>
          <a href="https://www.instagram.com/pastpitch._/" target="_blank" rel="noopener noreferrer" className="text-black flex items-center">
            <FaInstagram className="mr-2" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
