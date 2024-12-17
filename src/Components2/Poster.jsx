import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h2>지금 뜨는 콘텐츠</h2>
      <div className="wrap">
        {imgs.map((img, i) => {
          // 배열은 map 정육각형 모형은 함수. src는 변수 아무거나 넣어도 됨. i는 순서
          return (
            <div key={i}>
              <img src={img} alt="img" />
              <p>영화제목</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Poster;

const PosterItem = () => {
  return (
    <div>
      <img src={""} alt="img" />
      <p>영화제목</p>
    </div>
  );
};

const img =
  "https://cdn.pixabay.com/photo/2023/06/15/17/07/sun-8066051_640.jpg";
const img2 =
  "https://cdn.pixabay.com/photo/2023/03/27/19/18/herons-7881512_640.png";
const img3 =
  "https://cdn.pixabay.com/photo/2023/03/27/19/18/herons-7881512_640.png";

const imgs = [img, img2, img3];
