import React from "react";
import Darkmode from "./DarkMode";

function navbar() {
  return (
    <div className="relative">
      <ul className="p-0 m-0 overflow-hidden fixed z-10 top-0 left-0 right-0 bg-[#353535] shadow-lg shadow-indigo-500/40 flex justify-between items-center text-center  text-white">
        <li className="font-normal text-xl flex ml-2">Fariz Maulana</li>
        <li className="flex">
          <a
            href="#"
            className="block text-white text-center px-5 py-5 no-underline text-base mr-[-25px]"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white text-center px-5 py-5 no-underline text-base"
          >
            <Darkmode />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
