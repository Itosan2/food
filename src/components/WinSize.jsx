import React, { useEffect, useState, useRef } from "react";

export default function WinSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = Math.floor(entry.contentRect.width);
        // Do something with the width value
      }
    });

    observer.observe(containerRef.current);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <span id="win-width">Win: {windowWidth}px</span>
      <div id="con-width" ref={containerRef}></div>
    </div>
  );
}
