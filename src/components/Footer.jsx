import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-slate-950 text-white sm:m-0  md:m-0  lg:m-10  rounded-md">
      <div className="container sm:m-5 p-5  lg:m-10 pt-5 flex flex-row flex-wrap">
       
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
          <h2 className="text-lg font-bold mb-4">Dtours</h2>
          <p className="text-sm">Crafting unforgettable adventures, your gateway to unparalleled travel experiences</p>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2 ">
          <h2 className="text-lg font-bold mb-4">Site Links</h2>
          <ul className="text-sm">
            <li className='text-sm hover:text-brightColor transition-all cursor-pointe'>Home</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe' >About</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe' >Contact</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe' >Destination</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe' >Features</li>

          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2 ">
          <h2 className="text-lg font-bold mb-4">Connect with Us </h2>
          <ul className="text-sm">
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe'>Facebook</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe'>Twitter</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe'>Instagram</li>
            <li  className='text-sm hover:text-brightColor transition-all cursor-pointe'>LinkedIn</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-sm">123 Devdavix Street</p>
          <p className="text-sm">info@dtours.com</p>
        </div>
      </div>


      <div className="text-center mt-4 p-4">
      <p className="text-sm">&copy; 2023 Dtours. All rights reserved. Designed by Devdavix</p>
      </div>
    </footer>
  );
};

export default Footer;
