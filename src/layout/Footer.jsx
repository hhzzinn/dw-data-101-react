import React from "react";
import "./Footer.css";
import { FcGlobe } from "react-icons/fc";
import Langbutton from "./Langbutton";

const Footer = () => {
  return (
    <footer>
      <p>
        질문이 있으신가요? 문의전화: <a href="">00-308-321-0161 (수신자부담)</a>
      </p>

      <ul>
        <li>
          <a href="">자주 묻는 질문</a>
        </li>
        <li>
          <a href="">고객센터</a>
        </li>
        <li>
          <a href="">계정</a>
        </li>
        <li>
          <a href="">미디어 센터</a>
        </li>
        <li>
          <a href="">투자 정보(IR)</a>
        </li>
        <li>
          <a href="">입사 정보</a>
        </li>
        <li>
          <a href="">넷플릭스 지원 디바이스</a>
        </li>
        <li>
          <a href="">이용 약관</a>
        </li>
        <li>
          <a href="">개인정보 처리방침</a>
        </li>
        <li>
          <a href="">쿠키 설정</a>
        </li>
        <li>
          <a href="">회사 정보</a>
        </li>
        <li>
          <a href="">문의하기</a>
        </li>
        <li>
          <a href="">속도 테스트</a>
        </li>
        <li>
          <a href="">법적 고지</a>
        </li>
        <li>
          <a href="">오직 넷플릭스에서</a>
        </li>
      </ul>

      <Langbutton />

      <p>넷플릭스 대한민국</p>

      <p className="pp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        molestias iusto dolorem nesciunt necessitatibus expedita quas voluptas
        velit, molestiae recusandae, iure facere quidem mollitia unde laudantium
        vel maiores, tempore in?
      </p>
    </footer>
  );
};

export default Footer;
