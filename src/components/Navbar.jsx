import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const backgroundColor = 'bg-white';

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-row justify-between lg:p-5 sm:pt-20 lg:m-5 lg:rounded-xl sm:m-0 px-12 py-5 bg-darkBackground text-white">
        <div className="flex items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h1 className="font-semibold text-xl cursor-pointer"> Dtours </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="destinations"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Destinations
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden lg:flex flex-row items-center gap-4">
          <Link
            to="register"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Register
          </Link>
          <button
                  className="bg-white hover:bg-blue-900 text-gray-900 font-bold py-2 px-4 mt-4 rounded-md"
                
              >
                Login
              </button>
        </div>
        <div className="lg:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenu className="hover:text-brightColor transition-all cursor-pointer" size={25} />
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-medium text-lg text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="destinations"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Destinations
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Contact
        </Link>
        <div className="flex flex-col lg:hidden lg:flex-row items-center gap-8">
          <Link
            to="register"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Register
          </Link>
          <button
                  className="bg-white hover:bg-blue-900 text-gray-900 font-bold py-2 px-4 mt-4 rounded-md"
                
              >
                Login
              </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
