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
            <li className="border hover:border-b border-black flex cursor-pointer pt-11 me-8">
              <GoHome className="me-1.5 mt-1.5" />
              <Link to="/home">
                Home
              </Link>
            </li>
            <li className="flex pt-11 mx-8 cursor-pointer">
              <PiCallBell className="me-2 mt-1.5" />
              <Link to="/reservation">
                Reservation
              </Link>
            </li>
            <li className="flex pt-11 mx-8 cursor-pointer">
              <TbDeviceIpadSearch className="me-1.5 mt-1.5" />
              <Link to="/menu">
                Menu
              </Link>
            </li>
            <li className="flex pt-11 mx-8 cursor-pointer">
              <BsInfoCircle className="me-1.5 mt-1.5" />
              <Link to="/about">
                About
              </Link>
            </li>
            <li className="flex pt-11 ms-8 cursor-pointer">
              <SlSpeech className="me-1.5 mt-2" />
              <Link to="/customer_reviews">
                Customer Reviews
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    )
  }