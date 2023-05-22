import React, { useState } from "react";
import imgSoup1 from "../../assets/soup1.png";
import imgSoup3 from "../../assets/soup3.png";
import imgSoup4 from "../../assets/soup4.png";
import imgSoup5 from "../../assets/soup5.png";
import imgSoup6 from "../../assets/soup6.png";
import imgfish1 from "../../assets/fish1.png";

import "../../css/home.css";

export default function HomePage1() {
  const [isOpen, setIsOpen] = useState(false);
  function tabClick(e) {
    const homePage1 = document.querySelector(".home-page1");
    const homePage2 = document.querySelector(".home-page2");
    const homePage3 = document.querySelector(".home-page3");

    const tab1 = e.currentTarget.classList.contains("tab-1");
    const tab2 = e.currentTarget.classList.contains("tab-2");
    const tab3 = e.currentTarget.classList.contains("tab-3");

    if (tab1) {
      homePage1.classList.toggle("active");
    } else if (tab2) {
      homePage2.classList.toggle("active");
      if (homePage2.classList.contains("active")) {
        if (!homePage1.classList.contains("active")) {
          homePage1.classList.toggle("active");
        }
      }
    } else if (tab3) {
      homePage3.classList.toggle("active");
      if (homePage3.classList.contains("active")) {
        if (!homePage1.classList.contains("active")) {
          homePage1.classList.toggle("active");
        }
        if (!homePage2.classList.contains("active")) {
          homePage2.classList.toggle("active");
        }
      }
    }
  }
  return (
    <div className="home-pages">
      <div className="home-page1">
        <div className="left-side">
          <p>soup</p>
        </div>
        <div className="img-wrapper">
          <img src={imgSoup1} alt="" />
          <img src={imgSoup3} alt="" />
          <img src={imgSoup4} alt="" />
          <img src={imgSoup5} alt="" />
          <img src={imgSoup6} alt="" />
          <img src={imgfish1} alt="" />
        </div>
        <div className="tab-wrapper tab-1" onClick={tabClick}>
          <div className="tab-item1"></div>
          <div className="tab-item2"></div>
        </div>
      </div>

      <div className="home-page2">
        <div className="left-side left-side-page2">
          <p>meat</p>
        </div>
        <div className="img-wrapper">
          <img src={imgSoup1} alt="" />
          <img src={imgSoup3} alt="" />
          <img src={imgSoup4} alt="" />
          <img src={imgSoup5} alt="" />
          <img src={imgSoup6} alt="" />
          <img src={imgfish1} alt="" />
        </div>
        <div className="tab-wrapper tab-2" onClick={tabClick}>
          <div className="tab-item1"></div>
          <div className="tab-item2"></div>
        </div>
      </div>

      <div className="home-page3">
        <div className="left-side left-side-page3">
          <p>other</p>
        </div>
        <div className="img-wrapper">
          <img src={imgSoup1} alt="" />
          <img src={imgSoup3} alt="" />
          <img src={imgSoup4} alt="" />
          <img src={imgSoup5} alt="" />
          <img src={imgSoup6} alt="" />
          <img src={imgfish1} alt="" />
        </div>
        <div className="tab-wrapper tab-3" onClick={tabClick}>
          <div className="tab-item1"></div>
          <div className="tab-item2"></div>
        </div>
      </div>
    </div>
  );
}
