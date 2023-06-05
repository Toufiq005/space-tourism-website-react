import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import line from '../assets/line.png'
import navIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <nav className="flex items-center justify-between ">
      <a href="/">
        <img src={logo} alt="logo" className="logo p-5" />
      </a>
      <img src={line} className="hidden xl:block" />
      <div className="desk-navbar">
        <ul className="flex justify-center">
          <li>
            <a href="/">
              <strong className="mr-1">00</strong> HOME
            </a>
          </li>
          <li>
            <a href="/destination">
              <strong className="mr-1">01</strong> DESTINATION
            </a>
          </li>
          <li>
            <a href="/crew">
              <strong className="mr-1">02</strong> CREW
            </a>
          </li>
          <li>
            <a href="/technology">
              <strong className="mr-1">03</strong> TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
      <div className="tablet-navbar">
        <ul className="flex justify-center">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/destination">DESTINATION</a>
          </li>
          <li>
            <a href="/crew">CREW</a>
          </li>
          <li>
            <a href="/technology">TECHNOLOGY</a>
          </li>
        </ul>
      </div>
      <img
        src={navIcon}
        className="md:hidden"
        onClick={() => setActive(!isActive)}
      />
      <div className={`navBg ${isActive ? "block" : "hidden"}`}>
        <div onClick={() => setActive(!isActive)}>
          <img src={closeIcon} alt="closeIcon" className="closeIcon" />
        </div>
        <div className="text-white pt-32 pl-9">
          <a href="/" className="flex my-5">
            <strong>00</strong>
            <p className="mx-3">HOME</p>
          </a>
          <a href="/destination" className="flex my-5">
            <strong>01</strong>
            <p className="mx-3">DESTINATION</p>
          </a>
          <a href="/crew" className="flex my-5">
            <strong>02</strong>
            <p className="mx-3">CREW</p>
          </a>
          <a href="/technology" className="flex my-5">
            <strong>03</strong>
            <p className="mx-3">TECHNOLOGY</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
