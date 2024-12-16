import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
import LButton from "./LButton";

const Header = () => {
  return (
    <header>
      <button className="hl">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <LButton />
        </li>
        <li>
          <button className="log">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
