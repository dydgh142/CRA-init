import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="h-[50px] relative border-b-2 mb-10 ">
        <div className="w-36 absolute top-[50%] translate-y-[-50%] left-[20vw] max-sm:left-[5vw]">
          <a className="flex flex-col" href="https://www.instagram.com/strap_m_/" target="_blank">
            <div className="font-bold">
              <FaCameraRetro className="w-8 h-6 inline-block" />
              strap_m_
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
