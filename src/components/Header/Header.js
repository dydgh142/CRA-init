import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="relative">
        <header className="fixed h-[50px] w-full bg-white z-20 border-b-2">
          <span className="w-36 absolute top-[50%] translate-y-[-50%] left-[20vw] max-sm:left-[5vw]">
            <a className="flex flex-col" href="https://www.instagram.com/strap_m_/" target="_blank">
              <div className="font-bold">
                <FaCameraRetro className="w-8 h-6 inline-block" />
                strap_m_
              </div>
            </a>
          </span>
          <span className="absolute top-[50%] -translate-y-[50%] font-bold">
            <Link to={"/"} type="button" className="mx-10">
              홈
            </Link>
            <Link to={"/yoonho"} type="button">
              소개
            </Link>
          </span>
        </header>
      </div>
    </>
  );
};

export default Header;
