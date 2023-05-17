import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="relative">
        <header className="fixed h-[50px] w-full bg-white z-20 border-b-2">
          <div className="w-36 absolute top-[50%] translate-y-[-50%] left-[20vw] max-sm:left-[5vw]">
            <a className="flex flex-col" href="https://www.instagram.com/strap_m_/" target="_blank">
              <div className="font-bold">
                <FaCameraRetro className="w-8 h-6 inline-block" />
                strap_m_
              </div>
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
