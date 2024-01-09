import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { SiTistory } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import "./sns.css";

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <section className="relative h-[80vh]">
          <img src="img/cat.jpg" className="opacity-50 w-[100vw] h-[100%] object-cover" alt="고양이 배경" />
          <p className="absolute top-[50%] left-[50%] -translate-x-[50%] text-[#4a4a4a] text-2xl">Welcome my home :)</p>
        </section>
      </div>

      <div className="fixed bottom-[10%] right-10 p-4 z-10">
        <button className={`hamburgerButton hover:text-white hover:bg-gray-700`} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul className={`my-5 inline list-none wrapper fixed bottom-[17%] right-14 fade-in ${isMenuOpen ? "active" : ""}`}>
          <a href="https://github.com/dydgh142" target="_blank">
            <li className={`hamburgerButton github my-4`}>
              <span className="tool tooltip">Github</span>
              <BsGithub />
            </li>
          </a>
          <a href="https://strap.tistory.com/" target="_blank">
            <li className={`hamburgerButton tistory my-4`}>
              <span className="tool tooltip">Tistory</span>
              <SiTistory />
            </li>
          </a>
          <a href="https://www.instagram.com/strap_m_/" target="_blank">
            <li className={`hamburgerButton instagram my-4`}>
              <span className="tool tooltip">Instagram</span>
              <FiInstagram />
            </li>
          </a>
          <CopyToClipboard text="dydgh142@naver.com" onCopy={() => alert("클립보드에 복사되었습니다.")}>
            <li className={`hamburgerButton email my-4`}>
              <span className="tool tooltip">Email</span>
              <button>
                <GrMail />
              </button>
            </li>
          </CopyToClipboard>
        </ul>
      </div>
    </>
  );
};

export default Main;
