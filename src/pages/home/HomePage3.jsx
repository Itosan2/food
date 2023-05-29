import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import imgSoup7 from "../../assets/soup7.jpg";
import Rocket from "../../assets/rocket2.png";
import "../../css/home.css";
import { forwardRef } from "react";

const HomePage3 = () => {
  const { ref: myRef, inView: elemVisible, entry } = useInView();
  const { ref: rocketRef, inView: rocketVisible } = useInView();

  return (
    <div className="home-page3-container" id="test">
      <div className="page3-top-side" ref={rocketRef}>
        <p>
          Silkie Chicken Soup [乌鸡汤]. Boost immunity and maintain one’s
          wellness.
        </p>
        <div className="page3-img-wrapper">
          <img src={imgSoup7} alt="" />
        </div>
      </div>
      <div className="page3-bottom-side">
        <h2>
          Yin Yang concept of <span>Chinese Soup</span> : Creating balance and
          promoting health.
        </h2>
        <p ref={rocketRef}>
          Soup is the integral part of Chinese cuisine known for their diverse
          flavors, rich textures, and health benefits. Characteristics of
          Chinese soup is the emphasis on balancing flavors and achieving
          harmony in every spoonful.
        </p>
      </div>
      <div>
        <img
          src={Rocket}
          alt=""
          style={{ width: "40px" }}
          className={`rocket ${rocketVisible ? "animateRocket" : ""}`}
        />
      </div>
    </div>
  );
};

export default HomePage3;
