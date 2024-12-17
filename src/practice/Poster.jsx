import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h3>지금 뜨는 콘텐츠</h3>
      <ul className="wrap">
        {imgs.map((img, i) => {
          return (
            <li key={i}>
              <img src={img} />
              <p>Joker</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Poster;

const img1 =
  "https://cdn.pixabay.com/photo/2024/04/16/07/50/ai-generated-8699387_640.png";

const img2 =
  "https://cdn.pixabay.com/photo/2016/08/19/14/10/joker-1605336_640.jpg";

const img3 =
  "https://cdn.pixabay.com/photo/2024/04/02/05/00/ai-generated-8670035_640.png";

const imgs = [img1, img2, img3];
