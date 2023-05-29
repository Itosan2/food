import React, { useEffect, useRef, useState } from "react";
import "../../css/home.css";

const HomePage2 = () => {
  const scrollRef = useRef();
  const [elVisible, setElVisible] = useState();
  const rootElement = document.getElementById("test2");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElVisible(entry.isIntersecting);
    });
    setTimeout(() => {
      observer.observe(scrollRef.current);
    }, 100); // Delay the observer assignment by 100ms to ensure proper timing
    return () => {
      observer.disconnect();
    };
  }, [scrollRef]);

  console.log("scrollRef", scrollRef);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCount(entry.intersectionRatio * 100);
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(document.getElementById("test2"));
  }, []);

  const scrollToTop = useCallback(() => {
    console.log("scrollToTop - activated");
    setTimeout(() =>
      scrollRef.current.scrollIntoView(
        { behavior: "smooth", block: "start" },
        777
      )
    );
  }, []);

  console.log("count", count);
  useEffect(() => {
    if (count >= 25) {
      console.log("useEffect");
      scrollToTop();
    }
  }, [count, scrollToTop]);
  return (
    <div className="home-page2-container" id="test2" ref={scrollRef}>
      HomePage2
      <div>
        <p>this is page 2</p>
        <button onClick={scrollToTop}>click me</button>
      </div>
    </div>
  );
};

export default HomePage2;
