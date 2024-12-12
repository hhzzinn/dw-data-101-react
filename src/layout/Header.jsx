import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { FcGlobe } from "react-icons/fc";

const Header = () => {
  return (
    <header>
      <button className="Nlogo">
        <SiNetflix />
      </button>

      <ul>
        <li>
          <button id="lang">
            <FcGlobe /> 언어
          </button>
        </li>
        <li>
          <button id="login">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
