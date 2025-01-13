import React from "react";
import {DropdownMenuCheckboxes} from "./components/DropDown";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <header className="fixed z-20 w-screen m-auto"  >
        <nav className="container p-3">
          <ul className="flex justify-evenly items-center bg-white text-tangled w-full md:text-3xl text-xs  ">
          <li className=" hover:text-white transition-all duration-500 ease-in cursor-pointer ">
              <img src="https://res.cloudinary.com/dhh9j0ion/image/upload/v1736771138/8f6330c95a05dfb8b0ee914486116afc-removebg-preview_xdzgte.png" alt="logo" className="w-20" />
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer ">
              Home
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer  ">
              <DropdownMenuCheckboxes className='active:border-none focus:border-none'  />
            </li>
            <li className="hover:bg-tangled-hover  hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer">
              Disney Channel
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer">
              Disney Princess
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer">
              About Us
            </li>
          </ul>
        </nav>
        <Carousel />
      </header>
      
    </div>
  );
}
