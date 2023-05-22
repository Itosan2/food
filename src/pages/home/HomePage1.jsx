import React, { useState } from "react";
import imgSoup1 from "../../assets/soup1.png";
import imgSoup3 from "../../assets/soup3.png";
import imgSoup4 from "../../assets/soup4.png";
import imgSoup5 from "../../assets/soup5.png";
import imgSoup6 from "../../assets/soup6.png";
import imgFish1 from "../../assets/fish1.png";
import imgMeat1 from "../../assets/meat1.png";
import imgMeat2 from "../../assets/meat2.png";
import imgMeat3 from "../../assets/meat3.png";
import imgChili from "../../assets/chili.png";

import "../../css/home.css";

export default function HomePage1() {
  const [activePages, setActivePages] = useState({
    page1: false,
    page2: false,
    page3: false,
  });

  const tabClick = (e) => {
    const { classList } = e.currentTarget;
    const tab1 = classList.contains("tab-1");
    const tab2 = classList.contains("tab-2");
    const tab3 = classList.contains("tab-3");

    if (tab1) {
      setActivePages((prevActivePages) => ({
        page1: !prevActivePages.page1 || activePages.page2 || activePages.page3,
      }));
    }
    if (tab2) {
      setActivePages((prevActivePages) => ({
        page2: !prevActivePages.page2 || activePages.page3,
      }));
    }
    if (tab3) {
      setActivePages((prevActivePages) => ({
        page3: !prevActivePages.page3,
      }));
    }

    // if (activePages.page3) {
    //   setActivePages(() => ({
    //     page1: true,
    //     page2: true,
    //   }));
    // }
    // if (activePages.page2) {
    //   console.log("page 2 true");
    //   setActivePages({ page1: true });
    // }
  };

  return (
    <div className="home-pages">
      <div
        className={`home-page1 ${
          activePages.page1 || activePages.page2 || activePages.page3
            ? "active"
            : ""
        }`}
      >
        <div className="left-side">
          <p>soup</p>
        </div>
        <div className="img-wrapper">
          <img src={imgSoup1} alt="" />
          <img src={imgSoup3} alt="" />
          <img src={imgSoup4} alt="" />
          <img src={imgSoup5} alt="" />
        </div>
        <div className="tab-wrapper tab-1" onClick={tabClick}>
          <div className="tab-item1"></div>
          <div className="tab-item2"></div>
        </div>
      </div>

      <div
        className={`home-page2 ${
          activePages.page2 || activePages.page3 ? "active" : ""
        }`}
      >
        <div className="left-side left-side-page2">
          <p>meat</p>
        </div>
        <div className="img-wrapper">
          <img src={imgFish1} alt="" />
          <img src={imgMeat1} alt="" />
          <img src={imgSoup6} alt="" />
          <img src={imgMeat2} alt="" />
        </div>
        <div className="tab-wrapper tab-2" onClick={tabClick}>
          <div className="tab-item1"></div>
          <div className="tab-item2"></div>
        </div>
      </div>

      <div className={`home-page3 ${activePages.page3 ? "active" : ""}`}>
        <div className="left-side left-side-page3">
          <p>others</p>
        </div>
        <div className="img-wrapper">
          <img src={imgFish1} alt="" />
          <img src={imgChili} alt="" />
          <img src={imgMeat3} alt="" />
        </div>
        <div className="tab-wrapper tab-3" onClick={tabClick}>
          <div className="tab-item1"></div>
          <div className="tab-item2"></div>
        </div>
      </div>
    </div>
  );
}
