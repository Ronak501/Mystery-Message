"use client";

import { TrendingUp, Phone, Mail, MapPin, ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-[#1fd43a]" />
              <span className="ml-2 text-xl font-bold">Infiply</span>
            </div>
            <p className="text-gray-400">
              Building tomorrow's success stories through strategic investments
              and partnerships.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link
                  to="/resources"
                  className="text-gray-400 hover:text-white"
                >
                  Resources
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/fund" className="text-gray-400 hover:text-white">
                  Fund Details
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link
                  to="/smeexchange"
                  className="text-gray-400 hover:text-white"
                >
                  SME Exchange
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronsRight />
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Graphs & Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Return Profile
                </a>
              </li>
              <li>
                <a
                  href="/smeexchange"
                  className="text-gray-400 hover:text-white"
                >
                  Nifty SME Emerge
                </a>
              </li>
              <li>
                <a
                  href="/smeexchange"
                  className="text-gray-400 hover:text-white"
                >
                  BSE SME IPO Index
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#1fd43a]" />
              <div>
                <p className="text-gray-400 hover:text-white">+91 9892486751</p>
                <p className="text-gray-400 hover:text-white">+91 9727201001</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-y-2">
              <Mail className="h-6 w-6 text-[#1fd43a]" />
              <div>
                <p className="text-gray-400 hover:text-white">
                  bmanish11@gmail.com
                </p>
                <p className="text-gray-400 hover:text-white">
                  Jigneshji2005@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 space-y-2">
              <MapPin className="h-6 w-6 text-[#1fd43a]" />
              <div>
                <p className="text-gray-400 hover:text-white">
                  06, Nathubhai Tower,Udhna
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VentureFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
