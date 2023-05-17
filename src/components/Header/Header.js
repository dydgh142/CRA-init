import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./search.css";

const Header = () => {
  return (
    <header className="fixed h-[50px] w-full bg-white flex flex-nowrap  z-20 border-b-2">
      <div className="absolute left-[10vw] flex top-[50%] translate-y-[-50%] font-bold">
        <a className="flex flex-col" href="https://www.instagram.com/strap_m_/" target="_blank">
          <div className="">
            <FaCameraRetro className="w-8 h-6 inline-block" />
            strap_m_
          </div>
        </a>
        <Link to={"/"} type="button" className="mx-10">
          홈
        </Link>
        <Link to={"/intro"} type="button" className="">
          소개
        </Link>
      </div>
      <div className="absolute right-[10vw] top-[50%] -translate-y-[50%] font-bold">
        <form method="get" action="http://www.google.co.kr/search" target="_blank" className="search-box absolute right-[5%]">
          <input name="q" type="text" placeholder=" " />
          <button type="reset" value={"구글검색"}></button>
        </form>
      </div>
    </header>
  );
};

export default Header;
