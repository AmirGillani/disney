import React from "react";
import { DropdownMenuCheckboxes } from "./components/DropDown";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <header className=" z-20 top-0 w-screen m-auto shadow-md shadow-gray-400 fixed bg-white">
        <nav className="container p-3 w-full">
          <ul className="flex justify-evenly items-center bg-white text-tangled w-full md:text-xl text-xs  ">
            <li className=" hover:text-white transition-all duration-500 ease-in cursor-pointer ">
              <img
                src="https://res.cloudinary.com/dhh9j0ion/image/upload/v1736771138/8f6330c95a05dfb8b0ee914486116afc-removebg-preview_xdzgte.png"
                alt="logo"
                className="w-10"
              />
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer ">
              Home
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer ">
              <DropdownMenuCheckboxes
                button={"Disney Channel"}
                links={[
                  "Hannah Montana",
                  "Suite Life Of Zack And Cody",
                  "Wizards Of Waverly Place",
                  "That's So Raven",
                ]}
              />
            </li>

            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer ">
              <DropdownMenuCheckboxes
                button={"Disney Princess"}
                links={["Tangled", "Frozen", "Little Mermaid", "Cinderella"]}
              />
            </li>
            <li className="hover:bg-tangled-hover hover:shadow-lg hover:shadow-gray-500 hover:p-3 hover:text-white transition-all duration-500 ease-in cursor-pointer">
              About Us
            </li>
          </ul>
        </nav>
      </header>
      <Carousel />
    </>
  );
}
