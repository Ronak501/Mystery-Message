"use client";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="h-10 w-20 text-xl font-bold text-gray-800 aspect-w-3/4 aspect-h-3/4">
                <img src="/photos/jpg.jpg" alt="Logo" />
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className="text-gray-700 hover:text-[#1fd43a]">
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-[#1fd43a]"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/resources"
                className="text-gray-700 hover:text-[#1fd43a]"
              >
                RESOURCES
              </NavLink>
              <NavLink
                to="/fund"
                className="text-gray-700 hover:text-[#1fd43a]"
              >
                FUND DETAILS
              </NavLink>
              <NavLink
                to="/team"
                className="text-gray-700 hover:text-[#1fd43a]"
              >
                TEAM
              </NavLink>
              <NavLink
                to="/smeexchange"
                className="text-gray-700 hover:text-[#1fd43a]"
              >
                SME EXCHANGE
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-[#1fd43a]"
              >
                CONTACT
              </NavLink>
            </div>
            <button
              onClick={() => (window.location.href = "/signin")}
              className="bg-[#1fd43a] px-4 py-2 rounded-r-md hover:bg-[#04be20] transition-colors"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
