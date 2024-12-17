import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gal">
      <div className="wrap">
        <img src={img} />
        <button className="chev l">{"<"}</button>
        <button className="chev r">{">"}</button>
        <div>Joker</div>
      </div>
    </div>
  );
};

export default Gallery;

const img =
  "https://cdn.pixabay.com/photo/2023/04/17/14/24/ai-generated-7932597_640.jpg";
