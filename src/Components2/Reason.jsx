import React from "react";
import "./Reason.css";
import { FaStar, FaHandshake, FaHeart, FaTabletAlt } from "react-icons/fa";
// 같은 폴더의 이미지들은 한 {}안에 ,로 연속해서 넣을 수 있다.
// 2번 이상 반복 => 자바스크립트
const reasons = [
  { desc: "취향에 딱 맞는 이야기", Icon: FaStar },
  { desc: "언제든지 해지 또는 전환 가능한 멤버십", Icon: FaHandshake },
  { desc: "아이들만을 위한 공간", Icon: FaHeart },
  { desc: "스마트폰, 태블릿, 노트북, TV에서 이용 가능", Icon: FaTabletAlt },
];

const Reason = () => {
  return (
    <div className="reason">
      <h2>가입해야 하는 또 다른 이유</h2>
      {/* <ul>
        <li>
          <div>
            <p></p>
            <FaStar />
          </div>
        </li>
        <li>
          <div>
            <p>언제든지 해지 또는 전환 가능한 멤버십</p>
            <FaHandshake />
          </div>
        </li>
        <li>
          <div>
            <p>아이들만을 위한 공간</p>
            <FaHeart />
          </div>
        </li>
        <li>
          <div>
            <p>스마트폰, 태블릿, 노트북, TV에서 이용 가능</p>
            <FaTabletAlt />
          </div>
        </li>
      </ul> */}
      <ul>
        {reasons.map((r, i) => {
          return (
            <li key={i}>
              <div>
                <p>{r.desc}</p>
                <r.Icon />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reason;
