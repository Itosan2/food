import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
// import { GiFox } from "react-icons/gi";
import { GiSteak } from "react-icons/gi";
import { GiRoastChicken } from "react-icons/gi";
import { FaFish } from "react-icons/fa";
import { TbSoup } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { RiInformationLine } from "react-icons/ri";
import { easeOut, motion as m } from "framer-motion";

// import Model from "./menu/Model";

export default function MenuNavbar() {
  return (
    <div className="navbar-container">
      <NavLink to="/food/home">
        <m.div
          className="logo"
          whileHover={{ scale: 1.2 }}
          transition={{ delay: 0.25, duration: 0.3, ease: easeOut }}
        >
          <m.span
            className="logo-text1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: easeOut }}
          >
            ch
          </m.span>
          <span className="logo-text2">o</span>
          <span className="logo-text3">o</span>
          <span className="logo-text4">ng</span>
        </m.div>
      </NavLink>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            to="menupork"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            <GiSteak className="nav-icon" />
            <div className="link-text">PORK</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="menuchicken"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            <GiRoastChicken className="nav-icon" />
            <div className="link-text">CHICKEN</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="menuyong"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            <FaFish className="nav-icon" />
            <div className="link-text">YONG TAU FOO</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="menusoup"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            <TbSoup className="nav-icon" />
            <div className="link-text">SOUP</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="menufruit"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            <GiFruitBowl className="nav-icon" />
            <div className="link-text">FRUIT</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="menuchili"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
          >
            <RiInformationLine className="nav-icon" />
            <div className="link-text">IMPORTANT DISH</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
