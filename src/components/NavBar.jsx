import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AppContext } from "../App";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { first, setfirst } = useContext(AppContext);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1200px] px-4 mx-auto text-white">
      <h1 className="w-full font-bold text-[#00df9a]">Reackjt. : {first}</h1>
      <ul className="hidden md:flex">
        <li className="p-2 font-semibold">Home1</li>
        <li className="p-2 font-semibold">Home2</li>
        <li className="p-2 font-semibold">Home</li>
        <li className="p-2 font-semibold">Home3</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div
        className={
          !nav
            ? "block md:hidden fixed top-0 left-[-300%] p-1 w-[60%] border-r h-full border-r-gray-700 bg-[#000300] ease-in-out  duration-700 "
            : "block md:hidden fixed top-0 left-0 p-1 w-[60%] border-r h-full border-r-gray-700 bg-[#000300] ease-out  duration-700"
        }
      >
        <h1 className="text-[#00df9a] font-bold text-3xl m-3">React.</h1>
        <ul className="p-4 uppercase">
          <li className="p-3 font-semibold  border-b border-b-gray-600">
            Home1
          </li>
          <li className="p-3 font-semibold  border-b border-b-gray-600">
            Home2
          </li>
          <li className="p-3 font-semibold  border-b border-b-gray-600">
            Home
          </li>
          <li className="p-3 font-semibold ">Home3</li>
        </ul>
      </div>
    </nav>
  );
};
