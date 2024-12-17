import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import Langbutton from "./Langbutton";

const Header = () => {
  return (
    <header>
      <button className="hb">
        <SiNetflix />
      </button>
      <ul>
        <li>
          <Langbutton />
        </li>
        <li>
          <button className="login">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
