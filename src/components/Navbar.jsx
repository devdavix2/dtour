
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 px-10 lg:mx-4 lg:mt-4 lg:rounded-md relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <h1>Dtour</h1>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Home</a>
            <a href="#features" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Features</a>
            <a href="#destinations" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Destinations</a>
            <a href="#about" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">About</a>
            <a href="#contact" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Contact</a>
          </div>

          <div
            className={`md:hidden fixed top-0 right-0 h-full bg-gray-900 p-4 ${
              isOpen ? "w-full" : "w-3/4"
            } rounded-tl-lg rounded-bl-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform z-50`}
          >
            <div className="flex flex-col space-y-4">
              <button
                className="text-white absolute top-4 right-4 focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX />
              </button>
              <a href="#home" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Home</a>
              <a href="#features" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Features</a>
              <a href="#destinations" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Destinations</a>
              <a href="#about" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">About</a>
              <a href="#contact" className="hover:text-brightColor transition-all cursor-pointer text-white py-2 px-4">Contact</a>
            </div>
          </div>

          {isOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black opacity-50"
              onClick={toggleMenu}
              style={{ zIndex: 40 }}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
