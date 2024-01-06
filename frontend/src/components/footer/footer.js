// import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const Footer = () => {
  return (
    <>
      <div className=" w-[1440px] flex flex-col gap-10 px-28 py-10 text-slate-700 ">
        <div className="flex gap-28 items-start justify-between bg-white-800">
        <div className="w-[408px] flex flex-col gap-4">
          <div>
            <img className="h-20 w-40" src={logo} alt="" />
          </div>
          <div>
            <p className="leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
              molestie. Volutpat quis egestas porttitor turpis sit in. Lorem
              nunc nullam morbi urna amet suspendisse nullam ac vivamus.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-[Black] font-bold text-2xl">Past Pitch</h1>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                {/* <Link to="about">About</Link> */}
              </li>
              <li>
                <Link to="country">Country</Link>
              </li>
              <li>
                <Link to="club">Club</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className="text-[Black] font-bold text-2xl">Legals</h1>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="about">Terms & Condition</Link>
              </li>
              <li>
                <Link to="menu">Privacy Policy</Link>
              </li>
              <li>
                <Link to="service">Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[Black] font-bold text-2xl">Follow Us</h1>
          <div className="flex flex-col gap-4">
            <ul className="flex gap-4">
              <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                <Link>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                <Link>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
            <ul className="flex gap-4">
              <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                <Link>
                  <FaYoutube />
                </Link>
              </li>
              <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                <Link>
                  <FaInstagram />
                </Link>
              </li>
              <li className="h-10 w-10 bg-gray-400 flex items-center justify-center text-white rounded-full text-lg">
                <Link>
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <hr />
        <div className="flex items-center justify-center">
          <h1>
          Copyright ©️2023 Past Pitch Ltd. All Rights Reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;