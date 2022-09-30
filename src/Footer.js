import React from "react";
import { FiInstagram, FiFacebook, FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <div>
      <div className="text-xl text-white text-center flex items-center justify-center">
        <p>Designer By Farizmaulana 2022</p>
      </div>
      <div className="text-xl text-white text-center flex items-center justify-center">
        <ul className="flex">
          <li>
            <FiInstagram />
          </li>
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiGithub />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
{
  /* <div className="insert-0 w-full mt-4 bg-[#353535] text-white text-center p-3.5">
      Copyright &copy;Farizmaulana 2022
    </div> */
}
