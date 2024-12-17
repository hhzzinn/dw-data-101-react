import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="input">
      <p>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </p>

      <div>
        <input type="email" placeholder="이메일 주소" />
        <button>시작하기 {">"}</button>
      </div>
    </div>
  );
};

export default Input;
