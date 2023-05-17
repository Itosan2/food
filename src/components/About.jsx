import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  const [toggle, setToggle] = useState(false);
  const [hb2Open, setHb2Open] = useState(false);

  useEffect(() => {
    if (hb2Open) {
      document.querySelector(".sidebar-right").classList.add("open");
      document.querySelector(".hb2-box").classList.add("open");
    } else {
      document.querySelector(".sidebar-right").classList.remove("open");
      document.querySelector(".hb2-box").classList.remove("open");
    }
  }, [hb2Open]);

  function hb2Click(e) {
    setHb2Open(!hb2Open);
  }

  function handleClick(e) {}

  useEffect(() => {
    const childrens = document.querySelector(".hb-box").children;

    if (toggle) {
      document.querySelector(".sidebar-left").classList.add("open");
      document.querySelector(".hb-box").classList.add("active");
      Array.from(childrens).forEach((child) => {
        child.classList.remove("noAnimation");
      });
    } else {
      document.querySelector(".hb-box").classList.remove("active");
      document.querySelector(".sidebar-left").classList.remove("open");
    }
  }, [toggle]);

  function hbClick(e) {
    setToggle(!toggle);
  }

  return (
    <section className="about-section">
      <nav>
        <div className="hb-box" onClick={hbClick}>
          <div className="hb-ln1 noAnimation"></div>
          <div className="hb-ln2 noAnimation"></div>
          <div className="hb-ln3 noAnimation"></div>
        </div>
        <div className="hb2-box" onClick={hb2Click}>
          <div className="hb2"></div>
        </div>
      </nav>

      <div className="frame">
        {/* <nav className="about-navbar"></nav> */}
        <Outlet />
      </div>

      <div className="sidebar-left">
        <h2>Weekly Meals</h2>
        <ul>
          <NavLink to="monday" className="about-link-item">
            <li>Monday</li>
          </NavLink>
          <NavLink to="tues" className="about-link-item">
            <li>Tuesday</li>
          </NavLink>
          <NavLink to="weds" className="about-link-item">
            <li>Wednesday</li>
          </NavLink>
          <NavLink to="thur" className="about-link-item">
            <li>Thursday</li>
          </NavLink>
          <NavLink to="fri" className="about-link-item">
            <li>Friday</li>
          </NavLink>
          <NavLink to="meal" className="about-link-item">
            <li>Free n Easy</li>
          </NavLink>
        </ul>
      </div>

      <div className="sidebar-right">
        <h2>Daily Meals</h2>
        <ul>
          <NavLink to="bfast" className="about-link-item">
            <li>Breakfast</li>
          </NavLink>
          <NavLink to="lunch" className="about-link-item">
            <li>Lunch</li>
          </NavLink>
          <NavLink to="dinner" className="about-link-item">
            <li>Dinner</li>
          </NavLink>
          <li>Coffee break</li>
        </ul>
      </div>
    </section>
  );
}
