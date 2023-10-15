import React from 'react';
import { FaOpencart } from "react-icons/fa";

import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full justify-between">
        {/* !logo section */}
        <div className="flex items-center  gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-gray-600 text-2xl font-bold">Food</p>
        </div>

        {/* Right side container */}
        <div className="flex items-center gap-6">
          {/* !!list section */}
          <ul className="flex items-center gap-8">
            <li className="font-medium text-gray-400 hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="font-medium text-gray-400 hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="font-medium text-gray-400 hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="font-medium text-gray-400 hover:text-gray-700 duration-100 transition-all ease-in-out cursor-pointer">Service</li>
          </ul>

          {/* !cart section */}
          <div className="relative flex items-center justify-center">
            <FaOpencart className="text-3xl cursor-pointer text-blue-800" />
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full">
              <p className="text-xs font-bold text-red-500 flex items-center justify-center">3</p>
            </div>
          </div>

          {/* Avatar */}
          <img src={Avatar} alt="Profile" className="w-8 min-w-[35px] h-8 min-h-[35px] shadow-xl rounded-full" />
        </div>
      </div>

      {/* Mobile */}
      <div className=""></div>
    </header>
  )
}

export default Header;