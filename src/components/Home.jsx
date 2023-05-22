import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import imgHome from "../assets/home.png";
import imgLeave from "../assets/leave.png";
import HomePage1 from "../pages/home/HomePage1";

import "../css/home.css";

export default function Home() {
  // const img1 = import("../assets/img1.jpg");
  return (
    <section className="home-section">
      <HomePage1 />
      {/* <img src={imgHome} alt="" /> */}
      {/* <img src={imgLeave} alt="" /> */}
      {/* <img src={img2} alt="" /> */}
    </section>
  );
}
