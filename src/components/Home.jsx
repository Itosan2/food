import React, { useEffect, useRef } from "react";
import img1 from "../assets/img1.png";
import imgHome from "../assets/home.png";
import imgLeave from "../assets/leave.png";
import HomePage1 from "../pages/home/HomePage1";
import HomePage2 from "../pages/home/HomePage2";
import HomePage3 from "../pages/home/HomePage3";

import "../css/home.css";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // const scrollRef = useRef();
  // const { ref: scrollRef, inView: scrollVisible } = useInView();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //   });
  //   observer.observe(scrollRef.current);
  // });

  return (
    <section className="home-section">
      <HomePage2 />
      <HomePage3 />
      <HomePage1 />
      {/* <img src={imgHome} alt="" /> */}
      {/* <img src={imgLeave} alt="" /> */}
      {/* <img src={img2} alt="" /> */}
    </section>
  );
}
