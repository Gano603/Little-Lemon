import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { GoHome } from "react-icons/go";
import { PiCallBell } from "react-icons/pi";
import { TbDeviceIpadSearch } from "react-icons/tb";
import { SlSpeech } from "react-icons/sl";
import { BsInfoCircle } from "react-icons/bs";


export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between text-xl text-black border-b border-black">
        <li className="py-5 ms-40">
          <img src="src\assets\imgs\logo_yellow.png" alt="Logo" width="270" height="270" />
        </li>
        <div className="flex me-40">
          <li className="flex cursor-pointer pt-11 me-8">
            <GoHome className="me-1.5 mt-1.5" />
            <Link to="/home">
              <div className="hover:border-b border-black ">
                Home
              </div>
            </Link>
          </li>
          <li className="flex pt-11 mx-8 cursor-pointer">
            <PiCallBell className="me-2 mt-1.5" />
            <Link to="/reservation">
              <div className="hover:border-b border-black ">
                Reservation
              </div>
            </Link>
          </li>
          <li className="flex pt-11 mx-8 cursor-pointer">
            <TbDeviceIpadSearch className="me-1.5 mt-1.5" />
            <Link to="/menu">
              <div className="hover:border-b border-black ">
                Menu
              </div>
            </Link>
          </li>
          <li className="flex pt-11 mx-8 cursor-pointer">
            <BsInfoCircle className="me-1.5 mt-1.5" />
            <Link to="/about">
              <div className="hover:border-b border-black ">
                About
              </div>
            </Link>
          </li>
          <li className="flex pt-11 ms-8 cursor-pointer">
            <SlSpeech className="me-1.5 mt-2" />
            <Link to="/customer_reviews">
              <div className="hover:border-b border-black ">
                Customer Reviews
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}