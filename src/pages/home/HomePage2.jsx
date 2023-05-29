import React, { useEffect, useRef, useState } from "react";
import imgAbacus from "../../assets/abacus2.png";
import "../../css/home.css";

const HomePage2 = () => {
  const scrollRef = useRef();
  const [elVisible, setElVisible] = useState();
  const [pageScroll, setPageScroll] = useState(true);
  const rootElement = document.getElementById("test");
  const [count, setCount] = useState(0);

  console.log("count", count);
  // useEffect(() => {
  //   if (count >= 25 && { pageScroll }) {
  //     scrollRef.current.scrollIntoView({ block: "start" });
  //     setPageScroll(false);
  //     // rootElement.scrollTo(0, 0);
  //   }
  // }, [count]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElVisible(entry.isIntersecting);

      // console.log("IntersectionRatio", entry.intersectionRatio);
    });
    observer.observe(scrollRef.current);
  }, [scrollRef]);

  console.log("scrollRef", scrollRef);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.target.innerText = `${Math.round(
          //   entry.intersectionRatio * 100
          // )}%`;
          setCount(entry.intersectionRatio * 100);
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(document.getElementById("test"));
  }, [scrollRef]);

  function scrollToTop() {
    console.log("scrollToTop - activated");
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function scrollToTop2() {
    console.log("scrollToTop2 - activated");
    rootElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="home-page2-container" ref={scrollRef}>
      <div className="page2-left-side">
        <h2>
          The Joys of <span> Home-Cooked Meals </span>: Nourishing Delights at
          Your Fingertips
        </h2>
        <p>
          There's something truly special about home-cooked meals. Beyond the
          tantalizing aromas and mouthwatering flavors, they evoke a sense of
          comfort, tradition, and love. In a fast-paced world filled with
          convenience foods and takeout options, home-cooked meals bring us back
          to the heart of the kitchen.
        </p>
      </div>
      <div className="page2-right-side">
        <div className="page2-img-wrapper">
          <img src={imgAbacus} alt="" />
        </div>
        <p>
          Hakka Taro (Yam) Abacus seeds [算盘子]. One of the many traditional
          Haka dishes.
        </p>
      </div>
    </div>
  );
};

export default HomePage2;
