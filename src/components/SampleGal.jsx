import React from "react";
import "./SampleGal.css";

const SampleGal = () => {
  return (
    <div id="gal">
      <div id="wrap">
        <img src={img} />
        <button className="chev l">{"<"}</button>
        <button className="chev r">{">"}</button>
        <div className="txts">
          <h1>Ocean</h1>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default SampleGal;

const img =
  "https://cdn.pixabay.com/photo/2019/08/06/02/16/mountains-4387209_640.jpg";
